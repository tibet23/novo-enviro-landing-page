# Novo Enviro

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](#license)

> **Where Capital Meets Climate Integrity.**  
> Institutional climate finance consultancy developing high-integrity carbon reduction and carbon removal projects, and internationally certified plastic credit solutions. Regional hubs in **Sofia, Bulgaria** and **Istanbul, Türkiye**.

---

## Table of Contents

- [Overview](#overview)
- [Key Features & Modules](#key-features--modules)
  - [1. Institutional Home & Credibility](#1-institutional-home--credibility)
  - [2. Carbon Credits & The 6 Pillars](#2-carbon-credits--the-6-pillars)
  - [3. Plastic Credits & Recycling Advisory](#3-plastic-credits--recycling-advisory)
  - [4. Interactive Consultation Booking System](#4-interactive-consultation-booking-system)
  - [5. Institutional Contact & Inquiries](#5-institutional-contact--inquiries)
  - [6. Careers & Talent Pipeline](#6-careers--talent-pipeline)
  - [7. Regulatory Compliance & Privacy](#7-regulatory-compliance--privacy)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running the Development Server](#running-the-development-server)
- [Available Scripts](#available-scripts)
- [Design System & Brand Assets](#design-system--brand-assets)
- [Deployment](#deployment)
- [Offices & Contact](#offices--contact)
- [License](#license)

---

## Overview

**Novo Enviro** bridges the gap between institutional capital and verified environmental action. The web platform serves project developers, industrial operators, plastic aggregators, and institutional investors seeking independently validated environmental credits across global carbon and plastic crediting standards.

### Core Focus Areas:
- **Carbon Project Development**: End-to-end origination, additionality screening, PDD drafting, validation, and registry issuance under **Verra (VCS)**, **Gold Standard**, and **PPRS**.
- **Plastic Credit Advisory**: Feasibility, chain-of-custody protocols, and certification under the **Verra Plastic Standard** for recyclers and collection initiatives toward a collective target of **100,000,000 kg** of certified plastic credits.
- **Institutional Advisory**: Portfolio decarbonization, regulatory positioning (EU ETS, CBAM), and bilateral credit off-take agreements.

---

## Key Features & Modules

### 1. Institutional Home & Credibility
- **Asymmetric Editorial Layout**: High-impact typographic hierarchy combining modern editorial serif headlines with clean, monospaced and sans-serif technical data points.
- **Institutional Metrics Panel**: Displays verified achievements, international standards covered, and operating hubs since 2019.
- **Official Brand Mark Integration**: High-definition vectorized brand marks seamlessly embedded in navigation and footer across light and dark backgrounds.

### 2. Carbon Credits & The 6 Pillars (`/carbon-credits`)
- **Comprehensive Project Typologies**: Renewable Energy, Energy Efficiency, Regenerative Agriculture, Afforestation/Forestry, Waste Management & Methane Abatement, and Industrial Fuel Switching.
- **The Six Non-Negotiable Pillars**:
  1. *Verifiability* (Ex-post empirical evidence and traceable data)
  2. *Additionality* (Financial and regulatory hurdle validation)
  3. *Permanence & Buffer Pools* (Durability safeguards and non-permanence risk assessments)
  4. *Leakage Mitigation* (Activity-shifting and market leakage boundary controls)
  5. *Independent VVB Audit* (Accredited third-party verification)
  6. *Registry Transparency* (Serialization and retirement tracking without double-counting)

### 3. Plastic Credits & Recycling Advisory (`/plastic-credits`)
- **Roadmap from Waste to Worth**: 4-stage certification lifecycle (Feasibility & Scoping $\rightarrow$ Certification Support $\rightarrow$ Monitoring & Reporting $\rightarrow$ Verification & Market Access).
- **Core Certification Criteria**: Sound environmental processing, additionality, uncontested single ownership, and social baseline safeguards.
- **The 100M kg Mission**: Dedicated initiative uniting corporate off-takers with certified plastic recyclers across Europe and the Middle East.

### 4. Interactive Consultation Booking System (`/contact`)
- **Self-Contained Client-Side Scheduler** (`components/CalendarBooking.tsx`):
  - **Meeting Typology Selection**: Institutional Climate Briefing (30m), Carbon Project Scoping (45m), or Plastic Credit Advisory (45m).
  - **Global Timezone Converter**: Sofia (EET), Istanbul (TRT), London (GMT), Brussels (CET), and New York (EST).
  - **Dynamic Slot Availability**: Selectable dates with validation rules preventing past-date selection or weekend bookings.
  - **Direct `.ics` iCalendar Export**: Generates and downloads RFC-5545 compliant `.ics` calendar events directly in the browser with no third-party booking dependencies.

### 5. Institutional Contact & Inquiries (`/contact`)
- **Structured Contact Pipeline** (`components/ContactForm.tsx`): Client-side form with real-time feedback, service routing options, and responsive success states.
- **Regional Hub Details**: Direct address coordinates and contact channels for offices in Sofia and Istanbul.

### 6. Careers & Talent Pipeline (`/careers`)
- **Talent Network**: Spontaneous application portal for carbon accountants, accredited VVB auditors, and lifecycle analysts.

### 7. Regulatory Compliance & Privacy (`/privacy-policy`)
- **Cookie Consent Banner** (`components/CookieBanner.tsx`): Compliant, lightweight banner with persistent user consent storage.
- **Comprehensive Privacy Notice**: GDPR and KVKK aligned privacy terms covering data protection rights and direct DPO contact.

---

## Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) | App Router architecture, Server Components, dynamic streaming |
| **Runtime** | [Node.js 20+ / 22+](https://nodejs.org/) | Modern JavaScript runtime |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) | Strict type safety and compile-time verification |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first styling with `@tailwindcss/postcss` |
| **Typography** | Google Fonts | Fraunces (Editorial Serif), Plus Jakarta Sans, JetBrains Mono |
| **Motion** | [Motion (Framer)](https://motion.dev/) | Smooth route transitions and micro-interactions |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, accessible SVG iconography |
| **AI Integration** | [@google/genai](https://www.npmjs.com/package/@google/genai) | Official Google GenAI SDK ready for server-side intelligence |
| **Linting** | ESLint 9 | Next.js core-web-vitals and TypeScript lint rules |

---

## Project Structure

```
novo-enviro/
├── app/
│   ├── carbon-credits/       # Carbon credits project development & 6 pillars
│   │   └── page.tsx
│   ├── careers/              # Careers & spontaneous applications
│   │   └── page.tsx
│   ├── contact/              # Interactive booking engine & contact forms
│   │   └── page.tsx
│   ├── plastic-credits/      # Plastic credit certification roadmap & 100M kg goal
│   │   └── page.tsx
│   ├── privacy-policy/       # GDPR/KVKK compliance & data privacy policy
│   │   └── page.tsx
│   ├── privacy/              # Privacy policy redirect/alias
│   │   └── page.tsx
│   ├── globals.css           # Tailwind CSS v4 directives & font imports
│   ├── layout.tsx            # Root layout, metadata, SEO open-graph & fonts
│   └── page.tsx              # Institutional landing page
├── components/
│   ├── CalendarBooking.tsx   # Interactive consultation booking & .ics generator
│   ├── ContactForm.tsx       # Institutional inquiry form
│   ├── CookieBanner.tsx      # Persistent GDPR cookie consent banner
│   ├── Footer.tsx            # Global footer with brand mark & office locations
│   └── Navbar.tsx            # Responsive navigation bar with official logo
├── lib/
│   └── utils.ts              # Class merging (clsx + tailwind-merge) utilities
├── public/
│   ├── assets/               # Supporting static graphics & project documentation
│   └── images/               # High-res logos, icons, and environmental imagery
│       ├── logo.png          # Primary horizontal logo (teal typography on transparent)
│       ├── logo-white.png    # High-contrast logo (white typography for dark backdrops)
│       └── icon.png          # Square leaf emblem favicon & app icon
├── .env.example              # Environment variables template
├── eslint.config.mjs         # ESLint configuration
├── metadata.json             # Application metadata and platform capabilities
├── next.config.ts            # Next.js configuration (remote image patterns, optimizations)
├── package.json              # Project dependencies and operational scripts
├── postcss.config.mjs        # PostCSS configuration with @tailwindcss/postcss
└── tsconfig.json             # TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites

Ensure your development environment meets the following requirements:
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **Package Manager**: `npm` (v10+), `yarn`, `pnpm`, or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/novo-enviro.git
   cd novo-enviro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Environment Configuration

Copy the example environment configuration file to create your local environment file:

```bash
cp .env.example .env.local
```

Configure any required environment variables in `.env.local`:

```env
# Optional: Required if integrating server-side Gemini intelligence
GEMINI_API_KEY="your-gemini-api-key"

# Optional: Host URL for absolute canonical metadata links
APP_URL="http://localhost:3000"
```

### Running the Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## Available Scripts

In the project root, you can execute:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server with hot-reloading |
| `npm run build` | Compiles the production build with asset optimization |
| `npm run start` | Boots the compiled production server on port 3000 |
| `npm run lint` | Runs ESLint across the codebase to catch potential defects |
| `npm run clean` | Cleans the `.next` build cache |

---

## Design System & Brand Assets

The user interface follows an **institutional, high-contrast, editorial design language** tailored for European climate finance and corporate sustainability:

- **Typography**:
  - *Headlines & Quotes*: **Fraunces** — Variable optical serif with crisp editorial presence.
  - *Body Copy & Interface*: **Plus Jakarta Sans** — Geometric, clean, and legible at all screen densities.
  - *Data, Metrics & Badges*: **JetBrains Mono** — Technical monospaced font for numbers, dates, and standards.
- **Color Palette**:
  - `Canvas Dark`: `#212121` (High-contrast typography and prominent buttons)
  - `Accent Teal`: `#618e97` / `#74a4ac` (Sustainable finance accent and brand identity)
  - `Warm Gray/Border`: `#dee4e5` (Crisp container borders and subtle dividers)
  - `Off-White Backdrop`: `#f7f9fa` (Layered surfaces for metric blocks and cards)
  - `Canvas Light`: `#ffffff` (Primary background ensuring AA/AAA contrast)
- **Brand Assets (`/public/images/`)**:
  - `logo.png`: Full horizontal brand mark (Leaf Emblem + "NOVO ENVIRO") for light headers.
  - `logo-white.png`: Full horizontal brand mark with white text for dark footers.
  - `icon.png`: Cropped circular leaf emblem used as favicon and app bookmark icon.

---

## Deployment

### Vercel (Recommended)
1. Push your code to your GitHub repository.
2. Import the project into [Vercel](https://vercel.com).
3. Next.js App Router will be detected automatically.
4. Add any environment variables (`GEMINI_API_KEY`, `APP_URL`) in project settings.
5. Click **Deploy**.

### Google Cloud Run / Docker
The application is pre-configured to run in containerized environments:

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

---

## Offices & Contact

### Sofia, Bulgaria
- **Address**: bul. "Aleksandar Stamboliyski" 101, 1303 Sofia Center, Sofia, Bulgaria
- **Focus**: Carbon Project Validation, EU ETS Strategy, Eastern European Partnerships

### Istanbul, Türkiye
- **Address**: Levent, Büyükdere Cd. No:199, 34394 Şişli/İstanbul, Türkiye
- **Focus**: Plastic Credit Advisory, Recycling Facility Certification, Middle East Operations

### General Inquiries
- **Email**: [info@novoenviro.com](mailto:info@novoenviro.com)
- **Website**: [novoenviro.com](https://novoenviro.com)

---

## License

Copyright © 2019–2026 **Novo Enviro**. All rights reserved.  
Unauthorized distribution, reproduction, or commercial use of proprietary assets is strictly prohibited.
