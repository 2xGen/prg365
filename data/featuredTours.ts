/**
 * Featured / top-pick tours for homepage and best-tours page.
 * Prague: empty for now; add when Prague tours are added.
 */
export interface FeaturedTour {
  id: string;
  title: string;
  fromPrice: string;
  fromPriceLabel?: string;
  categorySlug?: string;
}

export const featuredTours: FeaturedTour[] = [];
