"use client";

const tourBenefits = [
  "Your Viator listings get strategic placement and stronger exposure",
  "More bookings through dedicated links and featured spots",
  "Tours stay current and accurate without extra work on your side",
];

const restaurantBenefits = [
  "Reservations tied to your system—fewer third-party fees, more say over availability",
  "Dedicated pages built for search and tourist discovery",
  "Showcase menus, promotions, and special offers to attract diners",
];

export function PartnerSections() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-slate-50/80 bg-section-gradient"
      aria-labelledby="partner-sections-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="partner-sections-heading"
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 text-center mb-4"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          How <span className="text-aru-cyan">Aru365</span> helps your business
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
          Reach more guests and grow—whether you run tours or a restaurant.
        </p>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {/* Tours & Excursions */}
          <div className="bg-cyan-50 border border-aru-cyan/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="font-semibold text-slate-900 text-lg mb-2">
              Tours & <span className="text-aru-cyan">Excursions</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Work directly with Viator to feature your experiences on Aru365. With over 450 tours always up-to-date, your listings get more exposure and bookings from travelers.
            </p>
            <p className="text-slate-700 font-medium text-sm mb-2">What you get:</p>
            <ul className="space-y-1.5 text-slate-600 text-sm mb-6">
              {tourBenefits.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-aru-cyan shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-white bg-aru-cyan hover:bg-aru-cyan-dark text-sm transition-colors"
            >
              Partner Your Tour
            </a>
          </div>

          {/* Restaurants & Dining */}
          <div className="bg-amber-50 border border-aru-orange/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="font-semibold text-slate-900 text-lg mb-2">
              Restaurants & <span className="text-aru-orange">Dining</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Give visitors instant access to your restaurant with integrated reservations. We create search-friendly landing pages and a place to showcase your menu, promotions, and offerings.
            </p>
            <p className="text-slate-700 font-medium text-sm mb-2">Why join:</p>
            <ul className="space-y-1.5 text-slate-600 text-sm mb-6">
              {restaurantBenefits.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-aru-orange shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-white bg-aru-orange hover:bg-aru-orange-dark text-sm transition-colors"
            >
              Partner Your Restaurant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
