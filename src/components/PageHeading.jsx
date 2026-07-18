// src/components/PageHeading.jsx
//
// WHY THIS FILE EXISTS:
// Every page placeholder (Home, Packages, Hotels...) currently just
// needs to show its own title in a consistent way. Rather than
// repeating the same <h1> + className combo five times, we extract
// it into one tiny, reusable component. This is a small example of
// the DRY principle (Don't Repeat Yourself) and shows how components
// can be composed together.
//
// HOW IT CONNECTS TO OTHER FILES:
// - Imported by every file in src/pages/.
// - Takes a "title" prop so each page can pass its own heading text.

export default function PageHeading({ title }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </div>
  );
}
