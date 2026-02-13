export interface Project {
  name: string;
  slug: string;
  description: string;
  images: string[];
  video?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Semmozhi Poonga",
    slug: "semmozhi-poonga",
    description: "Semmozhi Poonga stands as a proud symbol of landscape excellence in the heart of Coimbatore. Designed to blend aesthetic beauty with ecological harmony, this landmark garden reflects the vision of creating a serene green retreat within the urban environment. Spread across a thoughtfully planned layout, the park showcases lush lawns, vibrant flowering plants, ornamental trees, and beautifully structured pathways that invite visitors to relax and reconnect with nature.\n\nThe landscape design emphasizes balance, symmetry, and sustainability. Carefully curated plant varieties suited to the Indian climate ensure year-round greenery and minimal maintenance. The garden also features decorative water elements, shaded seating areas, and themed plant sections that enhance both visual appeal and visitor experience.\n\nSemmozhi Poonga is not just a garden—it is a living example of expert planning, horticultural precision, and creative landscaping. Every element, from plant selection to spatial arrangement, has been executed with attention to detail, transforming the space into a peaceful oasis amidst the city’s busy surroundings.\n\nAs one of the most distinguished projects by Green Falls Garden, Semmozhi Poonga represents our commitment to quality, innovation, and sustainable landscape development. It continues to stand as a testament to our expertise in delivering large-scale, world-class garden environments that inspire and endure.",
    images: ["semmozhi-4", "semmozhi-1", "semmozhi-2", "semmozhi-3", "semmozhi-5", "semmozhi-6"],
    featured: true,
  },
  {
    name: "Moongilkaadu",
    slug: "moongilkaadu",
    description: "Comprehensive landscaping project in Coimbatore with bamboo groves, native plantations, and natural pathway designs creating a serene eco-friendly environment.",
    images: ["moongil-1", "moongil-2", "moongil-3", "moongil-4"],
    video: "moongil-video",
  },
  {
    name: "Abhasa",
    slug: "abhasa",
    description: "Abhasa stands as one of Coimbatore’s most prestigious luxury wellness destinations, and the landscape design plays a vital role in creating its serene and therapeutic atmosphere. Designed to complement the architecture and purpose of the space, the outdoor environment at Abhasa reflects calmness, privacy, and natural harmony.\n\nThe landscape focuses on lush greenery, carefully curated tropical plants, and soothing open spaces that promote relaxation and mental well-being. Wide lawns, elegant pathways, ornamental shrubs, and strategically placed trees create a peaceful setting that enhances the overall healing experience. Every element has been thoughtfully arranged to maintain balance, symmetry, and a sense of openness while ensuring privacy for residents.\n\nPlant varieties were selected specifically for the Coimbatore climate, ensuring sustainability and year-round greenery with minimal maintenance. The integration of natural textures, layered planting concepts, and shaded zones helps create a tranquil retreat away from the city’s noise.\n\nAbhasa’s landscape is not just decorative—it is an extension of its wellness philosophy. The greenery supports a calming environment that encourages reflection, recovery, and rejuvenation. As a valued project by Green Falls Garden, Abhasa showcases our expertise in designing premium, purpose-driven landscapes that combine beauty, function, and sustainability.",
    images: ["abhasa-1", "abhasa-2", "abhasa-3", "abhasa-4-jpg", "abhasa-4-png", "abhasa-5"],
  },
  {
    name: "Gunjan Builders",
    slug: "gunjan-builders",
    description: "Premium residential landscaping for Gunjan Builders' flagship communities in Coimbatore. Our design focuses on creating sustainable, lush green environments that enhance property value and resident well-being. From serene retirement communities to modern apartment complexes, we integrate walking paths, themed garden clusters, and efficient irrigation systems to ensure year-round vitality.",
    images: ["gunjan-1", "gunjan-2", "gunjan-3", "gunjan-4"],
  },
  {
    name: "KTVR Knowledge Park For Ad Technology",
    slug: "ktvr-knowledge-park",
    description: "A flagship institutional landscape project for the KTVR Knowledge Park For Ad Technology in Coimbatore. This project features a modern, tech-inspired outdoor environment that balances functional academic spaces with serene natural retreats. The design incorporates high-durability green zones, architectural pathways, and sophisticated botanical arrangements that foster innovation and well-being within a high-performance educational campus.",
    images: ["ktvr-1", "ktvr-2", "ktvr-3"],
  },
  {
    name: "Srivari Villas",
    slug: "srivari-villas",
    description: "Srivari Villas in Coimbatore is designed to offer a harmonious blend of nature and modern sophistication. Our landscape design for this premier residential enclave emphasizes lush greenery, serene outdoor living spaces, and a tranquil atmosphere that complements the high-end architectural vision. Each villa is surrounded by thoughtfully curated botanical arrangements, creating a private sanctuary for residents to reconnect with nature while enjoying the comforts of modern luxury.",
    images: ["srivari-1", "srivari-2", "srivari-3", "srivari-4", "srivari-5"],
  },
];
