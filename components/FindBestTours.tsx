"use client";

const categories = [
  "Walking Tours in Prague",
  "Castle & Palace Tours",
  "Beer Tours",
  "Day Trips from Prague",
  "River Cruises",
  "Food Tours",
  "Jewish Heritage Tours",
  "Night Tours",
  "Private Tours",
  "Bike Tours",
  "Photography Tours",
  "Cultural Experiences",
];

export function FindBestTours() {
  return (
    <section
      id="tours"
      className="relative py-20 lg:py-28 bg-slate-50/80 bg-section-gradient"
      aria-labelledby="find-tours-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="find-tours-heading"
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 text-center mb-4"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          Find the Best <span className="text-prg-red">Tours</span> in Prague
        </h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Whether you’re looking for walking tours, castle visits, beer tours, day trips, river cruises, or food experiences, Prg365 will organize the island’s top experiences in a clear, easy-to-navigate structure.
        </p>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14">
          Prague offers diverse tours and experiences — from historic walks to beer culture and day trips. Prg365 features curated categories including:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {categories.map((name, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow text-slate-700 font-medium"
            >
              {name}
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mt-10">
          Each category will highlight top-rated and highly booked experiences so travelers can compare options confidently.
        </p>
      </div>
    </section>
  );
}
