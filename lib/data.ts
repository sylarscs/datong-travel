/**
 * Structured data for Datong travel information.
 * Separated from content for easy updates and reuse across pages.
 */

export interface Hotel {
  name: string;
  nameZh: string;
  location: string;
  priceRange: string;
  tripUrl: string;
  rating: number;
  description: string;
  type: "luxury" | "midrange" | "budget";
}

export interface Attraction {
  name: string;
  nameZh: string;
  description: string;
  ticketPrice: string;
  hours: string;
  duration: string;
  tripUrl: string;
  lat: number;
  lng: number;
}

export interface TrainRoute {
  from: string;
  to: string;
  duration: string;
  frequency: string;
  priceRange: string;
  tripUrl: string;
}

export const hotels: Hotel[] = [
  {
    name: "Datong Yungang International Hotel",
    nameZh: "大同云冈国际酒店",
    location: "Near Yungang Grottoes, 15min from city center",
    priceRange: "¥400–700 / night",
    tripUrl: "https://www.trip.com/hotels/datong-hotels/",
    rating: 4.5,
    description: "The closest quality hotel to the grottoes. Spacious rooms with mountain views.",
    type: "luxury",
  },
  {
    name: "Howard Johnson Datong",
    nameZh: "大同豪生大酒店",
    location: "Datong Ancient City, central",
    priceRange: "¥300–500 / night",
    tripUrl: "https://www.trip.com/hotels/datong-hotels/",
    rating: 4.3,
    description: "International-standard hotel inside the ancient city walls. Walk to Huayan Temple.",
    type: "midrange",
  },
  {
    name: "Datong Garden Hotel",
    nameZh: "大同花园大饭店",
    location: "Ancient City, near Drum Tower",
    priceRange: "¥200–350 / night",
    tripUrl: "https://www.trip.com/hotels/datong-hotels/",
    rating: 4.2,
    description: "Boutique courtyard-style hotel in a restored traditional building. Great atmosphere.",
    type: "midrange",
  },
  {
    name: "Jinjiang Inn Datong",
    nameZh: "锦江之星大同店",
    location: "City center, near train station",
    priceRange: "¥120–200 / night",
    tripUrl: "https://www.trip.com/hotels/datong-hotels/",
    rating: 3.8,
    description: "Clean, reliable budget chain. Good for solo travelers and short stays.",
    type: "budget",
  },
];

export const attractions: Attraction[] = [
  {
    name: "Yungang Grottoes",
    nameZh: "云冈石窟",
    description: "UNESCO World Heritage site with 51,000+ Buddhist statues carved into sandstone cliffs. One of China's three great cave art sites.",
    ticketPrice: "¥120 (Apr–Oct) / ¥100 (Nov–Mar)",
    hours: "8:30 AM – 5:00 PM",
    duration: "3–4 hours",
    tripUrl: "https://www.trip.com/travel-guide/datong/attractions/",
    lat: 40.1106,
    lng: 113.1276,
  },
  {
    name: "Hanging Temple (Xuankong Si)",
    nameZh: "悬空寺",
    description: "A 1,500-year-old temple built into a vertical cliff face, 75m above the ground. A masterpiece of engineering and faith.",
    ticketPrice: "¥130 (entrance + temple climb)",
    hours: "8:00 AM – 6:00 PM (summer) / 8:30 AM – 5:00 PM (winter)",
    duration: "2–3 hours + 1.5h drive from Datong",
    tripUrl: "https://www.trip.com/travel-guide/datong/attractions/",
    lat: 39.6658,
    lng: 113.7062,
  },
  {
    name: "Huayan Temple",
    nameZh: "华严寺",
    description: "The largest and best-preserved Liao Dynasty (907–1125) temple complex in China, inside Datong Ancient City.",
    ticketPrice: "¥60",
    hours: "8:00 AM – 5:30 PM",
    duration: "1.5–2 hours",
    tripUrl: "https://www.trip.com/travel-guide/datong/attractions/",
    lat: 40.0914,
    lng: 113.2933,
  },
  {
    name: "Datong Ancient City Wall",
    nameZh: "大同古城墙",
    description: "Ming Dynasty city walls restored to their former glory. Walk or bike the full 7.2km loop for panoramic city views.",
    ticketPrice: "Free (bike rental ¥30)",
    hours: "Open all day, best at sunset",
    duration: "1–2 hours",
    tripUrl: "https://www.trip.com/travel-guide/datong/attractions/",
    lat: 40.0883,
    lng: 113.2865,
  },
  {
    name: "Nine Dragon Screen Wall",
    nameZh: "九龙壁",
    description: "The oldest and largest glazed-tile Nine Dragon Screen in China, built in 1392. A stunning piece of Ming Dynasty ceramic art.",
    ticketPrice: "¥10",
    hours: "8:00 AM – 5:30 PM",
    duration: "30 min",
    tripUrl: "https://www.trip.com/travel-guide/datong/attractions/",
    lat: 40.0894,
    lng: 113.2917,
  },
];

export const trainRoutes: TrainRoute[] = [
  {
    from: "Beijing",
    to: "Datong",
    duration: "1h 45min (high-speed) / 6h (regular)",
    frequency: "Every 30–60 minutes",
    priceRange: "¥170–250 (high-speed) / ¥50–80 (regular)",
    tripUrl: "https://www.trip.com/trains/china/route/beijing-to-datong/",
  },
  {
    from: "Xi'an",
    to: "Datong",
    duration: "4h (high-speed)",
    frequency: "8 trains daily",
    priceRange: "¥280–400",
    tripUrl: "https://www.trip.com/trains/china/route/xian-to-datong/",
  },
  {
    from: "Pingyao",
    to: "Datong",
    duration: "2h 30min (high-speed)",
    frequency: "6 trains daily",
    priceRange: "¥130–200",
    tripUrl: "https://www.trip.com/trains/china/route/pingyao-to-datong/",
  },
];
