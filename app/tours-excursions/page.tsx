import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { pillars, getPillarBySlug } from "@/data/pillars";
import { categorySlugsWithListings } from "@/data/listings";
import { pillarProductCodes } from "@/data/pillarProducts";
import { getStaticProductSummaries } from "@/data/staticProductSummaries";
import { CategoryIcon } from "@/components/icons/CategoryIcons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { ToursCategoryFilter } from "@/components/tours-excursions/ToursCategoryFilter";
import { ToursSortSelect, type ToursSortValue } from "@/components/tours-excursions/ToursSortSelect";
import type { ViatorProductSummary } from "@/lib/viator-api";
import type { Metadata } from "next";

/** Ensure the page always runs with current searchParams (category, sort, page). */
export const dynamic = "force-dynamic";

const SITE_URL = "https://prg365.com";
const DEFAULT_OG_IMAGE =
  "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/aru365/best%20tours%20in%20prague.png";

const PAGE_TITLE = "Tours & Excursions in Prague";
const PAGE_DESCRIPTION =
  "Browse and book tours and excursions in Prague. Walking tours, castle visits, beer tours, day trips, river cruises and more. Compare and book with free cancellation.";
const META_TITLE = "Prague Tours & Excursions | Walking, Castle, Beer, Day Trips | Prg365";

/** Categories that appear in the filter (exclude hidden). Same list used for metadata and sitemap. */
const HIDDEN_CATEGORIES: string[] = [];
const FILTER_CATEGORIES = categorySlugsWithListings.filter((s) => !HIDDEN_CATEGORIES.includes(s));

const PER_PAGE = 21;
const VALID_SORT = ["price_asc", "price_desc", "rating_asc", "rating_desc"] as const;

export type TourExcursionItem = {
  categorySlug: string;
  productCode: string;
  summary: ViatorProductSummary;
};

/** Parse numeric price from fromPriceDisplay for sorting (e.g. "Price from $44" → 44). */
function parsePriceFromDisplay(display: string): number {
  const match = display.replace(/,/g, "").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : NaN;
}

function buildAllTours(): TourExcursionItem[] {
  const items: TourExcursionItem[] = [];
  for (const categorySlug of Object.keys(pillarProductCodes)) {
    const codes = pillarProductCodes[categorySlug];
    if (!codes?.length) continue;
    const summaries = getStaticProductSummaries(codes, categorySlug);
    for (let i = 0; i < summaries.length; i++) {
      items.push({
        categorySlug,
        productCode: summaries[i].productCode,
        summary: summaries[i],
      });
    }
  }
  return items;
}

function sortTours(items: TourExcursionItem[], sort: ToursSortValue): TourExcursionItem[] {
  const sorted = [...items];
  switch (sort) {
    case "price_asc":
      sorted.sort((a, b) => {
        const pa = parsePriceFromDisplay(a.summary.fromPriceDisplay);
        const pb = parsePriceFromDisplay(b.summary.fromPriceDisplay);
        if (Number.isNaN(pa) && Number.isNaN(pb)) return 0;
        if (Number.isNaN(pa)) return 1;
        if (Number.isNaN(pb)) return -1;
        return pa - pb;
      });
      break;
    case "price_desc":
      sorted.sort((a, b) => {
        const pa = parsePriceFromDisplay(a.summary.fromPriceDisplay);
        const pb = parsePriceFromDisplay(b.summary.fromPriceDisplay);
        if (Number.isNaN(pa) && Number.isNaN(pb)) return 0;
        if (Number.isNaN(pa)) return -1;
        if (Number.isNaN(pb)) return 1;
        return pb - pa;
      });
      break;
    case "rating_asc":
      sorted.sort((a, b) => a.summary.rating - b.summary.rating);
      break;
    case "rating_desc":
      sorted.sort((a, b) => b.summary.rating - a.summary.rating);
      break;
    default:
      break;
  }
  return sorted;
}

