
import HotelHero from "../assets/images/hotel-Hero.jpg";
import { useState, useEffect, useRef, useCallback } from "react";

import hamooda1 from "../assets/hotels/Hamooda-Masi/hamooda1.jpeg";
import hamooda2 from "../assets/hotels/Hamooda-Masi/hamooda2.jpeg";
import hamooda3 from "../assets/hotels/Hamooda-Masi/hamooda3.jpeg";
import hamooda4 from "../assets/hotels/Hamooda-Masi/hamooda4.jpeg";
import hamooda5 from "../assets/hotels/Hamooda-Masi/hamooda5.jpeg";

import safa1 from "../assets/hotels/Hotel-Deyar-al-Safa/safa1.jpeg";
import safa2 from "../assets/hotels/Hotel-Deyar-al-Safa/safa2.jpeg";
import safa3 from "../assets/hotels/Hotel-Deyar-al-Safa/safa3.jpeg";
import safa4 from "../assets/hotels/Hotel-Deyar-al-Safa/safa4.jpeg";
import safa5 from "../assets/hotels/Hotel-Deyar-al-Safa/safa5.jpeg";

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const makkahHotels = [
    {
      id: 1,
      name: " Hotel Hamouda Al Massi",
      location:
        " It is situated on Ajyad Street, about 240 meters from the Abraj Al Bait Towers and less than 2 km from the Masjid al-Haram.",
      images: [hamooda1, hamooda2, hamooda3, hamooda4, hamooda5],
      description:
        "Luxury accommodation near Masjid al-Haram with modern facilities. A popular, budget-friendly 3-star property located in the Ajyad district, making it a frequent choice for pilgrims.",
      facilities: [
        "Room Options: Single, double, triple, and quad rooms available, with some suites and family rooms for larger groups.",
        "In-Room Perks: Air conditioning, daily housekeeping, electric kettle, comfortable seating area, and in-room telephone.",
        "General Facilities: 24/7 reception, free Wi-Fi, luggage storage, and easy elevator access",
      ],
    },
  ];

  const madinahHotels = [
    {
      id: 1,
      name: " Diyar Al Safa Hotel",
      location:
        " a popular, economy-class pilgrimage hotel in Madinah, Saudi Arabia.It sits just 700 to 900 meters from the Prophet's Mosque (Masjid an-Nabawi), making it a highly accessible and affordable 7-to-8 minute walk to the Haram.",
      images: [safa1, safa2, safa3, safa4, safa5],
      description:
        "Diyar Al Safa Hotel (formerly known as Old Safa Center) is a popular, economy-class pilgrimage hotel in Madinah, Saudi Arabia.",
      facilities: [
        "Room Options: Single, double, triple, and quad rooms available, with some suites and family rooms for larger groups.",
        "In-Room Perks: Air conditioning, daily housekeeping, electric kettle, comfortable seating area, and in-room telephone.",
        "General Facilities: 24/7 reception, free Wi-Fi, luggage storage, and easy elevator access",
      ],
    },
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedHotel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedHotel]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes overlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes imgFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .modal-overlay {
          animation: overlayIn 0.25s ease forwards;
        }
        .modal-panel {
          animation: fadeIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .gallery-img {
          animation: imgFade 0.45s ease forwards;
        }
      `}</style>

      {/* HERO */}
      <section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(rgba(15,76,58,.75), rgba(15,76,58,.75)), url(${HotelHero})`,
  }}
>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cream">
            Al Qari Tours Travel (Pvt.) Ltd.
          </p>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gold">
            Our Partner Hotels
          </h1>
          <p className="mt-5 max-w-2xl mx-auto font-sans text-base sm:text-lg text-cream/85 leading-relaxed">
            Comfortable, well-located accommodation in Makkah and Madinah,
            chosen for proximity to the Haram and reliable service.
          </p>
        </div>
      </section>

      {/* MAKKAH */}
      <HotelSection
        title="Makkah Hotels"
        subtitle="Stay close to Masjid al-Haram"
        hotels={makkahHotels}
        background="bg-cream"
        onViewDetails={setSelectedHotel}
      />

      {/* MADINAH */}
      <HotelSection
        title="Madinah Hotels"
        subtitle="Stay close to Masjid an-Nabawi"
        hotels={madinahHotels}
        background="bg-white"
        onViewDetails={setSelectedHotel}
      />

      {/* MODAL */}
      {selectedHotel && (
        <HotelModal
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </>
  );
}

