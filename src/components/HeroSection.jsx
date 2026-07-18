import heroImage from "../assets/images/home-hero.jpg";

// Single source of truth for the WhatsApp number
const WHATSAPP_NUMBER = "+923009315986";

// ----------------------------------------------------------------
// QUICK CONTACT DATA
// ----------------------------------------------------------------
const quickContactItems = [
  {
    id: 1,
    label: "Call Us",
    value: "+923009315986",
    href: "tel:+923009315986",
    icon: "phone",
  },
  {
    id: 2,
    label: "WhatsApp",
    value: "Chat With Us",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: "whatsapp",
  },
  {
    id: 3,
    label: "Email",
    value: "Alqari_travel@yahoo.com",
    href: "mailto:Alqari_travel@yahoo.com",
    icon: "email",
  },
  {
    id: 4,
    label: "Office Hours",
    value: "Mon - Sun: 11AM - 9PM",
    href: null,
    icon: "clock",
  },
];

// ----------------------------------------------------------------
// ICON MAP — must be defined before HeroSection uses it
// ----------------------------------------------------------------
// BUG FIX #4: Moved QUICK_CONTACT_ICONS above HeroSection so it is
// available when the component renders (const is not hoisted).
const QUICK_CONTACT_ICONS = {
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  email: MailIcon,
  clock: ClockIcon,
};

