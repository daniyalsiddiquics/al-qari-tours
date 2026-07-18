

/** @type {import('tailwindcss').Config} */
export default {
  // Tells Tailwind exactly which files to scan for class names.
  // If a file isn't listed here, Tailwind won't generate CSS for
  // classes used inside it, and your styles will silently not appear.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Al Qari Tours brand palette — named so components read
      // "bg-emerald-deep" instead of a hardcoded hex code. If the
      // brand color ever changes, we update it ONCE here.
      colors: {
        "emerald-deep": "#0F4C3A", // primary brand color (header, buttons)
        "emerald-dark": "#0B3A2C", // hover/pressed state for primary color
        gold: "#C9A227", // accent color — used sparingly (active link, dividers)
        cream: "#F8F4EC", // warm off-white background
        ink: "#1B2421", // near-black text color (softer than pure #000)
      },
      // Two font "roles": a serif display face for the logo/headings
      // (gives a premium, editorial feel) and a clean sans face for
      // body text and navigation links (stays readable at small sizes).
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