function buildQuery(params: { category?: string | null; sort?: string | null; page?: number }): string {
  const q = new URLSearchParams();
  if (params.category) q.set("category", params.category);
  if (params.sort) q.set("sort", params.sort);
  if (params.page != null && params.page > 1) q.set("page", String(params.page));
  const s = q.toString();
  return s ? `?${s}` : "";
}

type Props = {
  searchParams: Promise<{ category?: string; sort?: string; page?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { category: categoryParam } = await searchParams;
  const validCategory =
    categoryParam && FILTER_CATEGORIES.includes(categoryParam) ? categoryParam : null;
  const pillar = validCategory ? getPillarBySlug(validCategory) : null;

  if (pillar) {
    const title = `${pillar.title} | Tours & Excursions | Prg365`;
    const description =
      pillar.description.length > 160
        ? pillar.description.slice(0, 157).trim() + "..."
        : pillar.description;
    const url = `${SITE_URL}/tours-excursions?category=${encodeURIComponent(validCategory!)}`;
    return {
      title,
      description,
      openGraph: {
        url,
        title,
        description,
        images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `Prg365 – ${pillar.title}` }],
      },
      alternates: { canonical: url },
    };
  }

  return {
    title: META_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
      url: `${SITE_URL}/tours-excursions`,
      title: META_TITLE,
      description: PAGE_DESCRIPTION,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Prg365 – Tours and experiences in Prague" }],
    },
    alternates: { canonical: `${SITE_URL}/tours-excursions` },
  };
}

