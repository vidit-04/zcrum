<h1 align="center">🚀 Zcrum - Project Management Platform</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-Auth-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Neon-Postgres-00f?style=for-the-badge" />
</p>

<p align="center">An all-in-one collaborative platform for efficient project and team management 🧑‍💻⚡️ — built using modern web technologies.</p>
<p align="center">
  <img width="1470" alt="Screenshot 2024-12-10 at 9 45 45 AM" src="https://github.com/user-attachments/assets/783d4f3b-925d-44cf-aaf8-4ee4035b2f6c">
</p>

---

## 🌍 Live Demo

🔗 **Deployed at:** [Zcrum Deployment Link](https://zcrum-orpin.vercel.app/)

---

## ✨ Features Overview

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTZzN2Q2cDZ6bmVnbXByNzc5aXdrbnNxYjZkNXV1ZGdzMWkxZ3lrOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IPWXYMP4t2ODvzwOYk/giphy.gif" alt="Duck Thinking GIF" width="60%" />
</p>

- 🔐 **Google Auth via Clerk**  
  Provides secure, seamless authentication using Google, reducing the friction of onboarding new users and leveraging a trusted provider.

- 🏢 **Organization creation & member invitation via Gmail**  
  Admins can quickly set up teams and invite members through Gmail, making it fast and intuitive to build collaborative spaces.

- 🗂️ **Project creation (Admin only)**  
  Ensures projects are organized and governed under admin control, keeping workflows structured and reducing clutter from unauthorized project creation.

- 🧑‍🤝‍🧑 **Sprint creation by Members/Admin; start by Admin only**  
  Encourages collaborative planning with members proposing sprints, while keeping control over starting them to maintain structured timelines.

- 🐞 **Issue creation with priorities: `Urgent`, `High`, `Medium`, `Low`**  
  Helps team members categorize tasks based on urgency, making backlog grooming and daily work prioritization clear and effective.

- 📝 **Markdown Editor for rich issue descriptions**  
  Provides a flexible editor to format descriptions, making bug reports and feature requests clearer and easier to read.

- 👥 **Assign issues to any org member/admin**  
  Allows direct accountability by letting any issue be assigned to relevant team members, ensuring nothing falls through the cracks.

- 📋 **View issues assigned/raised by a user**  
  Empowers team members to track their personal contributions and understand current workload at a glance.

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eTFsdnNhZjdibGw4bmxudTQxcHZ2NjY5M2NoOXVxY3lldWkwc3dxOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uhXxGTTyBfKk7iBU40/giphy.gif" alt="Robot Typing Fast GIF" width="60%" />
</p>

---
## 🖼️ Demo Walkthrough

Explore how each feature makes project and team management seamless and efficient:

---

### 🔐 Authentication (Google Sign In / Sign Up)

Users can securely sign up and sign in using their Google accounts. This removes the friction of creating and remembering new credentials, and offers a trusted authentication experience that integrates seamlessly with their existing workflow.

---

### 🏢 Create Organization & Invite Members via Gmail

Admins have the ability to create organizations within the platform, laying the foundation for collaborative workspaces. Once created, admins can invite members via Gmail directly from the app, ensuring quick onboarding of team members with minimal setup or manual steps.

---

### 📂 Project Creation (Admin Only)

Only admins can create projects within the organization, allowing centralized control and accountability. This ensures projects align with organizational goals, and keeps the project structure clean and well-managed from the start.

---

### 📆 Sprint Creation (Members & Admins)

Both admins and members can create sprints, which define work periods with specific goals and timelines. Admins have the final say in starting sprints, ensuring coordinated progress. This structure helps teams focus on smaller, achievable milestones rather than getting overwhelmed by the broader project scope.

---

### 🐞 Raise Issues with Priorities

Team members can raise issues under projects, tagging them with priority levels such as Urgent, High, Medium, or Low. This helps everyone understand what needs immediate attention and which tasks can be tackled next, allowing better planning and smoother workflows.

---

### 📝 Markdown Editor for Issue Description

A built-in markdown editor allows rich text formatting of issue descriptions. Users can add headings, lists, code snippets, or highlight important details, making it easier to convey the context and requirements of each issue clearly and professionally.

---

### 👥 Assign Issues to Any Member

Admins and members can assign issues to anyone within the organization. This promotes clarity and accountability in the team, ensuring each task has an owner and reducing confusion over responsibilities.

---

### 🔍 View Assigned / Raised Issues

Every user can view the issues they have raised or those assigned to them, neatly organized in dedicated sections. This transparency helps each team member prioritize their tasks, track progress, and ensure no important work falls through the cracks.

---


---

## 🛠️ Tech Stack

| Tech                  | Role                                 |
|-----------------------|--------------------------------------|
| **Next.js**           | Frontend & Server                    |
| **Clerk**             | Authentication with Google OAuth     |
| **Prisma**            | ORM for PostgreSQL                   |
| **NeonDB**            | Serverless PostgreSQL DB             |
| **Tailwind CSS**      | UI Styling                           |
| **React Markdown Editor** | Rich Text Support for Issues    |

---

## 🧠 Thought Behind Zcrum

Zcrum is tailored for modern teams looking for smooth task & sprint management. It blends intuitive UI with role-specific actions to boost team productivity, tracking, and collaboration.

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/zcrum.git
cd zcrum

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# Fill in Clerk keys, Neon DB URL, etc.

# 4. Run locally
npm run dev
