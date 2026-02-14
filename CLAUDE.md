# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NewBanger is a music promotion platform that connects musicians with curators (influencers, bloggers, DJs, playlist curators). Built with React, Vite, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **Framework**: React 18 with Vite 7
- **Styling**: Tailwind CSS v4 (configured via @tailwindcss/vite plugin)
- **Routing**: React Router DOM v6
- **State Management**: React Context API
- **Icons**: react-icons

### Directory Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, Hero, etc.)
├── pages/           # Page-level components (Home, etc.)
├── auth/            # Authentication-related code
│   ├── authpages/   # Auth page components (SelectAccountType, BloggerSignup, etc.)
│   └── authcomponents/ # Reusable auth UI components (SelectionCard)
├── context/         # React Context providers
├── assets/          # Images and static files
└── data.js          # Static data exports (testimonials, steps, faqs, peopleTwo)
```

### Key Architectural Patterns

**Context-based State Management**
- [SignUpContext.jsx](src/context/SignUpContext.jsx) manages the multi-step signup flow
- Wrapped at app root in [main.jsx](src/main.jsx:10)
- Stores `accountType` (musician|curator) and `curatorType` (content_creator|music_blog|playlist_curator)

**Routing Structure**
- Main app routing defined in [App.jsx](src/App.jsx:23-27)
- Current routes:
  - `/` → Home page
  - `/signup` → Account type selection
  - `/signup/curator/type` → Curator type selection

**Component Composition**
- Home page ([pages/Home.jsx](src/pages/Home.jsx)) composes multiple section components
- Each major section (WhatWeDo, TrustUs, StepByStep, etc.) is a separate component
- Navbar and Footer are included at the page level, not in App.jsx

**Static Data Management**
- [data.js](src/data.js) exports centralized data structures:
  - `peopleTwo` - Curator types with images and hover effects
  - `steps` - 3-step process for creating campaigns
  - `faqs` - Frequently asked questions
  - `testimonials` - User testimonials

### Styling

Tailwind CSS v4 is configured with custom theme colors in [tailwind.config.js](tailwind.config.js:4-9):
- `primary`: #2563EB (blue)
- `secondary`: #F59E0B (amber)
- `success`: #16A34A (green)
- `danger`: #DC2626 (red)

Some components still use separate CSS files (e.g., `selectaccount.css`, `whatwedo.css`, `trustus.css`) alongside Tailwind classes.

### Signup Flow

1. User visits `/signup` → selects account type (musician or curator)
2. If curator → navigates to `/signup/curator/type` to select curator type
3. If musician → intended to navigate to `/signup/blogger` (not yet implemented)
4. Data stored in SignUpContext throughout the flow

## Important Notes

- The app uses StrictMode but is currently commented out in [main.jsx](src/main.jsx:9)
- Route for `/signup/blogger` referenced in code but not defined in router yet
- Vite config uses both React and Tailwind plugins
