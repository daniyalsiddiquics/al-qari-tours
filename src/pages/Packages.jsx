import PakagesHero from "../assets/images/pakages-Hero.jpg";
import package1 from "../assets/brochures/package1.jpeg";
import package2 from "../assets/brochures/package2.jpeg";
import package3 from "../assets/brochures/package3.jpeg";
import package4 from "../assets/brochures/package4.jpeg";
import package5 from "../assets/brochures/package5.jpeg";
import package6 from "../assets/brochures/package6.jpeg";
import package7 from "../assets/brochures/package7.jpeg";
import package8 from "../assets/brochures/package8.jpeg";
import package9 from "../assets/brochures/package9.jpeg";




import { useState, useEffect } from "react";

export default function Packages() {
  // ----------------------------------------------------------------
  // WHY AN ARRAY OF OBJECTS:
  // Every package shares the same "shape" (id, name, thumbnail image,
  // full brochure image) but with different values. Describing this
  // as DATA — one array, one object per package — means the CARD
  // LAYOUT and the MODAL only need to be written once. Adding a 7th
  // package later is just adding one object here, nothing else changes.
  const packages = [
    {
      id: 1,
      name: "package1",
      thumbnail: package1,
      brochure: package1,
    },
    {
      id: 2,
      name: "package2",
      thumbnail: package2,
      brochure: package2,
    },
    {
      id: 3,
      name: "package3",
      thumbnail: package3,
      brochure: package3,
    },
    {
      id: 4,
      name: "package4",
      thumbnail: package4,
      brochure: package4,
    },
    {
      id: 5,
      name: "package5",
      thumbnail: package5,
      brochure: package5,
    },
    {
      id: 6,
      name: "package6",
      thumbnail: package6,
      brochure: package6,
    },
    {
      id: 7,
      name: "package7",
      thumbnail: package7,
      brochure: package7,
    },
    {
      id: 8,
      name: "package8",
      thumbnail: package8,
      brochure: package8,
    },
    {
      id: 9,
      name: "package9",
      thumbnail: package9,
      brochure: package9,
    },
  ];

  // ----------------------------------------------------------------
  // MODAL STATE
  // ----------------------------------------------------------------
  // We only need to remember ONE thing: "which package's brochure (if
  // any) is currently open?". Instead of using a separate true/false
  // flag PLUS a separate "which image" value, we store the whole
  // selected package object itself.
  //   - selectedPackage === null  -> modal is closed
  //   - selectedPackage === {...} -> modal is open, showing THIS package
  // This is simpler than tracking two pieces of state that always
  // have to stay in sync with each other.
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Opens the modal for a specific package when its button is clicked.
  const openBrochure = (pkg) => setSelectedPackage(pkg);

  // Closes the modal by resetting state back to null.
  const closeBrochure = () => setSelectedPackage(null);

  // ----------------------------------------------------------------
  // CLOSE ON "Escape" KEY
  // ----------------------------------------------------------------
  // useEffect lets us run code in response to something OUTSIDE
  // React's normal render flow — here, listening for keyboard events
  // on the whole document. We add the listener once when the
  // component mounts, and the "return () => ..." cleanup function
  // removes it again when the component unmounts, so we never leave
  // old listeners attached (which would cause bugs/memory leaks).
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeBrochure();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []); // empty array = run this setup only once, not on every render

  return (
    <>
      {/* ==============================================================
          HERO SECTION
          ============================================================== */}
      <section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(rgba(15,76,58,.75), rgba(15,76,58,.75)), url(${PakagesHero})`,
  }}
>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cream">
            Al Qari Tours Travel (Pvt.) Ltd.
          </p>

          {/* Responsive heading: smaller by default (mobile), growing
              at each breakpoint so it stays proportionate on any screen. */}
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gold">
            Explore Our Umrah Packages
          </h1>

          <p className="mt-5 max-w-2xl mx-auto font-sans text-base sm:text-lg text-cream/85 leading-relaxed">
            Browse our package brochures below — tap any "View Brochure"
            button to see the full details, pricing, and inclusions.
          </p>
        </div>
      </section>

      {/* ==============================================================
          BROCHURE GALLERY GRID
          ============================================================== */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* RESPONSIVE GRID:
              - "grid-cols-1"    -> mobile: one card per row.
              - "sm:grid-cols-2" -> tablet (≈640px+): two cards per row.
              - "lg:grid-cols-3" -> desktop (≈1024px+): three cards per
                                    row. "gap-8" keeps generous, premium
                                    spacing between cards. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*
              WHY .map() HERE:
              .map() turns each object in the "packages" array into one
              card of JSX, and React renders the resulting list. This
              keeps the JSX short and guarantees every card shares the
              exact same structure/styling, since they all come from
              this one template.
            */}
            {packages.map((pkg) => (
              // "key={pkg.id}" is REQUIRED by React when rendering a
              // list with .map(), so React can track which card is
              // which between re-renders. We use the package's stable
              // "id" rather than its position in the array.
              <div
                key={pkg.id}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
              >
                {/* THUMBNAIL IMAGE
                    "overflow-hidden" on the parent card clips the
                    hover-zoom effect neatly inside the rounded corners. */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={pkg.thumbnail}
                    alt={`${pkg.name} brochure thumbnail`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-emerald-deep/65 backdrop-blur-sm px-4 py-3">
  <h3 className="text-center font-display text-lg sm:text-xl font-semibold text-gold">
    {pkg.name}
  </h3>
</div>
                </div>

                {/* VIEW BROCHURE BUTTON
                    Calling openBrochure(pkg) tells React "this is the
                    package the user wants to see" — that single state
                    update is what makes the modal below appear,
                    already showing the correct brochure image. */}
                <div className="p-5">
                  <button
                    type="button"
                    onClick={() => openBrochure(pkg)}
                    className="w-full rounded-full border border-emerald-deep px-5 py-2.5 text-sm font-semibold text-emerald-deep transition-colors duration-300 hover:bg-emerald-deep hover:text-cream"
                  >
                    View Brochure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          BROCHURE MODAL (POPUP)
          ==============================================================
          CONDITIONAL RENDERING:
          "selectedPackage && (...)" means: only render anything here
          IF selectedPackage is not null. When closeBrochure() runs,
          selectedPackage becomes null, this whole block disappears,
          and React automatically removes the modal from the screen —
          we never have to manually hide/show elements with CSS. */}
      {selectedPackage && (
        // BACKDROP
        // "fixed inset-0" makes this cover the ENTIRE screen, on top
        // of everything else, regardless of where the user scrolled.
        // "z-50" keeps it above the sticky navbar too.
        // Clicking the dark backdrop itself (NOT the image/card inside
        // it) closes the modal — handled by onClick below.
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4"
          onClick={closeBrochure}
        >
          {/* MODAL CARD
              "onClick={(e) => e.stopPropagation()}" stops a click
              INSIDE the card from bubbling up to the backdrop's
              onClick above — without this, clicking anywhere on the
              brochure image itself would also close the modal, which
              would feel broken to a user trying to look closely at it. */}
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-cream shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON
                Positioned top-right over the image, with its own
                glassmorphism background so it stays visible regardless
                of how light or dark the brochure image is underneath it. */}
            <button
              type="button"
              onClick={closeBrochure}
              aria-label="Close brochure"
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-cream backdrop-blur-sm transition-colors duration-200 hover:bg-ink/80"
            >
              {/* Simple hand-drawn "X" icon — no icon library needed
                  for one symbol. */}
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* FULL BROCHURE IMAGE
                "selectedPackage.brochure" and "selectedPackage.name"
                automatically show the RIGHT package's content, because
                selectedPackage was set to that exact object when the
                user clicked "View Brochure" on its card. */}
            <img
              src={selectedPackage.brochure}
              alt={`${selectedPackage.name} full brochure`}
              className="w-full rounded-t-2xl"
            />

            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-ink">
                {selectedPackage.name}
              </h3>
              <p className="mt-1 font-sans text-sm text-ink/60">
                Contact us on WhatsApp for pricing and availability.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}