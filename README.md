# Quick Hire — Job Board

A modern, full-stack job board built with **Next.js 16**, **React 19**, and **Tailwind CSS**. Browse jobs, search by title or location, filter by category, and apply with a simple form — all backed by a live API.

---

## ✨ Features

### 🏠 Home Page

- **Hero banner & job search**  
  From the main banner you can search jobs by **job title/keyword** and **location**. Submit the form to go to the Jobs page with your search and location pre-filled (e.g. `/jobs?search=designer&location=Paris`).

- **Explore by category**  
  The “Explore category” section has 8 categories (Design, Sales, Marketing, Finance, Technology, Engineering, Business, Human Resource). **Clicking a category** takes you to the Jobs page with that category filter applied (e.g. `/jobs?category=Design`), so you only see jobs in that category.

- **Featured jobs**  
  Grid of featured job cards with company images (`Fjob1.png`–`Fjob8.png`), title, company, location, and tags.

- **Latest jobs**  
  List of latest openings with a subtle angled white background on the top-left for visual depth.

- **Call to action**  
  Section encouraging users to discover more jobs.

- **Company logos**  
  Marquee of company logos for social proof.

### 📋 Jobs Page (`/jobs`)

- **Search**  
  Search by job title or company name.
- **Filters**  
  Filter by **category** (dropdown) and **location** (text input). Category and location can also be set from the home page (banner search and category links).
- **Pagination**  
  Navigate through pages of results.
- **Job cards**  
  Each card shows key details and links to the job detail page.

### 📄 Job Detail Page (`/jobs/[id]`)

- Full job description (summary + full description).
- **Apply form**  
  Apply with **name**, **email**, **resume URL**, and **cover note**. Validation with Zod; submissions are sent to the backend. Success/error feedback via toast.

### 🔧 Admin Page (`/admin`)

- List all jobs with pagination.
- **Create job**  
  Add new jobs (title, company, location, category, descriptions).
- **Delete job**  
  Remove jobs from the list.
- Dialog and form UI for creating/editing and confirming actions.

---

## 🛠 Tech Stack

| Area        | Tech |
|------------|------|
| Framework  | Next.js 16 (App Router) |
| UI         | React 19, Tailwind CSS 4 |
| State/API  | Redux Toolkit (RTK Query) |
| Forms      | React Hook Form, Zod |
| UI parts   | Radix UI, Framer Motion, Lucide icons |
| Fonts      | Next.js font optimization |

---

## 📁 Project structure (high level)

```
├── app/
│   ├── (home)/           # Landing: Intro, Categories, Featured/Latest jobs, CTA
│   ├── jobs/             # Jobs list & job detail + apply form
│   └── admin/            # Admin job list, create, delete
├── components/           # Shared UI (Pagination, FadeInSection, ScrollToTop, etc.)
├── lib/
│   ├── api/             # baseApi, jobsApi, applicationsApi (RTK Query)
│   ├── constants.ts     # JOB_CATEGORIES, etc.
│   ├── types.ts         # Job, application types
│   └── store.ts         # Redux store
└── public/              # Images (e.g. Fjob1–8, job logos, Pic.png, Pattern.svg)
```

---

## 🚀 How to run the project

### 1. Clone and install

```bash
git clone <your-repo-url>
cd quick-hire-assessment
npm install
```

### 2. Environment variable

Create a `.env` or `.env.local` in the **project root** and set the API base URL:

```env
NEXT_PUBLIC_BASE_URL=https://quick-hire-assessment-backend.vercel.app/api
```

- The app uses this for all job and application API calls.
- No trailing slash needed; the code normalizes it.

### 3. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

---

## 📌 Quick feature summary

| Feature | Where | What it does |
|--------|--------|----------------|
| **Banner job search** | Home → Hero | Search by title + location → redirects to `/jobs?search=...&location=...` |
| **Category filter** | Home → Explore category | Click a category → `/jobs?category=...` with that category applied |
| **Jobs list** | `/jobs` | Search, filter by category/location, pagination, link to detail |
| **Job detail** | `/jobs/[id]` | Full description + apply form (name, email, resume URL, cover note) |
| **Admin** | `/admin` | List, create, and delete jobs (uses same API) |

---

## 📄 License

Private / assessment project.
