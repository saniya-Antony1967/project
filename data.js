// Travel Packages and Destination Catalog Data
const travelPackages = [
  {
    id: "bali-paradise",
    title: "Bali Tropical Paradise & Island Hopping",
    subtitle: "Ubud Culture, Nusa Penida Cliffs & Jimbaran Sunset Cruise",
    location: "Bali, Indonesia",
    country: "Indonesia",
    category: "beach",
    categoryLabel: "Tropical Beach",
    price: 799,
    originalPrice: 999,
    durationDays: 7,
    durationNights: 6,
    rating: 4.9,
    reviewsCount: 348,
    isPopular: true,
    badge: "Bestseller",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Immerse yourself in the enchanting beauty of Bali. From the mist-shrouded emerald rice terraces of Ubud to the turquoise waters of Nusa Penida and unforgettable oceanfront seafood dinners, this 7-day curated escape blends relaxation, spirituality, and island adventures.",
    highlights: [
      "Private speedboat excursion to Nusa Penida's Kelingking Beach",
      "Sunrise trek to Mount Batur with breakfast cooked over volcanic steam",
      "Traditional Balinese cooking masterclass in an organic Ubud farm",
      "Exclusive beachfront candlelight seafood dinner in Jimbaran Bay",
      "Visit sacred temples: Uluwatu cliff temple with Kecak Fire Dance",
      "Stay in boutique 4-star & 5-star private pool villas"
    ],
    inclusions: [
      "6 Nights Luxury Villa Accommodation",
      "Daily gourmet buffet breakfast and 4 dinners",
      "All domestic private transfers with English-speaking chauffeur",
      "Speedboat transfers to Nusa Penida island",
      "Entrance tickets to all temples, monuments and parks",
      "Free high-speed local 5G eSIM (10 GB data)"
    ],
    exclusions: [
      "International flights to/from Denpasar (DPS)",
      "Personal shopping and discretionary gratuities",
      "Optional water sports activities (Scuba diving/Jet ski)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Denpasar & Ubud Villa Check-in",
        description: "VIP airport meet-and-greet with flower garland. Transfer to your luxury Ubud rainforest retreat. Evening welcome cocktail reception followed by a traditional Balinese dance show."
      },
      {
        day: 2,
        title: "Tegallalang Rice Terraces, Sacred Monkey Forest & Waterfalls",
        description: "Morning guided walk along the UNESCO-recognized Tegallalang Rice Terraces. Experience the famous jungle swing, followed by a visit to Tegenungan Waterfall and the Ubud Art Market."
      },
      {
        day: 3,
        title: "Nusa Penida Island Speedboat Adventure",
        description: "Early morning private speed boat to Nusa Penida. Visit the iconic T-Rex shaped Kelingking Beach, Angel's Billabong natural infinity pool, and snorkel with majestic manta rays."
      },
      {
        day: 4,
        title: "Mount Batur Sunrise Trek & Hot Springs",
        description: "Optional dawn ascent to Mount Batur's crater rim for a spellbinding sunrise above the clouds. Relax tired muscles in natural lakeside volcanic hot springs."
      },
      {
        day: 5,
        title: "Balinese Spa Retreat & Uluwatu Sunset Temple",
        description: "Indulge in a 2-hour Balinese herbal scrub and massage. In the late afternoon, head to Uluwatu Cliff Temple perched 70 meters above crashing Indian Ocean waves for the Kecak fire dance."
      },
      {
        day: 6,
        title: "Seminyak Beach Day & Jimbaran Seafood Feast",
        description: "Enjoy a relaxed day browsing chic Seminyak boutiques and beach clubs. Conclude your trip with an oceanfront candlelit seafood BBQ banquet right on Jimbaran beach."
      },
      {
        day: 7,
        title: "Souvenir Shopping & Departure",
        description: "Enjoy your floating breakfast at the villa, pack your memories, and transfer to Ngurah Rai International Airport for your departure flight."
      }
    ]
  },
  {
    id: "swiss-alps",
    title: "Majestic Swiss Alps & Glacier Express",
    subtitle: "Zermatt, Matterhorn, Lucerne Lakes & Panoramic Alpine Trains",
    location: "Interlaken & Zermatt, Switzerland",
    country: "Switzerland",
    category: "mountain",
    categoryLabel: "Mountain Escapes",
    price: 1299,
    originalPrice: 1549,
    durationDays: 6,
    durationNights: 5,
    rating: 4.95,
    reviewsCount: 215,
    isPopular: true,
    badge: "Top Rated",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Journey into the heart of the Swiss Alps. Experience snow-dusted peaks, mirror-like lakes, scenic high-altitude railways, and the world-famous Matterhorn. Featuring first-class Swiss Travel Pass passes and traditional alpine chalet hospitality.",
    highlights: [
      "First-Class Swiss Travel Pass with panoramic scenic train journeys",
      "Cogwheel train up to Gornergrat with unobstructed views of the Matterhorn",
      "Excursion to Jungfraujoch – The Top of Europe at 3,454m altitude",
      "Scenic steamboat cruise on Lake Lucerne surrounded by mountains",
      "Traditional Swiss fondue and Swiss chocolate tasting workshop"
    ],
    inclusions: [
      "5 Nights 4-Star Alpine Chalet & Boutique Hotel Accommodation",
      "First-class 6-day Swiss Travel Pass for all trains, boats, and mountain rails",
      "Daily Swiss artisan breakfast and 2 traditional dinners",
      "Gornergrat Bahn & Jungfraujoch railway tickets included",
      "Local bilingual alpine tour guide"
    ],
    exclusions: [
      "Airfare to Zurich/Geneva",
      "Ski equipment rental (available on site)",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Zurich & Scenic Train to Lucerne",
        description: "Arrive at Zurich Airport and board the train along Lake Zurich to picturesque Lucerne. Check in to your hotel and enjoy an evening stroll across the historic Chapel Bridge."
      },
      {
        day: 2,
        title: "Lake Lucerne Cruise & Mount Rigi",
        description: "Board a historic paddle steamer across Lake Lucerne, then ride Europe's oldest cogwheel railway to the summit of Mount Rigi for breathtaking 360-degree views."
      },
      {
        day: 3,
        title: "Interlaken & Jungfraujoch 'Top of Europe'",
        description: "Journey into the Bernese Oberland. Ride the Eiger Express gondola and cogwheel train up to Jungfraujoch (3,454 meters) inside the Great Aletsch Glacier Ice Palace."
      },
      {
        day: 4,
        title: "Glacier Express Route to Zermatt",
        description: "Board the world-famous panoramic train winding through deep valleys and towering alpine passes into the car-free mountain village of Zermatt."
      },
      {
        day: 5,
        title: "Matterhorn Glacier Paradise & Gornergrat",
        description: "Ascend to Gornergrat at 3,089m for the ultimate panorama of the Matterhorn. Enjoy an authentic fondue feast in an alpine mountain hut."
      },
      {
        day: 6,
        title: "Departure via Zurich / Geneva",
        description: "Enjoy a leisurely morning buying Swiss chocolates and watches before boarding your express train back to the airport for your onward journey."
      }
    ]
  },
  {
    id: "tokyo-kyoto",
    title: "Japan Highlights: Tokyo, Kyoto & Mt. Fuji",
    subtitle: "Bullet Trains, Ancient Shrines, Neon Skylines & Authentic Onsens",
    location: "Tokyo, Hakone & Kyoto, Japan",
    country: "Japan",
    category: "cultural",
    categoryLabel: "Historic & Cultural",
    price: 1599,
    originalPrice: 1899,
    durationDays: 9,
    durationNights: 8,
    rating: 4.98,
    reviewsCount: 412,
    isPopular: true,
    badge: "Trending",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Discover the mesmerizing blend of hyper-futuristic metropolis and centuries-old tranquility. Wander through ancient torii gates in Kyoto, gaze at sacred Mount Fuji from hot spring ryokans, and sample Michelin-star street food in Tokyo.",
    highlights: [
      "Ride the legendary 300 km/h Shinkansen Bullet Train",
      "Fushimi Inari Shrine & 10,000 crimson torii gates morning tour",
      "Traditional Ryokan overnight stay with multi-course Kaiseki dinner & hot spring Onsen",
      "Tokyo highlights: Shibuya Crossing, teamLab digital art, Akihabara & Senso-ji",
      "Hakone cable car and pirate ship cruise on Lake Ashi with views of Mt. Fuji",
      "Kimono dressing and authentic Urasenke tea ceremony in Kyoto"
    ],
    inclusions: [
      "8 Nights Premium Accommodation (including 1 Night Luxury Ryokan with Onsen)",
      "Unlimited 7-Day Japan Rail Pass (JR Pass) including Shinkansen bullet trains",
      "Daily Japanese/Western breakfast and 3 specialized dining experiences",
      "teamLab Planets VIP entrance ticket",
      "Pocket Wi-Fi device with unlimited data for the duration of the trip"
    ],
    exclusions: [
      "International flights to Haneda/Narita and from Kansai",
      "Travel insurance",
      "Discretionary tips and alcohol"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Tokyo & Shinjuku Night Walk",
        description: "Welcome to Tokyo! Transfer via Narita Express to your hotel. Evening orientation tour through Shinjuku's glowing neon alleys and Omoide Yokocho."
      },
      {
        day: 2,
        title: "Old & New Tokyo: Senso-ji to Shibuya",
        description: "Visit Tokyo's oldest temple Senso-ji in Asakusa. Later, visit Meiji Shrine, Harajuku's Takeshita Street, and cross the world's busiest intersection at Shibuya."
      },
      {
        day: 3,
        title: "Digital Art teamLab & Tsukiji Outer Market",
        description: "Sample fresh sashimi and wagyu skewers at Tsukiji Outer Market, followed by an immersive sensory experience inside teamLab Planets."
      },
      {
        day: 4,
        title: "Mount Fuji & Hakone Onsen Stay",
        description: "Travel to the volcanic region of Hakone. Cruise Lake Ashi on a pirate ship, view Mt. Fuji, and stay at a serene traditional Ryokan with soothing thermal onsen baths."
      },
      {
        day: 5,
        title: "Shinkansen to Kyoto & Gion Geisha District",
        description: "Board the Shinkansen bullet train to Kyoto. Afternoon walking tour of the historic Gion entertainment district where you may catch a glimpse of Geiko and Maiko."
      },
      {
        day: 6,
        title: "Fushimi Inari & Arashiyama Bamboo Forest",
        description: "Walk under thousands of vermillion torii gates at Fushimi Inari Taisha early in the morning, followed by the enchanting Arashiyama Bamboo Grove and Monkey Park."
      },
      {
        day: 7,
        title: "Kinkaku-ji (Golden Pavilion) & Tea Ceremony",
        description: "Marvel at Kinkaku-ji gleaming over its mirror pond. Participate in a private traditional Zen tea ceremony conducted by an expert tea master."
      },
      {
        day: 8,
        title: "Day Excursion to Nara Deer Park & Osaka Food Tour",
        description: "Feed friendly bowing sika deer in Nara and visit the colossal bronze Buddha at Todai-ji. Evening street food feast in Osaka's lively Dotonbori district."
      },
      {
        day: 9,
        title: "Departure from Osaka / Tokyo",
        description: "Transfer to Kansai International Airport (KIX) or return to Tokyo via Shinkansen for your departure."
      }
    ]
  },
  {
    id: "amalfi-coast",
    title: "Amalfi Coast & Capri Luxury Escape",
    subtitle: "Positano Cliffs, Private Boat to Capri & Authentic Limoncello Tasting",
    location: "Positano & Amalfi, Italy",
    country: "Italy",
    category: "beach",
    categoryLabel: "Mediterranean Luxury",
    price: 980,
    originalPrice: 1190,
    durationDays: 5,
    durationNights: 4,
    rating: 4.88,
    reviewsCount: 189,
    isPopular: false,
    badge: "Romantic",
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Experience the epitome of Italian dolce vita. Pastel cliffside villages clinging to dramatic mountains, lemon groves overlooking deep blue Mediterranean waters, and private boat trips to the jet-set island of Capri.",
    highlights: [
      "Private boat cruise to Capri with swimming stops at the White & Green Grottos",
      "Stay in cliffside sea-view rooms in Positano or Amalfi",
      "Panoramic vintage Fiat 500 or Vespa tour along the coastal corniche",
      "Authentic artisanal Limoncello and mozzarella tasting at a Ravello farm",
      "Sunset aperitivo with views overlooking Positano's glowing hills"
    ],
    inclusions: [
      "4 Nights in 4-Star Sea View Boutique Hotel",
      "Full-day private Capri island boat charter with captain and Prosecco",
      "Private Mercedes van transfers from Naples Airport / Train Station",
      "Daily Mediterranean breakfast buffet",
      "Guided walking tour of Ravello and Villa Cimbrone gardens"
    ],
    exclusions: [
      "Flights to Naples (NAP)",
      "City tourist taxes (approx €4/night paid directly to hotel)",
      "Personal shopping"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Naples & Scenic Transfer to Positano",
        description: "Meet your private chauffeur at Naples Airport. Enjoy the dramatic drive along the Amalfi drive cliffside road into colorful Positano. Evening sunset cocktail overlooking the bay."
      },
      {
        day: 2,
        title: "Private Boat Cruise to Capri Island",
        description: "Board a private luxury gozzo boat for Capri. Cruise past the Faraglioni rock formations, swim in crystal azure waters, and explore Capri's designer boutiques and Piazzetta."
      },
      {
        day: 3,
        title: "Historic Amalfi Town & Ravello Gardens",
        description: "Visit the 9th-century Amalfi Cathedral. Climb to cliffside Ravello to wander the legendary gardens of Villa Rufolo and Villa Cimbrone with their 'Infinity Terrace'."
      },
      {
        day: 4,
        title: "Lemon Groves & Artisan Cooking Class",
        description: "Walk along fragrance-filled lemon terraces. Learn to make authentic handmade gnocchi and tiramisu from an Italian nonna, followed by Limoncello tasting."
      },
      {
        day: 5,
        title: "Arrivederci Amalfi & Transfer to Naples",
        description: "Enjoy a final espresso and warm sfogliatella pastry before your scenic chauffeur transfer back to Naples for your flight home."
      }
    ]
  },
  {
    id: "serengeti-safari",
    title: "Serengeti & Ngorongoro Big Five Safari",
    subtitle: "Game Drives, Great Migration, Luxury Tented Camps & Maasai Culture",
    location: "Serengeti & Ngorongoro, Tanzania",
    country: "Tanzania",
    category: "safari",
    categoryLabel: "Wildlife Safari",
    price: 2199,
    originalPrice: 2499,
    durationDays: 8,
    durationNights: 7,
    rating: 4.97,
    reviewsCount: 154,
    isPopular: false,
    badge: "Bucket List",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Witness nature's greatest spectacle on Earth. Traverse the endless golden plains of the Serengeti, descend into the wildlife haven of Ngorongoro Crater, and encounter lions, elephants, leopards, rhinos, and cheetahs up close in custom safari cruisers.",
    highlights: [
      "Encounter the 'Big Five': Lions, Leopards, Elephants, Rhinos, and Buffalos",
      "Full-day game drive in the UNESCO-listed Ngorongoro Volcanic Crater",
      "Luxury glamping under the African stars in intimate canvas safari lodges",
      "Optional Hot Air Balloon flight over the Serengeti with champagne breakfast",
      "Authentic cultural visit to a traditional Maasai boma village"
    ],
    inclusions: [
      "7 Nights Luxury Safari Tented Camps & Eco-Lodges",
      "All meals: Breakfast, picnic safari lunches, and 3-course dinners",
      "Unlimited game drives in 4x4 Land Cruiser with pop-up photography roof",
      "All National Park entrance permits and concession fees ($650 value)",
      "Professional silver-level certified Tanzanian safari naturalist guide",
      "Bottled drinking water and high-grade binoculars inside safari vehicles"
    ],
    exclusions: [
      "International flights to Kilimanjaro (JRO)",
      "Tanzania tourist visa ($50-$100)",
      "Safari crew gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive at Kilimanjaro & Arusha Briefing",
        description: "Arrive at Kilimanjaro Airport (JRO). Transfer to your tranquil coffee lodge in Arusha. Meet your safari guide for an evening expedition briefing and welcome dinner."
      },
      {
        day: 2,
        title: "Tarangire National Park: Giants & Baobabs",
        description: "Drive to Tarangire, famous for its massive elephant herds and ancient baobab trees. Afternoon game drive spotting lions, giraffes, and colorful birdlife."
      },
      {
        day: 3,
        title: "Into the Endless Plains of Serengeti",
        description: "Pass through the scenic Ngorongoro highlands into the world-renowned Serengeti. Experience your first game drive heading toward your luxury tented camp."
      },
      {
        day: 4,
        title: "Serengeti Full-Day Predator Safari",
        description: "Full day tracking predator prides along the Seronera river valley. Watch leopards resting in acacia branches and cheetahs hunting across the savanna."
      },
      {
        day: 5,
        title: "Hot Air Balloon Flight & Migration Tracking",
        description: "Soar above the savanna at dawn in a hot air balloon followed by bush champagne breakfast. Track the thundering wildebeest migration herds."
      },
      {
        day: 6,
        title: "Descent into Ngorongoro Crater",
        description: "Descend 600 meters into the volcanic caldera of Ngorongoro, the dense sanctuary home to black rhinos, hippos, and thousands of flamingos on Lake Magadi."
      },
      {
        day: 7,
        title: "Lake Manyara & Maasai Cultural Experience",
        description: "Discover the tree-climbing lions and baboons of Lake Manyara. Visit an authentic Maasai village to learn about traditional dances and bush survival."
      },
      {
        day: 8,
        title: "Return to Arusha & Airport Transfer",
        description: "Leisurely breakfast, stop at the Arusha Cultural Heritage Centre for Tanzanite gemstones and artisan crafts, then transfer to JRO for your onward flight."
      }
    ]
  },
  {
    id: "santorini-sunset",
    title: "Santorini Romance & Aegean Sunset",
    subtitle: "Oia Infinity Pools, Wine Tasting, Volcanic Caldera Sailing & Red Beach",
    location: "Santorini, Greece",
    country: "Greece",
    category: "beach",
    categoryLabel: "Island Romance",
    price: 890,
    originalPrice: 1050,
    durationDays: 5,
    durationNights: 4,
    rating: 4.91,
    reviewsCount: 278,
    isPopular: true,
    badge: "Popular",
    heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Whitewashed cubist houses, cobalt-blue domes, dramatic volcanic cliffs, and legendary golden sunsets over the Aegean Sea. Indulge in cliffside cave suites with heated plunge pools and taste volcanic Assyrtiko wines.",
    highlights: [
      "Luxury catamaran sunset cruise with Greek BBQ and open wine bar",
      "Private wine tour visiting 3 estate wineries with sommelier pairings",
      "Stay in cave suites with cliffside caldera views in Oia or Imerovigli",
      "Walk the scenic caldera rim trail from Fira to Oia",
      "Visit the prehistoric Bronze Age ruins of Akrotiri"
    ],
    inclusions: [
      "4 Nights in Luxury Cave Suite with Caldera View",
      "Full 5-hour Sunset Catamaran Cruise with gourmet meal & snorkeling gear",
      "Sommelier-led Santorini wine estate tour with pairings",
      "Round-trip private luxury Mercedes transfers from airport/ferry port",
      "Daily Greek breakfast served on your private terrace"
    ],
    exclusions: [
      "International / domestic flights to Santorini (JTR)",
      "Personal shopping and souvenirs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Santorini & Sunset in Oia",
        description: "Arrive at Santorini airport or port. Private transfer to your cliffside suite in Oia. Enjoy your private terrace and witness the world's most famous sunset."
      },
      {
        day: 2,
        title: "Caldera Catamaran Cruise & Hot Springs",
        description: "Board a luxury catamaran. Sail past the Indian Rock and Venetian lighthouse. Swim in volcanic thermal hot springs and enjoy a fresh Greek BBQ feast on board."
      },
      {
        day: 3,
        title: "Volcanic Wine Tasting & Pyrgos Medieval Village",
        description: "Explore the quiet cobblestone alleys of Pyrgos village. Visit centuries-old underground wine cellars and savor crisp Assyrtiko and sweet Vinsanto wines."
      },
      {
        day: 4,
        title: "Akrotiri Ruins, Red Beach & Perissa Black Sands",
        description: "Tour the preserved Minoan city of Akrotiri ('Minoan Pompeii'). Relax on the volcanic Red Beach and enjoy beachside lunch at Perissa black sand beach."
      },
      {
        day: 5,
        title: "Terrace Breakfast & Farewell",
        description: "Savor Greek yogurt, honey, and fresh pastries on your private balcony overlooking the Aegean before your transfer to the port or airport."
      }
    ]
  },
  {
    id: "iceland-lights",
    title: "Iceland Northern Lights & Golden Circle",
    subtitle: "Geysers, Waterfalls, Glacier Ice Caves & Geothermal Blue Lagoon",
    location: "Reykjavik & South Coast, Iceland",
    country: "Iceland",
    category: "winter",
    categoryLabel: "Winter Adventure",
    price: 1350,
    originalPrice: 1590,
    durationDays: 6,
    durationNights: 5,
    rating: 4.93,
    reviewsCount: 167,
    isPopular: false,
    badge: "Bucket List",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489493512598-d08130f49bea?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Venture to the land of fire and ice. Hunt the mystical Aurora Borealis across dark arctic skies, soak in the steaming mineral waters of the Blue Lagoon, walk behind roaring waterfalls, and explore crystalline natural blue ice caves.",
    highlights: [
      "Guided Aurora Borealis hunting with professional night photographer",
      "VIP Comfort entrance to the world-famous geothermal Blue Lagoon",
      "Natural crystal blue ice cave expedition inside Vatnajokull Glacier",
      "Golden Circle tour: Thingvellir, Geysir geothermal field & Gullfoss waterfall",
      "Walk the black basalt sands of Reynisfjara Beach and Skogafoss"
    ],
    inclusions: [
      "5 Nights 4-Star Nordic Boutique Hotels",
      "Super Jeep transfers and Arctic glacier excursions",
      "Blue Lagoon premium admission (towel, silica mud mask, drink)",
      "Daily Nordic buffet breakfast",
      "Crampons, helmets and safety gear for glacier walking"
    ],
    exclusions: [
      "Flights to/from Keflavik (KEF)",
      "Winter clothing rental (thermal parkas/boots available)",
      "Lunches and dinners not specified"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Iceland & Blue Lagoon Thermal Spa",
        description: "Arrive at Keflavik Airport. Stop at the milky-blue geothermal waters of the Blue Lagoon surrounded by black lava fields before checking into your Reykjavik hotel."
      },
      {
        day: 2,
        title: "The Classic Golden Circle & Geysir Eruption",
        description: "Visit Thingvellir National Park where tectonic plates pull apart, watch the Strokkur geyser blast steam 30 meters high, and stand before majestic Gullfoss waterfall."
      },
      {
        day: 3,
        title: "South Coast Waterfalls & Black Sand Beach",
        description: "Walk behind the curtain of Seljalandsfoss waterfall, marvel at mighty Skogafoss, and walk among the basalt sea stacks on Reynisfjara Black Sand Beach."
      },
      {
        day: 4,
        title: "Vatnajokull Glacier & Crystal Ice Cave Exploration",
        description: "Ride a monster Super Jeep onto Vatnajokull, Europe's largest glacier. Step inside a rare, naturally sculpted crystal blue ice cave with shimmering frozen walls."
      },
      {
        day: 5,
        title: "Jokulsarlon Glacier Lagoon & Diamond Beach",
        description: "Watch translucent icebergs drift into Jokulsarlon lagoon and wash ashore sparkling like diamonds on black sands. Evening aurora hunt away from city lights."
      },
      {
        day: 6,
        title: "Reykjavik City Exploration & Farewell",
        description: "Stroll along colorful Laugavegur street, visit the striking Hallgrimskirkja church, and transfer to Keflavik Airport for your journey home."
      }
    ]
  },
  {
    id: "banff-rockies",
    title: "Canadian Rockies & Banff Wilderness Explorer",
    subtitle: "Lake Louise Turquoise Waters, Icefields Parkway & Wildlife Safaris",
    location: "Banff & Jasper, Canada",
    country: "Canada",
    category: "mountain",
    categoryLabel: "Mountain Escapes",
    price: 1150,
    originalPrice: 1350,
    durationDays: 6,
    durationNights: 5,
    rating: 4.89,
    reviewsCount: 142,
    isPopular: false,
    badge: "Nature",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Immerse yourself in postcard-perfect alpine wilderness. Paddle vivid turquoise glacier lakes, drive the breathtaking Icefields Parkway, ride the Banff Gondola to mountain summits, and spot grizzly bears, elk, and bighorn sheep in their natural habitats.",
    highlights: [
      "Canoe across legendary turquoise waters of Lake Louise and Moraine Lake",
      "Icefields Parkway drive – rated one of the world's most scenic highways",
      "Walk on the Athabasca Glacier aboard the Columbia Ice Explorer vehicle",
      "Banff Gondola summit ride to Sulphur Mountain with 360-degree views",
      "Wildlife safari spotting elk, bighorn sheep, and black bears"
    ],
    inclusions: [
      "5 Nights Mountain Lodge & Fairmont-style Resorts",
      "Banff Gondola & Columbia Icefield Glacier Adventure passes",
      "Lake Louise canoe rental voucher",
      "Parks Canada National Park discovery pass",
      "Daily breakfast at mountain lodges"
    ],
    exclusions: [
      "Flights to Calgary (YYC)",
      "National Park campfire permits",
      "Personal meals and activities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Calgary & Transfer to Banff Townsite",
        description: "Arrive at Calgary Airport. Scenic transfer through the foothills into the towering Canadian Rockies. Check into your mountain lodge and explore Banff Avenue."
      },
      {
        day: 2,
        title: "Banff Gondola, Bow Falls & Cave and Basin",
        description: "Ride the Banff Gondola up Sulphur Mountain for a panoramic view of six mountain ranges. Visit Bow Falls and the birthplace of Canada's National Parks."
      },
      {
        day: 3,
        title: "Iconic Lake Louise & Valley of the Ten Peaks (Moraine Lake)",
        description: "Spend a magical morning canoeing on Lake Louise. Hike to the historic Lake Agnes Tea House and gaze upon the turquoise jewel of Moraine Lake."
      },
      {
        day: 4,
        title: "Icefields Parkway & Columbia Icefield Glacier Walk",
        description: "Drive the magnificent Icefields Parkway past hanging glaciers. Step onto the 10,000-year-old ice of Athabasca Glacier aboard an all-terrain Ice Explorer."
      },
      {
        day: 5,
        title: "Jasper Wildlife Safari & Maligne Canyon",
        description: "Explore the deep chasms of Maligne Canyon and take a boat cruise to Spirit Island on Maligne Lake. Afternoon wildlife search along the Athabasca river."
      },
      {
        day: 6,
        title: "Scenic Return to Calgary & Farewell",
        description: "Enjoy a final alpine sunrise and hearty pancake breakfast before your comfortable shuttle return to Calgary International Airport."
      }
    ]
  }
];

