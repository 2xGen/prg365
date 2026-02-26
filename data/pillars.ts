export interface SubPage {
  label: string;
  href: string;
}

export interface Pillar {
  slug: string;
  title: string;
  description: string;
  subPages: SubPage[];
  relatedSlugs: string[];
  faqs: { question: string; answer: string }[];
  /** Optional: custom About block text (replaces generic placeholder) */
  about?: string;
  /** Optional: insider tips – shown in a card */
  insiderTips?: string[];
  /** Optional: what to expect – bullet list in a card */
  whatToExpect?: string[];
  /** Optional: who this experience is for – paragraph or bullets in a card */
  whoIsThisFor?: string | string[];
  /** Optional: key highlights – short bullet list */
  highlights?: string[];
}

/** 12 Prague categories – content and tours to be added later */
export const pillars: Pillar[] = [
  {
    slug: "walking-tours-in-prague",
    title: "Walking Tours in Prague",
    description: "Discover Prague on foot with guided walking tours.",
    subPages: [
      { label: "Best morning walking tours", href: "/walking-tours-in-prague/best-morning-walking-tours" },
      { label: "Best afternoon walking tours", href: "/walking-tours-in-prague/best-afternoon-walking-tours" },
      { label: "Best Old Town & Jewish Quarter tours", href: "/walking-tours-in-prague/best-old-town-jewish-quarter-walking-tours" },
      { label: "Best Prague Castle walking tours", href: "/walking-tours-in-prague/best-prague-castle-walking-tours" },
      { label: "Best tip-based & budget tours", href: "/walking-tours-in-prague/best-tip-based-budget-walking-tours" },
      { label: "Best full-day & combo tours (boat or lunch)", href: "/walking-tours-in-prague/best-full-day-combo-walking-tours" },
    ],
    relatedSlugs: [],
    faqs: [],
  },
  {
    slug: "castle-and-palace-tours-in-prague",
    title: "Castle & Palace Tours in Prague",
    description: "Explore Prague Castle and historic palaces with guided tours, skip-the-line tickets, and combo experiences. Book tours with admission included.",
    subPages: [
      { label: "Best guided Castle tours with admission", href: "/castle-and-palace-tours-in-prague/best-guided-castle-tours-admission" },
      { label: "Best skip-the-line Castle tickets", href: "/castle-and-palace-tours-in-prague/best-skip-the-line-castle-tickets" },
      { label: "Best small group & private Castle tours", href: "/castle-and-palace-tours-in-prague/best-small-group-private-castle-tours" },
      { label: "Best Castle & city combo tours", href: "/castle-and-palace-tours-in-prague/best-castle-city-combo-tours" },
      { label: "Best complete Castle experiences", href: "/castle-and-palace-tours-in-prague/best-complete-castle-experiences" },
      { label: "Best Castle tours for first-time visitors", href: "/castle-and-palace-tours-in-prague/best-castle-tours-first-time-visitors" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "jewish-heritage-tours-in-prague", "day-trips-from-prague"],
    faqs: [
      { question: "What are the best Prague Castle tours?", answer: "The best Prague Castle tours include guided walking tours with admission (e.g. St Vitus Cathedral, Old Royal Palace, Golden Lane), skip-the-line tickets with or without an audio guide, small-group and private tours, and combo tours that also cover Old Town and Charles Bridge. Choose based on whether you want a guide, a small group, or to explore at your own pace." },
      { question: "Is Prague Castle admission included in tours?", answer: "Many tours include Prague Castle admission so you don’t need to queue or buy a separate ticket. Skip-the-line ticket products also include entry. Always check the tour description—some guided tours include full circuit access; others may cover only exterior areas or specific buildings." },
      { question: "How long do Prague Castle tours last?", answer: "Castle-only tours typically run 2.5 to 3.5 hours. Combo tours that include Old Town and Charles Bridge can run 3 to 4 hours or more. Skip-the-line ticket-only visits last as long as you like within opening hours." },
      { question: "Should I book a guided tour or just a skip-the-line ticket?", answer: "A guided tour is best if you want context and stories from a professional guide. A skip-the-line ticket (with or without an audio guide) suits independent visitors who prefer to explore at their own pace. Both options let you avoid the main ticket queue." },
      { question: "Where do Prague Castle tours start?", answer: "Tours start at various points—often near the castle, in Old Town, or at a designated tram stop. Your booking confirmation will include the exact meeting point and time. Some operators offer hotel pickup for an extra fee." },
      { question: "Can I visit Prague Castle on my own without a tour?", answer: "Yes. You can buy a skip-the-line ticket or queue for admission and explore without a guide. Tours are recommended if you want to understand the history and make the most of your visit without planning the route yourself." },
    ],
    about: "Prague Castle is the largest ancient castle in the world and a UNESCO site. It includes St Vitus Cathedral, the Old Royal Palace, Golden Lane and exhibition spaces. Castle and palace tours in Prague range from guided walks with admission to skip-the-line tickets and audio guides, plus combo tours that include the castle and the historic centre. We compare options so you can book with confidence.",
    insiderTips: [
      "Book skip-the-line or guided tours in advance in peak season to avoid long waits.",
      "Mornings are often less crowded; afternoon light can be better for photography on the terraces.",
      "Wear comfortable shoes—the castle grounds involve steps and cobbles.",
      "Allow at least 2–3 hours for a meaningful visit; combo tours with Old Town need half a day.",
    ],
    whatToExpect: [
      "Meeting your guide or collecting your ticket at the designated point.",
      "Entering the castle complex (skip-the-line where included).",
      "Visiting St Vitus Cathedral, the Old Royal Palace and Golden Lane (or the areas covered by your ticket/tour).",
      "Hearing commentary from your guide or following an audio guide.",
      "Ending at the castle or in the city centre, depending on the tour.",
    ],
    whoIsThisFor: [
      "First-time visitors who want to see the castle with context",
      "Independent travelers who prefer skip-the-line tickets and their own pace",
      "Families and small groups who want a dedicated or small-group guide",
      "Anyone who wants to avoid long ticket queues at the castle",
    ],
    highlights: ["St Vitus Cathedral", "Old Royal Palace", "Golden Lane", "Skip-the-line options", "Guided and self-guided"],
  },
  {
    slug: "beer-tours-in-prague",
    title: "Beer Tours in Prague",
    description: "Taste Czech beer culture on guided beer tours, pub crawls, tastings and beer-and-food combos. Compare options and book with free cancellation.",
    subPages: [
      { label: "Best pub crawls & historic pub tours", href: "/beer-tours-in-prague/best-pub-crawls-historic-pub-tours" },
      { label: "Best beer tasting experiences", href: "/beer-tours-in-prague/best-beer-tasting-experiences" },
      { label: "Best beer & food combo tours", href: "/beer-tours-in-prague/best-beer-food-combo-tours" },
      { label: "Best small group beer tours", href: "/beer-tours-in-prague/best-small-group-beer-tours" },
      { label: "Best beer museum & brewery tours", href: "/beer-tours-in-prague/best-beer-museum-brewery-tours" },
      { label: "Best Old Town & castle area beer tours", href: "/beer-tours-in-prague/best-old-town-castle-beer-tours" },
    ],
    relatedSlugs: ["food-tours-in-prague", "walking-tours-in-prague", "night-tours-in-prague"],
    faqs: [
      { question: "What are the best beer tours in Prague?", answer: "The best beer tours in Prague include historic pub tours with drinks included, hidden beer gems walks, beer tastings with cheese and crackers, mini brewery tours with appetizers, and beer-and-food combo tours. Choose based on whether you want a pub crawl, a seated tasting, or a mix of beer and food." },
      { question: "Are drinks included on Prague beer tours?", answer: "Many beer tours include a set number of beers or tastings at each stop. Always check the tour description—some include all drinks; others may include one per stop or tastings only. Pub crawls and tasting experiences typically specify what’s included." },
      { question: "How long do beer tours in Prague last?", answer: "Beer tours typically run 2.5 to 4 hours. Tasting-only experiences may be 1.5–2 hours; pub crawls and combo tours with dinner are often 3–4 hours or more. Check the booking page for exact duration." },
      { question: "Is food included on beer tours?", answer: "It depends on the tour. Some include appetizers, cheese and crackers, or a full Czech dinner; others are drinks only. Food-and-beer combo tours and dinner tours clearly state what’s included." },
      { question: "What is the legal drinking age in Prague?", answer: "The legal age for beer and alcohol in the Czech Republic is 18. You may be asked for ID. Tour operators may have their own age policy—check when you book." },
      { question: "Where do beer tours start?", answer: "Meeting points are usually in or near Old Town or another central area. Your booking confirmation will include the exact location and time. Some operators offer hotel pickup for an extra fee." },
    ],
    about: "Prague and the Czech Republic are famous for beer—Pilsner was born nearby, and Czechs drink more beer per capita than anywhere else. Beer tours in Prague range from historic pub crawls and hidden gem walks to seated tastings, brewery visits and beer-and-food combos. Whether you want a guided pub tour, a beer museum visit, or a tasting with cheese and dinner, we compare options so you can book with confidence.",
    insiderTips: [
      "Eat before or during the tour if drinks aren’t paired with food—pace yourself with water between beers.",
      "Book popular tours in advance in peak season; small-group and dinner tours fill up.",
      "Wear comfortable shoes; most beer tours involve walking between venues.",
      "Tipping for guides is appreciated; check if service is included at dinner stops.",
    ],
    whatToExpect: [
      "Meeting your guide at the designated point in central Prague.",
      "Walking to several pubs, breweries or a tasting venue (depending on the tour).",
      "Tasting Czech beer and, on many tours, snacks or a meal.",
      "Hearing stories about beer, brewing and local culture from your guide.",
      "Ending at a central location; your guide can suggest more places to try.",
    ],
    whoIsThisFor: [
      "Beer lovers who want to discover Czech beer culture",
      "Visitors who want a guided pub or tasting experience",
      "Foodies who want beer and local food in one tour",
      "Small groups and couples looking for a fun evening out",
    ],
    highlights: ["Czech beer", "Local pubs", "Tastings & pairings", "Beer museum options", "Food combos"],
  },
  {
    slug: "day-trips-from-prague",
    title: "Day Trips from Prague",
    description: "Český Krumlov, Kutná Hora, Bohemian Switzerland, Karlovy Vary and more. Compare day trips from Prague and book with free cancellation.",
    subPages: [
      { label: "Best Český Krumlov day trips", href: "/day-trips-from-prague/best-cesky-krumlov-day-trips" },
      { label: "Best Kutná Hora day trips", href: "/day-trips-from-prague/best-kutna-hora-day-trips" },
      { label: "Best Bohemian & Saxon Switzerland day trips", href: "/day-trips-from-prague/best-bohemian-saxon-switzerland-day-trips" },
      { label: "Best Karlovy Vary day trips", href: "/day-trips-from-prague/best-karlovy-vary-day-trips" },
      { label: "Best small-group day trips from Prague", href: "/day-trips-from-prague/best-small-group-day-trips-from-prague" },
      { label: "Best Saxon Switzerland & Dresden day trips", href: "/day-trips-from-prague/best-saxon-switzerland-dresden-day-trips" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "castle-and-palace-tours-in-prague", "food-tours-in-prague"],
    faqs: [
      { question: "What are the best day trips from Prague?", answer: "The most popular day trips from Prague include Český Krumlov (UNESCO town and castle), Kutná Hora (bone church and St Barbara's), Bohemian and Saxon Switzerland national parks, Karlovy Vary (spa town), and trips that combine Saxon Switzerland with Dresden. Choose by destination and whether you want a small-group or standard coach tour." },
      { question: "How long are day trips from Prague?", answer: "Most day trips are full-day experiences: typically 8–12 hours from Prague including travel. Český Krumlov and Bohemian/Saxon Switzerland are usually the longest (2+ hours each way); Kutná Hora is closer (about 1–1.5 hours each way)." },
      { question: "Do I need a passport for day trips to Germany?", answer: "Yes. Trips that visit Saxon Switzerland or Dresden cross into Germany. Bring a valid passport or ID accepted for border crossing." },
      { question: "Is transport included?", answer: "Yes. Day trips from Prague include round-trip transport from a designated meeting point in the city. Your booking confirmation will have the exact location and time." },
      { question: "Are day trips from Prague suitable for children?", answer: "Many are. Český Krumlov and Kutná Hora are family-friendly. National park trips involve walking—check the description for difficulty. Karlovy Vary and factory visits are generally fine for older children. Always check the tour description for age or fitness requirements." },
      { question: "Where do day trips from Prague start?", answer: "Meeting points are usually in central Prague (e.g. near Old Town or a main square). Your booking confirmation will include the exact address and departure time." },
    ],
    about: "Prague is a perfect base for day trips into the Czech countryside and across the border. Český Krumlov offers a UNESCO old town and castle; Kutná Hora the famous bone church and St Barbara's Cathedral. Bohemian and Saxon Switzerland deliver dramatic sandstone landscapes and hiking. Karlovy Vary is the classic spa town. We compare organised day trips so you can book transport and guides in one go.",
    insiderTips: [
      "Book popular day trips (Český Krumlov, Bohemian Switzerland) in advance in peak season.",
      "For Germany (Saxon Switzerland, Dresden) bring a valid passport.",
      "Wear comfortable walking shoes—most day trips involve at least moderate walking.",
      "Check whether lunch or admissions are included; many tours leave lunch for you to buy locally.",
    ],
    whatToExpect: [
      "Meeting at the designated point in Prague and boarding the coach or minibus.",
      "Travelling to the destination with commentary from your guide (on guided tours).",
      "Exploring the sights—guided, partly guided, or free time depending on the tour.",
      "Returning to Prague in the evening with drop-off at the meeting point.",
    ],
    whoIsThisFor: [
      "Visitors who want to see beyond Prague without driving",
      "First-time travellers who want Český Krumlov, Kutná Hora or the national parks",
      "Nature lovers and hikers (Bohemian/Saxon Switzerland)",
      "Spa and architecture enthusiasts (Karlovy Vary)",
    ],
    highlights: ["Český Krumlov", "Kutná Hora & bone church", "Bohemian & Saxon Switzerland", "Karlovy Vary", "Dresden combos"],
  },
  {
    slug: "river-cruises-in-prague",
    title: "River Cruises in Prague",
    description: "Vltava river cruises, dinner cruises, jazz cruises and sightseeing boats. Compare options and book with free cancellation.",
    subPages: [
      { label: "Best short Vltava cruises (1 hour)", href: "/river-cruises-in-prague/best-short-vltava-cruises" },
      { label: "Best dinner cruises on the Vltava", href: "/river-cruises-in-prague/best-dinner-cruises-vltava" },
      { label: "Best jazz & evening cruises", href: "/river-cruises-in-prague/best-jazz-evening-cruises" },
      { label: "Best lunch cruises", href: "/river-cruises-in-prague/best-lunch-cruises-vltava" },
      { label: "Best city tour + river combo", href: "/river-cruises-in-prague/best-city-and-river-combo-tours" },
      { label: "Best romantic Vltava cruises", href: "/river-cruises-in-prague/best-romantic-vltava-cruises" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "castle-and-palace-tours-in-prague", "night-tours-in-prague"],
    faqs: [
      { question: "What are the best river cruises in Prague?", answer: "The best include 1-hour sightseeing cruises, Devil's Channel cruises, Charles Bridge guided cruises, dinner cruises (buffet or Crystal), lunch cruises, the Jazzboat with live jazz, and evening eco cruises with Prosecco. There are also half-day city tours that include a Vltava cruise. Choose by length, meal inclusion and whether you want music or commentary." },
      { question: "How long do Vltava cruises last?", answer: "From 1 hour (sightseeing or Devil's Channel) to 2–3 hours (lunch or dinner cruises). The Crystal dinner cruise is about 3 hours. Combo tours that include a cruise are typically half-day (4–5 hours total)." },
      { question: "Are dinner and drinks included?", answer: "It depends on the cruise. Dinner cruises include a meal (buffet or set menu); some include a welcome drink or wine, others charge for the bar. Lunch cruises include lunch. Short sightseeing cruises may have a bar on board. Always check the product description." },
      { question: "Where do river cruises start?", answer: "Piers are in central Prague, usually on the Vltava near the Old Town or Lesser Town. Your booking confirmation will include the exact pier and departure time." },
      { question: "What is the best time for a river cruise?", answer: "Daytime cruises show the castle and bridges in daylight. Evening and dinner cruises offer illuminated views. The Jazzboat and eco Prosecco cruise are popular evening options. Summer has longer daylight; winter cruises may run with heating and enclosed seating." },
      { question: "Are river cruises suitable for children?", answer: "Yes. Short sightseeing and lunch cruises are family-friendly. Dinner and jazz cruises are often aimed at adults but children are usually welcome; check the operator if you have young kids." },
    ],
    about: "The Vltava runs through the heart of Prague, and a river cruise is one of the best ways to see the castle, Charles Bridge and the waterfront. Options range from 1-hour sightseeing and Devil's Channel cruises to lunch and dinner cruises, the Jazzboat with live music, and combo tours that pair a city walk with a boat trip. We compare the main cruises so you can book with confidence.",
    insiderTips: [
      "Book dinner and jazz cruises in advance in peak season; they fill up.",
      "Evening cruises are ideal for views of the illuminated castle and bridges.",
      "If you want both walking and water, choose a half-day city tour that includes a Vltava cruise.",
      "Check whether your cruise has indoor or covered seating if the weather is uncertain.",
    ],
    whatToExpect: [
      "Meeting or boarding at the designated pier in central Prague.",
      "Cruising the Vltava with views of the castle, Charles Bridge and riverside.",
      "On meal cruises: lunch or dinner served on board; on jazz cruises, live music.",
      "Returning to the pier; total time depends on the cruise (1–3 hours or half-day for combos).",
    ],
    whoIsThisFor: [
      "First-time visitors who want to see Prague from the water",
      "Couples looking for a dinner or evening cruise",
      "Families who want a short, relaxed sightseeing cruise",
      "Anyone who wants to combine a city tour with a boat trip",
    ],
    highlights: ["Vltava cruises", "Dinner & lunch cruises", "Jazzboat", "City + boat combos", "Charles Bridge views"],
  },
  {
    slug: "food-tours-in-prague",
    title: "Food Tours in Prague",
    description: "Czech food tours, tasting walks, evening food tours and medieval dining. Compare options and book with free cancellation.",
    subPages: [
      { label: "Best Malá Strana & hidden gem food tours", href: "/food-tours-in-prague/best-mala-strana-hidden-gem-food-tours" },
      { label: "Best evening & night food tours", href: "/food-tours-in-prague/best-evening-night-food-tours" },
      { label: "Best small-group & private food tours", href: "/food-tours-in-prague/best-small-group-private-food-tours" },
      { label: "Best food & culture tours", href: "/food-tours-in-prague/best-food-culture-tours" },
      { label: "Best medieval & special dining", href: "/food-tours-in-prague/best-medieval-special-dining" },
      { label: "Best walking food tours", href: "/food-tours-in-prague/best-walking-food-tours" },
    ],
    relatedSlugs: ["beer-tours-in-prague", "walking-tours-in-prague", "night-tours-in-prague"],
    faqs: [
      { question: "What are the best food tours in Prague?", answer: "The best include Secret Food Tours Malá Strana, the Prague Foodie Tour, local hidden-gem small-group tours, guided city food tasting walks, evening and night food tours, the Delicious Food Tour, food and culture tours with local foodies, the 5-course medieval dining experience, and private or small-group favourite-food tours. Choose by area (e.g. Malá Strana, Old Town), time of day (day vs evening) and group size." },
      { question: "How much food is included on food tours?", answer: "Most food tours include several tastings that together can amount to a light meal or substantial snacks. Medieval dining is a full 5-course dinner. Check each product description for the number of stops and what's included." },
      { question: "Are drinks included?", answer: "It depends on the tour. Some include a beer, wine or soft drink at one or more stops; others are food only or charge for drinks. Evening and night tours often include drinks. Check the product description." },
      { question: "Can dietary requirements be accommodated?", answer: "Contact the operator before booking if you have allergies or dietary restrictions. Many can adapt with advance notice. Czech cuisine often includes meat and dairy; vegetarians and vegans should ask." },
      { question: "How long do food tours last?", answer: "Walking food tours typically run 3 to 4 hours. Evening and night tours are similar. The medieval dining experience is usually 2–3 hours. Check the booking page for exact duration." },
      { question: "Where do food tours start?", answer: "Meeting points are usually in or near the Old Town, Malá Strana or another central area. Your booking confirmation will include the exact location and time." },
    ],
    about: "Prague's food scene ranges from traditional Czech dishes to modern bistros and historic cellars. Food tours in Prague take you to local spots with a guide—tasting walks through Malá Strana or the Old Town, evening and night food and drink tours, small-group hidden-gem tours, and special experiences like 5-course medieval dining. We compare the main options so you can book with confidence.",
    insiderTips: [
      "Come hungry but not starving—tastings add up to a light meal or more on most tours.",
      "Book popular tours (Secret Food Tours, evening tours) in advance in peak season.",
      "Tell the operator about dietary requirements when you book so they can adapt where possible.",
      "Evening and night tours are ideal in summer when the city is lively after dark.",
    ],
    whatToExpect: [
      "Meeting your guide at the designated point in central Prague.",
      "Walking to several stops for food tastings (and often a drink).",
      "Hearing stories about Czech cuisine, the neighbourhood and the venues.",
      "Ending at a central location; your guide can recommend more places to eat.",
    ],
    whoIsThisFor: [
      "Food lovers who want to discover Czech cuisine with a guide",
      "Visitors who want to combine food and sightseeing",
      "Couples or groups looking for a fun evening food tour",
      "Anyone who prefers not to choose restaurants blind",
    ],
    highlights: ["Czech specialities", "Malá Strana & Old Town", "Evening & night tours", "Medieval dining", "Small-group & private"],
  },
  {
    slug: "jewish-heritage-tours-in-prague",
    title: "Jewish Heritage Tours in Prague",
    description: "Jewish Quarter (Josefov) walking tours, synagogue visits, admission tickets and Terezín Memorial day trips. Compare options and book with free cancellation.",
    subPages: [
      { label: "Best Jewish Quarter walking tours", href: "/jewish-heritage-tours-in-prague/best-jewish-quarter-walking-tours" },
      { label: "Best small-group Jewish heritage tours", href: "/jewish-heritage-tours-in-prague/best-small-group-jewish-heritage-tours" },
      { label: "Best admission & self-guided Jewish Quarter", href: "/jewish-heritage-tours-in-prague/best-admission-self-guided-jewish-quarter" },
      { label: "Best Terezín Memorial tours", href: "/jewish-heritage-tours-in-prague/best-terezin-memorial-tours" },
      { label: "Best Prague + Terezín combo", href: "/jewish-heritage-tours-in-prague/best-prague-terezin-combo" },
      { label: "Best private Terezín tours", href: "/jewish-heritage-tours-in-prague/best-private-terezin-tours" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "castle-and-palace-tours-in-prague", "day-trips-from-prague"],
    faqs: [
      { question: "What are the best Jewish heritage tours in Prague?", answer: "The best include the Jewish Quarter and synagogue walking tour with admission tickets, the really small-group Old Town and Jewish Quarter tour, the 90-minute guided tour, the Jewish Town admission ticket with introduction, the Jewish Quarter audio walk, and Terezín Memorial day, half-day and private tours. Choose by whether you want the Jewish Quarter only, Terezín only, or both, and by group size (small-group, private) or self-guided." },
      { question: "Is admission to the Jewish Quarter synagogues included?", answer: "It depends on the tour. The Jewish Quarter and synagogue walking tour includes admission; the admission ticket with introduction gives you a ticket to explore on your own. Some walking tours are exterior only. Always check the product description." },
      { question: "What is Terezín?", answer: "Terezín (Theresienstadt) was a Nazi concentration camp and ghetto north of Prague. Today it is a memorial and museum. Day tours from Prague include transport and a guided visit. The content is sensitive and educational." },
      { question: "How long are Jewish Quarter tours?", answer: "Guided walking tours are typically 1.5 to 3.5 hours. The 90-minute tour is the shortest. Admission with introduction is then self-paced. Terezín tours are half-day (4–5 hours) or full-day (5–6 hours) from Prague." },
      { question: "Where do tours start?", answer: "Jewish Quarter tours usually start at or near Josefov (the Jewish Quarter). Terezín tours start at a designated point in Prague; private tours may offer hotel pickup. Your booking confirmation will have the exact location and time." },
      { question: "Are there dress codes or behaviour guidelines?", answer: "In synagogues, men may be asked to cover their heads (kippah is often provided). Dress respectfully. At Terezín, behaviour is expected to be solemn and respectful. Your guide will advise on the day." },
    ],
    about: "Prague's Jewish Quarter (Josefov) is one of the best-preserved Jewish heritage areas in Europe, with synagogues, the Old Jewish Cemetery and the Jewish Museum. Jewish heritage tours range from guided walking tours with admission to self-guided tickets and audio walks. Terezín (Theresienstadt) Memorial, north of Prague, is a former concentration camp and ghetto; day and half-day tours from Prague provide transport and guided visits. We compare the main options so you can book with confidence.",
    insiderTips: [
      "Book Jewish Quarter tours with admission in advance in peak season; ticket quotas can apply.",
      "In synagogues, men should be prepared to cover their heads; kippot are often provided.",
      "Terezín visits are emotionally affecting; allow time afterwards. The tone is educational and respectful.",
      "Combine the Jewish Quarter with the Old Town on a small-group tour if you want both in one go.",
    ],
    whatToExpect: [
      "Jewish Quarter: meeting your guide (or collecting your ticket), then visiting synagogues and the Old Jewish Cemetery with commentary or at your own pace.",
      "Terezín: meeting in Prague, travelling by coach (about 1 hour), then a guided visit to the memorial site before returning to Prague.",
      "Respectful behaviour and appropriate dress at all sites.",
    ],
    whoIsThisFor: [
      "Visitors who want to learn about Prague's Jewish history and the Jewish Quarter",
      "Anyone interested in Holocaust memorials and Terezín",
      "Travellers who prefer guided tours with admission or self-guided with an intro",
      "Small groups and families (use judgement for Terezín with younger children)",
    ],
    highlights: ["Jewish Quarter (Josefov)", "Synagogues & Old Cemetery", "Admission tickets", "Terezín Memorial", "Small-group & private"],
  },
  {
    slug: "night-tours-in-prague",
    title: "Night Tours in Prague",
    description: "Evening and night walking tours, ghost tours, medieval underground, trike tours and private sightseeing. Compare options and book with free cancellation.",
    subPages: [
      { label: "Best night walking tours", href: "/night-tours-in-prague/best-night-walking-tours" },
      { label: "Best private night tours", href: "/night-tours-in-prague/best-private-night-tours" },
      { label: "Best ghost & mystery night tours", href: "/night-tours-in-prague/best-ghost-mystery-night-tours" },
      { label: "Best night combo & trike tours", href: "/night-tours-in-prague/best-night-combo-trike-tours" },
      { label: "Best views & beer by night", href: "/night-tours-in-prague/best-views-beer-by-night" },
      { label: "Best medieval underground night tours", href: "/night-tours-in-prague/best-medieval-underground-night-tours" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "beer-tours-in-prague", "river-cruises-in-prague"],
    faqs: [
      { question: "What are the best night tours in Prague?", answer: "The best include the Prague by night walking tour, private sightseeing by night, the Old Town mystery and ghosts-and-legends tours, the medieval underground and dungeon tour, the night combo and trike tours, best views by night, the short beer tour where Czechs drink, and the 4-hour private night tour. Choose by style—walking, private, ghost/mystery, trike, viewpoints or beer." },
      { question: "What time do night tours start?", answer: "Usually after sunset so the city is lit up—often between 19:00 and 21:00 depending on the season. Exact start times are on each booking page." },
      { question: "Are night tours safe?", answer: "Yes. Night tours follow set routes in the historic centre with a guide. Stick with the group and follow your guide's instructions. Prague's centre is busy in the evening." },
      { question: "What should I wear?", answer: "Comfortable walking shoes for walking tours. Bring a jacket—it can be cool at night. For trike tours, dress for open-air; for underground tours, expect cooler temperatures below ground." },
      { question: "How long do night tours last?", answer: "From about 1.5 hours (short beer tour, trike) to 4 hours (private night tour). Most walking tours are 2–2.5 hours. Check each product for exact duration." },
      { question: "Where do night tours start?", answer: "Usually in the Old Town or another central point. Your booking confirmation will include the exact meeting place and time. Private tours may offer hotel pickup." },
    ],
    about: "Prague is magical after dark—the castle, bridges and Old Town are lit up and the crowds thin out. Night tours in Prague range from classic walking tours and private sightseeing to ghost and mystery walks, medieval underground and dungeon visits, trike tours, best-viewpoint tours and short beer experiences. We compare the main options so you can book with confidence.",
    insiderTips: [
      "Book popular night tours (ghost, mystery, private) in advance in peak season.",
      "Bring a jacket; it gets cool by the river and on viewpoints.",
      "For photography, the 'best views' tour or a private tour with viewpoint stops work well.",
      "Ghost and mystery tours are atmospheric but not horror—suitable for most ages; check if bringing kids.",
    ],
    whatToExpect: [
      "Meeting your guide (or driver) at the designated point in the evening.",
      "Seeing the illuminated castle, Old Town and key sights—on foot, by trike, or by private vehicle.",
      "Stories, commentary and photo stops depending on the tour type.",
      "Ending in a central location (or hotel drop-off for private tours).",
    ],
    whoIsThisFor: [
      "Visitors who want to see Prague illuminated after dark",
      "Anyone who prefers evening activities to daytime sightseeing",
      "Couples and families looking for a guided night experience",
      "Travellers who want variety—ghost tours, trikes, viewpoints or beer",
    ],
    highlights: ["Illuminated Prague", "Walking & private tours", "Ghost & mystery", "Trike & combo", "Best viewpoints"],
  },
  {
    slug: "private-tours-in-prague",
    title: "Private Tours in Prague",
    description: "Private walking tours, car sightseeing, airport transfers, private boat tours and full-day experiences. Compare and book with free cancellation.",
    subPages: [
      { label: "Best full-day private tours", href: "/private-tours-in-prague/best-full-day-private-tours" },
      { label: "Best private walking tours", href: "/private-tours-in-prague/best-private-walking-tours" },
      { label: "Best private car & transfers", href: "/private-tours-in-prague/best-private-car-and-transfers" },
      { label: "Best private boat tours", href: "/private-tours-in-prague/best-private-boat-tours" },
      { label: "Best airport & arrival private tours", href: "/private-tours-in-prague/best-airport-arrival-private-tours" },
      { label: "Best private combo tours", href: "/private-tours-in-prague/best-private-combo-tours" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "jewish-heritage-tours-in-prague", "river-cruises-in-prague"],
    faqs: [
      { question: "What are the best private tours in Prague?", answer: "The best include the 7-hour Prague in one day private tour, the historical car sightseeing tour, private airport transfer, airport arrival plus half-day walking tour, private Jewish Quarter and Old Town facts-and-legends walking tours, private boat tours on the Vltava, the best of Prague private tour and the full-day private walking tour with lunch and boat trip. Choose by focus—full-day, walking, car, boat, airport or combo." },
      { question: "Is hotel pickup included?", answer: "Many private tours include hotel pickup. Transfers and arrival tours typically do; walking tours may offer it too. Check each product description." },
      { question: "How many people can join a private tour?", answer: "Private means just your party. Maximum group size varies—walking tours often 2–8; boats and cars have vehicle capacity. Check the product for your group size and pricing." },
      { question: "Can we customise the route?", answer: "Yes. Private tours are flexible; discuss with your guide or driver at the start. You can add, skip or spend more time at sights." },
      { question: "What is the difference between the two private boat tours?", answer: "Both are private Vltava boat tours. Duration, boat type or inclusions may differ; compare the two product pages when you book." },
      { question: "Are private tours more expensive than group tours?", answer: "Yes. You pay for the guide (and sometimes vehicle) exclusively. Price is usually per group, so cost per person can be reasonable for families or small groups." },
    ],
    about: "Private tours in Prague give you a dedicated guide (and often vehicle or boat) for your party only. Options range from full-day walking tours with lunch and a boat trip to private Jewish Quarter and Old Town tours, historical car sightseeing, airport transfers, airport arrival plus half-day tour, and private Vltava boat cruises. We compare the main options so you can book with confidence.",
    insiderTips: [
      "Book private tours in advance in peak season; guides and vehicles are limited.",
      "Tell your guide your interests and pace at the start so they can tailor the tour.",
      "Airport arrival + half-day tour is a smooth way to start your trip without organising transfer and guide separately.",
      "Full-day with lunch and boat combines walking, food and the river in one private day.",
    ],
    whatToExpect: [
      "Meeting your guide (or driver) at your hotel or a designated point.",
      "Sightseeing at your pace—walking, by car or by boat depending on the tour.",
      "Commentary and flexibility; you can ask questions and adjust the route.",
      "End at your hotel or a central location (or airport for transfers).",
    ],
    whoIsThisFor: [
      "Families and couples who want a guide to themselves",
      "Visitors who prefer to set the pace and skip or add stops",
      "Travellers who want airport transfer and/or arrival tour in one",
      "Anyone who wants a special experience (e.g. historical car, private boat)",
    ],
    highlights: ["Private guide", "Full-day & half-day", "Airport transfers", "Private boat", "Walking & car"],
  },
  {
    slug: "bike-tours-in-prague",
    title: "Bike Tours in Prague",
    description: "E-bike tours, mountain biking, beer bike, Segway, electric trikes and boat-and-bike day trips. Compare and book with free cancellation.",
    subPages: [
      { label: "Best e-bike tours", href: "/bike-tours-in-prague/best-ebike-tours" },
      { label: "Best mountain bike tours", href: "/bike-tours-in-prague/best-mountain-bike-tours" },
      { label: "Best boat and bike experiences", href: "/bike-tours-in-prague/best-boat-and-bike-tours" },
      { label: "Best beer bike & Segway", href: "/bike-tours-in-prague/best-beer-bike-and-segway" },
      { label: "Best electric trike tours", href: "/bike-tours-in-prague/best-electric-trike-tours" },
      { label: "Best bike day trips", href: "/bike-tours-in-prague/best-bike-day-trips" },
    ],
    relatedSlugs: ["day-trips-from-prague", "beer-tours-in-prague", "walking-tours-in-prague"],
    faqs: [
      { question: "What are the best bike tours in Prague?", answer: "Top options include e-bike tours of the Old, Lesser and New Towns; viewpoint e-bike and electric trike tours; mountain biking on singletracks or to Karlštejn Castle; Bohemian Switzerland boat-and-bike day trip; Prague cycle boat; beer bike; and Segway sightseeing. Choose by style—city, MTB, fun or day trip." },
      { question: "Do I need to be fit for a bike tour?", answer: "E-bikes and electric trikes need minimal fitness—assist does the work. Mountain biking and full-day rides (e.g. to Karlštejn) require good fitness. Beer bike and cycle boat are social and moderate. Check each product." },
      { question: "Is equipment included?", answer: "Most tours include bike (or trike/Segway) and helmet. Check the product for what's provided and whether you can bring your own bike on MTB tours." },
      { question: "What's the difference between e-bike and electric trike?", answer: "E-bikes are two-wheeled with pedal assist. Electric trikes have three wheels—more stable, no balance needed. Both are easy; choose by preference." },
      { question: "Are there bike day trips from Prague?", answer: "Yes. Bohemian Switzerland boat-and-bike trip and the mountain biking full-day to Karlštejn Castle are two popular day trips. Both include transport from Prague." },
      { question: "What if it rains?", answer: "Tours may run in light rain. In heavy rain or storms operators often reschedule or cancel. Check the operator's policy when you book." },
    ],
    about: "Bike tours in Prague range from relaxed e-bike and electric trike sightseeing to mountain biking on singletracks or a full-day ride to Karlštejn Castle. You can also join a beer bike, a Segway tour, a cycle boat on the Vltava, or a boat-and-bike day trip to Bohemian Switzerland. We compare the main options so you can book the right ride.",
    insiderTips: [
      "E-bikes and trikes are ideal for covering a lot of Prague without getting tired—great for first-time visitors.",
      "Book mountain biking and day trips in advance; group sizes are limited.",
      "Beer bike is best for groups; check age limits and local rules.",
      "Segway tours are short (e.g. 1 hour)—good for a quick, fun overview.",
    ],
    whatToExpect: [
      "Meeting at the operator's base or a central point; bike/trike/Segway fit and briefing.",
      "A guided route through the city, viewpoints, or trails—depending on the tour.",
      "Stops for photos and commentary; pace suited to the group.",
      "Return to the start; full-day trips include transport to/from Prague.",
    ],
    whoIsThisFor: [
      "Visitors who want to see Prague without long walks",
      "Active travellers who like cycling or MTB",
      "Groups looking for fun (beer bike, cycle boat, Segway)",
      "Anyone who wants a day trip by bike (Bohemian Switzerland, Karlštejn)",
    ],
    highlights: ["E-bike & trike", "Mountain biking", "Beer bike & Segway", "Boat + bike", "Day trips"],
  },
  {
    slug: "photography-tours-in-prague",
    title: "Photography Tours in Prague",
    description: "Professional photoshoots, photo walks, night photography, and couple and engagement shoots. Signature spots, castle, Old Town. Compare and book with free cancellation.",
    subPages: [
      { label: "Best signature places photoshoots", href: "/photography-tours-in-prague/best-signature-places-photoshoots" },
      { label: "Best private professional photoshoots", href: "/photography-tours-in-prague/best-private-professional-photoshoots" },
      { label: "Best photo walk tours", href: "/photography-tours-in-prague/best-photo-walk-tours" },
      { label: "Best couple & engagement photoshoots", href: "/photography-tours-in-prague/best-couple-engagement-photoshoots" },
      { label: "Best night photography tours", href: "/photography-tours-in-prague/best-night-photography-tours" },
      { label: "Best photoshoots by location", href: "/photography-tours-in-prague/best-photoshoots-by-location" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "night-tours-in-prague", "castle-and-palace-tours-in-prague"],
    faqs: [
      { question: "What are the best photography tours in Prague?", answer: "Top options include photoshoots at signature places, private shoots with a professional photographer, photography tour by night, private photoshoot, photo walk for family/couple/solo, love story and couple engagement shoots, professional shoots at the castle and Old Town, and night lights photoshoot after sunset. Choose by style—signature spots, private, walk, couple, night or location." },
      { question: "How many photos do we get?", answer: "It varies by product—often 20–50+ edited photos delivered via a download link. Check each product page for the exact number and delivery time." },
      { question: "When do we get the photos?", answer: "Usually within a few days (e.g. 3–7) after the shoot. The photographer edits and sends a link. Confirm with the operator when you book." },
      { question: "What's the best time for a photoshoot?", answer: "Golden hour (early morning or late afternoon) gives soft light. Sunset is popular. Night shoots start after sunset for lit cityscapes. Your photographer can suggest a time." },
      { question: "Are photoshoots private?", answer: "Many are private—just you and the photographer. Photo walks may be private or small group. Check the product." },
      { question: "Can we use engagement photos for save-the-dates?", answer: "Yes. Many couples use Prague engagement photos for save-the-dates or announcements. Confirm usage rights with the photographer when you book." },
    ],
    about: "Photography tours in Prague range from professional photoshoots at signature spots, the castle and Old Town to private sessions with a pro, photo walks for families and couples, love story and engagement shoots, and night photography when the city is lit. We compare the main options so you can book the right session.",
    insiderTips: [
      "Book for golden hour or sunset for the best light—photographers often recommend a time when you reserve.",
      "Wear something you're comfortable in; coordinate with your partner if it's a couple shoot. Avoid very busy patterns.",
      "Night shoots are magical but can be cold—bring a jacket you can slip off for shots.",
      "Castle and Old Town shoots can be done on different days for variety; some operators offer both.",
    ],
    whatToExpect: [
      "Meeting your photographer at the agreed location in central Prague.",
      "A walk to 2–4 locations (or more for longer sessions)—signature spots, castle, Old Town or night viewpoints.",
      "Posing and candid shots; your photographer directs and captures. You receive edited photos later via link.",
      "Session length typically 1–2 hours; delivery of edited images within a few days.",
    ],
    whoIsThisFor: [
      "Couples who want romantic or engagement photos in Prague",
      "Families who want a professional portrait session",
      "Solo travellers who want great travel photos",
      "Anyone who wants a pro shoot at iconic spots or by night",
    ],
    highlights: ["Signature spots", "Private shoots", "Photo walks", "Couple & engagement", "Night photography"],
  },
  {
    slug: "cultural-experiences-in-prague",
    title: "Cultural Experiences in Prague",
    description: "Highlights and hidden gems, private and luxury tours, Jewish heritage, Communism history, Czech beer culture. Compare and book with free cancellation.",
    subPages: [
      { label: "Best highlights and hidden gems", href: "/cultural-experiences-in-prague/best-highlights-hidden-gems" },
      { label: "Best private and luxury tours", href: "/cultural-experiences-in-prague/best-private-luxury-tours" },
      { label: "Best Jewish heritage tours", href: "/cultural-experiences-in-prague/best-jewish-heritage-tours" },
      { label: "Best Communism tours", href: "/cultural-experiences-in-prague/best-communism-tours" },
      { label: "Best beer cultural experiences", href: "/cultural-experiences-in-prague/best-beer-cultural-experiences" },
      { label: "Best custom and full-day tours", href: "/cultural-experiences-in-prague/best-custom-full-day-tours" },
    ],
    relatedSlugs: ["walking-tours-in-prague", "jewish-heritage-tours-in-prague", "beer-tours-in-prague"],
    faqs: [
      { question: "What are the best cultural experiences in Prague?", answer: "Top options include the best of Prague highlights and hidden gems, Rick Steves–style private tour, Jewish history and Old Town private tour, luxury personal tour, historical private day tour, Communism tour with museum, private custom full-day tour, beer and tapas tour, Czech beer experience, and Communism eyewitness private tour. Choose by focus—highlights, private/luxury, Jewish heritage, Communism, beer or custom." },
      { question: "What's the difference between the Communism tours?", answer: "One includes the Communism Museum and a guided walk; the other is a private tour with an eyewitness guide who lived through the era and shares first-hand stories. Both cover the regime and its fall." },
      { question: "Are the beer experiences the same as beer tours?", answer: "Cultural beer experiences (beer and tapas, Czech beer experience) focus on learning about beer culture and tasting. The main beer-tours pillar has more pub crawls and tasting tours—overlap in theme but different products." },
      { question: "Can we customise a full-day tour?", answer: "Yes. The private custom full-day tour is built around your interests. You tell your guide what you want to see and they design the route. Other private tours are also flexible." },
      { question: "Is the Rick Steves tour official?", answer: "Check the product description. It may be run by a partner or operator that follows the Rick Steves style; the exact relationship is on the Viator page." },
      { question: "Do we need to book the Jewish heritage tour separately from the Jewish Quarter?", answer: "This pillar lists a private Jewish history and Old Town tour. The jewish-heritage-tours-in-prague pillar has other dedicated Jewish Quarter options. You can book from either depending on the product you want." },
    ],
    about: "Cultural experiences in Prague range from highlights and hidden gems and private or luxury guided tours to Jewish heritage, Communism history (with museum or eyewitness guide), Czech beer culture, and custom full-day tours. We compare the main options so you can book the right experience.",
    insiderTips: [
      "For Communism history, the eyewitness tour adds first-hand stories; the museum tour includes the museum. Do both if you have time.",
      "The custom full-day tour works best when you tell your guide your interests in advance—history, neighbourhoods, food, etc.",
      "Beer and tapas and Czech beer experience are ideal for understanding why beer matters in Czech culture, not just drinking.",
      "Jewish heritage and Old Town private tour is a good choice if you want one guide for both Josefov and the Old Town.",
    ],
    whatToExpect: [
      "Meeting your guide at the agreed location (or hotel pickup where offered).",
      "A walk or drive through Prague—highlights, hidden gems, Jewish Quarter, Communism sites, or beer venues—with commentary tailored to the theme.",
      "Private tours: your pace and interests; group tours: set route and shared experience.",
      "Full-day and custom tours: lunch stop as per product or your choice; entrance to paid sites may be included or extra.",
    ],
    whoIsThisFor: [
      "Visitors who want depth and context, not just sights",
      "History lovers (medieval, Jewish, Communist, Velvet Revolution)",
      "Guests who prefer private or luxury guided experiences",
      "Beer lovers who want to understand Czech beer culture",
    ],
    highlights: ["Highlights & hidden gems", "Private & luxury", "Jewish heritage", "Communism", "Beer culture"],
  },
];

const slugSet = new Set(pillars.map((p) => p.slug));

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

export function isPillarSlug(slug: string): boolean {
  return slugSet.has(slug);
}

export function getRelatedPillars(pillar: Pillar): Pillar[] {
  return pillar.relatedSlugs
    .map((s) => getPillarBySlug(s))
    .filter((p): p is Pillar => p !== undefined);
}
