# Chinese Scholarship Agency (CSA) Website

This is a modern, full-stack website for the Chinese Scholarship Agency, built with Next.js 14, Supabase, and TailwindCSS.

## Features

- **Public Website**: Home, About, Services, Programs, Contact pages.
- **Authentication**: User registration and login (Email/Password & Magic Link) via Supabase Auth.
- **Application System**: Users can apply for programs, upload documents (transcripts, passport), and track status.
- **Payments**: Integrated Flutterwave for application fee payments.
- **Admin Dashboard**: Manage applications, view users, and payments.
- **Design System**: Modern, minimalistic UI with TailwindCSS, using Shadcn UI principles.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Forms**: React Hook Form + Zod
- **Payments**: Flutterwave
- **Icons**: Lucide React

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd csa
npm install
```

### 2. Setup Supabase

1. Create a new project at [Supabase](https://supabase.com).
2. Go to the SQL Editor and run the script located at `src/lib/schema.sql`. This will create the necessary tables and policies.
3. Enable Email Auth in Supabase Authentication settings.
4. (Optional) Create a storage bucket named `documents` for file uploads.

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

This project is optimized for deployment on Vercel.

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Add the Environment Variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in Vercel settings.
4. Deploy.

## Project Structure

- `src/app`: App Router pages and layouts.
  - `(public)`: Public facing pages (Home, About, etc).
  - `(dashboard)`: Protected dashboard pages (User & Admin).
  - `auth`: Authentication pages.
- `src/components`: Reusable UI components.
  - `ui`: Primitive components (Button, Input, Card, etc).
  - `layout`: Header, Footer, Sidebar.
  - `dashboard`: Dashboard specific components.
- `src/lib`: Utilities and Supabase client.

## Seed Data

To add initial programs, run the following SQL in Supabase:

```sql
insert into public.programs (title, school_name, level, duration, tuition_fee, description)
values 
('Computer Science', 'Tsinghua University', 'Bachelor', '4 Years', '30,000 RMB/year', 'Top ranked CS program.'),
('MBBS', 'Fudan University', 'Bachelor', '6 Years', '45,000 RMB/year', 'English taught medical program.'),
('International Business', 'Peking University', 'Masters', '2 Years', '60,000 RMB/year', 'Prestigious business degree.');
```
