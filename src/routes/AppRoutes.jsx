// src/routes/AppRoutes.jsx
//
// WHY THIS FILE EXISTS:
// React Router needs to know "which component to show for which URL".
// Instead of cluttering App.jsx with a long list of <Route> tags, we
// isolate ALL routing logic in one dedicated file. This keeps App.jsx
// clean and makes it obvious where to go whenever you need to add,
// remove, or rename a page route — there's exactly one file for that job.
//
// HOW IT CONNECTS TO OTHER FILES:
// - Imported by App.jsx and rendered inside the MainLayout.
// - Imports every page component from src/pages/.
// - Uses path constants from ./paths.js instead of raw strings, so
//   the URLs stay consistent everywhere in the app.

import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./paths.js";

// Page components — each represents one full "screen" of the app.
import Home from "../pages/Home.jsx";
import Packages from "../pages/Packages.jsx";
import Hotels from "../pages/Hotels.jsx";
import Gallery from "../pages/Gallery.jsx";
import Contact from "../pages/Contact.jsx";

// AppRoutes
// ---------
// <Routes> is like a "switch statement" for URLs: React Router looks
// at the current browser URL and renders the FIRST <Route> that
// matches its "path", swapping out the "element" shown on screen.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PACKAGES} element={<Packages />} />
      <Route path={ROUTES.HOTELS} element={<Hotels />} />
      <Route path={ROUTES.GALLERY} element={<Gallery />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />

      {/* TODO: Add a 404 "Not Found" page here once we build the UI.
          Example: <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