// ── HotelSection ──────────────────────────────────────────────────────────────
function HotelSection({ title, subtitle, hotels, background, onViewDetails }) {
  return (
    <section className={`${background} py-16 sm:py-20`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-emerald-deep/70">
            {subtitle}
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ink">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              <div className="h-56 sm:h-60 overflow-hidden">
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {hotel.name}
                </h3>

                <div className="mt-2 flex items-start gap-1.5 text-sm text-ink/60">
                  <LocationPinIcon className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span className="font-sans">{hotel.location}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onViewDetails(hotel)}
                  className="mt-6 w-full rounded-full border border-emerald-deep px-5 py-2.5 text-sm font-semibold text-emerald-deep transition-colors duration-300 hover:bg-emerald-deep hover:text-cream"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── HotelModal ────────────────────────────────────────────────────────────────
function HotelModal({ hotel, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const total = hotel.images.length;

  const goTo = useCallback(
    (index) => {
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 1000);
  }, [total]);

  const stopAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  //Start autoplay on mount, pause on hover
  useEffect(() => {
    if (!isHovering) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovering, startAutoplay, stopAutoplay]);

  // Reset when hotel changes
  useEffect(() => {
    setActiveIndex(0);
  }, [hotel]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, activeIndex, goTo]);

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(10,20,15,0.82)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Panel — stop click propagation so clicking inside doesn't close */}
      <div
        className="modal-panel relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollbarWidth: "thin" }}
      >
        {/* ── CLOSE BUTTON ── */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md text-ink/60 hover:bg-gold hover:text-white transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* ── GALLERY ── */}
        <div
          className="relative select-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main image */}
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-3xl bg-ink/10">
            <img
              key={activeIndex}
              src={hotel.images[activeIndex]}
              alt={`${hotel.name} — image ${activeIndex + 1}`}
              className="gallery-img h-full w-full object-contain bg-black"
            />

            {/* Gradient overlay for counter + nav readability */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 45%), linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%)",
              }}
            />

            {/* Prev button */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/40 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next button */}
            <button
              type="button"
              aria-label="Next image"
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/40 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Image counter */}
            <span
              className="absolute bottom-3 right-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
            >
              {activeIndex + 1} / {total}
            </span>

            {/* Pause indicator */}
            {isHovering && (
              <span
                className="absolute bottom-3 left-4 rounded-full px-2.5 py-1 text-xs font-medium text-white/80"
                style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
              >
                ⏸ Paused
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 px-5 pt-3 pb-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {hotel.images.map((img, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View image ${i + 1}`}
                onClick={() => {
                  setActiveIndex(i);
                  startAutoplay(); // reset timer on manual select
                }}
                className="relative flex-shrink-0 h-14 w-20 rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  outline: i === activeIndex ? "2.5px solid #C9A84C" : "2px solid transparent",
                  outlineOffset: "2px",
                  opacity: i === activeIndex ? 1 : 0.55,
                }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="h-full w-full object-cover hover:opacity-100 transition-opacity duration-200"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="px-6 sm:px-8 pt-5 pb-8">
          {/* Name */}
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug">
            {hotel.name}
          </h2>

          {/* Location */}
          <div className="mt-3 flex items-start gap-2">
            <LocationPinIcon className="h-4 w-4 text-gold shrink-0 mt-0.5" />
            <p className="font-sans text-sm text-ink/65 leading-relaxed">
              {hotel.location}
            </p>
          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-ink/8" />

          {/* Description */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              About
            </p>
            <p className="font-sans text-sm sm:text-base text-ink/75 leading-relaxed">
              {hotel.description}
            </p>
          </div>

          {/* Facilities */}
          <div className="mt-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              Facilities &amp; Amenities
            </p>
            <ul className="space-y-2.5">
              {hotel.facilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Gold checkmark */}
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#C9A84C18" }}
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l3.5 3.5L13 4" />
                    </svg>
                  </span>
                  <span className="font-sans text-sm text-ink/70 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Close CTA */}
          <button
            type="button"
            onClick={onClose}
            className="mt-8 w-full rounded-full bg-emerald-deep py-3 text-sm font-semibold text-cream transition-all duration-300 hover:opacity-90 hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function LocationPinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
