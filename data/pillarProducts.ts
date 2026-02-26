/**
 * Viator product codes per pillar. First 4 = top picks (large cards); next 6 = "More options" (smaller cards).
 * Same bulk API call fetches all; pillar template splits by position.
 */
export const pillarProductCodes: Record<string, string[]> = {
  "walking-tours-in-prague": [
    "8524P12",   // Top pick: Prague 3-hour Afternoon Walking Tour including Prague Castle
    "8524P11",   // Top pick: Prague Old Town, New Town and Jewish Quarter Tour
    "205344P1",  // Top pick: Essential Prague
    "20364P1",   // Top pick: The Best of Prague
    "52397P1",   // More: Prague Oldtown and Medieval Underground and Dungeon Tour
    "9396P5",    // More: Prague Walking Tour of Old Town, Charles Bridge and Prague Castle
    "8367P20",   // More: One Day See It All Prague Tour with River Boat Cruise
    "8576P1",    // More: Prague Full Day Private Walking Tour with Lunch and Boat Trip
    "184581P1",  // More: Really Small Group Prague Old Town and Jewish Quarter Walking Tour
    "26685P1",   // More: Discover Prague Tour
  ],
  "castle-and-palace-tours-in-prague": [
    "9396P1",    // Prague Castle Walking Tour Including Admission Tickets
    "268173P3",  // Small Group Prague Castle tour including admissions
    "9396P4",    // Skip-the-line Prague Castle Admission Ticket
    "195834P35", // Prague Castle Skip-the-line Ticket with Audio guide
    "20364P60",  // Prague Castle Interiors Tour with English Guide and Entry Ticket
    "205344P2",  // Complete Castle
    "9396P5",    // Prague Walking Tour of Old Town, Charles Bridge and Prague Castle
    "26685P12",  // Prague Castle Private Tour
    "8524P12",   // Prague 3-hour Afternoon Walking Tour including Prague Castle
    "144059P1",  // One Tour To Rule Them All
  ],
  "beer-tours-in-prague": [
    "353060P1",  // Hidden Beer Gems of Old Prague
    "320146P1",  // Pubs of Prague Historic Tour with Drinks Included
    "20624P1",   // Guided Prague City Food Tasting Walking Tour
    "24261P1",   // Beer Museum Guided Tour and Bottle Your own Beer
    "20364P8",   // Small Group Local Pubs Walking Tour And Traditional Czech Dinner
    "7614P1",    // Czech Beer Tasting Paired with Cheese and Crackers
    "8656P1",    // Prague Mini Breweries Beer Tour with Czech Appetizers
    "144059P2",  // One Prague Tour Old Town Road
    "8367P19",   // Castle Side Beer Tour
    "176832P1",  // Prague Foodie Tour
  ],
  "day-trips-from-prague": [
    "116712P13",  // Český Krumlov full-day tour from Prague and back
    "8528P1",     // Small-Group Bohemian Switzerland National Park day trip
    "10919P5",    // Trip to Český Krumlov from Prague
    "72192P3",    // The best of 2 countries in 1 day – Bohemian and Saxon Switzerland
    "116712P43",  // Bohemian and Saxon Switzerland tour from Prague
    "48593P1",    // Day trip to Kutná Hora by bus from Prague
    "72192P14",   // The best of Saxon Switzerland – Bastei Bridge and Dresden
    "26739P12",   // Karlovy Vary day tour from Prague
    "10919P10",   // Trip to Karlovy Vary and Moser factory from Prague
    "2190CEDT10", // Kutná Hora day trip from Prague
  ],
  "river-cruises-in-prague": [
    "10919P3",    // Prague half-day city tour including Vltava cruise, castle and Old Town
    "63851P9",    // Prague Boats 1-hour Devil's Channel cruise
    "67514P2",    // Jazzboat Prague evening cruise with live jazz
    "8367P15",    // Charles Bridge river boat cruise and guided tour
    "63851P1",    // Prague Boats 1-hour cruise
    "10919P41",   // Prague sightseeing boat cruise with buffet dinner
    "2190CEDT6",  // Prague night tour and River Vltava dinner cruise
    "63851P6",    // Prague Boats 3-hour Crystal dinner cruise
    "63851P10",   // Prague Boats 2-hour lunch cruise
    "63851P18",   // Evening eco cruise with a glass of Prosecco
  ],
  "food-tours-in-prague": [
    "7812P36",    // Secret Food Tours Prague Malá Strana
    "176832P1",   // Prague Foodie Tour
    "441609P4",   // Local Prague Food Tour hidden gems small groups
    "20624P1",    // Guided Prague City Food Tasting Walking Tour
    "299238P6",   // Good Evening Old Town food tour
    "20624P2",    // Eating Prague by night drinks and food tour
    "169084P1",   // Delicious Food Tour
    "35546P1",    // Prague Food and Culture Tour with Local Foodies
    "20364P9",    // 5 Course Medieval Dining Experience in Prague
    "24380P284",  // Prague's Favorite Food private small-group tour
  ],
  "jewish-heritage-tours-in-prague": [
    "9396P2",     // Prague Jewish Quarter and Synagogue walking tour with admission
    "184581P1",   // Really small group Old Town and Jewish Quarter walking tour
    "9396P10",    // Prague Old Town and Jewish Quarter 90 minutes guided tour
    "9396P18",    // Prague Jewish Town admission ticket with introduction
    "110804P247", // Prague's Jewish Quarter audio walk
    "2190CEDT15", // Terezín concentration camp day tour from Prague
    "8524P13",    // Terezín fortress and concentration camp tour from Prague
    "16436P14",   // Terezín Memorial half-day tour from Prague
    "123929P19",  // Best of Prague and trip to Terezín all inclusive
    "8576P10",    // Terezín concentration camp private tour from Prague
  ],
  "night-tours-in-prague": [
    "164611P3",   // Private sightseeing in Prague by night
    "36131P1",    // Prague by night walking tour
    "9241P1",     // Prague Old Town mystery walking tour
    "7434P6",     // Prague ghosts and legends of Old Town walking tour
    "52397P1",    // Prague Oldtown medieval underground and dungeon tour
    "435382P8",   // Prague night combo tour
    "435382P5",   // Prague in night trike group tour
    "5557409P6",  // Where actual Czechs drink beer short tour
    "104219P3",   // Best views of Prague by night
    "41319P15",   // Prague at night 4 hours private tour
  ],
  "bike-tours-in-prague": [
    "8678P67",     // Bohemian Switzerland boat n bike private trip from Prague
    "40610P13",    // Prague Mountain Biking Blast singletracks
    "332549P395",  // Effortless E-Bike Tour Prague Old, Lesser and New Towns
    "162403P1",    // Prague Cycle Boat
    "435382P23",   // Prague's Viewpoints and Sightseeing on Comfortable E-bike
    "435382P22",   // Prague's Panoramic Viewpoints on Electric Trike
    "13139P6",     // Prague 2 Hour Beer Bike 50 L Unlimited Beer
    "14331P2",     // Small Group 1 Hour Segway Sightseeing Prague
    "40610P12",    // From Prague Mountain biking full day to Karlstejn Castle
    "435382P21",   // Prague Electric Trike Tour Sightseeing Viewpoints and Fun
  ],
  "cultural-experiences-in-prague": [
    "24380P278",   // Best of Prague Highlights and Hidden Gems
    "64475P4",     // Rick Steves guides Private Tour of Prague
    "20364P46",    // Jewish History and Old Town Walking Tour Prague Private
    "64475P21",    // LUXURY Personal Tour of Prague with PERSONAL PRAGUE GUIDE
    "270388P1",    // Historical private day tour of Prague
    "24445P19",    // Prague Communism tour with Communism museum
    "9457P3",      // Private Custom Full-Day Tour of Prague
    "299238P4",    // Beer and Tapas Tour Czechs beloved beverage
    "30791P515",   // Prague Czech Beer Experience
    "154718P1",    // Communism and its fall eyewitness Prague private tour
  ],
  "photography-tours-in-prague": [
    "286699P1",    // Photoshooting in the most signatured places in Prague
    "37094P67",    // Private Photoshoot with a Professional Photographer in Prague
    "8566P1",      // Photography Tour of Prague by Night
    "412164P32",   // Prague Private Photoshoot
    "144126P1",    // Prague Photo Walk Tour Family Couple Solo
    "286699P2",    // Love story photoshooting in Prague
    "471717P1",    // Prague Photographer Couple Engagement Portrait Photoshoot
    "321017P70",   // Prague Professional photoshoot at Prague Castle
    "321017P72",   // Prague Professional photoshoot at Prague Old Town
    "286699P3",    // Night lights of Prague Photoshoot after sunset
  ],
  "private-tours-in-prague": [
    "26685P5",     // Prague in one day private tour 7 hours
    "42115P2",     // Historical car sightseeing tour in Prague
    "381158P3",    // Prague private transfer to/from airport
    "8469P2",      // Prague airport arrival transfer and half-day city walking tour
    "104357P520",  // Prague Jewish Quarter walking tour (private)
    "55815P1",     // Prague Old Town facts and legends
    "26685P41",    // Prague private boat tour
    "26685P21",    // Prague private boat tour (Vltava)
    "64475P3",     // Best of Prague private tour
    "8576P1",      // Prague full-day private walking tour with lunch and boat trip
  ],
};

/** Returns all product codes for the pillar; same list is used for one bulk API call. First 4 = top picks, rest = more options. */
export function getProductCodesForPillar(pillarSlug: string): string[] {
  const codes = pillarProductCodes[pillarSlug];
  if (!codes || codes.length === 0) return [];
  return codes;
}
