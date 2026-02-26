/**
 * Guide pages (sub-category / discovery pages) that sit between the category page and tour listing pages.
 * Example: /catamaran-cruises-in-aruba/morning-cruises
 */

export interface GuidePick {
  /** Tour slug (links to tour listing page) */
  slug: string;
  /** Short paragraph: why we recommend this as a top pick */
  whyWePickIt: string;
  /** Who this tour is best for (bullets) */
  bestFor: string[];
}

export interface GuidePage {
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  /** Picks to showcase on the guide – each with why we pick it and best for */
  picks: GuidePick[];
  /** Intro paragraph for the guide */
  intro: string;
  /** What to expect – generic for the guide topic (e.g. morning cruises); avoid operator-specific locations */
  whatToExpect: string[];
  /** Optional: why this topic is a good choice (e.g. why morning cruises) */
  whyMorning?: string;
  /** Optional: custom "why" block with title (e.g. "Why choose a snorkeling catamaran sail?") – overrides whyMorning when set */
  whyBlock?: { title: string; content: string };
  /** Optional: SEO-rich FAQs for the guide */
  faqs?: { question: string; answer: string }[];
}

const guides: GuidePage[] = [
  {
    categorySlug: "catamaran-cruises-in-aruba",
    slug: "morning-cruises",
    title: "Best morning catamaran cruises",
    description:
      "Compare the best morning catamaran cruises in Aruba—brunch sails, early snorkel trips, and Champagne mimosas on the water. Calmer seas and better visibility make mornings ideal.",
    picks: [
      {
        slug: "premium-catamaran-morning-brunch-mimosas",
        whyWePickIt:
          "Octopus delivers a polished morning experience with brunch appetizers, mimosas, cushioned seating, and drinks brought to your seat. The small group size (up to 34) and two top snorkel spots make it ideal for guests who want comfort and quality without a full half-day.",
        bestFor: [
          "Guests who want brunch and mimosas on a relaxed morning sail",
          "Small groups who prefer cushioned seats and table service",
          "Snorkelers who want two great spots without a long day on the water",
          "Anyone who values an intimate cruise over a large party boat",
        ],
      },
      {
        slug: "half-day-snorkel-sail-caribbean-lunch",
        whyWePickIt:
          "Red Sail's half-day sail packs in three snorkel stops—including the Antilla wreck—plus a full Caribbean lunch buffet and open bar. Best for guests who want maximum time on the water and a proper meal included.",
        bestFor: [
          "Guests who want a full 4-hour morning on the water",
          "Snorkelers who want three sites (Antilla, Catalina Bay, Malmok) in one trip",
          "Anyone who wants a Caribbean lunch buffet included, not just snacks",
          "Families and groups looking for a reliable, well-run catamaran",
        ],
      },
    ],
    intro:
      "Morning catamaran cruises are a favourite for good reason: the water is usually calmer, visibility for snorkelling is at its best, and you’re back on land by early afternoon with the rest of the day free. Many operators offer brunch, mimosas, or light breakfast before sailing out to the Antilla wreck and Aruba’s top reefs.",
    whyMorning:
      "Morning departures typically mean lighter winds, clearer water for snorkelling, and cooler temperatures before the midday sun. You’ll also avoid afternoon showers that can sometimes roll through in the Caribbean.",
    whatToExpect: [
      "Check-in at your operator's marina or beach departure point with time to spare before sailing.",
      "Brunch, mimosas, or light breakfast before or as you set sail—many cruises include an open cocktail bar.",
      "Sailing along Aruba’s coastline with unlimited drinks available throughout the cruise.",
      "First snorkel stop: the Antilla shipwreck. This 400-foot German freighter sank in 1939 and remains largely intact. You’ll have time to explore with the crew’s guidance.",
      "Second snorkel stop: the shallow waters of Catalina Bay or Malmok Reef, home to angelfish, damselfish, sea fans, and coral. New to snorkelling? The crew will work with you for a safe, enjoyable experience.",
      "A scenic sail along Aruba’s coast before returning to your departure point.",
    ],
    faqs: [
      {
        question: "What are the best morning catamaran cruises in Aruba?",
        answer:
          "The best morning catamaran cruises in Aruba typically include brunch or breakfast, mimosas or an open bar, and two to three snorkel stops at sites like the Antilla shipwreck, Catalina Bay, and Malmok Reef. Top options include Octopus's premium morning sail with brunch and mimosas, and Red Sail's half-day snorkel sail with a Caribbean lunch buffet. Both offer small groups, experienced crews, and excellent reviews.",
      },
      {
        question: "Is it better to do a morning or afternoon catamaran cruise in Aruba?",
        answer:
          "Morning cruises are generally preferred for snorkeling because the water is calmer, visibility is better, and you avoid the midday sun. Winds tend to be lighter in the morning, and you'll be back on land by early afternoon with the rest of the day free. Afternoon cruises can be good if you want a sunset sail or prefer a later start, but morning departures typically offer the best snorkeling conditions.",
      },
      {
        question: "What is included on morning catamaran cruises in Aruba?",
        answer:
          "Most morning catamaran cruises in Aruba include snorkel equipment and instruction, an open bar (cocktails, sodas, water), and either brunch, breakfast, or light snacks. Some half-day sails also include a full Caribbean lunch buffet. Drinks are usually unlimited throughout the cruise. Check each operator's listing for specifics—some add extras like a souvenir, water slide, or kayaks.",
      },
      {
        question: "How long are morning catamaran cruises in Aruba?",
        answer:
          "Morning catamaran cruises in Aruba typically run 2.5 to 4 hours. Shorter sails (around 2.5–3 hours) usually include two snorkel stops and brunch or snacks. Half-day sails (about 4 hours) often include three snorkel stops and a full lunch buffet. Most cruises return to the marina or beach by early afternoon, leaving you plenty of time for other activities.",
      },
      {
        question: "Do I need to know how to snorkel for a morning catamaran cruise?",
        answer:
          "No. All reputable Aruba morning catamaran cruises provide snorkel equipment and instruction on request. Many include a first stop at a shallow site like Catalina Bay, ideal for beginners to practise. Crews are trained to help first-timers feel comfortable in the water. If you prefer not to snorkel, you can still enjoy the sail, sun, and open bar on board.",
      },
      {
        question: "Where do morning catamaran cruises depart from in Aruba?",
        answer:
          "Morning catamaran cruises in Aruba depart from various marinas and beach locations, depending on the operator. Common departure points include Palm Beach, Noord, and other marina locations. Your booking confirmation will include the exact meeting point and check-in time. Some operators offer optional hotel pickup for an extra fee.",
      },
    ],
  },
  {
    categorySlug: "catamaran-cruises-in-aruba",
    slug: "snorkeling",
    title: "Best snorkeling catamaran cruises",
    description:
      "Compare the best snorkeling catamaran cruises in Aruba—sailing and snorkeling trips to the Antilla wreck, Catalina Bay, and Malmok Reef. Equipment and instruction included.",
    picks: [
      {
        slug: "antilla-shipwreck-catalina-bay-snorkel-sail",
        whyWePickIt:
          "Red Sail’s 3-hour sail delivers two of Aruba’s top snorkel sites—Catalina Bay and the Antilla wreck—with an open bar and bite-sized appetizers. A straightforward, well-run snorkel sail ideal for guests who want to hit the highlights without a full half-day.",
        bestFor: [
          "Snorkelers who want the Antilla wreck and Catalina Bay in one trip",
          "Guests who prefer a 3-hour sail over a full half-day",
          "Anyone who wants open bar and appetizers without the extra time",
          "Travelers looking for a simple, reliable snorkel sail",
        ],
      },
      {
        slug: "arusun-catamaran-sail-snorkeling",
        whyWePickIt:
          "The Arusun’s compact 2.5-hour sail packs snorkeling and open bar into one short trip. A 65-foot catamaran, two snorkel stops at the Antilla and Boca Catalina, and a relaxed vibe. Best for first-timers and anyone with a busy schedule.",
        bestFor: [
          "First-timers who want a short, low-commitment snorkel sail",
          "Anyone with a busy schedule (only 2.5 hours)",
          "Travelers who want snorkeling and open bar without a long day",
          "Guests who prefer a smaller, intimate catamaran",
        ],
      },
      {
        slug: "iconic-aruba-sail-snorkel-experience",
        whyWePickIt:
          "Pelican’s Iconic Sail and Snorkel combines the marine sanctuary, Catalina Bay, and the Antilla wreck. Recognized by Sustainable Travel International, with National Geographic snorkel equipment and professional guides. Ideal for eco-conscious snorkelers.",
        bestFor: [
          "Anyone who wants the classic Aruba snorkel itinerary",
          "Guests who prefer sustainable, well-equipped operators",
          "Snorkelers who want National Geographic–grade gear",
          "Travelers looking for a spacious boat and professional guides",
        ],
      },
    ],
    intro:
      "Sailing and snorkeling in Aruba go hand in hand: the island’s calm, clear water and famous sites—the Antilla wreck, Catalina Bay, Malmok Reef—make snorkel catamaran sails a top choice. Most tours include gear, instruction, and an open bar. Whether you want a short 2.5-hour trip or a full afternoon, you’ll find snorkeling catamaran cruises to fit.",
    whyBlock: {
      title: "Why choose a snorkeling catamaran sail?",
      content:
        "Catamaran snorkel trips offer stability, space, and easy access to Aruba’s best underwater sites. Unlike small speedboats, catamarans have room to move, shade, and roomy decks. Gear and instruction are almost always included, so first-timers can snorkel with confidence. Available in morning and afternoon departures, snorkeling catamaran sails suit all schedules.",
    },
    whatToExpect: [
      "Check-in at your operator’s marina or beach departure point. Safety briefing and gear fitting before you board.",
      "Sail along Aruba’s coast to your first snorkel stop. Most tours visit the Antilla shipwreck, Catalina Bay, and/or Malmok Reef.",
      "First snorkel stop: typically a shallow site like Catalina Bay for beginners, or the Antilla wreck for more experienced snorkelers. Instruction on request.",
      "Second snorkel stop: another reef or wreck site. Spend time exploring colourful fish, coral, and marine life.",
      "Open bar, snacks or appetizers on board throughout. Sail back to the marina or beach.",
    ],
    faqs: [
      {
        question: "What are the best snorkeling catamaran cruises in Aruba?",
        answer:
          "The best snorkeling catamaran cruises in Aruba include Red Sail’s Antilla and Catalina Bay sail, Aruba Watersports Center’s Arusun sail, and Pelican’s Iconic Sail and Snorkel. All visit top sites like the Antilla wreck and Catalina Bay, with equipment and instruction included. Compare duration, group size, and inclusions to find the right snorkel sail for you.",
      },
      {
        question: "Is sailing and snorkeling in Aruba good for beginners?",
        answer:
          "Yes. Aruba’s calm waters and shallow sites like Catalina Bay make snorkel catamaran trips ideal for beginners. All reputable operators provide snorkel equipment and instruction on request. Crews help first-timers feel comfortable in the water, and you can stay on the boat if you prefer.",
      },
      {
        question: "What is included on a snorkeling catamaran cruise in Aruba?",
        answer:
          "Most snorkeling catamaran cruises in Aruba include snorkel gear (mask, fins, snorkel), instruction, an open bar (cocktails, sodas, water), and snacks or appetizers. Some add a full lunch. Equipment is sanitised between uses. Check each operator for exact inclusions.",
      },
      {
        question: "How long do snorkel catamaran sails in Aruba last?",
        answer:
          "Snorkel catamaran sails in Aruba typically run 2.5 to 4 hours. Shorter sails (about 2.5–3 hours) usually include two snorkel stops. Half-day sails (about 4 hours) often include three stops and a lunch buffet. Morning and afternoon departures are available.",
      },
      {
        question: "Where does the Antilla shipwreck snorkel stop?",
        answer:
          "The SS Antilla is a WWII German freighter wreck off Aruba’s coast, among the Caribbean’s largest. Many snorkeling catamaran cruises stop there—visibility is typically 30–50 feet. The wreck starts about 10 feet below the surface and hosts angelfish, parrotfish, stingrays, and more.",
      },
      {
        question: "Do I need my own snorkel gear for a catamaran snorkel trip?",
        answer:
          "No. All snorkeling catamaran cruises in Aruba provide snorkel equipment and instruction. Bring swimwear, a towel, and reef-safe sunscreen. Some operators offer wetsuits or rash guards; check when you book.",
      },
    ],
  },
  {
    categorySlug: "catamaran-cruises-in-aruba",
    slug: "open-bar",
    title: "Best open bar catamaran cruises",
    description:
      "Compare the best open bar catamaran cruises in Aruba—unlimited drinks, snorkeling, and fun on the water. Whether you call it a booze cruise or a party sail, these trips deliver.",
    picks: [
      {
        slug: "dolphin-catamaran-snorkel-open-bar",
        whyWePickIt:
          "The Dolphin delivers one of Aruba’s liveliest open bar experiences: unlimited drinks, two snorkel stops at the Antilla wreck and Boca Catalina, plus a water slide and rope swing. Wraps and tropical fruit included. Perfect for groups and families with teens who want a fun, no-fuss 3 hours on the water.",
        bestFor: [
          "Groups and couples looking for a lively, fun atmosphere",
          "Anyone who wants a water slide and rope swing with their drinks",
          "Snorkelers who want the Antilla and Boca Catalina plus unlimited cocktails",
          "Families with teens who enjoy a party sail vibe",
        ],
      },
      {
        slug: "arusun-catamaran-sail-snorkeling",
        whyWePickIt:
          "The Arusun offers a compact 2.5-hour sail with an unlimited open bar—whisky, rum, vodka, juices, soda, and water. Two snorkel stops, snacks, and a relaxed vibe. Ideal for guests who want drinks included without a long day or a rowdy booze cruise—this one balances fun with a more laid-back feel.",
        bestFor: [
          "Guests who want open bar in a shorter, low-key format",
          "Anyone with a busy schedule (only 2.5 hours)",
          "Travelers who prefer a relaxed drink-and-snorkel combo",
          "First-timers who want unlimited drinks without the full party boat experience",
        ],
      },
      {
        slug: "premium-catamaran-afternoon-sail-lunch",
        whyWePickIt:
          "Octopus brings table service to your open bar: drinks delivered to your cushioned seat, lunch appetizers, and two snorkel stops. Small group (up to 34), no queuing at the bar. Best for guests who want premium cocktails and comfort—more upscale than a typical booze cruise, with Aruba Arriba and spirits served to you.",
        bestFor: [
          "Guests who want drinks brought to their seat, not a bar queue",
          "Small groups who prefer cushioned seats and table service",
          "Anyone who wants an upscale open bar experience with lunch",
          "Snorkelers who want two great spots with maximum comfort",
        ],
      },
    ],
    intro:
      "Open bar catamaran cruises in Aruba are a top choice for groups, couples, and anyone who wants unlimited drinks on the water. Whether you’re after a lively booze cruise with water slides and rope swings or a more relaxed sail with cocktails at your seat, you’ll find options to match. Most include snorkeling at the Antilla wreck and Aruba’s reefs—so you can swim, sip, and sail in one trip.",
    whyBlock: {
      title: "Why choose an open bar catamaran sail?",
      content:
        "Catamaran cruises with open bar let you enjoy unlimited cocktails, beer, wine, and soft drinks without worrying about the tab. Many travellers search for a booze cruise in Aruba—and these sails deliver: snorkeling, sun, and drinks included. Options range from lively party-style trips with water slides to more refined sails with table service. All offer stability, space, and a carefree afternoon on the water.",
    },
    whatToExpect: [
      "Check-in at the marina or beach departure point. Safety briefing and gear fitting if snorkeling.",
      "Unlimited drinks from the open bar—cocktails, spirits, beer, wine, juices, sodas, and water. No paying per drink.",
      "Sail to one or more snorkel stops. Gear and instruction typically included. You can snorkel or stay on deck with a drink.",
      "Snacks, appetizers, or light lunch depending on the tour. Some cruises add water slides, rope swings, or table service.",
      "Scenic sail back to the marina. Most open bar catamaran cruises run 2.5 to 4 hours.",
    ],
    faqs: [
      {
        question: "What are the best open bar catamaran cruises in Aruba?",
        answer:
          "The best open bar catamaran cruises in Aruba include Delphi’s Dolphin (water slide, rope swing, two snorkel stops), the Arusun (compact 2.5-hour sail with full bar), and Octopus’s afternoon sail (drinks to your seat, lunch appetizers). All offer unlimited drinks and snorkeling. Compare vibe—lively vs. relaxed—and duration to find your fit.",
      },
      {
        question: "What is a booze cruise in Aruba?",
        answer:
          "A booze cruise in Aruba is a catamaran or boat tour with an open bar—unlimited drinks included. Many combine snorkeling, sun, and cocktails in one trip. Options range from lively party-style sails with water slides to more relaxed cruises with table service. All let you enjoy drinks on the water without paying per round.",
      },
      {
        question: "Is the open bar really unlimited on Aruba catamaran cruises?",
        answer:
          "Yes. Reputable Aruba catamaran cruises with open bar include unlimited drinks throughout the sail—cocktails, spirits, beer, wine, juices, sodas, and water. Crews keep the bar stocked. Some tours are more generous with spirits than others; check reviews for details. Drinking responsibly is encouraged.",
      },
      {
        question: "Do open bar catamaran cruises in Aruba include snorkeling?",
        answer:
          "Most do. Open bar catamaran cruises in Aruba typically include one or two snorkel stops at the Antilla wreck, Catalina Bay, or Malmok Reef. Snorkel equipment and instruction are usually provided. You can snorkel or stay on deck and enjoy the drinks—the choice is yours.",
      },
      {
        question: "How long do open bar catamaran sails last?",
        answer:
          "Open bar catamaran sails in Aruba typically run 2.5 to 4 hours. Shorter sails (about 2.5–3 hours) focus on two snorkel stops and drinks. Half-day sails (about 4 hours) often add lunch or more stops. Morning and afternoon departures are available.",
      },
      {
        question: "What drinks are included on an open bar catamaran cruise?",
        answer:
          "Most include cocktails (rum punch, Aruba Arriba, etc.), spirits (rum, vodka, gin, whisky), beer, wine, juices, sodas, and water. Premium or top-shelf spirits may vary by operator. Soft drinks and water are always available for non-drinkers.",
      },
    ],
  },
  {
    categorySlug: "catamaran-cruises-in-aruba",
    slug: "families",
    title: "Best catamaran cruises for families",
    description:
      "Compare the best family-friendly catamaran cruises in Aruba—pirate ship sails, water slides, snorkeling, and fun for kids and adults. Stable boats, shade, and activities everyone can enjoy.",
    picks: [
      {
        slug: "jolly-pirate-afternoon-sail-snorkeling",
        whyWePickIt:
          "Jolly Pirates’ 85-foot teak pirate schooner is one of Aruba’s most family-friendly sails. Kids love the themed ship and famous rope swing; parents appreciate the shade, seating, and open bar. Visit three snorkel sites—Malmok, Boca Catalina, and the Antilla wreck—and snorkel at two, then swing into the water at the third. A classic choice for multigenerational groups.",
        bestFor: [
          "Families with kids who love a pirate theme",
          "Anyone who wants the famous Jolly Pirates rope swing",
          "Multigenerational groups (grandparents to grandkids)",
          "Guests who want shade, seating, and an open bar for adults",
        ],
      },
      {
        slug: "dolphin-catamaran-snorkel-open-bar",
        whyWePickIt:
          "The Dolphin catamaran wins families over with a water slide—kids (and adults) can splash into the Caribbean between snorkel stops. Two snorkel sites (Antilla wreck and Boca Catalina), rope swing, open bar, and wraps and tropical fruit. Friendly crew teaches snorkeling to beginners. Ideal for families with teens who want action, not just sailing.",
        bestFor: [
          "Families with teens who want a water slide and snorkeling",
          "Kids who love waterslides and rope swings",
          "Parents who want open bar while the kids play",
          "First-time snorkelers (gear and instruction included)",
        ],
      },
    ],
    intro:
      "Family-friendly catamaran cruises in Aruba combine stability, shade, and activities that suit all ages. Choose a pirate ship for themed fun and a rope swing, or a catamaran with a water slide for kids who want to splash. Snorkeling, open bars for adults, and snacks keep everyone happy. Shallow bays like Catalina Bay make first-time snorkeling safe and fun for kids.",
    whyBlock: {
      title: "Why choose a family catamaran cruise in Aruba?",
      content:
        "Catamarans and schooners are stable and spacious—no rocking like small speedboats. Most family sails offer shade, seating, and activities: snorkeling for older kids and teens, rope swings and water slides for thrill-seekers, and open bars and snacks for adults. Crews are used to families and help kids with gear. Aruba’s calm water and shallow bays make it one of the best islands for family sailing.",
    },
    whatToExpect: [
      "Check-in at the marina or beach. Kids get life jackets; families get a safety briefing before boarding.",
      "Sail to snorkel stops. Shallow sites like Catalina Bay are ideal for first-time snorkelers. Gear and instruction included.",
      "Water activities: snorkeling, rope swing, or water slide (depending on the tour). Crews help kids feel comfortable.",
      "Shade and seating on deck. Open bar and snacks for adults; soft drinks for kids. Most tours run 3 hours.",
      "Return to the marina. Pirate ships and catamarans with slides tend to be the most memorable for families.",
    ],
    faqs: [
      {
        question: "What are the best family catamaran cruises in Aruba?",
        answer:
          "The best family catamaran cruises in Aruba include Jolly Pirates’ pirate schooner (rope swing, three snorkel sites, shade) and the Dolphin catamaran (water slide, rope swing, two snorkel stops). Both offer snorkeling, open bar, and activities that appeal to kids and adults. Jolly Pirates has a themed pirate ship; the Dolphin has a water slide kids love.",
      },
      {
        question: "Is the Jolly Pirates sail good for families?",
        answer:
          "Yes. Jolly Pirates’ 85-foot teak pirate schooner is very family-friendly. Kids love the pirate theme and famous rope swing. There’s shade under the canopy, seating by the bar, and three snorkel sites (Malmok, Boca Catalina, Antilla). Snorkel at two and use the rope swing at the third. Open bar and snorkel gear included.",
      },
      {
        question: "Does the Dolphin catamaran have a water slide?",
        answer:
          "Yes. The Dolphin catamaran has a water slide and rope swing, plus two snorkel stops at the Antilla wreck and Boca Catalina. It’s a hit with families—especially families with teens who want action. Open bar, wraps, and tropical fruit are included. The crew teaches snorkeling to beginners.",
      },
      {
        question: "What age is a catamaran cruise suitable for in Aruba?",
        answer:
          "Most family catamaran cruises in Aruba welcome all ages. Very young children can stay on deck with a parent; toddlers may need close supervision. Kids who can swim can snorkel with gear and instruction. Water slides and rope swings typically suit ages 6–7 and up. Check each operator for age guidance.",
      },
      {
        question: "Is snorkeling safe for kids on Aruba catamaran cruises?",
        answer:
          "Yes. Aruba’s calm water and shallow sites like Catalina Bay make snorkeling safe for kids. Crews provide life jackets and snorkel gear; many offer instruction. Kids can start in shallow water before heading to deeper sites. Non-swimmers can stay on the boat and enjoy the sail, rope swing, or water slide.",
      },
      {
        question: "What should families bring on a catamaran cruise?",
        answer:
          "Bring swimwear, towels, reef-safe sunscreen, and hats. Kids may want rash guards or a change of clothes. Many tours provide life jackets. Leave valuables in your hotel or in a dry bag. Check if your tour offers snacks for picky eaters—some have wraps and fruit; others focus on drinks.",
      },
    ],
  },
  {
    categorySlug: "catamaran-cruises-in-aruba",
    slug: "bbq-sails",
    title: "Best sailing cruises with BBQ and open bar",
    description:
      "Compare the best sailing cruises in Aruba with BBQ and open bar—grilled lunch on board, hand-crafted cocktails, and snorkeling. Sailing, delicious food, and unlimited drinks in one trip.",
    picks: [
      {
        slug: "luxury-lagoon-cruise-chef-cocktails",
        whyWePickIt:
          "Pelican’s Luxury Lagoon Cruise delivers a premium experience: an onboard chef grills lunch on sight, hand-crafted cocktails from the bar, and a teak schooner along Aruba’s south coast. Add Champagne, kayaking, snorkeling, and rope swinging. Ideal for couples and small groups who want sailing, a proper grilled meal, and signature cocktails—not just snacks.",
        bestFor: [
          "Couples and small groups wanting a premium sail with real food",
          "Travelers who want an onboard chef and grilled lunch",
          "Anyone who enjoys hand-crafted cocktails and Champagne",
          "Guests who want kayaking, snorkeling, or rope swinging in one trip",
        ],
      },
      {
        slug: "tropical-sailing-bbq-lunch-dinner",
        whyWePickIt:
          "Tropical Sailing Aruba combines a full BBQ meal with premium open bar and snorkeling at Mangel Halto. Morning sails include BBQ lunch; afternoon sails include BBQ dinner and a sunset. Cruises past Spanish Lagoon and Flamingo Island. Vegan, vegetarian, and gluten-free options available. Best for guests who want a relaxed sail with a hearty BBQ and flexible schedule.",
        bestFor: [
          "Travelers who want a full BBQ lunch or dinner on the water",
          "Anyone who wants a sunset sail with dinner",
          "Guests who prefer vegan, vegetarian, or gluten-free options",
          "Snorkelers who want to explore Mangel Halto Reef",
        ],
      },
    ],
    intro:
      "Sailing, open bar, and delicious BBQ—Aruba’s best combination for a full day on the water. Whether you want an onboard chef grilling lunch on a teak schooner or a classic BBQ at anchor with snorkeling, these cruises deliver. Unlimited drinks, a proper meal, and scenic sailing along the coast. Compare the luxury chef experience vs. the tropical BBQ sail.",
    whyBlock: {
      title: "Why choose a sailing cruise with BBQ and open bar?",
      content:
        "Sailing cruises with BBQ and open bar let you enjoy a full meal on the water—no rushing back for lunch. Grilled meats, salads, and sides served on board, paired with unlimited cocktails, beer, wine, and soft drinks. Add snorkeling, kayaking, or a scenic sail past Aruba’s coastline. It’s the full package: sailing, eating, drinking, and exploring in one trip.",
    },
    whatToExpect: [
      "Check-in at the marina. Optional hotel pickup on some tours. Light breakfast or refreshments as you board.",
      "Sail along Aruba’s coast—Spanish Lagoon, Flamingo Island, or the south coast depending on the tour.",
      "Your BBQ or grilled lunch is prepared on board. On the Luxury Lagoon Cruise, the chef grills on sight; Tropical Sailing serves a full BBQ at anchor.",
      "Open bar throughout: cocktails, spirits, beer, wine, sodas, and water. Snorkeling, kayaking, or rope swinging included on most sails.",
      "Return sail with drinks and views. Most BBQ sailing cruises run 4–5 hours.",
    ],
    faqs: [
      {
        question: "What are the best sailing cruises with BBQ in Aruba?",
        answer:
          "The best sailing cruises with BBQ in Aruba include Pelican’s Luxury Lagoon Cruise (onboard chef grills lunch, hand-crafted cocktails, teak schooner) and Tropical Sailing’s BBQ experience (full BBQ lunch or dinner, premium open bar, snorkeling at Mangel Halto). Both offer unlimited drinks and a proper meal—choose the luxury chef experience or the classic tropical BBQ sail.",
      },
      {
        question: "Does the Luxury Lagoon Cruise include BBQ?",
        answer:
          "Yes. The Luxury Lagoon Cruise features an onboard chef who grills a buffet lunch on sight. You’ll also get a light breakfast (fruits, pinchos, olive and cheese), Champagne, and unlimited drinks from the open bar. The food is freshly grilled—not a pre-made buffet. Hand-crafted cocktails, kayaking, and snorkeling are included.",
      },
      {
        question: "What is included on the Tropical Sailing BBQ cruise?",
        answer:
          "Tropical Sailing’s BBQ cruise includes a full BBQ lunch (morning sail) or BBQ dinner (afternoon sail), premium open bar, snorkeling at Mangel Halto Reef, and a sail past Spanish Lagoon and Flamingo Island. Vegan, vegetarian, pescatarian, and gluten-free options are available on request. Optional hotel pickup.",
      },
      {
        question: "Is the open bar included on BBQ sailing cruises in Aruba?",
        answer:
          "Yes. Sailing cruises with BBQ in Aruba include unlimited drinks—cocktails, spirits, beer, wine, juices, sodas, and water. The Luxury Lagoon Cruise adds hand-crafted cocktails and Champagne; Tropical Sailing offers a premium open bar. No paying per drink.",
      },
      {
        question: "How long do BBQ sailing cruises last?",
        answer:
          "BBQ sailing cruises in Aruba typically run 4–5 hours. The Luxury Lagoon Cruise is about 5 hours with grilled lunch and activities. Tropical Sailing’s BBQ sail is about 4 hours with lunch or dinner, snorkeling, and optional sunset. Both include ample time for sailing, eating, and swimming.",
      },
      {
        question: "Can I get vegetarian or vegan options on a BBQ sailing cruise?",
        answer:
          "Tropical Sailing Aruba offers vegan, vegetarian, pescatarian, and gluten-free options—ask when booking or at check-in. The Luxury Lagoon Cruise has a set grilled buffet; contact the operator ahead if you have dietary requirements. Most cruises can accommodate with advance notice.",
      },
    ],
  },
  {
    categorySlug: "catamaran-cruises-in-aruba",
    slug: "best-value",
    title: "Best value catamaran cruises",
    description:
      "Compare the best value catamaran cruises in Aruba—affordable sails with snorkeling, open bar, and top sites. Get more for less without sacrificing quality.",
    picks: [
      {
        slug: "arusun-catamaran-sail-snorkeling",
        whyWePickIt:
          "The Arusun offers the best price-to-experience ratio: about 2.5 hours on a 65-foot catamaran with two snorkel stops (Antilla and Boca Catalina), unlimited open bar, and snacks. Often the lowest-priced catamaran sail in Aruba. Ideal if you want a solid snorkel sail without the extra cost of lunch or a half-day.",
        bestFor: [
          "Budget-conscious travelers who want snorkeling and open bar",
          "Anyone with a busy schedule (only 2.5 hours)",
          "First-timers who want a low-risk try before committing to a pricier sail",
          "Guests who prefer a compact, relaxed format",
        ],
      },
      {
        slug: "dolphin-catamaran-snorkel-open-bar",
        whyWePickIt:
          "The Dolphin packs a lot into a great price: two snorkel stops (Antilla and Boca Catalina), open bar, water slide, rope swing, and wraps and fruit. One of Aruba’s most popular cruises with thousands of reviews. You get action, snorkeling, and unlimited drinks for a mid-range price.",
        bestFor: [
          "Families and groups who want a water slide without paying premium",
          "Anyone who wants the Antilla wreck and Boca Catalina plus extras",
          "Travelers who value high review counts and proven value",
          "Guests who want a lively 3-hour experience",
        ],
      },
      {
        slug: "antilla-shipwreck-catalina-bay-snorkel-sail",
        whyWePickIt:
          "Red Sail’s Antilla and Catalina Bay sail delivers the classic Aruba snorkel itinerary—two top sites, open bar, bite-sized appetizers—without the cost of a full lunch buffet. A straightforward 3-hour cruise that hits the highlights. Good value if you want the Antilla wreck and Catalina Bay without paying for a half-day.",
        bestFor: [
          "Snorkelers who want the Antilla wreck and Catalina Bay at a fair price",
          "Guests who prefer a 3-hour sail over a full half-day",
          "Anyone who wants open bar and appetizers, not a full meal",
          "Travelers looking for a simple, well-run two-stop cruise",
        ],
      },
    ],
    intro:
      "Best value catamaran cruises in Aruba give you snorkeling, open bar, and top sites without the premium price. The cheapest options aren’t bare-bones—you still get gear, instruction, drinks, and snacks. Compare the Arusun (shortest and often cheapest), the Dolphin (water slide and rope swing included), and the Antilla/Catalina sail (classic two-stop itinerary). All offer proven value with strong reviews.",
    whyBlock: {
      title: "Why choose a value catamaran cruise?",
      content:
        "Value catamaran cruises in Aruba don’t skimp on the essentials: snorkel gear, open bar, and access to the Antilla wreck and Aruba’s best reefs. You might get a shorter sail (2.5 hours vs. 4) or snacks instead of a full lunch—but you still get a real experience. Ideal for budget travelers, first-timers testing the waters, or anyone who prefers to spend savings elsewhere.",
    },
    whatToExpect: [
      "Check-in at the marina or beach departure point. Safety briefing and gear fitting.",
      "Sail to one or two snorkel stops—typically the Antilla wreck and Catalina Bay or Boca Catalina.",
      "Unlimited drinks from the open bar. Snacks, wraps, or light appetizers depending on the tour.",
      "Water slide and rope swing on the Dolphin; straightforward snorkeling on the Arusun and Antilla sail.",
      "Return to the marina. Most value cruises run 2.5–3 hours. You get the highlights without the full-day price.",
    ],
    faqs: [
      {
        question: "What are the best value catamaran cruises in Aruba?",
        answer:
          "The best value catamaran cruises in Aruba include the Arusun (often the lowest-priced, 2.5 hours with snorkeling and open bar), the Dolphin (water slide, rope swing, two snorkel stops, open bar), and Red Sail’s Antilla and Catalina Bay sail (classic two-stop itinerary, open bar, appetizers). All offer snorkeling, drinks, and top sites at competitive prices.",
      },
      {
        question: "Is the Arusun the cheapest catamaran cruise in Aruba?",
        answer:
          "The Arusun is often one of the lowest-priced catamaran sails in Aruba. You get 2.5 hours, two snorkel stops at the Antilla and Boca Catalina, unlimited open bar, and snacks. It’s a compact format—perfect if you want a solid experience without the cost of a half-day or full lunch.",
      },
      {
        question: "What's included on budget catamaran cruises in Aruba?",
        answer:
          "Budget or value catamaran cruises in Aruba typically include snorkel equipment and instruction, an open bar (unlimited drinks), and snacks or light appetizers. Some add a water slide and rope swing. You won’t get a full lunch buffet or Champagne on the cheapest options—but you’ll get the core experience: sailing, snorkeling, and drinks.",
      },
      {
        question: "Are cheap catamaran cruises in Aruba worth it?",
        answer:
          "Yes. Lower-priced catamaran cruises in Aruba still visit the Antilla wreck and top reefs, include gear and open bar, and have experienced crews. The main differences vs. pricier sails: shorter duration (2.5–3 hours vs. 4), snacks instead of lunch, and fewer extras like Champagne or table service. You get the essentials.",
      },
      {
        question: "How much do catamaran cruises cost in Aruba?",
        answer:
          "Catamaran cruises in Aruba typically range from about $35–$150 per person. Value options (Arusun, Dolphin, Antilla/Catalina sail) run roughly $35–$65. Mid-range sails with lunch are often $65–$90. Premium experiences with onboard chefs or luxury touches can exceed $100. Prices vary by season and operator.",
      },
      {
        question: "Should I book a value catamaran cruise in advance?",
        answer:
          "Yes. Popular value cruises like the Arusun and Dolphin sell out, especially in high season. Booking a few days ahead secures your spot and often locks in better prices. Last-minute bookings may have limited availability or higher rates.",
      },
    ],
  },
  {
    categorySlug: "sunset-and-dinner-cruises-in-aruba",
    slug: "best-sunset-cruises",
    title: "Best sunset cruises in Aruba",
    description:
      "Compare the best sunset cruises in Aruba—dinner cruises with buffet, budget-friendly sails, and intimate romantic options. Golden hour views, open bar, and Caribbean sunsets.",
    picks: [
      {
        slug: "dinner-cruise-catamaran",
        whyWePickIt:
          "Red Sail Sports' dinner cruise delivers the full package: luxury catamaran, buffet dinner, open bar, and sunset sail in one trip. Ideal for couples and special occasions. Dinner is served on board as you cruise—no need to choose between sailing and dining.",
        bestFor: [
          "Couples celebrating anniversaries or special occasions",
          "Guests who want dinner on the boat, not onshore",
          "Anyone who prefers a buffet with variety and open bar",
          "Travelers who want Red Sail's reliable catamaran experience",
        ],
      },
      {
        slug: "arusun-sunset-sail",
        whyWePickIt:
          "The Arusun offers one of the best value sunset sails in Aruba: 65-foot catamaran, unlimited open bar, snacks, and a compact 2–2.5 hour cruise. Same well-reviewed vessel as the daytime snorkel sail. Ideal for guests who want a solid sunset experience without a long evening or dinner price.",
        bestFor: [
          "Budget-conscious travelers who want open bar and sunset views",
          "Anyone who wants a shorter, relaxed sunset cruise",
          "Guests who prefer the proven Arusun catamaran",
          "Travelers who value high review counts and affordability",
        ],
      },
      {
        slug: "palm-pleasure-sunset-sail",
        whyWePickIt:
          "Palm Pleasure's intimate sunset sail is ideal for couples and small groups. Smaller group size, relaxed vibe, and drinks included—no party boat atmosphere. One of Aruba's most romantic sunset options for those who prefer a quiet, personal sail.",
        bestFor: [
          "Couples wanting a romantic, intimate sunset sail",
          "Small groups who prefer fewer guests and a relaxed vibe",
          "Anyone who wants a low-key sail without a party atmosphere",
          "Guests sailing from the Palm Beach area",
        ],
      },
    ],
    intro:
      "The best sunset cruises in Aruba range from full dinner experiences to simple sails with open bar. Red Sail's dinner cruise combines a luxury catamaran with buffet and drinks; the Arusun offers proven value; Palm Pleasure delivers intimacy for couples. All sail during the golden hour—choose based on whether you want dinner included, best value, or the most romantic setting.",
    whyBlock: {
      title: "Why book a sunset cruise in Aruba?",
      content:
        "Aruba's calm waters and reliable weather make sunset cruises a top experience. You'll sail during the golden hour with drinks and often snacks or dinner included. Options range from intimate couple sails to lively catamarans and dinner buffets. Most depart 1–2 hours before sunset so you're on the water when the sky turns orange and pink.",
    },
    whatToExpect: [
      "Check-in at the marina or departure point. Arrive 15–20 minutes early. Safety briefing before boarding.",
      "Sail along Aruba's coast during the golden hour. Drinks (and sometimes snacks) are typically included.",
      "Watch the sun set over the Caribbean—one of Aruba's most photogenic moments. Bring a camera or phone.",
      "Dinner cruises serve buffet or plated meals on board; other cruises return in twilight for dinner ashore.",
      "Return to the marina. Most sunset cruises run 2–4 hours depending on whether dinner is included.",
    ],
    faqs: [
      {
        question: "What are the best sunset cruises in Aruba?",
        answer:
          "The best sunset cruises in Aruba include Red Sail's dinner cruise (buffet, open bar, luxury catamaran), the Arusun sunset sail (best value, open bar, 65-foot catamaran), and Palm Pleasure (most intimate, romantic sail). For dinner on board, choose Red Sail. For best value, choose the Arusun. For couples seeking intimacy, choose Palm Pleasure.",
      },
      {
        question: "Sunset cruise or dinner cruise in Aruba—which is better?",
        answer:
          "Sunset cruises with snacks and open bar (Arusun, Dolphin, Palm Pleasure) are shorter and more casual—good if you plan to eat elsewhere. Dinner cruises (Red Sail, Pelican seaside dinner) add a full meal—better for anniversaries or a complete evening. Choose based on whether you want dinner included or prefer a simpler sail.",
      },
      {
        question: "What is included on sunset cruises in Aruba?",
        answer:
          "Most sunset cruises include the sail, unlimited drinks (open bar), and snacks. Dinner cruises add a buffet or plated meal. Some offer cushioned seating and table service (Octopus); others have a more casual bar. Check each listing for exact inclusions—drinks are almost always included.",
      },
      {
        question: "How long are sunset cruises in Aruba?",
        answer:
          "Sunset cruises without dinner typically run 2–3 hours. Dinner cruises run 3–4+ hours. Cruises depart 1–2 hours before sunset so you're on the water during the golden hour. Sunset times vary by season—around 6–6:30 PM in summer.",
      },
      {
        question: "What is the best romantic sunset cruise in Aruba?",
        answer:
          "Palm Pleasure offers the most intimate option—small group, relaxed vibe, drinks included. Red Sail's dinner cruise is popular for anniversaries (dinner on the water). Pelican's seaside dinner combines sail and meal. Octopus's Happy Hour sail has table service. Choose Palm Pleasure for quiet intimacy; dinner cruises for a complete romantic evening.",
      },
      {
        question: "Do I need to book sunset cruises in Aruba in advance?",
        answer:
          "Yes. Popular sunset cruises sell out, especially in high season (December–April). Booking a few days ahead secures your spot and often better prices. Many offer free cancellation when booked in advance. Last-minute bookings may have limited availability.",
      },
    ],
  },
  {
    categorySlug: "sunset-and-dinner-cruises-in-aruba",
    slug: "dinner-cruises",
    title: "Best dinner cruises in Aruba",
    description:
      "Compare the best dinner cruises in Aruba—sunset sails with buffet on board or seaside dinner. Full meal, open bar, and Caribbean views in one evening.",
    picks: [
      {
        slug: "sunset-cruise-seaside-dinner",
        whyWePickIt:
          "Pelican Aruba combines a sunset sail with a full seaside dinner—sail during the golden hour, then enjoy a meal by the water. Ideal for couples who want both sailing and a proper dinner. Dinner is served onshore at a waterfront venue, so you get the best of both: sail and dine.",
        bestFor: [
          "Couples wanting sunset sailing plus a full dinner",
          "Guests who prefer dinner at a restaurant or seaside venue",
          "Anyone who wants a complete evening (sail + meal) in one booking",
          "Travelers who like the idea of sailing first, then dining",
        ],
      },
      {
        slug: "dinner-cruise-catamaran",
        whyWePickIt:
          "Red Sail Sports' dinner cruise serves a full buffet on board the catamaran as you sail. Open bar, sunset views, and a complete meal without leaving the boat. Ideal for couples and special occasions—everything happens on the water.",
        bestFor: [
          "Couples celebrating anniversaries or special occasions",
          "Guests who want dinner on the boat, not onshore",
          "Anyone who prefers a buffet with variety and open bar",
          "Travelers who want Red Sail's reliable catamaran experience",
        ],
      },
    ],
    intro:
      "Dinner cruises in Aruba combine a sunset sail with a full meal—either on board or at a seaside venue. Red Sail's catamaran serves a buffet as you cruise; Pelican's seaside dinner option has you sail first, then dine by the water. Both include drinks and a complete evening experience.",
    whyBlock: {
      title: "Why book a dinner cruise in Aruba?",
      content:
        "Dinner cruises give you sailing, sunset, and a full meal in one trip—no need to rush back for dinner. Choose a buffet on board (Red Sail) for everything on the water, or a seaside dinner (Pelican) for sail first, then dine at a waterfront venue. Both are popular for couples and special occasions.",
    },
    whatToExpect: [
      "Check-in at the marina or departure point. Arrive 15–20 minutes early.",
      "Sunset sail along Aruba's coast—drinks included. Watch the golden hour from the deck.",
      "Dinner: buffet on board (Red Sail) or at a seaside venue (Pelican). Full meal with drinks.",
      "After dinner, return sail or disembark at the dining venue. Total experience typically 3–4+ hours.",
    ],
    faqs: [
      {
        question: "What are the best dinner cruises in Aruba?",
        answer:
          "The best dinner cruises in Aruba include Red Sail's dinner cruise (buffet on board the catamaran, open bar, sunset sail) and Pelican's sunset cruise with seaside dinner (sail during golden hour, then dinner at a waterfront venue). Red Sail keeps everything on the boat; Pelican combines sail + seaside meal.",
      },
      {
        question: "Dinner on board vs seaside dinner—which is better?",
        answer:
          "Red Sail's dinner cruise serves a full buffet on the catamaran—you never leave the boat. Pelican's seaside dinner has you sail first, then enjoy dinner at a waterfront venue. On-board is more seamless; seaside gives you a restaurant setting. Both include drinks and a complete meal.",
      },
      {
        question: "What is included on dinner cruises in Aruba?",
        answer:
          "Dinner cruises include the sail, a full meal (buffet or plated), and drinks. Red Sail's cruise has a buffet and open bar on board. Pelican's seaside dinner includes the sail plus dinner and drinks at a waterfront venue. Check each operator for menu details and dietary options.",
      },
      {
        question: "Are dinner cruises in Aruba good for anniversaries?",
        answer:
          "Yes. Dinner cruises are popular for anniversaries, proposals, and romantic occasions. You get sunset views, a meal, and drinks in one experience. Red Sail's on-board buffet and Pelican's seaside dinner both work well for couples. Book in advance for special dates.",
      },
      {
        question: "How long are dinner cruises in Aruba?",
        answer:
          "Dinner cruises typically run 3–4+ hours—sailing time plus dinner. Red Sail's dinner cruise serves the buffet on board during the sail. Pelican's seaside dinner includes sail time plus dining at the venue. Check the booking page for exact duration.",
      },
    ],
  },
  {
    categorySlug: "sunset-and-dinner-cruises-in-aruba",
    slug: "romantic",
    title: "Best romantic sunset sails in Aruba",
    description:
      "Compare the most romantic sunset cruises in Aruba—intimate sails for couples and dinner cruises perfect for anniversaries, proposals, and special occasions.",
    picks: [
      {
        slug: "palm-pleasure-sunset-sail",
        whyWePickIt:
          "Palm Pleasure offers one of Aruba's most intimate sunset sails—smaller group size, relaxed vibe, drinks included. Ideal for couples who want a quiet, personal sail without a party atmosphere. The low-key setting and romantic golden-hour views make it a top choice for couples.",
        bestFor: [
          "Couples wanting an intimate, romantic sunset sail",
          "Anyone who prefers a quiet sail over a party boat",
          "Proposals or special moments (small group, personal feel)",
          "Guests sailing from the Palm Beach area",
        ],
      },
      {
        slug: "dinner-cruise-catamaran",
        whyWePickIt:
          "Red Sail's dinner cruise is perfect for romantic occasions—buffet dinner, open bar, and sunset views on a luxury catamaran. Everything happens on the water: sail, dine, and watch the stars. Popular for anniversaries and celebratory evenings.",
        bestFor: [
          "Couples celebrating anniversaries or special occasions",
          "Guests who want dinner on the water with sunset views",
          "Anyone planning a proposal or romantic evening",
          "Travelers who want a complete date-night experience",
        ],
      },
    ],
    intro:
      "Aruba's most romantic sunset options range from intimate sails to full dinner cruises. Palm Pleasure offers a small-group sail with drinks—quiet and personal. Red Sail's dinner cruise adds a buffet on board for a complete evening. Both are popular with couples for anniversaries, proposals, and special dates.",
    whyBlock: {
      title: "Why choose a romantic sunset cruise in Aruba?",
      content:
        "Romantic sunset cruises combine golden-hour views, drinks, and often dinner—all in one evening. Intimate options like Palm Pleasure keep the group small; dinner cruises like Red Sail's add a full meal on the water. Aruba's calm seas and reliable weather make sunset sails one of the island's top romantic experiences.",
    },
    whatToExpect: [
      "Check-in at the marina or departure point. Arrive early for a relaxed start.",
      "Sunset sail along Aruba's coast—drinks included. Watch the golden hour together.",
      "Intimate sail (Palm Pleasure) or buffet dinner on board (Red Sail). Both offer romantic settings.",
      "Return in twilight. Most romantic cruises run 2–4 hours depending on whether dinner is included.",
    ],
    faqs: [
      {
        question: "What is the most romantic sunset cruise in Aruba?",
        answer:
          "Palm Pleasure offers the most intimate option—small group, relaxed vibe, drinks included. Red Sail's dinner cruise is ideal for a complete romantic evening with buffet and sunset on the water. Choose Palm Pleasure for quiet intimacy; Red Sail for dinner and sail together.",
      },
      {
        question: "Are sunset cruises in Aruba good for proposals?",
        answer:
          "Yes. Palm Pleasure's intimate sail and Red Sail's dinner cruise both work well for proposals. Palm Pleasure offers a smaller group and quiet setting; Red Sail adds dinner on the water. Contact the operator in advance if you have special arrangements in mind.",
      },
      {
        question: "What romantic dinner cruises are there in Aruba?",
        answer:
          "Red Sail's dinner cruise is a top romantic option—luxury catamaran, buffet dinner, open bar, and sunset sail. Pelican's seaside dinner (sail + dinner onshore) is another choice. Both are popular for anniversaries and special occasions.",
      },
      {
        question: "Is Palm Pleasure good for couples?",
        answer:
          "Yes. Palm Pleasure's sunset sail is one of Aruba's most couple-friendly options—small group size, relaxed atmosphere, drinks included. Ideal for couples who want an intimate sail without a party boat. A quiet, romantic golden-hour experience.",
      },
    ],
  },
  {
    categorySlug: "sunset-and-dinner-cruises-in-aruba",
    slug: "budget-sunset-cruises",
    title: "Budget friendly sunset cruises in Aruba (under $60)",
    description:
      "Compare the best budget sunset cruises in Aruba under $60—open bar, snacks, and golden-hour sailing without breaking the bank. Arusun and Dolphin sails.",
    picks: [
      {
        slug: "arusun-sunset-sail",
        whyWePickIt:
          "The Arusun is often the lowest-priced sunset sail in Aruba: 65-foot catamaran, unlimited open bar, snacks, and a 2–2.5 hour cruise. Same well-reviewed boat as the daytime snorkel sail. Ideal if you want a solid sunset experience for around $35–60 per person.",
        bestFor: [
          "Travelers on a tight budget who still want open bar and sunset",
          "Anyone who wants a shorter sail (2–2.5 hours) at a great price",
          "First-timers testing sunset cruises without a big spend",
          "Guests who value the proven Arusun catamaran and reviews",
        ],
      },
      {
        slug: "dolphin-sunset-cruise",
        whyWePickIt:
          "The Dolphin sunset cruise packs open bar, snacks, and a lively sail into a mid-range price—often under $60. Same popular catamaran as the daytime snorkel trip. Great for groups and couples who want a fun atmosphere and unlimited drinks without paying for dinner.",
        bestFor: [
          "Groups and couples wanting a fun sunset sail under $60",
          "Anyone who enjoyed the daytime Dolphin and wants a sunset version",
          "Guests who want open bar and snacks, not a full dinner",
          "Travelers looking for a social, well-reviewed budget option",
        ],
      },
    ],
    intro:
      "Budget sunset cruises in Aruba under $60 are easy to find—the Arusun and Dolphin both offer open bar, snacks or appetizers, and golden-hour views at mid-range or lower prices. None include dinner; you get sailing and drinks. Compare duration and vibe to find your fit.",
    whyBlock: {
      title: "Why choose a budget sunset cruise in Aruba?",
      content:
        "Budget sunset cruises give you the same golden-hour views and open bar as pricier options—you just skip the full dinner. The Arusun is often the cheapest; the Dolphin adds a lively vibe. Both typically run under $60 per person. Ideal for travelers who want sunset sailing without a big evening spend.",
    },
    whatToExpect: [
      "Check-in at the marina or beach departure point. Arrive 15–20 minutes early.",
      "Sunset sail with unlimited drinks (open bar). Snacks or light bites included—no full dinner.",
      "Golden-hour views along Aruba's coast. Most budget cruises run 2–3 hours.",
      "Return in twilight. You're back in time for dinner ashore if you want to eat elsewhere.",
    ],
    faqs: [
      {
        question: "What is the cheapest sunset cruise in Aruba?",
        answer:
          "The Arusun sunset sail is often the lowest-priced—around $35–60 per person for a 2–2.5 hour cruise with open bar and snacks. The Dolphin also often runs under $60. None include dinner; all include drinks. Check current prices on the booking pages.",
      },
      {
        question: "Are there sunset cruises in Aruba under $60?",
        answer:
          "Yes. The Arusun and Dolphin sunset cruise typically offer sunset cruises under $60 per person. Both include open bar and snacks or light bites. Dinner cruises usually cost more; these focus on sailing and drinks for a lower price.",
      },
      {
        question: "What is included on budget sunset cruises in Aruba?",
        answer:
          "Budget sunset cruises typically include the sail, unlimited drinks (open bar), and snacks or light appetizers. The Arusun and Dolphin both offer open bar and snacks. No full dinner—you save by eating before or after.",
      },
      {
        question: "Is the Arusun or Dolphin better for a cheap sunset cruise?",
        answer:
          "The Arusun is often slightly cheaper and shorter (2–2.5 hours); the Dolphin is a bit more social and lively. Both have open bar and snacks. Choose the Arusun for the lowest price; choose the Dolphin for a livelier vibe at a similar budget price.",
      },
      {
        question: "Do budget sunset cruises in Aruba have open bar?",
        answer:
          "Yes. The Arusun and Dolphin sunset sails both include unlimited drinks (open bar). You don't sacrifice drinks for price—you sacrifice a full dinner. Cocktails, beer, wine, and soft drinks are typically included.",
      },
    ],
  },
  {
    categorySlug: "sunset-and-dinner-cruises-in-aruba",
    slug: "fun-sunset-cruises",
    title: "Fun sunset cruises in Aruba for groups",
    description:
      "Compare the most fun, social sunset cruises in Aruba—lively sails with open bar, upbeat vibes, and sunset views. Perfect for groups, friends, and a good time on the water.",
    picks: [
      {
        slug: "happy-hour-sunset-sail",
        whyWePickIt:
          "Octopus's Happy Hour sunset sail brings a fun, social vibe with a twist: drinks served to your cushioned seat, so you can mingle without queuing at the bar. Cocktails, sunset views, and a relaxed-but-upbeat atmosphere. Ideal for groups and friends who want a good time with a touch of comfort.",
        bestFor: [
          "Groups and friends wanting a social sunset sail",
          "Anyone who likes cocktails and comfort (drinks to your seat)",
          "Guests who want a fun vibe without a rowdy party boat",
          "Travelers looking for upbeat sailing with great service",
        ],
      },
      {
        slug: "havanas-sunset-cruise",
        whyWePickIt:
          "Pelican's Havanas sunset cruise offers a relaxed, social sail with open bar and scenic views. Comfortable vessel, drinks included, and a laid-back atmosphere that's still fun for groups. A solid choice if you want a good time on the water without a themed or high-energy cruise.",
        bestFor: [
          "Groups wanting a relaxed-but-social sunset sail",
          "Anyone who prefers Pelican's fleet and service",
          "Guests who want open bar and views without a theme",
          "Travelers looking for a fun evening without a party boat",
        ],
      },
      {
        slug: "sunset-pirate-cruise",
        whyWePickIt:
          "Jolly Pirates' sunset cruise is one of Aruba's most fun, memorable options—an 85-foot pirate schooner, open bar, and a themed sail into the golden hour. Families and groups love the vibe. Shade, seating, and a unique experience that stands out from standard catamarans.",
        bestFor: [
          "Groups and families who want a themed, fun sunset sail",
          "Anyone who loves the idea of a pirate ship at sunset",
          "Guests who want a memorable, social experience",
          "Travelers looking for something different from a standard catamaran",
        ],
      },
    ],
    intro:
      "Fun sunset cruises in Aruba are all about social vibes, open bar, and a good time—without needing a full dinner. Octopus Happy Hour brings cocktails to your seat; the Havanas offers a relaxed group sail; Jolly Pirates adds a pirate-ship theme. All three are popular with groups and friends looking for lively sunset sailing.",
    whyBlock: {
      title: "Why choose a fun sunset cruise in Aruba?",
      content:
        "Fun sunset cruises focus on social sailing: open bar, upbeat atmosphere, and sunset views. They're ideal for groups, friends, and anyone who wants a lively evening on the water without a formal dinner. Options range from cushioned comfort (Octopus) and relaxed sailing (Havanas) to a themed pirate schooner (Jolly Pirates).",
    },
    whatToExpect: [
      "Check-in at the marina. Meet your crew and fellow guests—these sails are social by design.",
      "Open bar from the start. Cocktails, beer, wine, and soft drinks throughout the sail.",
      "Sunset sail along Aruba's coast. Music, conversation, and golden-hour views.",
      "Return in twilight. Most fun sunset cruises run 2–3 hours. You're back in time for dinner or nightlife.",
    ],
    faqs: [
      {
        question: "What are the best fun sunset cruises in Aruba for groups?",
        answer:
          "The best fun, social sunset cruises for groups in Aruba include Octopus's Happy Hour sail (cocktails to your seat, cushioned comfort), Pelican's Havanas sunset cruise (relaxed open bar sail), and Jolly Pirates' sunset cruise (themed pirate schooner, open bar). All offer a lively vibe and are popular with groups and friends.",
      },
      {
        question: "Which sunset cruise in Aruba is best for groups?",
        answer:
          "Jolly Pirates' sunset cruise is a top pick for groups—themed pirate ship, open bar, and a memorable vibe. Octopus Happy Hour is great for groups who want table service and comfort. Pelican's Havanas offers a relaxed group sail. All three are social and fun without being overly rowdy.",
      },
      {
        question: "Are there sunset cruises in Aruba with a fun atmosphere?",
        answer:
          "Yes. Octopus Happy Hour (cocktails to your seat, upbeat), the Havanas sunset cruise (relaxed social sail), and Jolly Pirates' sunset pirate cruise (themed schooner) all offer a fun, social atmosphere with open bar. They're ideal for groups and friends—lively but not necessarily a party boat.",
      },
      {
        question: "Is the Jolly Pirates sunset cruise good for groups?",
        answer:
          "Yes. Jolly Pirates' sunset cruise is very group-friendly—85-foot pirate schooner, open bar, shade, and a unique theme that groups love. Families and friends both enjoy it. The atmosphere is fun and memorable without being rowdy. One of Aruba's most distinctive sunset options.",
      },
      {
        question: "What is the difference between a fun sunset cruise and a dinner cruise?",
        answer:
          "Fun sunset cruises focus on sailing, open bar, and social vibes—no full dinner, so they're often shorter and more affordable. Dinner cruises add a buffet or plated meal. Choose a fun sunset cruise (Octopus, Havanas, Jolly Pirates) for drinks and a good time; choose a dinner cruise for a full meal on the water.",
      },
    ],
  },
  {
    categorySlug: "sunset-and-dinner-cruises-in-aruba",
    slug: "family-sunset-cruises",
    title: "Family-friendly sunset cruises in Aruba",
    description:
      "Compare the best sunset cruises in Aruba with kids—themed pirate sails, lively catamarans, and comfortable cruises the whole family can enjoy. Open bar for adults, fun for kids.",
    picks: [
      {
        slug: "sunset-pirate-cruise",
        whyWePickIt:
          "Jolly Pirates' sunset cruise is one of Aruba's most family-friendly sunset sails—an 85-foot pirate schooner kids love, open bar for adults, shade and seating, and a relaxed sail. The pirate theme makes it memorable for kids; the stable schooner and professional crew suit all ages. No snorkeling on the sunset sail—just sailing and sunset.",
        bestFor: [
          "Families with kids who love a pirate theme",
          "Multigenerational groups (grandparents to grandkids)",
          "Parents who want open bar while kids enjoy the sail",
          "Families looking for a unique, memorable sunset experience",
        ],
      },
      {
        slug: "dolphin-sunset-cruise",
        whyWePickIt:
          "The Dolphin sunset cruise works well for families with teens—lively vibe, open bar, snacks, and a spacious catamaran deck. Same boat as the popular daytime snorkel sail. Teens enjoy the social atmosphere; parents get unlimited drinks. Best for families with older kids who want a fun, upbeat sail.",
        bestFor: [
          "Families with teens who want a lively sunset sail",
          "Parents who want open bar and a social atmosphere",
          "Families who enjoyed the daytime Dolphin and want a sunset version",
          "Groups with kids who can handle a 2–3 hour sail",
        ],
      },
      {
        slug: "happy-hour-sunset-sail",
        whyWePickIt:
          "Octopus's Happy Hour sail suits smaller families—cushioned seating, drinks to your seat (no bar queue with kids in tow), and a manageable group size (around 34 guests). Comfortable and relaxed rather than rowdy. Good for families with younger kids who want a calmer sunset experience.",
        bestFor: [
          "Smaller families who want comfort and space",
          "Families with younger kids (cushioned seats, table service)",
          "Parents who prefer drinks brought to them, not queuing at the bar",
          "Guests who want a relaxed family sail without a party vibe",
        ],
      },
    ],
    intro:
      "Family-friendly sunset cruises in Aruba combine kid appeal with adult perks. Jolly Pirates offers a themed pirate schooner kids love; the Dolphin brings a lively catamaran vibe for families with teens; Octopus Happy Hour adds cushioned comfort for smaller families. All include open bar and work for multigenerational groups.",
    whyBlock: {
      title: "Why choose a family sunset cruise in Aruba?",
      content:
        "Family sunset cruises let everyone enjoy the golden hour—kids get a memorable sail (pirate theme or lively atmosphere), parents get open bar, and the whole family shares the experience. Aruba's calm waters and stable vessels make sunset cruises suitable for most ages. Choose a pirate schooner for theme-loving kids, a catamaran for teens, or a comfortable sail for younger children.",
    },
    whatToExpect: [
      "Check-in at the marina. Kids get life jackets if needed; families get a safety briefing.",
      "Sunset sail along Aruba's coast—drinks for adults, soft drinks for kids. Shade and seating on most vessels.",
      "Golden-hour views. No snorkeling on sunset sails—just sailing, sunset, and family time.",
      "Return in twilight. Most family sunset cruises run 2–3 hours. Back in time for dinner.",
    ],
    faqs: [
      {
        question: "What are the best sunset cruises in Aruba with kids?",
        answer:
          "The best family-friendly sunset cruises in Aruba include Jolly Pirates' sunset cruise (pirate schooner, kids love the theme), the Dolphin sunset cruise (lively catamaran for families with teens), and Octopus's Happy Hour sail (cushioned comfort for smaller families). All have open bar for adults and suit different family styles.",
      },
      {
        question: "Is the Jolly Pirates sunset cruise good for families?",
        answer:
          "Yes. Jolly Pirates' sunset cruise is very family-friendly—85-foot pirate schooner, themed experience kids love, open bar for adults, shade and seating. No snorkeling on the sunset sail; it's sailing and sunset. Suitable for most ages. Check age requirements when booking.",
      },
      {
        question: "Are sunset cruises in Aruba good for kids?",
        answer:
          "Yes. Aruba's calm waters and stable vessels make sunset cruises suitable for families. Jolly Pirates (pirate theme), the Dolphin (lively for teens), and Octopus Happy Hour (comfort for smaller families) all work for kids. Most include soft drinks for children and open bar for adults. Sunset sails typically don't include swimming or snorkeling.",
      },
      {
        question: "What age is a sunset cruise suitable for in Aruba?",
        answer:
          "Most family sunset cruises welcome all ages. Very young children can stay on deck with a parent. Jolly Pirates and the Dolphin suit a range of ages; Octopus Happy Hour is good for smaller families with younger kids. Check each operator for age requirements and whether life jackets are provided.",
      },
      {
        question: "Dolphin vs Jolly Pirates sunset cruise—which is better for families?",
        answer:
          "Jolly Pirates has a pirate theme kids love—themed schooner, memorable experience. The Dolphin is livelier and best for families with teens who want a social vibe. Both have open bar and are family-friendly. Choose Jolly Pirates for younger kids who love themes; choose the Dolphin for teens and a more lively atmosphere.",
      },
    ],
  },
  // Snorkeling and Diving sub-categories
  {
    categorySlug: "snorkeling-and-diving-in-aruba",
    slug: "best-snorkeling",
    title: "Best snorkeling tours in Aruba",
    description:
      "Compare the best snorkeling tours in Aruba—private turtle trips, Mangel Halto reef tours, and guided snorkel adventures. Equipment and instruction included.",
    picks: [
      {
        slug: "mangel-halto-snorkeling-tour",
        whyWePickIt:
          "Mangel Halto is one of Aruba's top reef sites—clear water and abundant marine life. This discover snorkeling tour includes a guide, equipment, and instruction. Perfect for beginners and anyone who wants a guided south coast reef experience.",
        bestFor: [
          "Snorkelers who want to explore Mangel Halto",
          "Beginners (guided, instruction included)",
          "Travelers looking for south coast snorkeling",
        ],
      },
      {
        slug: "turtle-spotting-excursion-tour",
        whyWePickIt:
          "A dedicated turtle spotting snorkeling excursion with a guide who knows where turtles feed and rest. Equipment and instruction included. Great for families and first-timers who have always wanted to snorkel with turtles.",
        bestFor: [
          "Travelers who want to see sea turtles",
          "Families (turtles appeal to all ages)",
          "First-time snorkelers (guided, equipment provided)",
        ],
      },
      {
        slug: "turtle-spotting-snorkeling-adventure",
        whyWePickIt:
          "This turtle spotting adventure combines guided snorkeling with turtle sites, full equipment, and instruction. A solid choice for families and couples who want a dedicated turtle snorkel with an adventure feel.",
        bestFor: [
          "Families wanting a turtle-focused snorkel",
          "Couples or friends who want to see turtles",
          "Beginners (guided, equipment provided)",
        ],
      },
    ],
    intro:
      "Aruba's calm, clear waters make it one of the best places in the Caribbean to snorkel. Top tours include private turtle spotting, guided reef trips at Mangel Halto, and dedicated turtle excursions. Most provide equipment and instruction, so beginners are welcome.",
    whyBlock: {
      title: "Why book a snorkeling tour in Aruba?",
      content:
        "Guided snorkeling tours take you to the best reefs and turtle sites with equipment and instruction included. You avoid the guesswork of finding good spots and get help if you're new to snorkeling. Aruba's visibility and calm conditions suit all levels.",
    },
    whatToExpect: [
      "Check-in at the meeting point; you'll get snorkel gear and a safety briefing.",
      "Travel to the snorkel site (by boat or from shore, depending on the tour).",
      "Guided snorkeling at one or more sites—reefs, turtle habitats, or both.",
      "Return to the start. Most tours run 2–4 hours including briefing and travel.",
    ],
    faqs: [
      {
        question: "What are the best snorkeling tours in Aruba?",
        answer:
          "The best snorkeling tours in Aruba include private turtle spotting trips, guided Mangel Halto reef tours, and dedicated turtle excursions. Top picks offer equipment, instruction, and known turtle or reef sites. Compare private vs group and boat vs shore to find your fit.",
      },
      {
        question: "Do I need experience to snorkel in Aruba?",
        answer:
          "No. Most Aruba snorkeling tours are suitable for beginners. Guides provide equipment and basic instruction. Calm waters and clear visibility make it ideal for first-timers.",
      },
      {
        question: "Where is the best snorkeling in Aruba?",
        answer:
          "Popular sites include Mangel Halto (south coast reef), turtle spots along the coast, and reef areas near Malmok and Boca Catalina. Many tours combine several sites in one trip.",
      },
    ],
  },
  {
    categorySlug: "snorkeling-and-diving-in-aruba",
    slug: "turtle-spotting-snorkeling-excursion",
    title: "Turtle spotting snorkeling excursions in Aruba",
    description:
      "Snorkel with sea turtles in Aruba on guided turtle spotting excursions. Equipment, instruction, and visits to turtle habitats included. Compare top turtle snorkel tours.",
    picks: [
      {
        slug: "private-turtle-snorkeling",
        whyWePickIt:
          "Private turtle snorkeling with a dedicated guide and personal service. You get the boat and guide to yourselves, with visits to the best turtle spots. Ideal for couples or small groups who want a premium turtle experience.",
        bestFor: [
          "Couples or small groups who want a private turtle snorkel",
          "Anyone who values personalized service",
          "Travelers who want to avoid crowded tours",
        ],
      },
      {
        slug: "turtle-spotting-excursion-tour",
        whyWePickIt:
          "A dedicated turtle spotting excursion with a guide who knows where turtles are often seen. Equipment and instruction included. Great for families and anyone booking their first turtle snorkel.",
        bestFor: [
          "Travelers who want to see sea turtles",
          "Families (all ages love turtles)",
          "First-time snorkelers",
        ],
      },
      {
        slug: "turtle-spotting-snorkeling-adventure",
        whyWePickIt:
          "Guided turtle spotting adventure with full equipment and instruction. Combines reef and turtle sites in one trip. A solid choice for families and couples who want an adventure-style turtle snorkel.",
        bestFor: [
          "Families wanting a turtle-focused snorkel",
          "Couples or friends who want to see turtles",
          "Beginners (guided, equipment provided)",
        ],
      },
      {
        slug: "private-turtle-snorkeling-tres-trapi",
        whyWePickIt:
          "Private turtle snorkeling at Tres Trapi—a well-known site for clear water and marine life. Your own guide and a personalized pace. Perfect for those who want Tres Trapi and a private experience.",
        bestFor: [
          "Anyone who wants a private turtle snorkel at Tres Trapi",
          "Couples or families wanting personalized attention",
          "Guests who prefer a dedicated guide",
        ],
      },
    ],
    intro:
      "Turtle spotting snorkeling excursions in Aruba take you to sites where sea turtles feed and rest. Guided tours provide equipment, instruction, and knowledge of the best spots. Whether you choose a private trip or a small-group excursion, you'll have a chance to see turtles in the wild.",
    whyBlock: {
      title: "Why book a turtle snorkeling excursion?",
      content:
        "Guides know where turtles are often seen and how to observe them respectfully. Equipment and instruction are included, so even first-timers can enjoy the experience. Turtle excursions are popular with families and couples alike.",
    },
    whatToExpect: [
      "Meet your guide and get fitted for snorkel gear; briefing on safety and turtle etiquette.",
      "Travel to the snorkel site (boat or shore, depending on the tour).",
      "Guided snorkeling at one or more turtle habitats; your guide helps the group spot and observe turtles.",
      "Return to the start. Duration is typically 2–4 hours including briefing and travel.",
    ],
    faqs: [
      {
        question: "Where can you see turtles snorkeling in Aruba?",
        answer:
          "Sea turtles are often spotted at calm, reef-rich areas along Aruba's coast. Turtle excursions visit known habitats; sightings vary by day and season. Guides know the best spots and how to approach without disturbing the turtles.",
      },
      {
        question: "Is snorkeling with turtles in Aruba safe?",
        answer:
          "Yes. Guides keep a respectful distance and follow local guidelines. Equipment and instruction are included. Turtle snorkeling is suitable for beginners when done with a licensed operator.",
      },
      {
        question: "What is included on a turtle snorkeling excursion?",
        answer:
          "Most turtle excursions include snorkel equipment, a guide, and visits to turtle sites. Some are boat-based, others from shore. Check each listing for duration, group size, and exact inclusions.",
      },
    ],
  },
  {
    categorySlug: "snorkeling-and-diving-in-aruba",
    slug: "discover-snorkeling-mangel-halto",
    title: "Discover snorkeling at Mangel Halto, Aruba",
    description:
      "Guided snorkeling at Mangel Halto in Aruba—clear water, healthy reef, and marine life. Discover snorkeling tours with equipment and instruction. Compare options and book.",
    picks: [
      {
        slug: "mangel-halto-snorkeling-tour",
        whyWePickIt:
          "This discover snorkeling tour focuses on Mangel Halto with a guide, equipment, and instruction. Ideal for beginners and anyone who wants a guided reef experience at one of Aruba's best south coast sites.",
        bestFor: [
          "Snorkelers who want to explore Mangel Halto",
          "Beginners (discover format with instruction)",
          "Anyone who prefers a guided reef tour",
        ],
      },
      {
        slug: "private-turtle-snorkeling",
        whyWePickIt:
          "Private snorkel with turtle spotting—some itineraries include south coast sites. Personal service and a dedicated guide. Good if you want flexibility and a private experience near reef and turtle areas.",
        bestFor: [
          "Couples or small groups who want a private snorkel",
          "Anyone who wants to combine turtle spotting with quality service",
          "Travelers who prefer not to join a large tour",
        ],
      },
      {
        slug: "turtle-spotting-snorkeling-adventure",
        whyWePickIt:
          "Guided turtle spotting adventure that can include reef and south coast sites. Full equipment and instruction. A solid choice for families and first-timers who want a mix of turtle and reef snorkeling.",
        bestFor: [
          "Families wanting a guided snorkel",
          "Beginners (equipment and instruction included)",
          "Anyone looking for turtle and reef in one trip",
        ],
      },
    ],
    intro:
      "Mangel Halto is one of Aruba's best snorkeling sites—clear water, healthy reef, and abundant marine life. Discover snorkeling tours take you there with a guide, equipment, and instruction. Suitable for beginners and experienced snorkelers who want to explore the south coast reef.",
    whyBlock: {
      title: "Why snorkel at Mangel Halto?",
      content:
        "Mangel Halto offers clear water and a healthy reef with good visibility. Guided discover snorkeling tours make it accessible to beginners while giving everyone a chance to see fish and marine life in a protected setting.",
    },
    whatToExpect: [
      "Meet your guide and get fitted for gear; briefing on safety and what to expect at Mangel Halto.",
      "Snorkel at Mangel Halto with your guide. Explore the reef and spot fish and marine life.",
      "Return to the start. Duration and format (boat vs shore) depend on the operator—check your booking.",
    ],
    faqs: [
      {
        question: "Where is Mangel Halto in Aruba?",
        answer:
          "Mangel Halto is on Aruba's south coast, known for clear water and reef life. Many snorkel and sailing tours visit this area. Discover snorkeling tours focus specifically on the site with a guide.",
      },
      {
        question: "Is Mangel Halto good for beginners?",
        answer:
          "Yes. Discover snorkeling at Mangel Halto includes instruction and guided swimming. The site has areas suitable for different levels. Your guide will help you feel comfortable in the water.",
      },
      {
        question: "What is discover snorkeling?",
        answer:
          "Discover snorkeling tours introduce or improve snorkeling skills with a guide. Equipment and instruction are included. Ideal for first-timers or anyone who wants a guided reef experience.",
      },
    ],
  },
  {
    categorySlug: "snorkeling-and-diving-in-aruba",
    slug: "private-snorkeling-boat-ride",
    title: "Private snorkeling and boat rides in Aruba",
    description:
      "Private snorkeling and boat ride tours in Aruba—your own boat and guide, snorkel sites, equipment included. Compare private snorkel options and book.",
    picks: [
      {
        slug: "private-snorkeling-boat-tour",
        whyWePickIt:
          "A private snorkeling and boat ride experience—the boat and guide are reserved for your group. Snorkel at one or more sites at your pace. Ideal for families, couples, or friends who want a private day on the water.",
        bestFor: [
          "Families or groups who want a boat to themselves",
          "Couples wanting a private snorkel trip",
          "Anyone who prefers not to join a large tour",
        ],
      },
      {
        slug: "private-snorkeling-trip",
        whyWePickIt:
          "Octopus's private snorkeling trip gives you the boat and guide to yourselves. No sharing with strangers. Equipment and a dedicated guide; pace and focus (e.g. turtles, reefs) can be tailored to your group.",
        bestFor: [
          "Groups who want a private Octopus experience",
          "Families with kids (private = tailored pace)",
          "Anyone who prefers Octopus and wants exclusivity",
        ],
      },
      {
        slug: "private-turtle-snorkeling",
        whyWePickIt:
          "Private turtle snorkeling with personal service and a dedicated guide. Your group gets the boat and guide to yourselves for turtle spotting and reef sites. Perfect for couples or small groups who want a premium private snorkel.",
        bestFor: [
          "Couples or small groups who want a private turtle snorkel",
          "Anyone who wants to see turtles without a crowded boat",
          "Travelers who value personalized service",
        ],
      },
      {
        slug: "private-turtle-snorkeling-tres-trapi",
        whyWePickIt:
          "Private turtle snorkeling at Tres Trapi with your own guide. Focus on turtle spotting and reef life with a personalized pace. Ideal for those who want Tres Trapi and a private experience.",
        bestFor: [
          "Anyone who wants a private snorkel at Tres Trapi",
          "Couples or families wanting personalized attention",
          "Guests who prefer a dedicated guide and flexible timing",
        ],
      },
    ],
    intro:
      "Private snorkeling and boat ride tours give you a boat and guide for your group only. Choose your pace and, often, your sites—snorkel at one or more spots, enjoy the boat ride, and avoid the crowds. Ideal for families, friends, or couples who want a private day on the water.",
    whyBlock: {
      title: "Why choose a private snorkeling boat tour?",
      content:
        "Private tours mean no sharing the boat with strangers. You get a dedicated guide, flexible pace, and often a say in which sites you visit. Best for families, couples, and groups who value privacy and personalized service.",
    },
    whatToExpect: [
      "Meet at the marina or dock and board your private boat. Briefing on the day and snorkel gear.",
      "Boat to one or more snorkel sites. Snorkel from the boat with equipment provided.",
      "Enjoy the ride and the flexibility of a private tour. Return to the dock after snorkeling.",
    ],
    faqs: [
      {
        question: "What is a private snorkeling boat tour in Aruba?",
        answer:
          "A private snorkeling and boat tour means the boat and guide are reserved for your group only. You get a dedicated boat ride and snorkel stops without sharing with other guests. Sites and duration depend on the operator.",
      },
      {
        question: "How many people can go on a private snorkel boat?",
        answer:
          "Capacity varies by boat and operator. Private tours often suit 2–10 people. Check the listing for maximum group size and pricing (often per group or per person).",
      },
      {
        question: "Where do private snorkel boats go in Aruba?",
        answer:
          "The captain or guide typically chooses sites based on conditions and your preferences. Common areas include reef sites and turtle spots. Ask the operator about typical itineraries when you book.",
      },
    ],
  },
  {
    categorySlug: "snorkeling-and-diving-in-aruba",
    slug: "scuba-diving",
    title: "Scuba diving in Aruba",
    description:
      "Compare scuba diving in Aruba—discover dives for beginners, one- and two-tank dives for certified divers, reef and wreck sites. Equipment and instruction included where needed.",
    picks: [
      {
        slug: "discover-scuba-diving-aruba-reef",
        whyWePickIt:
          "Try scuba on Aruba's reef with no certification required. A guided introductory dive with full equipment and an instructor at your side. Ideal for first-timers who want to experience breathing underwater in Aruba's clear, calm waters.",
        bestFor: [
          "First-timers who want to try scuba without certification",
          "Anyone curious about scuba diving in Aruba",
          "Travelers who prefer a discover / try-dive format",
        ],
      },
      {
        slug: "red-sail-scuba-dive",
        whyWePickIt:
          "Red Sail Sports runs one- or two-tank boat dives for certified divers. Choose one or two dives and explore Aruba's reefs and wrecks. A reliable option with an experienced dive team and well-organized boats.",
        bestFor: [
          "Certified divers who want a boat dive",
          "Anyone who wants one- or two-tank options",
          "Divers who prefer Red Sail's boats and organization",
        ],
      },
      {
        slug: "south-aruba-two-tank-dive",
        whyWePickIt:
          "Two dives in one trip on Aruba's south coast—reef and marine life. For certified divers who want a full morning or afternoon of diving. Sites are chosen for conditions and variety.",
        bestFor: [
          "Certified divers who want two dives in one trip",
          "Anyone who wants to explore south Aruba's dive sites",
          "Divers looking for a half-day dive trip",
        ],
      },
      {
        slug: "introductory-diving-aruba",
        whyWePickIt:
          "Red Sail Sports' introductory diving experience—try scuba in Aruba without certification. Resort-style intro with briefing, practice, and a guided dive. Ideal for first-timers who want to try scuba with a trusted operator.",
        bestFor: [
          "First-timers who want to try scuba in Aruba",
          "Anyone considering a certification course (try first)",
          "Guests who prefer Red Sail's intro program",
        ],
      },
    ],
    intro:
      "Aruba offers scuba diving for everyone: discover dives and introductory courses for beginners (no certification needed), and one- or two-tank boat dives for certified divers. Reef and wreck sites, clear water, and operators like Red Sail Sports make it easy to try scuba or get back in the water.",
    whyBlock: {
      title: "Why go scuba diving in Aruba?",
      content:
        "Aruba's waters are clear and calm, with reef and wreck sites suited to both beginners and certified divers. Discover dives let you try scuba with an instructor; certified divers can join one- or two-tank boat dives. Equipment and instruction are included where needed.",
    },
    whatToExpect: [
      "Check-in at the dive operator with your certification card (certified divers) or ID (discover/intro).",
      "Briefing and gear: you'll get a safety and skills briefing and be fitted for equipment.",
      "Boat to the dive site (or confined water first for discover/intro). Dive with your instructor or guide.",
      "Return to the marina. Discover and intro dives are limited in depth and time; certified dives follow standard profiles.",
    ],
    faqs: [
      {
        question: "Do I need to be certified to scuba dive in Aruba?",
        answer:
          "No, for a discover or introductory dive. These let you try scuba with an instructor and no certification. For one- or two-tank boat dives you need a valid certification (e.g. PADI, SSI) and must show your card.",
      },
      {
        question: "What is discover scuba diving?",
        answer:
          "Discover scuba (or try-dive) is a one-off introductory experience. You breathe underwater with scuba gear under direct instructor supervision. Depth and time are limited. Ideal for trying scuba before committing to a full certification course.",
      },
      {
        question: "What are the best scuba diving sites in Aruba?",
        answer:
          "Aruba has reef sites along the coast and popular wrecks. Operators choose sites based on conditions and diver level. South coast, reef sites, and wrecks like the Antilla are common. Check with your operator for the day's sites.",
      },
      {
        question: "What is a one- or two-tank dive?",
        answer:
          "One-tank means one dive; two-tank means two dives in one trip with a surface interval between. Two-tank trips give you more time underwater and often visit two different sites. Both are for certified divers.",
      },
    ],
  },
  {
    categorySlug: "snorkeling-and-diving-in-aruba",
    slug: "beginner-snorkeling",
    title: "Beginner snorkeling in Aruba",
    description:
      "Snorkeling tours in Aruba for first-timers—guided trips with equipment, instruction, and calm sites. No experience needed. Compare the best options for beginners.",
    picks: [
      {
        slug: "mangel-halto-snorkeling-tour",
        whyWePickIt:
          "Discover snorkeling at Mangel Halto with a guide, equipment, and instruction included. The south coast reef has clear water and areas suited to beginners. Your guide stays with the group and helps you feel comfortable.",
        bestFor: [
          "First-timers who want a guided reef experience",
          "Anyone who wants instruction before getting in the water",
          "Travelers looking for a calm, structured intro to snorkeling",
        ],
      },
      {
        slug: "turtle-spotting-excursion-tour",
        whyWePickIt:
          "A dedicated turtle snorkeling excursion with equipment and instruction. Guides know how to help beginners and choose sites where the water is manageable. Great for anyone who has always wanted to snorkel with turtles.",
        bestFor: [
          "Beginners who want to see turtles",
          "Families (guided, equipment in all sizes)",
          "First-time snorkelers (instruction included)",
        ],
      },
      {
        slug: "turtle-spotting-snorkeling-adventure",
        whyWePickIt:
          "Guided turtle spotting adventure with full equipment and instruction. Combines a clear structure with the excitement of turtle sites. A solid first snorkel for families and couples.",
        bestFor: [
          "Families wanting a first snorkel together",
          "Beginners (guided, equipment provided)",
          "Anyone who wants turtle sites with extra support",
        ],
      },
      {
        slug: "turtle-snorkeling-dive-in-discover",
        whyWePickIt:
          "Turtle snorkeling with video footage included—so you can focus on the experience instead of handling a camera. Guided tour with equipment and instruction. Ideal for beginners who want a souvenir without the hassle.",
        bestFor: [
          "First-timers who want video of their snorkel",
          "Families (videos make a great souvenir)",
          "Anyone who doesn't want to manage an underwater camera",
        ],
      },
    ],
    intro:
      "Aruba is one of the best places to try snorkeling for the first time. Calm water, clear visibility, and tours that include equipment and instruction make it easy for beginners. These picks are all guided, with sites chosen for accessibility and support for first-timers.",
    whyBlock: {
      title: "Why Aruba is great for beginner snorkeling",
      content:
        "Most Aruba snorkeling tours provide masks, snorkels, fins, and basic instruction. Guides stay with the group and can help with technique and confidence. Sites like Mangel Halto and turtle spots often have calm, shallow areas. You don't need experience—just be willing to try.",
    },
    whatToExpect: [
      "Check-in and briefing: you'll get your gear and a short lesson on how to snorkel and what to expect.",
      "Enter the water with your guide. Many tours start in shallow water so you can practise before going further.",
      "Guided snorkeling at one or more sites. Your guide points out marine life and stays nearby.",
      "Return to the start. Most beginner-friendly tours run 2–4 hours including briefing and travel.",
    ],
    faqs: [
      {
        question: "Do I need experience to snorkel in Aruba?",
        answer:
          "No. Most Aruba snorkeling tours are suitable for beginners. Operators provide equipment and basic instruction. Calm waters and guided tours make it ideal for first-timers. Just mention that you're new when you book.",
      },
      {
        question: "What is the best snorkeling tour for beginners in Aruba?",
        answer:
          "The best beginner snorkeling tours in Aruba are guided trips that include equipment and instruction—for example discover snorkeling at Mangel Halto, turtle spotting excursions, and turtle snorkeling adventures. Look for 'guided', 'instruction included', and 'suitable for first-timers'.",
      },
      {
        question: "Can I snorkel if I'm not a strong swimmer?",
        answer:
          "Many tours welcome non-strong swimmers. Life jackets or flotation aids are often available. Guides can help you in shallow areas. Check the tour description or ask the operator about your comfort level before booking.",
      },
    ],
  },
  // ATV and Jeep sub-categories
  {
    categorySlug: "atv-and-jeep-tours-in-aruba",
    slug: "best-atv-tours",
    title: "Best ATV tours in Aruba",
    description:
      "Compare the best ATV and UTV tours in Aruba—Natural Pool cliff jump adventures, north coast desert rides, and Secret Beach and Cave Pool combos. Guided half-day options.",
    picks: [
      {
        slug: "natural-pool-and-cave-explorer",
        whyWePickIt:
          "UTV or ATV tour to the Natural Pool (Conchi) and cave pools with a swim and optional cliff jump. One of Aruba's most popular off-road experiences—guided convoy to the north coast, then time at the Natural Pool. Ideal for thrill-seekers who want driving plus a memorable swim.",
        bestFor: [
          "Thrill-seekers who want Natural Pool and cliff jumping",
          "Couples and groups who want a guided UTV/ATV adventure",
          "Anyone who wants the full Natural Pool experience by off-road",
        ],
      },
      {
        slug: "aruba-atv-tour",
        whyWePickIt:
          "Classic Aruba north coast ATV desert adventure in single or double seaters. Guided convoy through rugged terrain and coastal views. Well-run, popular tour for first-timers and anyone who wants a straightforward half-day ATV experience.",
        bestFor: [
          "First-time ATV riders who want a guided convoy",
          "Couples (double-seater option)",
          "Travelers who want north coast and desert in one tour",
        ],
      },
      {
        slug: "secret-beach-cave-pool-utv-atv",
        whyWePickIt:
          "UTV and ATV adventure to Secret Beach and Cave Pool—hidden spots best reached by off-road. Drive in convoy, then enjoy the beach and cave pool. Top-rated combo for scenery and a swim.",
        bestFor: [
          "Travelers who want Secret Beach and Cave Pool in one trip",
          "Couples and groups who want UTV or ATV plus swim",
          "Anyone who likes hidden beaches and natural pools",
        ],
      },
    ],
    intro:
      "The best ATV tours in Aruba combine off-road driving with must-see spots: the Natural Pool (Conchi) with cliff jumping, the north coast desert, and Secret Beach and Cave Pool. These top picks are guided, include safety briefing and helmet, and run as half-day adventures. Choose UTV or ATV, single or multi-seater, and add a swim or cliff jump for the full experience.",
    whyBlock: {
      title: "Why book an ATV or UTV tour in Aruba?",
      content:
        "Guided ATV and UTV tours take you to places regular cars can't go—the Natural Pool, cave pools, Secret Beach, and desert trails. You drive in a convoy with a guide, so you don't need to navigate. Most include helmet and briefing; many add hotel pickup, swim stops, or lunch.",
    },
    whatToExpect: [
      "Check-in at base (or hotel pickup). Waivers, safety briefing, and vehicle assignment.",
      "Guided off-road convoy to Natural Pool, desert, Secret Beach, or cave pools—depending on the tour.",
      "Stops for photos, swim, or cliff jump where included. Return to base.",
    ],
    faqs: [
      {
        question: "What are the best ATV tours in Aruba?",
        answer:
          "The best ATV tours in Aruba include Natural Pool and cave explorer tours (with swim and cliff jump), north coast desert ATV adventures, and Secret Beach and Cave Pool UTV/ATV combos. All are guided and typically half-day. Compare single vs double seater and UTV vs ATV to find your fit.",
      },
      {
        question: "Do I need a license for ATV tours in Aruba?",
        answer:
          "Yes. Most ATV and UTV tours require a valid driver's license to drive. Passengers don't need one. Age limits vary by operator. Some tours offer a guide-driven option if you prefer not to drive.",
      },
    ],
  },
  {
    categorySlug: "atv-and-jeep-tours-in-aruba",
    slug: "natural-pool",
    title: "Natural Pool ATV and UTV tours in Aruba",
    description:
      "ATV and UTV tours to the Natural Pool (Conchi) in Aruba—guided off-road, swim and cliff jumping. Compare Natural Pool and cave pool options.",
    picks: [
      {
        slug: "utv-natural-pool-swim",
        whyWePickIt:
          "UTV tour with Natural Pool swim—choose 2-, 3-, or 4-seater and drive in convoy to Conchi. Time to swim and cool off in the Natural Pool. Great for groups and families who want UTV comfort plus the classic Natural Pool stop.",
        bestFor: [
          "Groups of 2–4 who want to share a UTV",
          "Families (multi-seater UTVs)",
          "Anyone who wants Natural Pool plus UTV adventure",
        ],
      },
      {
        slug: "natural-pool-and-cave-explorer",
        whyWePickIt:
          "Natural Pool and Cave Explorer by UTV or ATV—guided convoy to Conchi and cave pools, with swim and optional cliff jumping. One of the most popular Natural Pool off-road experiences.",
        bestFor: [
          "Thrill-seekers who want Natural Pool and cliff jump",
          "Couples and friends who want a guided Natural Pool adventure",
          "Anyone who prefers not to hike to the Natural Pool",
        ],
      },
      {
        slug: "secret-beach-cave-pool-utv-atv",
        whyWePickIt:
          "UTV and ATV adventure to Secret Beach and Cave Pool—includes cave pool and coastal scenery plus a swim. Another way to experience Aruba's natural pools and hidden coast by off-road.",
        bestFor: [
          "Travelers who want cave pool and Secret Beach",
          "Couples and groups who want UTV or ATV plus swim",
          "Anyone who likes hidden beaches and natural pools",
        ],
      },
    ],
    intro:
      "The Natural Pool (Conchi) is one of Aruba's top off-road destinations. ATV and UTV tours take you there in a guided convoy—no long hike—with time to swim and, on some tours, cliff jump. Options include UTV tours with 2–4 seats, Natural Pool and cave explorer combos, and Secret Beach and Cave Pool adventures. All include helmet and briefing; bring a swimsuit and towel.",
    whyBlock: {
      title: "Why go to the Natural Pool by ATV or UTV?",
      content:
        "The Natural Pool is in a volcanic rock formation on the north coast—reachable by 4x4, ATV, or UTV. Driving there with a guide is easier and more fun than hiking, and you get the full off-road experience. Most tours include time to swim and take photos.",
    },
    whatToExpect: [
      "Check-in and briefing at base. Vehicle assignment (UTV or ATV) and helmet.",
      "Guided drive to the Natural Pool (and cave pools or Secret Beach on combo tours).",
      "Time at the Natural Pool to swim and, on some tours, cliff jump. Return to base.",
    ],
    faqs: [
      {
        question: "Can you swim at the Natural Pool in Aruba?",
        answer:
          "Yes. Most Natural Pool ATV and UTV tours include time to swim. Conditions can be choppy depending on the sea; your guide will advise. Some tours also offer cliff jumping at the site.",
      },
      {
        question: "How do you get to the Natural Pool in Aruba?",
        answer:
          "You can reach the Natural Pool by 4x4, ATV, or UTV tour—or by hiking. ATV and UTV tours are popular because they're guided and include the drive plus swim time. Tours typically run half-day.",
      },
    ],
  },
  {
    categorySlug: "atv-and-jeep-tours-in-aruba",
    slug: "eco-friendly-atv",
    title: "Eco-friendly ATV and EZ Raider tours in Aruba",
    description:
      "Electric and eco-friendly off-road options in Aruba—EZ Raider adventures to San Nicolas murals and Baby Beach, or north coast ultimate adventure. Lower-impact exploration.",
    picks: [
      {
        slug: "ez-raider-san-nicolas-baby-beach",
        whyWePickIt:
          "Private or small-group EZ Raider adventure to San Nicolas street art and Baby Beach snorkeling. Explore Aruba's second town and its murals, then relax at Baby Beach. A different kind of off-road tour—culture, art, and a calm beach.",
        bestFor: [
          "Travelers who want to see San Nicolas and its murals",
          "Art and culture lovers",
          "Anyone who wants Baby Beach in a guided tour",
          "Small groups or private experiences",
        ],
      },
      {
        slug: "offroad-snorkeling-aruban-lunch",
        whyWePickIt:
          "EZ Raider north coast ultimate adventure with off-road driving, snorkeling, and Aruban lunch. Mix of adventure, water time, and local food. Eco-friendly option for a full half-day.",
        bestFor: [
          "Travelers who want off-road, snorkel, and lunch in one tour",
          "Anyone who prefers a lower-impact or electric-style vehicle",
          "Groups who want variety—driving, water, and local cuisine",
        ],
      },
    ],
    intro:
      "Eco-friendly and electric-style off-road tours in Aruba include EZ Raider adventures—open-air vehicles that let you explore with a smaller footprint. Options range from San Nicolas art murals and Baby Beach snorkeling to north coast drives with snorkel stops and Aruban lunch. Ideal for travelers who want adventure without a traditional gas ATV/UTV, or who want a cultural and beach combo.",
    whyBlock: {
      title: "Why choose an eco-friendly or EZ Raider tour?",
      content:
        "EZ Raider and similar tours offer a different way to explore—often with a focus on culture (San Nicolas murals), calm beaches (Baby Beach), or combos with snorkeling and lunch. They're a good fit if you want a guided off-road experience with a lower environmental impact or a more relaxed, scenic vibe.",
    },
    whatToExpect: [
      "Check-in and briefing. EZ Raider or similar vehicle assignment.",
      "Guided tour to San Nicolas (murals), Baby Beach, north coast, or snorkel stop—depending on the tour.",
      "Stops for photos, snorkeling, or lunch. Return to base.",
    ],
    faqs: [
      {
        question: "What is an EZ Raider in Aruba?",
        answer:
          "EZ Raider is a type of off-road vehicle used for guided tours in Aruba. It's open-air and often seats multiple passengers. Some operators position it as an eco-friendlier or lower-impact option compared to traditional ATVs.",
      },
      {
        question: "Do eco-friendly ATV tours go to Baby Beach?",
        answer:
          "Some EZ Raider and eco-friendly-style tours include Baby Beach—on the south coast—for snorkeling and relaxation. Others focus on San Nicolas murals or the north coast. Check the tour description for the exact itinerary.",
      },
    ],
  },
  {
    categorySlug: "atv-and-jeep-tours-in-aruba",
    slug: "utv-rentals",
    title: "UTV rentals in Aruba – explore on your own",
    description:
      "Rent a UTV in Aruba and explore on your own—2-seater or 4-seater options. No convoy, your schedule. Compare UTV rental options and routes.",
    picks: [
      {
        slug: "two-seater-utv-rental",
        whyWePickIt:
          "2-seater UTV rental so you can explore Aruba at your own pace. Pick up, get a briefing and map, then head off-road as a couple or pair. No guided convoy—you choose the route and timing.",
        bestFor: [
          "Couples who want to explore alone",
          "Pairs who prefer no group convoy",
          "Travelers who want flexible half- or full-day UTV experience",
        ],
      },
      {
        slug: "utv-rental-4-seater",
        whyWePickIt:
          "4-seater UTV rental for adventure exploration. Ideal for a group of up to four who want to share one vehicle and explore independently. Get a briefing and suggested routes, then go at your own pace.",
        bestFor: [
          "Groups of 2–4 who want to explore together",
          "Families or friends who prefer no convoy",
          "Anyone who wants a full 4-seater for a half- or full-day",
        ],
      },
    ],
    intro:
      "UTV rentals in Aruba let you explore off-road on your own—no guided convoy, no set itinerary. Choose a 2-seater or 4-seater, get a safety briefing and map or suggested routes (often including the Natural Pool area), and head out. You need a valid driver's license; fuel and duration vary by package. Ideal for couples or groups who want flexibility and don't need a guide.",
    whyBlock: {
      title: "Why rent a UTV instead of joining a tour?",
      content:
        "Renting a UTV gives you freedom to set your own pace and route. You can go to the Natural Pool, north coast, or other approved areas without following a convoy. Best if you're comfortable with a map or GPS and want a private adventure.",
    },
    whatToExpect: [
      "Pick up your UTV at the rental base. Sign rental agreement, get briefing and map or suggested routes.",
      "Explore at your own pace. Return by the agreed time.",
      "Drop off the UTV at the rental base.",
    ],
    faqs: [
      {
        question: "Do I need a license to rent a UTV in Aruba?",
        answer:
          "Yes. You need a valid driver's license to rent and drive a UTV. Age requirements vary—often 21 or 25. Passengers typically don't need a license.",
      },
      {
        question: "Can we go to the Natural Pool with a UTV rental?",
        answer:
          "Many rental operators provide a map or suggested route that includes the Natural Pool area. Ask at pick-up for the best route and current conditions. Stay on permitted trails.",
      },
    ],
  },
  {
    categorySlug: "atv-and-jeep-tours-in-aruba",
    slug: "best-utv",
    title: "Best UTV tours in Aruba",
    description:
      "Compare the best UTV tours in Aruba—Natural Pool swim and cliff jump, Natural Pool and cave explorer, and Secret Beach and Cave Pool. Guided convoy, 2–4 seater options.",
    picks: [
      {
        slug: "utv-natural-pool-swim",
        whyWePickIt:
          "UTV tour with Natural Pool swim—choose 2-, 3-, or 4-seater and drive in convoy to Conchi. Time to swim and cool off. Great for groups and families who want UTV comfort plus the classic Natural Pool stop.",
        bestFor: [
          "Groups of 2–4 who want to share a UTV",
          "Families (multi-seater UTVs)",
          "Anyone who wants Natural Pool plus UTV adventure",
        ],
      },
      {
        slug: "natural-pool-and-cave-explorer",
        whyWePickIt:
          "Natural Pool and Cave Explorer by UTV or ATV—guided convoy to Conchi and cave pools, with swim and optional cliff jumping. One of the most popular Natural Pool off-road experiences.",
        bestFor: [
          "Thrill-seekers who want Natural Pool and cliff jump",
          "Couples and friends who want a guided Natural Pool adventure",
          "Anyone who prefers not to hike to the Natural Pool",
        ],
      },
      {
        slug: "secret-beach-cave-pool-utv-atv",
        whyWePickIt:
          "UTV and ATV adventure to Secret Beach and Cave Pool—hidden spots best reached by off-road. Drive in convoy, then enjoy the beach and cave pool. Top-rated combo for scenery and a swim.",
        bestFor: [
          "Travelers who want Secret Beach and Cave Pool in one trip",
          "Couples and groups who want UTV or ATV plus swim",
          "Anyone who likes hidden beaches and natural pools",
        ],
      },
    ],
    intro:
      "The best UTV tours in Aruba combine off-road driving with must-see spots: the Natural Pool (Conchi) with swim and cliff jump, Natural Pool and cave explorer routes, and Secret Beach and Cave Pool. These top picks are guided, include 2- to 4-seater UTV options, and run as half-day adventures. Ideal for groups who want to share a UTV and get a swim or cliff jump at the Natural Pool or cave pools.",
    whyBlock: {
      title: "Why choose a UTV tour in Aruba?",
      content:
        "UTVs seat 2–4 people with a cage and seatbelts—easier to share than single-seat ATVs. Guided UTV tours take you to the Natural Pool, cave pools, or Secret Beach in convoy, so you don't need to navigate. Most include helmet, briefing, and swim time.",
    },
    whatToExpect: [
      "Check-in at the operator's base (or hotel pickup if included). Sign waivers and safety briefing.",
      "Get your UTV assignment—2-, 3-, or 4-seater depending on the tour and your group size. Helmet provided.",
      "Guided convoy drive to the Natural Pool, cave pools, or Secret Beach—route depends on which tour you choose.",
      "Photo stops and scenic views along the way. Your guide leads the group at a steady pace.",
      "Swim stop at the Natural Pool, cave pool, or Secret Beach. Time to cool off and take photos.",
      "On some tours: optional cliff jumping at the Natural Pool (conditions permitting). Your guide will advise.",
      "Return to base (or drop-off). Total duration typically 3–4 hours.",
    ],
    faqs: [
      {
        question: "What are the best UTV tours in Aruba?",
        answer:
          "The best UTV tours in Aruba include the Natural Pool swim tour (2–4 seater), Natural Pool and Cave Explorer (with cliff jump), and Secret Beach and Cave Pool adventure. All are guided and half-day; choose by group size and whether you want Natural Pool, cave pools, or Secret Beach.",
      },
      {
        question: "Do I need a license for UTV tours in Aruba?",
        answer:
          "Yes. The driver needs a valid driver's license; passengers do not. Age requirements (e.g. 18+ to drive) vary by operator. You drive in a convoy, so no prior UTV experience is required.",
      },
      {
        question: "How many people fit in a UTV on Aruba tours?",
        answer:
          "UTVs on these tours typically seat 2, 3, or 4 people depending on the vehicle and tour. Choose based on your group size. Only the driver needs a license; everyone else can ride as a passenger.",
      },
      {
        question: "How long are the best UTV tours in Aruba?",
        answer:
          "These UTV tours typically run 3–4 hours from check-in to return, including the drive, swim stop, and return. Exact duration is on your booking confirmation.",
      },
      {
        question: "What should I bring for a UTV tour to the Natural Pool?",
        answer:
          "Wear closed-toe shoes and clothes you don't mind getting dusty. Bring a swimsuit, towel, sunscreen, and sunglasses. The operator provides helmet and safety gear. Avoid loose scarves or dangling jewelry.",
      },
    ],
  },
  {
    categorySlug: "atv-and-jeep-tours-in-aruba",
    slug: "atv-desert-tours",
    title: "ATV desert and coast tours in Aruba",
    description:
      "Guided ATV tours across Aruba's desert and north coast—single and double seaters, 4-hour options, and combos with Natural Pool snorkeling. Compare desert ATV adventures.",
    picks: [
      {
        slug: "aruba-atv-tour",
        whyWePickIt:
          "Classic Aruba north coast ATV desert adventure in single or double seaters. Guided convoy through rugged terrain and coastal views. Well-run, popular tour for first-timers and anyone who wants a straightforward half-day ATV experience.",
        bestFor: [
          "First-time ATV riders who want a guided convoy",
          "Couples (double-seater option)",
          "Travelers who want north coast and desert in one tour",
        ],
      },
      {
        slug: "aruba-atv-single-double-seater-4-hour",
        whyWePickIt:
          "4-hour ATV adventure in single or double seaters—more time on the trails than a 2-hour tour. Guided convoy through desert and coastal terrain. Ideal for groups who want a full half-day of driving.",
        bestFor: [
          "Groups who want a full 4-hour ATV experience",
          "Couples or friends (double seater available)",
          "Anyone who wants more time on the trails",
        ],
      },
      {
        slug: "atv-offroad-natural-pool-snorkeling",
        whyWePickIt:
          "ATV off-road tour with Natural Pool and snorkeling—drive in convoy to the north coast, then swim and snorkel at the Natural Pool. Mix of desert driving and water time.",
        bestFor: [
          "Travelers who want ATV plus snorkeling",
          "Adventure and water lovers in one tour",
          "Groups who want the Natural Pool and optional snorkel",
        ],
      },
    ],
    intro:
      "ATV desert and coast tours take you off-road across Aruba's north coast and desert in single or double-seater ATVs. Options include the classic north coast desert ride, a longer 4-hour tour for more trail time, and a combo with Natural Pool snorkeling. All are guided convoy tours—no experience needed. Ideal if you prefer driving an ATV (rather than a UTV) and want desert scenery with optional swim or snorkel.",
    whyBlock: {
      title: "Why do an ATV desert tour in Aruba?",
      content:
        "Aruba's north coast and desert are best explored by ATV or UTV. Guided ATV tours let you drive in a convoy so you don't need to navigate. Single or double seaters available; 4-hour tours cover more ground. Add the Natural Pool and snorkeling for a full half-day adventure.",
    },
    whatToExpect: [
      "Check-in at the operator's base (or hotel pickup if included). Waivers and safety briefing.",
      "Get your ATV—single or double seater—and helmet. Brief driving orientation if you're new to ATVs.",
      "Guided convoy drive through the north coast desert and coastal terrain. Follow the lead guide at a set pace.",
      "Photo and rest stops along the route. Scenic views of the desert, coast, and sometimes California Lighthouse area.",
      "On the Natural Pool snorkeling combo: drive to Conchi, then time to swim and snorkel. Gear may be provided—check the tour.",
      "Continue the route or head back to base. Total drive time depends on whether you have a 2–3 hour or 4-hour tour.",
      "Return to base (or drop-off). Duration typically 2–4 hours from check-in to return.",
    ],
    faqs: [
      {
        question: "What are the best ATV desert tours in Aruba?",
        answer:
          "The best ATV desert and coast tours include the north coast ATV adventure (single/double seater), the 4-hour single and double seater tour for more trail time, and the ATV tour with Natural Pool snorkeling. All are guided; choose by duration and whether you want a swim stop.",
      },
      {
        question: "Do I need experience to drive an ATV in Aruba?",
        answer:
          "No. Desert and coast ATV tours are designed for beginners. You get a safety briefing and drive in a convoy with a guide. Stick to the guide's pace and you'll be fine.",
      },
      {
        question: "What is the difference between single and double seater ATV?",
        answer:
          "Single seater means one person per ATV (everyone drives). Double seater allows one driver and one passenger per vehicle. Choose based on your group and who wants to drive.",
      },
      {
        question: "How long are ATV desert tours in Aruba?",
        answer:
          "ATV desert and coast tours run about 2–4 hours. The 4-hour option gives you more time on the trails; shorter tours focus on a specific route. Your confirmation will state the exact duration.",
      },
      {
        question: "What should I wear for an ATV desert tour?",
        answer:
          "Wear closed-toe shoes, long pants or clothes you don't mind getting dusty, sunglasses, and sunscreen. Bring water if not provided. For the Natural Pool snorkeling combo, bring a swimsuit and towel. Avoid flip-flops and loose jewelry.",
      },
    ],
  },
  // Island Sightseeing sub-categories
  {
    categorySlug: "island-sightseeing-tours-in-aruba",
    slug: "best-sightseeing-tours",
    title: "Best sightseeing tours in Aruba",
    description:
      "Our top picks for island sightseeing: classic landmarks tour, National Park safari, and party bus with DJ and barhopping. Compare and book.",
    picks: [
      {
        slug: "aruba-island-sightseeing-tour",
        whyWePickIt:
          "The classic Aruba island sightseeing tour hits the must-sees—California Lighthouse, Ayo and Casibari rock formations, Alto Vista Chapel—by bus or van with a guide. Relaxed, narrated, and ideal for first-time visitors who want the best of the island in one trip.",
        bestFor: [
          "First-time visitors who want the main sights in one day",
          "Families (comfortable bus or van)",
          "Anyone who prefers a relaxed, narrated tour",
        ],
      },
      {
        slug: "national-park-safari-tour",
        whyWePickIt:
          "Arikok National Park safari takes you into Aruba's protected desert and coast by safari vehicle—caves, natural pools, and rugged scenery with a guide. One of the best ways to experience the island's wild side without driving yourself.",
        bestFor: [
          "Nature lovers who want to explore Arikok National Park",
          "Families (guided safari vehicle)",
          "Travelers who want adventure and scenery",
        ],
      },
      {
        slug: "party-bus-dj-barhopping-aruba",
        whyWePickIt:
          "Party bus with live DJ and barhopping—a fun, social way to see Aruba's nightlife. Visit several bars or venues with music and a party atmosphere. Perfect for groups and anyone who wants a memorable night out.",
        bestFor: [
          "Groups of friends who want a night out",
          "Celebrations (birthdays, bachelor/bachelorette)",
          "Anyone who enjoys nightlife and music",
        ],
      },
    ],
    intro:
      "Our top picks for sightseeing in Aruba cover the essentials: the classic landmarks tour for first-time visitors, the National Park safari for nature and adventure, and the party bus for a fun night out. Compare these three, then book the one that fits your style.",
    whyBlock: {
      title: "Why these sightseeing tours?",
      content:
        "We chose the island sightseeing tour for its broad appeal and iconic stops; the National Park safari for the best way to see Arikok; and the party bus for a unique, social experience. All are highly rated and easy to book.",
    },
    whatToExpect: [
      "Classic tour: bus or van, lighthouse, rocks, chapel, and photo stops. Half- or full-day options.",
      "National Park safari: guided drive through Arikok, caves and natural pool stops, desert and coastal views.",
      "Party bus: evening pickup, live DJ on board, barhopping at several venues. Age limits apply—check the tour.",
    ],
    faqs: [
      {
        question: "What are the best sightseeing tours in Aruba?",
        answer:
          "Our top three are the classic Aruba island sightseeing tour (landmarks by bus/van), the National Park safari (Arikok by safari vehicle), and the party bus with DJ and barhopping (nightlife). Choose by style: day sightseeing vs. evening party.",
      },
      {
        question: "Is the classic island tour good for families?",
        answer:
          "Yes. The island sightseeing tour by bus or van is suitable for all ages. Stops allow time to get out and explore; the pace is relaxed and narrated.",
      },
      {
        question: "What is the party bus tour?",
        answer:
          "The party bus combines transport with live DJ entertainment and barhopping—you visit several bars or venues in one evening. Typically for adults (18+ or 21+). Check the tour for exact age requirements and inclusions.",
      },
      {
        question: "How do I choose between the three best sightseeing tours?",
        answer:
          "Pick the classic island sightseeing tour if you want landmarks (lighthouse, rocks, chapel) in one relaxed trip. Choose the National Park safari for nature and Arikok. Choose the party bus if you want a fun night out with music and barhopping.",
      },
      {
        question: "Do these tours include hotel pickup?",
        answer:
          "The island sightseeing tour and National Park safari typically offer hotel pickup. The party bus usually has a central meeting point. Check each tour's details when you book.",
      },
    ],
  },
  {
    categorySlug: "island-sightseeing-tours-in-aruba",
    slug: "half-day",
    title: "Half-day island tours in Aruba",
    description:
      "Compare half-day island tours in Aruba—Natural Wonders Jeep (caves and Natural Pool), National Park safari, and classic island sightseeing. About 3–4 hours.",
    picks: [
      {
        slug: "natural-wonders-jeep-tour-caves-natural-pool",
        whyWePickIt:
          "Jeep tour to Aruba's caves and the Natural Pool in one half-day. Guided 4x4, no self-drive—ideal for small groups who want caves and a swim stop without a full-day commitment.",
        bestFor: [
          "Small groups who want caves and Natural Pool in one trip",
          "Anyone who prefers a guided jeep over driving an ATV",
          "Travelers who want a half-day escape",
        ],
      },
      {
        slug: "national-park-safari-tour",
        whyWePickIt:
          "Safari-style tour through Arikok National Park—desert, caves, and natural sights in about 3–4 hours. Comfortable for families and nature lovers who want a focused half-day in the park.",
        bestFor: [
          "Nature lovers who want to explore Arikok National Park",
          "Families (guided safari vehicle)",
          "Anyone who wants a half-day park experience",
        ],
      },
      {
        slug: "aruba-island-sightseeing-tour",
        whyWePickIt:
          "Classic island sightseeing by bus or van—California Lighthouse, rock formations, Alto Vista Chapel. Often offered as a half-day (3–4 hours); relaxed pace and ideal for first-time visitors.",
        bestFor: [
          "First-time visitors who want the main sights in one half-day",
          "Families (comfortable bus or van)",
          "Anyone who prefers a narrated, relaxed tour",
        ],
      },
    ],
    intro:
      "Half-day island tours in Aruba typically run 3–4 hours—enough to see caves and the Natural Pool, explore the national park, or hit the classic lighthouse and rock-formation sights. These picks are all guided and often include hotel pickup; choose jeep adventure, safari, or classic bus/van sightseeing.",
    whyBlock: {
      title: "Why choose a half-day island tour?",
      content:
        "Half-day tours let you see major sights without spending the whole day. You're back by lunch or early afternoon with time for the beach or other activities. Jeep and safari tours add adventure; bus and van tours offer comfort and commentary.",
    },
    whatToExpect: [
      "Hotel pickup (on most tours) or meet at a central point. Check your confirmation for time and location.",
      "Guided drive—jeep, safari vehicle, or bus/van—with commentary on Aruba's sights and history.",
      "Stops at 2–4 key locations: Natural Pool and caves, national park sites, or California Lighthouse and rock formations.",
      "Photo opportunities and free time at stops. On Natural Pool tours: time to swim if conditions allow.",
      "Return to your hotel or the starting point. Total duration typically 3–4 hours.",
    ],
    faqs: [
      {
        question: "What are the best half-day island tours in Aruba?",
        answer:
          "Strong options include the Natural Wonders Jeep tour (caves and Natural Pool), the National Park safari tour (Arikok), and the classic Aruba island sightseeing tour (lighthouse, rocks, chapel). All run about 3–4 hours and are guided.",
      },
      {
        question: "Do half-day tours include hotel pickup?",
        answer:
          "Many half-day jeep, safari, and bus tours include hotel pickup. Walking and some specialty tours meet at a central point. Check the tour details and your confirmation.",
      },
      {
        question: "Is a half-day tour enough to see Aruba?",
        answer:
          "A half-day tour is enough to see one theme—e.g. Natural Pool and caves, or the main landmarks (lighthouse, rocks). For more stops and a lunch break, consider a full-day tour.",
      },
      {
        question: "What should I bring on a half-day island tour?",
        answer:
          "Wear comfortable clothes and closed-toe shoes for jeep and safari tours; bring sunscreen, a hat, and water. For Natural Pool tours, bring a swimsuit and towel. Bus and van tours are less demanding—same basics plus camera.",
      },
      {
        question: "Can I do a half-day tour with kids?",
        answer:
          "Yes. The classic bus/van sightseeing and the National Park safari are family-friendly. Jeep tours can be bumpy; check age or height limits with the operator. All three half-day picks are guided and suitable for most ages.",
      },
    ],
  },
  {
    categorySlug: "island-sightseeing-tours-in-aruba",
    slug: "full-day",
    title: "Full-day Aruba tours",
    description:
      "Full-day island tours in Aruba—classic sightseeing, Uncle Howie tour, and private luxury jeep. 6–8 hours with more stops and often lunch.",
    picks: [
      {
        slug: "aruba-island-sightseeing-tour",
        whyWePickIt:
          "The classic island sightseeing tour is often offered as a full-day option—more stops, more time at each site, and usually a lunch break. Ideal for first-time visitors who want to see the most in one day.",
        bestFor: [
          "First-time visitors who want maximum coverage in one day",
          "Families (comfortable bus or van, full-day pace)",
          "Anyone who wants a relaxed, narrated full-day tour",
        ],
      },
      {
        slug: "uncle-howie-tour",
        whyWePickIt:
          "Uncle Howie's tour is a popular full-day (or half-day) island experience with a charismatic local guide. Stories, personality, and key sights—a memorable way to see Aruba.",
        bestFor: [
          "Travelers who want a fun, character-driven full-day tour",
          "Groups who enjoy storytelling and local flair",
          "Anyone looking for an entertaining island overview",
        ],
      },
      {
        slug: "aruba-private-luxury-jeep-tours",
        whyWePickIt:
          "Private luxury jeep tour—your group, your pace. Often available as a full-day with panoramic views and multiple attraction stops. Premium option for couples or small groups.",
        bestFor: [
          "Couples or small groups who want an exclusive full-day",
          "Travelers who prefer luxury and flexibility",
          "Special occasions or VIP-style sightseeing",
        ],
      },
    ],
    intro:
      "Full-day Aruba tours run typically 6–8 hours and cover more ground than half-day options. You'll get extra stops, more time at each site, and often a lunch break. Choose the classic island sightseeing tour for broad coverage, Uncle Howie for personality and stories, or a private luxury jeep for an exclusive full-day.",
    whyBlock: {
      title: "Why book a full-day island tour?",
      content:
        "Full-day tours let you see more sights and take your time. Lunch is often included or there's a stop where you can eat. Best if you have one day dedicated to island exploration and want to minimize planning.",
    },
    whatToExpect: [
      "Hotel pickup (on most tours). Full-day tours usually start in the morning.",
      "Guided drive with multiple stops—lighthouse, rock formations, chapel, Natural Pool area, or other landmarks depending on the tour.",
      "Lunch stop or break (included or at your expense depending on the operator).",
      "Additional afternoon stops. More photo time and commentary than on a half-day.",
      "Return to your hotel in the late afternoon or early evening. Total duration typically 6–8 hours.",
    ],
    faqs: [
      {
        question: "What are the best full-day tours in Aruba?",
        answer:
          "Popular full-day options include the classic Aruba island sightseeing tour (bus/van, many stops), the Uncle Howie tour (character and stories), and private luxury jeep tours (exclusive, flexible). All run about 6–8 hours.",
      },
      {
        question: "Is lunch included on full-day Aruba tours?",
        answer:
          "It depends on the tour. Some full-day tours include lunch; others stop at a restaurant where you buy your own meal. Check the tour description and inclusions when you book.",
      },
      {
        question: "How long are full-day island tours?",
        answer:
          "Full-day tours typically run 6–8 hours from pickup to drop-off. You'll have more stops and more time at each than on a half-day tour.",
      },
      {
        question: "What is the Uncle Howie tour?",
        answer:
          "Uncle Howie's tour is a popular island tour led by a charismatic local guide. It's known for stories, personality, and key Aruba sights. Often offered as half-day or full-day; check the operator for duration and itinerary.",
      },
      {
        question: "Are full-day tours good for families?",
        answer:
          "Yes. The classic island sightseeing tour by bus or van is comfortable for all ages. Uncle Howie appeals to families who enjoy storytelling. Private luxury jeep is ideal for smaller groups; check vehicle capacity when you book.",
      },
    ],
  },
  {
    categorySlug: "island-sightseeing-tours-in-aruba",
    slug: "cultural",
    title: "Cultural and history tours in Aruba",
    description:
      "Cultural and history-focused tours in Aruba—downtown Oranjestad walking tour, Aruba Eats food tour, and countrysides tour. Explore on foot or by vehicle.",
    picks: [
      {
        slug: "aruba-downtown-city-walking-tour",
        whyWePickIt:
          "Walking tour of downtown Oranjestad—historic buildings, fort area, and main streets with a guide who shares Aruba's history and culture. Ideal for culture lovers who prefer to explore on foot.",
        bestFor: [
          "Travelers who enjoy walking and city exploration",
          "Culture and history enthusiasts",
          "Anyone staying in or near Oranjestad",
        ],
      },
      {
        slug: "aruba-eats-food-tour",
        whyWePickIt:
          "Aruba Eats food tour—sip and savor local flavors on foot. Multiple tastings and local venues with stories. Perfect for foodies who want culture and cuisine in one tour.",
        bestFor: [
          "Foodies who want to try local Aruban and Caribbean flavors",
          "Travelers who enjoy walking and eating",
          "Couples or small groups",
        ],
      },
      {
        slug: "aruba-countrysides-tour",
        whyWePickIt:
          "Countrysides tour takes you into rural Aruba—local life, villages, and scenery away from the resort strip. A different perspective on the island's culture and landscape.",
        bestFor: [
          "Travelers who want to see rural and local Aruba",
          "Anyone interested in local life and countryside",
          "Families (relaxed pace, comfortable transport)",
        ],
      },
    ],
    intro:
      "Cultural and history tours in Aruba focus on stories, local life, and flavor. Walk downtown Oranjestad for history and architecture, join a food tour for tastings and culture, or explore the countrysides for a glimpse of rural Aruba. All are guided and offer a deeper look at the island beyond the main landmarks.",
    whyBlock: {
      title: "Why choose a cultural or history tour?",
      content:
        "Cultural and history tours add context—you learn about Aruba's past, local life, and food. Walking and food tours are especially good for engaging with the capital; countrysides tours show a different side of the island.",
    },
    whatToExpect: [
      "Meet your guide at a central point (walking and food tours) or hotel pickup (countrysides).",
      "Guided walk or drive with focus on history, culture, or local life. Commentary on architecture, traditions, or cuisine.",
      "On food tours: multiple tasting stops. On walking tours: historic sites and main streets. On countrysides: rural stops and scenery.",
      "Time for questions and photos. Tours typically run 2–4 hours (walking/food) or 3–4 hours (countrysides).",
      "Tour ends at or near the start, or with drop-off if pickup was included.",
    ],
    faqs: [
      {
        question: "What are the best cultural tours in Aruba?",
        answer:
          "Top options include the downtown Oranjestad walking tour (history and architecture), the Aruba Eats food tour (local tastings and culture), and the countrysides tour (rural Aruba and local life). All are guided and culture-focused.",
      },
      {
        question: "Are cultural tours good for families?",
        answer:
          "Walking and food tours are suitable for older kids and teens who can walk and enjoy the pace. Countrysides tours by bus or van are comfortable for all ages. Check age requirements for food tours (alcohol may be served).",
      },
      {
        question: "Do I need to be fit for the walking tour?",
        answer:
          "Downtown walking tours are at a moderate pace on mostly flat ground. Wear comfortable shoes. If you have mobility concerns, check with the operator; the countrysides tour is by vehicle and may be a better fit.",
      },
      {
        question: "How long are cultural and history tours?",
        answer:
          "Walking and food tours in Oranjestad typically run 2–4 hours. The countrysides tour by bus or van is usually half-day (3–4 hours). Check each tour's description for exact duration.",
      },
      {
        question: "Is the food tour suitable for vegetarians or dietary restrictions?",
        answer:
          "Many food tours can accommodate dietary needs if you advise when booking. The Aruba Eats tour features local tastings—ask the operator about vegetarian, vegan, or allergy options before you book.",
      },
    ],
  },
  {
    categorySlug: "island-sightseeing-tours-in-aruba",
    slug: "budget",
    title: "Budget & affordable island tours in Aruba",
    description:
      "Cheap and affordable island sightseeing in Aruba—classic bus tour, downtown walking tour, and countrysides tour. Great value without private or luxury prices.",
    picks: [
      {
        slug: "aruba-island-sightseeing-tour",
        whyWePickIt:
          "The classic island sightseeing tour by bus or van is one of the most affordable ways to see Aruba's top landmarks. Shared transport keeps the price down; you still get the lighthouse, rock formations, and chapel with a guide.",
        bestFor: [
          "Travelers on a budget who want to see the main sights",
          "Families (shared bus = lower per-person cost)",
          "First-time visitors who want value",
        ],
      },
      {
        slug: "aruba-downtown-city-walking-tour",
        whyWePickIt:
          "Walking tours of Oranjestad are typically lower-cost than vehicle tours—no transport to pay for, just a guide and your feet. History, culture, and the heart of the capital at a budget-friendly price.",
        bestFor: [
          "Budget-conscious travelers who enjoy walking",
          "Anyone staying in or near Oranjestad",
          "Culture lovers who want an affordable half-day",
        ],
      },
      {
        slug: "aruba-countrysides-tour",
        whyWePickIt:
          "Countrysides tour by shared bus or van explores rural Aruba at a lower price than private jeep or luxury options. You get a different side of the island—villages, scenery, local life—without the premium tag.",
        bestFor: [
          "Travelers who want countryside sights on a budget",
          "Families (shared vehicle = good value)",
          "Anyone who wants off-the-resort views affordably",
        ],
      },
    ],
    intro:
      "You don't need to spend a lot to see Aruba. These budget-friendly island tours deliver real sightseeing: the classic bus tour for landmarks, the downtown walking tour for culture on foot, and the countrysides tour for rural scenery—all at lower price points than private jeep or luxury options.",
    whyBlock: {
      title: "Why these tours are affordable",
      content:
        "Shared bus and van tours spread the cost across the group. Walking tours skip vehicle costs. Countrysides tours use shared transport instead of private jeeps. You still get a guide, key sights, and a proper tour—just at a price that fits a tighter budget.",
    },
    whatToExpect: [
      "Classic tour: shared bus or van, hotel pickup often available, stops at lighthouse, rocks, chapel. Half- or full-day.",
      "Walking tour: meet in Oranjestad, guided walk through downtown. No transport cost; duration usually 2–3 hours.",
      "Countrysides: shared bus or van through rural Aruba. Stops and commentary; typically half-day.",
    ],
    faqs: [
      {
        question: "What are the cheapest island tours in Aruba?",
        answer:
          "The most affordable options are usually the classic island sightseeing tour (shared bus/van), the downtown Oranjestad walking tour (no vehicle), and the countrysides tour (shared transport). Compare prices when you book; walking tours often cost less per person.",
      },
      {
        question: "Do budget tours include hotel pickup?",
        answer:
          "Many bus and van sightseeing tours include hotel pickup. Walking tours usually meet at a central point in Oranjestad. Check each tour's inclusions—pickup can still be included on value-oriented tours.",
      },
      {
        question: "Are cheap Aruba tours still good quality?",
        answer:
          "Yes. Budget doesn't mean low quality—these are shared group tours with real guides and real sights. You're saving by sharing transport or choosing a walking tour, not by skipping the experience.",
      },
      {
        question: "How much do budget island tours cost?",
        answer:
          "Prices vary by operator and season. Walking tours and shared bus tours are often among the lowest per-person options. Compare the three tours on this page when you book—you'll see current prices and can choose what fits your budget.",
      },
      {
        question: "What is the difference between the classic tour and the countrysides tour?",
        answer:
          "The classic island sightseeing tour focuses on famous landmarks (California Lighthouse, Ayo/Casibari rocks, Alto Vista Chapel). The countrysides tour goes into rural Aruba—villages, farmland, and local life. Both use shared transport and are budget-friendly; choose by whether you want icons or countryside.",
      },
    ],
  },
  {
    categorySlug: "island-sightseeing-tours-in-aruba",
    slug: "jeep-offroad",
    title: "Jeep and off-road adventure tours in Aruba",
    description:
      "Jeep tours and off-road adventures in Aruba—Natural Pool and caves, rugged 4x4 trips, and National Park safari. For thrill-seekers and nature lovers.",
    picks: [
      {
        slug: "natural-wonders-jeep-tour-caves-natural-pool",
        whyWePickIt:
          "Guided jeep tour to Aruba's caves and the Natural Pool (Conchi)—classic off-road sightseeing. No self-drive; you ride in a 4x4 with a guide. Caves and a swim stop in one half-day.",
        bestFor: [
          "Travelers who want caves and Natural Pool by jeep",
          "Small groups who prefer not to drive themselves",
          "Anyone who wants a classic Aruba jeep adventure",
        ],
      },
      {
        slug: "offroad-adventure-tour-aruba",
        whyWePickIt:
          "Off-road adventure by 4x4 or jeep through Aruba's rugged terrain—bumps, dust, and scenic stops. A more adrenaline-focused option for those who want an active, bumpy ride with great views.",
        bestFor: [
          "Adventure seekers who want real off-road driving",
          "Small groups (jeep capacity)",
          "Travelers who want thrills and scenery",
        ],
      },
      {
        slug: "national-park-safari-tour",
        whyWePickIt:
          "Safari-style vehicle through Arikok National Park—caves, natural pool, desert, and coast. Not a traditional jeep but the same spirit: rough terrain, guided, with nature and adventure.",
        bestFor: [
          "Nature lovers who want to explore Arikok",
          "Families (safari vehicle can be more comfortable than a small jeep)",
          "Anyone who wants park highlights in one guided trip",
        ],
      },
    ],
    intro:
      "Jeep and off-road tours in Aruba take you where regular cars can't go—to the Natural Pool, through caves, across desert and rugged coast. These three picks cover guided jeep to caves and Conchi, a dedicated off-road adventure, and a National Park safari. All are guided; choose by how much bump you want.",
    whyBlock: {
      title: "Why choose a jeep or off-road tour?",
      content:
        "Aruba's north coast and interior are best seen from a 4x4 or safari vehicle. Guided tours handle the rough roads so you can focus on the views and the swim stops. Jeeps are smaller and bouncier; safari vehicles offer a slightly smoother ride with the same wild scenery.",
    },
    whatToExpect: [
      "Check-in or hotel pickup. Briefing and board your jeep or 4x4 (or safari vehicle for the park tour).",
      "Guided drive over unpaved roads—dust, bumps, and scenic stops. Route depends on the tour: caves and Natural Pool, general off-road, or Arikok National Park.",
      "Photo stops and, on Natural Pool tours, time to swim when conditions allow.",
      "Return to base or hotel. Duration typically 3–4 hours (half-day).",
    ],
    faqs: [
      {
        question: "What are the best jeep tours in Aruba?",
        answer:
          "Top options include the Natural Wonders Jeep tour (caves and Natural Pool), the off-road adventure tour (rugged 4x4 terrain), and the National Park safari (Arikok by safari vehicle). All are guided; the first two are classic jeep/4x4, the third is safari-style.",
      },
      {
        question: "Do I need to drive the jeep myself?",
        answer:
          "No. These are guided tours—a driver/guide operates the vehicle (or leads the convoy). You ride along. For self-drive off-road, see ATV and UTV tours in a different category.",
      },
      {
        question: "Is the off-road tour suitable for kids?",
        answer:
          "Jeep and off-road tours can be bumpy and dusty. Age and height restrictions may apply. The National Park safari often uses larger, slightly smoother vehicles and can be a good option for families. Check each tour's requirements.",
      },
      {
        question: "What is the Natural Pool and can I swim there?",
        answer:
          "The Natural Pool (Conchi) is a rocky pool on Aruba's north coast, filled by ocean waves. The Natural Wonders Jeep tour includes a stop there; you can swim when conditions allow. Your guide will advise on safety. Bring a swimsuit and towel.",
      },
      {
        question: "How long are jeep and off-road tours?",
        answer:
          "These tours typically run half-day (about 3–4 hours) from pickup or check-in to return. That's enough for the Natural Pool and caves, a solid off-road route, or a good stretch of Arikok National Park. Check your confirmation for exact duration.",
      },
    ],
  },
  // Private and Luxury Tours sub-categories
  {
    categorySlug: "private-and-luxury-tours-in-aruba",
    slug: "airport-arrival-departure",
    title: "Airport arrival & departure – VIP hosting in Aruba",
    description:
      "VIP airport hosting on arrival and departure in Aruba. First-class meet and assist so you skip the stress. Compare and book.",
    picks: [
      {
        slug: "vip-airport-hosting-arrival",
        whyWePickIt:
          "VIP airport hosting on arrival—a host meets you when you land and assists you through customs and arrivals. First-class start to your holiday with no guesswork.",
        bestFor: [
          "First-time visitors who want a stress-free arrival",
          "Families or groups who prefer guided assistance",
          "Anyone who values time and convenience",
        ],
      },
      {
        slug: "vip-airport-hosting-departure",
        whyWePickIt:
          "VIP airport hosting on departure—meet-and-greet and assistance from check-in through to your gate. Relaxed, first-class send-off from Aruba.",
        bestFor: [
          "Travelers who want a stress-free departure",
          "Families or groups with lots of luggage",
          "Anyone who prefers guided assistance at the airport",
        ],
      },
    ],
    intro:
      "VIP airport hosting in Aruba gives you a dedicated host on arrival or departure—meet-and-greet, assistance through customs or check-in, and escort so you don't have to navigate the airport alone. Book arrival, departure, or both for a first-class start and end to your trip.",
    whyBlock: {
      title: "Why book VIP airport hosting?",
      content:
        "Aruba's airport is manageable but can get busy. A host meets you, helps with paperwork and queues, and escorts you to your transfer or gate. Ideal after a long flight or when you want to maximize relaxation.",
    },
    whatToExpect: [
      "On arrival: host meets you at the aircraft or arrival area; escort through customs, baggage, and exit; handoff to your transfer or rental.",
      "On departure: meet at the airport; assistance with check-in and security; escort to your gate.",
      "Duration depends on queues and your flight; the host stays with you until you're done.",
    ],
    faqs: [
      {
        question: "What is VIP airport hosting in Aruba?",
        answer:
          "A dedicated host meets you at the airport and assists you through arrival (customs, baggage, exit) or departure (check-in, security, to gate). You're escorted so you don't have to navigate alone.",
      },
      {
        question: "Can I book both arrival and departure?",
        answer:
          "Yes. You can book arrival hosting, departure hosting, or both as separate products. Check the operator for combined or round-trip options if available.",
      },
      {
        question: "How do I find my host at the airport?",
        answer:
          "Your confirmation will include meeting point and contact details. The host will be waiting at the agreed location; some operators offer a placard with your name.",
      },
      {
        question: "Is VIP hosting only for first class?",
        answer:
          "No. VIP airport hosting is a separate service you book—it's not tied to your airline class. Anyone can book it for a smoother arrival or departure.",
      },
      {
        question: "How long does arrival hosting take?",
        answer:
          "It depends on flight timing and queues. The host stays with you until you've cleared customs and reached your transfer or rental. Typically 30–60 minutes or so, but flexible.",
      },
    ],
  },
  {
    categorySlug: "private-and-luxury-tours-in-aruba",
    slug: "vip-transfers",
    title: "VIP transfers in Aruba",
    description:
      "VIP and private airport transfers in Aruba—luxury SUV or private vehicle, one-way or round-trip. Door-to-door service.",
    picks: [
      {
        slug: "vip-luxury-suv-airport-transfer",
        whyWePickIt:
          "Luxury SUV transfer between the airport and your hotel—private, comfortable, and stylish. Ideal for couples or small groups who want space and comfort.",
        bestFor: [
          "Couples or small groups who want a private transfer",
          "Travelers who prefer luxury vehicles",
          "Anyone with extra luggage or who values comfort",
        ],
      },
      {
        slug: "private-round-trip-airport-transfer",
        whyWePickIt:
          "Private round-trip airport transfer—one booking covers arrival and departure. Door-to-door so you don't have to arrange two separate rides.",
        bestFor: [
          "Families or groups who want one transfer booking",
          "Travelers who prefer door-to-door private service",
          "Anyone who wants arrival and departure covered",
        ],
      },
    ],
    intro:
      "VIP and private transfers in Aruba get you between the airport and your accommodation in comfort—luxury SUV or private vehicle, one-way or round-trip. No shared shuttles; just your party and the driver.",
    whyBlock: {
      title: "Why book a private or VIP transfer?",
      content:
        "Private transfers mean no waiting for other passengers, no fixed shuttle schedule, and door-to-door service. Luxury SUV options add extra space and comfort. Ideal after a long flight or with family and luggage.",
    },
    whatToExpect: [
      "Book one-way (airport to hotel or hotel to airport) or round-trip. Your confirmation will state meeting point and time.",
      "Driver meets you at the airport (with a sign) or at your hotel at the agreed time.",
      "Private ride to your destination. No stops for other guests.",
    ],
    faqs: [
      {
        question: "What is the difference between VIP and private transfer?",
        answer:
          "Both are private—just your party. 'VIP' often indicates a higher-end vehicle (e.g. luxury SUV) and sometimes meet-and-greet; 'private' means a dedicated vehicle. Check each product for exact inclusions.",
      },
      {
        question: "Can I book round-trip?",
        answer:
          "Yes. The private round-trip airport transfer covers both legs in one booking. One-way options are also available if you only need a single transfer.",
      },
      {
        question: "How many people fit in the transfer?",
        answer:
          "Capacity depends on the vehicle. Luxury SUV typically fits 2–4 plus luggage; larger groups may need a bigger vehicle. Check the product for maximum passengers.",
      },
      {
        question: "Is the transfer private?",
        answer:
          "Yes. These are private transfers—no other passengers are added. You have the vehicle to yourself (or your group).",
      },
      {
        question: "Do I need to tip the driver?",
        answer:
          "Tipping is optional and at your discretion. If you're happy with the service, a tip is appreciated. Not required unless stated by the operator.",
      },
    ],
  },
  {
    categorySlug: "private-and-luxury-tours-in-aruba",
    slug: "private-boat-charter",
    title: "Private boat charter in Aruba",
    description:
      "Private boat charters in Aruba—snorkeling, sunset cruise, or custom itinerary. Your group, your boat, your pace.",
    picks: [
      {
        slug: "private-aruba-charter-snorkeling-sunset",
        whyWePickIt:
          "Private charter combining snorkeling and a sunset cruise—your group, your schedule. Snorkel at prime spots and enjoy the sunset on the water without sharing the boat.",
        bestFor: [
          "Couples or small groups who want the boat to themselves",
          "Snorkelers who want a flexible, private trip",
          "Anyone who wants a sunset sail with privacy",
        ],
      },
      {
        slug: "freedom-charters",
        whyWePickIt:
          "Freedom Charters offers private boat charters tailored to you—snorkeling, cruising, or sunset. Your group and your pace with a dedicated captain and crew.",
        bestFor: [
          "Groups who want a private boat for the day or half-day",
          "Travelers who want a customizable itinerary",
          "Couples or families celebrating a special occasion",
        ],
      },
    ],
    intro:
      "Private boat charters in Aruba give you the boat to yourself—no shared tours. Snorkeling, sunset sails, or a mix; duration and stops can often be tailored. Ideal for couples, families, or small groups who want exclusivity and flexibility.",
    whyBlock: {
      title: "Why choose a private boat charter?",
      content:
        "You get the whole boat for your group, so you set the pace and (within reason) the itinerary. No sharing with strangers; the captain and crew focus on you. Perfect for special occasions or anyone who values privacy.",
    },
    whatToExpect: [
      "Meet at the marina. Board your private boat with captain (and crew if stated).",
      "Snorkeling, cruising, or sunset sail—itinerary as per your booking or customized with the operator.",
      "Return to the marina at the agreed time. Duration typically half-day or full-day.",
    ],
    faqs: [
      {
        question: "How many people can join a private charter?",
        answer:
          "Capacity depends on the boat. Most private charters suit 2–10 or so; some vessels take more. Check the product for maximum guests.",
      },
      {
        question: "Can we choose where we go?",
        answer:
          "Many operators allow input on route and snorkel stops, subject to weather and safety. Discuss your preferences when you book.",
      },
      {
        question: "Is snorkeling gear included?",
        answer:
          "It varies by operator. Some include gear; others offer it as an add-on. Check the product inclusions when you book.",
      },
      {
        question: "How long is a typical private charter?",
        answer:
          "Half-day (3–4 hours) and full-day options are common. Sunset cruises are often 2–3 hours. Your confirmation will state the exact duration.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "Operators may reschedule or refund per their policy. Check the cancellation terms when you book; many offer flexibility for weather.",
      },
    ],
  },
  {
    categorySlug: "private-and-luxury-tours-in-aruba",
    slug: "private-jeep-tours",
    title: "Private jeep tours in Aruba",
    description:
      "Private jeep tours in Aruba—your own jeep and guide. Palm and Eagle Beach area or top attractions. Flexible and exclusive.",
    picks: [
      {
        slug: "private-jeep-tour-palm-eagle",
        whyWePickIt:
          "Private jeep tour in the Palm and Eagle Beach area—your own vehicle and guide for a personalized experience. Explore at your pace without sharing the jeep.",
        bestFor: [
          "Couples or small groups who want a private jeep",
          "Travelers who want a customizable island tour",
          "Anyone who prefers not to share a vehicle",
        ],
      },
      {
        slug: "aruba-private-jeep-tour-attractions",
        whyWePickIt:
          "Private jeep tour with exciting attractions—Natural Pool, California Lighthouse, rock formations, and more. Your group and your guide in one jeep for a flexible, full island experience.",
        bestFor: [
          "Couples or small groups who want a private island tour",
          "Travelers who want to hit top attractions in one day",
          "Anyone who prefers a private vehicle and guide",
        ],
      },
    ],
    intro:
      "Private jeep tours in Aruba put you in your own vehicle with a dedicated guide—no shared bus or convoy. Choose a tour focused on the Palm and Eagle Beach area or one that hits top attractions (Natural Pool, lighthouse, rocks). Flexible, exclusive, and at your pace.",
    whyBlock: {
      title: "Why book a private jeep tour?",
      content:
        "You get the jeep and guide to yourself, so you can linger at stops, skip what doesn't interest you, and enjoy the ride without sharing with other guests. Ideal for couples, families, or small groups.",
    },
    whatToExpect: [
      "Hotel or agreed pickup. Meet your guide and board your private jeep.",
      "Guided drive with stops—area tour or top attractions, depending on the product.",
      "Return to your hotel or agreed location. Duration typically half-day or full-day.",
    ],
    faqs: [
      {
        question: "Is the jeep really private?",
        answer:
          "Yes. You book the jeep for your group only; no other passengers are added. You share the vehicle only with your own party and the guide/driver.",
      },
      {
        question: "Do I need to drive?",
        answer:
          "No. These are guided tours—the guide drives (or a dedicated driver). You ride along and enjoy the sights.",
      },
      {
        question: "What's the difference between the two private jeep tours?",
        answer:
          "One focuses on the Palm and Eagle Beach area; the other covers top island attractions (Natural Pool, lighthouse, rocks). Both are private; choose by the itinerary that fits you.",
      },
      {
        question: "How long are private jeep tours?",
        answer:
          "Typically half-day (3–4 hours) or full-day. Your confirmation will state the exact duration and pickup time.",
      },
      {
        question: "Is hotel pickup included?",
        answer:
          "Most private jeep tours include hotel or agreed-location pickup. Check the product details and your confirmation.",
      },
    ],
  },
  {
    categorySlug: "private-and-luxury-tours-in-aruba",
    slug: "luxury-dinner",
    title: "Luxury dinner experiences in Aruba",
    description:
      "Luxury dinner experiences in Aruba—exclusive dinner cruise or romantic sunset picnic in a cabana. Premium and memorable.",
    picks: [
      {
        slug: "exclusive-dinner-cruise",
        whyWePickIt:
          "Exclusive dinner cruise—sail at sunset or evening with a premium dinner on board. Luxury experience with great food, views, and service for couples or small groups.",
        bestFor: [
          "Couples seeking a romantic dinner on the water",
          "Special occasions (anniversary, proposal)",
          "Travelers who want a premium dinner experience",
        ],
      },
      {
        slug: "eagle-beach-romantic-sunset-picnic-cabana",
        whyWePickIt:
          "Romantic sunset picnic on Eagle Beach in a luxury cabana—private setup for two with a curated picnic. Golden hour and intimacy on one of Aruba's best beaches.",
        bestFor: [
          "Couples who want a private beach moment",
          "Proposals or anniversaries",
          "Travelers who want luxury and privacy on the beach",
        ],
      },
    ],
    intro:
      "Luxury dinner experiences in Aruba range from an exclusive dinner cruise (sail with a premium meal and drinks) to a romantic sunset picnic in a private cabana on Eagle Beach. Both are premium, memorable options for couples or small groups.",
    whyBlock: {
      title: "Why book a luxury dinner experience?",
      content:
        "These experiences combine great food, a stunning setting (on the water or on the beach), and a high level of service. Ideal for anniversaries, proposals, or anyone who wants to splurge on a special evening.",
    },
    whatToExpect: [
      "Dinner cruise: board at the marina, sail with dinner and drinks served on board, return after 2–3 hours.",
      "Cabana picnic: meet at Eagle Beach, enjoy your private cabana and curated picnic at sunset, then depart at the agreed time.",
    ],
    faqs: [
      {
        question: "What is included in the dinner cruise?",
        answer:
          "Typically a multi-course or plated dinner, drinks (often wine or cocktails), and the cruise. Exact menu and inclusions vary by operator—check the product page.",
      },
      {
        question: "What is the cabana picnic?",
        answer:
          "A private cabana on Eagle Beach with a curated picnic setup—food, drinks, and the golden hour. Usually for two; some operators allow slightly larger groups. Check the product for details.",
      },
      {
        question: "Can dietary requirements be accommodated?",
        answer:
          "Many operators can accommodate dietary needs if you advise when booking. Mention allergies, vegetarian, or other requirements so they can prepare.",
      },
      {
        question: "How long is the dinner cruise?",
        answer:
          "Most dinner cruises run 2–3 hours. Your confirmation will state the exact duration and departure time.",
      },
      {
        question: "Is the cabana private?",
        answer:
          "Yes. You have a dedicated cabana and area for your party—typically for two. It's your private setup for the duration of the experience.",
      },
    ],
  },
  {
    categorySlug: "private-and-luxury-tours-in-aruba",
    slug: "couples-celebrations",
    title: "Private experiences for couples & celebrations in Aruba",
    description:
      "Romantic private experiences in Aruba—dinner cruise, sunset picnic in a cabana, private charter. Perfect for honeymoons, proposals, and anniversaries.",
    picks: [
      {
        slug: "exclusive-dinner-cruise",
        whyWePickIt:
          "Exclusive dinner cruise—sail at sunset or evening with a premium dinner on board. One of the most romantic private experiences in Aruba for couples, proposals, or anniversaries.",
        bestFor: [
          "Couples seeking a romantic dinner on the water",
          "Proposals or anniversaries",
          "Honeymooners who want a special evening",
        ],
      },
      {
        slug: "eagle-beach-romantic-sunset-picnic-cabana",
        whyWePickIt:
          "Romantic sunset picnic on Eagle Beach in a luxury cabana—private setup for two with a curated picnic. Intimate, memorable, and ideal for proposals or a honeymoon moment.",
        bestFor: [
          "Couples who want a private beach moment",
          "Proposals or anniversaries",
          "Honeymooners who want luxury and privacy",
        ],
      },
      {
        slug: "private-aruba-charter-snorkeling-sunset",
        whyWePickIt:
          "Private boat charter with snorkeling and sunset—your group only. A romantic way to spend half-day or evening on the water without sharing the boat. Perfect for couples or small groups celebrating.",
        bestFor: [
          "Couples who want the boat to themselves",
          "Honeymooners or anniversary celebrations",
          "Anyone who wants a private sail and snorkel",
        ],
      },
    ],
    intro:
      "Private experiences for couples and celebrations in Aruba include an exclusive dinner cruise, a romantic sunset picnic in a luxury cabana on Eagle Beach, and a private charter for snorkeling and sunset. All are ideal for honeymoons, proposals, anniversaries, or any occasion you want to make special.",
    whyBlock: {
      title: "Why book a private experience for couples?",
      content:
        "These experiences offer privacy, premium settings, and attention to detail. Whether you want dinner on the water, a cabana on the beach, or a private boat, you get a memorable, romantic experience without sharing with strangers.",
    },
    whatToExpect: [
      "Dinner cruise: board at the marina, sail with dinner and drinks, return after 2–3 hours. Often shared with a small group unless you book a fully private option.",
      "Cabana picnic: meet at Eagle Beach, enjoy your private cabana and curated picnic at sunset. Typically for two; duration 2–3 hours.",
      "Private charter: your boat only—snorkel and sunset sail. Half-day or sunset block; itinerary can often be tailored.",
    ],
    faqs: [
      {
        question: "What are the best private experiences for couples in Aruba?",
        answer:
          "Top picks are the exclusive dinner cruise (romantic dinner on the water), the Eagle Beach romantic sunset picnic in a luxury cabana (private beach moment), and a private charter (your boat for snorkeling and sunset). All suit honeymoons, proposals, and anniversaries.",
      },
      {
        question: "Can I arrange a proposal on one of these experiences?",
        answer:
          "Yes. The dinner cruise and cabana picnic are popular for proposals. Contact the operator when you book to arrange flowers, champagne, or a special setup. Many are happy to help make it memorable.",
      },
      {
        question: "Are these experiences only for two?",
        answer:
          "The cabana picnic is typically for two; the dinner cruise and private charter can accommodate a small group (e.g. two couples or a family celebration). Check each product for capacity.",
      },
      {
        question: "When should we book for a honeymoon or anniversary?",
        answer:
          "Book as early as you can, especially in high season. Popular dates and sunset slots fill quickly. A few weeks ahead is ideal; last-minute may still be possible depending on availability.",
      },
      {
        question: "What should we wear for the dinner cruise or cabana?",
        answer:
          "Smart-casual or resort evening wear for the dinner cruise. For the cabana picnic, comfortable but nice—you're on the beach but in a luxury setup. Avoid flip-flops and very casual beach wear for the cruise.",
      },
    ],
  },
  // Romantic Experiences sub-categories
  {
    categorySlug: "romantic-experiences-in-aruba",
    slug: "sunset-sails",
    title: "Romantic sunset sails in Aruba",
    description:
      "Intimate and romantic sunset sails in Aruba—Palm Pleasure and Arusun catamaran. Drinks, golden hour, and a relaxed sail for two or a small group.",
    picks: [
      {
        slug: "palm-pleasure-sunset-sail",
        whyWePickIt:
          "Palm Pleasure's sunset sail is one of Aruba's most intimate—smaller group size, relaxed vibe, and drinks included. Ideal for couples who want a quiet, romantic sail without a party boat.",
        bestFor: [
          "Couples wanting an intimate sunset sail",
          "Small groups who prefer fewer guests",
          "Anyone who wants a relaxed, romantic evening on the water",
        ],
      },
      {
        slug: "arusun-sunset-sail",
        whyWePickIt:
          "The Arusun catamaran runs a relaxed sunset sail with open bar and snacks. Well-reviewed vessel and a straightforward golden-hour experience—good for couples who want a proven, easy option.",
        bestFor: [
          "Couples who want a relaxed sunset sail",
          "Anyone who wants open bar and snacks included",
          "Travelers who value a well-reviewed catamaran",
        ],
      },
    ],
    intro:
      "Romantic sunset sails in Aruba focus on the golden hour—sailing with drinks (and sometimes snacks), without a full dinner or party vibe. Palm Pleasure offers a more intimate, small-group sail; the Arusun catamaran gives you a proven sunset sail with open bar. Both are strong choices for couples.",
    whyBlock: {
      title: "Why choose a sunset sail for a romantic evening?",
      content:
        "Sunset sails are shorter and more focused than dinner cruises—you're on the water for the golden hour, then back in time for dinner ashore. Intimate or small-group options like Palm Pleasure keep the vibe romantic; the Arusun offers a reliable, well-priced sail with open bar.",
    },
    whatToExpect: [
      "Meet at the departure point (Palm Beach area for both). Board the sailboat or catamaran.",
      "Sail into the golden hour. Drinks (and snacks on the Arusun) included. No dinner on board.",
      "Return to the marina after sunset. Total duration typically 2–2.5 hours.",
    ],
    faqs: [
      {
        question: "What is the best romantic sunset sail in Aruba?",
        answer:
          "Palm Pleasure is one of the most intimate—smaller groups and a relaxed vibe. The Arusun catamaran is a well-reviewed, open-bar sunset sail. Both suit couples; choose Palm Pleasure for maximum intimacy, Arusun for a proven catamaran experience.",
      },
      {
        question: "What's the difference between a sunset sail and a dinner cruise?",
        answer:
          "Sunset sails include sailing and drinks (and sometimes snacks)—no full dinner. You're back in time to eat onshore. Dinner cruises include a meal on board. Both can be romantic; choose a sail if you prefer to dine elsewhere.",
      },
      {
        question: "How long are romantic sunset sails?",
        answer:
          "Typically 2–2.5 hours from departure to return. Your confirmation will state the exact duration and check-in time.",
      },
      {
        question: "Are these sails private?",
        answer:
          "No. Both Palm Pleasure and Arusun are shared experiences with other guests. Palm Pleasure limits group size for a more intimate feel. For a private sail, see private boat charters in the Private and Luxury category.",
      },
      {
        question: "What should we wear?",
        answer:
          "Casual, comfortable clothes and soft-soled shoes. Bring a light layer for the breeze after sunset. No need to dress up unless you want to.",
      },
    ],
  },
  {
    categorySlug: "romantic-experiences-in-aruba",
    slug: "dinner-cruises",
    title: "Romantic dinner cruises in Aruba",
    description:
      "Romantic dinner cruises in Aruba—exclusive dinner cruise and Red Sail's catamaran dinner cruise. Sail with a full meal and drinks on the water.",
    picks: [
      {
        slug: "exclusive-dinner-cruise",
        whyWePickIt:
          "Exclusive dinner cruise—sail at sunset or evening with a premium dinner on board. A luxury experience with great food, views, and service. Ideal for proposals, anniversaries, or a special evening for two.",
        bestFor: [
          "Couples seeking a romantic dinner on the water",
          "Special occasions (anniversary, proposal)",
          "Travelers who want a premium dinner experience",
        ],
      },
      {
        slug: "dinner-cruise-catamaran",
        whyWePickIt:
          "Red Sail Sports' dinner cruise by catamaran—buffet dinner, open bar, and sunset sail in one trip. A reliable, romantic option for couples who want dinner and sailing without the formality of a plated exclusive cruise.",
        bestFor: [
          "Couples celebrating an anniversary or special occasion",
          "Guests who want a full dinner on the boat",
          "Anyone who prefers a buffet with variety and open bar",
        ],
      },
    ],
    intro:
      "Romantic dinner cruises in Aruba combine sailing with a full meal and drinks—dinner on the water as the sun sets or under the stars. The exclusive dinner cruise offers a premium, plated experience; Red Sail's catamaran dinner cruise delivers a buffet, open bar, and a proven catamaran. Both are popular for anniversaries and proposals.",
    whyBlock: {
      title: "Why book a dinner cruise for a romantic evening?",
      content:
        "You get dinner and sailing in one experience—no need to choose between a restaurant and a sail. The exclusive option is more upscale; the catamaran dinner cruise is a full buffet and open bar on a luxury catamaran. Both create a memorable evening for two.",
    },
    whatToExpect: [
      "Board at the marina (Palm Beach or Oranjestad area). Welcome drink and departure.",
      "Sail into the golden hour or evening. Dinner and drinks served on board—plated or buffet depending on the cruise.",
      "Return to the marina after 2–3 hours. Dress smart-casual or resort evening wear.",
    ],
    faqs: [
      {
        question: "What are the best romantic dinner cruises in Aruba?",
        answer:
          "The exclusive dinner cruise offers a premium plated dinner and upscale vibe. Red Sail's dinner cruise by catamaran offers a buffet, open bar, and a reliable catamaran experience. Both are romantic; choose by whether you prefer a more exclusive feel or a buffet with variety.",
      },
      {
        question: "Is dinner included?",
        answer:
          "Yes. Both options include dinner and drinks on board. The exclusive cruise typically has a plated or multi-course menu; the catamaran cruise includes a full buffet and open bar. Check the product for exact menu and dietary options.",
      },
      {
        question: "How long is the dinner cruise?",
        answer:
          "Most dinner cruises run 2–3 hours. Your confirmation will state the exact duration and departure time.",
      },
      {
        question: "Can we arrange a proposal on the dinner cruise?",
        answer:
          "Yes. Both experiences are popular for proposals. Contact the operator when you book to see if they can arrange flowers, champagne, or a special moment.",
      },
      {
        question: "What should we wear?",
        answer:
          "Smart-casual or resort evening wear. Avoid flip-flops and very casual beach wear; the experience is upscale and romantic.",
      },
    ],
  },
  {
    categorySlug: "romantic-experiences-in-aruba",
    slug: "beach-cabana-photography",
    title: "Beach cabana & photography experiences in Aruba",
    description:
      "Luxury cabana picnics on Eagle Beach and professional couple or engagement photography in Aruba. Private setups and lasting photos.",
    picks: [
      {
        slug: "eagle-beach-romantic-sunset-picnic-cabana",
        whyWePickIt:
          "Romantic sunset picnic on Eagle Beach in a luxury cabana—private setup for two with a curated picnic. Ideal for couples, proposals, or anniversaries who want a memorable moment on one of Aruba's best beaches.",
        bestFor: [
          "Couples who want a private beach moment",
          "Proposals or anniversaries",
          "Honeymooners who want luxury and privacy",
        ],
      },
      {
        slug: "beach-romantic-sunset-photoshoot-picnic-cabana",
        whyWePickIt:
          "Combine a luxury cabana picnic with a professional sunset photoshoot. Private cabana, curated picnic, and lasting photos from your Aruba trip—ideal for engagements or anniversaries.",
        bestFor: [
          "Couples who want professional photos and a cabana experience",
          "Engagements or anniversary shoots",
          "Honeymooners who want photos and a romantic setup",
        ],
      },
      {
        slug: "family-couple-engagement-photography-aruba",
        whyWePickIt:
          "Professional photography for couples, engagements, and families—a dedicated session at the beach or your chosen location. Get quality vacation or engagement photos you'll keep for years.",
        bestFor: [
          "Couples who want professional vacation or engagement photos",
          "Families who want a quality photo session in Aruba",
          "Engagement or anniversary photo shoots",
        ],
      },
    ],
    intro:
      "Beach cabana and photography experiences in Aruba range from a private luxury cabana picnic on Eagle Beach to a cabana picnic plus professional photoshoot, or a dedicated couple, engagement, or family photography session. All deliver a romantic or memorable experience and, with the photo options, lasting images from your trip.",
    whyBlock: {
      title: "Why book a beach cabana or photography experience?",
      content:
        "Cabana picnics give you a private, romantic setup on the sand—no crowds, just you and the sunset. Adding a photoshoot means you leave with professional images. A standalone photography session is perfect for engagement or vacation photos without the cabana component.",
    },
    whatToExpect: [
      "Cabana picnic: meet at Eagle Beach, enjoy your private cabana and curated picnic at sunset. Duration often 2–3 hours.",
      "Cabana + photoshoot: same cabana picnic with a professional photographer during the golden hour. You receive edited images as per the package.",
      "Photography only: meet the photographer at the agreed location (e.g. beach). Session typically 1–2 hours; receive edited images as per the package.",
    ],
    faqs: [
      {
        question: "What's the difference between the cabana picnic and the photoshoot cabana?",
        answer:
          "The cabana picnic is a private sunset picnic in a luxury cabana—no photographer. The photoshoot cabana adds a professional photographer so you get both the experience and edited photos. Choose the first for a pure romantic moment; choose the second if you want professional images too.",
      },
      {
        question: "Where are these experiences located?",
        answer:
          "Cabana experiences are typically on Eagle Beach. Photography sessions can be at Eagle Beach, Palm Beach, or another agreed location. Your operator will confirm the exact meeting point.",
      },
      {
        question: "How many photos do we get from the photography sessions?",
        answer:
          "It varies by package. Some include a set number of edited digital images; others offer different tiers or add-ons. Check each product for what's included and how you'll receive the images.",
      },
      {
        question: "Can we use the photography for engagement photos?",
        answer:
          "Yes. Both the beach photoshoot cabana and the dedicated couple/engagement photography session are popular for engagement and anniversary shoots. Book in advance for your preferred date and time.",
      },
      {
        question: "Is the cabana private?",
        answer:
          "Yes. Cabana experiences give you a dedicated cabana and area for your party—typically for two. You're not sharing the space with other guests.",
      },
    ],
  },
  // Horseback Riding sub-categories
  {
    categorySlug: "horseback-riding-in-aruba",
    slug: "beach-rides",
    title: "Beach horseback rides in Aruba",
    description:
      "Beach and coastal horseback rides in Aruba—small-group beach tour, ecological and beach ride, and sunset ride with beach. Beginners welcome.",
    picks: [
      {
        slug: "small-group-horseback-riding-beach-tour",
        whyWePickIt:
          "Small-group beach horseback tour—limited group size for a more personal ride along the coast. Beginners welcome; the ranch matches you with a horse and gives instruction. Ideal for couples or small groups who want a beach ride without a big crowd.",
        bestFor: [
          "Couples or small groups who want a personal beach ride",
          "Beginners (instruction and matched horse)",
          "Travelers who prefer smaller groups",
        ],
      },
      {
        slug: "ecological-beach-horseback-riding",
        whyWePickIt:
          "Ecological and beach horseback riding—ride through nature and along the beach. Popular as a shore excursion for cruise guests; timing and pickup can fit ship schedules. Suitable for beginners.",
        bestFor: [
          "Cruise ship passengers looking for a shore excursion",
          "Nature and beach lovers",
          "Beginners",
        ],
      },
      {
        slug: "sunset-horseback-ride-rock-formation-countryside-beach",
        whyWePickIt:
          "2-hour sunset ride past rock formations, through the countryside, and along the beach. Golden hour and cooler temperatures—great for couples and anyone who wants variety and a scenic evening ride.",
        bestFor: [
          "Couples who want a romantic sunset ride",
          "Travelers who want rock formations, countryside and beach in one ride",
          "Anyone who prefers cooler evening riding",
        ],
      },
    ],
    intro:
      "Beach horseback rides in Aruba take you along the coast and sometimes through nature or countryside. Choose a small-group beach tour for intimacy, an ecological and beach ride (ideal for cruise guests), or a 2-hour sunset ride that includes rock formations, countryside, and beach. All are guided and most welcome beginners.",
    whyBlock: {
      title: "Why choose a beach horseback ride?",
      content:
        "Beach rides combine the thrill of being on a horse with the scenery of Aruba's coast. Small-group and ecological tours keep the experience personal; sunset rides add golden-hour light and cooler temperatures. Most ranches welcome beginners and match you with a suitable horse.",
    },
    whatToExpect: [
      "Check in at the ranch. Safety briefing and horse assignment.",
      "Guided ride along the beach and/or coastal trails. Photo stops as allowed.",
      "Return to the ranch. Duration typically 1–2 hours of riding plus prep.",
    ],
    faqs: [
      {
        question: "What are the best beach horseback rides in Aruba?",
        answer:
          "Strong options include the small-group beach tour (intimate, beginners welcome), the ecological and beach ride (nature + coast, good for cruise guests), and the 2-hour sunset ride (rock formations, countryside, and beach). All are guided and beginner-friendly where noted.",
      },
      {
        question: "Do I need experience for a beach ride?",
        answer:
          "No. Most beach and ecological rides welcome beginners. You'll get a briefing and be matched with a horse. The sunset ride may have varied terrain; check the product if you're a first-timer.",
      },
      {
        question: "What should I wear?",
        answer:
          "Long pants and closed-toe shoes. Bring sunscreen and a hat. Avoid loose clothing or flip-flops. For sunset rides, a light layer is useful.",
      },
      {
        question: "Are there horseback riding shore excursions for cruise passengers?",
        answer:
          "Yes. The ecological and beach horseback riding tour is offered as a shore excursion with timing and pickup suited to cruise schedules. Confirm port pickup and return times when you book.",
      },
      {
        question: "How long are beach horseback rides?",
        answer:
          "Typically 1–2 hours of riding plus briefing and preparation. The 2-hour sunset ride is about 2 hours in the saddle. Your confirmation will state the exact duration.",
      },
    ],
  },
  {
    categorySlug: "horseback-riding-in-aruba",
    slug: "sunset",
    title: "Sunset horseback tours in Aruba",
    description:
      "Sunset horseback rides in Aruba. Golden hour rides with rock formations, countryside and beach, or a classic sunset ride. Romantic and cooler.",
    picks: [
      {
        slug: "sunset-horseback-ride-rock-formation-countryside-beach",
        whyWePickIt:
          "2-hour sunset ride past rock formations, through the countryside, and along the beach. One of the most varied sunset rides—you get scenery and the beach in one trip. Popular with couples.",
        bestFor: [
          "Couples who want a romantic sunset ride",
          "Travelers who want variety (rocks, countryside, beach)",
          "Anyone who prefers cooler evening temperatures",
        ],
      },
      {
        slug: "sunset-horseback-ride",
        whyWePickIt:
          "Classic sunset horseback ride timed for the golden hour. A relaxed, scenic evening ride that suits couples and anyone who wants a straightforward sunset experience on horseback.",
        bestFor: [
          "Couples who want a romantic sunset ride",
          "Travelers who prefer a relaxed evening ride",
          "Anyone who wants cooler temperatures",
        ],
      },
    ],
    intro:
      "Sunset horseback tours in Aruba are timed for the golden hour—you ride as the sun goes down and the temperature drops. Choose the 2-hour ride that includes rock formations, countryside, and beach for maximum variety, or the classic sunset ride for a relaxed evening. Both are popular with couples.",
    whyBlock: {
      title: "Why book a sunset horseback ride?",
      content:
        "Sunset rides are cooler and the light is ideal for photos. They're also one of the most romantic horseback experiences in Aruba—many couples book them for a special evening. Ranches time the ride so you're out during the best light.",
    },
    whatToExpect: [
      "Meet at the ranch. Briefing and horse assignment.",
      "Guided ride during the golden hour and sunset. Route may include countryside, beach, and/or rock formations.",
      "Return to the ranch after sunset. Duration typically 2 hours of riding plus prep.",
    ],
    faqs: [
      {
        question: "What are the best sunset horseback rides in Aruba?",
        answer:
          "Two strong options: the 2-hour sunset ride (rock formations, countryside, and beach) for variety and scenery, and the classic sunset ride for a relaxed golden-hour experience. Both suit couples and beginners when the operator allows.",
      },
      {
        question: "What time do sunset rides start?",
        answer:
          "Start times are set so you're riding during sunset—typically late afternoon or early evening. Your confirmation will state the exact time.",
      },
      {
        question: "Are sunset rides good for couples?",
        answer:
          "Yes. Sunset horseback rides are one of the most popular romantic activities in Aruba. The light and cooler temperatures make them ideal for couples.",
      },
      {
        question: "Do I need experience?",
        answer:
          "Many sunset rides welcome beginners; the pace is often relaxed. Check the product description for the operator's requirements.",
      },
      {
        question: "What should I wear?",
        answer:
          "Long pants and closed-toe shoes. Bring a light layer—it can get breezy after the sun sets. Sunscreen for the first part of the ride.",
      },
    ],
  },
  {
    categorySlug: "horseback-riding-in-aruba",
    slug: "natural-pool-scenic",
    title: "Natural Pool & scenic horseback rides in Aruba",
    description:
      "Horseback rides to the Natural Pool, Alto Vista Chapel, and Wariruri Natural Bridge in Aruba. Scenic trails and landmarks. One tour for advanced riders.",
    picks: [
      {
        slug: "natural-pool-horseback-riding-tour",
        whyWePickIt:
          "Ride to the Natural Pool (Conchi) on horseback—a unique way to reach one of Aruba's most famous spots. Trail ride through rugged north coast terrain. Suitable for riders who are comfortable on trails; some operators welcome confident beginners.",
        bestFor: [
          "Riders who want to reach the Natural Pool on horseback",
          "Adventure seekers who want a different route to Conchi",
          "Travelers who enjoy trail riding",
        ],
      },
      {
        slug: "horseback-riding-alto-vista-chapel",
        whyWePickIt:
          "Scenic ride to Alto Vista Chapel—Aruba's historic pilgrimage church in the countryside. A mix of nature and culture. Many tours welcome beginners; check the operator.",
        bestFor: [
          "Travelers who want to see Alto Vista Chapel from the saddle",
          "Riders who enjoy scenic and cultural stops",
          "Beginners (when operator allows)",
        ],
      },
      {
        slug: "wariruri-natural-bridge-horseback-riding-advanced",
        whyWePickIt:
          "3-hour ride to the Wariruri Natural Bridge for advanced riders only. Rugged terrain and a longer, more challenging ride. Rewarding for experienced riders who want to see the natural bridge on horseback.",
        bestFor: [
          "Advanced or experienced riders only",
          "Travelers who want a longer, challenging ride",
          "Anyone who wants to reach the Natural Bridge on horseback",
        ],
      },
    ],
    intro:
      "Natural Pool and scenic horseback rides in Aruba take you to landmarks—the Natural Pool (Conchi), Alto Vista Chapel, or the Wariruri Natural Bridge. The Natural Pool and Alto Vista rides suit many levels; the Natural Bridge tour is a 3-hour ride for advanced riders only. All are guided and showcase Aruba's trails and scenery.",
    whyBlock: {
      title: "Why choose a Natural Pool or scenic ride?",
      content:
        "These rides combine horseback adventure with iconic sights. You reach the Natural Pool, chapel, or Natural Bridge on horseback instead of by jeep or foot. The Natural Pool and Chapel tours often welcome beginners; the Natural Bridge ride is for advanced riders who want a challenge.",
    },
    whatToExpect: [
      "Check in at the ranch. Briefing and horse assignment. For the Natural Bridge tour, the operator may confirm your experience level.",
      "Guided ride to the Natural Pool, Alto Vista Chapel, or Wariruri Natural Bridge. Terrain varies—rugged for Natural Pool and Natural Bridge.",
      "Return to the ranch. Natural Pool and Chapel rides typically 2–3 hours; Natural Bridge ride about 3 hours.",
    ],
    faqs: [
      {
        question: "What are the best scenic horseback rides in Aruba?",
        answer:
          "Top options: the Natural Pool ride (to Conchi), the Alto Vista Chapel ride (scenic and cultural), and the Wariruri Natural Bridge ride (3 hours, advanced riders only). Choose by landmark and your riding level.",
      },
      {
        question: "Do I need experience for the Natural Pool or Chapel ride?",
        answer:
          "Natural Pool and Alto Vista Chapel rides often welcome confident beginners or intermediate riders; terrain can be rugged on the Natural Pool route. The Wariruri Natural Bridge tour is for advanced riders only.",
      },
      {
        question: "Can we swim at the Natural Pool on the horseback tour?",
        answer:
          "When the tour includes a stop at the Natural Pool and conditions allow, you may have time to swim. Your guide will advise. Bring a swimsuit and towel if you want to swim.",
      },
      {
        question: "What is the Wariruri Natural Bridge?",
        answer:
          "The Natural Bridge at Wariruri is a rock formation on Aruba's north coast. The 3-hour ride to it is over rugged terrain and is for advanced riders only.",
      },
      {
        question: "What should I wear for a scenic ride?",
        answer:
          "Long pants and closed-toe shoes (boots preferred for the advanced Natural Bridge ride). Bring sunscreen, a hat, and water. For the Natural Pool, bring a swimsuit and towel if you plan to swim.",
      },
    ],
  },
  // Photoshoots in Aruba sub-categories
  {
    categorySlug: "photoshoots-in-aruba",
    slug: "best-photoshoots",
    title: "Best photoshoots in Aruba",
    description:
      "Top-rated photoshoots in Aruba: golden hour beach, family and couple photography, and luxury clear kayak shoot. Our three most popular picks.",
    picks: [
      {
        slug: "aruba-golden-hour-beach-photoshoot",
        whyWePickIt:
          "Golden hour beach photoshoot—timed for the best light and one of the most popular options in Aruba. Professional photos for couples, families, or solo travelers. Consistently high demand and strong reviews.",
        bestFor: [
          "Couples who want golden-hour beach photos",
          "Families who want a relaxed beach session",
          "Engagement or anniversary shoots",
        ],
      },
      {
        slug: "family-couple-engagement-photography-aruba",
        whyWePickIt:
          "Family, couple and engagement photography—versatile session at the beach or your chosen location. Ideal for engagement shoots, anniversary sessions, or family vacation photos. A top choice for quality and flexibility.",
        bestFor: [
          "Couples who want professional vacation or engagement photos",
          "Families who want a quality photo session",
          "Engagement or anniversary photo shoots",
        ],
      },
      {
        slug: "aruba-clear-kayak-shoot-lux-floral-cocktails",
        whyWePickIt:
          "Luxury clear kayak photoshoot with floral decor and cocktails—a unique, Instagram-worthy experience. Premium setup and professional photos. One of the most distinctive and highly rated photoshoot options in Aruba.",
        bestFor: [
          "Couples who want a luxury water photoshoot",
          "Proposals or special occasions",
          "Anyone who wants a premium clear kayak experience",
        ],
      },
    ],
    intro:
      "The best photoshoots in Aruba combine great light, a strong concept, and reliable delivery. Our three top picks are the golden hour beach photoshoot (best light, broad appeal), family and couple photography (flexible, high quality), and the luxury clear kayak shoot (unique and memorable). All are popular and well-reviewed.",
    whyBlock: {
      title: "Why these three?",
      content:
        "We chose options that consistently deliver: the golden hour beach shoot for classic, flattering light; the family/couple session for versatility and quality; and the LUX clear kayak for something different and premium. Each suits different tastes but all get strong feedback.",
    },
    whatToExpect: [
      "Golden hour: meet at the beach, 1–2 hour session, edited images as per package.",
      "Family/couple: session at beach or chosen location, 1–2 hours, edited images as per package.",
      "Clear kayak LUX: floral-decorated kayak, cocktails, photos (and often video), premium experience.",
    ],
    faqs: [
      {
        question: "What are the best photoshoots in Aruba?",
        answer:
          "Our top three are the Aruba Golden Hour Beach Photoshoot (best light, broad appeal), Family and Couple and Engagement Photography (versatile, high quality), and the Aruba Clear Kayak Shoot LUX (unique, luxury experience). All are highly rated and popular.",
      },
      {
        question: "When is the best time for a photoshoot?",
        answer:
          "Golden hour—about an hour before sunset—gives the best light for beach and sunset shoots. Clear kayak and underwater shoots are typically in daylight; paparazzi-style is at night.",
      },
      {
        question: "How many photos do we get?",
        answer:
          "It varies by package. Each product states how many edited images (and any video) are included and how you'll receive them. Check the product when you book.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "A few days to a few weeks ahead is wise in high season. For special dates or popular photographers, book earlier.",
      },
      {
        question: "What should we wear?",
        answer:
          "Solid colors or soft patterns photograph well. Avoid busy prints. For clear kayak, wear something you don't mind getting a bit wet; for LUX, many match the floral theme.",
      },
    ],
  },
  {
    categorySlug: "photoshoots-in-aruba",
    slug: "sunset",
    title: "Sunset photoshoots in Aruba",
    description:
      "Professional sunset and golden hour photoshoots in Aruba. Best light on the beach. Couples, families, and solo travelers.",
    picks: [
      {
        slug: "professional-sunset-photoshoot-aruba",
        whyWePickIt:
          "Professional sunset photoshoot timed for the golden hour. Stunning light on the beach and edited images as per your package. Ideal for couples, families, or anyone who wants classic sunset vacation photos.",
        bestFor: [
          "Couples who want romantic sunset photos",
          "Families who want golden-hour portraits",
          "Anyone who wants professional vacation photos",
        ],
      },
      {
        slug: "aruba-golden-hour-beach-photoshoot",
        whyWePickIt:
          "Golden hour beach photoshoot—session timed for the best, soft light. One of the most popular options for couples and families. High-quality results and strong reviews.",
        bestFor: [
          "Couples who want golden-hour beach photos",
          "Families who want a relaxed beach session",
          "Engagement or anniversary shoots",
        ],
      },
      {
        slug: "sunset-photoshoot-professional-beach-photography",
        whyWePickIt:
          "Sunset photoshoot with professional beach photography. Classic golden-hour session for beautiful, flattering results. Ideal for couples or families who want timeless beach sunset images.",
        bestFor: [
          "Couples who want sunset beach photos",
          "Families who want golden-hour portraits",
          "Anyone who wants professional beach sunset images",
        ],
      },
    ],
    intro:
      "Sunset photoshoots in Aruba are timed for the golden hour—the period before sunset when the light is soft and warm. These three options deliver professional beach photography at the best time of day. Choose by style and package; all suit couples, families, or solo travelers.",
    whyBlock: {
      title: "Why book a sunset photoshoot?",
      content:
        "Golden hour light is flattering and creates a warm, romantic feel. It's the most requested time for beach and couple photography in Aruba. Your photographer will schedule the session so you're shooting when the light is best.",
    },
    whatToExpect: [
      "Meet your photographer at the agreed beach. Session typically 1–2 hours.",
      "Photos during the golden hour and sunset. Posed and candid shots as agreed.",
      "Receive your edited images as per the package—often within 1–2 weeks.",
    ],
    faqs: [
      {
        question: "What are the best sunset photoshoots in Aruba?",
        answer:
          "Strong options include the Professional Sunset Photoshoot, the Aruba Golden Hour Beach Photoshoot, and the Sunset Photoshoot Professional Beach Photography. All are timed for golden hour and deliver edited images.",
      },
      {
        question: "When exactly is the shoot?",
        answer:
          "Sessions are scheduled for golden hour—typically about an hour before sunset. Your photographer will confirm the exact time when you book.",
      },
      {
        question: "What should we wear?",
        answer:
          "Wear something you love. Solid colors and flowy fabrics often work best. Avoid busy patterns. Your photographer may give tips when you book.",
      },
      {
        question: "What if it's cloudy?",
        answer:
          "Light cloud can still work; heavy rain may mean rescheduling. Check the operator's weather and cancellation policy when you book.",
      },
      {
        question: "How many photos do we get?",
        answer:
          "Package details vary. Check each product for the number of edited images and how you'll receive them.",
      },
    ],
  },
  {
    categorySlug: "photoshoots-in-aruba",
    slug: "family",
    title: "Family photoshoots in Aruba",
    description:
      "Family and lifestyle photography in Aruba. Couples, engagement, and family sessions at the beach or your chosen location.",
    picks: [
      {
        slug: "family-couple-engagement-photography-aruba",
        whyWePickIt:
          "Family, couple and engagement photography—a dedicated session at the beach or your chosen location. Versatile and high quality. Ideal for engagement shoots, anniversary sessions, or family vacation photos.",
        bestFor: [
          "Couples who want professional vacation or engagement photos",
          "Families who want a quality photo session",
          "Engagement or anniversary photo shoots",
        ],
      },
      {
        slug: "capture-memories-aruba-lifestyle-photography",
        whyWePickIt:
          "Capture Your Memories—Aruba lifestyle photography session. Candid and styled shots that tell your vacation story. Great for families who want natural, storytelling images rather than only posed portraits.",
        bestFor: [
          "Families who want candid and lifestyle-style photos",
          "Couples who want a mix of posed and natural shots",
          "Anyone who wants vacation photos that tell a story",
        ],
      },
    ],
    intro:
      "Family photoshoots in Aruba cover classic family and couple sessions plus lifestyle photography that captures candid moments and your vacation story. Both options work at the beach or an agreed location and deliver edited images. Ideal for families, couples, and engagement or anniversary shoots.",
    whyBlock: {
      title: "Why book a family or lifestyle session?",
      content:
        "Professional family and couple sessions give you quality images you'll keep for years. Lifestyle photography adds a more natural, storytelling feel—great for families who want a mix of candid and lightly directed shots.",
    },
    whatToExpect: [
      "Meet your photographer at the agreed location. Session typically 1–2 hours.",
      "Posed and/or candid shots—family, couple, or engagement as agreed.",
      "Receive your edited images as per the package.",
    ],
    faqs: [
      {
        question: "What are the best family photoshoots in Aruba?",
        answer:
          "Two strong options: Family, Couple and Engagement Photography (versatile, high quality) and Capture Your Memories lifestyle session (candid, storytelling style). Both work for families and couples.",
      },
      {
        question: "Can we include kids?",
        answer:
          "Yes. Both options are suitable for families with children. Mention your group size and ages when you book.",
      },
      {
        question: "What is lifestyle photography?",
        answer:
          "Lifestyle photography focuses on real moments and emotions—a mix of candid and lightly directed shots. Less formal than traditional portraits; great for vacation and family memories.",
      },
      {
        question: "How many photos do we get?",
        answer:
          "Package details vary. Check each product for the number of edited images and delivery.",
      },
      {
        question: "What should we wear?",
        answer:
          "Coordinated but not overly matching. Solid colors or soft patterns work well. Avoid busy prints. The photographer may suggest colors or styles.",
      },
    ],
  },
  {
    categorySlug: "photoshoots-in-aruba",
    slug: "clear-kayak",
    title: "Clear kayak photoshoots in Aruba",
    description:
      "Clear canoe and clear kayak photoshoots in Aruba. Transparent kayak, professional photos and video. Standard or LUX floral and cocktails.",
    picks: [
      {
        slug: "clear-canoe-photoshoot-videoshoot",
        whyWePickIt:
          "Clear canoe photoshoot with a complimentary videoshoot. Transparent kayak for unique water shots. Professional photos and video so you get both. Ideal for couples or small groups who want something different.",
        bestFor: [
          "Couples who want a unique water photoshoot",
          "Anyone who wants clear kayak photos and video",
          "Travelers looking for a fun, memorable shoot",
        ],
      },
      {
        slug: "aruba-clear-kayak-shoot-lux-floral-cocktails",
        whyWePickIt:
          "Luxury clear kayak shoot with floral-decorated kayak and cocktails. Premium, Instagram-ready experience with professional photos. Ideal for proposals, anniversaries, or anyone who wants a high-end water shoot.",
        bestFor: [
          "Couples who want a luxury water photoshoot",
          "Proposals or special occasions",
          "Anyone who wants a premium clear kayak experience",
        ],
      },
    ],
    intro:
      "Clear kayak (and clear canoe) photoshoots in Aruba give you a unique look—you're in a transparent boat on the water while a photographer captures images and often video. Choose the standard clear canoe shoot with free videoshoot, or the LUX version with floral decor and cocktails for a premium experience.",
    whyBlock: {
      title: "Why choose a clear kayak photoshoot?",
      content:
        "The transparent kayak creates distinctive, shareable images. You get both the experience and professional photos (and often video). The LUX option adds flowers and cocktails for a special-occasion feel.",
    },
    whatToExpect: [
      "Meet at the agreed spot. Get into the clear canoe or kayak (LUX: decorated, with cocktails).",
      "Photographer captures photos (and video where included) from another boat or the shore.",
      "Receive your edited images (and video) as per the package.",
    ],
    faqs: [
      {
        question: "What are the best clear kayak photoshoots in Aruba?",
        answer:
          "Two strong options: the Beautiful Clear Canoe Photoshoot with free videoshoot (great value), and the Aruba Clear Kayak Shoot LUX with floral decor and cocktails (premium experience).",
      },
      {
        question: "What's the difference between the two?",
        answer:
          "The standard option includes a clear canoe/kayak and photos plus complimentary video. The LUX option adds floral decoration and cocktails for a premium, special-occasion setup.",
      },
      {
        question: "Do I need to paddle?",
        answer:
          "Setup varies—some have you paddle; others are guided or tethered. The operator will explain when you book.",
      },
      {
        question: "What should we wear?",
        answer:
          "Swimwear or something you don't mind getting a bit wet. Bright colors often pop in clear kayak photos. For LUX, many match the floral theme.",
      },
      {
        question: "Is this good for a proposal?",
        answer:
          "Yes, especially the LUX option. Contact the operator when you book to arrange timing and any extras.",
      },
    ],
  },
  {
    categorySlug: "photoshoots-in-aruba",
    slug: "underwater",
    title: "Underwater photoshoots in Aruba",
    description:
      "Underwater photography in Aruba—turtle snorkeling with photos and video, or private scuba dive with a photographer. For snorkelers and certified divers.",
    picks: [
      {
        slug: "turtle-snorkeling-photography-videos",
        whyWePickIt:
          "Turtle snorkeling with photography and video included. You snorkel with turtles while the operator captures your experience. Ideal for families and anyone who wants underwater memories without holding a camera.",
        bestFor: [
          "Families who want turtle snorkeling and photos",
          "Anyone who wants underwater photos without holding a camera",
          "Travelers who want a memorable turtle experience with visuals",
        ],
      },
      {
        slug: "private-scuba-dive-photographer",
        whyWePickIt:
          "Private scuba dive with a professional underwater photographer. For certified divers only. You dive while the photographer captures photos and video. High-quality underwater imagery from your dive.",
        bestFor: [
          "Certified divers who want underwater photos",
          "Couples who want a private dive with a photographer",
          "Anyone who wants professional underwater imagery",
        ],
      },
    ],
    intro:
      "Underwater photoshoots in Aruba let you enjoy the experience while someone else captures the images. Turtle snorkeling tours include photography and video of your encounter. For certified divers, a private scuba dive with an underwater photographer delivers professional shots from your dive. Both deliver edited images (and often video) as per the package.",
    whyBlock: {
      title: "Why book an underwater photoshoot?",
      content:
        "You get to focus on the turtles or the dive while a professional captures the moment. No fumbling with a camera—you receive edited photos and often video afterward. Snorkel option for everyone; scuba option for certified divers only.",
    },
    whatToExpect: [
      "Turtle snorkel: boat to the site, snorkel with turtles, photographer/videographer captures the experience. Receive photos and video as per package.",
      "Scuba: private dive with underwater photographer. For certified divers. Receive underwater images and/or video as per package.",
    ],
    faqs: [
      {
        question: "What are the best underwater photoshoots in Aruba?",
        answer:
          "For snorkelers: turtle snorkeling with photography and video. For certified divers: private scuba dive with a photographer. Both deliver professional-style underwater images.",
      },
      {
        question: "Do I need to be certified for the turtle snorkel?",
        answer:
          "No. You need to be comfortable in the water and able to snorkel. Life vests are often available. The scuba option is for certified divers only.",
      },
      {
        question: "Are turtles guaranteed?",
        answer:
          "Turtle sightings are common at the right sites but wild animals are never guaranteed. Operators choose spots where turtles are often seen.",
      },
      {
        question: "When do we get our photos and video?",
        answer:
          "Delivery time varies—often within a few days to a week. Confirm when you book.",
      },
      {
        question: "Is the scuba dive private?",
        answer:
          "Yes. The private scuba dive with photographer is for your group; the photographer dives with you to capture images.",
      },
    ],
  },
  {
    categorySlug: "photoshoots-in-aruba",
    slug: "fun-shoots",
    title: "Fun photoshoots in Aruba",
    description:
      "Fun and unique photoshoots in Aruba—nighttime paparazzi flash shoot and sunset professional beach photography. Bold and memorable.",
    picks: [
      {
        slug: "nighttime-paparazzi-flash-photoshoot",
        whyWePickIt:
          "Feel Like a Star—nighttime paparazzi-style flash photoshoot. Glamorous, editorial-style shots that are fun and different from a typical beach session. Ideal for groups or couples who want a bold, memorable experience.",
        bestFor: [
          "Groups who want a fun, glamorous shoot",
          "Anyone who wants something different from beach/sunset",
          "Travelers who want editorial-style or paparazzi vibes",
        ],
      },
      {
        slug: "sunset-photoshoot-professional-beach-photography",
        whyWePickIt:
          "Sunset photoshoot with professional beach photography. Classic golden-hour session for beautiful, flattering results. A fun way to get timeless vacation photos—couples, families, or solo.",
        bestFor: [
          "Couples who want sunset beach photos",
          "Families who want golden-hour portraits",
          "Anyone who wants professional beach sunset images",
        ],
      },
    ],
    intro:
      "Fun photoshoots in Aruba include the nighttime paparazzi flash shoot—glamorous, editorial-style images that feel like a star moment—and the classic sunset professional beach photography for timeless vacation photos. Both are memorable and deliver edited images as per the package.",
    whyBlock: {
      title: "Why book a fun or paparazzi-style shoot?",
      content:
        "The paparazzi shoot is a chance to do something different—bold poses, flash lighting, and a glamorous vibe. The sunset beach shoot is a classic that never gets old. Choose by the mood you want.",
    },
    whatToExpect: [
      "Paparazzi: meet at night at the agreed location. Flash photoshoot with paparazzi-style poses and lighting. Receive edited images.",
      "Sunset beach: meet at the beach for golden hour. Professional beach photography. Receive edited images.",
    ],
    faqs: [
      {
        question: "What is a paparazzi flash photoshoot?",
        answer:
          "A fun, styled shoot that mimics paparazzi shots—often at night with flash for a glamorous, editorial look. Poses and styling can be bold and playful. Great for groups.",
      },
      {
        question: "Where does the paparazzi shoot take place?",
        answer:
          "Location varies—often a scenic or urban spot that works well at night. Your photographer will confirm when you book.",
      },
      {
        question: "What should we wear for the paparazzi shoot?",
        answer:
          "Glamorous or bold outfits—something that makes you feel like a star. Your photographer may suggest themes or colors.",
      },
      {
        question: "How many photos do we get?",
        answer:
          "Package details vary for both options. Check each product for the number of edited images.",
      },
      {
        question: "Are these good for groups?",
        answer:
          "Yes. The paparazzi-style shoot is especially fun for groups and friends. The sunset shoot works for couples, families, or groups.",
      },
    ],
  },
  // ————— Airport Transfers in Aruba —————
  {
    categorySlug: "airport-transfers-in-aruba",
    slug: "private-airport-transfers",
    title: "Best private airport transfers in Aruba",
    description:
      "Compare the best private airport transfers in Aruba—door-to-door service, meet-and-greet at Queen Beatrix Airport, no shared shuttles. Fixed pricing, ideal for families, couples, and travelers who want a stress-free start or end to their trip.",
    picks: [
      { slug: "private-airport-transportation-services", whyWePickIt: "A dedicated private vehicle and driver from Queen Beatrix Airport to your hotel. No sharing; meet-and-greet and fixed price. Ideal for families and anyone who wants a stress-free arrival.", bestFor: ["Families and groups", "Travelers who want a fixed price", "Anyone with lots of luggage"] },
      { slug: "private-transfers-aruba", whyWePickIt: "Flexible private transfers for airport, hotel, or cruise port. One-way or round-trip; some operators allow a short stop or custom route. Good for travelers who want a private car without a set tour.", bestFor: ["Private car preference", "Airport, hotel, or port transfers", "Small groups of 2–4"] },
      { slug: "private-airport-transfers-oranjestad", whyWePickIt: "Private transfers covering Oranjestad and across Aruba. Same door-to-door and meet-and-greet quality whether you're in the capital or the hotel strip.", bestFor: ["Guests in Oranjestad", "Any address on the island", "One-way or round-trip"] },
    ],
    intro: "Private airport transfers in Aruba mean a vehicle and driver just for you—no shared shuttles, no taxi queue. Your driver meets you at the airport (or picks you up at your hotel for departure) and takes you straight to your destination. Fixed price, confirmed in advance.",
    whyBlock: {
      title: "Why choose a private airport transfer in Aruba?",
      content:
        "Private transfers give you a dedicated vehicle and driver from Queen Beatrix International Airport to your hotel or address—no sharing with other travelers, no haggling at the taxi rank. You get a confirmed price before you fly, meet-and-greet at arrivals, and a direct ride. Ideal for families with luggage, late-night arrivals, or anyone who wants a smooth, predictable start or end to their Aruba trip.",
    },
    whatToExpect: [
      "Book online with your flight and hotel details. You'll receive confirmation and meeting instructions.",
      "On arrival: after customs, look for your driver with a sign. They'll help with bags and take you to your hotel or address.",
      "On departure: your driver picks you up at an agreed time (usually 2–3 hours before your flight) and drives you to the airport.",
    ],
    faqs: [
      { question: "What is the difference between private and shared airport transfer in Aruba?", answer: "Private means the vehicle is only for you (and your party). Shared means you may ride with other travelers and make multiple stops. Private is faster and more comfortable; shared can be cheaper per person." },
      { question: "How do I find my private transfer driver at Aruba airport?", answer: "Your confirmation will include meeting instructions. Drivers typically wait in the arrivals hall or just outside with a sign with your name. Provide your flight number so they can track delays." },
      { question: "Are private airport transfers in Aruba safe?", answer: "Yes. Reputable operators use licensed drivers and insured vehicles. Pre-booking with a known provider gives you a confirmed driver and fixed price—no surprises at the curb." },
      { question: "Can I book a private transfer for only arrival or only departure?", answer: "Yes. Most operators offer one-way (arrival or departure) or round-trip. Book the leg or legs you need." },
      { question: "How much does a private airport transfer in Aruba cost?", answer: "Prices vary by vehicle type and distance. Private cars are typically priced per vehicle (not per person). Round-trip often costs less per leg than two one-ways. Check each product for current rates." },
    ],
  },
  {
    categorySlug: "airport-transfers-in-aruba",
    slug: "round-trip-airport-transfers",
    title: "Round trip airport transfers in Aruba",
    description:
      "Book round-trip airport transfers in Aruba in one go—arrival and departure covered, often at a better rate than two one-ways. Private and shared options to Palm Beach, Eagle Beach, Oranjestad, and the hotel strip.",
    picks: [
      { slug: "roundtrip-aruba-airport-transfer", whyWePickIt: "Arrival and departure in one booking. Covers airport–hotel and hotel–airport with meet-and-greet and confirmed pickup time for your return. Often better value than two one-ways.", bestFor: ["One booking for both legs", "Oranjestad and hotel strip", "Fixed price for the whole trip"] },
      { slug: "roundtrip-airport-private-transfer-palm-eagle", whyWePickIt: "Round-trip private transfer tailored for Palm Beach and Eagle Beach. Same convenience—private vehicle, meet-and-greet, and return pickup—focused on the main resort area.", bestFor: ["Palm Beach and Eagle Beach guests", "Private round-trip", "Families and groups"] },
      { slug: "private-round-trip-airport-transfer", whyWePickIt: "A straightforward private round-trip: dedicated vehicle and driver for both arrival and departure. No sharing; one price for both legs.", bestFor: ["Private car both ways", "Simple, all-in-one booking", "Any hotel area"] },
    ],
    intro: "Round-trip airport transfers in Aruba let you lock in both your arrival and departure in one booking. You'll get airport-to-hotel on the day you land and hotel-to-airport on the day you fly home. Often cheaper per leg than booking two one-ways, and you only arrange it once.",
    whyBlock: {
      title: "Why book a round-trip airport transfer in Aruba?",
      content:
        "Round-trip transfers cover both legs in one booking—airport to hotel when you arrive and hotel to airport when you leave. You get a single confirmed price, one less thing to organize during your stay, and many operators offer a round-trip rate that beats two separate one-way bookings. Ideal for travelers who know their dates and want arrival and departure sorted before they fly.",
    },
    whatToExpect: [
      "Book with your arrival and departure dates and flight details. Confirm your hotel or address.",
      "Arrival: your driver meets you at the airport and takes you to your hotel.",
      "Departure: the operator confirms your pickup time (usually 2–3 hours before flight). Your driver picks you up at your hotel and takes you to the airport.",
    ],
    faqs: [
      { question: "Is round-trip airport transfer in Aruba cheaper than two one-ways?", answer: "Often yes. Many operators offer a round-trip rate that is less than the combined cost of two one-way bookings. Always compare when you book." },
      { question: "What if my departure flight time changes?", answer: "Contact the operator as soon as you know. They can usually adjust your pickup time. Provide your updated flight number so they can track it." },
      { question: "Do I need to confirm my return transfer?", answer: "You'll typically receive confirmation for both legs when you book. Some operators send a reminder or ask you to confirm the return pickup time a day before. Check your confirmation email for their process." },
      { question: "Can I book round-trip if I'm staying at different hotels for arrival and departure?", answer: "Usually round-trip assumes the same address for both legs. If your stay is split, book two one-ways or contact the operator to see if they can accommodate two different pickup/drop-off points." },
      { question: "How far in advance should I book a round-trip airport transfer in Aruba?", answer: "Booking at least 24–48 hours ahead is recommended. For peak season or large groups, a few days in advance is safer. Last-minute bookings may be possible but depend on availability." },
    ],
  },
  {
    categorySlug: "airport-transfers-in-aruba",
    slug: "one-way-airport-transfers",
    title: "One-way airport transfers in Aruba",
    description:
      "One-way private airport transfers in Aruba—book only the leg you need. Airport to hotel on arrival or hotel to airport on departure. Private car, meet-and-greet, fixed price. Perfect if you have a rental car or flexible plans.",
    picks: [
      { slug: "one-way-private-airport-transfer", whyWePickIt: "Book a single leg—either airport to hotel or hotel to airport. Private car, no sharing. Ideal if you have a rental car for the rest of the trip or only need one leg.", bestFor: ["Only arrival or only departure", "Rental car the rest of the stay", "Flexible plans"] },
      { slug: "aruba-private-airport-transfer", whyWePickIt: "Straightforward private airport transfer in Aruba. One-way service with meet-and-greet at the airport or pickup at your hotel. Fixed price, door-to-door.", bestFor: ["Simple one-way booking", "Couples and small groups", "Fixed price before you fly"] },
    ],
    intro: "One-way airport transfers in Aruba are for when you only need a single leg—either from the airport to your hotel on arrival or from your hotel to the airport on departure. Private car, meet-and-greet (for airport pickups), and fixed price. Useful if you're renting a car for the rest of your stay or your plans don't require round-trip.",
    whyBlock: {
      title: "Why book a one-way airport transfer in Aruba?",
      content:
        "One-way transfers are ideal when you only need a single leg—for example you have a rental car for the rest of your stay, you're organizing departure separately, or your return plans are still flexible. You pay for just the journey you need, with the same benefits: private car, meet-and-greet at the airport (for arrival), and a fixed price confirmed in advance. No commitment to a return leg.",
    },
    whatToExpect: [
      "Choose arrival (airport to hotel) or departure (hotel to airport). Enter your flight and address details.",
      "For arrival: your driver meets you at the airport and takes you to your hotel or address.",
      "For departure: your driver picks you up at an agreed time and takes you to the airport.",
    ],
    faqs: [
      { question: "When should I book a one-way airport transfer in Aruba?", answer: "Book when you only need one leg—e.g. you have a rental car for the rest of the trip, or you're only organizing an arrival transfer and will arrange departure separately. One-way is also useful if your departure plans are uncertain." },
      { question: "Is one-way transfer cheaper than round-trip?", answer: "One-way is half the journey, so it costs less than a full round-trip. If you need both legs, round-trip often offers better value per leg than two one-ways." },
      { question: "Can I book two one-ways instead of round-trip?", answer: "Yes. Some travelers book two one-ways (e.g. different operators or different vehicle types for arrival vs departure). Round-trip is usually simpler and often cheaper." },
      { question: "How do I book a departure-only airport transfer in Aruba?", answer: "Select the one-way option and choose hotel-to-airport. Enter your hotel and flight details. The operator will confirm the pickup time (typically 2–3 hours before your flight)." },
      { question: "Do one-way transfers include flight tracking?", answer: "For arrival transfers, many operators track your flight so they can adjust if you're delayed. Provide your flight number when you book. For departure, they use the time you provide and may send a reminder." },
    ],
  },
  {
    categorySlug: "airport-transfers-in-aruba",
    slug: "vip-luxury-airport-transfers",
    title: "VIP & luxury airport transfers in Aruba",
    description:
      "VIP and luxury SUV airport transfers in Aruba—premium vehicles, professional drivers, meet-and-greet at Queen Beatrix Airport. Ideal for special occasions, business travel, and travelers who want extra space and comfort.",
    picks: [
      { slug: "vip-luxury-suv-airport-transfer", whyWePickIt: "Travel in a luxury SUV with a professional driver. Meet-and-greet at the airport, help with bags, and a premium ride to your hotel. Ideal for groups with more luggage or anyone who wants an upgrade.", bestFor: ["Premium vehicle", "Extra space for luggage", "Special occasions"] },
      { slug: "private-airport-transportation-services", whyWePickIt: "Private airport transportation with a dedicated vehicle and driver. Reliable, comfortable, and stress-free. A strong option for families and anyone who values a private, professional service.", bestFor: ["Families and groups", "Private, professional service", "Fixed pricing"] },
    ],
    intro: "VIP and luxury airport transfers in Aruba give you a premium vehicle—often a luxury SUV—and a professional driver for your arrival or departure. Meet-and-greet at the airport, assistance with bags, and a comfortable ride. Ideal for special occasions, business travel, or anyone who wants more space and comfort than a standard car.",
    whyBlock: {
      title: "Why choose a VIP or luxury airport transfer in Aruba?",
      content:
        "VIP and luxury transfers upgrade your arrival or departure with a premium vehicle—typically a luxury SUV—more space for passengers and luggage, and a professional driver with meet-and-greet service. You get the same door-to-door convenience as a standard private transfer, with added comfort and style. Worth it for special occasions, business trips, or anyone who prefers a higher standard of service from the moment they land.",
    },
    whatToExpect: [
      "Book your VIP or luxury transfer with flight and hotel details. Confirm vehicle type (e.g. luxury SUV).",
      "Your driver meets you at the airport (or picks you up at your hotel) with a sign. They assist with luggage and escort you to the vehicle.",
      "Comfortable, direct ride to your destination. Vehicles are typically well-maintained and air-conditioned.",
    ],
    faqs: [
      { question: "What is included in a VIP airport transfer in Aruba?", answer: "Typically a premium or luxury vehicle (e.g. SUV), a professional driver, meet-and-greet at the airport, and door-to-door service. Some operators add bottled water or other amenities. Check the product for exact inclusions." },
      { question: "How many people fit in a luxury SUV airport transfer?", answer: "Luxury SUVs typically seat 4–6 passengers depending on luggage. For larger groups, ask about a van or multiple vehicles." },
      { question: "Is VIP transfer worth it for a short ride?", answer: "The ride from the airport to the hotel strip is usually 15–25 minutes. VIP is about comfort and service rather than distance—worth it if you value a premium vehicle and a stress-free experience." },
      { question: "Can I book VIP for both arrival and departure?", answer: "Yes. Many operators offer one-way or round-trip VIP service. You get the same premium vehicle and service for both legs when you book round-trip." },
      { question: "Do VIP transfers cost more than standard private transfers?", answer: "Yes. VIP and luxury options are priced higher than standard private cars due to the vehicle and service level. Compare products to find the right balance of cost and comfort." },
    ],
  },
  {
    categorySlug: "airport-transfers-in-aruba",
    slug: "airport-transfers-palm-eagle-beach",
    title: "Airport transfers to Palm Beach & Eagle Beach, Aruba",
    description:
      "Airport transfers to Palm Beach and Eagle Beach, Aruba—private and round-trip options from Queen Beatrix Airport. Quick, comfortable rides to the main resort strip. Fixed price, meet-and-greet, no taxi queue.",
    picks: [
      { slug: "roundtrip-airport-private-transfer-palm-eagle", whyWePickIt: "Round-trip private transfer focused on Palm Beach and Eagle Beach. One booking for arrival and departure; private vehicle and meet-and-greet. Ideal for guests staying in the main resort strip.", bestFor: ["Palm Beach and Eagle Beach", "Round-trip in one booking", "Private vehicle"] },
      { slug: "aruba-private-airport-transfer", whyWePickIt: "Private airport transfer to any address in Aruba, including Palm Beach and Eagle Beach. Door-to-door, meet-and-greet, fixed price. Simple and reliable.", bestFor: ["Any hotel in Aruba", "One-way or round-trip", "Couples and small groups"] },
      { slug: "roundtrip-aruba-airport-transfer", whyWePickIt: "Roundtrip service covering the hotel strip and Oranjestad. Arrival and departure in one booking with confirmed pickup for your return.", bestFor: ["Hotel strip and Oranjestad", "Round-trip value", "Fixed price both ways"] },
    ],
    intro: "Airport transfers to Palm Beach and Eagle Beach take you from Queen Beatrix International Airport to the heart of Aruba's resort area. Most hotels are 15–25 minutes from the airport. Pre-book a private or round-trip transfer for a fixed price and a meet-and-greet—no taxi queue or haggling.",
    whyBlock: {
      title: "Why pre-book airport transfers to Palm Beach and Eagle Beach?",
      content:
        "Palm Beach and Eagle Beach are Aruba's main resort areas—most visitors stay here, and the drive from the airport is typically 15–25 minutes. Pre-booking a transfer gives you a fixed price, a driver waiting with a sign at arrivals, and a direct ride to your hotel. No haggling with taxis or waiting for a shared shuttle. Round-trip options often save money per leg and cover your departure as well.",
    },
    whatToExpect: [
      "Book with your hotel name and flight details. You'll receive confirmation and meeting instructions.",
      "On arrival: your driver meets you at the airport and drives you to your Palm Beach or Eagle Beach hotel.",
      "On departure: pickup at your hotel at an agreed time (usually 2–3 hours before your flight) and direct drive to the airport.",
    ],
    faqs: [
      { question: "How long is the drive from Aruba airport to Palm Beach?", answer: "Typically 15–25 minutes depending on your exact hotel and traffic. Eagle Beach is similarly close; Noord and the northern end of Palm Beach may be at the longer end of that range." },
      { question: "Which hotels are in the Palm Beach and Eagle Beach transfer zone?", answer: "Most resorts and hotels in Palm Beach, Eagle Beach, Noord, and the surrounding area are covered. Enter your hotel name when you book to confirm. Some operators list specific zones or hotels." },
      { question: "Is round-trip to Palm Beach cheaper than two one-ways?", answer: "Often yes. Round-trip transfers to the hotel strip frequently offer a better per-leg rate than booking two separate one-ways. Compare when you book." },
      { question: "Do transfers to Palm Beach include flight tracking?", answer: "Many operators track your flight for arrival transfers so they can adjust if you're delayed. Provide your flight number when you book. For departure, they confirm your pickup time in advance." },
      { question: "Can I get a private transfer to Eagle Beach only?", answer: "Yes. Private transfers can be booked to any address, including Eagle Beach hotels. One-way or round-trip; specify your hotel when you book." },
    ],
  },
  {
    categorySlug: "airport-transfers-in-aruba",
    slug: "airport-transfer-with-tour",
    title: "Airport transfer with tour in Aruba",
    description:
      "Combine your Aruba airport pickup with a guided island tour—see the California Lighthouse, Ayo rocks, and coastal sights on the way to your hotel. Perfect for early arrivals, first-time visitors, and travelers with a later check-in.",
    picks: [
      { slug: "aycaramba-transfer-private-tour", whyWePickIt: "AyCaramba combines airport pickup with a private island tour. Your driver meets you at the airport and takes you to key sights—lighthouse, rock formations, coastal views—before dropping you at your hotel. A great start to your holiday.", bestFor: ["See the island on arrival day", "First-time visitors", "Early arrival with time to fill"] },
      { slug: "private-transfers-aruba", whyWePickIt: "Flexible private transfers that can sometimes include a short stop or custom route. Ideal if you want a private car and the option to add a quick sightseeing stop on the way to your hotel.", bestFor: ["Private car with flexibility", "Possible custom stop", "Airport and beyond"] },
    ],
    intro: "An airport transfer with a tour in Aruba turns your arrival into an experience. Instead of going straight to your hotel, you're picked up at the airport and taken to key sights—such as the California Lighthouse, Ayo or Casibari rocks, or coastal viewpoints—before being dropped at your accommodation. Perfect for early landings, first-time visitors, or when you have a later check-in and time to spare.",
    whyBlock: {
      title: "Why combine an airport transfer with a tour in Aruba?",
      content:
        "If your flight lands in the morning or midday and your hotel check-in is later, a transfer with a tour makes use of that time. You're picked up at the airport, shown key sights—lighthouse, rock formations, coastal views—with commentary and photo stops, then dropped at your hotel. First-time visitors get an introduction to the island without an extra day trip; everyone avoids a wasted half-day. One booking covers transport and a guided taste of Aruba.",
    },
    whatToExpect: [
      "Your driver/guide meets you at the airport with a sign. You'll have a private vehicle for the duration.",
      "You'll make several stops at iconic Aruba sights. Commentary and photo opportunities are typically included.",
      "After the tour, you're dropped at your hotel or address. Total duration is usually a few hours—confirm when you book.",
    ],
    faqs: [
      { question: "How long is an airport transfer with tour in Aruba?", answer: "Typically a few hours—long enough for several stops (e.g. lighthouse, rock formations, coastal views) before hotel drop-off. Your confirmation will state the approximate duration." },
      { question: "Is transfer with tour good if my flight is delayed?", answer: "Operators often track your flight and adjust. If you're very late, the tour portion might be shortened so you still get to your hotel at a reasonable time. Confirm their policy when you book." },
      { question: "Can I customize the tour stops?", answer: "Many private transfer-and-tour options allow some flexibility. Discuss your preferences (e.g. must-see sights) when you book or with your driver on the day." },
      { question: "Is this suitable for a late afternoon arrival?", answer: "It depends on the operator and how much daylight you have. Morning or midday arrivals give you the most time for sights. For late afternoon, a standard transfer might be better unless the operator offers a shorter \"highlights\" route." },
      { question: "Do I need to book in advance for transfer with tour?", answer: "Yes. Transfer-and-tour combos require coordination (vehicle, guide, route). Book at least 24–48 hours ahead; more in peak season." },
    ],
  },
  // ————— Sea Glass Island in Aruba —————
  {
    categorySlug: "sea-glass-island-aruba",
    slug: "how-to-get-there",
    title: "How to Get to Sea Glass Island in Aruba: Kayak vs Boat Tours",
    description:
      "How to get to Sea Glass Island in Aruba—no road or ferry. Visit by guided kayak tour or boat tour from the coast. Compare departure points, duration, and which option suits families or beginners. Book Sea Glass Island tours in advance.",
    picks: [
      { slug: "sea-glass-island-tour", whyWePickIt: "A straightforward Sea Glass Island tour with guide and equipment. Reaches the island by kayak or boat so you can explore the sea glass beach without organizing transport yourself.", bestFor: ["First-time visitors", "Anyone who wants a guided experience", "Families and couples"] },
      { slug: "sea-glass-island-tour-by-boat", whyWePickIt: "Reach Sea Glass Island by boat—no kayaking required. Ideal if you prefer not to paddle or want a quicker, more relaxed way to the island. Good for young kids and non-kayakers.", bestFor: ["Non-kayakers", "Families with young children", "Quick, relaxed access"] },
      { slug: "kayak-tour-seaglass-island", whyWePickIt: "Classic kayak tour to Seaglass Island. Paddle from the coast with equipment and guide; the journey is part of the experience. Suitable for beginners.", bestFor: ["Kayakers and beginners", "Scenic paddle + island visit", "2–3 hour adventure"] },
    ],
    intro: "Sea Glass Island in Aruba has no road access and no public ferry—the only way to visit is by water. Your options are a guided kayak tour or a boat tour, both departing from the Aruba coast (beach or marina). Kayak tours let you paddle to the island with a guide and provided equipment; boat tours take you there by motorized boat with no paddling. Either way you get time on the famous sea glass beach. This page explains how to get to Sea Glass Island, where tours leave from, how long the journey takes, and how to choose kayak vs boat. Book in advance; Sea Glass Island tours fill quickly, especially in high season.",
    whyBlock: {
      title: "Why go to Sea Glass Island with a guided tour?",
      content:
        "Sea Glass Island has no road access and no public ferry. A guided tour gives you transport (kayak or boat), equipment, a safety briefing, and a set time on the island so you don't have to worry about how to get there or back. Operators know the best launch points and routes and can reschedule if weather is poor. You get a hassle-free, memorable experience with a clear start and end time.",
    },
    whatToExpect: [
      "Meet at the operator's designated point (beach or marina). Check in and get a safety briefing.",
      "Kayak or boat to Sea Glass Island. Kayak tours take 15–30 minutes of paddling each way; boat tours are quicker.",
      "Time on the island to walk the sea glass beach, take photos, and learn from your guide.",
      "Return by kayak or boat. Total duration is typically 2–3 hours.",
    ],
    faqs: [
      { question: "Can I get to Sea Glass Island without a tour?", answer: "No. There is no public ferry or road. Access is only by private boat or, in practice, by booking a guided kayak or boat tour. Tours are the standard and safest way to visit." },
      { question: "How long does it take to get to Sea Glass Island?", answer: "By kayak, usually 15–30 minutes of paddling each way, depending on the launch point. By boat, the ride is shorter—often 10–20 minutes. Your guide will set the pace." },
      { question: "Where do Sea Glass Island tours depart from?", answer: "Departure points vary by operator—often a beach or marina on Aruba's coast. Your confirmation will include the exact meeting point, address, and check-in time." },
      { question: "Do I need to kayak to get to Sea Glass Island?", answer: "No. You can choose a boat-only tour that takes you to the island without kayaking. Kayak tours are popular for the experience; boat tours are better if you prefer not to paddle." },
      { question: "How far in advance should I book a tour to Sea Glass Island?", answer: "Book at least a few days ahead in high season. Tours have limited capacity and fill quickly. Last-minute bookings may be possible but aren't guaranteed." },
    ],
  },
  {
    categorySlug: "sea-glass-island-aruba",
    slug: "best-tours",
    title: "Best Sea Glass Island Tours in Aruba: Kayak, Boat & Sunset Options",
    description:
      "Best Sea Glass Island tours in Aruba compared: morning and afternoon kayak tours, clear kayak adventures, boat-only tours, and sunset kayak snorkeling. See top-rated options, what's included, and who each tour suits. Book with free cancellation.",
    picks: [
      { slug: "sea-glass-island-clear-kayak-adventure", whyWePickIt: "Stand out with a clear kayak—see the water beneath you as you paddle to Sea Glass Island. Unique experience and great photos. Guided and suitable for beginners.", bestFor: ["Unique experience", "Couples and photo lovers", "Clear kayak fans"] },
      { slug: "sea-glass-island-kayak-sunset-snorkeling", whyWePickIt: "Kayak at sunset, snorkel, and visit Sea Glass Island in one tour. Golden-hour light and a memorable end to the day. Equipment and guide included.", bestFor: ["Sunset and snorkeling", "Couples", "Full experience in one trip"] },
      { slug: "sea-glass-island-kayak-morning", whyWePickIt: "Morning kayak to Sea Glass Island—calm water, cooler temps, and an early adventure. Ideal for early risers who want the rest of the day free.", bestFor: ["Morning people", "Calm water", "Half-day adventure"] },
      { slug: "sea-glass-island-kayak-afternoon", whyWePickIt: "Afternoon kayak tour to Sea Glass Island. No early start; paddle and explore in the afternoon. Good for travelers who prefer a relaxed morning.", bestFor: ["Afternoon departures", "Relaxed schedule", "2–3 hour experience"] },
    ],
    intro: "The best Sea Glass Island tours in Aruba cover a range of styles: morning and afternoon kayak trips for calmer water and flexible timing, clear kayak adventures for unique views and photos, boat-only tours for families and non-kayakers, and sunset kayak and snorkel combos for couples and golden-hour seekers. Every option takes you to the famous sea glass beach with a guide and equipment included. This page compares the top Sea Glass Island tours—what each one offers, who it's best for, and how to choose by time of day, activity level, and whether you want kayaking, snorkeling, or a relaxed boat ride.",
    whyBlock: {
      title: "Why book a Sea Glass Island tour?",
      content:
        "Sea Glass Island is one of Aruba's most unique attractions—a beach covered in decades of tumbled glass. Booking a tour ensures you get there safely (by kayak or boat), with equipment and a guide who knows the route and can share the story behind the sea glass. You'll have a set time on the island and a clear return, so you can relax and enjoy the experience instead of worrying about logistics.",
    },
    whatToExpect: [
      "Check-in and safety briefing at the operator's meeting point.",
      "Kayak or boat ride to Sea Glass Island (duration varies by tour type).",
      "Time on the island to explore the sea glass beach, take photos, and learn from your guide.",
      "Return to the starting point. Most tours run 2–3 hours total.",
    ],
    faqs: [
      { question: "What is the best Sea Glass Island tour for beginners?", answer: "Boat tours (no kayaking) or short kayak tours with stable sit-on-top kayaks are best. Operators give instruction and choose calm routes. Clear kayak tours are also beginner-friendly." },
      { question: "Which Sea Glass Island tour is best for couples?", answer: "Clear kayak adventures and sunset kayak snorkeling tours are popular with couples—unique experience and romantic timing. Boat tours are also a relaxed option for couples who prefer not to paddle." },
      { question: "Are there Sea Glass Island tours for families with kids?", answer: "Yes. Boat tours are often best for young children. Kayak tours may have minimum ages; some operators offer tandem kayaks so an adult can paddle with a child. Check each product for age requirements." },
      { question: "How do I choose between morning and afternoon Sea Glass Island tours?", answer: "Morning tours usually have calmer water and cooler temps; afternoon suits those who prefer to sleep in. Sunset tours offer golden light and a memorable end to the day. All are good—pick by your schedule and preference." },
      { question: "Do the best Sea Glass Island tours include equipment?", answer: "Yes. Kayak tours include kayak, paddle, and life jacket; snorkel tours include gear if snorkeling is part of the trip. Boat tours include the boat ride. Check each product for full inclusions." },
    ],
  },
  {
    categorySlug: "sea-glass-island-aruba",
    slug: "what-to-expect",
    title: "What to Expect on a Sea Glass Island Tour in Aruba: Itinerary & Tips",
    description:
      "What to expect on a Sea Glass Island tour in Aruba: full itinerary from check-in to return, how long the tour takes, what to bring (water shoes, sunscreen, dry bag), and first-timer tips. Kayak and boat tour formats explained.",
    picks: [
      { slug: "sea-glass-island-tour", whyWePickIt: "A classic Sea Glass Island tour that covers the full experience: briefing, transport to the island, and time on the sea glass beach. Good baseline for what to expect.", bestFor: ["First-timers", "Classic experience", "Guided from start to finish"] },
      { slug: "sea-glass-island-kayak-morning", whyWePickIt: "Morning tour so you know what to expect in terms of timing and conditions—calm water, cooler temps, and a clear 2–3 hour window.", bestFor: ["Predictable conditions", "Morning routine", "Half-day plan"] },
      { slug: "sea-glass-island-tour-by-boat", whyWePickIt: "Boat tour so you know exactly what to expect: no kayaking, just a boat ride and time on the island. Simplest format.", bestFor: ["No surprises", "Relaxed format", "Families and non-kayakers"] },
    ],
    intro: "A typical Sea Glass Island tour in Aruba follows a simple flow: check-in at a beach or marina, a safety briefing and equipment handout (for kayak tours), then the journey to the island by kayak or boat. Once there you'll have 30–60 minutes or more on the sea glass beach to walk, take photos, and learn how the glass got there. Then you'll return the same way. Total duration is usually 2–3 hours. This page walks you through exactly what to expect—step by step—plus what to bring (swimwear, water shoes, sunscreen, waterproof bag for your phone), whether you need kayak experience, and what the sea glass beach is like so you're fully prepared for your first Sea Glass Island tour.",
    whyBlock: {
      title: "Why know what to expect before you book?",
      content:
        "Knowing what to expect helps you choose the right tour (kayak vs boat, morning vs sunset), pack the right gear (water shoes, sunscreen, dry bag), and feel confident on the day. Tours are well run and suitable for beginners, but a quick read of the itinerary and inclusions makes the experience smoother and more enjoyable.",
    },
    whatToExpect: [
      "Check-in: arrive at the meeting point 10–15 minutes early. You'll sign in and get a safety briefing.",
      "Equipment: for kayak tours, you'll get a life jacket and paddle; the guide will show you how to use them. For boat tours, you'll board and find a seat.",
      "Journey: paddle or cruise to Sea Glass Island. The ride is part of the experience—enjoy the views.",
      "Island time: walk the sea glass beach, take photos, ask your guide questions. Respect any rules about collecting glass.",
      "Return: paddle or boat back to the start. Total duration is typically 2–3 hours from check-in.",
    ],
    faqs: [
      { question: "How long is a typical Sea Glass Island tour?", answer: "Most tours run 2–3 hours from check-in to return. That includes the paddle or boat ride (each way) and time on the island. Sunset or snorkel combos may be slightly longer." },
      { question: "What should I bring on a Sea Glass Island tour?", answer: "Wear swimwear or quick-dry clothes, water shoes or sandals, and sunscreen. Bring a towel and a waterproof bag for your phone or camera. Some operators provide water; check when you book." },
      { question: "Do I need to know how to kayak?", answer: "No. Tours are designed for all levels. You'll get instruction and a safety briefing. Sit-on-top kayaks are stable; the guide stays with the group. If you prefer not to kayak, choose a boat tour." },
      { question: "What is the sea glass beach like?", answer: "The beach is covered in small, smooth pieces of glass in many colors—greens, blues, whites, browns—washed up over decades. You walk on sand and glass; it's unique and photogenic. Your guide can explain how it formed." },
      { question: "What if the weather is bad on the day of my tour?", answer: "Operators may reschedule or cancel for safety (e.g. high wind or rough seas). They'll usually offer another date or a refund. Check the operator's policy when you book." },
    ],
  },
  // ————— Water Sports and Rentals in Aruba —————
  {
    categorySlug: "water-sports-and-rentals-in-aruba",
    slug: "jet-ski",
    title: "Jet Ski Rentals in Aruba: Compare Options & Book",
    description:
      "Compare jet ski rentals in Aruba. Solo and double seater options, 30-minute and hourly rentals. Palm Beach and Eagle Beach. Instruction and life jacket included. Book with free cancellation.",
    picks: [
      { slug: "aruba-jet-ski-rental", whyWePickIt: "Aruba jet ski rental for water adventures—solo or double seater with instruction and a designated riding area. Explore the coast at your own pace with a safety briefing included.", bestFor: ["Freedom on the water", "Solo or tandem ride", "Scenic coast exploration"] },
      { slug: "jet-ski-waverunner-rental", whyWePickIt: "Rent a jet ski Waverunner by the 30-minute block. Flexible and ideal for a short burst of fun or first-timers who want to try without committing to a full hour.", bestFor: ["30-minute sessions", "First-timers", "Quick activity"] },
    ],
    intro: "Jet ski rentals in Aruba let you drive your own watercraft along the coast—no guide required, just a safety briefing and a defined riding area. You can choose solo or double seater and often rent by 30 minutes or an hour. Most operators work from Palm Beach or Eagle Beach. This page compares the best jet ski rentals in Aruba: what's included, how long you can ride, and who each option suits so you can book the right experience.",
    whyBlock: {
      title: "Why rent a jet ski in Aruba?",
      content:
        "Aruba's calm leeward waters and scenic coastline are ideal for jet skiing. Renting gives you the freedom to explore at your own pace—within the operator's zone—without following a guide. Sessions are short (typically 30–60 minutes), so you can fit jet skiing into a beach day. Most rentals include instruction and life jackets; you usually need a valid driver's license to operate the craft. A popular choice for couples and friends who want a quick adrenaline hit.",
    },
    whatToExpect: [
      "Check-in at the operator's beach or marina kiosk. Sign a waiver and get a safety briefing.",
      "Instruction on how to operate the jet ski (start, steer, throttle). Life jacket provided.",
      "Your rental time on the water in the designated area. Solo or double seater depending on your booking.",
      "Return the jet ski at the end of your session. Total time from check-in is usually 30–60 minutes.",
    ],
    faqs: [
      { question: "How long can I rent a jet ski in Aruba?", answer: "Rentals are often 30 minutes or 1 hour. Some operators offer longer blocks. Your time starts after the safety briefing. Check each product for exact duration." },
      { question: "Do I need a license to drive a jet ski in Aruba?", answer: "Most operators require a valid driver's license to operate the jet ski. Minimum age for the driver applies. Passengers may have different age limits. Confirm when you book." },
      { question: "Where do jet ski rentals operate in Aruba?", answer: "Jet ski rentals typically operate from Palm Beach, Eagle Beach, or a nearby marina. Your confirmation will include the exact meeting point and check-in time." },
      { question: "Can two people ride one jet ski in Aruba?", answer: "Yes. Many jet skis are two-seater (driver and passenger). Only the licensed driver may operate the craft. Check the product for single vs double seater." },
      { question: "Is jet ski rental in Aruba safe for beginners?", answer: "Yes. You get a safety briefing and instruction. Operators define a riding area and rules. Stay within the zone and follow the guidelines for a safe, fun ride." },
    ],
  },
  {
    categorySlug: "water-sports-and-rentals-in-aruba",
    slug: "parasailing",
    title: "Parasailing in Aruba: Best Tours & What to Expect",
    description:
      "Parasailing in Aruba compared. Solo and tandem flights, 10–15 minutes in the air. Panoramic views of the coast. Equipment and boat ride included. Book with free cancellation.",
    picks: [
      { slug: "parasailing", whyWePickIt: "Classic parasailing in Aruba—soar above the Caribbean with panoramic views. Solo or tandem, equipment and boat ride included. One of the island's most popular water sports.", bestFor: ["First-timers and repeat flyers", "Solo or tandem", "Stunning views"] },
      { slug: "aruba-parasailing-adventure", whyWePickIt: "Aruba parasailing adventure with a relaxed vibe. Take off from the boat and enjoy 10–15 minutes in the air. Equipment and safety briefing included.", bestFor: ["Couples and friends", "Unforgettable views", "No experience needed"] },
    ],
    intro: "Parasailing in Aruba means taking off from a boat and soaring behind it under a parachute—you get 10–15 minutes in the air with panoramic views of the coast and ocean. Most operators offer solo and tandem flights; equipment, harness, and boat ride are included. No experience is needed. This page compares the best parasailing in Aruba: what to expect, how long the experience lasts, and who each tour suits so you can book with confidence.",
    whyBlock: {
      title: "Why go parasailing in Aruba?",
      content:
        "Parasailing is one of the easiest ways to get a bird's-eye view of Aruba—thrilling but not physically demanding. You're harnessed and towed by a boat; take-off and landing are smooth. Flights last 10–15 minutes; the whole experience fits into about an hour. Ideal for couples (tandem), first-timers, and anyone who wants unforgettable views without needing any skill. Book in advance for your preferred time; operators often run multiple trips per day.",
    },
    whatToExpect: [
      "Check-in at the operator's beach or marina. Sign a waiver and get a safety briefing.",
      "Board the parasailing boat and cruise to the flight area. You'll be fitted with a harness.",
      "Take off from the boat—you'll ascend gradually. Enjoy 10–15 minutes in the air with panoramic views.",
      "Land back on the boat and return to shore. Total experience is typically 30–60 minutes from check-in.",
    ],
    faqs: [
      { question: "How long is the parasailing flight in Aruba?", answer: "You're typically in the air 10–15 minutes. Total time from check-in to finish—including boat ride and briefing—is usually 30–60 minutes." },
      { question: "Can I parasail with another person in Aruba?", answer: "Yes. Many operators offer tandem parasailing so two people can fly together. Check the product for tandem availability and any weight limits." },
      { question: "Are there weight limits for parasailing in Aruba?", answer: "Yes. There are usually minimum and maximum weight limits for safety (solo and tandem). Check the product or contact the operator when you book." },
      { question: "Is parasailing in Aruba safe?", answer: "Yes. Operators use certified equipment and give a safety briefing. You're harnessed and connected to the boat. Flights may be rescheduled if weather is unsuitable." },
      { question: "Where does parasailing in Aruba depart from?", answer: "Parasailing typically departs from a beach or marina on Palm Beach or Eagle Beach. Your confirmation will include the exact meeting point." },
    ],
  },
  {
    categorySlug: "water-sports-and-rentals-in-aruba",
    slug: "water-skiing-tubing-flyboarding",
    title: "Water Skiing, Tubing & Flyboarding in Aruba",
    description:
      "Water skiing, wakeboarding, tubing, flyboarding, and jetovator in Aruba. Compare sessions, duration, and what's included. Equipment and instruction. Book with free cancellation.",
    picks: [
      { slug: "water-skiing-wakeboarding", whyWePickIt: "Water skiing and wakeboarding in Aruba—guided session behind a boat with equipment and instruction. Suitable for beginners and experienced riders. Classic adrenaline on the water.", bestFor: ["Water ski and wakeboard fans", "Beginners and experienced", "Boat-tow thrills"] },
      { slug: "flyboarding-jetovator", whyWePickIt: "Flyboarding and jetovator in Aruba—30-minute session flying above the water on a water jet. Unique, high-adrenaline experience with instruction included.", bestFor: ["Thrill-seekers", "Unique experience", "Instagram-worthy"] },
      { slug: "tube-ride", whyWePickIt: "15-minute tube ride in Aruba—towed behind a speedboat on an inflatable tube. No skill required; just hold on and enjoy. Great for families and friends.", bestFor: ["Families with older kids", "Quick thrill", "No experience needed"] },
    ],
    intro: "Beyond jet skis and parasailing, Aruba offers water skiing, wakeboarding, tubing, flyboarding, and jetovator—all high-energy activities with equipment and instruction included. Water skiing and wakeboarding give you a tow behind a boat; tubing is a shorter, no-skill ride on an inflatable; flyboarding and jetovator use a water jet to propel you above the surface. This page compares these options: session length, what to expect, and who each activity suits so you can pick the right one for your group.",
    whyBlock: {
      title: "Why try water skiing, tubing, or flyboarding in Aruba?",
      content:
        "These activities deliver strong thrills in a short window—typically 15–30 minutes. Water skiing and wakeboarding are classic boat-tow sports; tubing is easier (just hold on); flyboarding and jetovator are unique and memorable. All are run by operators who provide equipment and instruction, so beginners can join. Ideal for adrenaline seekers, families with older kids, and anyone who wants to try something different without a full-day commitment.",
    },
    whatToExpect: [
      "Check-in at the operator's beach or marina. Sign a waiver and get a safety briefing.",
      "Equipment and instruction: life jacket, brief how-to for your activity (skis, tube, or flyboard).",
      "Your session: 15–30 minutes on the water (or in the air for flyboarding). The crew will guide you.",
      "Return to the start. Total time from check-in is usually 30–60 minutes depending on the activity.",
    ],
    faqs: [
      { question: "How long are water skiing, tubing, and flyboarding sessions in Aruba?", answer: "Tubing is often 15 minutes; water skiing and wakeboarding may be one or more runs; flyboarding and jetovator are typically 30 minutes. Total time from check-in is usually 30–60 minutes." },
      { question: "Do I need experience for water skiing, tubing, or flyboarding?", answer: "Tubing requires no skill. Water skiing and wakeboarding suit beginners—you'll get instruction. Flyboarding and jetovator also welcome beginners; the operator will help you get the hang of it." },
      { question: "What is flyboarding and jetovator?", answer: "Flyboarding uses a board connected to a water jet—you're propelled into the air. Jetovator is a similar device. Both let you hover and move above the water. Instruction is included." },
      { question: "Is tubing in Aruba good for kids?", answer: "Many operators allow kids on the tube with a minimum age (e.g. 8 or 10). There may be weight limits. Water skiing and flyboarding often have age/weight restrictions—check each product." },
      { question: "Where do these water sports take place in Aruba?", answer: "Activities typically run from a beach or marina on Aruba's coast (e.g. Palm Beach, Eagle Beach area). Your confirmation will include the exact meeting point." },
    ],
  },
  // ————— Prague walking tour guides —————
  {
    categorySlug: "walking-tours-in-prague",
    slug: "best-morning-walking-tours",
    title: "Best morning walking tours in Prague",
    description:
      "Compare the best morning walking tours in Prague—Old Town, Jewish Quarter, and city orientation. Start the day with a guide and see the main sights before the crowds.",
    picks: [
      {
        slug: "old-town-new-town-jewish-quarter-tour",
        whyWePickIt:
          "Explore Prague’s Old Town, New Town and Jewish Quarter in one focused morning walk. You’ll cover the main districts and hear the stories behind the streets and synagogues. Ideal for first-time visitors who want orientation and Jewish heritage in one tour.",
        bestFor: [
          "First-time visitors who want to understand Prague’s districts in one morning",
          "Anyone interested in Jewish heritage and Old Town history",
          "Travelers who prefer a morning start and the rest of the day free",
          "Guests who like a district-focused walk rather than a castle-focused one",
        ],
      },
      {
        slug: "small-group-old-town-jewish-quarter",
        whyWePickIt:
          "This walking tour keeps the group to a maximum of six people, focusing on Old Town and the Jewish Quarter. You get more time for questions and a more intimate experience. A strong morning option if you prefer small groups.",
        bestFor: [
          "Travelers who prefer very small groups (max 6)",
          "Anyone who wants more time for questions and discussion",
          "Visitors interested in Old Town and Jewish Quarter in depth",
          "Guests who like a conversational, relaxed pace",
        ],
      },
      {
        slug: "discover-prague-tour",
        whyWePickIt:
          "The Discover Prague tour is a guided walk that introduces you to the city’s history and main areas. A solid morning option for a first walking tour of Prague, with practical tips for the rest of your stay.",
        bestFor: [
          "First-time visitors to Prague",
          "Anyone who wants a general introduction in the morning",
          "Travelers looking for a straightforward, well-paced walk",
          "Guests who want a classic discovery tour before exploring on their own",
        ],
      },
    ],
    intro:
      "Morning walking tours in Prague let you see the historic centre in cooler temperatures and often with fewer crowds. Many tours start in Old Town Square or near the Astronomical Clock and cover the Jewish Quarter, Charles Bridge, or the main districts. Whether you want a small-group deep dive or a broader orientation, you’ll find morning walks to match.",
    whyBlock: {
      title: "Why choose a morning walking tour?",
      content:
        "Mornings in Prague are typically cooler and less crowded, so you can enjoy the cobbled streets and squares with more space. Starting early also leaves your afternoon free for museums, lunch, or a river cruise. Many operators offer morning-only departures, making it easy to fit a guided walk into your first day.",
    },
    whatToExpect: [
      "Meet your guide at the designated point, usually in or near Old Town Square.",
      "A short introduction to the route and what you’ll see in each area.",
      "Walk through Old Town: the Astronomical Clock, Týn Church, and the surrounding streets.",
      "Visit or pass the Jewish Quarter (Josefov)—synagogues and the Old Jewish Cemetery, depending on the tour.",
      "Some tours continue to New Town or toward Charles Bridge. Your guide shares history and practical tips.",
      "The tour ends in a central location; your guide can suggest where to go next.",
    ],
    faqs: [
      { question: "What are the best morning walking tours in Prague?", answer: "The best morning walking tours in Prague include the Old Town, New Town and Jewish Quarter tour, the small-group Old Town and Jewish Quarter tour (max 6 people), and the Discover Prague tour. All focus on the historic centre and work well as a first activity of the day. Compare group size, duration, and whether synagogue entry is included." },
      { question: "How long are morning walking tours in Prague?", answer: "Most morning walking tours in Prague last 2.5 to 3 hours. Some half-day options run a bit longer. Check the tour description for exact duration and start time." },
      { question: "Do morning walking tours include the Jewish Quarter?", answer: "Many morning walking tours include the Jewish Quarter (Josefov). Some include entry to one or more synagogues and the Jewish Museum; others focus on exterior commentary. Check the tour details when you book." },
      { question: "Is it better to do a morning or afternoon walking tour in Prague?", answer: "Morning tours are often cooler and less crowded, and they leave your afternoon free. Afternoon tours can suit visitors who prefer a later start or want to combine with a castle visit. Both are popular; choose based on your schedule and energy." },
      { question: "Where do morning walking tours start in Prague?", answer: "Most morning walking tours start in or near Old Town Square or another central location. Your booking confirmation will include the exact meeting point and time. Some operators offer hotel pickup for an extra fee." },
      { question: "What should I bring on a morning walking tour in Prague?", answer: "Wear comfortable walking shoes and dress for the weather. Bring water, and consider sunscreen and a hat in summer. A small bag for a camera and phone is useful. Your guide will tell you if any sites have dress codes (e.g. shoulders covered in churches)." },
      { question: "Can I book a morning walking tour with free cancellation?", answer: "Cancellation policies vary by operator and rate. Many Prague walking tours offer free cancellation up to 24 hours in advance. Check the booking page for the exact policy before you book." },
    ],
  },
  {
    categorySlug: "walking-tours-in-prague",
    slug: "best-afternoon-walking-tours",
    title: "Best afternoon walking tours in Prague",
    description:
      "Compare the best afternoon walking tours in Prague—Prague Castle, Charles Bridge, and the historic centre. Ideal for visitors who prefer a later start and afternoon light.",
    picks: [
      {
        slug: "prague-afternoon-walking-tour-prague-castle",
        whyWePickIt:
          "This 3-hour afternoon walking tour takes in Prague Castle and the historic centre. You’ll see the castle complex, St Vitus Cathedral, Golden Lane, and key viewpoints, then descend through Malá Strana. Ideal for first-time visitors who want the castle and main sights in one efficient half-day.",
        bestFor: [
          "First-time visitors who want Prague Castle and the historic centre in one go",
          "Afternoon starters who prefer a 3-hour tour rather than a full day",
          "Travelers who want a guided overview of the castle and its history",
          "Anyone looking for a well-paced walk with photo stops",
        ],
      },
      {
        slug: "old-town-charles-bridge-prague-castle",
        whyWePickIt:
          "This walking tour follows the classic route from Old Town across Charles Bridge to Prague Castle. You’ll see the most photographed spots and get the history from your guide. A strong afternoon option for the iconic Prague sequence.",
        bestFor: [
          "First-time visitors who want the classic Prague route",
          "Anyone who wants to walk across Charles Bridge with a guide",
          "Travelers who want Old Town, bridge and castle in one tour",
          "Photography-minded visitors who want the iconic viewpoints",
        ],
      },
    ],
    intro:
      "Afternoon walking tours in Prague suit visitors who prefer a later start or want to spend the morning at a museum or café. Many afternoon tours cover Prague Castle, Charles Bridge, and Malá Strana, with softer light for photos. You’ll still see the main sights with a guide and have time for dinner or an evening activity afterward.",
    whyBlock: {
      title: "Why choose an afternoon walking tour?",
      content:
        "Afternoon tours let you sleep in or use the morning for something else, and the light can be ideal for photography on Charles Bridge and at the castle. Temperatures may be warmer in summer, but you’ll avoid the earliest rush. Many operators run both morning and afternoon departures, so you can pick what fits your schedule.",
    },
    whatToExpect: [
      "Meet your guide at the designated spot, often in or near Old Town.",
      "Walk or take tram toward Prague Castle, depending on the tour.",
      "Explore the castle grounds: St Vitus Cathedral (exterior or interior), Golden Lane, viewpoints.",
      "Descend through Malá Strana toward Charles Bridge.",
      "Cross or view Charles Bridge with stories and photo stops.",
      "Tour ends in a central location; your guide can suggest where to eat or what to do next.",
    ],
    faqs: [
      { question: "What are the best afternoon walking tours in Prague?", answer: "The best afternoon walking tours in Prague include the 3-hour afternoon tour including Prague Castle and the Old Town, Charles Bridge and Prague Castle tour. Both cover the castle area and the classic route. Compare duration, group size, and whether St Vitus Cathedral entry is included." },
      { question: "How long are afternoon walking tours in Prague?", answer: "Afternoon walking tours in Prague typically last 3 to 4 hours. Shorter options run about 3 hours; longer ones may include more time at the castle or in Malá Strana. Check the tour description for exact duration." },
      { question: "Do afternoon walking tours include Prague Castle?", answer: "Many afternoon walking tours include the castle complex and exterior areas. Some include entry to St Vitus Cathedral or other paid areas; others view from outside. Check the tour details when you book." },
      { question: "Is an afternoon walking tour good for photography?", answer: "Yes. Afternoon light can be ideal for Charles Bridge and the castle. Your guide will usually allow time for photos at key viewpoints. Bring a camera or phone and comfortable shoes." },
      { question: "Where do afternoon walking tours start and end?", answer: "Most start in or near Old Town and end near Charles Bridge or in the historic centre. Your booking confirmation will give the exact meeting point and end location." },
      { question: "Can I do an afternoon walking tour and then dinner?", answer: "Yes. Afternoon tours typically finish by late afternoon or early evening, leaving plenty of time for dinner. Your guide can recommend restaurants in Old Town or Malá Strana." },
      { question: "What is the difference between morning and afternoon Prague Castle tours?", answer: "The main difference is timing and often light. Morning tours may feel cooler and less crowded; afternoon tours suit later risers and can offer better light for photos. The sights covered are often similar; choose based on your schedule." },
    ],
  },
  {
    categorySlug: "walking-tours-in-prague",
    slug: "best-old-town-jewish-quarter-walking-tours",
    title: "Best Old Town and Jewish Quarter walking tours",
    description:
      "Compare the best walking tours of Prague’s Old Town and Jewish Quarter (Josefov). History, synagogues, the Astronomical Clock, and Jewish heritage in one tour.",
    picks: [
      {
        slug: "old-town-new-town-jewish-quarter-tour",
        whyWePickIt:
          "This tour covers Old Town, New Town and the Jewish Quarter in one guided walk. You’ll see the Astronomical Clock, the main squares and streets, and the Jewish heritage sites. Ideal for visitors who want a full district-focused overview.",
        bestFor: [
          "Visitors who want to understand Prague’s districts in one tour",
          "Anyone interested in Jewish heritage and Old Town history",
          "Travelers who prefer a district-focused walk over a castle-focused one",
          "First-timers looking for orientation and context",
        ],
      },
      {
        slug: "small-group-old-town-jewish-quarter",
        whyWePickIt:
          "A really small group (max 6) focusing on Old Town and the Jewish Quarter. More time for questions and a more intimate experience. Best if you prefer a conversational, small-group style.",
        bestFor: [
          "Travelers who prefer very small groups (max 6)",
          "Anyone who wants more time for questions and discussion",
          "Visitors interested in Old Town and Jewish Quarter in depth",
          "Guests who like an intimate, conversational style",
        ],
      },
      {
        slug: "essential-prague",
        whyWePickIt:
          "The Essential Prague tour covers the must-see sights in the historic centre, including Old Town Square, the Jewish Quarter and Charles Bridge. Tip-based pricing makes it a flexible, budget-friendly option.",
        bestFor: [
          "First-time visitors who want the main highlights in one tour",
          "Travelers on a budget who like tip-based pricing",
          "Anyone who wants a concise intro to Old Town and the river",
          "Guests who prefer a relaxed pace with a local perspective",
        ],
      },
    ],
    intro:
      "Old Town and the Jewish Quarter (Josefov) are at the heart of Prague’s history. Walking tours here cover the Astronomical Clock, Old Town Square, the synagogues and the Old Jewish Cemetery, plus the stories behind them. Whether you want a large-group overview or a small-group deep dive, you’ll find tours that focus on these districts.",
    whyBlock: {
      title: "Why choose an Old Town and Jewish Quarter walking tour?",
      content:
        "These districts hold most of Prague’s famous landmarks and Jewish heritage. A guided walk helps you understand the layers of history—medieval, baroque, and 20th-century—and the significance of the synagogues and cemetery. Tours range from broad orientation to detailed Jewish heritage; some include synagogue entry, others focus on exterior commentary.",
    },
    whatToExpect: [
      "Meet your guide in the Old Town or a central location.",
      "Walk through Old Town Square: the Astronomical Clock, Týn Church, Old Town Hall.",
      "Enter or pass through the Jewish Quarter (Josefov).",
      "See the synagogues and the Old Jewish Cemetery; your guide explains the history and significance.",
      "Some tours include New Town or a short stretch toward the river.",
      "Tour ends in a central spot; your guide can recommend cafés or further sights.",
    ],
    faqs: [
      { question: "What are the best Old Town and Jewish Quarter walking tours in Prague?", answer: "The best Old Town and Jewish Quarter walking tours include the Old Town, New Town and Jewish Quarter tour, the small-group Old Town and Jewish Quarter tour (max 6), and the Essential Prague tour. Compare group size, duration, and whether synagogue entry is included." },
      { question: "Do these tours go inside the synagogues?", answer: "It depends on the tour. Some include entry to one or more synagogues and the Jewish Museum; others focus on exterior and street-level commentary. Check the tour description when you book." },
      { question: "How long are Old Town and Jewish Quarter walking tours?", answer: "Most run 2.5 to 3.5 hours. Small-group and in-depth tours may be at the longer end. Check the specific tour for exact duration." },
      { question: "Is the Jewish Cemetery included?", answer: "Many tours pass or include the Old Jewish Cemetery as part of the Jewish Quarter visit. Entry may be included in the tour price or require a separate ticket; check the tour details." },
      { question: "Where do Old Town and Jewish Quarter tours start?", answer: "Most start in or near Old Town Square or another central point. Your booking confirmation will include the exact meeting place and time." },
      { question: "Are these tours suitable for children?", answer: "Walking tours are generally suitable for families. Content about the Jewish Quarter and 20th-century history can be sobering; parents may want to prepare children. Check with the operator if you have concerns." },
      { question: "Can I book with free cancellation?", answer: "Many Prague walking tours offer free cancellation up to 24 or 48 hours in advance. Check the booking page for the exact policy." },
    ],
  },
  {
    categorySlug: "walking-tours-in-prague",
    slug: "best-prague-castle-walking-tours",
    title: "Best Prague Castle walking tours",
    description:
      "Compare the best walking tours that include Prague Castle—grounds, St Vitus Cathedral, Golden Lane, and the views. See the castle with a guide and skip the guesswork.",
    picks: [
      {
        slug: "prague-afternoon-walking-tour-prague-castle",
        whyWePickIt:
          "This 3-hour afternoon tour takes in Prague Castle and the historic centre. You’ll see the castle complex, St Vitus Cathedral, Golden Lane, and key viewpoints, then descend through Malá Strana. A clear, efficient way to see the castle with a guide.",
        bestFor: [
          "First-time visitors who want Prague Castle and the historic centre in one go",
          "Afternoon starters who prefer a 3-hour tour",
          "Travelers who want a guided overview of the castle and its history",
          "Anyone looking for a well-paced walk with photo stops",
        ],
      },
      {
        slug: "old-town-charles-bridge-prague-castle",
        whyWePickIt:
          "Follow the classic route from Old Town across Charles Bridge to Prague Castle. You’ll see the most photographed spots and get the history from your guide. Ideal for the full iconic sequence in one tour.",
        bestFor: [
          "First-time visitors who want the classic Prague route",
          "Anyone who wants to walk across Charles Bridge with a guide",
          "Travelers who want Old Town, bridge and castle in one tour",
          "Photography-minded visitors who want the iconic viewpoints",
        ],
      },
      {
        slug: "best-of-prague",
        whyWePickIt:
          "The Best of Prague brings together the city’s top sights and stories in one guided walk, often including the castle area. Well suited to visitors who want a single tour that hits the highlights and gives a clear overview.",
        bestFor: [
          "Visitors who want one tour that covers the main sights including the castle",
          "Travelers with limited time who want maximum coverage",
          "Anyone who likes a structured, highlight-focused walk",
          "First-timers who want a clear overview before exploring on their own",
        ],
      },
    ],
    intro:
      "Prague Castle is one of the largest ancient castles in the world and a must-see. Walking tours that include the castle typically cover the grounds, St Vitus Cathedral (exterior or interior), Golden Lane, and the viewpoints over the city. Some start in Old Town and walk across Charles Bridge; others meet near the castle or use tram. A guide helps you make sense of the layout and history.",
    whyBlock: {
      title: "Why take a walking tour that includes Prague Castle?",
      content:
        "The castle complex is large and can be confusing. A guide takes you to the key spots, explains the history of the kings and the republic, and often skips the hassle of figuring out tickets and routes. Many tours combine the castle with Malá Strana and Charles Bridge for a full half-day experience.",
    },
    whatToExpect: [
      "Meet your guide; often in Old Town or at a tram stop near the castle.",
      "Walk or take tram to Prague Castle.",
      "Explore the castle grounds: courtyards, St Vitus Cathedral (exterior or interior), Golden Lane, viewpoints.",
      "Your guide explains the history and significance of the main buildings.",
      "Descend through Malá Strana or return to the start, depending on the tour.",
      "Tour ends at a central location; your guide can suggest what to do next.",
    ],
    faqs: [
      { question: "What are the best Prague Castle walking tours?", answer: "The best Prague Castle walking tours include the 3-hour afternoon walking tour including Prague Castle, the Old Town, Charles Bridge and Prague Castle tour, and The Best of Prague tour. All cover the castle area; compare duration, group size, and whether St Vitus Cathedral entry is included." },
      { question: "Do Prague Castle walking tours include entry?", answer: "Most include access to the castle grounds and exterior areas. Entry to St Vitus Cathedral interior and other paid exhibitions may be included or optional—check the tour description. Some tours view the cathedral from outside only." },
      { question: "How long do Prague Castle walking tours last?", answer: "Tours that include the castle typically last 3 to 4 hours. Shorter options may focus on the castle only; longer ones often include Old Town, Charles Bridge and Malá Strana." },
      { question: "Is there a lot of walking or stairs?", answer: "Yes. The castle is on a hill and the grounds involve steps and slopes. Comfortable walking shoes are essential. If you have mobility concerns, contact the operator before booking." },
      { question: "Where do Prague Castle walking tours start?", answer: "Some start in Old Town and walk to the castle via Charles Bridge and Malá Strana; others meet near the castle or at a tram stop. Your booking confirmation will give the exact meeting point." },
      { question: "Can I visit the castle on my own and still take a walking tour?", answer: "Yes. You can do a guided walking tour that includes the castle on one day and return on your own another day. Many visitors find a tour helpful for orientation and then explore independently." },
      { question: "What is Golden Lane?", answer: "Golden Lane is a historic street within Prague Castle with small, colourful houses. It was once home to castle guards and later to goldsmiths and writers (including Kafka). Many castle walking tours include a stop here." },
    ],
  },
  {
    categorySlug: "walking-tours-in-prague",
    slug: "best-tip-based-budget-walking-tours",
    title: "Best tip-based and budget walking tours in Prague",
    description:
      "Compare tip-based and budget-friendly walking tours in Prague. Pay what you think the tour was worth—ideal for travelers who want flexibility and local insight without a high fixed price.",
    picks: [
      {
        slug: "essential-prague",
        whyWePickIt:
          "The Essential Prague tour covers the must-see sights—Old Town Square, Jewish Quarter, Charles Bridge—with tip-based pricing. You decide what to pay at the end. A concise, budget-friendly way to get oriented with a local guide.",
        bestFor: [
          "First-time visitors who want the main highlights in one tour",
          "Travelers on a budget who like tip-based pricing",
          "Anyone who wants a concise intro to Old Town and the river",
          "Guests who prefer a relaxed pace with a local perspective",
        ],
      },
      {
        slug: "small-group-old-town-jewish-quarter",
        whyWePickIt:
          "A small-group tour (max 6) focusing on Old Town and the Jewish Quarter at a moderate price. You get more time for questions and an intimate experience without the cost of a private tour.",
        bestFor: [
          "Travelers who want a small group without private-tour prices",
          "Anyone interested in Old Town and Jewish Quarter in depth",
          "Guests who value a conversational style and time for questions",
          "Budget-conscious visitors who still want a small group",
        ],
      },
    ],
    intro:
      "Tip-based and budget walking tours in Prague let you see the city with a local guide without a high fixed price. You join the tour and at the end you pay what you think it was worth (often with a suggested amount). These tours are popular with backpackers, students, and anyone who wants flexibility. Quality varies; choose operators with good reviews.",
    whyBlock: {
      title: "Why choose a tip-based or budget walking tour?",
      content:
        "Tip-based tours keep upfront cost low and let you reward the guide based on your experience. They’re a good way to try a walking tour without committing to a higher fixed price. Budget-friendly fixed-price tours also exist—compare group size, duration, and what’s included before you book.",
    },
    whatToExpect: [
      "Meet your guide at the designated point; often in Old Town Square or nearby.",
      "Walk through the historic centre; the guide shares stories and practical tips.",
      "Stops at key sights: Astronomical Clock, Jewish Quarter, Charles Bridge, etc.",
      "The guide may suggest a tip amount at the end; you decide what to give.",
      "Tour ends in a central location. You can ask for restaurant or sightseeing recommendations.",
    ],
    faqs: [
      { question: "What are the best tip-based walking tours in Prague?", answer: "The Essential Prague tour is a well-known tip-based option that covers Old Town, the Jewish Quarter and Charles Bridge. The small-group Old Town and Jewish Quarter tour offers a moderate fixed price with a small group (max 6). Both are good value; choose based on whether you prefer tip-based or fixed pricing." },
      { question: "How does tip-based pricing work?", answer: "You join the tour and at the end you pay the guide what you think the tour was worth. There is often a suggested amount (e.g. per person). You pay in cash or sometimes by card, depending on the operator. Check the operator’s page for details." },
      { question: "Do I need to book in advance for a tip-based tour?", answer: "Yes. Even tip-based tours require booking so the operator knows how many people are coming and can send you the meeting point and time. Book online, then show up at the agreed place." },
      { question: "Are tip-based tours good quality?", answer: "Many tip-based tours are run by passionate local guides who rely on tips. Quality can be high; read reviews and choose operators with strong ratings. You’ll get a similar itinerary to fixed-price tours, with the flexibility to pay according to your budget and satisfaction." },
      { question: "What is a suggested tip for a Prague walking tour?", answer: "Suggested amounts vary by operator; often around €5–15 per person for a 2–3 hour tour. You can give more or less based on your experience and budget. The guide will usually mention the suggestion at the start or end of the tour." },
      { question: "Can I do a budget walking tour if I don’t have much time?", answer: "Yes. Many tip-based and budget tours run 2–3 hours, so they fit into a half-day. The Essential Prague tour is a concise option that covers the main highlights in one go." },
      { question: "Are there free walking tours in Prague?", answer: "Tip-based tours are often marketed as “free walking tours”—you don’t pay upfront, but tips are expected and are the guide’s main income. So they’re free to join but not free to do well; budget for a reasonable tip." },
    ],
  },
  {
    categorySlug: "walking-tours-in-prague",
    slug: "best-full-day-combo-walking-tours",
    title: "Best full-day and combo walking tours (with boat or lunch)",
    description:
      "Compare full-day Prague walking tours and combos that include a river cruise, lunch, or both. See the city on foot and on the water in one day.",
    picks: [
      {
        slug: "see-it-all-prague-river-boat-cruise",
        whyWePickIt:
          "Combine a full-day Prague walking tour with a river boat cruise. You’ll see the main sights on foot in the morning or afternoon, then step on board for a cruise on the Vltava. A full overview of the city in one day.",
        bestFor: [
          "Visitors who want a full-day Prague experience in one package",
          "Anyone who wants both walking and a boat cruise",
          "Travelers with one day to see as much as possible",
          "Guests who like variety: streets in the morning, river in the afternoon (or vice versa)",
        ],
      },
      {
        slug: "full-day-private-walking-tour-lunch-boat",
        whyWePickIt:
          "A full-day private walking tour with lunch and a boat trip included. You get a dedicated guide who can tailor the pace and focus, plus a sit-down meal and time on the Vltava. Ideal for couples, families or small groups who want a personalised day.",
        bestFor: [
          "Couples or families who want a private guide for the day",
          "Travelers who want lunch and a boat trip included",
          "Anyone who prefers a customisable pace and focus",
          "Small groups willing to pay for an exclusive experience",
        ],
      },
    ],
    intro:
      "Full-day walking tours and combo experiences in Prague pack in more than a half-day walk. Some combine a guided walk with a Vltava river cruise; others add lunch or a private guide. If you have one day and want to see the city on foot and from the water, or with a meal included, these options deliver.",
    whyBlock: {
      title: "Why choose a full-day or combo walking tour?",
      content:
        "A full-day or combo tour lets you cover more ground and experiences without organising multiple bookings. Walking plus boat gives you both street-level and river perspectives; adding lunch means you don’t have to find a restaurant in the middle of the day. Private full-day tours offer the most flexibility and personalisation.",
    },
    whatToExpect: [
      "Meet your guide at the start of the day; sometimes with hotel pickup.",
      "Morning: guided walking tour of the historic centre—Old Town, Jewish Quarter, Charles Bridge, castle area, etc.",
      "Midday: lunch at a local restaurant (if included) or a break.",
      "Afternoon: river boat cruise on the Vltava, or more walking, depending on the tour.",
      "End of day: your guide drops you off or leaves you in a central location.",
    ],
    faqs: [
      { question: "What are the best full-day walking tours in Prague?", answer: "The best full-day options include the See It All Prague tour with river boat cruise and the full-day private walking tour with lunch and boat. The first combines walking and cruise in one day; the second adds a private guide and lunch. Compare duration, group size, and what’s included (lunch, boat, pickup)." },
      { question: "Is lunch included on full-day walking tours?", answer: "It depends on the tour. The full-day private tour with lunch and boat includes lunch; the See It All tour may or may not—check the description. Some tours leave you free to buy lunch during a break." },
      { question: "How long are full-day walking tours in Prague?", answer: "Full-day tours typically run 6–8 hours including the walking portion and boat cruise or lunch. Exact times are on the operator’s booking page." },
      { question: "Do full-day tours include the river cruise?", answer: "Some do. The See It All Prague tour includes a river boat cruise; the full-day private tour includes a boat trip. If the cruise is important to you, confirm it’s included before you book." },
      { question: "Can I do a private full-day tour?", answer: "Yes. The full-day private walking tour with lunch and boat is designed for private groups. You get a dedicated guide, customisable itinerary, lunch and a boat trip. Group size and price depend on the operator." },
      { question: "Where do full-day tours start?", answer: "Most start in the city centre; some offer hotel pickup. Your booking confirmation will include the exact meeting point and schedule for the day." },
      { question: "What if the weather is bad?", answer: "Walking goes ahead in light rain; operators may have umbrellas or indoor stops. Boat cruises may be cancelled or rescheduled in heavy weather. Check the operator’s policy for rain and cancellations before you book." },
    ],
  },
  // ————— Prague castle & palace tour guides —————
  {
    categorySlug: "castle-and-palace-tours-in-prague",
    slug: "best-guided-castle-tours-admission",
    title: "Best guided Prague Castle tours with admission",
    description:
      "Compare the best guided Prague Castle tours that include admission tickets. St Vitus Cathedral, Old Royal Palace, Golden Lane and more with a professional guide.",
    picks: [
      { slug: "prague-castle-walking-tour-admission-tickets", whyWePickIt: "This Prague Castle walking tour includes admission tickets and a professional guide. You'll see St Vitus Cathedral, the Old Royal Palace, Golden Lane and the castle grounds with commentary on the history of the kings and the republic. Ideal for first-time visitors who want both entry and context.", bestFor: ["First-time visitors who want a guided castle visit with tickets included", "Travelers who prefer not to queue for admission", "Anyone who wants to understand the castle's history with a guide", "Guests who want St Vitus Cathedral and key areas in one tour"] },
      { slug: "small-group-prague-castle-tour-admissions", whyWePickIt: "A small-group Prague Castle tour with admission included. You'll visit the cathedral, Old Royal Palace and other key areas with a professional guide and more time for questions. A more intimate option than a large group.", bestFor: ["Travelers who prefer a small group for a more personal experience", "Anyone who wants castle admission and a guide without a big crowd", "Visitors who like to ask questions and hear detailed commentary", "Guests who want to avoid the hustle of large coach groups"] },
      { slug: "prague-castle-interiors-tour-english-guide-entry", whyWePickIt: "This tour focuses on the castle interiors with an English-speaking guide and includes your entry ticket. You'll go inside St Vitus Cathedral, the Old Royal Palace and other key spaces with expert commentary. Ideal for a guided deep dive into the main buildings.", bestFor: ["Visitors who want a guided tour of the castle interiors in English", "Anyone who wants entry and expert commentary in one package", "Travelers interested in the history and art of the cathedral and palace", "Guests who prefer a structured tour to exploring alone"] },
    ],
    intro: "Guided Prague Castle tours with admission included let you skip the ticket queue and explore the castle complex with a professional guide. You'll visit St Vitus Cathedral, the Old Royal Palace, Golden Lane and other key areas with stories and context. Whether you prefer a small group or a more standard group size, these tours deliver both entry and commentary.",
    whyBlock: { title: "Why choose a guided Castle tour with admission?", content: "A guided tour with admission means you don't queue for tickets and you get context from a professional. The castle is large and can be confusing; a guide takes you to the key spots and explains the history. Tours typically include the main circuit—cathedral, palace, Golden Lane—so you see the highlights without planning the route yourself." },
    whatToExpect: ["Meet your guide at the designated location; receive your admission or enter with the group.", "Enter the castle complex and walk through the courtyards and main buildings.", "Visit St Vitus Cathedral, the Old Royal Palace and Golden Lane (or the areas covered by your tour).", "Your guide explains the history, architecture and significance of each area.", "The tour ends at the castle or nearby; your guide can suggest what to do next."],
    faqs: [
      { question: "What are the best guided Prague Castle tours with admission?", answer: "The best guided castle tours with admission include the Prague Castle walking tour with admission tickets, the small-group Prague Castle tour with admissions, and the Prague Castle interiors tour with English guide and entry. All include entry and a professional guide; compare group size and duration." },
      { question: "Is Prague Castle entry included in these tours?", answer: "Yes. These tours include admission to the castle complex so you don't need to buy tickets separately. The exact areas (e.g. cathedral interior, Golden Lane) are listed in each tour description." },
      { question: "How long do guided castle tours last?", answer: "Typically 2.5 to 3.5 hours. Exact duration is on each operator's booking page." },
      { question: "Where do guided castle tours start?", answer: "Meeting points vary; often near the castle or in the city centre. Your booking confirmation will include the exact location and time." },
      { question: "Are these tours in English?", answer: "Many are offered in English; the Prague Castle interiors tour is described as English-speaking. Check the product page for language options." },
    ],
  },
  {
    categorySlug: "castle-and-palace-tours-in-prague",
    slug: "best-skip-the-line-castle-tickets",
    title: "Best skip-the-line Prague Castle tickets",
    description: "Compare skip-the-line Prague Castle tickets and audio guides. Avoid the queues and explore the castle at your own pace.",
    picks: [
      { slug: "skip-the-line-prague-castle-admission-ticket", whyWePickIt: "This skip-the-line Prague Castle admission ticket lets you bypass the main queue and enter at your chosen time. Explore St Vitus Cathedral, the Old Royal Palace, Golden Lane and other included areas at your own pace, without a guide. Ideal for independent visitors.", bestFor: ["Independent travelers who prefer to explore without a guide", "Anyone who wants to avoid long ticket queues at the castle", "Visitors who like to set their own pace and spend time where they choose", "Guests who have already done a guided tour and want to revisit"] },
      { slug: "prague-castle-skip-the-line-audio-guide", whyWePickIt: "Skip-the-line ticket plus an audio guide so you can explore at your own pace with commentary in your language. Cover the cathedral, Old Royal Palace, Golden Lane and more while listening to the stories. A good option if you want flexibility without a live guide.", bestFor: ["Visitors who want to avoid queues and explore at their own pace", "Anyone who prefers audio commentary to a live guide", "Travelers who want commentary in their language", "Guests who like to pause and spend extra time in certain areas"] },
    ],
    intro: "Skip-the-line Prague Castle tickets let you avoid the main ticket queue and enter the castle complex at your chosen time. Some products include an audio guide so you get commentary as you explore; others are ticket-only. Either way, you set the pace and can focus on the areas that interest you most.",
    whyBlock: { title: "Why choose a skip-the-line Castle ticket?", content: "Skip-the-line tickets save time at busy periods and give you control over your visit. You can stay longer in the cathedral or Golden Lane, or move quickly through areas you've seen before. Adding an audio guide gives you context without the fixed schedule of a group tour." },
    whatToExpect: ["Collect your ticket or use your mobile ticket at the designated point; use the skip-the-line entrance.", "Enter the castle and explore the included areas (typically St Vitus, Old Palace, Golden Lane).", "If you have an audio guide, follow the suggested route and listen to commentary.", "Leave when you're ready; you can stay until closing within the validity of your ticket."],
    faqs: [
      { question: "What are the best skip-the-line Prague Castle tickets?", answer: "The best skip-the-line options include the Prague Castle admission ticket (ticket only) and the skip-the-line ticket with audio guide. Both let you bypass the main queue; the audio guide adds commentary in your language." },
      { question: "Do I need to choose a time slot?", answer: "Many skip-the-line tickets require a date and sometimes a time slot. Your confirmation will state when and where to enter." },
      { question: "What areas can I visit with a skip-the-line ticket?", answer: "The ticket typically includes the main castle circuit: St Vitus Cathedral, Old Royal Palace, Golden Lane and related areas. Exact inclusions depend on the product—check the description when you book." },
      { question: "Is an audio guide included?", answer: "It depends on the product. One option is ticket-only; another includes an audio guide. Check the product page for what's included." },
      { question: "How long can I stay inside the castle?", answer: "You can usually stay until closing time on the day of your visit, subject to the ticket terms. Most visitors spend 2–3 hours for a full circuit." },
    ],
  },
  {
    categorySlug: "castle-and-palace-tours-in-prague",
    slug: "best-small-group-private-castle-tours",
    title: "Best small group and private Prague Castle tours",
    description: "Compare small-group and private Prague Castle tours. More personal attention, flexible pace and dedicated guides.",
    picks: [
      { slug: "small-group-prague-castle-tour-admissions", whyWePickIt: "This small-group Prague Castle tour keeps the group size limited and includes admission. You'll visit St Vitus Cathedral, the Old Royal Palace and other key areas with a professional guide, with more time for questions and a more intimate experience.", bestFor: ["Travelers who prefer a small group for a more personal experience", "Anyone who wants castle admission and a guide without a big crowd", "Visitors who like to ask questions and hear detailed commentary", "Guests who want to avoid the hustle of large coach groups"] },
      { slug: "prague-castle-private-tour", whyWePickIt: "A private Prague Castle tour with a dedicated guide for just you and your party. Explore the castle at your own pace with commentary tailored to your interests. Ideal for couples, families or small groups who want a personalised experience.", bestFor: ["Couples or families who want a private guide", "Travelers who want to set the pace and focus", "Anyone who prefers not to share the guide with other guests", "Guests who want a tailored, in-depth castle visit"] },
    ],
    intro: "Small-group and private Prague Castle tours offer a more personal experience than large group tours. Small groups typically cap at around 10–15 people; private tours are just for you and your party. Both include a dedicated or semi-dedicated guide and often castle admission, with more time for questions and a flexible pace.",
    whyBlock: { title: "Why choose a small group or private Castle tour?", content: "Small groups mean you can hear the guide clearly and ask questions without holding up a big crowd. Private tours go further: the guide tailors the route and commentary to you, and you set the pace. Both suit visitors who value personal attention and a more intimate visit." },
    whatToExpect: ["Meet your guide (and, for small groups, the rest of the group) at the agreed location.", "Enter the castle with your guide; admission is typically included.", "Explore St Vitus Cathedral, the Old Royal Palace, Golden Lane and other areas at a pace that suits the group.", "The tour ends at the castle or nearby; your guide can recommend what to do next."],
    faqs: [
      { question: "What are the best small group and private Prague Castle tours?", answer: "The best options include the small-group Prague Castle tour with admissions and the Prague Castle private tour. The first limits group size; the second is for your party only. Both typically include admission and a professional guide." },
      { question: "How many people are in a small group?", answer: "Group size varies by operator; often around 10–15 or fewer. Check the tour description for the maximum." },
      { question: "Is castle admission included?", answer: "Yes for the small-group tour; many private tours also include admission. Confirm on the product page when you book." },
      { question: "Can we choose what to see on a private tour?", answer: "Yes. Private tours are flexible; your guide can adapt the route and focus to your interests, time and mobility." },
      { question: "How long do private castle tours last?", answer: "Typically 2.5 to 3.5 hours, but private tours can often be adjusted. Confirm duration and options with the operator." },
    ],
  },
  {
    categorySlug: "castle-and-palace-tours-in-prague",
    slug: "best-castle-city-combo-tours",
    title: "Best Castle and city combo tours (Old Town & Charles Bridge)",
    description: "Compare Prague Castle tours that also cover Old Town and Charles Bridge. See the castle and the classic city route in one tour.",
    picks: [
      { slug: "prague-walking-tour-old-town-charles-bridge-castle", whyWePickIt: "This walking tour follows the classic Prague route from Old Town across Charles Bridge to Prague Castle. You'll see the Astronomical Clock, Old Town Square, the bridge and the castle complex with a professional guide. Ideal for first-time visitors who want the iconic sequence in one tour.", bestFor: ["First-time visitors who want the classic Prague route", "Anyone who wants Old Town, Charles Bridge and the castle in one tour", "Travelers who like a full half-day walking experience", "Photography-minded visitors who want the iconic viewpoints"] },
      { slug: "prague-afternoon-walking-tour-including-castle", whyWePickIt: "This 3-hour afternoon walking tour takes in Prague Castle and the historic centre. You'll see the castle complex, St Vitus Cathedral, Golden Lane and key viewpoints, then descend through Malá Strana. A concise way to see the castle and main sights in one afternoon.", bestFor: ["Visitors who want the castle and historic centre in one afternoon", "Afternoon starters who prefer a 3-hour tour", "Travelers who want a guided overview of the castle and its history", "Anyone looking for a well-paced walk with photo stops"] },
    ],
    intro: "Castle and city combo tours combine Prague Castle with the historic centre—Old Town, Charles Bridge and often Malá Strana. You get the classic Prague walking route plus the castle in one half-day experience. Ideal if you want to see the main sights and the castle without booking two separate tours.",
    whyBlock: { title: "Why choose a Castle and city combo tour?", content: "A combo tour lets you see the castle and the iconic city route (Old Town, Charles Bridge) in one go, with one guide and one booking. You'll typically walk from Old Town to the castle (or the reverse), so you get orientation and the castle in a single, efficient visit." },
    whatToExpect: ["Meet your guide in Old Town or at a central location.", "Walk through Old Town (Astronomical Clock, Old Town Square) and toward the river.", "Cross Charles Bridge with stories and photo stops; continue to Prague Castle.", "Explore the castle complex with your guide; then the tour ends at the castle or back in the centre."],
    faqs: [
      { question: "What are the best Castle and city combo tours in Prague?", answer: "The best combo tours include the Prague walking tour of Old Town, Charles Bridge and Prague Castle and the 3-hour afternoon walking tour including Prague Castle. Both cover the castle and the historic centre; compare duration and start time (morning vs afternoon)." },
      { question: "Is Prague Castle entry included?", answer: "It depends on the tour. Some combo tours include castle admission; others may view from outside or include only certain areas. Check the product description when you book." },
      { question: "How long are Castle and city combo tours?", answer: "Typically 3 to 4 hours. The afternoon tour is around 3 hours; the full Old Town–Charles Bridge–Castle route can be longer." },
      { question: "Where do combo tours start?", answer: "Most start in or near Old Town Square. Your booking confirmation will give the exact meeting point." },
      { question: "Is there a lot of walking?", answer: "Yes. You walk from Old Town to the castle (and possibly back), and the castle involves steps. Comfortable shoes are essential." },
    ],
  },
  {
    categorySlug: "castle-and-palace-tours-in-prague",
    slug: "best-complete-castle-experiences",
    title: "Best complete Prague Castle experiences",
    description: "Compare comprehensive Prague Castle tours that cover the full castle complex. Complete Castle and One Tour To Rule Them All.",
    picks: [
      { slug: "complete-castle-tour", whyWePickIt: "The Complete Castle tour takes you through the full Prague Castle complex with a professional guide. You'll see St Vitus Cathedral, the Old Royal Palace, Golden Lane and other key areas with stories and context. A thorough way to see the castle in one visit.", bestFor: ["Visitors who want a comprehensive castle tour in one go", "Anyone who wants to see all the main areas with a guide", "Travelers who like a complete overview rather than a short visit", "Guests who want to make the most of one castle visit"] },
      { slug: "one-tour-to-rule-them-all", whyWePickIt: "One Tour To Rule Them All is a comprehensive tour that brings together Prague Castle and the city's key highlights. You'll explore the castle complex and the historic centre with a professional guide in one experience. Ideal for visitors who want a single, in-depth tour.", bestFor: ["Visitors who want one tour that covers the castle and key highlights", "Travelers with limited time who want maximum coverage", "Anyone who likes a comprehensive, full-format experience", "First-timers who want the castle and city in one go"] },
    ],
    intro: "Complete Prague Castle experiences cover the full castle complex—and sometimes the city too—in one tour. You'll see St Vitus Cathedral, the Old Royal Palace, Golden Lane and other key areas with a professional guide, with no need to pick and choose. Ideal if you want a thorough, one-stop castle visit.",
    whyBlock: { title: "Why choose a complete Castle experience?", content: "A complete castle tour takes you through all the main areas with one guide and one booking. You don't have to plan the route or worry about missing key spots. Some products also include city highlights for a full half-day or day experience." },
    whatToExpect: ["Meet your guide at the agreed location; get an overview of the tour.", "Enter the castle and visit St Vitus Cathedral, the Old Royal Palace and Golden Lane (and other included areas).", "Your guide explains the history and significance of each area.", "The tour ends at the castle or in the city; your guide can suggest what to do next."],
    faqs: [
      { question: "What are the best complete Prague Castle experiences?", answer: "The best complete experiences include the Complete Castle tour and One Tour To Rule Them All. The first focuses on the full castle complex; the second often includes castle and city highlights. Compare duration and itinerary." },
      { question: "What is included in a complete Castle tour?", answer: "Typically the main castle circuit: St Vitus Cathedral, Old Royal Palace, Golden Lane and related spaces. Exact inclusions are on each product page. One Tour To Rule Them All may also include Old Town and other sights." },
      { question: "How long do complete Castle tours last?", answer: "Usually around 3 to 3.5 hours for the castle-only complete tour; combo experiences can run longer. Check the operator's booking page." },
      { question: "Is this a group or private tour?", answer: "These are typically group tours. Group size varies by operator. For a private experience, look for a dedicated private castle tour." },
      { question: "Where do we meet?", answer: "The meeting point is in your booking confirmation, often near the castle or in the city centre." },
    ],
  },
  {
    categorySlug: "castle-and-palace-tours-in-prague",
    slug: "best-castle-tours-first-time-visitors",
    title: "Best Prague Castle tours for first-time visitors",
    description: "Compare the best Prague Castle tours for first-time visitors. Guided tours with admission, clear commentary and the main highlights.",
    picks: [
      { slug: "prague-castle-walking-tour-admission-tickets", whyWePickIt: "This Prague Castle walking tour includes admission tickets and a professional guide. You'll see St Vitus Cathedral, the Old Royal Palace, Golden Lane and the castle grounds with commentary on the history. Ideal for first-time visitors who want both entry and context.", bestFor: ["First-time visitors who want a guided castle visit with tickets included", "Travelers who prefer not to queue for admission", "Anyone who wants to understand the castle's history with a guide", "Guests who want St Vitus Cathedral and key areas in one tour"] },
      { slug: "prague-castle-interiors-tour-english-guide-entry", whyWePickIt: "This tour focuses on the castle interiors with an English-speaking guide and includes your entry ticket. You'll go inside St Vitus Cathedral, the Old Royal Palace and other key spaces. A strong choice for first-timers who want clear, English commentary.", bestFor: ["Visitors who want a guided tour of the castle interiors in English", "Anyone who wants entry and expert commentary in one package", "Travelers interested in the history and art of the cathedral and palace", "First-time visitors who prefer a structured, informative tour"] },
      { slug: "one-tour-to-rule-them-all", whyWePickIt: "One Tour To Rule Them All brings together Prague Castle and the city's key highlights in one comprehensive experience. Ideal for first-time visitors who want the castle and the main sights in one go.", bestFor: ["Visitors who want one tour that covers the castle and key highlights", "Travelers with limited time who want maximum coverage", "First-timers who want the castle and city in one go", "Anyone who likes a comprehensive, full-format experience"] },
    ],
    intro: "First-time visitors to Prague often want to see the castle with a guide and without the hassle of queuing. The best castle tours for first-timers include admission, a professional guide and the main highlights—St Vitus Cathedral, the Old Royal Palace and Golden Lane. Choose a guided tour for context or a comprehensive combo if you want the castle and the city in one day.",
    whyBlock: { title: "Why first-time visitors should take a Castle tour", content: "The castle is large and can be overwhelming. A guided tour with admission included means you see the key areas in a logical order and understand the history. You also skip the ticket queue. Many first-timers prefer a 2.5–3.5 hour guided tour that covers the main circuit." },
    whatToExpect: ["Meet your guide at the designated location; receive your admission or enter with the group.", "Enter the castle and visit St Vitus Cathedral, the Old Royal Palace and Golden Lane.", "Your guide explains the history, architecture and significance of each area.", "The tour ends at the castle or in the city; your guide can suggest what to do next."],
    faqs: [
      { question: "What are the best Prague Castle tours for first-time visitors?", answer: "The best options for first-timers include the Prague Castle walking tour with admission tickets, the Prague Castle interiors tour with English guide and entry, and One Tour To Rule Them All. All include entry and a professional guide; choose based on whether you want castle-only or castle plus city." },
      { question: "Should first-time visitors take a guided tour or use a ticket only?", answer: "A guided tour is recommended for first-time visitors so you get context and don't miss key areas. Skip-the-line tickets with an audio guide are a good alternative if you prefer to set your own pace." },
      { question: "Is Prague Castle admission included?", answer: "Yes for these recommended tours. You don't need to buy a separate ticket or queue at the castle box office." },
      { question: "How long should first-time visitors spend at the castle?", answer: "Allow at least 2.5 to 3.5 hours for a guided tour of the main circuit. If you're doing a combo tour that includes the city, expect half a day or more." },
      { question: "Where do these tours start?", answer: "Meeting points vary; often near the castle or in Old Town. Your booking confirmation will include the exact location and time." },
    ],
  },
  // ————— Prague beer tour guides —————
  {
    categorySlug: "beer-tours-in-prague",
    slug: "best-pub-crawls-historic-pub-tours",
    title: "Best pub crawls and historic pub tours in Prague",
    description: "Compare the best pub crawls and historic pub tours in Prague. Pubs of Prague, hidden beer gems and local pub walks with drinks included.",
    picks: [
      { slug: "pubs-prague-historic-tour-drinks-included", whyWePickIt: "Explore the historic pubs of Prague with drinks included. You'll visit several classic pubs, taste Czech beer and hear the stories behind them. A perfect introduction to Prague's pub culture and brewing heritage.", bestFor: ["Visitors who want a historic pub tour with drinks included", "Beer lovers interested in Prague's pub heritage", "Anyone who wants to visit several pubs with a guide", "Guests who prefer a structured tour over a DIY pub crawl"] },
      { slug: "hidden-beer-gems-old-prague", whyWePickIt: "Discover hidden beer gems in Prague's Old Town. You'll visit local pubs and spots that many tourists miss, taste Czech beer and learn about Prague's brewing tradition. Great for beer lovers who want authentic, off-the-beaten-path venues.", bestFor: ["Beer lovers who want to discover local pubs off the beaten path", "Visitors who prefer smaller, authentic venues", "Anyone interested in Czech beer culture and history", "Guests who like a guided pub crawl with commentary"] },
      { slug: "small-group-local-pubs-czech-dinner", whyWePickIt: "Small-group walking tour of local Prague pubs followed by a traditional Czech dinner. You'll visit several pubs for beer and atmosphere, then sit down for a full dinner. Pubs and a meal in one experience.", bestFor: ["Visitors who want pubs and a full dinner in one experience", "Small groups who prefer an intimate tour", "Anyone who wants Czech beer and traditional food", "Guests who like a structured evening with a guide"] },
    ],
    intro: "Prague's pub culture is legendary. Pub crawls and historic pub tours take you to classic and hidden venues with a guide, so you taste Czech beer and hear the stories without planning the route yourself. Many tours include drinks at each stop; some add a Czech dinner. Whether you want a classic historic pub tour or a hidden-gems walk, these options deliver.",
    whyBlock: { title: "Why choose a pub crawl or historic pub tour?", content: "A guided pub tour means you don't have to guess which pubs to hit or how much to drink at each. The guide knows the venues, the history and the pours. Drinks are often included, so you can relax and enjoy. Historic tours focus on classic and characterful pubs; hidden-gem tours take you to lesser-known spots." },
    whatToExpect: ["Meet your guide at the designated location in central Prague.", "Walk to several pubs, with a drink and commentary at each.", "Hear stories about beer, brewing and local culture.", "The tour ends at a central spot; some tours include a sit-down dinner."],
    faqs: [
      { question: "What are the best pub crawls and historic pub tours in Prague?", answer: "The best include the Pubs of Prague historic tour with drinks included, Hidden Beer Gems of Old Prague, and the small-group local pubs tour with Czech dinner. All visit multiple pubs with a guide; the dinner tour adds a full meal. Compare drinks included and group size." },
      { question: "Are drinks included on pub tours?", answer: "Many pub tours include a set number of beers or one drink per stop. Check the tour description—some include all drinks; others may have a limit. Historic and hidden-gem tours typically specify what's included." },
      { question: "How long do pub crawls in Prague last?", answer: "Typically 2.5 to 4 hours. Tours with dinner run longer. Check the booking page for exact duration." },
      { question: "Is food included?", answer: "Some pub tours are drinks only; others include snacks or a full Czech dinner. The small-group local pubs and Czech dinner tour includes a traditional dinner." },
      { question: "What's the difference between a pub crawl and a historic pub tour?", answer: "Both visit several pubs with a guide. Historic pub tours emphasise the history and character of the venues; pub crawls can be more social and party-oriented. The tours we list lean toward guided, cultural experiences." },
      { question: "Where do pub tours start?", answer: "Usually in or near Old Town. Your booking confirmation will include the exact meeting point and time." },
      { question: "What is the legal drinking age?", answer: "The legal age for alcohol in the Czech Republic is 18. You may be asked for ID." },
    ],
  },
  {
    categorySlug: "beer-tours-in-prague",
    slug: "best-beer-tasting-experiences",
    title: "Best beer tasting experiences in Prague",
    description: "Compare seated beer tastings and tasting experiences in Prague. Czech beer with cheese, appetizers or snacks in a relaxed setting.",
    picks: [
      { slug: "czech-beer-tasting-cheese-crackers", whyWePickIt: "Sample Czech beers paired with cheese and crackers in a relaxed setting. You'll try several beers with complementary snacks and learn about the styles and flavours. Ideal for a focused tasting rather than a pub crawl.", bestFor: ["Beer lovers who want a structured tasting experience", "Visitors who prefer a seated tasting over a walking tour", "Anyone interested in Czech beer styles and pairings", "Guests who want to learn about beer in a small group"] },
      { slug: "prague-mini-breweries-beer-tour", whyWePickIt: "Visit Prague's mini breweries and brew pubs with Czech appetizers. Taste craft and traditional beer at each stop and enjoy local snacks. A great way to discover the city's smaller brewing scene.", bestFor: ["Craft beer fans who want to visit small breweries", "Visitors interested in Prague's brewing scene", "Anyone who wants beer and appetizers in one tour", "Guests who prefer smaller, characterful venues"] },
      { slug: "beer-museum-tour-bottle-your-own-beer", whyWePickIt: "Beer Museum guided tour and bottle your own beer. Learn about Czech brewing history and take home your own labelled bottle. A hands-on experience for beer enthusiasts.", bestFor: ["Beer enthusiasts who want brewing history", "Visitors who want a hands-on experience", "Anyone interested in Czech beer heritage", "Guests who want a souvenir bottle to take home"] },
    ],
    intro: "Beer tasting experiences in Prague range from seated tastings with cheese and crackers to mini brewery tours with appetizers and the Beer Museum with a bottle-your-own experience. These are more focused than a pub crawl: you'll taste several beers, often with food, and learn about styles and culture in a relaxed setting.",
    whyBlock: { title: "Why choose a beer tasting experience?", content: "A tasting experience lets you focus on the beer—styles, flavours, pairings—without walking between venues. Seated tastings are ideal if you prefer to stay in one place. Mini brewery tours add the chance to see where the beer is made. The Beer Museum adds history and a souvenir bottle." },
    whatToExpect: ["Meet at the tasting venue or starting point.", "Taste several Czech beers, often with cheese, crackers or appetizers.", "Learn about the beers and pairings from your host or guide.", "The experience ends at the venue; some tours visit multiple stops."],
    faqs: [
      { question: "What are the best beer tasting experiences in Prague?", answer: "The best include Czech beer tasting with cheese and crackers, the Prague mini breweries beer tour with Czech appetizers, and the Beer Museum guided tour with bottle-your-own. Compare seated vs walking, and how much food is included." },
      { question: "How many beers do we taste?", answer: "It varies by experience; often four to six different beers or samples. Check the product description for the number and sizes." },
      { question: "Is food included?", answer: "Many tastings include cheese and crackers, appetizers or snacks. Mini brewery tours often include Czech appetizers; the Beer Museum may include a tasting. Check the description." },
      { question: "How long do beer tastings last?", answer: "Seated tastings are often 1.5–2 hours; mini brewery tours 2.5–3.5 hours. The Beer Museum experience is typically 1.5–2.5 hours. Check the booking page." },
      { question: "Do I need to be a beer expert?", answer: "No. Tastings are for everyone; the host or guide will explain the beers and how to taste them." },
      { question: "Where do tastings take place?", answer: "At a dedicated tasting room, pub or brewery. The address is in your booking confirmation." },
      { question: "Can I buy beer to take home?", answer: "At the Beer Museum you bottle your own to take home. Other venues may have a shop; ask on the day." },
    ],
  },
  {
    categorySlug: "beer-tours-in-prague",
    slug: "best-beer-food-combo-tours",
    title: "Best beer and food combo tours in Prague",
    description: "Compare beer and food combo tours in Prague. Taste Czech beer with local food, food tastings and dinner tours.",
    picks: [
      { slug: "prague-city-food-tasting-walking-tour", whyWePickIt: "Combine food and sightseeing on this guided Prague city food tasting walking tour. Sample local specialities, visit food spots and walk through the city. Ideal for visitors who want to taste Czech cuisine while seeing the sights.", bestFor: ["Food lovers who want to taste local specialities", "Visitors who want to combine food and sightseeing", "Anyone interested in Czech cuisine and culture", "Guests who prefer a guided food experience"] },
      { slug: "small-group-local-pubs-czech-dinner", whyWePickIt: "Small-group local pubs walking tour and traditional Czech dinner. Visit several pubs for beer, then sit down for a full dinner. Pubs and a meal in one experience.", bestFor: ["Visitors who want pubs and a full dinner in one", "Small groups who prefer an intimate tour", "Anyone who wants Czech beer and traditional food", "Guests who like a structured evening with a guide"] },
      { slug: "prague-foodie-tour", whyWePickIt: "The Prague Foodie Tour takes you to local food and drink spots. Taste Czech specialities and often a beer or drink, with a guide who knows the scene. A curated taste of Prague for food-loving visitors.", bestFor: ["Food lovers who want a guided food experience", "Visitors who want a variety of local dishes", "Anyone interested in Czech cuisine and drink", "Guests who prefer a structured food tour"] },
    ],
    intro: "Beer and food combo tours in Prague let you taste Czech cuisine and beer in one experience. Options include food tasting walks that may include a beer stop, pub tours with a full Czech dinner, and dedicated foodie tours with drink. Ideal if you want to eat and drink like a local with a guide.",
    whyBlock: { title: "Why choose a beer and food combo tour?", content: "Combining beer and food means you get the full Czech experience in one booking. You'll try local dishes and beer (or other drinks) without organising multiple reservations. Tours range from light tastings to a full dinner; choose based on how much you want to eat and drink." },
    whatToExpect: ["Meet your guide at the designated location.", "Visit several stops for food and often beer or another drink.", "Your guide explains the dishes and the role of beer in Czech culture.", "The tour ends in a central location; your guide can recommend more places."],
    faqs: [
      { question: "What are the best beer and food combo tours in Prague?", answer: "The best include the Prague city food tasting walking tour, the small-group local pubs tour with Czech dinner, and the Prague Foodie Tour. The first focuses on food with possible beer; the second is pubs plus dinner; the third is a curated food-and-drink experience." },
      { question: "Is beer included on food tours?", answer: "Some food tours include a beer or other drink at one or more stops; others are food only. Check the product description for what's included." },
      { question: "Is it enough for a meal?", answer: "Tasting tours can amount to a light meal or substantial snacks; dinner tours include a full meal. Check the description." },
      { question: "Can dietary requirements be accommodated?", answer: "Contact the operator before booking if you have allergies or dietary restrictions. Many can adapt with advance notice." },
      { question: "How long do beer and food combo tours last?", answer: "Typically 3 to 4 hours. Dinner tours may run 3.5–4.5 hours. Check the booking page." },
      { question: "Where do these tours start?", answer: "Usually in or near Old Town. Your booking confirmation will have the exact meeting point." },
      { question: "Are these tours suitable for vegetarians?", answer: "Czech cuisine often includes meat; some tours can accommodate vegetarians with advance notice. Contact the operator before booking." },
    ],
  },
  {
    categorySlug: "beer-tours-in-prague",
    slug: "best-small-group-beer-tours",
    title: "Best small group beer tours in Prague",
    description: "Compare small group beer tours in Prague. Intimate pub walks and tastings with a limited group size.",
    picks: [
      { slug: "small-group-local-pubs-czech-dinner", whyWePickIt: "Small-group walking tour of local Prague pubs followed by a traditional Czech dinner. Limited group size means more time with the guide and a more intimate evening. Pubs and dinner in one.", bestFor: ["Visitors who want pubs and a full dinner in one experience", "Small groups who prefer an intimate tour", "Anyone who wants Czech beer and traditional food", "Guests who like a structured evening with a guide"] },
      { slug: "hidden-beer-gems-old-prague", whyWePickIt: "Discover hidden beer gems in Old Prague with a guide. You'll visit local pubs that many tourists miss. The tour often keeps groups small so you can ask questions and enjoy a more personal experience.", bestFor: ["Beer lovers who want to discover local pubs off the beaten path", "Visitors who prefer smaller, authentic venues", "Anyone interested in Czech beer culture", "Guests who like a guided pub crawl with commentary"] },
    ],
    intro: "Small group beer tours in Prague limit the number of guests so you get more attention from the guide and a more relaxed atmosphere. Options include pub walks with dinner and hidden-gem tours. Ideal if you prefer not to be in a large crowd and want to ask questions and chat along the way.",
    whyBlock: { title: "Why choose a small group beer tour?", content: "A small group means you can hear the guide clearly, ask questions and move between venues without waiting for a big crowd. It also feels more like a night out with friends. Many small-group tours include drinks and some include a full dinner." },
    whatToExpect: ["Meet your guide and the small group at the agreed location.", "Visit several pubs or venues; group size is typically under 12.", "Enjoy beer and commentary (and dinner if included).", "The tour ends at a central location."],
    faqs: [
      { question: "What are the best small group beer tours in Prague?", answer: "The best include the small-group local pubs tour with Czech dinner and the Hidden Beer Gems of Old Prague tour. Both keep the group small; the first adds a full dinner. Check the maximum group size on each product." },
      { question: "How many people are in a small group?", answer: "Group size varies by operator; often 10–12 or fewer. Check the tour description for the maximum." },
      { question: "Are drinks included?", answer: "Yes on both recommended tours; the dinner tour also includes a traditional Czech dinner. Check the description for the number of drinks." },
      { question: "How long do small group beer tours last?", answer: "Typically 2.5 to 4 hours. The dinner tour runs 3.5–4.5 hours. Check the booking page." },
      { question: "Where do we meet?", answer: "Meeting point is usually in or near Old Town. Your booking confirmation will have the exact location." },
      { question: "Can we book a private beer tour?", answer: "Some operators offer private tours for an extra fee. Check the product page or contact the operator." },
      { question: "Is the tour in English?", answer: "Most beer tours in Prague are offered in English. Check the product page for language options." },
    ],
  },
  {
    categorySlug: "beer-tours-in-prague",
    slug: "best-beer-museum-brewery-tours",
    title: "Best beer museum and brewery tours in Prague",
    description: "Compare the Beer Museum and brewery tours in Prague. Guided visits, tastings and bottle-your-own experiences.",
    picks: [
      { slug: "beer-museum-tour-bottle-your-own-beer", whyWePickIt: "Beer Museum guided tour and bottle your own beer. Learn about Czech brewing history, see the museum's collection and create your own labelled bottle to take home. A hands-on experience for beer enthusiasts.", bestFor: ["Beer enthusiasts who want brewing history", "Visitors who want a hands-on experience", "Anyone interested in Czech beer heritage", "Guests who want a souvenir bottle to take home"] },
      { slug: "prague-mini-breweries-beer-tour", whyWePickIt: "Visit Prague's mini breweries and brew pubs with Czech appetizers. Taste craft and traditional beer at each stop. A great way to discover the city's smaller brewing scene and see where the beer is made.", bestFor: ["Craft beer fans who want to visit small breweries", "Visitors interested in Prague's brewing scene", "Anyone who wants beer and appetizers in one tour", "Guests who prefer smaller, characterful venues"] },
    ],
    intro: "Beer museum and brewery tours in Prague focus on the story and production of beer. The Beer Museum offers a guided tour and a bottle-your-own experience; mini brewery tours take you to small breweries or brew pubs to taste their beer and often see the kit. Ideal for visitors who want to learn as well as taste.",
    whyBlock: { title: "Why visit a beer museum or brewery?", content: "A beer museum teaches you about Czech brewing history and culture in one place; the bottle-your-own add-on gives you a unique souvenir. Brewery tours let you see where beer is made and taste it fresh. Both are more focused on education and production than a standard pub crawl." },
    whatToExpect: ["Meet at the museum or first brewery.", "Guided tour of the exhibits or brewery; taste beer at each stop.", "At the Beer Museum: bottle your own beer and create a label.", "The experience ends at the venue; you take your bottle home from the museum."],
    faqs: [
      { question: "What are the best beer museum and brewery tours in Prague?", answer: "The best include the Beer Museum guided tour with bottle-your-own beer and the Prague mini breweries beer tour with Czech appetizers. The first is museum + hands-on; the second visits several small breweries with tastings and food." },
      { question: "Do I take the bottle home from the Beer Museum?", answer: "Yes. The bottle-your-own experience typically includes a bottle you fill and label yourself to take home. Confirm with the operator when you book." },
      { question: "How long is the Beer Museum tour?", answer: "Usually 1.5 to 2.5 hours including the tour and bottling. Check the booking page." },
      { question: "What are mini breweries?", answer: "Small-scale breweries or brew pubs that produce beer on site or in small batches. The tour visits these rather than large commercial breweries." },
      { question: "Is food included?", answer: "The mini breweries tour includes Czech appetizers. The Beer Museum may include a tasting; check the description." },
      { question: "Where is the Beer Museum?", answer: "The museum is in Prague; the exact address and meeting point are in your booking confirmation." },
      { question: "Can non-drinkers join?", answer: "The museum is about history and culture; the bottling involves beer. Non-drinkers may still enjoy the tour; contact the operator to ask about options." },
    ],
  },
  {
    categorySlug: "beer-tours-in-prague",
    slug: "best-old-town-castle-beer-tours",
    title: "Best Old Town and castle area beer tours in Prague",
    description: "Compare beer tours in Prague's Old Town and castle area. Sightseeing and beer stops in the historic centre and Malá Strana.",
    picks: [
      { slug: "one-prague-tour-old-town-road", whyWePickIt: "One Prague Tour – Old Town Road combines exploring the Old Town with beer stops along the way. Walk through historic streets, see key sights and stop at pubs for Czech beer. A relaxed way to see the centre and taste local beer in one tour.", bestFor: ["Visitors who want sightseeing and beer in one tour", "Anyone who wants to see Old Town with pub stops", "Guests who like a relaxed, social tour", "First-timers who want orientation and beer culture"] },
      { slug: "castle-side-beer-tour", whyWePickIt: "Discover the castle side of Prague on this beer tour. Explore the area around Prague Castle and Malá Strana, stopping at pubs for Czech beer. A great way to see the lesser town and its drinking culture with a guide.", bestFor: ["Visitors who want to explore the castle area with beer", "Beer lovers who want Malá Strana's pubs", "Anyone who likes a mix of sightseeing and beer stops", "Guests who want to get off the main tourist track"] },
      { slug: "hidden-beer-gems-old-prague", whyWePickIt: "Hidden Beer Gems of Old Prague takes you to local pubs in the Old Town that many tourists miss. Taste Czech beer and learn about Prague's brewing tradition. Ideal for beer lovers who want authentic spots in the historic centre.", bestFor: ["Beer lovers who want local pubs off the beaten path", "Visitors who prefer smaller, authentic venues in Old Town", "Anyone interested in Czech beer culture and history", "Guests who like a guided pub crawl with commentary"] },
    ],
    intro: "Beer tours in the Old Town and castle area combine sightseeing with pub stops. You'll walk through the historic centre or Malá Strana and stop at pubs and bars for Czech beer. Options include the Old Town Road tour, the Castle Side beer tour and hidden beer gems in the Old Town. Ideal if you want to see the sights and taste beer in one go.",
    whyBlock: { title: "Why choose an Old Town or castle area beer tour?", content: "These tours let you see the historic centre or the castle side of Prague while stopping for beer along the way. You get orientation and culture in one experience, with a guide to lead the route and explain the venues. Good for first-time visitors who want to combine sightseeing and beer." },
    whatToExpect: ["Meet your guide in or near Old Town or the castle area.", "Walk through the district, passing sights and stopping at pubs for beer.", "Your guide shares stories about the area and the beer.", "The tour ends at a central location."],
    faqs: [
      { question: "What are the best Old Town and castle area beer tours?", answer: "The best include One Prague Tour – Old Town Road, the Castle Side beer tour, and Hidden Beer Gems of Old Prague. The first focuses on Old Town; the second on the castle area and Malá Strana; the third on hidden pubs in the Old Town." },
      { question: "Do we go inside Prague Castle?", answer: "The Castle Side beer tour focuses on the area and pubs rather than castle interiors. Check the description to confirm whether castle entry is included." },
      { question: "How many beer stops are there?", answer: "The number of stops varies by tour. Check the product description for how many pubs you visit and how many drinks are included." },
      { question: "How long do these tours last?", answer: "Typically 2.5 to 3.5 hours. Check the booking page for exact duration." },
      { question: "Where do they start?", answer: "Old Town tours usually start in or near Old Town; the Castle Side tour starts near the castle or Malá Strana. Your confirmation will have the exact meeting point." },
      { question: "Is this mainly sightseeing or mainly beer?", answer: "It's a mix: you walk through the area and stop for beer. The balance depends on the operator; check the description." },
      { question: "Are drinks included?", answer: "Most of these tours include beer at each stop. Check the product description for exact inclusions." },
    ],
  },
  // ————— Day trips from Prague guides —————
  {
    categorySlug: "day-trips-from-prague",
    slug: "best-cesky-krumlov-day-trips",
    title: "Best Český Krumlov day trips from Prague",
    description: "Compare Český Krumlov day trips from Prague. UNESCO town, castle and round-trip transport. Full-day and small-group options.",
    picks: [
      { slug: "cesky-krumlov-full-day-tour-from-prague", whyWePickIt: "Full-day tour from Prague to Český Krumlov and back. You'll explore the UNESCO-listed town and castle with a guide or free time, with everything arranged—transport, commentary and return. One of the most popular day trips from the capital.", bestFor: ["First-time visitors who want to see Český Krumlov in one day", "Travellers who prefer not to drive or organise transport", "Anyone who wants a guided introduction to the town and castle", "Guests who like a full-day outing with everything arranged"] },
      { slug: "trip-cesky-krumlov-from-prague", whyWePickIt: "Straightforward trip from Prague to Český Krumlov with transport included. Spend the day in the UNESCO old town and castle; format may be guided or free time depending on the operator. Ideal if you want a simple, well-organised day trip.", bestFor: ["Visitors who want a simple Prague–Český Krumlov day trip", "Travellers who prefer not to drive", "Anyone who wants to see the castle and old town in one day", "Guests who like flexibility in how they spend their time in town"] },
    ],
    intro: "Český Krumlov is one of the most popular day trips from Prague. The UNESCO-listed town and castle sit about 2–2.5 hours south of the capital. Organised day trips include round-trip transport and either a guided visit or free time (or both). Choose a full-day tour for a complete package or a transport-plus-free-time option if you prefer to explore at your own pace.",
    whyBlock: { title: "Why take a day trip to Český Krumlov?", content: "Český Krumlov is too far for a quick visit without a car. A day trip from Prague takes care of transport and often a guide, so you can focus on the castle, the old town and the Vltava. Full-day tours typically include enough time to see the main sights and have lunch in town." },
    whatToExpect: ["Meet at the designated point in Prague and board the coach.", "Travel to Český Krumlov (about 2–2.5 hours).", "Explore the town and castle—guided, free time, or a mix.", "Return to Prague in the evening."],
    faqs: [
      { question: "What are the best Český Krumlov day trips from Prague?", answer: "The best include the full-day tour from Prague and back (guided or with free time) and the straightforward trip to Český Krumlov with transport. Compare whether you want a guided tour of the castle and town or more free time." },
      { question: "How long is the journey?", answer: "About 2 to 2.5 hours each way by coach. Total day length is usually 10–12 hours including the visit." },
      { question: "Is castle admission included?", answer: "It depends on the tour. Some include castle entry or a guided castle visit; others leave it as optional. Check the product description." },
      { question: "Do we get free time in town?", answer: "Many tours include a mix of guided sightseeing and free time for lunch and exploring. Check the itinerary on the booking page." },
      { question: "Where do we meet in Prague?", answer: "Meeting point is usually in the city centre. Your booking confirmation will include the exact location and departure time." },
      { question: "What is the best time of year for a Český Krumlov day trip?", answer: "Spring to autumn (April–October) are popular; summer can be busy. Winter visits are possible and the town is quieter; check seasonal availability." },
      { question: "Can we do Český Krumlov on our own by public transport?", answer: "Yes, but it takes planning (bus or train). Day trips are easier if you want everything arranged and a guaranteed return to Prague." },
    ],
  },
  {
    categorySlug: "day-trips-from-prague",
    slug: "best-kutna-hora-day-trips",
    title: "Best Kutná Hora day trips from Prague",
    description: "Compare Kutná Hora day trips from Prague. Bone church (Sedlec Ossuary), St Barbara's Cathedral and UNESCO town. Bus and guided options.",
    picks: [
      { slug: "day-trip-kutna-hora-bus-from-prague", whyWePickIt: "Day trip to Kutná Hora by bus from Prague. Visit the Sedlec Ossuary (bone church), St Barbara's Cathedral and the historic centre with a guide. A compact, popular day trip for history and architecture.", bestFor: ["Visitors who want to see the bone church and Kutná Hora in one day", "History and architecture enthusiasts", "Travellers who prefer bus transport from Prague", "Guests who like a half-day or full-day organised trip"] },
      { slug: "kutna-hora-day-trip-from-prague", whyWePickIt: "Kutná Hora day trip from Prague with guided visit to the UNESCO town, Sedlec Ossuary and St Barbara's. A straightforward way to see the bone church and the cathedral in one day.", bestFor: ["Visitors who want to see Kutná Hora and the bone church in one day", "History and architecture lovers", "Travellers who prefer an organised day trip from Prague", "Guests who like a half-day or full-day cultural trip"] },
    ],
    intro: "Kutná Hora is one of the easiest day trips from Prague: about 1–1.5 hours by road. The main draws are the Sedlec Ossuary (bone church) and St Barbara's Cathedral, plus the UNESCO historic centre. Day trips by bus or coach include transport and usually a guided visit. Shorter than a Český Krumlov day, so good if you want a half-day or full-day without a long drive.",
    whyBlock: { title: "Why take a day trip to Kutná Hora?", content: "Kutná Hora packs the bone church, a stunning cathedral and a historic silver-mining town into a compact visit. Day trips from Prague handle transport and guides, so you don't have to worry about timetables or driving. Ideal for history and architecture lovers who want a rewarding day without a long journey." },
    whatToExpect: ["Meet in Prague and board the bus or coach.", "Travel to Kutná Hora (about 1–1.5 hours).", "Visit the Sedlec Ossuary and St Barbara's Cathedral with your guide.", "Return to Prague."],
    faqs: [
      { question: "What are the best Kutná Hora day trips from Prague?", answer: "The best include the day trip by bus (with bone church, St Barbara's and historic centre) and the Kutná Hora day trip with guided visit. Both cover the main sights; compare transport type and exact inclusions." },
      { question: "Is the bone church (Sedlec Ossuary) included?", answer: "Yes on most Kutná Hora day trips. Check the product description to confirm." },
      { question: "How long is the journey?", answer: "About 1 to 1.5 hours each way. Total day is typically 6–8 hours." },
      { question: "Is admission to St Barbara's included?", answer: "It depends on the tour. Check the product description for which admissions are included." },
      { question: "Where do we meet in Prague?", answer: "Meeting point is usually in the city centre. Your booking confirmation will have the exact location and time." },
      { question: "Is there a lot of walking?", answer: "Moderate walking in town and at the sights. Wear comfortable shoes. Contact the operator if you have mobility concerns." },
      { question: "Is lunch included?", answer: "Often not; you can eat in Kutná Hora. Check the tour description." },
    ],
  },
  {
    categorySlug: "day-trips-from-prague",
    slug: "best-bohemian-saxon-switzerland-day-trips",
    title: "Best Bohemian & Saxon Switzerland day trips from Prague",
    description: "Compare Bohemian and Saxon Switzerland day trips from Prague. National parks, Pravčická Gate, sandstone formations and hiking.",
    picks: [
      { slug: "bohemian-switzerland-national-park-day-trip", whyWePickIt: "Small-group Bohemian Switzerland National Park day trip from Prague. Visit Pravčická Gate, gorges and viewpoints with a limited group. Ideal for nature lovers who want a guided, small-group experience.", bestFor: ["Nature lovers and hikers who want to see Bohemian Switzerland", "Visitors who prefer small-group tours", "Anyone who wants to see Pravčická Gate and the national park", "Guests who like a mix of walking and stunning scenery"] },
      { slug: "best-two-countries-one-day-bohemian-saxon-switzerland", whyWePickIt: "The best of two countries in one day: Bohemian and Saxon Switzerland from Prague. Top highlights in both Czech and German parks—dramatic sandstone, gorges and viewpoints. Maximum scenery in one full-day trip.", bestFor: ["Visitors who want to see both Czech and German park highlights in one day", "Nature and photography enthusiasts", "Travellers who want a full-day scenic trip from Prague", "Guests who like a packed itinerary with iconic viewpoints"] },
      { slug: "bohemian-saxon-switzerland-tour-from-prague", whyWePickIt: "Bohemian and Saxon Switzerland tour from Prague. Full-day guided visit to both national parks—sandstone formations, gorges and scenic walks. Comprehensive day for nature lovers.", bestFor: ["Nature lovers who want to see both Bohemian and Saxon Switzerland", "Visitors who prefer a guided tour of the parks", "Anyone who wants sandstone formations and scenic walks", "Guests who like a full-day organised trip"] },
    ],
    intro: "Bohemian Switzerland (Czech side) and Saxon Switzerland (German side) are national parks known for dramatic sandstone formations, gorges and Pravčická Gate. Day trips from Prague take you there by coach or minibus; some cover one park, others both in one day. Bring a passport for trips that cross into Germany.",
    whyBlock: { title: "Why take a Bohemian or Saxon Switzerland day trip?", content: "The parks are a long drive from Prague; organised day trips handle transport and guides so you can focus on the views and the walking. Small-group options keep the group size down. Trips that do both countries in one day are full-on but show the best of the region." },
    whatToExpect: ["Meet in Prague and travel to the park region (about 2 hours).", "Walk and explore with your guide—Pravčická Gate, gorges, viewpoints.", "On two-country tours: cross into Germany for Saxon Switzerland.", "Return to Prague in the evening."],
    faqs: [
      { question: "What are the best Bohemian and Saxon Switzerland day trips?", answer: "The best include the small-group Bohemian Switzerland National Park day trip, the best of two countries in one day (Bohemian + Saxon), and the Bohemian and Saxon Switzerland tour. Compare one-park vs two-park and small-group vs standard coach." },
      { question: "Do I need a passport?", answer: "Yes for any trip that goes into Saxon Switzerland (Germany). Bring a valid passport or ID for the border." },
      { question: "How fit do I need to be?", answer: "Moderate walking on paths and possibly steps. Check the tour description; contact the operator if you have mobility concerns." },
      { question: "How long is the day?", answer: "Full-day; typically 10–12 hours from Prague including travel." },
      { question: "Is park entry included?", answer: "Most day trips include park entry or the relevant fees. Check the product description." },
      { question: "What should I bring?", answer: "Comfortable walking shoes, weather-appropriate clothing, water. Lunch may or may not be included—check the description." },
      { question: "What is Pravčická Gate?", answer: "Pravčická brána is Europe's largest natural sandstone arch and a symbol of Bohemian Switzerland. Most Bohemian Switzerland tours include a visit." },
    ],
  },
  {
    categorySlug: "day-trips-from-prague",
    slug: "best-karlovy-vary-day-trips",
    title: "Best Karlovy Vary day trips from Prague",
    description: "Compare Karlovy Vary day trips from Prague. Spa town, colonnades, hot springs and optional Moser factory visit.",
    picks: [
      { slug: "karlovy-vary-day-tour-from-prague", whyWePickIt: "Karlovy Vary day tour from Prague. Explore the spa town, colonnades and hot springs with a guide. Transport and commentary included. A relaxing, scenic day trip.", bestFor: ["Visitors who want to see Karlovy Vary in one day from Prague", "Spa and architecture enthusiasts", "Travellers who prefer not to drive", "Guests who like a relaxed, scenic day trip"] },
      { slug: "karlovy-vary-moser-factory-from-prague", whyWePickIt: "Trip to Karlovy Vary and the Moser glass factory from Prague. Spa town plus a visit to the famous glassworks. Ideal for anyone interested in spas and Czech craftsmanship.", bestFor: ["Visitors who want Karlovy Vary and the Moser factory in one day", "Anyone interested in Czech glass and craftsmanship", "Spa town and culture enthusiasts", "Guests who like a mix of town sightseeing and a factory visit"] },
    ],
    intro: "Karlovy Vary (Carlsbad) is the Czech Republic's most famous spa town, about 2 hours from Prague. Day trips include transport and a guided visit to the colonnades and hot springs; some add a visit to the Moser glass factory. A relaxed alternative to the national parks or Český Krumlov.",
    whyBlock: { title: "Why take a Karlovy Vary day trip?", content: "Karlovy Vary offers elegant architecture, thermal springs and a chance to taste the mineral water. Day trips from Prague take care of the drive and a guide, so you can enjoy the town without organising transport. The Moser factory add-on is ideal if you're interested in Czech glass." },
    whatToExpect: ["Meet in Prague and travel to Karlovy Vary (about 2 hours).", "Walk the colonnades and see the hot springs with your guide.", "Free time for lunch and possibly the Moser factory (if included).", "Return to Prague."],
    faqs: [
      { question: "What are the best Karlovy Vary day trips from Prague?", answer: "The best include the Karlovy Vary day tour (town and colonnades) and the trip that adds the Moser factory. Choose based on whether you want town only or town plus factory." },
      { question: "How long is the drive?", answer: "About 2 hours each way. Total day is typically 9–10 hours." },
      { question: "Can we taste the spring water?", answer: "Yes. You can typically taste the mineral water from the springs at the colonnades. Your guide will explain which springs to try." },
      { question: "What is the Moser factory?", answer: "Moser is a famous Czech luxury glass manufacturer. The factory visit usually includes a tour of production and/or the museum or showroom." },
      { question: "Where do we meet?", answer: "Meeting point is usually in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "Is lunch included?", answer: "Often not. You can eat in Karlovy Vary; the town has many cafés and restaurants." },
      { question: "Is the tour suitable for people with limited mobility?", answer: "There is walking on the colonnades and in the town. Contact the operator if you have specific mobility needs." },
    ],
  },
  {
    categorySlug: "day-trips-from-prague",
    slug: "best-small-group-day-trips-from-prague",
    title: "Best small-group day trips from Prague",
    description: "Compare small-group day trips from Prague. Český Krumlov, Bohemian Switzerland and more with limited group size.",
    picks: [
      { slug: "bohemian-switzerland-national-park-day-trip", whyWePickIt: "Small-group Bohemian Switzerland National Park day trip. Limited group size means more attention from the guide and a more flexible pace. Ideal for nature lovers who prefer not to be in a large coach group.", bestFor: ["Nature lovers who prefer small-group tours", "Visitors who want to see Pravčická Gate with a small group", "Anyone who likes a more intimate day trip", "Guests who want a flexible, guided experience"] },
      { slug: "trip-cesky-krumlov-from-prague", whyWePickIt: "Trip to Český Krumlov from Prague. Some operators run this with smaller groups or minibus transport. Good option if you want a more intimate day in the UNESCO town.", bestFor: ["Visitors who want a simple Český Krumlov day trip", "Travellers who prefer smaller groups when available", "Anyone who wants the castle and old town in one day", "Guests who like flexibility in town"] },
    ],
    intro: "Small-group day trips from Prague limit the number of guests so you get more time with the guide and a more relaxed atmosphere. Options include Bohemian Switzerland (often small-group by design) and some Český Krumlov trips run with minibuses. Ideal if you prefer not to be on a large coach.",
    whyBlock: { title: "Why choose a small-group day trip?", content: "A small group means you can hear the guide clearly, ask questions and often move at a slightly more flexible pace. Minibus transport can be more comfortable than a large coach. Popular for national park trips where the guide can adapt to the group." },
    whatToExpect: ["Meet in Prague and join a small group (often 8–15 people).", "Travel by minibus or small coach to the destination.", "Explore with your guide; more interaction and flexibility than on a large coach tour.", "Return to Prague in the evening."],
    faqs: [
      { question: "What are the best small-group day trips from Prague?", answer: "The best include the small-group Bohemian Switzerland National Park day trip and some Český Krumlov trips that use smaller groups or minibuses. Check each product for maximum group size." },
      { question: "How many people are in a small group?", answer: "Typically 8–15, depending on the operator. Check the tour description for the maximum." },
      { question: "Is transport still included?", answer: "Yes. Small-group day trips include round-trip transport from Prague, usually by minibus." },
      { question: "Do small-group tours cost more?", answer: "They can. Compare prices on the booking page; small-group tours often have a premium for the limited group size." },
      { question: "Where do we meet?", answer: "Meeting point is in Prague; your booking confirmation will have the exact location and time." },
      { question: "Are small-group day trips suitable for families?", answer: "Many are. Check the tour description for age recommendations and walking level." },
      { question: "Can we book a private day trip?", answer: "Some operators offer private day trips for an extra fee. Check the product page or contact the operator." },
    ],
  },
  {
    categorySlug: "day-trips-from-prague",
    slug: "best-saxon-switzerland-dresden-day-trips",
    title: "Best Saxon Switzerland & Dresden day trips from Prague",
    description: "Compare Saxon Switzerland and Dresden day trips from Prague. Bastei Bridge, viewpoints and Dresden city. Passport required.",
    picks: [
      { slug: "best-saxon-switzerland-bastei-dresden-from-prague", whyWePickIt: "The best of Saxon Switzerland from Prague: Bastei Bridge and Dresden. See the iconic sandstone bridge and viewpoints, then explore Dresden with a guide. Scenery and city in one full day.", bestFor: ["Visitors who want to see Bastei Bridge and Dresden in one day", "Photography and scenery lovers", "Travellers who want a mix of nature and city", "Guests who like a full-day trip with variety"] },
      { slug: "best-two-countries-one-day-bohemian-saxon-switzerland", whyWePickIt: "The best of two countries in one day: Bohemian and Saxon Switzerland. Top highlights in both Czech and German parks. For visitors who want maximum national park scenery and don't need a city stop.", bestFor: ["Visitors who want both Czech and German park highlights in one day", "Nature and photography enthusiasts", "Travellers who want a full-day scenic trip", "Guests who like a packed itinerary with iconic viewpoints"] },
    ],
    intro: "Saxon Switzerland (Germany) is famous for the Bastei Bridge and dramatic sandstone scenery. Day trips from Prague often combine the bridge with a visit to Dresden, or with Bohemian Switzerland in a two-parks-in-one-day format. You need a valid passport for the border. Ideal for scenery and, on Dresden combos, a taste of a German city.",
    whyBlock: { title: "Why take a Saxon Switzerland or Dresden day trip?", content: "Bastei Bridge is one of the most photographed viewpoints in the region. Combining it with Dresden gives you nature and city in one day. Trips that add Bohemian Switzerland show the best of both national parks. All require crossing into Germany—bring your passport." },
    whatToExpect: ["Meet in Prague and travel towards Germany. Passport required.", "Visit Bastei Bridge and Saxon Switzerland viewpoints.", "On Dresden combos: guided tour or free time in Dresden.", "Return to Prague in the evening."],
    faqs: [
      { question: "What are the best Saxon Switzerland and Dresden day trips?", answer: "The best include the Bastei Bridge and Dresden combo and the best-of-two-countries tour (Bohemian + Saxon Switzerland). The first adds a city visit; the second focuses on both national parks." },
      { question: "Do I need a passport?", answer: "Yes. Saxon Switzerland and Dresden are in Germany. Bring a valid passport or ID for the border." },
      { question: "How long do we spend at Bastei vs Dresden?", answer: "The split varies by tour. Typically a few hours at Bastei and a few in Dresden. Check the itinerary on the booking page." },
      { question: "Is entry to Dresden attractions included?", answer: "It depends on the tour. Some include entry to one or more sights; others leave it as free time. Check the product description." },
      { question: "How long is the day?", answer: "Full-day; usually about 10–12 hours from Prague including travel." },
      { question: "Where do we meet?", answer: "Meeting point is in Prague. Your booking confirmation will have the exact location and time." },
      { question: "What is the Bastei Bridge?", answer: "The Bastei is a famous sandstone rock formation and bridge in Saxon Switzerland, with sweeping views over the Elbe valley. It's one of the region's most iconic viewpoints." },
    ],
  },
  // ————— River cruises in Prague guides —————
  {
    categorySlug: "river-cruises-in-prague",
    slug: "best-short-vltava-cruises",
    title: "Best short Vltava cruises (1 hour) in Prague",
    description: "Compare 1-hour Vltava cruises in Prague. Sightseeing, Devil's Channel and Charles Bridge cruises.",
    picks: [
      { slug: "prague-boats-one-hour-cruise", whyWePickIt: "Classic 1-hour Vltava cruise with Prague Boats. Sail through the centre past the castle and Charles Bridge. A simple, popular option for a short time on the water with great views.", bestFor: ["Visitors who want a straightforward 1-hour river cruise", "Anyone with limited time who still wants to get on the water", "Guests who prefer a simple sightseeing cruise without a meal", "Travellers who want flexibility to combine with other plans"] },
      { slug: "prague-boats-devils-channel-cruise", whyWePickIt: "1-hour cruise through the Devil's Channel (Čertovka)—a narrow canal that offers a different perspective on the city. Closer to the water and the islands. A compact, scenic option.", bestFor: ["Visitors who want a short, scenic cruise in the heart of Prague", "Anyone curious about the Devil's Channel and canal area", "Guests who prefer a 1-hour commitment", "Travellers who want something a bit different from a standard Vltava cruise"] },
      { slug: "charles-bridge-river-boat-cruise-guided-tour", whyWePickIt: "Charles Bridge river boat cruise with a guided tour. Pass under the bridge and along the Vltava with commentary on the history. Ideal if you want a 1-hour cruise with a guide rather than a silent sail.", bestFor: ["Visitors who want to see Charles Bridge from the water", "Anyone who prefers a guided boat tour", "Guests who want history and commentary with their cruise", "Travellers looking for a shorter, informative river experience"] },
    ],
    intro: "Short Vltava cruises (around 1 hour) are a quick way to see Prague from the water. Options include the classic Prague Boats 1-hour cruise, the Devil's Channel cruise through Čertovka, and the Charles Bridge cruise with a guided tour. All leave from central piers and give you castle and bridge views without a long time commitment.",
    whyBlock: { title: "Why choose a short Vltava cruise?", content: "A 1-hour cruise fits easily into a busy day. You still get the classic views of the castle and Charles Bridge, and you can combine the cruise with lunch, a walk or another activity. The Devil's Channel option adds a different angle; the Charles Bridge cruise adds commentary." },
    whatToExpect: ["Board at the designated pier in central Prague.", "Cruise for about 1 hour along the Vltava (and/or Devil's Channel).", "Enjoy views of the castle, bridges and waterfront.", "Return to the pier."],
    faqs: [
      { question: "What are the best short Vltava cruises?", answer: "The best include the Prague Boats 1-hour cruise, the Devil's Channel 1-hour cruise and the Charles Bridge river boat cruise with guided tour. All are around 1 hour; the last has a guide." },
      { question: "Where do we board?", answer: "Piers are in central Prague on the Vltava. Your booking confirmation will have the exact location and departure times." },
      { question: "Is the boat covered?", answer: "Many boats have covered or partly covered seating. Check the product description if you're concerned about weather." },
      { question: "Are drinks available?", answer: "Some 1-hour cruises have a bar or refreshments; others are sightseeing only. Check the description." },
      { question: "What is the Devil's Channel?", answer: "Čertovka is a narrow canal branching off the Vltava in the Lesser Town area. The cruise offers a different route from the main river." },
      { question: "Can we sit outside?", answer: "Many boats have outdoor seating or a deck. Layout depends on the vessel; check the description." },
      { question: "Are short cruises suitable for children?", answer: "Yes. A 1-hour cruise is family-friendly. Life jackets are typically available for children; ask on board." },
    ],
  },
  {
    categorySlug: "river-cruises-in-prague",
    slug: "best-dinner-cruises-vltava",
    title: "Best dinner cruises on the Vltava in Prague",
    description: "Compare dinner cruises on the Vltava. Buffet dinner, Crystal dinner and night tour plus dinner cruise.",
    picks: [
      { slug: "prague-sightseeing-boat-cruise-buffet-dinner", whyWePickIt: "Sightseeing boat cruise with buffet dinner. Enjoy a buffet meal while the boat sails past the castle and bridges. A popular choice for a relaxed evening with food and views.", bestFor: ["Visitors who want dinner and a cruise in one", "Couples or groups looking for an evening experience", "Anyone who wants to see Prague by night from the water", "Guests who like a buffet so everyone can choose"] },
      { slug: "prague-boats-crystal-dinner-cruise", whyWePickIt: "Premium 3-hour Crystal dinner cruise. Multi-course or buffet dinner while cruising the Vltava. A longer, more luxurious evening on the water.", bestFor: ["Visitors who want a longer, premium dinner cruise", "Couples celebrating a special occasion", "Anyone who wants a 3-hour evening with dinner", "Guests who prefer a more upmarket experience"] },
      { slug: "prague-night-tour-vltava-dinner-cruise", whyWePickIt: "Prague night tour plus Vltava dinner cruise. See the city by night by coach or on foot, then board the boat for dinner. Two experiences in one evening.", bestFor: ["Visitors who want a night tour and dinner cruise in one", "Anyone who wants Prague by night from land and water", "Couples or groups looking for a full evening programme", "Guests who like a structured evening with dinner included"] },
    ],
    intro: "Dinner cruises on the Vltava combine a meal with an evening sail past the illuminated castle and bridges. Options include a buffet dinner cruise, the 3-hour Crystal dinner cruise (premium), and a combo that adds a Prague night tour before the boat. All offer dinner and views; choose by length and whether you want a simple buffet or a longer, more upscale experience.",
    whyBlock: { title: "Why choose a dinner cruise?", content: "A dinner cruise lets you eat and sightsee at the same time. You get the classic Prague-by-night views from the water without organising a restaurant and a boat trip separately. Buffet options suit groups with different tastes; the Crystal cruise is ideal for a special occasion." },
    whatToExpect: ["Board at the pier in central Prague.", "Take your table and enjoy dinner as the boat cruises.", "Sail past the illuminated castle, Charles Bridge and waterfront.", "Return to the pier after 2–3 hours (depending on the cruise)."],
    faqs: [
      { question: "What are the best dinner cruises on the Vltava?", answer: "The best include the sightseeing cruise with buffet dinner, the Prague Boats 3-hour Crystal dinner cruise and the night tour plus dinner cruise. Compare buffet vs Crystal and whether you want a night tour included." },
      { question: "Are drinks included?", answer: "It depends on the cruise. Some include a welcome drink or wine; others charge for the bar. Check the product description." },
      { question: "How long do dinner cruises last?", answer: "Typically 2 to 3 hours. The Crystal cruise is about 3 hours; buffet cruises are often 2–2.5 hours. Check the booking page." },
      { question: "What time do they start?", answer: "Evening departures, usually from around 19:00 or 20:00. Exact times are on the booking page." },
      { question: "Is there a dress code?", answer: "Smart casual is usually fine. Some guests dress up for the Crystal cruise; check the operator's recommendations." },
      { question: "Can dietary requirements be accommodated?", answer: "Contact the operator before booking. Buffets often have variety; special diets may need advance notice." },
      { question: "Where do we board?", answer: "The pier is in central Prague. Your booking confirmation will have the exact location and time." },
    ],
  },
  {
    categorySlug: "river-cruises-in-prague",
    slug: "best-jazz-evening-cruises",
    title: "Best jazz and evening cruises in Prague",
    description: "Compare jazz and evening cruises on the Vltava. Jazzboat with live jazz and eco cruise with Prosecco.",
    picks: [
      { slug: "jazzboat-evening-cruise-live-jazz", whyWePickIt: "Jazzboat Prague: evening cruise with live jazz on board. Sail along the Vltava with a band playing and the city lighting up. Drinks from the bar. A popular choice for music and views.", bestFor: ["Jazz lovers who want a cruise with live music", "Couples or friends looking for an evening experience", "Visitors who want to see Prague by night from the water", "Guests who like a relaxed, atmospheric evening"] },
      { slug: "evening-eco-cruise-prosecco", whyWePickIt: "Evening eco cruise with a glass of Prosecco included. Relaxed sail as the city lights come on. Simple, atmospheric option without a full dinner.", bestFor: ["Couples or friends who want a relaxed evening cruise", "Visitors who like an eco-friendly boat", "Anyone who wants a short evening sail with a drink included", "Guests who prefer a simple experience without a full dinner"] },
    ],
    intro: "Jazz and evening cruises on the Vltava offer something different from a standard sightseeing or dinner cruise. The Jazzboat has live jazz on board and a bar; the evening eco cruise includes a glass of Prosecco and a relaxed sail. Both are popular for a laid-back evening with views and atmosphere.",
    whyBlock: { title: "Why choose a jazz or evening cruise?", content: "If you want music with your cruise, the Jazzboat is the standout. If you want a short, relaxed evening with a drink included and no full meal, the eco Prosecco cruise fits. Both run in the evening when the city is illuminated." },
    whatToExpect: ["Board at the pier in the evening.", "Cruise along the Vltava—with live jazz on the Jazzboat, or with your Prosecco on the eco cruise.", "Enjoy the views of the lit-up castle and bridges.", "Return to the pier (typically 1–3 hours depending on the cruise)."],
    faqs: [
      { question: "What are the best jazz and evening cruises?", answer: "The best include the Jazzboat (evening cruise with live jazz) and the evening eco cruise with a glass of Prosecco. The first has live music and a bar; the second is shorter with a drink included." },
      { question: "Are drinks included on the Jazzboat?", answer: "Usually drinks are from the bar at your own expense. Some packages may include a welcome drink; check the product description." },
      { question: "How long is the Jazzboat cruise?", answer: "Typically 2 to 3 hours. Check the booking page for exact duration and departure time." },
      { question: "What is included on the eco Prosecco cruise?", answer: "A glass of Prosecco (or similar) is included. The cruise is typically 1–1.5 hours. Additional drinks may be available to buy." },
      { question: "Do we need to book in advance?", answer: "Yes, especially for the Jazzboat in peak season. Both are popular." },
      { question: "Is there food on these cruises?", answer: "The Jazzboat may have snacks or a light option; the Prosecco cruise is drinks-focused. Check the description." },
      { question: "Where do we board?", answer: "The pier is in central Prague. Your booking confirmation will have the exact location and time." },
    ],
  },
  {
    categorySlug: "river-cruises-in-prague",
    slug: "best-lunch-cruises-vltava",
    title: "Best lunch cruises on the Vltava in Prague",
    description: "Compare lunch cruises on the Vltava. 2-hour lunch cruise with buffet or set menu.",
    picks: [
      { slug: "prague-boats-lunch-cruise", whyWePickIt: "Prague Boats 2-hour lunch cruise. Lunch (buffet or set menu) while the boat sails past the castle and Charles Bridge. A relaxed way to eat and sightsee at the same time.", bestFor: ["Visitors who want lunch and a cruise in one", "Anyone who prefers a daytime river experience", "Guests who like a 2-hour commitment rather than a quick 1-hour trip", "Travellers looking for a relaxed midday break with views"] },
    ],
    intro: "Lunch cruises on the Vltava combine a midday meal with a 2-hour sail. You'll enjoy lunch (typically a buffet or set menu) while the boat passes the castle, Charles Bridge and the riverside. A good option if you want to be on the water during the day and have lunch included.",
    whyBlock: { title: "Why choose a lunch cruise?", content: "A lunch cruise gives you daytime views of Prague from the water and a meal in one go. It's often less crowded than dinner cruises and suits visitors who prefer to keep the evening free. The 2-hour length is enough to eat and enjoy the sights." },
    whatToExpect: ["Board at the pier around midday or early afternoon.", "Enjoy lunch as the boat cruises the Vltava.", "Views of the castle, bridges and waterfront in daylight.", "Return to the pier after about 2 hours."],
    faqs: [
      { question: "What are the best lunch cruises on the Vltava?", answer: "The Prague Boats 2-hour lunch cruise is a top choice. Lunch (buffet or set menu) is included; check the description for exact options." },
      { question: "What is included for lunch?", answer: "Usually a buffet or set menu—hot and cold dishes, often with dessert. Exact options vary by operator; check the description." },
      { question: "Are drinks included?", answer: "It depends on the tour. Some include a drink with lunch; others charge for the bar. Check the product description." },
      { question: "What time does the lunch cruise start?", answer: "Departure times vary; often around midday or early afternoon. Check the booking page for available times." },
      { question: "Where do we board?", answer: "The pier is in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "Can we sit outside?", answer: "Many boats have outdoor seating or a deck. Layout depends on the vessel; check the description." },
      { question: "Is the lunch cruise suitable for children?", answer: "Yes. A 2-hour lunch cruise is family-friendly. Buffets usually have options that suit children." },
    ],
  },
  {
    categorySlug: "river-cruises-in-prague",
    slug: "best-city-and-river-combo-tours",
    title: "Best city tour + river cruise combos in Prague",
    description: "Compare Prague city tours that include a Vltava river cruise. Half-day walking tour and boat.",
    picks: [
      { slug: "half-day-city-tour-vltava-cruise-castle-old-town", whyWePickIt: "Half-day city tour including Vltava cruise, Prague Castle and Old Town walking tour. Sightseeing and boat in one. Ideal for first-time visitors who want the main sights and a river trip.", bestFor: ["First-time visitors who want city tour and river cruise in one", "Travellers who want to see the castle, Old Town and the Vltava", "Anyone who likes a mix of walking and relaxing on the water", "Guests with half a day for a packed Prague introduction"] },
      { slug: "charles-bridge-river-boat-cruise-guided-tour", whyWePickIt: "Charles Bridge river boat cruise with a guided tour. See the bridge and the historic centre from the water with commentary. A focused combo of cruise and guide.", bestFor: ["Visitors who want to see Charles Bridge from the water with a guide", "Anyone who prefers a guided boat tour", "Guests who want history and commentary", "Travellers looking for a shorter, informative river experience"] },
    ],
    intro: "City tour and river cruise combos let you see Prague on foot and from the water in one booking. The main option is the half-day tour that includes a walking tour of the castle and Old Town plus a Vltava cruise. The Charles Bridge guided cruise is a shorter combo of boat and commentary. Ideal if you want to maximise sightseeing without organising two separate activities.",
    whyBlock: { title: "Why choose a city + river combo?", content: "A combo tour covers the main sights and the river in one go, often with one guide or a clear itinerary. You don't have to book a walking tour and a cruise separately or worry about timing. The half-day format is especially good for first-time visitors with limited time." },
    whatToExpect: ["Meet your guide at the designated point (or board the boat for cruise-only combos).", "Walking tour of castle and Old Town (half-day) or guided cruise (Charles Bridge).", "Board the boat for the Vltava cruise.", "End at a central location."],
    faqs: [
      { question: "What are the best city and river combo tours?", answer: "The best include the half-day city tour with Vltava cruise, castle and Old Town, and the Charles Bridge river boat cruise with guided tour. The first is walking + cruise; the second is cruise with commentary." },
      { question: "How long is the half-day combo?", answer: "Typically 4 to 5 hours including the walking tour and the cruise. Check the booking page." },
      { question: "Is Prague Castle admission included?", answer: "It depends on the tour. Some include castle grounds or interior access; others focus on the exterior. Check the product description." },
      { question: "Where do we meet?", answer: "Meeting point is usually in or near Old Town. Your booking confirmation will have the exact location and time." },
      { question: "What if it rains?", answer: "Boats are often covered. The walking tour may go ahead in light rain; contact the operator for their weather policy." },
      { question: "Is the Charles Bridge cruise a combo with walking?", answer: "The Charles Bridge cruise is a guided boat tour; it doesn't include a separate walking tour. The half-day tour is the one that combines walking and boat." },
      { question: "Can we do the cruise only?", answer: "Yes. You can book the 1-hour cruises or dinner cruises separately. Combos are for visitors who want both city tour and boat in one package." },
    ],
  },
  {
    categorySlug: "river-cruises-in-prague",
    slug: "best-romantic-vltava-cruises",
    title: "Best romantic Vltava cruises in Prague",
    description: "Compare romantic Vltava cruises. Crystal dinner, Prosecco eco cruise and Jazzboat evening.",
    picks: [
      { slug: "prague-boats-crystal-dinner-cruise", whyWePickIt: "Premium 3-hour Crystal dinner cruise. Multi-course or premium buffet dinner while cruising the Vltava. A longer, more luxurious evening—ideal for a special occasion or a romantic dinner.", bestFor: ["Couples celebrating a special occasion", "Visitors who want a longer, premium dinner cruise", "Anyone who wants a 3-hour evening with dinner", "Guests who prefer a more upmarket experience"] },
      { slug: "evening-eco-cruise-prosecco", whyWePickIt: "Evening eco cruise with a glass of Prosecco included. Relaxed sail as the city lights come on. Simple and atmospheric—no full dinner, just views and a drink.", bestFor: ["Couples who want a relaxed evening cruise", "Visitors who like an eco-friendly boat", "Anyone who wants a short evening sail with a drink included", "Guests who prefer a simple experience without a full dinner"] },
      { slug: "jazzboat-evening-cruise-live-jazz", whyWePickIt: "Jazzboat Prague: evening cruise with live jazz. Music, city views and a bar. A popular choice for a romantic or atmospheric evening with something different.", bestFor: ["Jazz lovers who want a cruise with live music", "Couples or friends looking for an evening experience", "Visitors who want to see Prague by night from the water", "Guests who like a relaxed, atmospheric evening"] },
    ],
    intro: "Romantic Vltava cruises range from a premium Crystal dinner (3 hours, upscale) to a short eco cruise with Prosecco and the Jazzboat with live jazz. All offer evening views of the illuminated city; choose by length, whether you want dinner or just a drink, and whether you want music.",
    whyBlock: { title: "Why choose a romantic cruise?", content: "Evening on the water with the castle and bridges lit up is naturally romantic. The Crystal cruise adds a premium dinner; the Prosecco cruise is short and sweet; the Jazzboat adds live music. All work well for couples or a special evening." },
    whatToExpect: ["Board at the pier in the evening.", "Cruise the Vltava with views of the illuminated city.", "Enjoy dinner (Crystal), a glass of Prosecco (eco), or drinks and jazz (Jazzboat).", "Return to the pier."],
    faqs: [
      { question: "What are the best romantic Vltava cruises?", answer: "The best include the Prague Boats Crystal dinner cruise (premium 3-hour), the evening eco cruise with Prosecco (short and sweet), and the Jazzboat (live jazz and bar). Choose by length and whether you want dinner or a drink." },
      { question: "Is the Crystal cruise worth the extra?", answer: "The Crystal cruise is longer (3 hours) and typically has a higher-quality dinner. It's ideal for a special occasion or if you want a more luxurious evening." },
      { question: "Are drinks included?", answer: "Prosecco cruise: one glass included. Crystal and Jazzboat: it depends on the package; check the description." },
      { question: "Do we need to book in advance?", answer: "Yes, especially for dinner and jazz cruises in peak season." },
      { question: "Is there a dress code?", answer: "Smart casual is usually fine. Some guests dress up for the Crystal cruise." },
      { question: "Where do we board?", answer: "The pier is in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "What time do evening cruises start?", answer: "Typically from around 19:00 or 20:00. Exact times are on the booking page." },
    ],
  },
  // ————— Food tours in Prague guides —————
  {
    categorySlug: "food-tours-in-prague",
    slug: "best-mala-strana-hidden-gem-food-tours",
    title: "Best Malá Strana & hidden gem food tours in Prague",
    description: "Compare Malá Strana and hidden gem food tours. Secret Food Tours, local spots and small groups.",
    picks: [
      { slug: "secret-food-tours-prague-mala-strana", whyWePickIt: "Secret Food Tours Prague Malá Strana. Discover local food and hidden spots in the Lesser Town with a curated walk. A popular choice for food lovers who want to explore Malá Strana through its food.", bestFor: ["Food lovers who want to discover Malá Strana through its food", "Visitors who prefer smaller groups and hidden gems", "Anyone interested in Czech cuisine and local stories", "Guests who like a structured food tour with a guide"] },
      { slug: "local-prague-food-tour-hidden-gems-small-groups", whyWePickIt: "Local Prague food tour in small groups—hidden gems and secret spots. Taste Czech food where locals eat. Ideal for visitors who want to get off the tourist track.", bestFor: ["Food lovers who want to discover hidden gems", "Visitors who prefer small-group tours", "Anyone who wants to eat where locals eat", "Guests who like a more intimate, exploratory food tour"] },
    ],
    intro: "Malá Strana and hidden-gem food tours take you to the Lesser Town and lesser-known spots with a guide. Secret Food Tours Malá Strana is a curated walk through the neighbourhood; the local hidden-gems tour focuses on small-group discovery of secret venues. Both suit visitors who want more than the main squares.",
    whyBlock: { title: "Why choose a Malá Strana or hidden gem food tour?", content: "Malá Strana is one of Prague's most atmospheric districts; exploring it through food lets you combine sightseeing and tastings. Hidden-gem tours take you to spots many tourists never find. Small groups mean a more personal experience and the chance to ask questions." },
    whatToExpect: ["Meet your guide in Malá Strana or a central location.", "Walk to several local spots for food tastings.", "Hear stories about the neighbourhood and Czech cuisine.", "The tour ends in a central area; your guide can recommend more places."],
    faqs: [
      { question: "What are the best Malá Strana and hidden gem food tours?", answer: "The best include Secret Food Tours Prague Malá Strana and the Local Prague Food Tour in hidden gems (small groups). The first focuses on Malá Strana; the second on secret spots across the city with a small group." },
      { question: "How much food is included?", answer: "Several tastings that together can amount to a light meal or substantial snacks. Check the product description for the number of stops." },
      { question: "Where do we meet?", answer: "Secret Food Tours meets in Malá Strana; the hidden-gems tour may start in the Old Town or another central point. Your booking confirmation will have the exact location." },
      { question: "Are these tours suitable for vegetarians?", answer: "Contact the operator before booking. Czech cuisine often includes meat; some tours can adapt with advance notice." },
      { question: "How long do they last?", answer: "Typically 3 to 3.5 hours. Check the booking page for exact duration." },
      { question: "Is drink included?", answer: "Some tours include a drink at one or more stops. Check the product description." },
      { question: "What is Malá Strana?", answer: "Malá Strana (Lesser Town) is the district below Prague Castle, with baroque churches, cobbled streets and many restaurants and cafés. It's one of the city's most picturesque neighbourhoods." },
    ],
  },
  {
    categorySlug: "food-tours-in-prague",
    slug: "best-evening-night-food-tours",
    title: "Best evening and night food tours in Prague",
    description: "Compare evening and night food tours. Old Town evening tour and Eating Prague by night.",
    picks: [
      { slug: "good-evening-old-town-food-tour", whyWePickIt: "Good Evening Old Town food tour. Explore the Old Town by evening with tastings and stories. A relaxed way to combine an evening stroll with Czech specialities.", bestFor: ["Visitors who want an evening food tour", "Anyone who prefers to eat and walk in the cooler evening", "Guests who like the atmosphere of the Old Town at night", "Food lovers who want a structured evening experience"] },
      { slug: "eating-prague-by-night-drinks-food-tour", whyWePickIt: "Eating Prague by night: drinks and food tour. Visit local spots for Czech food and drinks as the city lights up. Popular for a fun evening out with tastings.", bestFor: ["Visitors who want a night-time food and drink experience", "Anyone who likes to combine food tastings with drinks", "Guests who want to see Prague's evening food scene", "Couples or groups looking for a fun evening tour"] },
    ],
    intro: "Evening and night food tours in Prague let you explore the city after dark with a guide and tastings. The Good Evening Old Town tour focuses on the historic centre in the evening; Eating Prague by night combines food and drinks at local spots. Both are ideal if you want to eat and walk when the city is lit up and lively.",
    whyBlock: { title: "Why choose an evening or night food tour?", content: "Prague is atmospheric after dark. An evening or night food tour combines dinner-time tastings with the lit-up streets and a guide who knows where to go. Good for visitors who prefer to keep the day free for sightseeing and want a structured evening experience." },
    whatToExpect: ["Meet your guide in the evening (typically 17:00–19:00 depending on the tour).", "Walk to several stops for food and often drinks.", "Hear stories about the area and Czech food culture.", "The tour ends in a central location."],
    faqs: [
      { question: "What are the best evening and night food tours?", answer: "The best include the Good Evening Old Town food tour and Eating Prague by night (drinks and food tour). The first is an evening walk with tastings; the second adds more emphasis on drinks." },
      { question: "What time do they start?", answer: "Typically between 17:00 and 19:00. Exact times are on the booking page and vary by season." },
      { question: "Are drinks included?", answer: "Eating Prague by night typically includes drinks at one or more stops. Good Evening Old Town may include a drink; check the product description." },
      { question: "Is it enough for dinner?", answer: "The tastings can amount to a light meal or substantial snacks. If you have a big appetite, you may want a snack before or after." },
      { question: "How long do they last?", answer: "Typically 3 to 4 hours. Check the booking page." },
      { question: "Where do we meet?", answer: "Meeting point is usually in or near the Old Town. Your booking confirmation will have the exact location and time." },
      { question: "Are these suitable for non-drinkers?", answer: "Contact the operator before booking; they may offer soft drinks or adjust." },
    ],
  },
  {
    categorySlug: "food-tours-in-prague",
    slug: "best-small-group-private-food-tours",
    title: "Best small-group and private food tours in Prague",
    description: "Compare small-group and private food tours. Hidden gems small groups and Prague's Favorite Food private tour.",
    picks: [
      { slug: "local-prague-food-tour-hidden-gems-small-groups", whyWePickIt: "Local Prague food tour in small groups. Hidden gems and secret spots with a limited group size. More personal and flexible than a large walking tour.", bestFor: ["Food lovers who want hidden gems in a small group", "Visitors who prefer small-group tours", "Anyone who wants to eat where locals eat", "Guests who like a more intimate experience"] },
      { slug: "pragues-favorite-food-private-small-group-tour", whyWePickIt: "Prague's Favorite Food private or small-group tour. Taste the city's best-loved dishes with a dedicated guide. Ideal for families or friends who want a personalised experience.", bestFor: ["Visitors who want a private or small-group food tour", "Families or friends who want a dedicated guide", "Anyone who prefers a more personalised experience", "Guests who want to set the pace and ask lots of questions"] },
    ],
    intro: "Small-group and private food tours in Prague limit the number of guests or are just for your party. Options include the local hidden-gems tour (small groups) and Prague's Favorite Food (private or small group). Both give you more time with the guide and often more flexibility.",
    whyBlock: { title: "Why choose a small-group or private food tour?", content: "A small group means you can hear the guide clearly and ask questions. A private tour is tailored to your party—pace, interests and sometimes dietary needs. Ideal for families, couples or friends who want a dedicated experience." },
    whatToExpect: ["Meet your guide (and the small group, if not private).", "Visit several stops for tastings; the guide can adapt to your pace.", "Hear stories and recommendations tailored to your interests.", "The tour ends in a central location."],
    faqs: [
      { question: "What are the best small-group and private food tours?", answer: "The best include the Local Prague Food Tour (hidden gems, small groups) and Prague's Favorite Food (private or small-group). Compare group size and whether you want hidden gems or favourite dishes." },
      { question: "How many people are in a small group?", answer: "Typically 8–12 or fewer. Check the tour description for the maximum. Private means just your party." },
      { question: "Does private cost more?", answer: "Yes. Private tours usually have a higher price or a minimum. Check the booking page for options." },
      { question: "Can we customise the route?", answer: "Private tours often allow some customisation. Contact the operator when you book or at the start of the tour." },
      { question: "How much food is included?", answer: "Several tastings that together can amount to a light meal or substantial snacks. Check the product description." },
      { question: "Where do we meet?", answer: "Meeting point is usually in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "How long do they last?", answer: "Typically 3 to 4 hours. Check the booking page." },
    ],
  },
  {
    categorySlug: "food-tours-in-prague",
    slug: "best-food-culture-tours",
    title: "Best food and culture tours in Prague",
    description: "Compare food and culture tours. Local foodies, Prague Foodie Tour and city food tasting with context.",
    picks: [
      { slug: "prague-food-culture-tour-local-foodies", whyWePickIt: "Prague food and culture tour with local foodies. Taste Czech specialities and learn about local life and traditions from guides who live and eat in Prague.", bestFor: ["Visitors who want food and culture in one tour", "Anyone interested in how Czechs eat and live", "Food lovers who like stories and context with their tastings", "Guests who want to learn from local enthusiasts"] },
      { slug: "prague-foodie-tour", whyWePickIt: "Prague Foodie Tour: curated local food and drink spots. Taste Czech specialities with a guide who knows the scene. Ideal for food-loving visitors who want a variety of dishes and a bit of drink.", bestFor: ["Food lovers who want a guided food experience", "Visitors who want to taste a variety of local dishes", "Anyone interested in Czech cuisine and drink", "Guests who prefer a structured food tour"] },
      { slug: "prague-city-food-tasting-walking-tour", whyWePickIt: "Guided Prague city food tasting walking tour. Combine food and sightseeing—sample local specialities while walking through the city. Great for first-time visitors who want food and context.", bestFor: ["Food lovers who want to taste local specialities", "Visitors who want to combine food and sightseeing", "Anyone interested in Czech cuisine and culture", "Guests who prefer a guided food experience"] },
    ],
    intro: "Food and culture tours in Prague combine tastings with stories about Czech cuisine, history and daily life. The food and culture tour with local foodies is led by Prague residents; the Prague Foodie Tour and the city food tasting walking tour add sightseeing and variety. All suit visitors who want context with their food.",
    whyBlock: { title: "Why choose a food and culture tour?", content: "You get more than just tastings—you learn how Czechs eat, what the dishes mean and how food fits into local life. Local foodie guides share personal recommendations and stories. Good if you want to understand the city through its food." },
    whatToExpect: ["Meet your guide at the designated location.", "Visit several stops for food (and often a drink).", "Hear stories about Czech cuisine, culture and the neighbourhood.", "The tour ends in a central location."],
    faqs: [
      { question: "What are the best food and culture tours?", answer: "The best include the Prague Food and Culture Tour with Local Foodies, the Prague Foodie Tour and the Guided Prague City Food Tasting Walking Tour. The first is most culture-focused; the others combine food with sightseeing and variety." },
      { question: "What does 'local foodies' mean?", answer: "Guides are typically Prague residents who are passionate about food and culture. They share personal recommendations and stories about local life." },
      { question: "How much food is included?", answer: "Several tastings that together can amount to a light meal or substantial snacks. Check the product description." },
      { question: "Are drinks included?", answer: "Some tours include a beer or other drink at one or more stops. Check the product description." },
      { question: "How long do they last?", answer: "Typically 3 to 4 hours. Check the booking page." },
      { question: "Where do we meet?", answer: "Meeting point is usually in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "Can dietary requirements be accommodated?", answer: "Contact the operator before booking. Many can adapt with advance notice." },
    ],
  },
  {
    categorySlug: "food-tours-in-prague",
    slug: "best-medieval-special-dining",
    title: "Best medieval and special dining in Prague",
    description: "Compare medieval dining and special food experiences. 5-course medieval dinner in Prague.",
    picks: [
      { slug: "five-course-medieval-dining-experience-prague", whyWePickIt: "5-course medieval dining experience in Prague. Full meal in a historic setting with dishes inspired by medieval recipes and atmosphere. A unique way to combine dinner with a taste of Prague's history.", bestFor: ["Visitors who want a special dining experience", "Anyone interested in medieval history and atmosphere", "Couples or groups looking for a memorable dinner", "Guests who like themed dining and storytelling"] },
    ],
    intro: "Medieval and special dining experiences in Prague offer more than a standard food tour—they're full meals in a historic or themed setting. The 5-course medieval dining experience takes place in a cellar or period-style restaurant with dishes inspired by medieval cuisine. Ideal for a memorable evening or a special occasion.",
    whyBlock: { title: "Why choose a medieval or special dining experience?", content: "You get a full sit-down dinner in an atmospheric venue, often with storytelling or period decor. It's a different experience from a walking food tour—slower, more theatrical and ideal for a celebration or a one-off treat." },
    whatToExpect: ["Arrive at the venue (historic cellar or themed restaurant).", "Enjoy a 5-course meal inspired by medieval or traditional cuisine.", "Atmosphere and possibly entertainment depending on the operator.", "The experience ends at the venue (typically 2–3 hours)."],
    faqs: [
      { question: "What are the best medieval and special dining experiences?", answer: "The 5-Course Medieval Dining Experience in Prague is a top choice. It's a full dinner in a historic setting with medieval-inspired dishes." },
      { question: "What is the dress code?", answer: "Smart casual is usually fine. Some venues encourage period-inspired dress; check the operator's recommendations." },
      { question: "Are drinks included?", answer: "It depends on the package. Some include wine or beer; others charge for drinks. Check the product description." },
      { question: "How long does the dinner last?", answer: "Typically 2 to 3 hours for five courses. Check the booking page." },
      { question: "Can dietary requirements be accommodated?", answer: "Contact the operator before booking. Medieval-style menus often feature meat; vegetarians may need advance notice." },
      { question: "Where is the venue?", answer: "Usually in the historic centre (Old Town or Malá Strana). Your booking confirmation will have the exact address." },
      { question: "Is it suitable for children?", answer: "It depends on the venue and the child. Medieval dining can be long; contact the operator if you're bringing kids." },
    ],
  },
  {
    categorySlug: "food-tours-in-prague",
    slug: "best-walking-food-tours",
    title: "Best walking food tours in Prague",
    description: "Compare walking food tours. Delicious Food Tour, city food tasting and Prague Foodie Tour.",
    picks: [
      { slug: "delicious-food-tour", whyWePickIt: "Delicious Food Tour: classic Prague food walk. Taste Czech specialities at well-loved spots with a guide. A straightforward, enjoyable way to discover Prague through its cuisine.", bestFor: ["Food lovers who want a classic Prague food tour", "Visitors who want to taste a range of Czech dishes", "Anyone who prefers a guided, well-organised experience", "Guests who like a mix of traditional and contemporary flavours"] },
      { slug: "prague-city-food-tasting-walking-tour", whyWePickIt: "Guided Prague city food tasting walking tour. Combine food and sightseeing—sample local specialities while walking through the city. Ideal for visitors who want tastings and context in one.", bestFor: ["Food lovers who want to taste local specialities", "Visitors who want to combine food and sightseeing", "Anyone interested in Czech cuisine and culture", "Guests who prefer a guided food experience"] },
      { slug: "prague-foodie-tour", whyWePickIt: "Prague Foodie Tour: curated local food and drink spots. Taste Czech specialities with a guide who knows the scene. A popular choice for a varied walking food tour.", bestFor: ["Food lovers who want a guided food experience", "Visitors who want to taste a variety of local dishes", "Anyone interested in Czech cuisine and drink", "Guests who prefer a structured food tour"] },
    ],
    intro: "Walking food tours in Prague take you to several stops on foot with a guide. The Delicious Food Tour focuses on well-loved spots and a range of Czech dishes; the city food tasting walking tour combines food and sightseeing; the Prague Foodie Tour offers a curated mix of food and drink. All are 3–4 hours and suit visitors who want to eat and walk.",
    whyBlock: { title: "Why choose a walking food tour?", content: "You see the city and taste it at the same time. A guide leads you to the best spots so you don't have to guess where to eat. Walking between stops helps build an appetite and gives you a sense of the neighbourhoods. Ideal for first-time visitors and food lovers." },
    whatToExpect: ["Meet your guide at the designated location.", "Walk to several stops for food tastings (and often a drink).", "Hear commentary on the dishes and the area.", "The tour ends in a central location."],
    faqs: [
      { question: "What are the best walking food tours in Prague?", answer: "The best include the Delicious Food Tour, the Guided Prague City Food Tasting Walking Tour and the Prague Foodie Tour. All are walking tours with multiple stops; the city tasting tour adds more sightseeing." },
      { question: "How much food is included?", answer: "Several tastings that together can amount to a light meal or substantial snacks. Check the product description for the number of stops." },
      { question: "Are drinks included?", answer: "Some tours include a beer or other drink at one or more stops. Check the product description." },
      { question: "How long do they last?", answer: "Typically 3 to 4 hours. Check the booking page." },
      { question: "Where do we meet?", answer: "Meeting point is usually in or near the Old Town. Your booking confirmation will have the exact location and time." },
      { question: "Can dietary requirements be accommodated?", answer: "Contact the operator before booking. Many can adapt with advance notice." },
      { question: "Is there a lot of walking?", answer: "Yes—you walk between stops. Distances are moderate; wear comfortable shoes. Contact the operator if you have mobility concerns." },
    ],
  },
  // ————— Jewish heritage tours in Prague guides —————
  {
    categorySlug: "jewish-heritage-tours-in-prague",
    slug: "best-jewish-quarter-walking-tours",
    title: "Best Jewish Quarter walking tours in Prague",
    description: "Compare Jewish Quarter walking tours. Synagogue tours with admission, 90-minute tours and small-group options.",
    picks: [
      { slug: "prague-jewish-quarter-synagogue-walking-tour-admission", whyWePickIt: "Prague Jewish Quarter and synagogue walking tour with admission tickets. Visit synagogues and the Old Jewish Cemetery with a guide. One of the most comprehensive ways to see the quarter with entry and commentary.", bestFor: ["Visitors who want a guided tour of the Jewish Quarter with admission", "Anyone who wants to understand the history of Prague's Jewish community", "Guests who prefer not to queue for tickets", "Travellers interested in synagogues and the Old Jewish Cemetery"] },
      { slug: "prague-old-town-jewish-quarter-90-minutes-guided-tour", whyWePickIt: "Prague Old Town and Jewish Quarter 90-minute guided tour. Compact introduction to both areas with a guide. Ideal if you have limited time but want a structured overview.", bestFor: ["Visitors with limited time who want a short introduction", "Anyone who wants Old Town and Jewish Quarter in 90 minutes", "Guests who prefer a concise, guided overview", "Travellers who want the highlights without a long tour"] },
      { slug: "really-small-group-old-town-jewish-quarter-walking-tour", whyWePickIt: "Really small group (max 6) Prague Old Town and Jewish Quarter walking tour. Intimate guided experience with time to ask questions. Ideal for visitors who prefer a small group.", bestFor: ["Visitors who want a small-group tour (max 6)", "Anyone who wants Old Town and Jewish Quarter in one tour", "Guests who like a more personal experience", "Travellers who prefer not to be in a large group"] },
    ],
    intro: "Jewish Quarter walking tours in Prague take you through Josefov with a guide. The synagogue tour with admission includes entry to synagogues and the Old Jewish Cemetery; the 90-minute tour is a compact introduction to the Old Town and the quarter; the really small-group tour limits numbers for a more personal experience. Choose by length and whether you want admission included.",
    whyBlock: { title: "Why take a Jewish Quarter walking tour?", content: "A guided walk helps you understand the history of Prague's Jewish community and the significance of the synagogues and cemetery. Tours with admission mean you don't queue for tickets and the guide explains what you're seeing. Small-group tours allow more time for questions." },
    whatToExpect: ["Meet your guide at or near the Jewish Quarter.", "Walk through Josefov with commentary on the synagogues, cemetery and history.", "If admission is included, enter the key sites with your guide.", "The tour ends in a central location."],
    faqs: [
      { question: "What are the best Jewish Quarter walking tours?", answer: "The best include the Jewish Quarter and synagogue walking tour with admission, the 90-minute Old Town and Jewish Quarter tour, and the really small-group (max 6) Old Town and Jewish Quarter tour. Compare admission inclusion and group size." },
      { question: "Which sites are included when admission is part of the tour?", answer: "Typically the Jewish Museum circuit: several synagogues and the Old Jewish Cemetery. Exact sites vary by operator; check the product description." },
      { question: "How long do they last?", answer: "The synagogue tour with admission is typically 2.5–3.5 hours; the 90-minute tour is 1.5 hours; the small-group tour is around 3 hours. Check the booking page." },
      { question: "Where do we meet?", answer: "Usually at or near the Jewish Quarter (Josefov). Your booking confirmation will have the exact location and time." },
      { question: "Are there dress codes?", answer: "Men may be asked to cover their heads in synagogues (kippah often provided). Dress respectfully. Your guide will advise." },
      { question: "Is the Old Jewish Cemetery included?", answer: "On tours that include admission, the cemetery is usually part of the circuit when open. Check the product description." },
      { question: "Can we do the Jewish Quarter without a guide?", answer: "Yes. You can buy the Jewish Town admission ticket with introduction and explore at your own pace, or do the audio walk. Guided tours are for those who want commentary." },
    ],
  },
  {
    categorySlug: "jewish-heritage-tours-in-prague",
    slug: "best-small-group-jewish-heritage-tours",
    title: "Best small-group Jewish heritage tours in Prague",
    description: "Compare small-group Jewish heritage tours. Max 6 Old Town and Jewish Quarter, private Terezín.",
    picks: [
      { slug: "really-small-group-old-town-jewish-quarter-walking-tour", whyWePickIt: "Really small group (max 6 people) Prague Old Town and Jewish Quarter walking tour. Intimate guided experience with time for questions. Ideal for visitors who prefer a small group.", bestFor: ["Visitors who want a small-group tour (max 6)", "Anyone who wants Old Town and Jewish Quarter in one tour", "Guests who like a more personal experience", "Travellers who prefer not to be in a large group"] },
      { slug: "terezin-concentration-camp-private-tour-from-prague", whyWePickIt: "Terezín concentration camp private tour from Prague. Dedicated guide and private transport. Pace and focus can be tailored to you. Ideal for families or small groups who want a personal visit to the memorial.", bestFor: ["Visitors who want a private visit to Terezín", "Families or small groups who want a dedicated guide", "Anyone who prefers to set the pace and ask questions freely", "Guests who want transport and guide just for their party"] },
    ],
    intro: "Small-group and private Jewish heritage tours limit the number of guests or are just for your party. The really small-group (max 6) tour covers the Old Town and the Jewish Quarter; the private Terezín tour gives you a dedicated guide and vehicle for the memorial. Both suit visitors who want more attention and flexibility.",
    whyBlock: { title: "Why choose a small-group or private Jewish heritage tour?", content: "A small group means you can hear the guide clearly and ask questions. A private tour is tailored to your party—pace, interests and sometimes pickup. Ideal for families, couples or friends who want a dedicated experience, especially for sensitive sites like Terezín." },
    whatToExpect: ["Meet your guide (and the small group, if not private).", "Jewish Quarter: walk through the Old Town and Josefov with commentary.", "Terezín private: travel by private vehicle to the memorial, then a guided visit before returning to Prague."],
    faqs: [
      { question: "What are the best small-group and private Jewish heritage tours?", answer: "The best include the really small-group (max 6) Old Town and Jewish Quarter walking tour and the Terezín concentration camp private tour. The first is in Prague; the second is a private day trip to Terezín." },
      { question: "How many people are in the small group?", answer: "The Old Town and Jewish Quarter tour has a maximum of 6. The private Terezín tour is for your party only (vehicle capacity applies)." },
      { question: "Is admission included?", answer: "For the Jewish Quarter tour, check the product description—some include admission, others are exterior. The private Terezín tour typically includes memorial admission." },
      { question: "Where do we meet?", answer: "Jewish Quarter tour: usually in the Old Town or at the Jewish Quarter. Terezín private: often hotel pickup or a designated point. Your confirmation will have details." },
      { question: "Does private Terezín cost more?", answer: "Yes. Private tours have a higher price or minimum. Check the booking page for your group size." },
      { question: "Is the small-group tour suitable for children?", answer: "The Old Town and Jewish Quarter tour is suitable for families. For Terezín, use your judgement; the content is sensitive and many recommend it for older children and adults." },
      { question: "Can we request more time at certain sites on the private Terezín tour?", answer: "Private tours often allow more flexibility. Discuss with your guide on the day or when you book." },
    ],
  },
  {
    categorySlug: "jewish-heritage-tours-in-prague",
    slug: "best-admission-self-guided-jewish-quarter",
    title: "Best admission and self-guided Jewish Quarter options in Prague",
    description: "Compare Jewish Town admission ticket with introduction and Jewish Quarter audio walk.",
    picks: [
      { slug: "prague-jewish-town-admission-ticket-introduction", whyWePickIt: "Prague Jewish Town admission ticket with introduction. Get your ticket and a short overview from a guide, then explore the synagogues and Old Jewish Cemetery at your own pace. Ideal for independent visitors.", bestFor: ["Independent visitors who want to explore at their own pace", "Anyone who prefers a short intro then self-guided visit", "Guests who want admission without a long guided tour", "Travellers who like to read and linger at their own speed"] },
      { slug: "prague-jewish-quarter-audio-walk", whyWePickIt: "Prague's Jewish Quarter audio walk. Meander through the storied streets at your own pace with stories and history on your device. Flexible and independent; synagogue entry may require a separate ticket.", bestFor: ["Visitors who prefer to explore at their own pace", "Anyone who likes audio guides and self-guided experiences", "Guests who want flexibility in timing and route", "Travellers who want the streets and stories without a group"] },
    ],
    intro: "Admission and self-guided options let you experience the Jewish Quarter without a full guided tour. The Jewish Town admission ticket with introduction gives you entry to the synagogues and cemetery plus a short orientation; the audio walk takes you through the streets with commentary (synagogue entry may be separate). Both suit independent visitors who want to set their own pace.",
    whyBlock: { title: "Why choose admission or self-guided?", content: "You get entry (and often an intro) or an audio narrative without a fixed group or schedule. You can linger where you like and skip what you've already seen. Good if you prefer to explore alone or with your own party." },
    whatToExpect: ["Ticket with intro: meet for a short introduction and receive your ticket, then visit the sites at your own pace.", "Audio walk: follow the audio route through the Jewish Quarter at your chosen time; check if synagogue admission is included or separate."],
    faqs: [
      { question: "What are the best admission and self-guided Jewish Quarter options?", answer: "The best include the Prague Jewish Town admission ticket with introduction and the Prague's Jewish Quarter audio walk. The first gives you a ticket and short intro; the second is an audio-guided street walk (synagogue entry may be separate)." },
      { question: "What does the admission ticket include?", answer: "Typically the Jewish Museum circuit: several synagogues and the Old Jewish Cemetery. Exact sites are on the ticket or the operator's description." },
      { question: "Is the audio walk enough to see the synagogues inside?", answer: "Often the audio walk covers the streets and exterior. Entry to synagogues and the cemetery may require a separate Jewish Museum ticket. Check the product description." },
      { question: "How long can we stay with the admission ticket?", answer: "You can stay until closing time. The ticket is usually valid for the day; check opening hours." },
      { question: "Do we need a smartphone for the audio walk?", answer: "Most audio walks use an app on your phone. Check the product description for device requirements." },
      { question: "Where do we get the ticket or start the audio walk?", answer: "Meeting point and instructions are in your booking confirmation. The intro is usually at or near the Jewish Quarter." },
      { question: "Can we do the audio walk any time?", answer: "Usually yes—you can start when you like within the validity period. Street access is open; synagogue opening hours apply if you have a separate ticket." },
    ],
  },
  {
    categorySlug: "jewish-heritage-tours-in-prague",
    slug: "best-terezin-memorial-tours",
    title: "Best Terezín Memorial tours from Prague",
    description: "Compare Terezín Memorial tours. Day tour, fortress and camp tour, half-day tour.",
    picks: [
      { slug: "terezin-concentration-camp-day-tour-from-prague", whyWePickIt: "Terezín concentration camp day tour from Prague. Visit the memorial with a guide; transport included. A structured, respectful way to visit the site with historical context.", bestFor: ["Visitors who want to pay respects and learn about Terezín's history", "Anyone interested in Holocaust history and memorial sites", "Guests who prefer not to drive or organise transport", "Travellers who want a guided visit to the memorial"] },
      { slug: "terezin-fortress-concentration-camp-tour-from-prague", whyWePickIt: "Terezín fortress and concentration camp tour from Prague. Visit both the fortress town and the camp memorial with a guide. Comprehensive visit with transport.", bestFor: ["Visitors who want to see both the fortress and the camp site", "Anyone interested in the full history of Terezín", "Guests who prefer a guided tour with transport", "Travellers who want a comprehensive visit"] },
      { slug: "terezin-memorial-half-day-tour-from-prague", whyWePickIt: "Terezín Memorial half-day tour from Prague. Shorter than a full-day tour; transport and guided visit included. Ideal if you want to visit the memorial without giving up the whole day.", bestFor: ["Visitors who want to see Terezín but prefer a half-day", "Anyone with limited time who still wants to visit the memorial", "Guests who want transport and a guided visit in one", "Travellers who plan to do something else the same day"] },
    ],
    intro: "Terezín Memorial tours from Prague take you to the former concentration camp and ghetto with transport and a guide. Options include a full-day tour, a tour that covers both the fortress and the camp, and a half-day tour. All provide historical context and a respectful, educational visit. The content is sensitive; the tone is solemn and informative.",
    whyBlock: { title: "Why visit Terezín with a tour?", content: "A tour from Prague handles transport (about 1 hour each way) and provides a guide who can explain the history and the site. Visiting with a guide helps you understand what you're seeing and ensures behaviour is respectful. Half-day and full-day options suit different schedules." },
    whatToExpect: ["Meet in Prague and travel by coach to Terezín (about 1 hour).", "Guided visit to the memorial—former camp, museum and related sites.", "Your guide explains the history and significance.", "Return to Prague."],
    faqs: [
      { question: "What are the best Terezín Memorial tours?", answer: "The best include the Terezín concentration camp day tour, the Terezín fortress and concentration camp tour, and the Terezín Memorial half-day tour. Compare full-day vs half-day and whether the fortress is included." },
      { question: "How long is the journey?", answer: "About 1 hour each way by coach. Full-day tours are typically 5–6 hours total; half-day 4–5 hours." },
      { question: "Is admission included?", answer: "Most Terezín tours include admission to the memorial sites. Check the product description." },
      { question: "Where do we meet?", answer: "Meeting point is usually in central Prague. Your booking confirmation will have the exact location and departure time." },
      { question: "Is the visit suitable for children?", answer: "The content is sensitive. Many operators recommend the tour for older children and adults. Parents should use their judgement." },
      { question: "What should we expect emotionally?", answer: "A visit to Terezín can be emotionally affecting. The guide will provide historical context in a respectful, educational way. The tone is solemn." },
      { question: "What is the difference between the fortress and the camp?", answer: "Terezín was a garrison town and fortress. The Nazis used it as a ghetto and concentration camp. Some tours cover both the fortress area and the camp memorial." },
    ],
  },
  {
    categorySlug: "jewish-heritage-tours-in-prague",
    slug: "best-prague-terezin-combo",
    title: "Best Prague + Terezín combo tours",
    description: "Compare Prague and Terezín combo tours. Best of Prague and Terezín all inclusive.",
    picks: [
      { slug: "best-of-prague-and-terezin-concentration-camp-all-inclusive", whyWePickIt: "Best of Prague and trip to Terezín concentration camp all inclusive. See key Prague sights and then visit the Terezín Memorial in one day. Transport, guide and admissions included; check the description for exact inclusions.", bestFor: ["Visitors who want Prague highlights and Terezín in one day", "Anyone with one day who wants to see the city and the memorial", "Guests who like a packed, all-inclusive itinerary", "Travellers who want transport, guide and key sights in one booking"] },
    ],
    intro: "Prague and Terezín combo tours combine city sightseeing with a visit to the Terezín Memorial in one day. You'll see Prague highlights (e.g. Old Town, Jewish Quarter) and then travel to Terezín for a guided visit. A full day that suits visitors with limited time who want both the city and the memorial. Check what's included—transport, admissions and sometimes lunch.",
    whyBlock: { title: "Why choose a Prague + Terezín combo?", content: "If you have only one day and want both Prague and Terezín, a combo tour covers both with one booking. Transport and guide are arranged; you don't have to coordinate two separate trips. The day is intensive but efficient." },
    whatToExpect: ["Start with Prague highlights (Old Town, Jewish Quarter or as per the tour).", "Travel by coach to Terezín.", "Guided visit to the Terezín Memorial.", "Return to Prague."],
    faqs: [
      { question: "What are the best Prague and Terezín combo tours?", answer: "The Best of Prague and trip to Terezín concentration camp all-inclusive tour is the main option. It combines city highlights and a Terezín visit in one day." },
      { question: "What is included in 'all inclusive'?", answer: "Typically transport, guide and admission to Prague sights and Terezín. Some tours include lunch; check the product description for exact inclusions." },
      { question: "How long is the day?", answer: "Full-day; often 8–10 hours. The order (Prague first or Terezín first) may vary. Check the itinerary." },
      { question: "Where do we meet?", answer: "Meeting point is in Prague. Your booking confirmation will have the exact location and time." },
      { question: "Is it a lot in one day?", answer: "Yes. You'll cover Prague highlights and Terezín. It's intensive; good if you have limited time and want both." },
      { question: "Is the Terezín visit respectful and guided?", answer: "Yes. The memorial visit is led by the guide with historical context. The tone is educational and respectful." },
      { question: "Can we do Prague and Terezín on separate days?", answer: "Yes. You can book a Prague-only tour or Jewish Quarter tour one day and a Terezín day or half-day tour another day. Combos are for doing both in one day." },
    ],
  },
  {
    categorySlug: "jewish-heritage-tours-in-prague",
    slug: "best-private-terezin-tours",
    title: "Best private Terezín tours from Prague",
    description: "Compare private Terezín tours. Dedicated guide and transport for your party.",
    picks: [
      { slug: "terezin-concentration-camp-private-tour-from-prague", whyWePickIt: "Terezín concentration camp private tour from Prague. Dedicated guide and private transport. Pace and focus can be tailored to you. Ideal for families or small groups who want a personal, reflective visit to the memorial.", bestFor: ["Visitors who want a private, personalised visit to Terezín", "Families or small groups who want a dedicated guide", "Anyone who prefers to set the pace and ask questions freely", "Guests who want transport and guide just for their party"] },
    ],
    intro: "Private Terezín tours from Prague give you a dedicated guide and private transport for your party. You can set the pace, ask questions and spend more time where you need to. Ideal for families, couples or small groups who want a personal visit to the memorial without sharing the guide or vehicle with others.",
    whyBlock: { title: "Why choose a private Terezín tour?", content: "A private tour is tailored to your group. You don't share the guide or the vehicle, so you can take your time and discuss the history in a more intimate setting. Hotel pickup is often included. Suited to those who want a reflective, personalised experience." },
    whatToExpect: ["Pickup in Prague (or meet at a designated point) by your guide and private vehicle.", "Travel to Terezín (about 1 hour).", "Guided visit to the memorial at your pace; time for questions and reflection.", "Return to Prague; drop-off at your hotel or chosen location."],
    faqs: [
      { question: "What are the best private Terezín tours?", answer: "The Terezín concentration camp private tour from Prague is the main option. It includes private transport and a dedicated guide for your party." },
      { question: "Is hotel pickup included?", answer: "Many private tours include pickup from your hotel or a central location. Check the product description for pickup details." },
      { question: "How many people can go?", answer: "Private tours are for your party—typically up to 6–8 depending on the vehicle. Check the product for group size and pricing." },
      { question: "Is admission included?", answer: "Most private Terezín tours include admission to the memorial. Check the product description." },
      { question: "How long is the tour?", answer: "Typically 5–6 hours from Prague including travel. With a private tour you may have some flexibility; confirm with the operator." },
      { question: "Can we request more time at certain sites?", answer: "Private tours often allow more flexibility. Discuss with your guide on the day or when you book." },
      { question: "Is it suitable for families?", answer: "Private tours can work well for families who want to set the pace. The content is sensitive; use your judgement for younger children." },
    ],
  },
  // ————— Night tours in Prague guides —————
  {
    categorySlug: "night-tours-in-prague",
    slug: "best-night-walking-tours",
    title: "Best night walking tours in Prague",
    description: "Compare night walking tours. Prague by night, Old Town mystery and ghosts and legends.",
    picks: [
      { slug: "prague-by-night-walking-tour", whyWePickIt: "Prague by night walking tour. See the illuminated Old Town and key sights with a guide. A classic way to experience the city after dark on foot.", bestFor: ["Visitors who want a guided night walking tour", "Anyone who prefers to explore on foot", "Guests who want to see the Old Town and main sights illuminated", "Travellers who like a structured evening walk with commentary"] },
      { slug: "prague-old-town-mystery-walking-tour", whyWePickIt: "Prague Old Town mystery walking tour. Stories, legends and secrets after dark. A different angle on Prague—atmospheric and story-led.", bestFor: ["Visitors who enjoy mystery and legend-themed tours", "Anyone who wants a story-led night walk", "Guests who like atmosphere and intrigue", "Travellers who want something different from standard sightseeing"] },
      { slug: "prague-ghosts-legends-old-town-walking-tour", whyWePickIt: "Prague ghosts and legends of Old Town walking tour. Spooky tales and local legends after dark. Fun and atmospheric.", bestFor: ["Visitors who enjoy ghost and legend tours", "Anyone who wants a spooky, story-led evening walk", "Guests who like local legends and folklore", "Travellers who want an entertaining night tour"] },
    ],
    intro: "Night walking tours in Prague take you through the Old Town and key sights after dark with a guide. The classic Prague by night tour focuses on the illuminated landmarks; the mystery and ghost tours add stories and legends. All are on foot and typically 2–2.5 hours. Choose by whether you want straight sightseeing or a story-led experience.",
    whyBlock: { title: "Why take a night walking tour?", content: "Prague is beautiful when lit up—the castle, bridges and squares take on a different feel. A guided walk means you see the best spots and hear the history or stories without planning the route. Walking tours are sociable and flexible; no need for a vehicle." },
    whatToExpect: ["Meet your guide in the Old Town or a central point.", "Walk through the illuminated streets with commentary (or stories on ghost/mystery tours).", "See key sights and possibly the best photo angles.", "The tour ends in a central location."],
    faqs: [
      { question: "What are the best night walking tours?", answer: "The best include the Prague by night walking tour, the Old Town mystery walking tour and the ghosts and legends of Old Town tour. The first is classic sightseeing; the other two are story-led." },
      { question: "How long do they last?", answer: "Typically 2 to 2.5 hours. Check the booking page for exact duration." },
      { question: "What time do they start?", answer: "Evening start, usually after sunset (e.g. 19:00–20:00). Exact time is on the booking page." },
      { question: "Where do we meet?", answer: "Usually in the Old Town. Your booking confirmation will have the exact location and time." },
      { question: "Is there a lot of walking?", answer: "Yes. Comfortable shoes are recommended. The pace is usually relaxed." },
      { question: "What's the difference between mystery and ghost tours?", answer: "Both are story-led. Mystery tours focus on secrets and legends; ghost tours focus on ghost stories and spooky tales. Both are atmospheric." },
      { question: "Do we go inside any buildings?", answer: "Most night walking tours are exterior—you see the lit-up façades. Check the description if any interior is included." },
    ],
  },
  {
    categorySlug: "night-tours-in-prague",
    slug: "best-private-night-tours",
    title: "Best private night tours in Prague",
    description: "Compare private night tours. Private sightseeing by night and 4-hour private tour.",
    picks: [
      { slug: "private-sightseeing-prague-by-night", whyWePickIt: "Private sightseeing in Prague by night. Personal guide and private transport to see the illuminated castle, Old Town and key landmarks. A personalised way to experience the city after dark.", bestFor: ["Visitors who want a private night tour", "Couples or families who want a dedicated guide and vehicle", "Anyone who prefers to set the pace and route", "Guests who want to see highlights without walking the whole way"] },
      { slug: "prague-at-night-4-hours-private-tour", whyWePickIt: "Prague at night 4-hour private tour. Dedicated guide (and often transport) for a comprehensive evening. With four hours you can cover the main sights, viewpoints and perhaps a drink stop.", bestFor: ["Visitors who want a long, private night tour", "Couples or families who want a dedicated guide for the evening", "Anyone who wants to see a lot and set the pace", "Guests who prefer a 4-hour private experience"] },
    ],
    intro: "Private night tours in Prague give you a dedicated guide and often private transport so you can see the illuminated city at your own pace. Options include private sightseeing by night (typically 2–3 hours) and the 4-hour private tour for a full evening. Both suit visitors who want a personalised experience without a group.",
    whyBlock: { title: "Why choose a private night tour?", content: "You don't share the guide or the vehicle. You can customise the route, spend more time at viewpoints and ask as many questions as you like. Hotel pickup is often included. Ideal for couples, families or friends who want the evening to themselves." },
    whatToExpect: ["Pickup at your hotel or meeting at a designated point.", "Sightseeing by night—by car/minivan or on foot, depending on the tour.", "Your guide tailors the pace and stops to you.", "End at your hotel or a central location."],
    faqs: [
      { question: "What are the best private night tours?", answer: "The best include private sightseeing in Prague by night and the Prague at night 4-hour private tour. The first is typically 2–3 hours; the second is a full 4-hour evening." },
      { question: "Is transport included?", answer: "Private sightseeing by night usually includes a vehicle. The 4-hour tour may include transport; check the product description." },
      { question: "Is hotel pickup included?", answer: "Many private tours include pickup from your hotel. Check the product description." },
      { question: "Can we customise the route?", answer: "Yes. Private tours are flexible; discuss with your guide at the start." },
      { question: "What time do they start?", answer: "Evening start, usually after sunset. Exact time is on the booking page." },
      { question: "How many people can go?", answer: "Private tours are for your party. Group size may be limited by the vehicle; check the product." },
      { question: "Which is better—2–3 hours or 4 hours?", answer: "2–3 hours covers the main highlights. Four hours gives you time for more viewpoints, a relaxed pace and possibly a drink stop." },
    ],
  },
  {
    categorySlug: "night-tours-in-prague",
    slug: "best-ghost-mystery-night-tours",
    title: "Best ghost and mystery night tours in Prague",
    description: "Compare ghost and mystery night tours. Ghosts and legends, Old Town mystery, medieval underground.",
    picks: [
      { slug: "prague-ghosts-legends-old-town-walking-tour", whyWePickIt: "Prague ghosts and legends of Old Town walking tour. Spooky tales and local legends after dark. Fun and atmospheric.", bestFor: ["Visitors who enjoy ghost and legend tours", "Anyone who wants a spooky, story-led evening walk", "Guests who like local legends and folklore", "Travellers who want an entertaining night tour"] },
      { slug: "prague-old-town-mystery-walking-tour", whyWePickIt: "Prague Old Town mystery walking tour. Stories of secrets, legends and darker tales as you walk the historic streets after dark. Story-led and atmospheric.", bestFor: ["Visitors who enjoy mystery and legend-themed tours", "Anyone who wants a story-led night walk", "Guests who like atmosphere and intrigue", "Travellers who want something different from standard sightseeing"] },
      { slug: "prague-oldtown-medieval-underground-dungeon-tour", whyWePickIt: "Prague Old Town medieval underground and dungeon tour. Explore cellars and dungeons beneath the Old Town with a guide. Atmospheric and historical.", bestFor: ["Visitors who want to see Prague's underground", "Anyone interested in medieval history and dungeons", "Guests who like atmospheric, after-dark experiences", "Travellers who want something different from a street-level tour"] },
    ],
    intro: "Ghost, mystery and medieval underground tours in Prague offer a story-led or atmospheric take on the city after dark. The ghosts and legends tour focuses on spooky tales; the mystery tour on secrets and legends; the medieval underground and dungeon tour takes you below the streets. All are evening experiences with a different flavour from a standard sightseeing walk.",
    whyBlock: { title: "Why choose a ghost, mystery or underground tour?", content: "You get stories and atmosphere rather than just facts. Ghost and mystery tours are entertaining and memorable; the underground tour adds a physical dimension—you're in real historic spaces. Good for visitors who want a themed evening." },
    whatToExpect: ["Meet your guide in the Old Town.", "Walk (or descend) with stories, legends or dungeon history.", "Atmospheric settings—streets by night or cellars and dungeons.", "The tour ends in a central location."],
    faqs: [
      { question: "What are the best ghost and mystery night tours?", answer: "The best include the Prague ghosts and legends of Old Town walking tour, the Old Town mystery walking tour and the Prague Old Town medieval underground and dungeon tour. The first two are story-led walks; the third goes below ground." },
      { question: "Are they scary?", answer: "Ghost and mystery tours are atmospheric and story-led rather than horror. The underground tour is historical and a bit macabre. Suitable for most ages; use your judgement for young children." },
      { question: "Is the underground tour claustrophobic?", answer: "You'll be in cellars and underground spaces. If you're uncomfortable in enclosed or dark places, check the description or contact the operator." },
      { question: "How long do they last?", answer: "Ghost and mystery walks are typically around 2 hours; the underground tour is often 1.5–2 hours. Check the booking page." },
      { question: "What time do they start?", answer: "Evening start, usually after dark. Exact time is on the booking page." },
      { question: "Where do we meet?", answer: "Usually in the Old Town. Your booking confirmation will have the exact location and time." },
      { question: "Is admission included for the underground tour?", answer: "Most underground and dungeon tours include admission. Check the product description." },
    ],
  },
  {
    categorySlug: "night-tours-in-prague",
    slug: "best-night-combo-trike-tours",
    title: "Best night combo and trike tours in Prague",
    description: "Compare Prague night combo tour and night trike group tour.",
    picks: [
      { slug: "prague-night-combo-tour", whyWePickIt: "Prague night combo tour. Multiple experiences in one evening—walking, viewpoints, or a drink stop. A packed evening that gives you more than one way to see Prague by night.", bestFor: ["Visitors who want a full evening programme", "Anyone who likes a combo of walking, views or drinks", "Guests who want variety in one booking", "Travellers who prefer not to organise multiple activities"] },
      { slug: "prague-night-trike-group-tour", whyWePickIt: "Prague in night trike group tour with live guide. Ride through the city by trike after dark—fun, open-air and different from a bus or walking tour.", bestFor: ["Visitors who want a fun, unusual night tour", "Anyone who likes trikes or open-air transport", "Guests who want to see a lot without walking", "Travellers who want something different"] },
    ],
    intro: "Night combo and trike tours in Prague offer variety or an unusual way to see the city after dark. The night combo tour bundles several experiences (e.g. walking plus viewpoints or a drink) in one evening. The trike tour lets you ride through Prague by night with a live guide. Both suit visitors who want more than a standard walking tour.",
    whyBlock: { title: "Why choose a combo or trike tour?", content: "A combo tour gives you multiple elements in one booking—e.g. walk and views, or walk and a drink. A trike tour is a fun, open-air way to cover more ground than on foot. Good for those who want variety or a memorable experience." },
    whatToExpect: ["Combo: meet your guide and do a mix of activities (walking, transport, viewpoints, possibly a drink).", "Trike: meet the group, get a briefing, then ride through Prague by night with your guide.", "Both end in a central location."],
    faqs: [
      { question: "What are the best night combo and trike tours?", answer: "The Prague night combo tour and the Prague in night trike group tour. The combo mixes activities; the trike is a guided ride through the city." },
      { question: "What is included in the combo?", answer: "The exact mix varies—often a walking tour plus a viewpoint or a drink. Check the product description for the full itinerary." },
      { question: "Do I drive the trike or am I a passenger?", answer: "It depends on the tour. Some trike tours have you as a passenger with a driver; others may allow you to drive. Check the product description." },
      { question: "What should I wear for the trike?", answer: "Dress for the weather—open-air trikes can be cool at night. Bring a jacket." },
      { question: "How long are they?", answer: "Combo typically 2–3 hours; trike around 1.5–2 hours. Check the booking page." },
      { question: "Where do we meet?", answer: "Usually in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "Is a drink included in the combo?", answer: "Some combo tours include a drink; others don't. Check the product description." },
    ],
  },
  {
    categorySlug: "night-tours-in-prague",
    slug: "best-views-beer-by-night",
    title: "Best views and beer by night in Prague",
    description: "Compare best views of Prague by night and where Czechs drink beer short tour.",
    picks: [
      { slug: "best-views-prague-by-night", whyWePickIt: "Best views of Prague by night. Visit the best viewpoints for the illuminated city—often by transport so you can cover several spots. Ideal for photography and dramatic views.", bestFor: ["Photography enthusiasts who want night views", "Visitors who want to see Prague from the best viewpoints", "Anyone who prefers viewpoints over a long walk", "Guests who want a focused 'best views' experience"] },
      { slug: "where-actual-czechs-drink-beer-short-tour", whyWePickIt: "Where actual Czechs drink beer: short tour and beer experience. Visit authentic local pubs with a guide. A relaxed way to combine night exploration with Czech beer culture.", bestFor: ["Beer lovers who want to drink where locals do", "Visitors who want a short, relaxed night experience", "Anyone who prefers authentic pubs over touristy bars", "Guests who want a beer-focused evening with a guide"] },
    ],
    intro: "Best views and beer-by-night experiences offer two different ways to enjoy Prague after dark. The best-views tour takes you to the top viewpoints for the illuminated city—often by transport. The short beer tour takes you to pubs where local Czechs drink. Both are typically 1.5–2 hours and suit visitors who want a focused experience rather than a long walking tour.",
    whyBlock: { title: "Why choose a views or beer tour?", content: "The views tour is built for photography and dramatic cityscapes. The beer tour is for anyone who wants to taste Czech beer in authentic local spots with a guide. Both are compact and easy to combine with dinner or more exploring afterwards." },
    whatToExpect: ["Best views: meet your guide (and possibly board transport), then visit several viewpoints with commentary and photo opportunities.", "Beer tour: meet your guide and walk to local pubs for Czech beer and stories about where Czechs drink."],
    faqs: [
      { question: "What are the best views and beer by night options?", answer: "The best include the best views of Prague by night tour and the where actual Czechs drink beer short tour. The first is viewpoint-focused; the second is a short beer experience in local pubs." },
      { question: "Is transport included on the views tour?", answer: "Some best-views tours use a vehicle to reach viewpoints; others may walk. Check the product description." },
      { question: "Are drinks included on the beer tour?", answer: "The beer tour typically includes beer at the stops. Check the product description for how many drinks." },
      { question: "How long are they?", answer: "Both are typically 1.5 to 2 hours. Check the booking page." },
      { question: "What time do they start?", answer: "Evening start; exact time is on the booking page. Views tour is best after sunset; beer tour can be early or late evening." },
      { question: "Where do we meet?", answer: "Usually in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "Is the views tour good for photography?", answer: "Yes. The tour is designed for the best views; your guide may offer tips. Bring your camera or phone." },
    ],
  },
  {
    categorySlug: "night-tours-in-prague",
    slug: "best-medieval-underground-night-tours",
    title: "Best medieval underground night tours in Prague",
    description: "Compare medieval underground and dungeon tours. Old Town cellars and dungeons by night.",
    picks: [
      { slug: "prague-oldtown-medieval-underground-dungeon-tour", whyWePickIt: "Prague Old Town medieval underground and dungeon tour. Explore historic cellars and dungeons beneath the Old Town with a guide. Atmospheric and historical—a different way to see Prague by night.", bestFor: ["Visitors who want to see Prague's underground", "Anyone interested in medieval history and dungeons", "Guests who like atmospheric, after-dark experiences", "Travellers who want something different from a street-level tour"] },
      { slug: "prague-ghosts-legends-old-town-walking-tour", whyWePickIt: "Prague ghosts and legends of Old Town walking tour. Spooky stories and legends—atmospheric and story-led. Pairs well with the underground for a full 'dark' evening.", bestFor: ["Visitors who enjoy ghost and legend tours", "Anyone who wants a spooky, story-led evening", "Guests who like local legends", "Travellers who want an entertaining night tour"] },
    ],
    intro: "Medieval underground and dungeon tours take you below the streets of the Old Town into historic cellars and dungeon spaces. The tour is run in the evening for atmosphere and combines history with a touch of the macabre. If you want more story-led atmosphere the same evening, the ghosts and legends tour is a good pairing.",
    whyBlock: { title: "Why choose a medieval underground tour?", content: "You see a side of Prague most visitors don't—the medieval layers beneath the streets. The guide explains how these spaces were used. It's atmospheric and educational. Run at night for added atmosphere." },
    whatToExpect: ["Meet your guide in the Old Town.", "Descend into the medieval underground and dungeon areas.", "Your guide explains the history and use of the spaces.", "Return to street level; the tour ends in a central location."],
    faqs: [
      { question: "What are the best medieval underground night tours?", answer: "The Prague Old Town medieval underground and dungeon tour is the main option. The ghosts and legends tour is a good add-on if you want more story-led atmosphere the same evening." },
      { question: "Is admission included?", answer: "Most underground and dungeon tours include admission. Check the product description." },
      { question: "Is it claustrophobic?", answer: "You'll be in cellars and underground spaces. If you're uncomfortable in enclosed or dark places, check the description or contact the operator before booking." },
      { question: "How long is the tour?", answer: "Typically 1.5 to 2 hours. Check the booking page." },
      { question: "What time does it start?", answer: "Evening start; exact time is on the booking page. Often run at night for atmosphere." },
      { question: "Where do we meet?", answer: "Meeting point is in the Old Town. Your booking confirmation will have the exact location and time." },
      { question: "Is it suitable for children?", answer: "The content is historical and can be a bit dark. Use your judgement for younger children; the operator may have age recommendations." },
    ],
  },
  // --- Private tours in Prague ---
  {
    categorySlug: "private-tours-in-prague",
    slug: "best-full-day-private-tours",
    title: "Best full-day private tours in Prague",
    description: "Compare full-day private tours: 7-hour Prague in one day, best of Prague, and full-day walking with lunch and boat. One guide, your pace.",
    picks: [
      { slug: "prague-one-day-private-tour-7-hours", whyWePickIt: "A full 7-hour private tour covering the main sights in one day. Ideal if you have limited time and want a dedicated guide to hit the highlights at your pace.", bestFor: ["Visitors with one full day in Prague", "Anyone who wants the main sights in one go", "Families or small groups who want a private guide", "Travellers who prefer to set the pace"] },
      { slug: "prague-full-day-private-walking-tour-lunch-boat", whyWePickIt: "Combines walking, a sit-down lunch and a boat trip on the Vltava. A complete private day with variety—history, food and the river.", bestFor: ["Guests who want walking, lunch and boat in one day", "Anyone who likes a mix of activities", "Families or couples wanting a full-day experience", "Travellers who want lunch and boat included"] },
      { slug: "best-of-prague-private-tour", whyWePickIt: "A curated best-of-Prague private tour. Covers the essential sights with a dedicated guide; duration and focus can often be tailored.", bestFor: ["First-time visitors who want the highlights", "Anyone who wants a private 'best of' experience", "Small groups who value flexibility", "Guests who want a quality overview"] },
    ],
    intro: "Full-day private tours give you a dedicated guide for the whole day. Options include a 7-hour Prague-in-one-day tour, a full-day walking tour with lunch and a boat trip, and a best-of-Prague private tour. You set the pace and can often tailor the route with your guide.",
    whyBlock: { title: "Why choose a full-day private tour?", content: "You get a guide to yourself for the whole day, so you can cover more ground, ask as many questions as you like, and adjust the route. Ideal when you have one full day or want a single, stress-free way to see the main sights." },
    whatToExpect: [
      "Meeting your guide at your hotel or a central point.",
      "A full day of sightseeing—walking, and sometimes car or boat—at your pace.",
      "Commentary on history, legends and practical tips; you can ask to add or skip stops.",
      "Some tours include lunch and/or a boat trip; check the product for inclusions.",
      "End at your hotel or a central location.",
    ],
    faqs: [
      { question: "What are the best full-day private tours in Prague?", answer: "The 7-hour Prague in one day private tour, the full-day private walking tour with lunch and boat trip, and the best of Prague private tour are strong options. Choose by whether you want lunch and boat included or a straight sightseeing day." },
      { question: "Is hotel pickup included?", answer: "Many full-day private tours include hotel pickup. Check the product description for your tour." },
      { question: "Can we customise the route?", answer: "Yes. Private tours are flexible; discuss your interests and pace with your guide at the start. You can add, skip or spend more time at sights." },
      { question: "Is lunch included?", answer: "The full-day walking tour with lunch and boat includes lunch; others may not. Check each product." },
      { question: "How many people can join?", answer: "Private means just your party. Maximum group size and pricing vary by tour; check the booking page." },
      { question: "How long is a full-day tour?", answer: "Typically 6–8 hours. The 7-hour tour is a common length; the one with lunch and boat is a full day. Exact duration is on each product page." },
      { question: "What if we need a break?", answer: "Private tours can be paced to you. Tell your guide if you want a coffee break or rest; they can adjust the route." },
    ],
  },
  {
    categorySlug: "private-tours-in-prague",
    slug: "best-private-walking-tours",
    title: "Best private walking tours in Prague",
    description: "Private Old Town, Jewish Quarter and facts-and-legends walking tours. Your guide, your pace.",
    picks: [
      { slug: "prague-old-town-facts-and-legends", whyWePickIt: "Focused on the Old Town with stories, legends and history. A classic private walking tour for first-time visitors who want context and atmosphere.", bestFor: ["First-time visitors to the Old Town", "Anyone who enjoys stories and legends", "Guests who want a private walking tour of the centre", "Travellers who like a narrative-led tour"] },
      { slug: "prague-jewish-quarter-walking-tour-private", whyWePickIt: "Private walking tour of the Jewish Quarter (Josefov). Covers synagogues, the cemetery and history with a dedicated guide—ideal for a deeper, respectful visit.", bestFor: ["Visitors who want to explore the Jewish Quarter in depth", "Anyone interested in Jewish heritage and history", "Guests who prefer a private guide for sensitive topics", "Travellers who want to set the pace in Josefov"] },
      { slug: "best-of-prague-private-tour", whyWePickIt: "A best-of-Prague private tour that typically includes key areas on foot. Good if you want a broader overview with one guide.", bestFor: ["Guests who want a private overview of Prague", "First-time visitors who want the main sights on foot", "Small groups who value flexibility", "Anyone who wants one guide for the highlights"] },
    ],
    intro: "Private walking tours put a dedicated guide at your side for the Old Town, Jewish Quarter or a best-of overview. You walk at your pace and can ask questions and adjust the route. Options include Old Town facts and legends, Jewish Quarter (Josefov) and a best-of Prague private tour.",
    whyBlock: { title: "Why choose a private walking tour?", content: "You get the guide to yourself, so you can stop when you want, ask as many questions as you like, and tailor the route. Ideal for the Old Town and Jewish Quarter where the stories and history benefit from a personal guide." },
    whatToExpect: [
      "Meeting your guide at your hotel or a central meeting point.",
      "Walking through the Old Town, Jewish Quarter or both, depending on the tour.",
      "Stories, legends and history from your guide; you can ask to extend or shorten sections.",
      "End at a central location or back at your hotel.",
    ],
    faqs: [
      { question: "What are the best private walking tours in Prague?", answer: "The Old Town facts and legends tour, the private Jewish Quarter walking tour and the best of Prague private tour are top choices. Pick by focus: Old Town stories, Jewish heritage or a broader best-of." },
      { question: "Is the Jewish Quarter tour suitable for children?", answer: "Content is historical and can include difficult topics. Use your judgement; the guide can often adapt the tone. Check with the operator if unsure." },
      { question: "How long are private walking tours?", answer: "Typically 2–4 hours depending on the tour. Half-day and full-day options exist. Check each product for duration." },
      { question: "Do we need to book synagogue tickets separately?", answer: "Some Jewish Quarter tours include admission; others may require separate tickets. Check the product description." },
      { question: "Can we combine Old Town and Jewish Quarter?", answer: "Some tours cover both; the best-of Prague private tour may include both areas. Or book two separate private tours on different days." },
      { question: "Where do we meet?", answer: "Usually at your hotel or a central point. Your booking confirmation will have the exact location and time." },
      { question: "What if it rains?", answer: "Walking tours run in most weather. Bring an umbrella or rain jacket; your guide may adjust the route to include more indoor or covered spots." },
    ],
  },
  {
    categorySlug: "private-tours-in-prague",
    slug: "best-private-car-and-transfers",
    title: "Best private car and transfer tours in Prague",
    description: "Historical car sightseeing and private airport transfers. Travel in style or get to and from the airport with a dedicated driver.",
    picks: [
      { slug: "historical-car-sightseeing-tour-prague", whyWePickIt: "Sightseeing in a historical car with a private driver/guide. A distinctive way to see Prague—vintage vehicle and commentary in one.", bestFor: ["Guests who want a unique, vintage car experience", "Anyone who prefers not to walk long distances", "Travellers who like classic cars and history", "Small groups who want a private driver"] },
      { slug: "prague-private-transfer-airport", whyWePickIt: "Private transfer between Prague Airport and the city. No shared shuttles—just you and your driver, with meet-and-greet options.", bestFor: ["Travellers who want a stress-free airport transfer", "Families or groups with luggage", "Anyone arriving or departing at odd hours", "Guests who value door-to-door private transport"] },
    ],
    intro: "Private car options in Prague include a historical car sightseeing tour—seeing the city in a vintage vehicle with a dedicated driver—and private airport transfers for a comfortable, door-to-door journey. Both give you the vehicle to yourself.",
    whyBlock: { title: "Why choose a private car or transfer?", content: "A private car means no shared shuttle and no waiting. For sightseeing, a historical car adds a unique angle; for the airport, you get reliability and comfort, often with meet-and-greet and help with luggage." },
    whatToExpect: [
      "For sightseeing: meet your driver/guide and set off in a historical car; commentary as you go; stops as agreed.",
      "For transfers: driver meets you at the airport or your hotel; direct journey to your destination; help with luggage where offered.",
      "Fixed price for your party; no per-person shuttle hassle.",
    ],
    faqs: [
      { question: "What are the best private car and transfer options in Prague?", answer: "The historical car sightseeing tour is the standout for a unique drive around Prague. For airport transfers, the dedicated Prague private transfer to/from airport is the main product. Both are private—just your party and the driver." },
      { question: "Is the historical car tour just driving or do we get out?", answer: "Typically you can stop at key sights; the exact format is on the product page. It's sightseeing by car with the option to get out at selected spots." },
      { question: "How do we find our driver at the airport?", answer: "Private transfers usually include a meet-and-greet: the driver waits with a sign. Your confirmation will have contact details and meeting instructions." },
      { question: "Is the transfer available 24/7?", answer: "Many private airport transfers offer 24/7 service. Check the product for availability and booking conditions." },
      { question: "How many people fit in the car?", answer: "Vehicle capacity varies by product—cars and minivans are common. Check the booking page for your group size and luggage." },
      { question: "Can we book a one-way or round-trip transfer?", answer: "Yes. Transfers are typically bookable one-way (airport to city or city to airport) or round-trip. See the product options." },
      { question: "Is the historical car suitable for kids?", answer: "Usually yes; it's a private car with seats for your party. Check the product for child seats if needed." },
    ],
  },
  {
    categorySlug: "private-tours-in-prague",
    slug: "best-private-boat-tours",
    title: "Best private boat tours in Prague",
    description: "Private Vltava boat tours—just your party and the skipper. Compare options and book with free cancellation.",
    picks: [
      { slug: "prague-private-boat-tour", whyWePickIt: "Private boat tour on the Vltava for your party only. See the riverside sights from the water with a dedicated skipper; duration and route may vary by product.", bestFor: ["Couples or small groups who want the boat to themselves", "Anyone who wants a relaxed view of Prague from the river", "Guests who prefer a private experience over a shared cruise", "Travellers who want to combine walking tours with a boat trip"] },
      { slug: "prague-private-vltava-boat-tour", whyWePickIt: "Another private Vltava boat option—your group and the skipper. Compare duration and inclusions with the other private boat tour to choose.", bestFor: ["Visitors who want a private Vltava experience", "Small groups looking for a second option to compare", "Anyone who wants flexibility on timing or route", "Guests who like the idea of a private river cruise"] },
    ],
    intro: "Private boat tours on the Vltava give you the boat to yourself—no shared deck. You get a dedicated skipper and a relaxed view of Prague from the water. Two main private boat products are available; compare duration and inclusions when you book.",
    whyBlock: { title: "Why choose a private boat tour?", content: "You have the boat for your party only, so you can set the pace, ask questions and enjoy the views without sharing the space. Ideal for couples, families or small groups who want a special river experience." },
    whatToExpect: [
      "Meeting at the pier in central Prague (exact point in your confirmation).",
      "Boarding your private boat with your skipper.",
      "A cruise on the Vltava past riverside sights; commentary as agreed.",
      "Return to the pier; total duration as per the product (e.g. 1–2 hours).",
    ],
    faqs: [
      { question: "What are the best private boat tours in Prague?", answer: "Two main private Vltava boat tours are available—both are for your party only with a dedicated skipper. Compare duration, route and inclusions on the product pages to choose." },
      { question: "How many people can join?", answer: "Private means just your group. Boat capacity varies; typically a small group (e.g. up to 6–10). Check the product for maximum capacity and pricing." },
      { question: "Where do we board?", answer: "The pier is in central Prague on the Vltava. Your booking confirmation will have the exact location and time." },
      { question: "What if the weather is bad?", answer: "Operators may cancel or reschedule in unsafe conditions. Otherwise, boats often have some shelter. Check the operator's policy when you book." },
      { question: "Is food or drink included?", answer: "Varies by product. Some include a drink or snack; others are sightseeing only. Check the product description." },
      { question: "Can we choose the time?", answer: "Private tours often allow you to select a time slot when booking. See the product for available times." },
      { question: "How long is the cruise?", answer: "Typically around 1–2 hours for a private boat tour. Exact duration is on each product page." },
    ],
  },
  {
    categorySlug: "private-tours-in-prague",
    slug: "best-airport-arrival-private-tours",
    title: "Best airport and arrival private tours in Prague",
    description: "Private airport transfer and half-day city tour combined. Land, meet your guide, and start sightseeing without organising transfer separately.",
    picks: [
      { slug: "prague-airport-arrival-transfer-half-day-walking-tour", whyWePickIt: "Meet your guide at the airport, transfer to the city, then a half-day walking tour. No need to book transfer and tour separately—ideal for a smooth first day.", bestFor: ["Travellers who want to hit the ground running", "Anyone who prefers not to organise transfer and tour separately", "Guests arriving in the morning who want to use the day", "Families or groups who want a simple arrival experience"] },
      { slug: "prague-private-transfer-airport", whyWePickIt: "Dedicated private transfer between Prague Airport and the city. Use it on arrival, departure or both. Reliable, door-to-door, with meet-and-greet options.", bestFor: ["Anyone who wants a stress-free airport transfer", "Travellers with lots of luggage or odd-hour flights", "Guests who value a private driver and fixed price", "Groups who want to avoid shared shuttles"] },
    ],
    intro: "Arrival private tours combine airport transfer with a half-day city tour—your guide meets you at the airport, you transfer to the city, then start sightseeing. If you only need transport, a private airport transfer is the alternative. Both are private: just your party and the driver or guide.",
    whyBlock: { title: "Why combine airport arrival with a tour?", content: "You land, meet your guide or driver, and go. No separate transfer booking, no waiting for check-in to start the day. Especially useful when you arrive in the morning and want to use the afternoon for a walking tour." },
    whatToExpect: [
      "For arrival + tour: meet at the airport (driver or guide with a sign); private transfer to your hotel or a central point; then a half-day walking tour; end at your hotel or a central location.",
      "For transfer only: meet at the airport or your hotel; direct private drive to your destination; help with luggage where offered.",
      "Your confirmation will have meeting details and contact information.",
    ],
    faqs: [
      { question: "What are the best airport and arrival private tours in Prague?", answer: "The Prague airport private arrival transfer and half-day city walking tour combines transfer and sightseeing in one. For transfer only, the Prague private transfer to/from airport is the main option. Both are private." },
      { question: "Do we need to book the tour for the same day we land?", answer: "The arrival + half-day tour is designed for the day you land—you're met at the airport and then do the tour. Transfer-only can be used any day for arrival or departure." },
      { question: "What if our flight is delayed?", answer: "Operators usually track your flight or ask for your details. Confirm the policy when you book; many will wait or reschedule." },
      { question: "Is luggage included?", answer: "Private transfers and arrival tours typically accommodate normal luggage in the vehicle. For large groups or lots of bags, check capacity on the product page." },
      { question: "Where does the half-day tour go?", answer: "Usually the main city centre sights—Old Town and key landmarks. Exact route is on the product description." },
      { question: "Can we do the tour and then go to our hotel?", answer: "Yes. The arrival + tour typically ends at your hotel or a central point; you can specify when you book." },
      { question: "Is the transfer available at night?", answer: "Private airport transfers often run 24/7. The arrival + half-day tour is typically for daytime arrivals. Check each product." },
    ],
  },
  {
    categorySlug: "private-tours-in-prague",
    slug: "best-private-combo-tours",
    title: "Best private combo tours in Prague",
    description: "Private tours that combine walking, lunch, boat trip or airport arrival. Full-day and combo experiences.",
    picks: [
      { slug: "prague-full-day-private-walking-tour-lunch-boat", whyWePickIt: "Walking, lunch and a boat trip in one private day. The full combo—history on foot, a sit-down meal and the Vltava—with one guide.", bestFor: ["Guests who want variety in one day", "Anyone who wants lunch and boat included", "Families or couples wanting a complete private day", "Travellers who like a mix of walking, food and river"] },
      { slug: "prague-airport-arrival-transfer-half-day-walking-tour", whyWePickIt: "Combo of airport transfer and half-day walking tour. Land, meet your guide, transfer to the city, then sightsee—no separate bookings.", bestFor: ["Travellers who want transfer and tour in one", "Anyone arriving in the morning who wants to use the day", "Guests who prefer a simple arrival experience", "Groups who want one point of contact for arrival and tour"] },
      { slug: "prague-one-day-private-tour-7-hours", whyWePickIt: "A 7-hour private tour covering the main sights. A 'combo' in the sense of a full overview in one go—walking and possibly short drives; one guide, one day.", bestFor: ["Visitors with one full day in Prague", "Anyone who wants the main sights in one tour", "Small groups who want a dedicated guide", "Travellers who like a full-day overview"] },
    ],
    intro: "Private combo tours bundle several elements: full-day walking with lunch and boat, or airport arrival with a half-day tour. You get one booking, one guide (or guide and driver), and a varied day without organising each part separately.",
    whyBlock: { title: "Why choose a private combo tour?", content: "You get more in one go—walking plus lunch plus boat, or airport plus city tour—without coordinating multiple providers. Ideal when you want a full day with variety or a smooth arrival day." },
    whatToExpect: [
      "Full-day with lunch and boat: walking in the morning; lunch at a local venue; boat trip on the Vltava; one guide throughout.",
      "Airport + half-day: meet at the airport; private transfer to the city; half-day walking tour; end at your hotel or central point.",
      "7-hour one-day tour: full-day sightseeing with one guide; may include walking and short drives; main sights in one day.",
      "Details (duration, meeting point, inclusions) are on each product page.",
    ],
    faqs: [
      { question: "What are the best private combo tours in Prague?", answer: "The full-day private walking tour with lunch and boat combines walking, lunch and Vltava cruise. The airport arrival transfer and half-day walking tour combines transfer and sightseeing. The 7-hour Prague in one day private tour is a full-day overview. All are private." },
      { question: "Is lunch included in combo tours?", answer: "The full-day walking tour with lunch and boat includes lunch. The airport + half-day tour typically does not include lunch (check the product). The 7-hour tour may or may not—see the product description." },
      { question: "Can we do the boat part only?", answer: "The full-day with lunch and boat is sold as a package. If you only want a boat trip, book a dedicated private boat tour instead." },
      { question: "How do we book the airport + tour?", answer: "Book the arrival transfer and half-day tour product; you give your flight details and the operator arranges the meet at the airport and the tour." },
      { question: "Are combo tours private?", answer: "Yes. The tours we list here are private—just your party and the guide (and driver where applicable)." },
      { question: "What if we have dietary requirements?", answer: "For the tour with lunch, mention dietary requirements when you book. Operators can usually accommodate with advance notice." },
      { question: "How long is the full-day combo?", answer: "The full-day with lunch and boat is typically a full day (e.g. 7–8 hours). The airport + half-day is transfer plus about 3–4 hours of walking. Exact times are on each product." },
    ],
  },
  // --- Bike tours in Prague ---
  {
    categorySlug: "bike-tours-in-prague",
    slug: "best-ebike-tours",
    title: "Best e-bike tours in Prague",
    description: "Effortless e-bike tours of Prague Old, Lesser and New Towns and viewpoint sightseeing. Electric assist, key sights.",
    picks: [
      { slug: "effortless-ebike-tour-prague", whyWePickIt: "Covers Old Town, Lesser Town and New Town on an e-bike with minimal effort. Ideal for a relaxed but comprehensive city overview in one ride.", bestFor: ["First-time visitors who want to see a lot", "Anyone who likes cycling but wants help on hills", "Guests who want a fun, low-effort city tour", "Visitors who prefer riding to walking"] },
      { slug: "pragues-viewpoints-sightseeing-ebike", whyWePickIt: "Designed for the best viewpoints and photo spots. E-bike makes the climbs easy so you focus on the views and the guide's stories.", bestFor: ["Visitors who want the best photo spots", "Anyone who prefers not to climb on foot", "E-bike fans who want sightseeing focus", "First-time visitors who want a visual overview"] },
    ],
    intro: "E-bike tours let you cover Prague's centre and viewpoints without getting tired. Electric assist handles the hills; you enjoy the ride and the commentary. Options include an effortless tour of the Old, Lesser and New Towns and a viewpoints-and-sightseeing tour on a comfortable e-bike.",
    whyBlock: { title: "Why choose an e-bike tour?", content: "You see more in less time and with less effort than on foot. E-bikes are easy to ride—no need to be very fit. Ideal for first-time visitors who want a fun, efficient way to explore the city." },
    whatToExpect: [
      "Meet at the operator's base; bike fit and short briefing.",
      "Ride through the Old Town, Lesser Town and/or New Town, or to viewpoints—depending on the tour.",
      "Stops for commentary and photos; pace is relaxed.",
      "Return to the start. Duration typically 2–3 hours.",
    ],
    faqs: [
      { question: "What are the best e-bike tours in Prague?", answer: "The effortless e-bike tour of the Old, Lesser and New Towns and the viewpoints-and-sightseeing e-bike tour are two strong options. Both include bike, helmet and guide." },
      { question: "Do I need to be fit?", answer: "No. E-bikes provide pedal assist; basic cycling ability is enough. You'll hardly feel the hills." },
      { question: "Is the route safe?", answer: "Tours use bike paths and quieter streets where possible. Your guide leads and explains the rules." },
      { question: "How long are e-bike tours?", answer: "Typically 2–3 hours. Check each product for exact duration." },
      { question: "Where do we meet?", answer: "Meeting point is in central Prague. Your booking confirmation will have the exact location and time." },
      { question: "What if it rains?", answer: "Tours may run in light rain. In heavy rain the operator may reschedule. Check the policy when you book." },
      { question: "Can children join?", answer: "Age and height limits may apply for e-bikes. Some operators have child seats or smaller bikes. Check the product." },
    ],
  },
  {
    categorySlug: "bike-tours-in-prague",
    slug: "best-mountain-bike-tours",
    title: "Best mountain bike tours in Prague",
    description: "Guided singletrack rides near Prague and full-day mountain biking to Karlštejn Castle. For riders who want trails.",
    picks: [
      { slug: "prague-mountain-biking-singletracks", whyWePickIt: "Hits the best singletrack trails around Prague with a local guide. Technical and flow trails suited to your level—a proper MTB experience close to the city.", bestFor: ["Mountain bikers who want guided singletrack", "Riders with some off-road experience", "Visitors who want an active, adrenaline half-day", "Anyone who prefers trails to city cycling"] },
      { slug: "prague-mountain-biking-karlstejn-castle", whyWePickIt: "Full-day ride from Prague to Karlštejn Castle. Cycle through the countryside to one of the Czech Republic's most famous castles—nature, culture and a proper ride.", bestFor: ["Fit cyclists who want a full-day ride", "Visitors who want to see Karlštejn and enjoy the journey", "Mountain bikers who like mixed terrain", "Anyone who wants a day trip from Prague by bike"] },
    ],
    intro: "Mountain bike tours near Prague range from half-day singletrack blasts to a full-day ride to Karlštejn Castle. You get a guide who knows the trails and the terrain. Ideal for riders who want off-road action without travelling far from the city.",
    whyBlock: { title: "Why choose a mountain bike tour?", content: "You get proper trails and a guide who adapts the route to the group's level. Singletrack tours are about the ride; the Karlštejn trip adds a famous castle and a full day in the countryside." },
    whatToExpect: [
      "Meet at the trailhead or in Prague; bike and kit sorted.",
      "Guided ride on singletrack or mixed terrain—pace and difficulty suited to the group.",
      "For Karlštejn: ride to the castle; visit (if included) or view from outside; return to Prague.",
      "Half-day tours: a few hours on the trails. Full-day: 8–9 hours including ride and castle.",
    ],
    faqs: [
      { question: "What are the best mountain bike tours in Prague?", answer: "The singletrack blast near Prague and the full-day mountain biking trip to Karlštejn Castle are the two main options. One is half-day trails; the other is a full-day ride with a castle visit." },
      { question: "Do I need my own bike?", answer: "Bike hire is often included. Check the product. If you prefer your own bike, ask the operator." },
      { question: "What level of riding?", answer: "Singletrack can be technical; tours often adapt to the group. Karlštejn requires good fitness. Check the description or contact the operator." },
      { question: "Is equipment included?", answer: "Helmet and bike are usually included. Check each product for what's provided." },
      { question: "Where do we meet?", answer: "Singletrack tours often meet at a trailhead outside central Prague. Karlštejn trip meets in or near Prague. Your confirmation will have the exact location." },
      { question: "Is Karlštejn Castle entry included?", answer: "Check the product—some trips include castle entry; others stop for a visit or photos. Confirm when you book." },
      { question: "How fit do I need to be for Karlštejn?", answer: "Full-day ride to Karlštejn requires good fitness. Distance and terrain are on the product page; contact the operator if unsure." },
    ],
  },
  {
    categorySlug: "bike-tours-in-prague",
    slug: "best-boat-and-bike-tours",
    title: "Best boat and bike experiences in Prague",
    description: "Bohemian Switzerland boat-and-bike day trip from Prague and Prague cycle boat on the Vltava. Bike plus water.",
    picks: [
      { slug: "bohemian-switzerland-boat-bike-trip-prague", whyWePickIt: "Full-day private (or small-group) trip: cycle and boat in Bohemian Switzerland. Bike through the national park and a boat ride on the Kamenice—nature and activity in one.", bestFor: ["Active travellers who want biking and boating in one day", "Visitors who want to escape the city", "Small groups or couples who like private trips", "Anyone who enjoys nature and light adventure"] },
      { slug: "prague-cycle-boat", whyWePickIt: "Pedal-powered boat on the Vltava—you and your group power the boat. Quirky, social and unique. Great for groups and anyone who wants something different from a standard cruise.", bestFor: ["Groups and friends who want a fun, social activity", "Anyone who wants a unique way to see the Vltava", "Families with older kids who can pedal", "Visitors looking for a light, entertaining experience"] },
    ],
    intro: "Boat-and-bike experiences in Prague mean two things: a full-day trip to Bohemian Switzerland (cycle in the national park plus a boat on the Kamenice) and the Prague cycle boat on the Vltava—a pedal-powered group boat. Both combine cycling (or pedalling) with time on the water.",
    whyBlock: { title: "Why combine boat and bike?", content: "Bohemian Switzerland gives you a day out of the city with varied activity—cycling and a scenic boat section. The cycle boat is a fun, social way to be on the Vltava without a motor—everyone pedals together." },
    whatToExpect: [
      "Bohemian Switzerland: drive from Prague; cycle in the national park; boat on the Kamenice; return to Prague. Full day.",
      "Cycle boat: meet at the pier; safety briefing; pedal the boat on the Vltava; return to the pier. Typically 1–2 hours.",
      "Group sizes and exact itineraries are on each product page.",
    ],
    faqs: [
      { question: "What are the best boat and bike experiences?", answer: "The Bohemian Switzerland boat-and-bike day trip from Prague and the Prague cycle boat on the Vltava. One is a full-day trip; the other is a short pedal-boat experience in the city." },
      { question: "Is Bohemian Switzerland private or group?", answer: "Product may be private or small group. Check the booking page for group size and pricing." },
      { question: "Do I need to be fit for the cycle boat?", answer: "Pedalling is shared by the group, so effort is spread. Moderate activity level is enough." },
      { question: "How many people fit on the cycle boat?", answer: "Cycle boats typically seat a group (e.g. 6–12). Check the product for capacity and pricing." },
      { question: "Is lunch included on the Bohemian Switzerland trip?", answer: "Check the product—some day trips include lunch; others stop at a restaurant where you pay locally." },
      { question: "Where do we board the cycle boat?", answer: "Pier is on the Vltava in central Prague. Your confirmation will have the exact location." },
      { question: "What if the weather is bad?", answer: "Operators may cancel or reschedule in strong wind or rain. Check the policy when you book." },
    ],
  },
  {
    categorySlug: "bike-tours-in-prague",
    slug: "best-beer-bike-and-segway",
    title: "Best beer bike and Segway tours in Prague",
    description: "Prague beer bike with unlimited beer and small-group Segway sightseeing. Fun, social and quick ways to see the city.",
    picks: [
      { slug: "prague-beer-bike-2-hour-unlimited-beer", whyWePickIt: "Pedal a beer bike through Prague with a 50-litre keg and unlimited beer. A party-style experience for groups—mobile bar on wheels with a driver who steers.", bestFor: ["Groups of friends or stag/hen dos", "Anyone who wants a fun, social beer experience", "Visitors who like the idea of a moving pub", "Guests who want something memorable and silly"] },
      { slug: "prague-segway-sightseeing-tour-1-hour", whyWePickIt: "One-hour small-group Segway sightseeing. Quick training, then glide past key sights. No pedalling—just balance and enjoy. Ideal for a short, fun overview.", bestFor: ["Visitors who want a quick, fun overview", "Anyone curious to try a Segway", "Guests who want to cover distance without walking", "Small groups who like a shared experience"] },
    ],
    intro: "Beer bike and Segway tours are two of the most fun ways to see Prague. The beer bike is a group pedal-powered bar on wheels—unlimited beer and a driver who steers. The Segway tour is a 1-hour glide through the centre with minimal effort. Both are social and memorable.",
    whyBlock: { title: "Why try a beer bike or Segway?", content: "Beer bike is for groups who want a party on the move—everyone pedals, beer flows, and you see the city. Segway is for anyone who wants a quick, easy, fun way to cover a lot of ground without walking." },
    whatToExpect: [
      "Beer bike: meet at the designated point; get on the bike; driver explains the rules; 2-hour ride through Prague with beer.",
      "Segway: meet your guide; short training until everyone is comfortable; 1-hour ride past key sights; return to the start.",
      "Age limits apply for alcohol (beer bike) and often for Segway (e.g. min age 10–12).",
    ],
    faqs: [
      { question: "What are the best beer bike and Segway tours in Prague?", answer: "The 2-hour beer bike with 50 L and unlimited beer and the 1-hour small-group Segway sightseeing tour are the main options. One is group party fun; the other is a short, fun sightseeing glide." },
      { question: "How many people on the beer bike?", answer: "Beer bikes seat a group—often 8–16. Check the product for min/max and pricing." },
      { question: "Do we actually pedal the beer bike?", answer: "Yes—the bike is pedal-powered. The driver steers; the group pedals. It's part of the experience." },
      { question: "Is there an age limit for the beer bike?", answer: "Alcohol is served; minimum age is usually 18. Check the product and local laws." },
      { question: "Have you never ridden a Segway?", answer: "Training is included. Most people get the hang of it in a few minutes. The guide won't set off until everyone is ready." },
      { question: "Are there Segway age or weight limits?", answer: "Operators often have minimum age (e.g. 10–12) and weight limits. Check the product." },
      { question: "Where do we go on the beer bike?", answer: "Route is set by the operator—usually through allowed streets in the centre. You'll see the city while pedalling and drinking." },
    ],
  },
  {
    categorySlug: "bike-tours-in-prague",
    slug: "best-electric-trike-tours",
    title: "Best electric trike tours in Prague",
    description: "Prague viewpoints and sightseeing on electric trikes. Stable, easy, no balance needed—great views and fun.",
    picks: [
      { slug: "pragues-panoramic-viewpoints-electric-trike", whyWePickIt: "Panoramic viewpoints and sightseeing on an electric trike. Stable and easy—no balance needed. A fun alternative to an e-bike for anyone who prefers three wheels.", bestFor: ["Anyone who prefers a trike to a two-wheel bike", "Visitors who want stability and ease", "Guests who want viewpoints without walking", "People who want a fun, unusual way to sightsee"] },
      { slug: "prague-electric-trike-tour-sightseeing", whyWePickIt: "Sightseeing, viewpoints and fun on an electric trike. Easy to handle and open to anyone who can pedal. Relaxed, memorable way to see the city on three wheels.", bestFor: ["Anyone who wants a fun, easy way to see Prague", "Visitors who prefer trikes to two-wheel bikes", "Guests who want viewpoints without walking", "People looking for a slightly different tour experience"] },
    ],
    intro: "Electric trike tours let you see Prague's viewpoints and sights on three wheels. Trikes are stable—no balance needed—and have electric assist for the hills. Two main options focus on panoramic viewpoints and general sightseeing. Ideal if you prefer a trike to an e-bike or want something a bit different.",
    whyBlock: { title: "Why choose an electric trike?", content: "Three wheels mean stability and ease. You get the same benefits as an e-bike—see more with less effort—without worrying about balance. Great for anyone who hasn't cycled in a while or prefers a trike." },
    whatToExpect: [
      "Meet and get your trike; short briefing.",
      "Ride to viewpoints and key sights; photo stops and commentary.",
      "Electric assist on hills; relaxed pace.",
      "Return to the start. Duration typically 2–3 hours.",
    ],
    faqs: [
      { question: "What are the best electric trike tours in Prague?", answer: "Two main options: Prague's panoramic viewpoints and sightseeing on an electric trike, and the Prague electric trike tour (sightseeing, viewpoints and fun). Both are stable, easy and guided." },
      { question: "What is an electric trike?", answer: "A three-wheeled vehicle with electric pedal assist. You pedal but get help on hills; the third wheel adds stability. No balance needed." },
      { question: "Do I need to know how to ride a bike?", answer: "Trikes are easier than bikes for balance. If you can pedal and steer, you can usually ride a trike. The guide will brief you." },
      { question: "What's the difference between the two trike tours?", answer: "Similar experience—viewpoints and sightseeing on an electric trike. Slight differences in route or focus; compare the product pages when you book." },
      { question: "How long are trike tours?", answer: "Typically 2–3 hours. Check each product for exact duration." },
      { question: "Where do we meet?", answer: "Meeting point is in central Prague. Your booking confirmation will have the exact location." },
      { question: "Is it suitable for older guests?", answer: "Yes. Electric trikes are gentle and stable—ideal for anyone who prefers not to walk long distances or balance on two wheels." },
    ],
  },
  {
    categorySlug: "bike-tours-in-prague",
    slug: "best-bike-day-trips",
    title: "Best bike day trips from Prague",
    description: "Full-day bike trips from Prague: Bohemian Switzerland boat and bike, mountain biking to Karlštejn Castle. Nature and culture.",
    picks: [
      { slug: "bohemian-switzerland-boat-bike-trip-prague", whyWePickIt: "Combine cycling and a boat trip in Bohemian Switzerland in one full day from Prague. Bike through the national park and cruise the Kamenice—iconic scenery and activity.", bestFor: ["Active travellers who want a day out of the city", "Visitors who want to see Bohemian Switzerland", "Small groups or couples who like private or small-group trips", "Anyone who enjoys nature and light adventure"] },
      { slug: "prague-mountain-biking-karlstejn-castle", whyWePickIt: "Full-day mountain biking from Prague to Karlštejn Castle. Ride through the countryside to one of the Czech Republic's most famous castles. For fit riders who want a proper day on the bike.", bestFor: ["Fit cyclists who want a full-day ride", "Visitors who want to see Karlštejn and enjoy the journey", "Mountain bikers who like mixed terrain", "Anyone who wants a day trip from Prague by bike"] },
    ],
    intro: "Bike day trips from Prague take you into the countryside for a full day. Two standout options: Bohemian Switzerland (cycle and boat in the national park) and mountain biking to Karlštejn Castle. Both include transport from Prague and a guide. Choose by preference—scenic boat-and-bike or a challenging ride to a famous castle.",
    whyBlock: { title: "Why do a bike day trip from Prague?", content: "You escape the city and see the region by bike. Bohemian Switzerland offers stunning scenery and a mix of cycling and boating; Karlštejn is a classic castle day with a satisfying ride there and back." },
    whatToExpect: [
      "Bohemian Switzerland: collection from Prague; drive to the area; cycle in the national park; boat on the Kamenice; return to Prague. Full day (e.g. 8–10 hours).",
      "Karlštejn: meet in Prague; ride to the castle (mixed terrain); visit or view the castle; return to Prague. Full day (e.g. 8–9 hours).",
      "Both require moderate to good fitness. Details and inclusions are on each product page.",
    ],
    faqs: [
      { question: "What are the best bike day trips from Prague?", answer: "The Bohemian Switzerland boat-and-bike trip and the mountain biking full-day to Karlštejn Castle. One combines cycling and boating in a national park; the other is a full-day ride to a famous castle." },
      { question: "Is transport from Prague included?", answer: "Yes. Both day trips include transport to and from Prague (or start in Prague for the Karlštejn ride). Check the product for exact logistics." },
      { question: "Do I need my own bike?", answer: "Bike hire is usually included. Check the product. For Karlštejn, some riders may prefer their own bike—ask the operator." },
      { question: "How fit do I need to be?", answer: "Bohemian Switzerland: moderate fitness for cycling and some walking. Karlštejn: good fitness for a full-day ride. Check the product and contact the operator if unsure." },
      { question: "Is lunch included?", answer: "Check each product. Some day trips include lunch; others stop at a restaurant where you pay locally." },
      { question: "What if the weather is bad?", answer: "Operators may reschedule or cancel in unsafe conditions. Check the operator's policy when you book." },
      { question: "Is Karlštejn Castle entry included?", answer: "Check the product—some trips include castle entry; others stop for a visit or photos. Confirm when you book." },
    ],
  },
  // --- Photography tours in Prague ---
  {
    categorySlug: "photography-tours-in-prague",
    slug: "best-signature-places-photoshoots",
    title: "Best signature places photoshoots in Prague",
    description: "Photoshoots at Prague's most iconic spots—signature places, Old Town and castle. Professional photos at the best backdrops.",
    picks: [
      { slug: "photoshooting-signature-places-prague", whyWePickIt: "Photoshoot at Prague's most signature locations. Your photographer knows the best angles at the bridge, squares and hidden corners—professional shots at the city's most photogenic spots.", bestFor: ["Visitors who want standout photos at iconic spots", "Solo travellers, couples or families who want a pro shoot", "Anyone who wants the best backdrops without hunting for them", "Guests celebrating a trip or special moment"] },
      { slug: "prague-professional-photoshoot-old-town", whyWePickIt: "Professional photoshoot in the Old Town—astronomical clock, squares, colourful streets. Classic Prague look with a pro who knows the best spots and light.", bestFor: ["Anyone who wants photos in the Old Town", "Couples who want romantic Old Town backdrops", "Families who want a classic Prague setting", "Solo travellers who want iconic travel photos"] },
      { slug: "prague-professional-photoshoot-castle", whyWePickIt: "Professional photoshoot at Prague Castle—the city's most dramatic backdrop. Courtyards, views and architecture for striking photos in one iconic setting.", bestFor: ["Anyone who wants photos with the castle as the backdrop", "Couples who want a grand, romantic setting", "Families who want a memorable Prague portrait", "Solo travellers who want standout travel photos"] },
    ],
    intro: "Signature-place photoshoots take you to Prague's most iconic spots—the best-known views and streets—with a professional photographer. Options include a shoot at the most signature places in the city, a dedicated Old Town shoot, and a castle-focused session. You get the backdrops everyone wants without the guesswork.",
    whyBlock: { title: "Why choose a signature places photoshoot?", content: "You get professional photos at the locations that define Prague—bridge, clock, castle, squares. Your photographer knows the angles and the right time of day so you take home images you'll love." },
    whatToExpect: [
      "Meet your photographer at the agreed location in central Prague.",
      "Walk to 2–4 signature spots—bridge, Old Town Square, castle area, or product-specific route.",
      "Posing and candid shots; photographer directs and captures. Edited photos delivered later via link.",
      "Session typically 1–2 hours; delivery within a few days.",
    ],
    faqs: [
      { question: "What are the best signature places photoshoots in Prague?", answer: "The photoshooting at the most signature places, the professional Old Town photoshoot, and the professional castle photoshoot are three strong options. One covers multiple icons; the other two focus on Old Town or castle." },
      { question: "How many photos do we get?", answer: "Number of edited photos is on each product page—often 20–50+. Delivery is usually via a download link within a few days." },
      { question: "Do we need castle entry for the castle shoot?", answer: "Shooting in public areas around the castle often doesn't require entry. If the shoot goes inside, tickets may be needed. Check with the operator." },
      { question: "What's the best time of day?", answer: "Golden hour (early morning or late afternoon) gives the best light. Your photographer may suggest a time when you book." },
      { question: "Where do we meet?", answer: "Meeting point is in central Prague—often Old Town or near the river/castle. Your confirmation will have the exact location." },
      { question: "Can we do both Old Town and castle?", answer: "You can book two separate shoots on different days, or check if the operator offers a combined longer session." },
      { question: "What should we wear?", answer: "Wear something you're comfortable in. Avoid very busy patterns. Your photographer may suggest colours that work well in Prague." },
    ],
  },
  {
    categorySlug: "photography-tours-in-prague",
    slug: "best-private-professional-photoshoots",
    title: "Best private professional photoshoots in Prague",
    description: "Private photoshoots with a professional photographer. Personalised session, edited photos, your choice of style.",
    picks: [
      { slug: "private-photoshoot-professional-photographer-prague", whyWePickIt: "Private session with a professional photographer—just you and the photographer. Personalised poses, best light and locations, and edited images. Ideal for couples, families or solo travellers who want a dedicated session.", bestFor: ["Couples who want romantic or anniversary photos", "Families who want a professional portrait session", "Solo travellers who want great shots of themselves in Prague", "Anyone who wants a private, tailored photoshoot"] },
      { slug: "prague-private-photoshoot", whyWePickIt: "Private photoshoot tailored to you. Your photographer works with you on locations and style—romantic, casual or classic—and delivers edited photos you'll want to keep.", bestFor: ["Couples who want a private photo session in Prague", "Families who want professional portraits", "Solo travellers who want polished travel photos", "Anyone who prefers a private session to a group"] },
    ],
    intro: "Private professional photoshoots give you one-on-one time with a photographer. You get personalised attention, a say in locations and style, and edited photos delivered after the session. Two main products offer a private shoot with a pro—ideal when you want the full focus on you or your group.",
    whyBlock: { title: "Why choose a private professional photoshoot?", content: "You have the photographer to yourself. No sharing the session; the route and style can be tailored to you. Best for couples, families or solo travellers who want high-quality, personalised results." },
    whatToExpect: [
      "Meet your photographer at the agreed spot. Discuss style, outfits and route.",
      "Walk to chosen or suggested locations. Poses and candid shots; photographer directs and captures.",
      "Session ends. Photos are edited and delivered as per the product (e.g. online gallery within a few days).",
    ],
    faqs: [
      { question: "What are the best private professional photoshoots in Prague?", answer: "The private photoshoot with a professional photographer and the Prague private photoshoot are two strong options. Both are private sessions with edited photos included." },
      { question: "How many photos are included?", answer: "Often 20–50+ edited photos depending on the package. Check each product for the exact number and delivery method." },
      { question: "Can we choose the locations?", answer: "Many photographers offer a suggested route or let you request areas (e.g. castle, Old Town, river). Discuss when you book or at the start." },
      { question: "What time of day is best?", answer: "Golden hour (early morning or late afternoon) gives the best light. Your photographer may suggest a time when you book." },
      { question: "How long until we get the photos?", answer: "Usually 3–7 days for edited photos via a link. Confirm with the operator when you book." },
      { question: "Is it just for couples?", answer: "No. Private shoots work for couples, families, friends or solo travellers. The photographer tailors the session to you." },
      { question: "How long is the session?", answer: "Typically 1–2 hours—enough for several locations and a good number of shots." },
    ],
  },
  {
    categorySlug: "photography-tours-in-prague",
    slug: "best-photo-walk-tours",
    title: "Best photo walk tours in Prague",
    description: "Photo walk tours for families, couples or solo travellers. Sightsee and get professional photos in one.",
    picks: [
      { slug: "prague-photo-walk-tour-family-couple-solo", whyWePickIt: "Photo walk designed for families, couples or solo travellers. You explore the city with a photographer who doubles as a guide—sights and professional photos in one relaxed session.", bestFor: ["Families who want both a tour and nice photos", "Couples who want a relaxed walk with photos", "Solo travellers who want company and great shots", "Anyone who wants a mix of sightseeing and a photoshoot"] },
      { slug: "photoshooting-signature-places-prague", whyWePickIt: "Walk to Prague's most signature locations with a photographer. You see the iconic spots and get pro shots at each—a walk and a shoot in one.", bestFor: ["Visitors who want standout photos at iconic spots", "Anyone who wants the best backdrops on a walking route", "Guests who like a guided photo walk", "Solo travellers, couples or families"] },
      { slug: "prague-professional-photoshoot-old-town", whyWePickIt: "Professional shoot in the Old Town—you walk through squares and streets with your photographer and get edited photos. Focus on the heart of the city.", bestFor: ["Anyone who wants photos in the Old Town", "Couples who want romantic Old Town backdrops", "Families who want a classic Prague setting", "Solo travellers who want iconic travel photos"] },
    ],
    intro: "Photo walk tours combine sightseeing with a professional photoshoot. You walk through Prague with a photographer who guides you and takes your picture at the best spots. Options include a tour tailored to family, couple or solo, a signature-places shoot that walks the icons, and an Old Town–focused session. Ideal when you want both a tour and great photos.",
    whyBlock: { title: "Why choose a photo walk tour?", content: "You get two in one: a guided walk through Prague and a professional photo session. No need to choose between seeing the sights and getting in the frame—your photographer does both." },
    whatToExpect: [
      "Meet your photographer. They'll adapt the pace and route to your group (family, couple or solo).",
      "Walk through Prague's highlights. Stops for photos and short commentary on the sights.",
      "Tour ends at a central point. Photos are edited and delivered as per the product (e.g. link within a few days).",
    ],
    faqs: [
      { question: "What are the best photo walk tours in Prague?", answer: "The Prague photo walk tour for family, couple or solo; the photoshooting at signature places; and the professional Old Town photoshoot are strong options. Pick by focus—flexible group type, signature spots, or Old Town only." },
      { question: "Is it good for kids?", answer: "Yes. The family/couple/solo tour can be tailored to families—shorter walks, fun spots, and photos of the whole family." },
      { question: "How many photos are included?", answer: "Check each product for the number of edited photos and delivery method." },
      { question: "How long is the walk?", answer: "Typically 1–2 hours. Route can be adjusted for little legs or for more locations." },
      { question: "Where do we go?", answer: "Usually a mix of iconic spots—Old Town, river, maybe the castle area. Your photographer will plan according to your group." },
      { question: "Do we need to be photogenic?", answer: "No. The photographer's job is to make you look good and capture the moment. They'll guide poses and find the best angles." },
      { question: "What's the difference between the three?", answer: "Photo walk family/couple/solo is most flexible for group type. Signature places focuses on the most iconic backdrops. Old Town focuses on the historic centre. All include a walk and photos." },
    ],
  },
  {
    categorySlug: "photography-tours-in-prague",
    slug: "best-couple-engagement-photoshoots",
    title: "Best couple and engagement photoshoots in Prague",
    description: "Love story and couple engagement portrait photoshoots in Prague. Romantic and save-the-date ready.",
    picks: [
      { slug: "love-story-photoshooting-prague", whyWePickIt: "Love story photoshoot—romantic couple photos in Prague's most beautiful settings. Your photographer knows the angles and spots that work for couples, from classic backdrops to quieter corners.", bestFor: ["Couples who want romantic photos in Prague", "Anniversary or proposal shoots", "Engaged or married couples on a trip", "Anyone who wants a 'love story' style session"] },
      { slug: "prague-couple-engagement-portrait-photoshoot", whyWePickIt: "Couple or engagement portrait photoshoot with a professional. Perfect for engagement announcements, save-the-dates, or beautiful portraits of you both against Prague's architecture and views.", bestFor: ["Engaged couples who want Prague engagement photos", "Couples who want portrait-quality shots together", "Anyone planning a Prague wedding or proposal", "Couples who want save-the-date or announcement photos"] },
    ],
    intro: "Couple and engagement photoshoots in Prague are built for two. Love story sessions focus on romantic, storytelling images; engagement portrait shoots deliver polished shots you can use for save-the-dates and announcements. Both use Prague's best backdrops and a pro who knows how to pose couples.",
    whyBlock: { title: "Why book a couple or engagement photoshoot?", content: "You get professional images of the two of you in one of Europe's most photogenic cities. Ideal for an anniversary, proposal, engagement or simply to capture your trip together. Many couples use the photos for save-the-dates or wall art." },
    whatToExpect: [
      "Meet your photographer. Brief chat about the vibe you want—sweet, dramatic, playful or classic.",
      "Walk to 2–4 romantic or iconic spots. Poses for two—holding hands, silhouettes, candid moments.",
      "Session ends. You receive your edited photos as per the product (e.g. link within a few days).",
    ],
    faqs: [
      { question: "What are the best couple and engagement photoshoots in Prague?", answer: "The love story photoshooting in Prague and the Prague couple/engagement portrait photoshoot are two top options. One is story-led and romantic; the other is geared to engagement portraits and save-the-dates." },
      { question: "Can we use these for save-the-dates?", answer: "Yes. Many couples use Prague engagement photos for save-the-dates, invitations or social announcements. Confirm usage rights with the photographer." },
      { question: "What should we wear?", answer: "Coordinate but stay comfortable. Smart-casual or one dressy outfit works. Your photographer can suggest colours that work well in Prague. Avoid clashing patterns." },
      { question: "Is it only for engaged or married couples?", answer: "No. Any couple—dating, engaged, married—can do a love story or portrait shoot. It's about the two of you and the city." },
      { question: "Best time of day?", answer: "Golden hour (sunrise or sunset) gives soft, romantic light. Your photographer may suggest a time when you book." },
      { question: "How many photos do we get?", answer: "Check each product—often 20–50+ edited images. Delivery is usually via a download link within a few days." },
      { question: "Where do we shoot?", answer: "Often castle area, Old Town and river. You can request specific spots when you book or at the start." },
    ],
  },
  {
    categorySlug: "photography-tours-in-prague",
    slug: "best-night-photography-tours",
    title: "Best night photography tours in Prague",
    description: "Photography tour of Prague by night and night lights photoshoot after sunset. Capture the city when it's lit.",
    picks: [
      { slug: "photography-tour-prague-by-night", whyWePickIt: "Photography tour of Prague after dark. Walk with a photographer who knows the best night spots—lit bridges, squares and viewpoints—and get tips or have your own photos taken. Great for capturing the city's atmosphere when the lights come on.", bestFor: ["Photography enthusiasts who want to shoot Prague at night", "Couples or solo travellers who want night-time portraits", "Anyone who loves the look of Prague after dark", "Guests who want a guided photo walk with a pro"] },
      { slug: "night-lights-prague-photoshoot-after-sunset", whyWePickIt: "Photoshoot after sunset when Prague's lights come on—bridges, castle and streets glow. Your photographer knows the best night spots and how to pose you against the lit backdrop.", bestFor: ["Couples who want romantic night-time photos", "Anyone who loves Prague by night", "Guests who want a different look from daytime shoots", "Travellers who want lit landmarks in the background"] },
    ],
    intro: "Night photography tours and photoshoots let you capture Prague when the city is lit. One product is a photography tour by night—walking with a photographer who shoots you or teaches you. The other is a dedicated night lights photoshoot after sunset. Both use the best after-dark viewpoints and backdrops.",
    whyBlock: { title: "Why do a night photography tour or shoot?", content: "Prague transforms after dark—bridges, castle and streets are lit and atmospheric. You get a different look from daytime and often fewer crowds at key spots. Ideal for couples or anyone who wants that magical, after-dark Prague look." },
    whatToExpect: [
      "Meet your photographer after sunset at the agreed spot.",
      "Walk to lit viewpoints, bridges and streets. Your photographer shoots you or guides you to get the best shots.",
      "Tour or shoot ends. Photos are edited and delivered as per the product (e.g. link within a few days).",
      "Dress warm—Prague can be chilly after sunset.",
    ],
    faqs: [
      { question: "What are the best night photography tours in Prague?", answer: "The photography tour of Prague by night and the night lights of Prague photoshoot after sunset. One is a tour with shooting or guidance; the other is a dedicated after-sunset photoshoot." },
      { question: "Do we get photos of ourselves or is it a teaching tour?", answer: "Check the product—some night tours are 'you get photographed'; others include tips for your own camera. The night lights shoot is focused on photos of you." },
      { question: "What time does it start?", answer: "After sunset so the city is lit. Exact time depends on the season; your confirmation will have the time." },
      { question: "How long is the tour or shoot?", answer: "Typically 1.5–2 hours. Check each product for exact duration." },
      { question: "Is it cold at night?", answer: "Prague can be chilly after sunset, especially in spring and autumn. Bring a jacket; you can take it off for some shots." },
      { question: "What if it rains?", answer: "Wet streets can look good in photos, but heavy rain may mean rescheduling. Check the operator's policy when you book." },
      { question: "Where do we meet?", answer: "Meeting point is in central Prague—often near the river or a viewpoint. Your confirmation will have the exact location." },
    ],
  },
  {
    categorySlug: "photography-tours-in-prague",
    slug: "best-photoshoots-by-location",
    title: "Best photoshoots by location in Prague",
    description: "Choose your backdrop: Prague Castle, Old Town, or night lights. Professional shoots at the location you want.",
    picks: [
      { slug: "prague-professional-photoshoot-castle", whyWePickIt: "Professional photoshoot at Prague Castle—the city's most dramatic backdrop. Courtyards, views and architecture for striking photos in one iconic setting.", bestFor: ["Anyone who wants photos with the castle as the backdrop", "Couples who want a grand, romantic setting", "Families who want a memorable Prague portrait", "Solo travellers who want standout travel photos"] },
      { slug: "prague-professional-photoshoot-old-town", whyWePickIt: "Professional photoshoot in the Old Town—astronomical clock, squares, colourful streets. Classic Prague look with a pro who knows the best spots and light.", bestFor: ["Anyone who wants photos in the Old Town", "Couples who want romantic Old Town backdrops", "Families who want a classic Prague setting", "Solo travellers who want iconic travel photos"] },
      { slug: "night-lights-prague-photoshoot-after-sunset", whyWePickIt: "Photoshoot after sunset when Prague's lights come on. Lit bridges, castle and streets for a magical, after-dark look. Different vibe from daytime shoots.", bestFor: ["Couples who want romantic night-time photos", "Anyone who loves Prague by night", "Guests who want a different look from daytime", "Travellers who want lit landmarks in the background"] },
    ],
    intro: "Choose your photoshoot by location: castle, Old Town or night. One product focuses on Prague Castle; one on the Old Town (clock, squares, streets); and one on night lights after sunset. Pick the backdrop that fits your style—grand, classic or atmospheric.",
    whyBlock: { title: "Why choose by location?", content: "You know exactly what you're getting: castle drama, Old Town charm, or night-time magic. Book one or combine two on different days (e.g. castle one day, Old Town or night another) for variety." },
    whatToExpect: [
      "Castle: meet at or near the castle; shoot in courtyards and viewpoints; edited photos delivered later.",
      "Old Town: meet in the Old Town; shoot at clock, squares and streets; edited photos delivered later.",
      "Night lights: meet after sunset; shoot at lit viewpoints and bridges; edited photos delivered later.",
      "Session length and number of photos are on each product page.",
    ],
    faqs: [
      { question: "What are the best photoshoots by location in Prague?", answer: "The professional photoshoot at Prague Castle, the professional photoshoot at Prague Old Town, and the night lights photoshoot after sunset. Each is focused on one type of backdrop." },
      { question: "Do we need castle entry tickets for the castle shoot?", answer: "Shooting in public areas around the castle often doesn't require entry. If the shoot goes inside, tickets may be needed. Check with the operator." },
      { question: "Can we book more than one location?", answer: "Yes. You can book castle one day and Old Town or night on another. Some operators may offer a combined longer session—ask when you book." },
      { question: "What's the best time for the castle or Old Town?", answer: "Golden hour (early morning or late afternoon) gives the best light. Early morning can be quieter at the castle and in the Old Town." },
      { question: "What time does the night shoot start?", answer: "After sunset so the city is lit. Exact time depends on the season; your confirmation will have the time." },
      { question: "How many photos do we get?", answer: "Check each product for the number of edited images and delivery method. Often 20–50+ edited photos." },
      { question: "Same operator for castle and Old Town?", answer: "Product codes suggest the same operator may offer both castle and Old Town shoots. You can book one or both for different backdrops." },
    ],
  },
  // --- Cultural experiences in Prague ---
  {
    categorySlug: "cultural-experiences-in-prague",
    slug: "best-highlights-hidden-gems",
    title: "Best highlights and hidden gems tours in Prague",
    description: "Tours that combine Prague's must-see highlights with hidden gems. See the famous sights and discover lesser-known spots.",
    picks: [
      { slug: "best-of-prague-highlights-hidden-gems", whyWePickIt: "Combines Prague's must-see highlights with hidden gems most visitors miss. Your guide shows you the famous sights and takes you into courtyards, lanes and local spots for a deeper sense of the city.", bestFor: ["First-time visitors who want both highlights and depth", "Travellers who like a mix of famous sights and hidden corners", "Anyone who wants to go beyond the standard route", "Guests who value a guide who knows the city inside out"] },
      { slug: "private-custom-full-day-tour-prague", whyWePickIt: "A full-day tour built around you. You tell your guide your interests and they design a custom route—highlights, hidden gems, or both. Ideal when you want one day entirely tailored to you.", bestFor: ["Visitors who have specific interests or places they want to see", "Travellers who want a full day with a private guide", "Anyone who prefers to shape the itinerary", "Guests who have been before and want to go deeper"] },
    ],
    intro: "Tours that mix Prague's highlights with hidden gems give you the best of both—the iconic sights and the corners and stories most tourists miss. The best-of-Prague highlights and hidden gems tour does this on a set route; the private custom full-day lets you emphasise highlights, hidden spots, or any theme you choose.",
    whyBlock: { title: "Why combine highlights and hidden gems?", content: "You see the must-sees without missing the depth. A good guide takes you to famous spots and then into courtyards, passages and local places that make Prague feel real. Ideal for first-time visitors who want context, not just a checklist." },
    whatToExpect: [
      "Meet your guide. They'll cover key sights—Old Town, bridge, castle area—and weave in lesser-known spots.",
      "Commentary on history and local life. You'll hear stories you won't get from a guidebook.",
      "Duration: half-day or full-day depending on the product. Custom full-day: you set the pace and focus.",
    ],
    faqs: [
      { question: "What are the best highlights and hidden gems tours in Prague?", answer: "The best of Prague highlights and hidden gems tour and the private custom full-day tour are two strong options. One has a set route mixing both; the other is fully custom so you can emphasise highlights, hidden gems or any theme." },
      { question: "What kind of hidden gems?", answer: "Typically quiet courtyards, historic passages, local cafés or viewpoints, and stories tied to lesser-known places. Your guide chooses according to the day and group." },
      { question: "Is the custom tour more expensive?", answer: "Private custom full-day is usually priced as a full-day private tour. Check the product; it often includes the guide only, with entrances or lunch extra." },
      { question: "Where do we meet?", answer: "Meeting point is in central Prague (or hotel pickup for some products). Your confirmation will have the exact location." },
      { question: "Can we request specific hidden spots?", answer: "On the set tour the guide chooses. On the custom tour you can say what you're interested in—e.g. courtyards, film locations, local life—and the guide will plan accordingly." },
      { question: "How long are these tours?", answer: "Highlights and hidden gems: often half-day or full-day. Custom full-day: a full day. Check each product." },
      { question: "Are entrances included?", answer: "Check the product. Walking the streets and many courtyards is free; some interiors may require separate tickets." },
    ],
  },
  {
    categorySlug: "cultural-experiences-in-prague",
    slug: "best-private-luxury-tours",
    title: "Best private and luxury tours in Prague",
    description: "Rick Steves–style private tour, luxury personal tour, and historical private day tour. Premium guided experiences.",
    picks: [
      { slug: "rick-steves-private-tour-prague", whyWePickIt: "A private tour in the Rick Steves style—in-depth storytelling, practical tips and a focus on getting the most out of your time. Thoughtful, well-paced and engaging.", bestFor: ["Fans of Rick Steves–style travel", "Visitors who want in-depth, practical commentary", "Couples or small groups who prefer a private guide", "Anyone who likes storytelling and context"] },
      { slug: "luxury-personal-tour-prague", whyWePickIt: "Luxury personal tour with a dedicated guide. Premium service and attention to detail. You'll see the best of Prague at your pace with a high level of care.", bestFor: ["Guests who want a premium, luxury-level tour", "Travellers who value personalised service", "Couples or small groups celebrating a special trip", "Anyone who wants a private guide with a luxury touch"] },
      { slug: "historical-private-day-tour-prague", whyWePickIt: "Full-day private tour focused on Prague's history. Your guide takes you through the centuries with a clear narrative and time for questions. Ideal for history lovers who want a full day with a dedicated guide.", bestFor: ["History lovers who want a full-day deep dive", "Visitors who prefer a private guide for the whole day", "Anyone who wants to understand Prague's past in order", "Guests who like to ask questions and go at their own pace"] },
    ],
    intro: "Private and luxury tours put the guide at your service. Options include a Rick Steves–style private tour (in-depth and practical), a luxury personal tour (premium service), and a historical private day tour (full day of history). All are private—just you and your guide—with different tones and focus.",
    whyBlock: { title: "Why choose a private or luxury tour?", content: "You get the guide to yourself, so the pace and content are tailored to you. Luxury tours add a higher level of service and attention. Private historical or Rick Steves–style tours focus on depth and storytelling. Ideal when you want a premium or personalised experience." },
    whatToExpect: [
      "Meet your guide (or hotel pickup where offered). They'll confirm your interests and the plan.",
      "A full or half-day of sightseeing with commentary tailored to you. You can slow down, ask questions and change focus.",
      "End where you prefer. Your guide can suggest what to do next or how to spend the rest of your stay.",
    ],
    faqs: [
      { question: "What are the best private and luxury tours in Prague?", answer: "The Rick Steves–style private tour, the luxury personal tour, and the historical private day tour are three strong options. Pick by style: in-depth and practical (Rick Steves), premium service (luxury), or full-day history (historical)." },
      { question: "Is the Rick Steves tour official?", answer: "Check the product description. It may be run by a partner or operator that follows the Rick Steves style; the exact relationship is on the Viator page." },
      { question: "What makes the luxury tour 'luxury'?", answer: "Typically a high level of personal service, a dedicated guide for your party only, and attention to detail. Exact inclusions are on the product page." },
      { question: "Can we customise the route?", answer: "Yes. All three are private, so you can discuss focus and pace with your guide at the start. The historical tour is theme-led but still flexible." },
      { question: "How long are these tours?", answer: "Rick Steves and luxury: often half-day or full-day. Historical: full day. Check each product." },
      { question: "Where do we meet?", answer: "Often hotel pickup or a central point. Your confirmation will have the details." },
      { question: "Are entrance fees included?", answer: "Check each product. Some private tours include castle or museum entry; others may require separate tickets." },
    ],
  },
  {
    categorySlug: "cultural-experiences-in-prague",
    slug: "best-jewish-heritage-tours",
    title: "Best Jewish heritage tours in Prague",
    description: "Private Jewish history and Old Town walking tour. Josefov and the Old Town with a dedicated guide.",
    picks: [
      { slug: "jewish-history-old-town-walking-tour-prague-private", whyWePickIt: "Private walking tour that weaves together Jewish history and the Old Town. You'll explore the Jewish Quarter (Josefov)—synagogues, cemetery and the story of Prague's Jewish community—and the Old Town with a guide who gives context and respect to difficult history.", bestFor: ["Visitors who want to understand Prague's Jewish history", "Anyone interested in the Jewish Quarter and Old Town in one tour", "Guests who prefer a private guide for sensitive topics", "Travellers who want a thoughtful, in-depth heritage tour"] },
    ],
    intro: "Jewish heritage tours in this category focus on the private Jewish history and Old Town walking tour—one guide for Josefov and the Old Town, with depth and care. You'll hear about the community, the synagogues and cemetery, and how Jewish history connects to the wider city. For more Jewish Quarter options see the dedicated jewish-heritage-tours-in-prague pillar.",
    whyBlock: { title: "Why book a Jewish heritage tour?", content: "The Jewish Quarter holds centuries of history and memory. A dedicated guide helps you understand the sites and the story with context and respect. Combining it with the Old Town in one private tour gives you a full picture in one day." },
    whatToExpect: [
      "Meet your guide. They'll brief you on the route and themes.",
      "Walk through the Jewish Quarter (Josefov)—synagogues, Old Jewish Cemetery and the history of the community.",
      "Continue into the Old Town. Connections between Jewish history and the wider city. Tour ends at a central location.",
      "Check the product for synagogue/museum admission—included or separate.",
    ],
    faqs: [
      { question: "What are the best Jewish heritage tours in Prague?", answer: "In this category the main option is the private Jewish history and Old Town walking tour. It covers Josefov and the Old Town in one private session. For more choices (e.g. group tours, different lengths) see jewish-heritage-tours-in-prague." },
      { question: "Is synagogue admission included?", answer: "Check the product. Some tours include admission to the Jewish Museum sites; others may require you to buy tickets separately. Confirm when you book." },
      { question: "Is it suitable for children?", answer: "Content includes difficult history. Use your judgement; the guide can often adapt the tone. Check with the operator if unsure." },
      { question: "How long is the tour?", answer: "Typically half-day. Enough for the Jewish Quarter and Old Town." },
      { question: "Where do we meet?", answer: "Usually in or near the Jewish Quarter or Old Town. Your confirmation will have the exact location." },
      { question: "Can we focus more on one area?", answer: "Private tours are flexible. Tell your guide at the start if you want more time in the Jewish Quarter or Old Town." },
      { question: "How is this different from jewish-heritage-tours-in-prague?", answer: "This pillar (cultural experiences) includes this one private Jewish + Old Town tour. The jewish-heritage-tours-in-prague pillar has a wider list of dedicated Jewish Quarter tours. You can book from either depending on the product." },
    ],
  },
  {
    categorySlug: "cultural-experiences-in-prague",
    slug: "best-communism-tours",
    title: "Best Communism tours in Prague",
    description: "Prague Communism tour with museum, and Communism and its fall with an eyewitness. History and first-hand stories.",
    picks: [
      { slug: "prague-communism-tour-communism-museum", whyWePickIt: "Tour of Prague's Communist period with admission to the Communism Museum included. You'll hear about life under the regime, the Velvet Revolution and how the city changed. Objects and context in the museum add depth.", bestFor: ["Visitors interested in Communist and Cold War history", "Anyone who wants to understand the Velvet Revolution", "Guests who like museums and guided narrative together", "Travellers curious about life in Czechoslovakia under Communism"] },
      { slug: "communism-and-its-fall-eyewitness-prague-private", whyWePickIt: "Private tour about Communism and its fall led by a guide who lived through it. First-hand stories and sites linked to the regime and the Velvet Revolution. The eyewitness perspective adds a powerful human dimension.", bestFor: ["Visitors who want first-hand stories about Communism and the Velvet Revolution", "Anyone interested in 20th-century Central European history", "Guests who prefer a private tour for sensitive and personal topics", "Travellers who want to understand the fall of Communism from someone who was there"] },
    ],
    intro: "Communism tours in Prague cover the Communist period and its end. One product includes a guided walk and admission to the Communism Museum. The other is a private tour with an eyewitness guide who shares first-hand memories. Both are strong cultural experiences for anyone interested in how the regime shaped the city and how it fell.",
    whyBlock: { title: "Why do a Communism tour?", content: "You understand a defining part of Prague's 20th-century history. The museum tour gives you objects, propaganda and context; the eyewitness tour adds personal stories and memory. Doing both (on different days) gives you the full picture." },
    whatToExpect: [
      "Museum tour: meet your guide; walk to sites linked to the Communist period; visit the Communism Museum (admission included).",
      "Eyewitness tour: meet your private guide; walk to key sites (Wenceslas Square, memorials, places of protest); hear first-hand stories and history.",
      "Duration: typically a few hours each. Content can be intense; both guides handle the subject with care.",
    ],
    faqs: [
      { question: "What are the best Communism tours in Prague?", answer: "The Prague Communism tour with Communism Museum included and the Communism and its fall eyewitness private tour. One combines a walk and the museum; the other is private with a guide who lived through the era." },
      { question: "What's the difference between the two?", answer: "The museum tour includes admission to the Communism Museum and a guided walk. The eyewitness tour is private and led by someone who lived through Communism and the Velvet Revolution—first-hand stories, no museum (unless you add it separately)." },
      { question: "Can we do both?", answer: "Yes. Many visitors do the museum tour one day and the eyewitness tour another for stories and objects. They complement each other." },
      { question: "Is the museum admission really included in the first?", answer: "Yes—that product includes admission to the Communism Museum. Confirm on the product page when you book." },
      { question: "Is it suitable for children?", answer: "Content is historical and can include difficult themes. Use your judgement for younger children; the guides can often adapt the tone." },
      { question: "Where do we meet?", answer: "Meeting point is in central Prague for both. Your confirmation will have the exact location and time." },
      { question: "What language are the tours in?", answer: "Typically English; other languages may be available. Check each product for options." },
    ],
  },
  {
    categorySlug: "cultural-experiences-in-prague",
    slug: "best-beer-cultural-experiences",
    title: "Best beer cultural experiences in Prague",
    description: "Beer and tapas tour and Prague Czech beer experience. Learn about the Czechs' beloved beverage.",
    picks: [
      { slug: "beer-and-tapas-tour-czech-beverage", whyWePickIt: "A cultural tour built around Czech beer—the nation's favourite drink. You'll visit bars or pubs with a guide who explains the brewing tradition, styles and how beer fits into Czech life. Beer and tapas included so you taste while you learn.", bestFor: ["Beer lovers who want context, not just tasting", "Visitors who want to learn about Czech beer culture", "Guests who like a tour that combines drinks and food", "Anyone curious about why beer matters so much in the Czech Republic"] },
      { slug: "prague-czech-beer-experience", whyWePickIt: "A dedicated Czech beer experience—taste different beers and learn how they're brewed, what makes Czech beer special, and how it fits into local life. Format may include a brewery visit, tasting session or guided pub crawl.", bestFor: ["Beer enthusiasts who want a focused Czech beer experience", "Visitors who want to understand Czech brewing and culture", "Guests who like tastings with a guide", "Anyone who wants to go beyond a single pub and get the full picture"] },
    ],
    intro: "Beer cultural experiences in Prague are about learning as well as tasting. The beer and tapas tour takes you to several venues with beer and snacks and commentary on Czech beer culture. The Prague Czech beer experience is a focused session—tastings, maybe a brewery visit—that explains why beer is so central to the Czechs. Both are ideal when you want context, not just a pub crawl.",
    whyBlock: { title: "Why do a beer cultural experience?", content: "You get the story behind the drink—how it's brewed, what makes Czech beer distinct, and how it fits into daily life. Perfect for beer lovers who want to understand the culture and for visitors who want more than a standard tasting tour." },
    whatToExpect: [
      "Beer and tapas: meet your guide; visit several bars or pubs; at each you'll try beer (and tapas/snacks) and hear about styles, history and local habits.",
      "Czech beer experience: meet at a brewery, pub or tasting room; tastings and commentary; format (tour, tasting or crawl) as per product.",
      "Duration: typically 2–3 hours. Relaxed pace; you'll learn and taste.",
    ],
    faqs: [
      { question: "What are the best beer cultural experiences in Prague?", answer: "The beer and tapas tour (learn about the Czechs' beloved beverage) and the Prague Czech beer experience. One combines several venues with beer and food; the other is a focused beer experience (tastings, possibly brewery)." },
      { question: "How much beer is included?", answer: "Check each product—typically several tastings. The tapas tour often includes snacks or tapas too. Exact inclusions are on the booking page." },
      { question: "Do we need to be beer experts?", answer: "No. Both are for anyone curious about Czech beer. The guides explain styles and culture in an accessible way." },
      { question: "Is it the same as the beer tours pillar?", answer: "Theme overlaps with beer-tours-in-prague, but these two products are listed here as cultural experiences (learning + tasting). The beer-tours pillar has more pub crawls and tasting tours." },
      { question: "Where do we meet?", answer: "Meeting point is in central Prague—often at the first venue. Your confirmation will have the exact location." },
      { question: "Is it suitable for non-drinkers?", answer: "Focus is beer; non-alcoholic options may be limited. Check with the operator if you don't drink." },
      { question: "Is food included?", answer: "Beer and tapas tour typically includes tapas or snacks. Czech beer experience: check the product—some include snacks, others are beer only." },
    ],
  },
  {
    categorySlug: "cultural-experiences-in-prague",
    slug: "best-custom-full-day-tours",
    title: "Best custom and full-day tours in Prague",
    description: "Private custom full-day tour, historical private day tour, and best of Prague highlights. Your interests, your pace.",
    picks: [
      { slug: "private-custom-full-day-tour-prague", whyWePickIt: "A full-day tour built around you. You tell your guide your interests and they design a custom route. You set the pace and can change the plan as you go. The ideal when you want one day entirely tailored to you.", bestFor: ["Visitors who have specific interests or places they want to see", "Travellers who want a full day with a private guide", "Anyone who prefers to shape the itinerary", "Guests who have been before and want to go deeper"] },
      { slug: "historical-private-day-tour-prague", whyWePickIt: "Full-day private tour focused on Prague's history. Your guide takes you through the centuries with a clear narrative. Ideal for history lovers who want a full day with a dedicated guide and a theme.", bestFor: ["History lovers who want a full-day deep dive", "Visitors who prefer a private guide for the whole day", "Anyone who wants to understand Prague's past in order", "Guests who like to ask questions and go at their own pace"] },
      { slug: "best-of-prague-highlights-hidden-gems", whyWePickIt: "Combines Prague's must-see highlights with hidden gems. A set route that balances the famous sights and lesser-known spots. Great when you want a full or half-day of the best of Prague without designing it yourself.", bestFor: ["First-time visitors who want both highlights and depth", "Travellers who like a mix of famous sights and hidden corners", "Anyone who wants to go beyond the standard route", "Guests who value a guide who knows the city inside out"] },
    ],
    intro: "Custom and full-day tours give you a full day (or a long half-day) with a private guide. The custom full-day is built around your interests—you shape the itinerary. The historical private day tour has a clear theme (history through the centuries) but is still private and flexible. The best of Prague highlights and hidden gems offers a set route that mixes must-sees and hidden spots. Pick by style: fully custom, history-led, or best-of with hidden gems.",
    whyBlock: { title: "Why book a custom or full-day tour?", content: "You get a full day of guided sightseeing tailored to you—or a strong theme like history or best-of. No rushing; you can ask questions, linger and change the plan. Ideal when you have one day and want to make the most of it with a dedicated guide." },
    whatToExpect: [
      "Custom full-day: meet your guide; agree the plan based on your interests; full day of personalised sightseeing; you can change the plan as you go.",
      "Historical full-day: meet your guide; full day of history—Old Town, Jewish Quarter, castle area; narrative and time for questions.",
      "Best of Prague: set route mixing highlights and hidden gems; half-day or full-day as per product.",
      "Lunch: often not included; your guide can recommend. Entrances: check each product.",
    ],
    faqs: [
      { question: "What are the best custom and full-day tours in Prague?", answer: "The private custom full-day tour, the historical private day tour, and the best of Prague highlights and hidden gems. One is fully custom; one is history-themed; one is a set best-of route with hidden gems." },
      { question: "How do we customise the custom tour?", answer: "Before or at the start you tell your guide your interests—e.g. medieval history, Jewish heritage, architecture, food, neighbourhoods. They propose a route and you refine it." },
      { question: "Is lunch included?", answer: "Check each product. Many full-day tours leave lunch for you (with recommendations); some may include a stop. Confirm when you book." },
      { question: "Can we change the plan during the day?", answer: "On the custom and historical tours, yes. That's the point of a private full-day—you can slow down, add a stop or skip something. The best-of tour has a set route but the guide can adapt pace." },
      { question: "Where do we meet?", answer: "Often hotel pickup or a central point. Your confirmation will have the details." },
      { question: "Are entrance fees included?", answer: "Check each product. Custom and historical tours often exclude entrance fees so you choose which paid sites to enter. Best-of may vary." },
      { question: "How much walking?", answer: "Full-day tours involve a lot of walking. Comfortable shoes are essential. Your guide can adapt the pace and suggest breaks." },
    ],
  },
];
/** Get a guide by category slug and guide slug (e.g. "catamaran-cruises-in-aruba", "morning-cruises") */
export function getGuide(categorySlug: string, guideSlug: string): GuidePage | null {
  return guides.find((g) => g.categorySlug === categorySlug && g.slug === guideSlug) ?? null;
}

/** All guide slugs for a category (for routing – distinguish guide from tour) */
export function getGuideSlugsByCategory(categorySlug: string): string[] {
  return guides.filter((g) => g.categorySlug === categorySlug).map((g) => g.slug);
}

/** Up to `limit` other guides in the same category (for cross-linking sub-category pages) */
export function getRelatedGuides(
  categorySlug: string,
  currentGuideSlug: string,
  limit: number = 3
): { slug: string; title: string }[] {
  return guides
    .filter((g) => g.categorySlug === categorySlug && g.slug !== currentGuideSlug)
    .slice(0, limit)
    .map((g) => ({ slug: g.slug, title: g.title }));
}
