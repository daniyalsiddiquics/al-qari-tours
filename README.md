# Al Qari Tours — Frontend

Foundation setup for the Al Qari Tours website, built with **React + Vite + Tailwind CSS + React Router**.

## Tech Stack
- React 18
- Vite (build tool / dev server)
- Tailwind CSS (utility-first styling)
- React Router v6 (client-side routing)

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Folder Structure

```
al-qari-tours/
├── index.html              # Vite/HTML entry point
├── vite.config.js          # Vite + React plugin config
├── tailwind.config.js      # Tailwind content paths & theme
├── postcss.config.js       # Wires Tailwind + Autoprefixer into CSS build
├── package.json
└── src/
    ├── main.jsx             # True JS entry point — mounts <App /> into #root
    ├── App.jsx               # Root component: Router + Layout + Routes
    ├── index.css             # Tailwind base/components/utilities import
    ├── pages/                # One file per "screen" / route
    │   ├── Home.jsx
    │   ├── Packages.jsx
    │   ├── Hotels.jsx
    │   ├── Gallery.jsx
    │   └── Contact.jsx
    ├── components/           # Small, reusable pieces shared across pages
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── PageHeading.jsx
    ├── layouts/              # Page "shells" (Navbar + content + Footer)
    │   └── MainLayout.jsx
    ├── routes/               # Routing config, kept separate from App.jsx
    │   ├── AppRoutes.jsx
    │   └── paths.js
    ├── utils/                # Small reusable helpers/constants
    │   ├── cn.js
    │   └── constants.js
    └── assets/               # Images, icons, fonts (empty for now)
```

## Why this structure?

- **pages/** vs **components/** — pages are full screens tied to a route;
  components are smaller reusable building blocks used inside pages or layouts.
- **routes/** is separated from `App.jsx` so routing logic doesn't clutter
  the root component, and so URL paths live in one constants file (`paths.js`)
  instead of being hardcoded as strings everywhere.
- **layouts/** isolates the repeating page "shell" (Navbar + Footer) from
  the page-specific content, avoiding duplication across every page file.
- **utils/** holds small, framework-agnostic helper functions and constants
  that don't belong to any single component.

## Status

This is the **project foundation only** — routing, layout, and folder
structure are wired up, but pages currently contain placeholder content.
Real UI/branding work comes next.
