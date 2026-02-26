import { notFound } from "next/navigation";
import { getPillarBySlug, isPillarSlug } from "@/data/pillars";
import { getProductCodesForPillar } from "@/data/pillarProducts";
import { getStaticProductSummaries } from "@/data/staticProductSummaries";
import { PillarTemplate } from "@/components/PillarTemplate";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

const SITE_URL = "https://prg365.com";
const DEFAULT_OG_IMAGE =
  "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/aru365/best%20tours%20in%20prague.png";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isPillarSlug(slug)) return {};
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};
  const title = `Book ${pillar.title} | Prg365`;
  const description = `${pillar.description} Compare options and book with free cancellation.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Prg365 – Tours and experiences in Prague" }],
    },
    alternates: {
      canonical: `${SITE_URL}/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const { pillars } = await import("@/data/pillars");
  return pillars.map((p) => ({ slug: p.slug }));
}

export default async function PillarPage({ params }: Props) {
  const { slug } = await params;
  if (!isPillarSlug(slug)) notFound();
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  const productCodes = getProductCodesForPillar(slug);
  const featuredProducts =
    productCodes.length > 0 ? getStaticProductSummaries(productCodes, slug) : [];
  const passToTemplate =
    featuredProducts.length > 0 && featuredProducts.some((p) => p.title && p.title.trim().length > 0)
      ? featuredProducts
      : undefined;

  return (
    <>
      <PillarTemplate
        pillar={pillar}
        featuredProducts={passToTemplate}
      />
      <Footer />
    </>
  );
}
