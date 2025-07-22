# 💰 AI Finance Platform - Manage Your Finances with Intelligence

An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.

<img width="855" height="2038" alt="image" src="https://github.com/user-attachments/assets/c2661577-1bd7-4f40-8161-51257bb44428" />


---

## 🚀 Features

- 📊 **Advanced Analytics** – Gain insights into your spending patterns using AI.
- 🧾 **Smart Receipt Scanner** – Auto-extract data from receipts.
- 📅 **Budget Planning** – Create/manage budgets with intelligent suggestions.
- 💳 **Multi-Account Support** – Manage all your bank accounts in one place.
- 🌍 **Multi-Currency Support** – Track finances across currencies in real-time.
- ⚡ **Automated Insights** – Get real-time recommendations using AI.

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **Supabase** (PostgreSQL + Auth)
- **Prisma ORM**
- **Tailwind CSS**
- **Clerk Auth**
- **Inngest** (Background Jobs)
- **ArcJet** (Security Layer)
- **Shadcn UI** (Beautiful UI components)
- **Google Generative AI (Gemini)**

---



## 🧪 Environment Variables (`.env`)

Make sure to create a `.env` file in the root with the following variables:

```env
# Database
DATABASE_URL=
DIRECT_URL=

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI
GEMINI_API_KEY=
