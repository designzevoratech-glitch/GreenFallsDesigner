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
<<<<<<< HEAD
    description: "Semmozhi Poonga stands as a monumental achievement in landscape architecture in the heart of Coimbatore. As a defining project for Green Falls Garden Designer, we transformed this space into a lush botanical haven that epitomizes sustainable urban design. Our landscape master plan focused on ecological restoration, integrating native flora, drought-resistant plantations, and sophisticated water management systems.\n\nKey features include meticulously manicured lawns, vibrant flower beds, and shaded walkways that offer residents a serene escape from city life. The park's design seamlessly blends aesthetic beauty with functional recreational spaces, making it a premier destination for nature lovers. By combining traditional horticultural practices with modern landscape engineering, we have created a self-sustaining ecosystem that biodiversity while providing a visual feast for visitors.",
    images: ["semmozhi-4", "semmozhi-1", "semmozhi-2", "semmozhi-3", "semmozhi-5", "semmozhi-6", "semmozhi-7", "semmozhi-8", "semmozhi-9", "semmozhi-10", "semmozhi-11", "semmozhi-12", "semmozhi-13", "semmozhi-14", "semmozhi-15"],
    featured: true,
  },
  {
    name: "Moongil Kaadu Restaurant, Vadavalli, Coimbatore",
    slug: "moongilkaadu",
    description: "At Moongil Kaadu Restaurant in Vadavalli, Coimbatore, we crafted a unique dining experience through expert garden design and custom gazebo construction. Our team integrated natural bamboo elements with lush greenery to create an immersive, eco-friendly atmosphere. The highlight of this project is the series of beautifully designed gazebos that offer private, serene dining spaces nestled within nature. By blending rustic charm with professional landscape architecture, we transformed the restaurant's outdoor area into a tranquil retreat that perfectly complements its culinary offerings.",
    images: ["moongil-6", "moongil-1", "moongil-5", "moongil-2", "moongil-3", "moongil-4"],
    video: "moongil-video",
  },
  {
    name: "Abhasa Rehab and Wellness Thondamuthur",
    slug: "abhasa",
    description: "Abhasa Rehab and Wellness Thondamuthur is one of Coimbatore's premier luxury wellness destinations, where our landscape design fosters a deeply therapeutic atmosphere. Designed to maximize privacy and tranquility, the outdoor environment features lush tropical greenery, meditation gardens, and serene walking paths that support holistic healing. The landscape integrates native, drought-resistant plants with elegant hardscaping, creating a balanced and sustainable sanctuary nestled in nature. This project exemplifies Green Falls Garden's expertise in creating purpose-driven, restorative landscapes for healthcare and wellness facilities in Tamil Nadu.",
    images: ["abhasa-1", "abhasa-2", "abhasa-3", "abhasa-4-jpg", "abhasa-4-png", "abhasa-5"],
  },
  {
    name: "Gujan's Paripalana",
    slug: "gujans-paripalana",
    description: "Gujan's Paripalana in Coimbatore is a thoughtfully designed retirement community that prioritizes peace, comfort, and connection with nature. Our landscape master plan created a serene, therapeutic environment essential for senior living. Key features include accessible walking paths, fragrant meditation gardens, and shaded seating areas that encourage social interaction. We focused on low-maintenance, native plantings that provide year-round beauty and a calming atmosphere, ensuring residents can enjoy a high quality of life surrounded by lush greenery.",
    images: ["gunjan-5", "gunjan-6", "gunjan-7", "gunjan-8", "gunjan-1", "gunjan-2", "gunjan-3", "gunjan-4"],
=======
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
>>>>>>> 00082cb5a620b2df868860d4a1728f0cb124c023
  },
  {
    name: "KTVR Knowledge Park For Ad Technology",
    slug: "ktvr-knowledge-park",
    description: "A flagship institutional landscape project for the KTVR Knowledge Park For Ad Technology in Coimbatore. This project features a modern, tech-inspired outdoor environment that balances functional academic spaces with serene natural retreats. The design incorporates high-durability green zones, architectural pathways, and sophisticated botanical arrangements that foster innovation and well-being within a high-performance educational campus.",
    images: ["ktvr-1", "ktvr-2", "ktvr-3"],
  },
  {
<<<<<<< HEAD
    name: "Srivari Ekantam",
    slug: "srivari-villas",
    description: "Srivari Ekantam in Coimbatore is a premier residential enclave where nature meets luxury. Our landscape design for this community focuses on creating lush, private green spaces for each villa, fostering a deep connection with the outdoors. We utilized vertical gardening on terrace spaces and designed serene community lawns for social gatherings. By incorporating native trees and flowering shrubs, we've enhanced the ecological balance and aesthetic appeal of the property, providing residents with a tranquil, garden-centric lifestyle.",
    images: ["srivari-1", "srivari-2", "srivari-3", "srivari-5", "srivari-6", "srivari-7"],
  },
  {
    name: "Abhasa Rehab and Wellness Sowripalayam",
    slug: "abhasa-wellness-sowripalayam",
    description: "A sanctuary of healing and tranquility, the landscape design for Abhasa Rehab and Wellness in Sowripalayam is a testament to the therapeutic power of nature. This project involved creating a holistic environment where lush greenery, calming water features, and secluded garden nooks support the rehabilitation process. The design integrates native plants and sensory gardens that offer privacy and peace, allowing residents to find solace in the embrace of nature. Every element, from the layout of the walking paths to the selection of soothing flora, was chosen to foster a sense of security and restoration.",
    images: ["abhasa-sowri-1", "abhasa-sowri-2", "abhasa-sowri-3", "abhasa-sowri-4", "abhasa-sowri-5", "abhasa-sowri-6"],
  },
  {
    name: "Aswath Associates",
    slug: "aswath-associates",
    description: "Partnering with Aswath Associates, a premier architectural firm in Coimbatore, this project exemplifies the seamless integration of modern architecture and landscape design. Our work focused on enhancing the aesthetic appeal and property value of their architectural masterpieces through strategic greening. The landscape features contemporary garden elements, structural planting, and elegant hardscaping that mirror the clean lines and sophistication of the building design. This collaboration highlights our ability to deliver professional-grade landscaping that meets the exacting standards of architectural excellence.",
    images: ["aswath-1", "aswath-2", "aswath-3", "aswath-4", "aswath-5", "aswath-6", "aswath-7", "aswath-8", "aswath-9", "aswath-10"],
  },
  {
    name: "Maheshwari Marbles",
    slug: "maheshwari-marbles",
    description: "Nestled in Coimbatore, the landscape design for Maheshwari Marbles reflects a sophisticated blend of industrial elegance and natural tranquility. Our team at Green Falls Garden Designer crafted a green oasis that complements the stone aesthetics of the property. The project features manicured lawns, sculptural plant arrangements, and soothing water elements that create a refreshing contrast to the marble structures. By integrating resilient native species and artistic hardscaping, we've transformed the commercial space into a welcoming and vibrant environment that leaves a lasting impression on visitors.",
    images: ["maheshwari-1", "maheshwari-2", "maheshwari-3", "maheshwari-5", "maheshwari-6", "maheshwari-7", "maheshwari-8", "maheshwari-9"],
=======
    name: "Srivari Villas",
    slug: "srivari-villas",
    description: "Srivari Villas in Coimbatore is designed to offer a harmonious blend of nature and modern sophistication. Our landscape design for this premier residential enclave emphasizes lush greenery, serene outdoor living spaces, and a tranquil atmosphere that complements the high-end architectural vision. Each villa is surrounded by thoughtfully curated botanical arrangements, creating a private sanctuary for residents to reconnect with nature while enjoying the comforts of modern luxury.",
    images: ["srivari-1", "srivari-2", "srivari-3", "srivari-4", "srivari-5"],
>>>>>>> 00082cb5a620b2df868860d4a1728f0cb124c023
  },
];
