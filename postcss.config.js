// postcss.config.js
//
// WHY THIS FILE EXISTS:
// Tailwind CSS isn't plain CSS by itself — it needs to be "processed"
// by PostCSS to turn utility class definitions into real CSS rules.
// We also add "autoprefixer" so our CSS automatically gets vendor
// prefixes (like -webkit-) for older browser support, without us
// having to write them manually.
//
// HOW IT CONNECTS TO OTHER FILES:
// - Vite automatically detects this file and runs our CSS through it.
// - It reads tailwind.config.js to know how to generate the utility classes.

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
