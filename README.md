<h1 align="center">🚀 Zcrum - Project Management Platform</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-Auth-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Neon-Postgres-00f?style=for-the-badge" />
</p>

<p align="center">An all-in-one collaborative platform for efficient project and team management 🧑‍💻⚡️ — built using modern web technologies.</p>
![image](https://github.com/user-attachments/assets/783d4f3b-925d-44cf-aaf8-4ee4035b2f6c)
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