export default function HeroSection() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "Premium", label: "& Economy Packages" },
    { value: "Worldwide", label: "Ticketing" },
  ];

  const services = [
    {
      icon: <UmrahIcon className="h-6 w-6" />,
      title: "Umrah Packages",
      description: "Premium & economy packages tailored to your budget.",
    },
    {
      icon: <HotelIcon className="h-6 w-6" />,
      title: "Hotel Bookings",
      description: "Comfortable, well-located stays in Makkah & Madinah.",
    },
    {
      icon: <PlaneIcon className="h-6 w-6" />,
      title: "International Ticketing",
      description: "Reliable airfare booking for journeys worldwide.",
    },
    {
      icon: <TicketIcon className="h-6 w-6" />,
      title: "Domestic Ticketing",
      description: "Fast, hassle-free ticketing for travel within Pakistan.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <YearsIcon className="h-6 w-6" />,
      title: "20+ Years Experience",
      description: "Two decades of trusted service guiding pilgrims on their journey.",
    },
    {
      icon: <VisaIcon className="h-6 w-6" />,
      title: "Trusted Visa Assistance",
      description: "End-to-end visa processing handled by our dedicated specialists.",
    },
    {
      icon: <StarIcon className="h-6 w-6" />,
      title: "Luxury & Economy Packages",
      description: "Flexible options designed to fit every budget and preference.",
    },
    {
      icon: <HotelChoiceIcon className="h-6 w-6" />,
      title: "Best Hotel Selection",
      description: "Carefully chosen hotels near the Haram in Makkah and Madinah.",
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: "International Ticketing",
      description: "Reliable airfare booking for journeys to destinations worldwide.",
    },
    {
      icon: <SupportIcon className="h-6 w-6" />,
      title: "24/7 Customer Support",
      description: "Our team is always reachable, before, during, and after your trip.",
    },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-deep/30 via-emerald-deep/50 to-emerald-dark/90"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cream">
              Al Qari Tours Travel (Pvt.) Ltd.
            </p>

            <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gold leading-tight">
              Trusted Umrah &amp; Travel Services for Over 20+ Years
            </h1>

            <p className="mt-6 max-w-2xl mx-auto font-sans text-base sm:text-lg text-cream leading-relaxed">
               Al Qari Tours Travel (Pvt.) Ltd. is a trusted travel and Umrah service provider
              with over 20 years of experience in the travel industry. We offer a
              variety of Umrah packages, from economical options to premium star
              packages, designed to meet the needs and budgets of different
              travelers. We also provide domestic and international airline
              ticketing, helping customers travel to destinations around the world.
            </p>

            {/* BUG FIX #2: Added missing wrapper div around the two CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/packages"
                className="w-full sm:w-auto rounded-full bg-gold px-8 py-3 text-sm font-semibold text-emerald-deep transition-transform duration-200 hover:scale-105 hover:brightness-95"
              >
                Explore Packages
              </a>

              <a
                href="/contact"
                className="w-full sm:w-auto rounded-full border border-cream px-8 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-cream hover:text-emerald-deep"
              >
                Contact Us
              </a>
            </div>

            {/* Stats card */}
            <div className="mt-14 rounded-2xl border border-cream/20 bg-cream/10 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={index === 0 ? "" : "sm:border-l sm:border-cream/20"}
                  >
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-gold">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-sans text-sm text-cream/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>{/* end text-center */}
        </div>{/* end container */}

        {/* BUG FIX #5: Scroll anchor was never closed and had no content inside */}
        <a
          href="#umrah-journey-video"
          aria-label="Scroll to next section"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cream/80 transition-colors duration-200 hover:text-cream"
        >
          <ChevronDownIcon className="h-6 w-6 animate-bounce" />
        </a>
      </section>{/* BUG FIX #1: Added missing closing </section> for the hero */}

      {/* ── UMRAH JOURNEY VIDEO ──────────────────────────────────── */}
      <section id="umrah-journey-video" className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3">
                <CrescentIcon className="h-6 w-6 text-gold" />
                <span className="h-px w-16 bg-gold/40" />
              </div>

              <p className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-emerald-deep/70">
                Watch &amp; Experience
              </p>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink leading-tight">
                How to Perform Umrah - Step By Step Guide
              </h2>
              <p className="mt-5 font-sans text-base text-ink/70 leading-relaxed max-w-md">
                From departure to the moment you stand before the Kaaba, every
                step of the journey is filled with meaning. Watch a short video
                of How to Perform Umrah - Step By Step Guide
              </p>
            </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-ink/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="aspect-video w-full">
             <div className="group relative overflow-hidden rounded-2xl border border-ink/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
  <div className="aspect-video w-full">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/qZ9n4V9lZkE"
      title="How to Perform Umrah - Step By Step Guide"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-emerald-deep/70">
              Our Services
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ink">
              Everything Your Journey Needs
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-deep text-cream transition-colors duration-300 group-hover:bg-gold group-hover:text-emerald-deep">
                  {service.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-ink/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE AL QARI TOURS ─────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-emerald-deep/70">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ink">
              Why Choose Al Qari Tours Travel for Your Umrah Journey
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-gold/30 bg-cream/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-deep text-cream transition-colors duration-300 group-hover:bg-gold group-hover:text-emerald-deep">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-ink/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ──────────────────────────────────── */}
      <section className="bg-emerald-deep py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContactItems.map((item) => {
              const IconComponent = QUICK_CONTACT_ICONS[item.icon] ?? PhoneIcon;

              const cardContent = (
                <>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-emerald-deep">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-sans text-xs uppercase tracking-wide text-cream/60">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-cream">
                    {item.value}
                  </p>
                </>
              );

              const cardClasses =
                "group rounded-xl border border-cream/15 bg-cream/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-cream/10 hover:border-gold/50";

              // BUG FIX #3: Removed the stray extra closing ) in the ternary
              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cardClasses}
                >
                  {cardContent}
                </a>
              ) : (
                <div key={item.id} className={cardClasses}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ISLAMIC QUOTE ────────────────────────────────────────── */}
      <section className="bg-cream/60 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <CrescentIcon className="mx-auto h-8 w-8 text-gold" />
          <p className="mt-6 font-display text-xl sm:text-2xl md:text-3xl font-medium text-emerald-deep leading-relaxed">
            "And proclaim to the people the Hajj..."
          </p>
          <p className="mt-3 font-sans text-sm uppercase tracking-[0.2em] text-ink/50">
            Surah Al-Hajj — 22:27
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-gold/40" />

          <p className="mt-8 font-display text-lg sm:text-xl text-ink/80">
           """""" Labbayk Allahumma Labbayk"""""
          </p>
        </div>
      </section>
    </>
  );
}

// ------------------------------------------------------------------
// ICONS
// ------------------------------------------------------------------
function UmrahIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="6" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 10h14M9 6v14" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function HotelIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 21V8a1 1 0 0 1 1-1h5v14M14 21V11a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v10M3 21h18M7 11h.01M7 14h.01M7 17h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlaneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 13l8-2 4-8 2 1-2 7 6 1v2l-6 1-2 6-2-1 1-6-8-2v-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TicketIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14 6v12" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    </svg>
  );
}

function YearsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VisaIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 9h6M7 13h10M7 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l2.7 5.9 6.3.7-4.7 4.4 1.3 6.2L12 17l-5.6 3.2 1.3-6.2L3 9.6l6.3-.7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HotelChoiceIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 21V8a1 1 0 0 1 1-1h5v14M14 21V11a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v10M3 21h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M9 5l1.5 1.5L9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SupportIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 4.5l3 3M19.5 4.5l-3 3M4.5 19.5l3-3M19.5 19.5l-3-3M12 2v3M12 19v3M2 12h3M19 12h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.26 2 11.5c0 2.08.73 4 1.97 5.59L3 22l5.13-1.34A10.4 10.4 0 0 0 12 21c5.52 0 10-4.26 10-9.5S17.52 2 12 2Zm0 2c4.42 0 8 3.36 8 7.5S16.42 19 12 19c-1.4 0-2.7-.34-3.83-.94l-.37-.2-2.9.76.78-2.78-.24-.4A7.34 7.34 0 0 1 4 11.5C4 7.36 7.58 4 12 4Z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

function CrescentIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.5 3.5a9 9 0 1 0 0 17 7.2 7.2 0 0 1 0-17Z" />
    </svg>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}