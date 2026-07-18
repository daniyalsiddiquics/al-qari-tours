// src/utils/constants.js
//
// WHY THIS FILE EXISTS:
// "Magic values" (random strings/numbers scattered across the
// codebase, like a phone number typed in 5 different files) are a
// common source of bugs when one copy gets updated and others don't.
// This file centralizes app-wide constants — business info, contact
// details, social links — so every component reads from ONE source
// of truth.
//
// HOW IT CONNECTS TO OTHER FILES:
// - Will be imported by Footer.jsx, Contact.jsx, and any component
//   that needs to display business details, once real values are added.
// - Currently holds placeholder values only (no real branding/UI yet,
//   per the project requirements).

export const COMPANY_INFO = {
  name: "Al Qari Tours",
  email: "info@example.com", // TODO: replace with real business email
  phone: "+92 000 0000000", // TODO: replace with real business phone
};
