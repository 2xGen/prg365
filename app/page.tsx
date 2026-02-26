import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomeTopPicks } from "@/components/HomeTopPicks";
import { HomeCategories } from "@/components/HomeCategories";
import { WhyBookWithUs } from "@/components/WhyBookWithUs";
import { Footer } from "@/components/Footer";
import { pillarProductCodes } from "@/data/pillarProducts";
import { getListingByProductCode } from "@/data/listings";
import { getPillarBySlug } from "@/data/pillars";
import { featuredTours } from "@/data/featuredTours";
import { getStaticProductSummaries } from "@/data/staticProductSummaries";

const SITE_URL = "https://prg365.com";
const DEFAULT_OG_IMAGE =
  "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/aru365/best%20tours%20in%20prague.png";

export const metadata: Metadata = {
  title: "Prg365 – Book Best Tours in Prague | Walking, Castle, Beer & Day Trips",
  description:
    "Prague's dedicated platform for booking the best tours and experiences. Find, compare, and book walking tours, castle visits, beer tours, day trips, and more.",
  openGraph: {
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Prg365 – Tours and experiences in Prague" }],
  },
  alternates: { canonical: SITE_URL },
};

/** Home shows one tour per category from static snapshot (no live API). */
const HIDDEN_ON_HOMEPAGE: string[] = [];
const CATEGORY_SLUGS = (Object.keys(pillarProductCodes) as string[]).filter((s) => !HIDDEN_ON_HOMEPAGE.includes(s));
const PICK_INDEX = 1;

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Prg365 – Book Best Tours in Prague",
  url: SITE_URL,
  description:
    "Prague's dedicated platform for booking the best tours and experiences. Find, compare, and book walking tours, castle visits, beer tours, day trips, and more.",
  isPartOf: { "@type": "WebSite", name: "Prg365", url: SITE_URL },
};

export default async function Home() {
  const oneCodePerCategory: { categorySlug: string; productCode: string }[] = [];
  for (const slug of CATEGORY_SLUGS) {
    if (oneCodePerCategory.length >= 6) break;
    const codes = pillarProductCodes[slug];
    if (codes && codes.length > 0) {
      const index = Math.min(PICK_INDEX, codes.length - 1);
      oneCodePerCategory.push({ categorySlug: slug, productCode: codes[index] });
    }
  }

  const staticSummaries = oneCodePerCategory.slice(0, 6).flatMap(({ categorySlug, productCode }) =>
    getStaticProductSummaries([productCode], categorySlug)
  );
  let topPicks = oneCodePerCategory.slice(0, 6).map(({ categorySlug, productCode }, i) => {
    const s = staticSummaries[i];
    if (!s) return null;
    const pillar = getPillarBySlug(categorySlug);
    const listing = getListingByProductCode(categorySlug, productCode);
    const href = listing ? `/${categorySlug}/${listing.slug}` : s.productUrl;
    return {
      categorySlug,
      categoryTitle: pillar?.title ?? categorySlug,
      productCode: s.productCode,
      title: s.title,
      fromPriceDisplay: s.fromPriceDisplay,
      imageUrl: s.imageUrl ?? null,
      href,
      isInternal: !!listing,
    };
  }).filter((x): x is NonNullable<typeof x> => x !== null);

  if (topPicks.length === 0) {
    topPicks = featuredTours
      .filter((ft) => ft.categorySlug && !HIDDEN_ON_HOMEPAGE.includes(ft.categorySlug))
      .slice(0, 6)
      .map((ft) => ({
        categorySlug: ft.categorySlug!,
        categoryTitle: getPillarBySlug(ft.categorySlug!)?.title ?? ft.categorySlug!,
        productCode: ft.id,
        title: ft.title,
        fromPriceDisplay: ft.fromPriceLabel ?? `From $${ft.fromPrice}`,
        imageUrl: null as string | null,
        href: `/${ft.categorySlug}`,
        isInternal: true,
      }));
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />
      <HomeTopPicks topPicks={topPicks} />
      <HomeCategories />
      <WhyBookWithUs />
      <Footer />
    </main>
  );
}
