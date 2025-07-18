"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function createProject(data) {
  const { userId  } = await auth();
  const orgId = data.orgId;
  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!orgId) {
    throw new Error("No Organization Selected");
  }

  // Check if the user is an admin of the organization
  const { data: membershipList } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: orgId
    });

  const userMembership = membershipList.find(
    (membership) => membership.publicUserData.userId === userId
  );

  if (!userMembership || userMembership.role !== "org:admin") {
    throw new Error("Only organization admins can create projects");
  }

  try {
    const project = await db.project.create({
      data: {
        name: data.name,
        key: data.key,
        description: data.description,
        organizationId: orgId,
      },
    });

    return project;
  } catch (error) {
    throw new Error("Error creating project: " + error.message);
  }
}

export async function getProjects(orgId) {
  const { userId } = await auth();

  if (!userId ) {
    throw new Error("Unauthorized");
  }

  // Find user to verify existence
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Get project with sprints and organization
  const projects = await db.project.findMany({
    where: { organizationId: orgId },
    orderBy: { createdAt: "desc" },
  });

  // if (!project) {
  //   throw new Error("Project not found");
  // }

  // // Verify project belongs to the organization
  // if (project.organizationId !== orgId) {
  //   return null;
  // }

  return projects;
}

export async function deleteProject(projectId) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Get the project and its organization
  const project = await db.project.findUnique({
    where: { id: projectId },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  const orgId = project.organizationId;

  // Check if the user is an admin of this organization
  const { data: membershipList } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: orgId,
    });

  const userMembership = membershipList.find(
    (membership) => membership.publicUserData.userId === userId
  );

  if (!userMembership || userMembership.role !== "org:admin") {
    throw new Error("Only organization admins can delete projects");
  }

  await db.project.delete({
    where: { id: projectId },
  });

  return { success: true };
}

export async function   getProject(projectId) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  
  const user=await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const project = await db.project.findUnique({
    where: { id: projectId },
    include: {
      sprints: {
        orderBy: { createdAt: "desc" },
      }
    },
  });
  if (!project) {
    return null;
  }
  const { data: membershipList } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: project.organizationId,
    });

  const userMembership = membershipList.find(
    (membership) => membership.publicUserData.userId === userId
  );

  if (!userMembership) {
    throw new Error("You do not have access to this project");
  }

  return project;
}