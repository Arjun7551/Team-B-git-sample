# Vedic Encyclopedia System

Full-Stack Web Application for ISKCON Sanjeevani IT Cell

## Overview

The Vedic Encyclopedia System is a full-stack content management platform developed for **ISKCON Sanjeevani IT Cell** to manage, organize, and publish structured Vedic articles.

The system provides secure admin authentication, categorized article management, and controlled publishing workflows with role-based database-level security.

---

## Key Features

### Admin Authentication

* Secure login system using Supabase Authentication
* Protected admin dashboard routes

### Category & Article Management

* Create, edit, delete categories
* Full CRUD operations for articles
* Relational database structure (Category → Articles)

### Draft & Publish Workflow

* Articles stored with status control (`draft` / `published`)
* Only published articles are visible on the public interface

### Role-Based Access Control

* Implemented Supabase Row Level Security (RLS)
* Restricted article creation, editing, and deletion to authorized admins
* Enforced access policies at database level

### Responsive UI

* Built using Next.js App Router
* Styled with Tailwind CSS
* Optimized for structured content readability

---

## Tech Stack

**Frontend**

* Next.js (App Router)
* React
* Tailwind CSS

**Backend**

* Supabase (PostgreSQL)
* Supabase Authentication
* Row Level Security (RLS)

**Deployment**

* Vercel

---

## Database Design

The application uses PostgreSQL via Supabase with the following schema:

### `articles`

* `id` (uuid, primary key)
* `title` (text)
* `content` (text)
* `category_id` (uuid, foreign key → categories.id)
* `created_at` (timestamptz)
* `status` (text)

### `categories`

* `id` (uuid, primary key)
* `name` (text)
* `created_at` (timestamptz)
* `description` (text)
* `image` (text)

### `admins`

* `id` (uuid, primary key)
* `email` (text)
* `created_at` (timestamptz)

### Relationships

* One category can have multiple articles
* Each article belongs to one category via `category_id`
* Admins are authenticated users allowed to manage content

---

## Security Implementation

* Supabase Auth for admin login
* Protected frontend routes
* Database-level Row Level Security policies for:

  * SELECT
  * INSERT
  * UPDATE
  * DELETE

All sensitive access control is enforced at the database layer.

---

## Deployment

Live Project:
[https://team-b-iskcon-vedic-encyclopedia.vercel.app/](https://team-b-iskcon-vedic-encyclopedia.vercel.app/)

---

## Learning Outcomes

* Relational schema design with foreign keys
* Implementing Row Level Security policies
* Secure authentication workflows
* Full-stack collaboration in a production-style project
* Deployment using Vercel
