// vite.config.js
//
// WHY THIS FILE EXISTS:
// Vite needs to know which "plugins" (extra tools) to use when it builds
// or serves our app. Since we are using React, we need the official
// React plugin so Vite understands JSX syntax and gives us Fast Refresh
// (instant updates in the browser without losing component state).
//
// HOW IT CONNECTS TO OTHER FILES:
// - This config is automatically picked up by Vite whenever you run
//   "npm run dev" or "npm run build".
// - It does not need to be imported anywhere; Vite reads it by file name.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Registering the React plugin so Vite can process .jsx files
  // and enable Hot Module Replacement (HMR) for a faster dev experience.
  plugins: [react()],
});
