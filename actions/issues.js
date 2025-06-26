"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getIssuesForSprint(sprintId) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Fetch the sprint and its project to get organizationId
  const sprint = await db.sprint.findUnique({
    where: { id: sprintId },
    include: { project: true },
  });
  if (!sprint || !sprint.project) {
    throw new Error("Sprint or project not found");
  }

  // Check org membership
  const { data: membershipList } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: sprint.project.organizationId,
    });
  const userMembership = membershipList.find(
    (membership) => membership.publicUserData.userId === userId
  );
  if (!userMembership) {
    throw new Error("You do not have access to this organization");
  }

  const issues = await db.issue.findMany({
    where: { sprintId: sprintId },
    orderBy: [{ status: "asc" }, { order: "asc" }],
    include: {
      assignee: true,
      reporter: true,
    },
  });

  return issues;
}

export async function createIssue(projectId, data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Fetch project to get orgId
  const project = await db.project.findUnique({
    where: { id: projectId },
  });
  if (!project) throw new Error("Project not found");

  // Check org membership
  const { data: membershipList } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: project.organizationId,
    });
  const userMembership = membershipList.find(
    (membership) => membership.publicUserData.userId === userId
  );
  if (!userMembership) throw new Error("You do not have access to this organization");

  let user = await db.user.findUnique({ where: { clerkUserId: userId } });

  const lastIssue = await db.issue.findFirst({
    where: { projectId, status: data.status },
    orderBy: { order: "desc" },
  });

  const newOrder = lastIssue ? lastIssue.order + 1 : 0;

  const issue = await db.issue.create({
    data: {
      title: data.title,
      description: data.description,
      status: data.status,
      priority: data.priority,
      projectId: projectId,
      sprintId: data.sprintId,
      reporterId: user.id,
      assigneeId: data.assigneeId || null,
      order: newOrder,
    },
    include: {
      assignee: true,
      reporter: true,
    },
  });

  return issue;
}

export async function updateIssueOrder(updatedIssues) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Assume all issues are from the same project
  const firstIssue = updatedIssues[0];
  const project = await db.project.findUnique({
    where: { id: firstIssue.projectId },
  });
  if (!project) throw new Error("Project not found");

  // Check org membership
  const { data: membershipList } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: project.organizationId,
    });
  const userMembership = membershipList.find(
    (membership) => membership.publicUserData.userId === userId
  );
  if (!userMembership) throw new Error("You do not have access to this organization");

  // Start a transaction
  await db.$transaction(async (prisma) => {
    for (const issue of updatedIssues) {
      await prisma.issue.update({
        where: { id: issue.id },
        data: {
          status: issue.status,
          order: issue.order,
        },
      });
    }
  });

  return { success: true };
}
export async function deleteIssue(issueId) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const issue = await db.issue.findUnique({
    where: { id: issueId },
    include: { project: true },
  });

  if (!issue) {
    throw new Error("Issue not found");
  }

  // Check org membership using Clerk and the project's organizationId
  const { data: membershipList } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: issue.project.organizationId,
    });
  const userMembership = membershipList.find(
    (membership) => membership.publicUserData.userId === userId
  );
  if (!userMembership) {
    throw new Error("You do not have access to this organization");
  }

  // Optionally, check if user is reporter or admin
  if (
    issue.reporterId !== user.id &&
    !(issue.project.adminIds && issue.project.adminIds.includes(user.id))
  ) {
    throw new Error("You don't have permission to delete this issue");
  }

  await db.issue.delete({ where: { id: issueId } });

  return { success: true };
}

export async function updateIssue(issueId, data) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const issue = await db.issue.findUnique({
      where: { id: issueId },
      include: { project: true },
    });

    if (!issue) {
      throw new Error("Issue not found");
    }

    // Check org membership using Clerk and the project's organizationId
    const { data: membershipList } =
      await clerkClient().organizations.getOrganizationMembershipList({
        organizationId: issue.project.organizationId,
      });
    const userMembership = membershipList.find(
      (membership) => membership.publicUserData.userId === userId
    );
    if (!userMembership) {
      throw new Error("You do not have access to this organization");
    }

    const updatedIssue = await db.issue.update({
      where: { id: issueId },
      data: {
        status: data.status,
        priority: data.priority,
      },
      include: {
        assignee: true,
        reporter: true,
      },
    });

    return updatedIssue;
  } catch (error) {
    throw new Error("Error updating issue: " + error.message);
  }
}

export async function getUserIssues() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) {
    throw new Error("User not found");
  }

  // Get all org memberships for this user
  const { data: memberships } = await clerkClient().users.getOrganizationMembershipList({ userId });
  const orgIds = memberships.map(m => m.organization.id);

  // Find issues where user is assignee or reporter and project is in user's orgs
  const issues = await db.issue.findMany({
    where: {
      OR: [{ assigneeId: user.id }, { reporterId: user.id }],
      project: {
        organizationId: { in: orgIds },
      },
    },
    include: {
      assignee: true,
      reporter: true,
      project: true,
    },
    orderBy: { updatedAt: "desc" },
  });
  return issues;
}