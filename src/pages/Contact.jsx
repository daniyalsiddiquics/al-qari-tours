import contactHero from "../assets/images/contact-Hero.jpg";
import { useState } from "react";


const teamMembers = [
  {
    id: 1,
    name: "Qari Muhammad Yaqoob ",
    role: "Founder & CEO",
    phone: "+923009315986",
    whatsapp: "+923009315986",
    email: "Alqari_travel@yahoo.com",
    image: "https://placehold.co/300x300/0F4C3A/F8F4EC?text=QMY",
  },
  {
    id: 2,
    name: "Muhammad Hasnain Maaz ",
    role: "Ticketing Manager & Accountant ",
    phone: "+92117290851",
    whatsapp: "+92117290851",
    email: "hasnainmaaz11@gmail.com",
    image: "https://placehold.co/300x300/0F4C3A/F8F4EC?text=MHM",
  },
  {
    id: 3,
    name: "Muhammad Talha",
    role: "Customer Relations Manager",
    phone: "+923163647808",
    whatsapp: "+923163647808",
    email: "talhaarain050@gmail.com ",
    image: "https://placehold.co/300x300/0F4C3A/F8F4EC?text=MT",
  },
];

// ----------------------------------------------------------------
// OFFICE INFO DATA
// ----------------------------------------------------------------
// WHY AN OBJECT (not an array): there is only ONE office address,
// one timing, one phone, one email — these don't repeat, so a single
// object is the right shape (an array would be the right shape if a
// list of items repeats, like the team members above). Still kept as
// data, not hardcoded text, so the client can update any field later
// without touching JSX.
const officeInfo = {
  address: "Al Qari Tours Travel Office No:B-3065 Dhakan Street, Shahi Bazar, Sukkur Sindh, Pakistan",
  timing: "Mon - Sun: 11:00 AM - 9:00 PM",
  phone: "071-5626255",
  email: "Alqari_travel@Yahoo.com",
};

// Replace this with the real embed URL from Google Maps later
// (Share -> Embed a map -> copy the "src" value from the iframe).
const GOOGLE_MAP_EMBED_URL ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3819840194274!2d68.8819903!3d27.705489999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d50b56dcb627%3A0xeafc445aec1995ba!2sAL%20QARI%20TOURS%20TRAVELS%20PVT%20(LTD)!5e0!3m2!1sen!2s!4v1782477258784!5m2!1sen!2s";
// ----------------------------------------------------------------
// FAQ DATA
// ----------------------------------------------------------------
// Stored as an array of objects so FAQs can later be fetched from
// a backend with zero JSX changes — same pattern as teamMembers.
const faqItems = [
  {
    id: 1,
    question: "How do I book an Umrah package?",
    answer:
      "Booking is simple. Contact our team by phone, WhatsApp, or the form on this page. One of our consultants will walk you through available packages, dates, and pricing, then guide you step by step until your booking is confirmed.",
  },
  {
    id: 2,
    question: "Do you provide visa services?",
    answer:
      "Yes. We handle the full Umrah visa process on your behalf — document collection, application submission, and follow-up. Our visa specialists ensure your application meets all Saudi authority requirements.",
  },
  {
    id: 3,
    question: "Can I choose my own hotel?",
    answer:
      "Absolutely. We offer both fixed packages and fully customisable itineraries. You can select your preferred hotel in Makkah and Madinah based on proximity to the Haram, star rating, and your budget.",
  },
  {
    id: 4,
    question: "Do you arrange family packages?",
    answer:
      "Yes. We specialise in family Umrah packages that cover group flights, adjoining or family rooms, and dedicated support throughout the journey. Reach out to discuss a package tailored to your family size and needs.",
  },
  {
    id: 5,
    question: "How can I contact your office?",
    answer:
      "You can call or WhatsApp us directly, visit our Sukkur office Monday through Sunday between 11 AM and 9 PM, or fill in the contact form below and we will get back to you within 24 hours.",
  },
];

