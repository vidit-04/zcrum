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

🔗 **Deployed at:** [Zcrum Deployment Link](https://your-deployment-link.com)

---

## ✨ Features Overview

- 🔐 Google Auth via Clerk (Sign In / Sign Up)
- 🏢 Organization creation & member invitation via Gmail
- 🗂️ Project creation (Admin only)
- 🧑‍🤝‍🧑 Sprint creation by Members/Admin; start by Admin only
- 🐞 Issue creation with priorities: `Urgent`, `High`, `Medium`, `Low`
- 📝 Markdown Editor for rich issue descriptions
- 👥 Assign issues to any org member/admin
- 📋 View issues assigned/raised by a user

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

| Tech            | Role                                |
|-----------------|-------------------------------------|
| **Next.js**     | Frontend & Server                   |
| **Clerk**       | Authentication with Google OAuth    |
| **Prisma**      | ORM for PostgreSQL                  |
| **NeonDB**      | Serverless PostgreSQL DB            |
| **Tailwind CSS**| UI Styling                          |
| **React Markdown Editor** | For issue content input   |

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
