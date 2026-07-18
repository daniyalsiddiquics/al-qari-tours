// src/App.jsx
//
// WHY THIS FILE EXISTS:
// App.jsx is the "root" component of the whole application — every
// other component is a descendant of this one. Its job is purely
// structural: set up the Router, wrap everything in our shared
// MainLayout (Navbar + Footer), and let AppRoutes decide which page
// to display based on the URL.
//
// We deliberately keep App.jsx free of page-specific logic — that
// belongs in src/pages/*. This file should rarely change as the
// project grows.
//
// HOW IT CONNECTS TO OTHER FILES:
// - Rendered by src/main.jsx (the actual entry point).
// - Wraps everything in <BrowserRouter> from react-router-dom, which
//   is REQUIRED for any of React Router's components (Routes, Route,
//   NavLink, Link, useNavigate, etc.) to work anywhere in the app.
// - Renders <MainLayout> from layouts/, which in turn renders
//   <AppRoutes /> from routes/.

import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    // BrowserRouter uses the HTML5 History API to keep the UI in sync
    // with the URL (e.g. /packages, /contact) WITHOUT full page reloads.
    // It must wrap any part of the tree that uses routing features.
    <BrowserRouter>
      <MainLayout>
        {/* AppRoutes decides WHICH page component to render here,
            based on the current browser URL. */}
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
