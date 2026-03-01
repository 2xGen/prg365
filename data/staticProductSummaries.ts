/**
 * Static snapshot of Viator-style product data for tour cards and listing pages.
 * Production never calls the Viator API; all titles, prices, ratings, and images
 * come from staticProductSummariesGenerated.json (and staticByCode fallback below).
 *
 * To refresh: run `node scripts/dump-static-product-summaries.mjs` (with VIATOR_API_KEY
 * in .env.local). It fetches products/bulk + schedules/bulk and overwrites the JSON.
 * Commit the updated JSON so production has the latest data.
 */
import type { ViatorProductSummary } from "@/lib/viator-api";
import { getListingByProductCode } from "@/data/listings";
import { getCategoryBookUrl, getViatorProductBookUrl } from "@/lib/booking";

/** Filled by scripts/dump-static-product-summaries.mjs (products bulk + schedules bulk). Production uses only this + staticByCode; no live API. */
import generatedStatic from "./staticProductSummariesGenerated.json";

const generatedByCode = generatedStatic as Record<
  string,
  { title: string; fromPriceDisplay: string; rating: number; reviewCount: number; imageUrl: string | null; freeCancellation: boolean; productUrl?: string | null; operator?: string | null }
>;

/**
 * Returns the Viator booking URL for a product in www.viator.com format (not shop.live.rc.viator.com).
 * Use for "View options & book" on single tour pages and anywhere we need a product booking link.
 */
export function getViatorProductUrl(productCode: string): string {
  return getViatorProductBookUrl(productCode);
}

/** Target US visitors: normalize EUR/CZK to USD display. Approximate rates. */
const EUR_TO_USD = 1.08;
const CZK_TO_USD = 0.043;

function toUsdDisplay(fromPriceDisplay: string): string {
  const eurMatch = fromPriceDisplay.match(/Price from EUR\s*([\d.,]+)/i);
  if (eurMatch) {
    const num = parseFloat(eurMatch[1].replace(/,/g, ""));
    if (!Number.isNaN(num)) return `Price from $${Math.round(num * EUR_TO_USD)}`;
  }
  const czkMatch = fromPriceDisplay.match(/Price from CZK\s*([\d.,]+)/i);
  if (czkMatch) {
    const num = parseFloat(czkMatch[1].replace(/,/g, ""));
    if (!Number.isNaN(num)) return `Price from $${Math.round(num * CZK_TO_USD)}`;
  }
  return fromPriceDisplay;
}

/** Static card data per product code (fallback when no generated snapshot). */
const staticByCode: Record<
  string,
  {
    title: string;
    fromPriceDisplay: string;
    rating: number;
    reviewCount: number;
    imageUrl?: string | null;
    freeCancellation?: boolean;
  }
