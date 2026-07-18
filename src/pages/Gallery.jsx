import GalleryHero from "../assets/images/gallery-Hero.jpg";

import group1 from "../assets/gallery/group1.jpeg";
import group2 from "../assets/gallery/group2.jpeg";
import group3 from "../assets/gallery/group3.jpeg";
import group4 from "../assets/gallery/group4.jpeg";
import { useState, useEffect } from "react";

const galleryImages = [
  { id: 1, src: group1 },
  { id: 2, src: group2 },
  { id: 3, src: group3 },
  { id: 4, src: group4 },
  
];

export default function Gallery() {
  
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  // Moves to the NEXT photo. "% galleryImages.length" wraps the index
  // back to 0 once we pass the last photo, so "next" on the final
  // photo loops back to the first instead of going out of bounds.
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % galleryImages.length);

  // Moves to the PREVIOUS photo. Adding "galleryImages.length" before
  // the modulo handles wrapping backwards from index 0 correctly
  // (plain "0 - 1" would be -1, which isn't a valid array position).
  const showPrev = () =>
    setActiveIndex(
      (current) => (current - 1 + galleryImages.length) % galleryImages.length
    );

  // Whenever the lightbox opens or the active photo changes, play a
  // short fade/scale-in: start hidden, then become visible on the
  // very next tick so the "transition-*" classes below have an
  // opacity/scale change to animate.
  useEffect(() => {
    if (activeIndex === null) return;
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <>
      {/* ==============================================================
          HERO SECTION
          ==============================================================
          Same emerald + gold hero pattern used on Packages/Hotels, so
          the Gallery page feels like part of the same site. */}
      <section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(rgba(15,76,58,.75), rgba(15,76,58,.75)), url(${GalleryHero})`,
  }}
>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cream">
            Our Gallery
          </p>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gold">
            Captured Moments from Our Umrah Journeys
          </h1>
          <p className="mt-5 max-w-2xl mx-auto font-sans text-base sm:text-lg text-cream/85 leading-relaxed">
            Explore memorable moments shared by our valued pilgrims
            during their sacred journey with Al Qari Tours Travel.
          </p>
        </div>
      </section>

      {/* ==============================================================
          RESPONSIVE IMAGE GRID
          ==============================================================
          - "grid-cols-1"    -> mobile: one photo per row.
          - "sm:grid-cols-2" -> tablet (≈640px+): two photos per row.
          - "lg:grid-cols-3" -> desktop (≈1024px+): three photos per
            row, matching the brief's 1 / 2 / 3 column requirement.
          "gap-8" plus generous section padding gives the page the
          breathing room a luxury gallery needs — tight spacing would
          undercut the "premium" feel immediately. */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*
              WHY .map() HERE:
              .map() turns each object in "galleryImages" into one
              clickable card of JSX. Every card shares the exact same
              structure/styling since they all come from this one
              template — adding a 13th photo means adding one object
              to the array above, nothing here changes.
            */}
            {galleryImages.map((image, index) => (
              // "key={image.id}" is REQUIRED by React for list items,
              // so it can track which card is which between
              // re-renders. We use the photo's stable "id" rather
              // than its position, so reordering later wouldn't cause
              // subtle bugs.
              <button
                key={image.id}
                type="button"
                onClick={() => openLightbox(index)}
                // PREMIUM CARD:
                // - "aspect-[4/5]" keeps every card the same elegant
                //   portrait proportion regardless of the source
                //   image's real dimensions — this consistency is a
                //   big part of what makes a gallery feel curated
                //   rather than thrown together.
                // - "rounded-2xl" + "shadow-md" for soft, modern
                //   elevation at rest.
                // - "hover:-translate-y-1 hover:shadow-2xl" lifts the
                //   whole card on hover, layered with the zoom + dark
                //   overlay effects on the image itself below.
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left"
              >
                <img
                  src={image.src}
                 // alt={image.caption}
                  // "group-hover:scale-110" reads the PARENT button's
                  // hover state (via the "group" class above) and
                  // zooms the photo — the signature "luxury gallery"
                  // hover effect, paired with the overlay below.
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* DARK OVERLAY + "VIEW PHOTO" ICON
                    Sits invisible (opacity-0) at rest and fades in on
                    hover ("group-hover:opacity-100"). Using opacity
                    (rather than display none/block) is what allows
                    the "transition-opacity" class to animate it
                    smoothly instead of popping in instantly. */}
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/50 group-hover:opacity-100">
                  {/* The icon itself also scales in slightly on hover
                      ("scale-75" -> "scale-100"), adding a touch more
                      polish than a simple fade alone. */}
                  <span className="flex scale-75 items-center gap-2 rounded-full border border-cream/70 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream backdrop-blur-sm transition-transform duration-300 group-hover:scale-100">
                    <ViewIcon className="h-4 w-4" />
                    View Photo
                  </span>
                </div>

                {/* CAPTION STRIP
                    A subtle gradient + caption along the bottom edge,
                    visible at all times (not just on hover) so the
                    grid reads as curated even before any interaction. */}
                {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-3 pt-8">
                  <p className="font-sans text-xs sm:text-sm font-medium text-cream/90 line-clamp-1">
                    {image.caption}
                  </p>
                </div> */}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          LIGHTBOX MODAL
          ==============================================================
          Only rendered while "activeIndex" is not null — as soon as
          closeLightbox() runs, this entire block disappears and React
          removes it from the screen with no manual show/hide CSS. */}
      {activeIndex !== null && (
        // BACKDROP — covers the full screen, above the sticky navbar.
        // Clicking the backdrop itself (not the photo/buttons) closes
        // the modal, per the "click outside to close" requirement.
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={closeLightbox}
        >
          {/* INNER WRAPPER drives the fade/scale-in animation:
              "opacity-100 scale-100" when isVisible is true, vs
              "opacity-0 scale-95" right when a new photo loads — the
              "transition-all duration-300" class animates between
              the two states smoothly. */}
          <div
            className={`relative w-full max-w-4xl transition-all duration-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            // Stops a click on the photo/buttons from bubbling up to
            // the backdrop's onClick above (which would otherwise
            // close the modal the instant someone tries to view it).
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery viewer"
              className="absolute -top-12 right-0 sm:top-0 sm:-right-12 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors duration-200 hover:bg-cream/20"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            {/* LARGE IMAGE */}
            <div className="overflow-hidden rounded-2xl bg-ink">
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].caption}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            {/* CAPTION + COUNTER, below the image */}
            <div className="mt-4 flex items-center justify-between px-1">
              <p className="font-sans text-sm text-cream/80">
                {galleryImages[activeIndex].caption}
              </p>
              {/* Counter, e.g. "3 / 12" */}
              <p className="font-sans text-sm font-semibold text-gold">
                {activeIndex + 1} / {galleryImages.length}
              </p>
            </div>

            {/* PREVIOUS / NEXT BUTTONS
                Positioned over the sides of the image on larger
                screens; stay reachable on mobile since the modal is
                full-width with comfortable padding. */}
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous photo"
              className="absolute left-2 sm:-left-6 top-1/3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-emerald-deep shadow-lg transition hover:bg-cream"
            >
              <ChevronIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="absolute right-2 sm:-right-6 top-1/3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-emerald-deep shadow-lg transition hover:bg-cream"
            >
              <ChevronIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ----------------------------------------------------------------------
// ICONS
// ----------------------------------------------------------------------
// Small hand-written SVG icons kept in this same file (no new files
// allowed) so the gallery doesn't depend on an external icon library.

function ViewIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}