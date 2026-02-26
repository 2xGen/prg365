import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryIcon } from "@/components/icons/CategoryIcons";
import { Footer } from "@/components/Footer";
import { pillars } from "@/data/pillars";
import { pillarProductCodes } from "@/data/pillarProducts";
import { getListingByProductCode } from "@/data/listings";
import { getPillarBySlug } from "@/data/pillars";
import { featuredTours } from "@/data/featuredTours";
import { getStaticProductSummaries } from "@/data/staticProductSummaries";
import type { ViatorProductSummary } from "@/lib/viator-api";
import { getCategoryBookUrl } from "@/lib/booking";
import type { Metadata } from "next";

const SITE_URL = "https://prg365.com";
const DEFAULT_OG_IMAGE =
  "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/aru365/best%20tours%20in%20prague.png";

export const metadata: Metadata = {
  title: "Find & Book Best Tours in Prague | Prg365",
  description:
    "Find and book the best tours in Prague. Walking tours, castle visits, beer tours, day trips and more. Compare prices and book with free cancellation.",
  openGraph: {
    url: `${SITE_URL}/best-tours-in-prague`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Prg365 – Tours and experiences in Prague" }],
  },
  alternates: { canonical: `${SITE_URL}/best-tours-in-prague` },
};

const bestToursSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Find & Book Best Tours in Prague | Prg365",
  url: `${SITE_URL}/best-tours-in-prague`,
  description:
    "Find and book the best tours in Prague. Walking tours, castle visits, beer tours, day trips and more. Compare prices and book with free cancellation.",
  isPartOf: { "@type": "WebSite", name: "Prg365", url: SITE_URL },
};

const HIDDEN_ON_BEST_TOURS: string[] = [];
const CATEGORY_SLUGS_WITH_PICKS = (Object.keys(pillarProductCodes) as string[]).filter(
  (s) => !HIDDEN_ON_BEST_TOURS.includes(s)
);

export default async function BestToursPage() {
  const oneCodePerCategory: { categorySlug: string; productCode: string }[] = [];
  for (const slug of CATEGORY_SLUGS_WITH_PICKS) {
    if (oneCodePerCategory.length >= 6) break;
    const codes = pillarProductCodes[slug];
    if (codes && codes.length > 0) {
      oneCodePerCategory.push({ categorySlug: slug, productCode: codes[0] });
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
      product: s,
      href,
      isInternal: !!listing,
    };
  }).filter((x): x is NonNullable<typeof x> => x !== null);

  if (topPicks.length === 0) {
    const fallbackProduct = (ft: (typeof featuredTours)[number]): ViatorProductSummary => ({
      productCode: ft.id,
      title: ft.title,
      productUrl: getCategoryBookUrl(ft.categorySlug),
      fromPriceDisplay: ft.fromPriceLabel ?? `From $${ft.fromPrice}`,
      reviewCount: 0,
      rating: 0,
      imageUrl: null,
      freeCancellation: false,
    });
    topPicks = featuredTours
      .filter((ft) => ft.categorySlug && !HIDDEN_ON_BEST_TOURS.includes(ft.categorySlug))
      .slice(0, 6)
      .map((ft) => ({
        categorySlug: ft.categorySlug!,
        categoryTitle: getPillarBySlug(ft.categorySlug!)?.title ?? ft.categorySlug!,
        product: fallbackProduct(ft),
        href: `/${ft.categorySlug}`,
        isInternal: true,
      }));
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bestToursSchema) }}
      />
      <main className="min-h-screen bg-white">
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Best tours in Prague" },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <header className="max-w-3xl mb-12">
            <h1
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              Find &amp; book the best <span className="text-prg-red">tours</span> in Prague
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              See top options, compare prices, and book with free cancellation on most tours. Choose a category below or browse all options.
            </p>
          </header>

          {topPicks.length > 0 && (
            <section className="mb-16" aria-labelledby="top-picks-heading">
              <h2 id="top-picks-heading" className="font-display font-bold text-xl text-slate-900 mb-6" style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
                Top picks
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl">
                {topPicks.map(({ categorySlug, categoryTitle, product, href, isInternal }) => {
                  const cardContent = (
                    <>
                      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 mb-4">
                        {product.imageUrl ? (
                          <Image
                            src={product.imageUrl}
                            alt=""
                            width={400}
                            height={250}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-slate-400">
                            <CategoryIcon slug={categorySlug} className="w-12 h-12" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-medium text-prg-red uppercase tracking-wider">{categoryTitle}</p>
                      <div className="flex flex-1 flex-col mt-1">
                        <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-prg-red transition-colors" style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
                          {product.title}
                        </h3>
                        <div className="mt-auto pt-3 flex flex-wrap items-center justify-between gap-3">
                          <p className="text-slate-600 text-sm font-medium">{product.fromPriceDisplay}</p>
                          <span className="inline-flex h-11 min-w-[7rem] items-center justify-center gap-2 px-4 rounded-xl text-sm font-semibold text-white bg-prg-red group-hover:bg-prg-red-dark transition-colors shadow-sm">
                            View &amp; book
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </>
                  );
                  const cardClassName = "group flex flex-col rounded-2xl border-2 border-prg-red/20 bg-white p-6 text-left transition-all duration-300 hover:border-prg-red hover:shadow-xl hover:shadow-prg-red/10 hover:-translate-y-1";
                  return isInternal ? (
                    <Link key={product.productCode} href={href} className={cardClassName}>
                      {cardContent}
                    </Link>
                  ) : (
                    <a key={product.productCode} href={href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
                      {cardContent}
                    </a>
                  );
                })}
              </div>
            </section>
          )}

          <section aria-labelledby="categories-heading">
            <h2 id="categories-heading" className="font-display font-bold text-xl text-slate-900 mb-6" style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
              Browse by category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {pillars
                .filter((p) => !HIDDEN_ON_BEST_TOURS.includes(p.slug))
                .map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group flex flex-col rounded-2xl border-2 border-slate-200 bg-slate-50/30 p-6 text-left transition-all duration-300 hover:border-prg-blue hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-prg-blue/10 text-prg-blue flex items-center justify-center mb-4 group-hover:bg-prg-blue group-hover:text-white transition-colors">
                    <CategoryIcon slug={p.slug} className="w-7 h-7" />
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-prg-blue transition-colors" style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed flex-grow">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-end">
                    <span className="inline-flex h-11 min-w-[7rem] items-center justify-center gap-2 px-4 rounded-xl text-sm font-semibold text-white bg-prg-blue group-hover:bg-prg-blue-dark transition-colors shadow-sm">
                      View &amp; book
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