> = {
  // Catamaran (first 4 = top picks – real data so production matches localhost)
  "119085P1": {
    title: "Dolphin Catamaran Snorkel and Sail with Open Bar",
    fromPriceDisplay: "Price from $44",
    rating: 4.7,
    reviewCount: 2382,
    imageUrl: null,
    freeCancellation: true,
  },
  "2785MORSNORKEL": {
    title: "Half-Day Snorkel Sail Tour with Caribbean Lunch",
    fromPriceDisplay: "Price from $85",
    rating: 4.8,
    reviewCount: 720,
    imageUrl: null,
    freeCancellation: true,
  },
  "6593P7": {
    title: "Luxury Lagoon Cruise with Onboard Chef and Signature Cocktails",
    fromPriceDisplay: "Price from $149",
    rating: 4.8,
    reviewCount: 248,
    imageUrl: null,
    freeCancellation: true,
  },
  "8936P1": {
    title: "Arusun Catamaran Sail with Snorkeling in Aruba",
    fromPriceDisplay: "Price from $35",
    rating: 4.8,
    reviewCount: 2449,
    imageUrl: null,
    freeCancellation: true,
  },
  // Catamaran more options
  "444239P8": {
    title: "Tropical Sailing Experience with BBQ Lunch or BBQ Dinner in Aruba",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "47607P3": {
    title: "Premium Catamaran Morning Sail: Snorkeling, Mimosas and Brunch",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "47607P2": {
    title: "Premium Catamaran Afternoon Sail: Snorkeling and Lunch",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "37387P3": {
    title: "Aruba Jolly Pirate Afternoon Sail with Snorkeling",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "2785AFTSNORKEL": {
    title: "Antilla Shipwreck and Catalina Bay Snorkel Sail",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "6593P8": {
    title: "Iconic Aruba Sail and Snorkel Experience",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  // Sunset and dinner (first 4)
  "2785DINNER": {
    title: "Aruba Dinner Cruise by Catamaran",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "8936P5": {
    title: "Aruba Sunset Sail – The Arusun Catamaran",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "245508": {
    title: "Palm Pleasure Sunset Sail",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "119085P2": {
    title: "Catamaran Dolphin Sunset Cruise in Aruba",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  // Sunset more
  "6593DINNER": {
    title: "Aruba Sunset Cruise and Seaside Dinner",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "47607P4": {
    title: "Aruba Happy Hour Sunset Sail",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "6593P10": {
    title: "Aruba Sunset Sail Experience",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "2785SUNSET": {
    title: "Aruba Sunset Catamaran Cruise",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "37387P2": {
    title: "Sunset Pirate Cruise in Aruba",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "6593P14": {
    title: "Havanas Sunset Cruise",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  // Snorkeling
  "325347P2": { title: "Discover Scuba Diving on Aruba's Reef", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "186518P5": { title: "Discover Snorkeling Mangel Halto", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "325347P3": { title: "Turtle Spotting Snorkeling Excursion", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5567676P3": { title: "Aruba Turtle Spotting Snorkeling Adventure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // ATV
  "6841P7": { title: "Natural Pool and Cave Explorer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "6687ATV": { title: "Aruba ATV Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "137607P10": { title: "Aruba ATV Tours Single and Double Seater 4-Hour Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "47774P3": { title: "Aruba's Secret Beach and Cave Pool UTV and ATV Adventure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Island sightseeing
  "6593P16": { title: "Aruba Natural Wonders Jeep Tour Caves and Natural Pool", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "7389P1": { title: "Aruba Island Sightseeing Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "137607P19": { title: "Aruba Private Luxury Jeep Tours", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "441143P1": { title: "National Park Safari Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Photoshoots
  "5628877P6": { title: "Aruba Golden Hour Beach Photoshoot", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5616292P5": { title: "Family Couple and Engagement Photography", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "474314P1": { title: "Clear Kayak Shoot LUX", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5563642P1": { title: "Professional Sunset Photoshoot", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Horseback
  "7927P1": { title: "Small Group Beach Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "14261P1": { title: "Natural Pool Horseback Riding", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "13835P20": { title: "Sunset Rock Formation Countryside and Beach", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "7927P13": { title: "Ecological and Beach Horseback Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Romantic
  "6593P11": { title: "Exclusive Dinner Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5493518P1": { title: "Eagle Beach Romantic Sunset Picnic Cabana", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5493518P2": { title: "Beach Romantic Sunset Photoshoot Picnic Cabana", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Private & luxury
  "171319P1": { title: "VIP Airport Hosting Arrival", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "171319P2": { title: "VIP Airport Hosting Departure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "6687P7": { title: "VIP Luxury SUV Airport Transfer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5492822P1": { title: "Private Round Trip Airport Transfer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Airport transfers (Aruba) — fallback until you run dump; run `node scripts/dump-static-product-summaries.mjs` for Viator images & live prices
  "12431P5": { title: "Private Airport Transportation Services", fromPriceDisplay: "Price from $45", rating: 0, reviewCount: 0, imageUrl: null },
  "2455AUAAPTRND": { title: "Roundtrip Aruba Airport Transfer", fromPriceDisplay: "Price from $75", rating: 0, reviewCount: 0, imageUrl: null },
  "332620P2": { title: "Private Transfers", fromPriceDisplay: "Price from $40", rating: 0, reviewCount: 0, imageUrl: null },
  "242476P1": { title: "AyCaramba Transfer and Private Tour Aruba", fromPriceDisplay: "Price from $120", rating: 0, reviewCount: 0, imageUrl: null },
  "3046AUAAPTRND": { title: "Roundtrip Aruba Airport Private Transfer", fromPriceDisplay: "Price from $80", rating: 0, reviewCount: 0, imageUrl: null },
  "5597840P1": { title: "Aruba Private Airport Transfer", fromPriceDisplay: "Price from $42", rating: 0, reviewCount: 0, imageUrl: null },
  "7389P5": { title: "One-Way Private Airport Transfer", fromPriceDisplay: "Price from $38", rating: 0, reviewCount: 0, imageUrl: null },
  "5568850P2": { title: "Private Airport Transfers", fromPriceDisplay: "Price from $40", rating: 0, reviewCount: 0, imageUrl: null },
  // Sea Glass Island (Aruba) — fallback until dump
  "419440P1": { title: "Sea Glass Island Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "122173P3": { title: "Kayak Tour to Seaglass Island", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "358117P3": { title: "Sea Glass Island and Clear Kayak Adventure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "300281P10": { title: "Sea Glass Island Kayak Tour Afternoon", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "358117P10": { title: "Sea Glass Island Tour By Boat", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "300281P7": { title: "Sea Glass Island Kayak Sunset Snorkeling Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "300281P12": { title: "Sea Glass Island Kayak Tour Morning Adventure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Water sports (Aruba) — fallback until dump
  "119085P5": { title: "Water Skiing and Wakeboarding", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "137607P22": { title: "Aruba Jet Ski Rental", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "119085P3": { title: "Flyboarding and Jetovator 30 min", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "119085P4": { title: "Jet Ski Waverunner Rental", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "102406P1": { title: "Parasailing", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "119085P6": { title: "Tube Ride 15 minutes", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8936P2": { title: "Aruba Parasailing Adventure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Prague walking tours – fallback when API off or no generated snapshot
  "8524P12": { title: "Prague 3-hour Afternoon Walking Tour including Prague Castle", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8524P11": { title: "Prague Old Town, New Town and Jewish Quarter Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "205344P1": { title: "Essential Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "20364P1": { title: "The Best of Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "52397P1": { title: "Prague Old Town and Medieval Underground and Dungeon Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "9396P5": { title: "Prague Walking Tour of Old Town, Charles Bridge and Prague Castle", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8367P20": { title: "One Day See It All Prague Tour with River Boat Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8576P1": { title: "Prague Full Day Private Walking Tour with Lunch and Boat Trip", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "184581P1": { title: "Really Small Group Prague Old Town and Jewish Quarter Walking Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "26685P1": { title: "Discover Prague Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Prague castle & palace tours – fallback when no generated snapshot
  "9396P1": { title: "Prague Castle Walking Tour Including Admission Tickets", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "268173P3": { title: "Small Group Prague Castle Tour Including Admissions", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "9396P4": { title: "Skip-the-line Prague Castle Admission Ticket", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "195834P35": { title: "Prague Castle Skip-the-line Ticket with Audio Guide", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "20364P60": { title: "Prague Castle Interiors Tour with English Guide and Entry Ticket", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "205344P2": { title: "Complete Castle Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "26685P12": { title: "Prague Castle Private Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "144059P1": { title: "One Tour To Rule Them All", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Prague beer tours – fallback when no generated snapshot
  "353060P1": { title: "Hidden Beer Gems of Old Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "320146P1": { title: "Pubs of Prague Historic Tour with Drinks Included", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "20624P1": { title: "Guided Prague City Food Tasting Walking Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "24261P1": { title: "Beer Museum Guided Tour and Bottle Your own Beer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "20364P8": { title: "Small Group Local Pubs Walking Tour And Traditional Czech Dinner", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "7614P1": { title: "Czech Beer Tasting Paired with Cheese and Crackers in Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8656P1": { title: "Prague Mini Breweries Beer Tour with Czech Appetizers", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "144059P2": { title: "One Prague Tour Old Town Road", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8367P19": { title: "Castle Side Beer Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "176832P1": { title: "Prague Foodie Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Day trips from Prague – fallback when no generated snapshot
  "116712P13": { title: "Český Krumlov Full-day tour from Prague and back", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8528P1": { title: "Small-Group Bohemian Switzerland National Park Day Trip from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "10919P5": { title: "Trip to Český Krumlov from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "72192P3": { title: "THE BEST of 2 Countries in 1 Day – Bohemian and Saxon Switzerland", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "116712P43": { title: "Bohemian and Saxon Switzerland tour from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "48593P1": { title: "Day Trip to Kutná Hora by bus from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "72192P14": { title: "THE BEST OF SAXON SWITZERLAND FROM PRAGUE – Bastei Bridge and Dresden", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "26739P12": { title: "Karlovy Vary day tour from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "10919P10": { title: "Trip to Karlovy Vary and Moser Factory from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "2190CEDT10": { title: "Kutná Hora Day Trip from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // River cruises in Prague – fallback when no generated snapshot
  "10919P3": { title: "Prague Half-Day City Tour Including Vltava River Cruise, Castle and Old Town", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "63851P9": { title: "Prague Boats 1-hour Devil's Channel Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "67514P2": { title: "Jazzboat Prague Popular Evening Cruise With Live Jazz", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8367P15": { title: "Charles Bridge River Boat Cruise and Guided Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "63851P1": { title: "Prague Boats 1-hour Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "10919P41": { title: "Prague Sightseeing Boat Cruise with Buffet Dinner", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "2190CEDT6": { title: "Prague Night Tour and River Vltava Dinner Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "63851P6": { title: "Prague Boats 3-hour Crystal Dinner Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "63851P10": { title: "Prague Boats 2-hour Lunch Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "63851P18": { title: "Evening eco cruise with a glass of Prosecco", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Food tours in Prague – fallback when no generated snapshot
  "7812P36": { title: "Secret Food Tours Prague Malá Strana", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "441609P4": { title: "Local Prague Food Tour in secrets HIDDEN GEMS Small Groups", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "299238P6": { title: "Good Evening Old Town Food Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "20624P2": { title: "Eating Prague by Night Drinks and Food Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "169084P1": { title: "Delicious Food Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "35546P1": { title: "Prague Food and Culture Tour with Local Foodies", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "20364P9": { title: "5 Course Medieval Dining Experience in Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "24380P284": { title: "Prague's Favorite Food Private Small Group Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Jewish heritage tours in Prague – fallback when no generated snapshot
  "9396P2": { title: "Prague Jewish Quarter and Synagogue Walking Tour with admission tickets", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "9396P10": { title: "Prague Old Town and Jewish Quarter 90 minutes Guided Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "9396P18": { title: "Prague Jewish Town Admission Ticket with introduction", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "110804P247": { title: "Prague's Jewish Quarter Meander through its storied streets on an audio walk", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "2190CEDT15": { title: "Terezin Concentration Camp Day Tour from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8524P13": { title: "Terezin Fortress and Concentration Camp Tour from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "16436P14": { title: "Terezin Memorial Half-Day Tour from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "123929P19": { title: "Best of Prague and trip to Terezin concentration camp ALL INCLUSIVE", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8576P10": { title: "Terezin Concentration Camp Private Tour from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Night tours in Prague – fallback when no generated snapshot
  "164611P3": { title: "Private Sightseeing in Prague By Night", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "36131P1": { title: "PRAGUE BY NIGHT walking tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "9241P1": { title: "Prague Old Town Mystery Walking Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "7434P6": { title: "Prague Ghosts and Legends of Old Town Walking Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "435382P8": { title: "Prague Night Combo Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "435382P5": { title: "Prague in Night Trike Group Tour Live Guided", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5557409P6": { title: "Where Actual Czechs Drink Beer A Short Tour and Beer Experience", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "104219P3": { title: "Best views of Prague by night", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "41319P15": { title: "Prague at night 4 hours Private Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Private tours in Prague – fallback when no generated snapshot
  "26685P5": { title: "Prague In One Day Private Tour 7 Hours", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "42115P2": { title: "Historical Car Sightseeing Tour in Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "381158P3": { title: "Prague Private Transfer to/from Prague Airport", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8469P2": { title: "Prague Airport Private Arrival Transfer And Half-Day City Walking Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "104357P520": { title: "Prague Jewish Quartier Walking Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "55815P1": { title: "Prague Old Town Facts and Legends", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "26685P41": { title: "Prague Private Boat Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "26685P21": { title: "Prague Private Boat Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "64475P3": { title: "Best of Prague Private Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Bike tours in Prague – fallback when no generated snapshot
  "8678P67": { title: "Bohemian Switzerland Boat n Bike Private Trip from Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "40610P13": { title: "Prague Mountain Biking Blast Through The Best Singletracks", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "332549P395": { title: "Effortless E-Bike Tour of Prague Old, Lesser and New Towns", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "162403P1": { title: "Prague Cycle Boat", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "435382P23": { title: "Prague's Viewpoints and Sightseeing on Comfortable E-bike", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "435382P22": { title: "Prague's Panoramic Viewpoints and Sightseeing on Electric Trike", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "13139P6": { title: "Prague 2 Hour Beer Bike with 50 L with Unlimited Beer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "14331P2": { title: "Small Group 1 Hour Segway Sightseeing Tour in Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "40610P12": { title: "From Prague Mountain Biking Full Day Trip to Karlstejn Castle", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "435382P21": { title: "Prague Electric Trike Tour Sightseeing Viewpoints and Fun", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Photography tours in Prague – fallback when no generated snapshot
  "286699P1": { title: "Photoshoting in the Most Signatured Places in Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "37094P67": { title: "Private Photoshoot with a Professional Photographer in Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "8566P1": { title: "Photography Tour of Prague by Night", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "412164P32": { title: "Prague Private Photoshoot", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "144126P1": { title: "Prague Photo Walk Tour Family Couple Solo", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "286699P2": { title: "Love Story Photoshooting in Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "471717P1": { title: "Prague Photographer Couple Engagement Portrait Photoshoot", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "321017P70": { title: "Prague Professional Photoshoot at Prague Castle", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "321017P72": { title: "Prague Professional Photoshoot at Prague Old Town", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "286699P3": { title: "Night Lights of Prague Photoshoot after Sunset", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Cultural experiences in Prague – fallback when no generated snapshot
  "24380P278": { title: "Best of Prague Highlights and Hidden Gems", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "64475P4": { title: "Rick Steves Guides Private Tour of Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "20364P46": { title: "Jewish History and Old Town Walking Tour of Prague Private", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "64475P21": { title: "LUXURY Personal Tour of Prague with PERSONAL PRAGUE GUIDE", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "270388P1": { title: "Historical Private Day Tour of Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "24445P19": { title: "Prague Communism Tour with Communism Museum", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "9457P3": { title: "Private Custom Full-Day Tour of Prague", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "299238P4": { title: "Beer and Tapas Tour Learn About the Czechs Beloved Beverage", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "30791P515": { title: "Prague Czech Beer Experience", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "154718P1": { title: "Communism and Its Fall with Eyewitness Prague Private Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
};

/**
 * Returns static product summaries for the given product codes and category.
 * Used when the Viator API returns no data so production shows the same cards as localhost.
 * Builds productUrl: internal link when we have a listing; else Viator product URL from dump (productUrl) or category URL.
 */
export function getStaticProductSummaries(
  productCodes: string[],
  categorySlug: string
): ViatorProductSummary[] {
  const out: ViatorProductSummary[] = [];
  const categoryBookUrl = getCategoryBookUrl(categorySlug);
  for (const code of productCodes) {
    const generated = generatedByCode[code];
    const fallback = staticByCode[code];
    const data = generated ?? fallback;
    if (!data) continue;
    const listing = getListingByProductCode(categorySlug, code);
    const title = listing?.seoTitle ?? data.title;
    const productUrl = listing
      ? `/${categorySlug}/${listing.slug}`
      : getViatorProductBookUrl(code);
    const operator = "operator" in data && typeof (data as { operator?: string }).operator === "string"
      ? (data as { operator: string }).operator
      : listing?.operator;
    out.push({
      productCode: code,
      title,
      productUrl,
      fromPriceDisplay: toUsdDisplay(data.fromPriceDisplay),
      reviewCount: data.reviewCount,
      rating: data.rating,
      imageUrl: data.imageUrl ?? null,
      freeCancellation: data.freeCancellation ?? false,
      ...(operator && { operator }),
    });
  }
  return out;
}
