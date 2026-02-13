export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  galleryImages: string[];
  video?: string;
  keywords: string[];
  gallery: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "landscape-design",
    title: "Landscape Design & Installation",
    shortDesc: "Complete landscape planning and execution for residential and commercial spaces.",
    description: "Our landscape design services combine artistic vision with horticultural expertise. We create stunning outdoor environments that blend seamlessly with Tamil Nadu's tropical climate, incorporating native plants, stone pathways, and custom layouts tailored to your space.",
    image: "landscape-1",
    galleryImages: ["landscape-1", "landscape-2", "landscape-5", "landscape-6"],
    keywords: ["landscape design coimbatore", "garden design installation coimbatore", "landscape designer tiruppur", "landscape contractor theni"],
    gallery: [
      { title: "Villa Garden Landscape", description: "Designed a complete garden layout for a 5000 sq ft villa compound with tropical plants, stepping stones, and border plantations suited for Coimbatore climate." },
      { title: "Residential Courtyard Design", description: "Created an elegant courtyard garden with ornamental plants, decorative stones, and a compact lawn area for a modern residence in Tamil Nadu." },
      { title: "Premium Estate Landscaping", description: "Full-scale landscaping for a premium estate featuring palm-lined pathways, flowering borders, and strategic lighting integration." },
    ],
  },
  {
    slug: "terrace-garden",
    title: "Terrace & Rooftop Garden Design",
    shortDesc: "Transform your terrace into a lush green retreat with custom container gardens.",
    description: "We specialize in creating beautiful terrace gardens optimized for Tamil Nadu's climate. Our designs incorporate proper drainage, lightweight containers, and plants that thrive in rooftop conditions, turning unused spaces into green sanctuaries.",
    image: "terrace-1",
    galleryImages: ["terrace-1", "terrace-2", "terrace-3", "terrace-4", "terrace-5", "terrace-6"],
    keywords: ["terrace garden design coimbatore", "rooftop garden coimbatore", "terrace garden designer erode"],
    gallery: [
      { title: "Modern Terrace Garden", description: "Designed rooftop garden with tropical plants suitable for Tamil Nadu climate, incorporating drainage solutions and easy maintenance layouts." },
      { title: "Apartment Terrace Makeover", description: "Transformed a bare concrete terrace into a green retreat with potted palms, flowering plants, and a small seating nook." },
      { title: "Herb & Vegetable Terrace Garden", description: "Created a productive terrace garden combining ornamental plants with organic vegetable and herb growing areas." },
    ],
  },
  {
    slug: "lawn-installation",
    title: "Lawn Installation & Turf Laying",
    shortDesc: "Professional lawn installation with quality turf suited for South Indian climate.",
    description: "We provide expert lawn installation services using premium turf varieties that thrive in Coimbatore's climate. From soil preparation to turf laying and aftercare, we ensure your lawn stays lush and green year-round.",
    image: "lawn-cover",
    galleryImages: ["lawn-cover", "lawn-1", "lawn-2", "lawn-3", "lawn-4", "lawn-5"],
    keywords: ["lawn installation service coimbatore", "turf laying coimbatore"],
    gallery: [
      { title: "Residential Lawn Installation", description: "Installed premium quality turf for a residential garden with automated irrigation, creating a carpet-like green lawn." },
      { title: "Sports Ground Turf Laying", description: "Professional turf installation for a recreational ground with proper grading and drainage for all-weather playability." },
      { title: "Villa Compound Lawn", description: "Complete lawn makeover for a villa compound featuring curved borders, sprinkler system, and ornamental edges." },
    ],
  },
  {
    slug: "vertical-garden",
    title: "Vertical Garden & Green Wall Systems",
    shortDesc: "Living walls that bring nature to limited spaces with innovative vertical planting.",
    description: "Our vertical garden solutions are perfect for urban spaces. Using modular systems and carefully selected plant species, we create stunning living walls for both indoor and outdoor applications.",
    image: "vertical-1",
    galleryImages: ["vertical-1", "vertical-2", "vertical-3", "vertical-4", "vertical-5"],
    keywords: ["vertical garden designer coimbatore", "green wall coimbatore"],
    gallery: [
      { title: "Commercial Building Green Wall", description: "Installed a 200 sq ft living wall on a commercial building facade using drought-resistant tropical plants." },
      { title: "Indoor Vertical Garden", description: "Created an interior living wall for a corporate office lobby, improving air quality and aesthetics." },
      { title: "Residential Green Wall", description: "Designed a compact vertical garden for a residential boundary wall using trailing and cascading plant varieties." },
    ],
  },
  {
    slug: "water-features",
    title: "Water Features & Garden Fountains",
    shortDesc: "Natural and artificial water features that add tranquility to your garden.",
    description: "We design and install stunning water features including natural rock waterfalls, garden fountains, koi ponds, and stream-style water channels. Each installation is custom-designed to complement your garden's style.",
    image: "water-cover",
    galleryImages: ["water-cover", "water-1", "water-2", "water-3"],
    keywords: ["waterfall garden design coimbatore", "garden fountain coimbatore"],
    gallery: [
      { title: "Natural Rock Waterfall", description: "Constructed a multi-tier natural rock waterfall with recirculating pump system and surrounding tropical plants." },
      { title: "Koi Pond Garden Feature", description: "Designed and installed a decorative koi pond with filtration system, water lilies, and border landscaping." },
      { title: "Courtyard Fountain", description: "Installed an elegant stone fountain as the centerpiece of a traditional courtyard garden design." },
    ],
  },
  {
    slug: "gazebo-garden",
    title: "Gazebo & Outdoor Garden Structures",
    shortDesc: "Custom gazebos and pergolas that create perfect outdoor living spaces.",
    description: "We design and build beautiful outdoor structures including wooden gazebos, pergolas, arbors, and garden shelters that seamlessly integrate with your landscape.",
    image: "gazebo-1",
    galleryImages: ["gazebo-1", "gazebo-2", "gazebo-3", "gazebo-4"],
    keywords: ["gazebo garden design coimbatore", "outdoor structure coimbatore"],
    gallery: [
      { title: "Wooden Pavilion Gazebo", description: "Built a traditional wooden gazebo with teak finishing, surrounded by flowering plants and climbing jasmine." },
      { title: "Garden Pergola", description: "Installed a modern pergola with integrated lighting and climbing plants for a shaded outdoor dining area." },
      { title: "Villa Garden Shelter", description: "Constructed a custom garden shelter with natural materials, providing a peaceful retreat within a landscaped garden." },
    ],
  },
  {
    slug: "commercial-landscaping",
    title: "Commercial & Villa Landscaping",
    shortDesc: "Professional landscaping for commercial properties, campuses, and luxury villas.",
    description: "We provide comprehensive landscaping solutions for commercial properties, educational institutions, hotels, and luxury villas. Our team handles large-scale projects with professional precision and aesthetic excellence.",
    image: "commercial-1",
    galleryImages: ["commercial-1", "commercial-2", "commercial-3", "commercial-4"],
    keywords: ["commercial landscaping coimbatore", "villa garden landscaping coimbatore", "commercial landscape tamil nadu"],
    gallery: [
      { title: "College Campus Landscaping", description: "Complete landscaping of a 10-acre college campus with lawns, gardens, pathways, and ornamental tree planting." },
      { title: "Hotel Garden Design", description: "Designed premium garden spaces for a hotel property including themed gardens, water features, and ambient lighting." },
      { title: "IT Park Green Space", description: "Created a sustainable green landscape for an IT park campus with low-maintenance plants and automated irrigation." },
    ],
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance & AMC Services",
    shortDesc: "Regular garden maintenance and annual maintenance contracts for lasting beauty.",
    description: "Our maintenance services ensure your garden stays beautiful year-round. We offer comprehensive AMC packages including lawn mowing, pruning, fertilizing, pest control, and seasonal planting.",
    image: "maintenance-cover",
    galleryImages: ["maintenance-cover", "maintenance-park", "maintenance-1", "maintenance-3", "maintenance-4", "maintenance-5"],
    keywords: ["garden maintenance coimbatore", "gardening AMC coimbatore"],
    gallery: [
      { title: "Residential Garden Maintenance", description: "Ongoing monthly maintenance of a residential garden including lawn care, pruning, fertilizing, and seasonal planting." },
      { title: "Commercial Property AMC", description: "Annual maintenance contract for a commercial property covering all landscaping needs including pest control and irrigation management." },
      { title: "Villa Garden Upkeep", description: "Regular maintenance program for a premium villa garden ensuring consistent beauty throughout all seasons." },
    ],
  },
];

export const getServiceImage = (imageKey: string): string => {
  const imageMap: Record<string, string> = {
    landscape: "/service-landscape.webp",
    terrace: "/service-terrace.webp",
    lawn: "/service-lawn.webp",
    vertical: "/service-vertical.webp",
    water: "/service-water.webp",
    rock: "/service-rock.webp",
    gazebo: "/service-gazebo.webp",
    commercial: "/service-commercial.webp",
  };
  return imageMap[imageKey] || imageMap.landscape;
};
