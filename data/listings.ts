/**
 * Unified tour listings module for categories with custom listing pages.
 */
import type { TourListing } from "./catamaranListings";
import { pillars } from "./pillars";
import {
  beerToursCategorySlug,
  beerToursListings,
} from "./beerToursListings";
import {
  castleToursCategorySlug,
  castleToursListings,
} from "./castleToursListings";
import {
  dayTripsCategorySlug,
  dayTripsListings,
} from "./dayTripsListings";
import {
  foodToursCategorySlug,
  foodToursListings,
} from "./foodToursListings";
import {
  jewishHeritageToursCategorySlug,
  jewishHeritageToursListings,
} from "./jewishHeritageToursListings";
import {
  nightToursCategorySlug,
  nightToursListings,
} from "./nightToursListings";
import {
  bikeToursCategorySlug,
  bikeToursListings,
} from "./bikeToursListings";
import {
  culturalExperiencesCategorySlug,
  culturalExperiencesListings,
} from "./culturalExperiencesListings";
import {
  photographyToursCategorySlug,
  photographyToursListings,
} from "./photographyToursListings";
import {
  privateToursCategorySlug,
  privateToursListings,
} from "./privateToursListings";
import {
  riverCruisesCategorySlug,
  riverCruisesListings,
} from "./riverCruisesListings";
import {
  walkingToursCategorySlug,
  walkingToursListings,
} from "./walkingToursListings";

export type { TourListing };

const listingMap: Record<string, TourListing[]> = {
  ...Object.fromEntries(pillars.map((p) => [p.slug, [] as TourListing[]])),
  [walkingToursCategorySlug]: walkingToursListings,
  [castleToursCategorySlug]: castleToursListings,
  [beerToursCategorySlug]: beerToursListings,
  [dayTripsCategorySlug]: dayTripsListings,
  [foodToursCategorySlug]: foodToursListings,
  [jewishHeritageToursCategorySlug]: jewishHeritageToursListings,
  [nightToursCategorySlug]: nightToursListings,
  [bikeToursCategorySlug]: bikeToursListings,
  [culturalExperiencesCategorySlug]: culturalExperiencesListings,
  [photographyToursCategorySlug]: photographyToursListings,
  [privateToursCategorySlug]: privateToursListings,
  [riverCruisesCategorySlug]: riverCruisesListings,
};

/** Category slugs that have tour listing pages (for routing) */
export const categorySlugsWithListings: string[] = pillars.map((p) => p.slug);

/** Resolve a tour listing by category and tour slug; returns null if not found */
export function getTourListing(
  categorySlug: string,
  tourSlug: string
): TourListing | null {
  const listings = listingMap[categorySlug];
  if (!listings) return null;
  return listings.find((l) => l.slug === tourSlug) ?? null;
}

/** All tour listings for a category (for generateStaticParams) */
export function getTourListingsByCategory(
  categorySlug: string
): TourListing[] {
  const listings = listingMap[categorySlug];
  return listings ?? [];
}

/** Get listing by category + product code (for pillar cards: link to internal page when we have one) */
export function getListingByProductCode(
  categorySlug: string,
  productCode: string
): TourListing | null {
  const listings = listingMap[categorySlug];
  if (!listings) return null;
  return listings.find((l) => l.productCode === productCode) ?? null;
}
