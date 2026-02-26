/**
 * Per-tour listing data for Walking Tours in Prague.
 * Product codes match pillarProducts "walking-tours-in-prague"; first 4 = our picks, next 6 = more options.
 * Each listing includes Best for, What's included, Itinerary, Highlights, and FAQ for full tour detail pages.
 */
import type { TourListing } from "./catamaranListings";

export const walkingToursCategorySlug = "walking-tours-in-prague";

export const walkingToursListings: TourListing[] = [
  {
    slug: "prague-afternoon-walking-tour-prague-castle",
    productCode: "8524P12",
    operator: "Explore Prague",
    angle: "3-hour afternoon tour including Prague Castle",
    metaDescription: "Prague 3-hour afternoon walking tour including Prague Castle. Explore Old Town and castle with a guide. Compare prices and book with free cancellation.",
    intro: "This 3-hour afternoon walking tour takes in Prague Castle and the historic centre with a knowledgeable guide. You’ll see the castle complex, St Vitus Cathedral, Golden Lane, and key viewpoints, then descend through Malá Strana toward the river. Ideal for first-time visitors who want to see the castle and main sights in one efficient half-day walk.",
    bestFor: [
      "First-time visitors who want Prague Castle and the historic centre in one go",
      "Afternoon starters who prefer a 3-hour tour rather than a full day",
      "Travelers who want a guided overview of the castle and its history",
      "Anyone looking for a well-paced walk with photo stops",
    ],
    inclusions: [
      "Professional local guide",
      "3-hour guided walking tour",
      "Prague Castle area and historic centre",
      "St Vitus Cathedral (exterior) and castle grounds",
      "Headsets for clear commentary (where used)",
    ],
    itinerary: [
      {
        stop: "Meeting point (Old Town or designated spot)",
        description: "Meet your guide at the agreed location. After a short introduction, you’ll set off toward Prague Castle, either on foot through Malá Strana or by tram, depending on the operator.",
      },
      {
        stop: "Prague Castle complex",
        description: "Explore the castle grounds: St Vitus Cathedral, Old Royal Palace, Golden Lane, and the viewpoints over the city. Your guide explains the history of the castle and the Czech kings and republic.",
      },
      {
        stop: "Malá Strana (Lesser Town)",
        description: "Walk down from the castle through Malá Strana, past baroque churches and cobbled streets, toward the Vltava River and Charles Bridge.",
      },
      {
        stop: "End point",
        description: "The tour typically ends near Charles Bridge or in the Old Town. Your guide can suggest places to continue exploring or where to find food and drink.",
      },
    ],
    highlights: [
      "Prague Castle and St Vitus Cathedral",
      "Golden Lane and castle viewpoints",
      "Malá Strana and riverside",
      "3-hour afternoon format",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "How long is the Prague Castle afternoon walking tour?",
        answer: "The tour lasts about 3 hours, including the castle complex and the walk down through Malá Strana. Exact duration can vary slightly by operator.",
      },
      {
        question: "Is Prague Castle entrance included?",
        answer: "Most walking tours include access to the castle grounds and exterior areas. Entry to paid interiors (e.g. certain exhibitions) may be optional or extra—check the tour details when you book.",
      },
      {
        question: "Where does the tour start and end?",
        answer: "Start and end points depend on the operator; often in or near Old Town, with the tour ending near Charles Bridge or in the historic centre. Your booking confirmation will give the exact meeting point.",
      },
      {
        question: "Is this tour suitable for people with limited mobility?",
        answer: "The castle area involves steps and uneven surfaces. If you have mobility concerns, contact the operator before booking to discuss options.",
      },
    ],
  },
  {
    slug: "old-town-new-town-jewish-quarter-tour",
    productCode: "8524P11",
    operator: "Explore Prague",
    angle: "Old Town, New Town & Jewish Quarter",
    metaDescription: "Prague walking tour of Old Town, New Town and Jewish Quarter. Discover history and landmarks with a guide. Book with free cancellation.",
    intro: "Explore Prague’s Old Town, New Town and Jewish Quarter on this guided walking tour. You’ll cover the main districts and hear the stories behind the streets, squares and synagogues, from medieval history to the Jewish heritage and the modern city.",
    bestFor: [
      "Visitors who want to understand Prague’s districts in one tour",
      "Anyone interested in Jewish heritage and Old Town history",
      "Travelers who prefer a district-focused walk over a castle-focused one",
      "First-timers looking for orientation and context",
    ],
    inclusions: [
      "Professional local guide",
      "Guided walking tour of Old Town, New Town and Jewish Quarter",
      "Commentary on history, architecture and culture",
      "Headsets where used for larger groups",
    ],
    itinerary: [
      {
        stop: "Meeting point",
        description: "Meet your guide in the Old Town or a central location. You’ll get a short overview of the route and what you’ll see in each district.",
      },
      {
        stop: "Old Town (Staré Město)",
        description: "Walk through Old Town Square and the surrounding streets. See the Astronomical Clock, Týn Church and the Old Town Hall, with stories about medieval Prague and the Hussite era.",
      },
      {
        stop: "Jewish Quarter (Josefov)",
        description: "Enter the Jewish Quarter and learn about its history, synagogues and the Old Jewish Cemetery. Commentary covers both the rich cultural heritage and the impact of the World Wars.",
      },
      {
        stop: "New Town (Nové Město)",
        description: "Pass through or into New Town to see Wenceslas Square and other landmarks. Your guide links the area to more recent history and modern Prague.",
      },
      {
        stop: "End point",
        description: "The tour ends in a central location. Your guide can recommend places to eat or continue exploring.",
      },
    ],
    highlights: [
      "Old Town Square and Astronomical Clock",
      "Jewish Quarter (Josefov)",
      "New Town and Wenceslas Square",
      "History and culture in one walk",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "Does the tour go inside the synagogues?",
        answer: "It depends on the operator and ticket type. Some tours include entry to one or more synagogues and the Jewish Museum; others focus on exterior and street-level commentary. Check the tour description when booking.",
      },
      {
        question: "How long is the Old Town, New Town and Jewish Quarter tour?",
        answer: "Typically around 3 hours, but duration can vary by operator. Your confirmation will state the exact length.",
      },
      {
        question: "Is the tour in English?",
        answer: "Most operators offer the tour in English; other languages may be available. Select your language when booking.",
      },
    ],
  },
  {
    slug: "essential-prague",
    productCode: "205344P1",
    operator: "Local operator",
    angle: "Essential Prague highlights",
    metaDescription: "Essential Prague walking tour: see the main highlights with a local guide. Compare options and book with free cancellation.",
    intro: "The Essential Prague tour covers the must-see sights and stories in the historic centre. You’ll see Old Town Square, the Astronomical Clock, the Jewish Quarter, Charles Bridge and key landmarks with a local guide. A concise way to get oriented and see the main highlights in one go. This tip-based tour lets you decide what the experience was worth at the end.",
    bestFor: [
      "First-time visitors who want the main highlights in one tour",
      "Travelers on a budget who like tip-based pricing",
      "Anyone who wants a concise intro to Old Town and the river",
      "Guests who prefer a relaxed pace with a local perspective",
    ],
    inclusions: [
      "Local guide (tip-based)",
      "Guided walk of Old Town and main highlights",
      "Commentary on history, legends and practical tips",
      "Stops at Old Town Square, Jewish Quarter area, Charles Bridge",
    ],
    itinerary: [
      {
        stop: "Old Town Square",
        description: "Start at the heart of the Old Town. See the Astronomical Clock, Týn Church and the Old Town Hall. Your guide shares the stories behind the square and the clock’s famous procession.",
      },
      {
        stop: "Jewish Quarter (Josefov)",
        description: "Walk through the Jewish Quarter and past its synagogues and the Old Jewish Cemetery. Hear about the history and heritage of the district.",
      },
      {
        stop: "Charles Bridge",
        description: "Cross or approach Charles Bridge, with views of the Vltava and Prague Castle. Learn why the bridge was built and the legends tied to its statues.",
      },
      {
        stop: "End of tour",
        description: "The tour ends in a central location. You can tip your guide according to how much you enjoyed the experience.",
      },
    ],
    highlights: [
      "Old Town Square and Astronomical Clock",
      "Jewish Quarter and Charles Bridge",
      "Tip-based tour",
      "Must-see highlights in one walk",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "How does the tip-based tour work?",
        answer: "You join the tour and at the end you pay the guide what you think the tour was worth. There is often a suggested amount; check the operator’s page for details.",
      },
      {
        question: "How long is the Essential Prague tour?",
        answer: "Typically around 2.5 to 3 hours, covering Old Town, the Jewish Quarter and Charles Bridge. Exact duration is on the operator’s booking page.",
      },
      {
        question: "Do I need to book in advance?",
        answer: "Yes. Even for tip-based tours, booking secures your place and gives you the meeting point and time.",
      },
    ],
  },
  {
    slug: "best-of-prague",
    productCode: "20364P1",
    operator: "Local operator",
    angle: "The Best of Prague",
    metaDescription: "The Best of Prague walking tour: top sights and stories. Book with free cancellation.",
    intro: "The Best of Prague brings together the city’s top sights and stories in one guided walk. You’ll cover the historic centre, key monuments and famous streets with a professional guide. Well suited to visitors who want a single tour that hits the highlights and gives a clear overview of Prague’s history and layout.",
    bestFor: [
      "Visitors who want one tour that covers the main sights",
      "Travelers with limited time who want maximum coverage",
      "Anyone who likes a structured, highlight-focused walk",
      "First-timers who want a clear overview before exploring on their own",
    ],
    inclusions: [
      "Professional guide",
      "Guided walking tour of Prague highlights",
      "Commentary on history and main monuments",
      "Headsets where used",
    ],
    itinerary: [
      {
        stop: "Meeting point",
        description: "Meet your guide at the designated spot, usually in or near Old Town. You’ll get a short intro to the route and themes of the tour.",
      },
      {
        stop: "Old Town and Old Town Square",
        description: "Walk through the Old Town to the Astronomical Clock and Old Town Square. Your guide explains the history of the square and the clock.",
      },
      {
        stop: "Toward the river and Charles Bridge",
        description: "Head toward the Vltava and Charles Bridge, with stories about the bridge, the river and the views of Prague Castle.",
      },
      {
        stop: "Further highlights (route-dependent)",
        description: "Depending on the operator, the tour may include Malá Strana, the castle area, or the Jewish Quarter. Your guide keeps the pace and commentary focused on the best of Prague.",
      },
      {
        stop: "End point",
        description: "The tour ends in a central location. Your guide can suggest what to see or do next.",
      },
    ],
    highlights: [
      "Old Town Square and Astronomical Clock",
      "Charles Bridge and river views",
      "Top sights in one tour",
      "Professional guided overview",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "How long is The Best of Prague tour?",
        answer: "Duration varies by operator; often around 3 hours. Check the booking page for the exact length.",
      },
      {
        question: "Does the tour include Prague Castle?",
        answer: "Some versions include the castle area; others focus on Old Town and the bridge. The tour description will state what’s included.",
      },
      {
        question: "Is the tour suitable for children?",
        answer: "Walking tours are generally suitable for families; the pace and content depend on the guide. Very long tours may be tiring for young children—check the duration before booking.",
      },
    ],
  },
  {
    slug: "old-town-medieval-underground-dungeon",
    productCode: "52397P1",
    operator: "Local operator",
    angle: "Old Town, medieval underground & dungeon",
    metaDescription: "Prague Old Town and medieval underground and dungeon tour. Explore beneath the streets with a guide. Book with free cancellation.",
    intro: "Go beneath Prague’s Old Town on this tour of the medieval underground and dungeon. You’ll discover the cellars and passages that lie under the streets and hear how they were used through the centuries—from storage and defence to darker tales. A different perspective on the city, ideal for anyone interested in medieval history and hidden spaces.",
    bestFor: [
      "Visitors interested in medieval history and hidden Prague",
      "Anyone who wants to get off the main streets and underground",
      "Travelers who enjoy dungeon and cellar experiences",
      "Groups looking for something a bit different from a standard walking tour",
    ],
    inclusions: [
      "Professional guide",
      "Guided tour of medieval underground and dungeon",
      "Entry to underground areas (as per operator)",
      "Commentary on history and use of the spaces",
    ],
    itinerary: [
      {
        stop: "Meeting point",
        description: "Meet your guide at the designated location, usually near Old Town Square or the underground entrance.",
      },
      {
        stop: "Old Town streets (brief)",
        description: "A short walk to set the scene: how the medieval town was built and why cellars and passages existed under the streets.",
      },
      {
        stop: "Medieval underground",
        description: "Enter the underground cellars and passages. Your guide explains how they were used—storage, workshops, shelter—and what life was like in medieval Prague.",
      },
      {
        stop: "Dungeon area",
        description: "Visit the dungeon section and hear the stories and legends associated with it. Content may include themes that are not suitable for very young children.",
      },
      {
        stop: "Return and end",
        description: "You’ll be brought back to street level and the tour ends. Your guide can point you to nearby sights or amenities.",
      },
    ],
    highlights: [
      "Medieval underground and cellars",
      "Dungeon experience",
      "Hidden Prague beneath the streets",
      "Stories and history",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "Is the underground tour suitable for claustrophobia?",
        answer: "The spaces can be narrow and dimly lit. If you are uncomfortable in enclosed or dark places, check the operator’s description or contact them before booking.",
      },
      {
        question: "Are children allowed on the dungeon tour?",
        answer: "Age limits and suitability vary by operator; some recommend a minimum age. Check the tour details before booking.",
      },
      {
        question: "How long is the underground and dungeon tour?",
        answer: "Typically around 1 to 1.5 hours, but check the specific tour for exact duration.",
      },
    ],
  },
  {
    slug: "old-town-charles-bridge-prague-castle",
    productCode: "9396P5",
    operator: "Local operator",
    angle: "Old Town, Charles Bridge & Prague Castle",
    metaDescription: "Prague walking tour of Old Town, Charles Bridge and Prague Castle. See the classic route with a guide. Book with free cancellation.",
    intro: "This walking tour follows the classic route from Old Town across Charles Bridge to Prague Castle. You’ll see the most photographed spots in Prague and get the history and stories from your guide. Ideal for first-time visitors who want the iconic sequence: Old Town → Charles Bridge → castle.",
    bestFor: [
      "First-time visitors who want the classic Prague route",
      "Anyone who wants to walk across Charles Bridge with a guide",
      "Travelers who want Old Town, bridge and castle in one tour",
      "Photography-minded visitors who want the iconic viewpoints",
    ],
    inclusions: [
      "Professional guide",
      "Guided walk: Old Town, Charles Bridge, Prague Castle area",
      "Commentary on history and legends",
      "Headsets where used",
    ],
    itinerary: [
      {
        stop: "Old Town",
        description: "Start in the Old Town and pass key sights such as the Astronomical Clock and Old Town Square. Your guide sets the scene before you head to the river.",
      },
      {
        stop: "Charles Bridge",
        description: "Cross Charles Bridge on foot. Hear about its construction, the statues and the legends, and enjoy the views of the Vltava and Prague Castle.",
      },
      {
        stop: "Malá Strana and approach to castle",
        description: "Walk through Malá Strana and up toward Prague Castle. Your guide explains the district and the castle’s role in Czech history.",
      },
      {
        stop: "Prague Castle",
        description: "Explore the castle complex: courtyards, St Vitus Cathedral (exterior or interior depending on tour), and viewpoints. The tour then usually ends at or near the castle or back in the centre.",
      },
    ],
    highlights: [
      "Old Town and Astronomical Clock",
      "Charles Bridge",
      "Prague Castle",
      "Classic Prague route",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "How long is the Old Town, Charles Bridge and Castle tour?",
        answer: "Often around 3 to 4 hours, depending on the operator and how much time is spent at the castle. Check the booking page for exact duration.",
      },
      {
        question: "Is there a lot of walking or stairs?",
        answer: "Yes. You walk from Old Town to the castle, and the castle area involves steps and slopes. Comfortable shoes are recommended.",
      },
      {
        question: "Does the tour include entry to St Vitus Cathedral?",
        answer: "Some tours include entry to the cathedral; others view it from the outside. The tour description will specify.",
      },
    ],
  },
  {
    slug: "see-it-all-prague-river-boat-cruise",
    productCode: "8367P20",
    operator: "PragueWay",
    angle: "One day see-it-all + river boat cruise",
    metaDescription: "One-day See It All Prague tour with river boat cruise. Walking and boat in one day. Book with free cancellation.",
    intro: "Combine a full-day Prague walking tour with a river boat cruise. You’ll see the main sights on foot in the morning or afternoon, then step on board for a cruise on the Vltava. It’s a full overview of the city in one day: historic centre, key monuments and the river perspective.",
    bestFor: [
      "Visitors who want a full-day Prague experience in one package",
      "Anyone who wants both walking and a boat cruise",
      "Travelers with one day to see as much as possible",
      "Guests who like variety: streets in the morning, river in the afternoon (or vice versa)",
    ],
    inclusions: [
      "Professional guide for walking part",
      "Guided walking tour of main sights",
      "River boat cruise on the Vltava",
      "Commentary on both walking and cruise",
    ],
    itinerary: [
      {
        stop: "Meeting and walking tour start",
        description: "Meet your guide and begin the walking portion. You’ll cover the main areas of the historic centre—Old Town, possibly the Jewish Quarter, Charles Bridge and/or Malá Strana—with commentary along the way.",
      },
      {
        stop: "Midpoint (break or transition)",
        description: "Depending on the schedule, there may be a short break or transition between the walking tour and the boat. Your guide will direct you to the pier.",
      },
      {
        stop: "River boat cruise",
        description: "Board the boat for a cruise on the Vltava. See the city from the water: Prague Castle, Charles Bridge, and the banks of the river. Commentary is usually provided on board.",
      },
      {
        stop: "End of day",
        description: "The tour ends after the cruise (or after the walking part if the cruise is first). Your guide can suggest where to go next.",
      },
    ],
    highlights: [
      "Full-day walking + boat combination",
      "Main sights on foot",
      "Vltava river cruise",
      "See-it-all in one day",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "How long is the See It All tour?",
        answer: "It’s a full-day experience; total duration is typically around 6–8 hours including the walking tour and boat cruise. Exact times are on the operator’s page.",
      },
      {
        question: "Is lunch included?",
        answer: "It depends on the operator. Some tours include lunch or a snack; others leave you free to buy food during a break. Check the tour details.",
      },
      {
        question: "What if the weather is bad?",
        answer: "Boats may run in light rain; heavy weather can affect the cruise. Operators usually have policies for rescheduling or refunds—check at booking.",
      },
    ],
  },
  {
    slug: "full-day-private-walking-tour-lunch-boat",
    productCode: "8576P1",
    operator: "Local operator",
    angle: "Full-day private walking tour with lunch & boat",
    metaDescription: "Prague full-day private walking tour with lunch and boat trip. Personalised itinerary. Book with free cancellation.",
    intro: "A full-day private walking tour of Prague with lunch and a boat trip included. You get a dedicated guide who can tailor the pace and focus to you, plus a sit-down meal and time on the Vltava. Ideal for couples, families or small groups who want a personalised day without sharing the guide with others.",
    bestFor: [
      "Couples or families who want a private guide for the day",
      "Travelers who want lunch and a boat trip included",
      "Anyone who prefers a customisable pace and focus",
      "Small groups willing to pay for an exclusive experience",
    ],
    inclusions: [
      "Private guide for the full day",
      "Guided walking tour (itinerary tailored to you)",
      "Lunch (as per operator)",
      "River boat trip on the Vltava",
      "Flexible pace and stops",
    ],
    itinerary: [
      {
        stop: "Meeting and tour start",
        description: "Meet your private guide at your hotel or a central point. You’ll agree on the main sights you want to cover and set off on foot through the historic centre.",
      },
      {
        stop: "Morning sights",
        description: "Visit Old Town, the Astronomical Clock, the Jewish Quarter, Charles Bridge, Malá Strana and/or Prague Castle—in an order that suits you and your guide.",
      },
      {
        stop: "Lunch",
        description: "Stop for lunch at a local restaurant (included as per the tour). Your guide can recommend dishes and explain Czech cuisine.",
      },
      {
        stop: "Boat trip",
        description: "Board a boat for a cruise on the Vltava. Enjoy the views and relax after the morning walk.",
      },
      {
        stop: "End of day",
        description: "Your guide can accompany you back to your hotel or leave you in a central location. The rest of the day is yours to explore.",
      },
    ],
    highlights: [
      "Private guide all day",
      "Lunch included",
      "Vltava boat trip",
      "Tailored itinerary",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "How many people can join the private tour?",
        answer: "Group size and pricing depend on the operator. Typically it’s for 2–6 people; some allow more. Check the booking page for the maximum and price.",
      },
      {
        question: "Can we choose what to see?",
        answer: "Yes. Private tours are designed to be flexible. Tell your guide your priorities (e.g. more castle, more Jewish Quarter) and they’ll adapt the route.",
      },
      {
        question: "Is hotel pickup included?",
        answer: "Many private tours include pickup from your hotel. Confirm with the operator when you book.",
      },
    ],
  },
  {
    slug: "small-group-old-town-jewish-quarter",
    productCode: "184581P1",
    operator: "Local operator",
    angle: "Really small group (max 6) – Old Town & Jewish Quarter",
    metaDescription: "Really small group Prague walking tour (max 6) of Old Town and Jewish Quarter. Book with free cancellation.",
    intro: "This walking tour keeps the group to a maximum of six people, focusing on Old Town and the Jewish Quarter. You get more time for questions, a more intimate atmosphere and a guide who can adapt to your interests. Ideal if you prefer a small-group experience over a large tour.",
    bestFor: [
      "Travelers who prefer very small groups (max 6)",
      "Anyone who wants more time for questions and discussion",
      "Visitors interested in Old Town and Jewish Quarter in depth",
      "Guests who like an intimate, conversational style",
    ],
    inclusions: [
      "Professional guide",
      "Small-group walking tour (max 6 people)",
      "Old Town and Jewish Quarter focus",
      "Commentary and time for questions",
    ],
    itinerary: [
      {
        stop: "Meeting point",
        description: "Meet your guide at the designated spot. With such a small group, introductions are quick and you can mention any particular interests.",
      },
      {
        stop: "Old Town",
        description: "Walk through the Old Town: Old Town Square, the Astronomical Clock and the surrounding streets. Your guide explains the history and can go deeper on topics that interest the group.",
      },
      {
        stop: "Jewish Quarter (Josefov)",
        description: "Enter the Jewish Quarter and explore its history, synagogues and the Old Jewish Cemetery. The small group size makes it easier to hear and ask questions.",
      },
      {
        stop: "End point",
        description: "The tour ends in a central location. Your guide can recommend cafés, restaurants or further sights.",
      },
    ],
    highlights: [
      "Maximum 6 people",
      "Old Town and Jewish Quarter",
      "More time for questions",
      "Intimate guided walk",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "Why is the group size limited to 6?",
        answer: "A very small group allows a more conversational tour, easier hearing, and a guide who can tailor the commentary and pace to the participants.",
      },
      {
        question: "How long is the small-group tour?",
        answer: "Typically around 2.5 to 3 hours. Check the operator’s page for the exact duration.",
      },
      {
        question: "Do we go inside the synagogues?",
        answer: "It depends on the operator. Some tours include synagogue entry; others focus on the streets and exterior. Check the tour description.",
      },
    ],
  },
  {
    slug: "discover-prague-tour",
    productCode: "26685P1",
    operator: "Local operator",
    angle: "Discover Prague",
    metaDescription: "Discover Prague walking tour: explore the city with a guide. Book with free cancellation.",
    intro: "The Discover Prague tour is a guided walk that introduces you to the city’s history and main areas. You’ll see key sights, hear stories and get practical tips for the rest of your stay. A solid option for a first walking tour of Prague.",
    bestFor: [
      "First-time visitors to Prague",
      "Anyone who wants a general introduction to the city",
      "Travelers looking for a straightforward, well-paced walk",
      "Guests who want a classic “discovery” tour before exploring on their own",
    ],
    inclusions: [
      "Professional guide",
      "Guided walking tour of Prague",
      "Introduction to main areas and history",
      "Practical tips and recommendations",
    ],
    itinerary: [
      {
        stop: "Meeting point",
        description: "Meet your guide in the centre. You’ll get a short overview of what you’ll see and the themes of the tour.",
      },
      {
        stop: "Historic centre",
        description: "Walk through the historic centre: Old Town Square, the Astronomical Clock, and the streets that connect the main landmarks. Your guide shares history and legends.",
      },
      {
        stop: "Toward the river and bridge",
        description: "Head toward the Vltava and Charles Bridge (or the area around it). Enjoy the views and hear why the bridge and the river are central to Prague’s identity.",
      },
      {
        stop: "End point",
        description: "The tour ends in a central spot. Your guide can suggest what to do next—museums, food, or more walking.",
      },
    ],
    highlights: [
      "Introduction to Prague",
      "Old Town and main sights",
      "Stories and practical tips",
      "Classic discovery walk",
    ],
    faqs: [
      {
        question: "Who operates this tour?",
        answer: "This tour is bookable through Viator. The actual operator (the guide or company running the tour) is shown on the Viator booking page when you select your date and options.",
      },
      {
        question: "How long is the Discover Prague tour?",
        answer: "Usually around 2.5 to 3 hours. Exact duration is on the operator’s booking page.",
      },
      {
        question: "Is this tour good for first-time visitors?",
        answer: "Yes. It’s designed as an introduction to the city’s layout, history and main sights, and often includes tips for the rest of your stay.",
      },
      {
        question: "What language is the tour in?",
        answer: "Most operators offer the tour in English; other languages may be available. Select your preferred language when booking.",
      },
    ],
  },
];
