import { notFound } from "next/navigation";
import {
  getTourListing,
  getTourListingsByCategory,
  categorySlugsWithListings,
} from "@/data/listings";
import { getGuide, getGuideSlugsByCategory, getRelatedGuides } from "@/data/guides";
import { getPillarBySlug } from "@/data/pillars";
import { getStaticProductSummaries, getViatorProductUrl } from "@/data/staticProductSummaries";
import type { ViatorProductSummary } from "@/lib/viator-api";
import { TourListingTemplate } from "@/components/TourListingTemplate";
import { GuideTemplate } from "@/components/GuideTemplate";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

const SITE_URL = "https://prg365.com";
const DEFAULT_OG_IMAGE =
  "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/aru365/Prg365.png";

type Props = {
  params: Promise<{ slug: string; tourSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: categorySlug, tourSlug } = await params;
  const pillar = getPillarBySlug(categorySlug);
  const categoryTitle = pillar?.title ?? categorySlug;
  const pageUrl = `${SITE_URL}/${categorySlug}/${tourSlug}`;
  const ogImages = [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Prg365 – Tours and experiences in Prague" }];

  const guide = getGuide(categorySlug, tourSlug);
  if (guide) {
    const title = `${guide.title} | ${categoryTitle} | Prg365`;
    return {
      title,
      description: guide.description,
      openGraph: { title, description: guide.description, url: pageUrl, images: ogImages },
      alternates: { canonical: pageUrl },
    };
  }

  const listing = getTourListing(categorySlug, tourSlug);
  if (!listing) return {};
  const summary = getStaticProductSummaries([listing.productCode], categorySlug)[0] ?? null;
  const displayOperator = summary?.operator ?? listing.operator;
  const displayTitle = listing.seoTitle ?? `${displayOperator} — ${listing.angle}`;
  const title = `${displayTitle} | ${categoryTitle} | Prg365`;
  return {
    title,
    description: listing.metaDescription,
    openGraph: { title, description: listing.metaDescription, url: pageUrl, images: ogImages },
    alternates: { canonical: pageUrl },
  };
}

export async function generateStaticParams() {
  const params: { slug: string; tourSlug: string }[] = [];
  for (const categorySlug of categorySlugsWithListings) {
    const listings = getTourListingsByCategory(categorySlug);
    for (const listing of listings) {
      params.push({ slug: categorySlug, tourSlug: listing.slug });
    }
    const guideSlugs = getGuideSlugsByCategory(categorySlug);
    for (const guideSlug of guideSlugs) {
      params.push({ slug: categorySlug, tourSlug: guideSlug });
    }
  }
  return params;
}

export default async function CategorySubPage({ params }: Props) {
  const { slug: categorySlug, tourSlug } = await params;

  const pillar = getPillarBySlug(categorySlug);
  const categoryTitle = pillar?.title ?? categorySlug;
  const categoryHref = `/${categorySlug}`;

  // Guide page
  const guide = getGuide(categorySlug, tourSlug);
  if (guide) {
    const productCodesToFetch: string[] = [];
    for (const pick of guide.picks) {
      const listing = getTourListing(categorySlug, pick.slug);
      if (listing && !productCodesToFetch.includes(listing.productCode)) {
        productCodesToFetch.push(listing.productCode);
      }
    }
    const staticSummaries = getStaticProductSummaries(productCodesToFetch, categorySlug);
    const codeToProduct = new Map(staticSummaries.map((s) => [s.productCode, s]));
    const picksWithTours = guide.picks.map((pick) => {
      const listing = getTourListing(categorySlug, pick.slug);
      const tour = listing ? (codeToProduct.get(listing.productCode) ?? null) : null;
      return { pick, tour };
    });
    const relatedGuides = getRelatedGuides(categorySlug, guide.slug, 3).map((g) => ({
      label: g.title,
      href: `/${categorySlug}/${g.slug}`,
    }));
    return (
      <>
        <GuideTemplate
          guide={guide}
          categoryTitle={categoryTitle}
          categoryHref={categoryHref}
          picksWithTours={picksWithTours}
          relatedGuides={relatedGuides}
        />
        <Footer />
      </>
    );
  }

  // Tour listing page – static data only (no live API)
  if (!categorySlugsWithListings.includes(categorySlug)) notFound();
  const listing = getTourListing(categorySlug, tourSlug);
  if (!listing) notFound();

  const allListings = getTourListingsByCategory(categorySlug);
  const relatedListingsRaw = allListings
    .filter((l) => l.productCode !== listing.productCode)
    .slice(0, 3);
  const relatedProductCodes = relatedListingsRaw.map((l) => l.productCode);

  let liveData: ViatorProductSummary | null = getStaticProductSummaries([listing.productCode], categorySlug)[0] ?? null;
  let relatedProducts: ViatorProductSummary[] =
    relatedProductCodes.length > 0 ? getStaticProductSummaries(relatedProductCodes, categorySlug) : [];

  if (liveData) {
    liveData = { ...liveData, productUrl: getViatorProductUrl(listing.productCode) };
  }
  relatedProducts = relatedProducts.map((p) => ({
    ...p,
    productUrl: getViatorProductUrl(p.productCode),
  }));

  const codeToImage = new Map(relatedProducts.map((p) => [p.productCode, p.imageUrl ?? null]));
  const relatedListings = relatedListingsRaw.map((l) => ({
    listing: l,
    imageUrl: codeToImage.get(l.productCode) ?? null,
  }));

  return (
    <>
      <TourListingTemplate
        listing={listing}
        categoryTitle={categoryTitle}
        categoryHref={categoryHref}
        liveData={liveData ?? undefined}
        relatedListings={relatedListings}
        viatorItinerary={undefined}
      />
      <Footer />
    </>
  );
}
