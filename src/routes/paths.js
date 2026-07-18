// src/routes/paths.js
//
// WHY THIS FILE EXISTS:
// As the app grows, you'll need to link to the same pages from MANY
// places (Navbar, Footer, buttons, redirects...). If you hardcode the
// string "/packages" in 10 different files and later need to rename
// the route to "/tour-packages", you'd have to hunt down every single
// occurrence. Instead, we define each path ONCE here as a constant,
// and every other file imports it. Renaming a route becomes a
// one-line change.
//
// HOW IT CONNECTS TO OTHER FILES:
// - AppRoutes.jsx uses these paths to define <Route> elements.
// - Navbar.jsx (and any future links) import these instead of typing
//   raw strings like "/contact".

export const ROUTES = {
  HOME: "/",
  PACKAGES: "/packages",
  HOTELS: "/hotels",
  GALLERY: "/gallery",
  CONTACT: "/contact",
};
