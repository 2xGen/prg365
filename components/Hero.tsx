"use client";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden hero-mesh"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-20 sm:pt-14 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase text-slate-600 bg-slate-200/80 border border-slate-300/60 animate-fade-in"
            aria-label="Coming soon"
          >
            Coming Soon
          </span>
          <h1
            className="mt-4 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight animate-fade-in"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            <span className="text-aru-orange text-7xl sm:text-7xl md:text-8xl lg:text-9xl">Aru</span>
            <span className="text-aru-cyan text-7xl sm:text-7xl md:text-8xl lg:text-9xl">365</span>
            <br />
            <span
              className="block mt-1 text-4xl sm:text-4xl md:text-5xl font-medium tracking-wide text-slate-700"
              style={{ fontFamily: "var(--font-tagline), Georgia, serif" }}
            >
              Everything Aruba.
            </span>
            <span
              className="block text-3xl sm:text-3xl md:text-4xl font-medium tracking-widest uppercase text-aru-cyan"
              style={{ fontFamily: "var(--font-tagline), Georgia, serif" }}
            >
              365 Days a Year.
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in [animation-delay:0.05s] opacity-0 [animation-fill-mode:forwards]">
            The ultimate platform for tours and restaurants in Aruba.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
            <a
              href="#contact"
              className="btn-lift inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-aru-orange hover:bg-aru-orange-dark shadow-lg shadow-aru-orange/25 min-w-[200px]"
            >
              Partner with Us
            </a>
            <a
              href="#contact"
              className="btn-lift inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-aru-cyan bg-white border-2 border-aru-cyan hover:bg-aru-cyan hover:text-white min-w-[200px]"
            >
              Enable Direct Bookings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
