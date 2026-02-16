import { Hero } from "@/components/Hero";
import { HowWePromote } from "@/components/HowWePromote";
import { PartnerSections } from "@/components/PartnerSections";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Mobile: bottom bar, horizontal */}
      <a
        href="#contact"
        className="fixed bottom-0 left-0 right-0 z-50 py-3 px-4 font-semibold text-white bg-aru-orange hover:bg-aru-orange-dark shadow-lg transition-colors text-center rounded-t-xl md:hidden"
        aria-label="Partner with Us"
      >
        Partner with Us
      </a>
      {/* Desktop: right sidebar, vertical */}
      <a
        href="#contact"
        className="hidden md:inline-flex fixed right-0 top-1/2 -translate-y-1/2 z-50 py-6 px-2 rounded-l-xl font-semibold text-white bg-aru-orange hover:bg-aru-orange-dark shadow-lg transition-colors duration-200"
        style={{ writingMode: "vertical-rl" }}
        aria-label="Partner with Us"
      >
        Partner with Us
      </a>
      <Hero />
      <HowWePromote />
      <PartnerSections />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