// Sample FAQs for Help & Support
const faqsData = [
  {
    q: "How does booking and payment work on Wanderlust?",
    a: "Booking with Wanderlust is 100% secure and hassle-free. Select your preferred package, customize your dates and travelers, choose optional add-ons, and complete your reservation via credit card, debit card, or digital wallet. You immediately receive a verified digital travel voucher and reference number."
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "We offer Free Cancellation up to 7 days before your trip's departure date for a 100% full refund with zero cancellation fees. For cancellations made between 3 to 7 days prior, an 80% refund or full travel credit is provided. Cancellations within 48 hours are eligible for trip rescheduling."
  },
  {
    q: "Are international flights included in package prices?",
    a: "Our core packages include all premium accommodations, internal travel (bullet trains, speedboats, private chauffeurs, cable cars), expert guides, entry permits, and scheduled excursions. International roundtrip flights to the starting destination can be requested or arranged separately."
  },
  {
    q: "Can I customize the itinerary or add extra days?",
    a: "Yes! Every Wanderlust itinerary can be tailored to your pace. You can request pre-trip or post-trip hotel extensions, room upgrades (e.g., private pool villas or executive suites), and private custom excursions through our 24/7 travel concierge."
  },
  {
    q: "Do I need a travel visa before booking?",
    a: "You can safely book your tour package before obtaining your visa. Upon booking confirmation, we issue an official embassy-ready Tour Confirmation Voucher and booking itinerary that you can submit with your visa application."
  },
  {
    q: "What health, safety, and travel insurance coverage is provided?",
    a: "All of our tour partners are vetted for stringent international safety and hygiene standards. We also offer comprehensive travel insurance add-ons covering emergency medical care, luggage loss, trip interruption, and flight delays."
  }
];

// Demo Seed Bookings (stored in localStorage if empty)
const defaultDemoBookings = [
  {
    id: "WL-2026-8491",
    packageId: "bali-paradise",
    title: "Bali Tropical Paradise & Island Hopping",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    travelDate: "2026-12-15",
    durationDays: 7,
    guestsCount: 2,
    guestName: "Alex Morgan",
    guestEmail: "alex.morgan@example.com",
    guestPhone: "+1 (555) 349-8102",
    roomType: "Luxury Villa with Private Pool",
    addOns: ["Comprehensive Travel Insurance", "VIP Airport Transfer"],
    totalAmount: 1698,
    currency: "USD",
    status: "Confirmed",
    bookingDate: "2026-11-10",
    paymentMethod: "Credit Card (ending in 4242)"
  }
];
