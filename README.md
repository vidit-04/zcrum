<h1 align="center">🚀 Zcrum - Project Management Platform</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-Auth-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Neon-Postgres-00f?style=for-the-badge" />
</p>

<p align="center">An all-in-one collaborative platform for efficient project and team management 🧑‍💻⚡️ — built using modern web technologies.</p>

---

## 🌍 Live Demo

🔗 **Deployed at:** [Zcrum Deployment Link](https://zcrum-orpin.vercel.app/)

---

## ✨ Features Overview

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTZzN2Q2cDZ6bmVnbXByNzc5aXdrbnNxYjZkNXV1ZGdzMWkxZ3lrOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IPWXYMP4t2ODvzwOYk/giphy.gif" alt="Duck Thinking GIF" width="60%" />
</p>

- 🔐 **Google Auth via Clerk**  
  Users can sign in or sign up using their Google account securely via Clerk, streamlining the onboarding process.

- 🏢 **Organization creation & member invitation via Gmail**  
  Admins can create organizations and invite collaborators via Gmail, making team setup quick and collaborative.

- 🗂️ **Project creation (Admin only)**  
  Only admins can create projects to ensure centralized control over major workflows.

- 🧑‍🤝‍🧑 **Sprint creation by Members/Admin; start by Admin only**  
  Members can propose sprints, but only Admins can start them, giving authority while encouraging contribution.

- 🐞 **Issue creation with priorities: `Urgent`, `High`, `Medium`, `Low`**  
  Users can log issues with clear priority labels for effective triage and task handling.

- 📝 **Markdown Editor for rich issue descriptions**  
  Enables formatting of issue content for clarity using a markdown-powered editor.

- 👥 **Assign issues to any org member/admin**  
  Ensures task distribution is flexible and transparent within the team.

- 📋 **View issues assigned/raised by a user**  
  Makes it easy to track contributions and current responsibilities across the platform.

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eTFsdnNhZjdibGw4bmxudTQxcHZ2NjY5M2NoOXVxY3lldWkwc3dxOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uhXxGTTyBfKk7iBU40/giphy.gif" alt="Robot Typing Fast GIF" width="60%" />
</p>

---

## 🖼️ Demo Walkthrough

### 🔐 Authentication (Google Sign In / Sign Up)

<p align="center">
  <img src="https://your-gif-link.com/auth-flow.gif" alt="Auth GIF" width="80%" />
</p>

---

### 🏢 Create Organization & Invite Members via Gmail

<p align="center">
  <img src="https://your-gif-link.com/invite-members.gif" alt="Invite Members GIF" width="80%" />
</p>

---

### 📂 Project Creation (Admin Only)

<p align="center">
  <img src="https://your-gif-link.com/create-project.gif" alt="Create Project GIF" width="80%" />
</p>

---

### 📆 Sprint Creation (Members & Admins)

<p align="center">
  <img src="https://your-gif-link.com/sprint-creation.gif" alt="Sprint Creation GIF" width="80%" />
</p>

---

### 🐞 Raise Issues with Priorities

<p align="center">
  <img src="https://your-gif-link.com/issue-creation.gif" alt="Issue Creation GIF" width="80%" />
</p>

---

### 📝 Markdown Editor for Issue Description

<p align="center">
  <img src="https://your-gif-link.com/md-editor.gif" alt="Markdown Editor GIF" width="80%" />
</p>

---

### 👥 Assign Issues to Any Member

<p align="center">
  <img src="https://your-gif-link.com/assign-issues.gif" alt="Assign Issues GIF" width="80%" />
</p>

---

### 🔍 View Assigned / Raised Issues

<p align="center">
  <img src="https://your-gif-link.com/view-issues.gif" alt="View Issues GIF" width="80%" />
</p>

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