export default async function ToursExcursionsPage({ searchParams }: Props) {
  const { category: categoryParam, sort: sortParam, page: pageParam } = await searchParams;
  const validCategory =
    categoryParam && FILTER_CATEGORIES.includes(categoryParam) ? categoryParam : null;
  const categoryPillar = validCategory ? getPillarBySlug(validCategory) : null;
  const validSort =
    sortParam && VALID_SORT.includes(sortParam as (typeof VALID_SORT)[number])
      ? (sortParam as ToursSortValue)
      : null;
  const sort: ToursSortValue = validSort ?? "price_asc";

  const allItems = buildAllTours();
  let filtered = validCategory ? allItems.filter((i) => i.categorySlug === validCategory) : allItems;
  filtered = sortTours(filtered, sort);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const currentPage = Math.min(totalPages, Math.max(1, parseInt(pageParam ?? "1", 10) || 1));
  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  const itemListSchema = {
    "@context": "https://schema.org" as const,
    "@type": "ItemList" as const,
    name: categoryPillar ? categoryPillar.title : PAGE_TITLE,
    description: categoryPillar ? categoryPillar.description : PAGE_DESCRIPTION,
    url: categoryPillar
      ? `${SITE_URL}/tours-excursions?category=${encodeURIComponent(validCategory!)}`
      : `${SITE_URL}/tours-excursions`,
    numberOfItems: total,
    itemListElement: pageItems.map((item, i) => ({
      "@type": "ListItem",
      position: start + i + 1,
      item: {
        "@type": "Product",
        name: item.summary.title,
        url: item.summary.productUrl.startsWith("http")
          ? item.summary.productUrl
          : `${SITE_URL}${item.summary.productUrl.startsWith("/") ? "" : "/"}${item.summary.productUrl}`,
      },
    })),
  };

  const filterPillars = pillars.filter((p) => FILTER_CATEGORIES.includes(p.slug));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                ...(categoryPillar
                  ? [
                      { label: "Tours & Excursions", href: "/tours-excursions" },
                      { label: categoryPillar.title },
                    ]
                  : [{ label: "Tours & Excursions" }]),
              ]}
              baseUrl={SITE_URL}
            />
          </div>
        </div>

        <div className="bg-prg-blue/5 border-b border-prg-blue/10 py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1
              className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              {categoryPillar ? categoryPillar.title : PAGE_TITLE}
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {categoryPillar ? categoryPillar.description : PAGE_DESCRIPTION}
            </p>

            <div className="mt-8">
              <Suspense fallback={<div className="h-12 w-52 rounded-xl bg-slate-100 animate-pulse" />}>
                <ToursCategoryFilter
                  options={filterPillars.map((p) => ({
                    value: p.slug,
                    label: p.title.replace(/\s+in\s+Prague$/i, "").trim() || p.title,
                  }))}
                  currentValue={validCategory}
                />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="text-slate-500 text-sm">
              {total === 0 ? (
                "No tours found."
              ) : totalPages > 1 ? (
                <>
                  Showing {start + 1}–{Math.min(start + PER_PAGE, total)} of {total} tour{total !== 1 ? "s" : ""}.
                </>
              ) : validCategory ? (
                <>
                  Showing {total} tour{total !== 1 ? "s" : ""} in this category.
                </>
              ) : (
                <>Showing all {total} tours and excursions.</>
              )}
            </p>
            <Suspense fallback={<div className="h-12 w-44 rounded-xl bg-slate-100 animate-pulse" />}>
              <ToursSortSelect currentValue={sort === "price_asc" ? null : sort} />
            </Suspense>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl">
            {pageItems.map(({ categorySlug: cat, summary }) => {
              const pillar = getPillarBySlug(cat);
              const isExternal = summary.productUrl.startsWith("http");
              const cardContent = (
                <>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                    {summary.imageUrl ? (
                      <Image
                        src={summary.imageUrl}
                        alt=""
                        width={400}
                        height={250}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-slate-400">
                        <CategoryIcon slug={cat} className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col mt-2">
                    <p className="text-xs font-medium text-prg-red uppercase tracking-wider">
                      {pillar?.title.replace(/\s+in\s+Prague$/i, "").trim() ?? cat}
                    </p>
                    <h2 className="font-display font-bold text-lg text-slate-900 mt-1 group-hover:text-prg-red transition-colors" style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
                      {summary.title}
                    </h2>
                    <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-slate-500">
                      {summary.rating > 0 && <span className="font-semibold text-slate-700">{summary.rating.toFixed(1)}</span>}
                      {summary.rating > 0 && summary.reviewCount > 0 && " · "}
                      {summary.reviewCount > 0 && <span>{summary.reviewCount.toLocaleString("en-US")} reviews</span>}
                    </div>
                    <div className="mt-auto pt-3 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-slate-600 text-sm font-medium">{summary.fromPriceDisplay}</p>
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
              const cardClassName =
                "group flex flex-col rounded-2xl border-2 border-prg-red/20 bg-white p-6 text-left transition-all duration-300 hover:border-prg-red hover:shadow-xl hover:shadow-prg-red/10 hover:-translate-y-1";
              if (isExternal) {
                return (
                  <a
                    key={`${cat}-${summary.productCode}`}
                    href={summary.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardContent}
                  </a>
                );
              }
              return (
                <Link key={`${cat}-${summary.productCode}`} href={summary.productUrl} className={cardClassName}>
                  {cardContent}
                </Link>
              );
            })}
          </div>

          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center gap-4" aria-label="Pagination">
              {currentPage > 1 ? (
                <Link
                  href={`/tours-excursions${buildQuery({ category: validCategory, sort: sort !== "price_asc" ? sort : null, page: currentPage - 1 })}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50"
                >
                  ← Previous
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-400">
                  ← Previous
                </span>
              )}
              <span className="text-sm text-slate-600">
                Page {currentPage} of {totalPages}
              </span>
              {currentPage < totalPages ? (
                <Link
                  href={`/tours-excursions${buildQuery({ category: validCategory, sort: sort !== "price_asc" ? sort : null, page: currentPage + 1 })}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50"
                >
                  Next →
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-400">
                  Next →
                </span>
              )}
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
