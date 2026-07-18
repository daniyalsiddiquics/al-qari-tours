// src/utils/cn.js
//
// WHY THIS FILE EXISTS:
// When using Tailwind, it's common to need to combine a fixed set of
// classes with conditional ones, e.g.:
//   `btn ${isActive ? "btn-active" : ""} ${isDisabled ? "opacity-50" : ""}`
// This gets messy fast (extra spaces, hard-to-read ternaries). This
// tiny helper takes any number of class values, filters out falsy
// ones (false, null, undefined, ""), and joins the rest with a single
// space. It's a simplified version of the popular "clsx" library,
// written by hand so beginners can see exactly how it works.
//
// HOW IT CONNECTS TO OTHER FILES:
// - Can be imported by any component that needs conditional styling,
//   e.g. `className={cn("btn", isActive && "btn-active")}`.
// - Not used yet in the placeholder pages/components, but included
//   now as part of the project foundation since it's needed almost
//   immediately once real UI work starts.

export function cn(...classes) {
  // .filter(Boolean) removes any falsy values (false, undefined, "", null)
  // that result from conditional expressions like `isActive && "..."`.
  return classes.filter(Boolean).join(" ");
}
