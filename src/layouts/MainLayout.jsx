// src/layouts/MainLayout.jsx
//
// WHY THIS FILE EXISTS:
// Almost every multi-page site has parts that repeat on EVERY page
// (a navbar at the top, a footer at the bottom) and a part that
// CHANGES per page (the actual page content). A "layout" component
// captures that repeating shell ONCE, and uses React Router's
// <Outlet /> as a placeholder for "whatever page is currently active".
//
// This avoids having to import <Navbar /> and <Footer /> manually
// into every single page file (Home, Packages, Hotels, etc.) — they
// just focus on their own content.
//
// HOW IT CONNECTS TO OTHER FILES:
// - Used inside App.jsx, wrapping <AppRoutes />.
// - Renders Navbar and Footer components.
// - The {children} prop below receives whatever AppRoutes decides to
//   render based on the current URL (Home, Packages, etc.).

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// We accept "children" as a prop (instead of using React Router's
// <Outlet />) because App.jsx wraps <AppRoutes /> directly inside this
// layout. This keeps the relationship between routing and layout
// explicit and easy for a beginner to trace through App.jsx.
export default function MainLayout({ children }) {
  return (
    // flex-col + min-h-screen ensures the footer sticks to the bottom
    // of the viewport even on short pages (instead of floating mid-page).
    //
    // STICKY NAVBAR NOTE: Navbar.jsx uses "sticky top-0" so it stays
    // pinned to the top of the viewport while scrolling. For "sticky"
    // to work, NONE of its parent elements (this div included) can
    // have "overflow-hidden" or a fixed height — we keep this wrapper
    // using normal document flow so the sticky behavior isn't broken.
    <div className="flex flex-col min-h-screen bg-cream text-ink font-sans">
      <Navbar />

      {/* flex-1 makes this main content area grow to fill all
          available space, pushing the Footer down. */}
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