export default function Contact() {
  // ----------------------------------------------------------------
  // CONTACT FORM STATE
  // ----------------------------------------------------------------
  // One object holding every field, instead of four separate
  // useState calls. This keeps the form scalable — adding a 5th
  // field later is one new key in this object plus one new <input>,
  // rather than another whole useState + handler pair.
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // ONE generic change handler for every field, instead of writing a
  // separate handler per input. "event.target.name" reads the
  // input's "name" attribute (e.g. "email"), and "[name]: value" uses
  // that as a DYNAMIC object key — this is how one function can
  // safely update just the one field that actually changed, without
  // touching the others.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  // UI ONLY — per the brief, no backend call is made yet.
  // preventDefault() stops the browser's default behavior of
  // reloading the page on form submit, which would otherwise wipe
  // out our React state instantly.
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send formData to the backend once an API endpoint exists.
    console.log("Contact form submitted:", formData);
  };

  // ----------------------------------------------------------------
  // FAQ ACCORDION STATE
  // ----------------------------------------------------------------
  // Tracks which FAQ item is currently open. null = all closed.
  // Only one item can be open at a time (click to toggle).
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* ==============================================================
          SECTION 1 — HERO
          ==============================================================
          Same emerald + gold hero pattern used across Packages,
          Hotels, and Gallery, so this page feels like part of the
          same site rather than a bolted-on form. */}
      <section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(rgba(15,76,58,.75), rgba(15,76,58,.75)), url(${contactHero})`,
  }}
>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream">
            Contact Us
          </p>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gold leading-tight">
            We're Here to Help You<br className="hidden sm:block" /> Plan Your Sacred Journey
          </h1>
          <p className="mt-6 max-w-2xl mx-auto font-sans text-base sm:text-lg text-cream/80 leading-relaxed">
            Our dedicated team is ready to answer your questions and
            guide you through every step of your Umrah experience.
          </p>
          {/* Quick-contact pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${officeInfo.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-5 py-2.5 font-sans text-sm text-cream transition-colors hover:bg-gold/10 hover:border-gold"
            >
              <PhoneIcon className="h-4 w-4 text-gold" />
              {officeInfo.phone}
            </a>
            <a
              href={`mailto:${officeInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-5 py-2.5 font-sans text-sm text-cream transition-colors hover:bg-gold/10 hover:border-gold"
            >
              <EmailIcon className="h-4 w-4 text-gold" />
              {officeInfo.email}
            </a>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 2 — MEET OUR TEAM
          ============================================================== */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-emerald-deep/60">
              Our People
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
              Meet Our Team
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
              Experienced professionals dedicated to making your Umrah journey seamless and blessed.
            </p>
          </div>

          {/* RESPONSIVE GRID:
              - "grid-cols-1"    -> mobile: one card per row.
              - "sm:grid-cols-2" -> tablet (≈640px+): two cards per row.
              - "lg:grid-cols-3" -> desktop (≈1024px+): three cards per
                row, matching the brief's 1 / 2 / 3 column requirement. */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*
              WHY .map() HERE: turns each object in "teamMembers" into
              one card of JSX. Every card shares identical structure
              since they all come from this one template — adding a
              4th team member is just adding one object to the array
              above, nothing here changes.
            */}
            {teamMembers.map((member) => (
              // "key={member.id}" is REQUIRED by React for list items
              // so it can track which card is which between
              // re-renders — we use the stable "id" rather than the
              // array position.
              <div
                key={member.id}
                className="group flex flex-col items-center rounded-3xl border border-ink/8 bg-white pt-10 pb-8 px-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/30"
              >
                {/* Profile image with layered gold ring effect */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 scale-110 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-28 w-28 rounded-full ring-4 ring-gold/30 ring-offset-2 ring-offset-white overflow-hidden shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 font-sans text-sm font-medium text-emerald-deep">
                  {member.role}
                </p>

                {/* Divider */}
                <div className="mt-5 w-12 h-px bg-gold/40" />

                {/* Phone and email shown as small, scannable rows
                    with consistent icon + text pairing. */}
                <div className="mt-5 w-full space-y-2.5 text-sm text-ink/65">
                  <p className="flex items-center justify-center gap-2.5">
                    <PhoneIcon className="h-4 w-4 text-gold shrink-0" />
                    <span className="font-sans">{member.phone}</span>
                  </p>
                  <p className="flex items-center justify-center gap-2.5">
                    <EmailIcon className="h-4 w-4 text-gold shrink-0" />
                    <span className="font-sans truncate max-w-[180px]">{member.email}</span>
                  </p>
                </div>

                {/* Action buttons: Call, Email, WhatsApp */}
                <div className="mt-7 grid grid-cols-3 gap-2.5 w-full">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex flex-col items-center gap-1.5 rounded-2xl border border-emerald-deep/15 bg-emerald-deep/5 px-2 py-3 font-sans text-xs font-semibold text-emerald-deep transition-all duration-200 hover:bg-emerald-deep hover:text-cream hover:border-emerald-deep hover:shadow-md"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex flex-col items-center gap-1.5 rounded-2xl border border-gold/25 bg-gold/8 px-2 py-3 font-sans text-xs font-semibold text-ink/70 transition-all duration-200 hover:bg-gold hover:text-emerald-deep hover:border-gold hover:shadow-md"
                  >
                    <EmailIcon className="h-4 w-4" />
                    Email
                  </a>
                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 rounded-2xl border border-green-600/20 bg-green-50 px-2 py-3 font-sans text-xs font-semibold text-green-700 transition-all duration-200 hover:bg-green-600 hover:text-white hover:border-green-600 hover:shadow-md"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 3 — OFFICE INFORMATION
          ============================================================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-emerald-deep/60">
              Where to Find Us
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
              Office Information
            </h2>
          </div>

          {/* Grid of four premium info cards. Built from "officeInfo" rather
              than four hand-written blocks, so changing the address
              or phone later is a one-line edit at the top of this
              file — not a hunt through JSX. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <OfficeCard
              icon={<LocationIcon className="h-6 w-6" />}
              label="Office Address"
              value={officeInfo.address}
            />
            <OfficeCard
              icon={<ClockIcon className="h-6 w-6" />}
              label="Office Timing"
              value={officeInfo.timing}
            />
            <OfficeCard
              icon={<PhoneIcon className="h-6 w-6" />}
              label="Office Phone"
              value={officeInfo.phone}
              href={`tel:${officeInfo.phone}`}
            />
            <OfficeCard
              icon={<EmailIcon className="h-6 w-6" />}
              label="Office Email"
              value={officeInfo.email}
              href={`mailto:${officeInfo.email}`}
            />
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 4 — GOOGLE MAP
          ==============================================================
          "aspect-[16/9]" keeps the map a consistent, modern widescreen
          shape on every device, instead of a fixed pixel height that
          would look cramped on mobile or oddly short on desktop. */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-emerald-deep/60">
              Find Us
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
              Visit Our Office
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-ink/55 leading-relaxed">
              {officeInfo.address}
            </p>
          </div>

          {/* Map wrapper: rounded, shadowed, with a subtle ring border */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-ink/8 shadow-2xl ring-1 ring-ink/5">
            <div className="aspect-[16/9] w-full">
              {/* PLACEHOLDER MAP — swap GOOGLE_MAP_EMBED_URL at the top
                  of this file for the real embed link from Google Maps
                  (Share -> Embed a map) once you have it. Nothing else
                  here needs to change. */}
              <iframe
                src={GOOGLE_MAP_EMBED_URL}
                title="Al Qari Tours Office Location"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 5 — CONTACT FORM
          ============================================================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-emerald-deep/60">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
              Send Us a Message
            </h2>
            <p className="mt-4 font-sans text-sm text-ink/55">
              We typically reply within 24 hours.
            </p>
          </div>

          {/* "onSubmit={handleSubmit}" runs our UI-only handler above
              instead of letting the browser actually submit/reload. */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-3xl border border-ink/8 bg-cream p-7 sm:p-10 shadow-xl space-y-6"
          >
            {/* "grid-cols-1 sm:grid-cols-2" places Name and Phone side
                by side once there's enough width, but stacks them on
                narrow phone screens. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                label="Full Name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+92 300 1234567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Message uses a <textarea>, so it's built directly here
                rather than through the shared <FormField> (which only
                renders <input>) — the only field that needs multiple
                lines. */}
            <div>
              <label
                htmlFor="message"
                className="block font-sans text-sm font-medium text-ink/70 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your travel plans..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 font-sans text-sm text-ink placeholder:text-ink/35 outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
              />
            </div>

            {/* Large, full-width submit button matching the brand's
                solid-gold primary-action style used in the Hero. */}
            <button
              type="submit"
              className="w-full rounded-full bg-gold px-8 py-4 font-sans text-sm font-semibold text-emerald-deep shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-105 hover:scale-[1.01] active:scale-[0.99]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ==============================================================
          SECTION 6 — FAQ
          ==============================================================
          Pure React accordion — no external libraries. openFaq holds
          the id of the currently expanded item (or null if all closed).
          Clicking the same item again collapses it. */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-emerald-deep/60">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-ink/55 leading-relaxed">
              Can't find your answer? Reach out directly and we'll be happy to help.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {/*
              WHY .map() HERE: same data-driven pattern as teamMembers.
              Adding a 6th FAQ later is one new object in faqItems —
              no JSX changes needed.
            */}
            {faqItems.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border bg-white transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-gold/50 shadow-lg"
                      : "border-ink/8 shadow-sm hover:border-ink/20 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-sm sm:text-base font-semibold text-ink">
                      {item.question}
                    </span>
                    {/* Chevron rotates 180° when open */}
                    <span
                      className={`shrink-0 flex items-center justify-center h-7 w-7 rounded-full transition-all duration-200 ${
                        isOpen
                          ? "bg-gold text-emerald-deep rotate-180"
                          : "bg-ink/6 text-ink/50"
                      }`}
                    >
                      <ChevronIcon className="h-4 w-4" />
                    </span>
                  </button>
                  {/* Answer panel — only rendered when open for screen-reader
                      clarity; height transition handled by conditional render
                      combined with CSS padding animation. */}
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="h-px w-full bg-ink/6 mb-4" />
                      <p className="font-sans text-sm sm:text-base text-ink/65 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 7 — FINAL CTA
          ============================================================== */}
      <section className="bg-emerald-deep py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Decorative crescent / ornament */}
          <div className="flex justify-center mb-8">
            <div className="h-14 w-14 rounded-full border-2 border-gold/30 flex items-center justify-center">
              <MoonStarIcon className="h-7 w-7 text-gold" />
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gold leading-tight">
            Ready for Your<br className="hidden sm:block" /> Spiritual Journey?
          </h2>
          <p className="mt-6 max-w-xl mx-auto font-sans text-base sm:text-lg text-cream/75 leading-relaxed">
            Contact our team today and let us help you plan your perfect Umrah experience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${officeInfo.phone}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 font-sans text-sm font-semibold text-emerald-deep shadow-lg transition-all duration-200 hover:brightness-105 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Us
            </a>
            <a
              href="https://wa.me/+923009315986"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-gold/50 bg-white/8 px-8 py-4 font-sans text-sm font-semibold text-cream shadow-lg transition-all duration-200 hover:bg-gold/15 hover:border-gold hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <p className="mt-8 font-sans text-xs text-cream/40 uppercase tracking-widest">
            {officeInfo.timing}
          </p>
        </div>
      </section>
    </>
  );
}

// ----------------------------------------------------------------------
// OfficeCard
// ----------------------------------------------------------------------
// WHY THIS HELPER EXISTS: replaces the original InfoRow with a
// premium card layout that gives each office detail its own visual
// weight. Accepts an optional "href" so phone/email entries become
// tappable links on mobile without changing the rest of the layout.
function OfficeCard({ icon, label, value, href }) {
  const inner = (
    <div className="group flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-6 shadow-md transition-all duration-200 hover:border-gold/35 hover:shadow-xl hover:-translate-y-0.5 h-full">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-deep text-gold shadow-sm">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
          {label}
        </p>
        <p className="mt-1.5 font-sans text-sm font-medium text-ink leading-relaxed break-words">
          {value}
        </p>
      </div>
    </div>
  );

  // Wrap in an anchor only when an href is provided (phone / email)
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

// ----------------------------------------------------------------------
// InfoRow (kept for backward compatibility — no longer used in JSX
// above but preserved per the requirement to keep all helper components)
// ----------------------------------------------------------------------
// WHY THIS HELPER EXISTS: the four office-info rows (address, timing,
// phone, email) share identical layout — an icon, a label, and a
// value. Writing that layout once and reusing it via props avoids
// repeating the same JSX four times.
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
        {icon}
      </span>
      <div>
        <p className="font-sans text-xs uppercase tracking-wide text-cream/60">
          {label}
        </p>
        <p className="mt-1 font-sans text-sm text-cream">{value}</p>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// FormField
// ----------------------------------------------------------------------
// WHY THIS HELPER EXISTS: Full Name, Phone, and Email all share the
// exact same label + input markup and styling — only the "label",
// "name", "type", and "placeholder" differ. Extracting this avoids
// writing (and maintaining) three near-identical blocks of JSX.
function FormField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-sans text-sm font-medium text-ink/70 mb-1.5"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 font-sans text-sm text-ink placeholder:text-ink/35 outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}

// ----------------------------------------------------------------------
// ICONS
// ----------------------------------------------------------------------
// Small hand-written SVG icons (no icon library used), matching the
// style already used in Navbar.jsx and Hotels.jsx.

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// New icons added for FAQ accordion and CTA section

function ChevronIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003C6.476 2.003 2 6.479 2 12.007c0 1.765.46 3.424 1.268 4.864L2.049 22l5.274-1.194A9.953 9.953 0 0 0 12.004 22C17.53 22 22 17.524 22 12.007c0-5.52-4.47-10.004-9.996-10.004zm0 18.354a8.3 8.3 0 0 1-4.232-1.157l-.303-.18-3.13.709.746-3.044-.198-.312A8.322 8.322 0 0 1 3.65 12.007c0-4.606 3.748-8.354 8.354-8.354 4.607 0 8.354 3.748 8.354 8.354 0 4.605-3.747 8.35-8.354 8.35z" />
    </svg>
  );
}

function MoonStarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 4l.5 1.5L19 6l-1.5.5L17 8l-.5-1.5L15 6l1.5-.5L17 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
