export interface Project {
  name: string;
  slug: string;
  description: string;
  images: string[];
  video?: string;
  featured?: boolean;
  relatedService?: string;
  relatedServiceName?: string;
}

export const projects: Project[] = [
  {
    name: "Semmozhi Poonga",
    slug: "semmozhi-poonga",
    description: "Semmozhi Poonga stands as a monumental achievement in landscape architecture in the heart of Coimbatore. As a defining project for Green Falls Garden Designer, we transformed this space into a lush botanical haven that epitomizes sustainable urban design. Our landscape master plan focused on ecological restoration, integrating native flora, drought-resistant plantations, and sophisticated water management systems.\n\nKey features include meticulously manicured lawns, vibrant flower beds, and shaded walkways that offer residents a serene escape from city life. The park's design seamlessly blends aesthetic beauty with functional recreational spaces, making it a premier destination for nature lovers. By combining traditional horticultural practices with modern landscape engineering, we have created a self-sustaining ecosystem that biodiversity while providing a visual feast for visitors.",
    images: ["semmozhi-4", "semmozhi-1", "semmozhi-2", "semmozhi-3", "semmozhi-5", "semmozhi-6", "semmozhi-7", "semmozhi-8", "semmozhi-9", "semmozhi-10", "semmozhi-11", "semmozhi-12", "semmozhi-13", "semmozhi-14", "semmozhi-15", "semmozhi-16"],
    featured: true,
    relatedService: "commercial-landscaping",
    relatedServiceName: "Commercial Landscaping",
  },
  {
    name: "Moongil Kaadu Restaurant, Vadavalli, Coimbatore",
    slug: "moongilkaadu",
    description: "At Moongil Kaadu Restaurant in Vadavalli, Coimbatore, we crafted a unique dining experience through expert garden design and custom gazebo construction. Our team integrated natural bamboo elements with lush greenery to create an immersive, eco-friendly atmosphere. The highlight of this project is the series of beautifully designed gazebos that offer private, serene dining spaces nestled within nature. By blending rustic charm with professional landscape architecture, we transformed the restaurant's outdoor area into a tranquil retreat that perfectly complements its culinary offerings.",
    images: ["moongil-1", "moongil-7", "moongil-2", "moongil-3", "moongil-4"],
    video: "moongil-video",
    relatedService: "gazebo-garden",
    relatedServiceName: "Gazebo & Outdoor Structures",
  },
  {
    name: "Abhasa Rehab and Wellness Thondamuthur",
    slug: "abhasa",
    description: "Abhasa Rehab and Wellness Thondamuthur is one of Coimbatore's premier luxury wellness destinations, where our landscape design fosters a deeply therapeutic atmosphere. Designed to maximize privacy and tranquility, the outdoor environment features lush tropical greenery, meditation gardens, and serene walking paths that support holistic healing. The landscape integrates native, drought-resistant plants with elegant hardscaping, creating a balanced and sustainable sanctuary nestled in nature. This project exemplifies Green Falls Garden's expertise in creating purpose-driven, restorative landscapes for healthcare and wellness facilities in Tamil Nadu.",
    images: ["abhasa-1", "abhasa-10", "abhasa-3", "abhasa-5", "abhasa-2", "abhasa-7", "abhasa-4-jpg", "abhasa-8", "abhasa-6", "abhasa-9"],
    relatedService: "landscape-design",
    relatedServiceName: "Landscape Design",
  },
  {
    name: "Gujan's Paripalana",
    slug: "gujans-paripalana",
    description: "Gujan's Paripalana in Coimbatore is a thoughtfully designed retirement community that prioritizes peace, comfort, and connection with nature. Our landscape master plan created a serene, therapeutic environment essential for senior living. Key features include accessible walking paths, fragrant meditation gardens, and shaded seating areas that encourage social interaction. We focused on low-maintenance, native plantings that provide year-round beauty and a calming atmosphere, ensuring residents can enjoy a high quality of life surrounded by lush greenery.",
    images: ["gunjan-5", "gunjan-6", "gunjan-7", "gunjan-8", "gunjan-1", "gunjan-3"],
    relatedService: "commercial-landscaping",
    relatedServiceName: "Commercial Landscaping",
  },
  {
    name: "KTVR Knowledge Park For Ad Technology",
    slug: "ktvr-knowledge-park",
    description: "A flagship institutional landscape project for the KTVR Knowledge Park For Ad Technology in Coimbatore. This project features a modern, tech-inspired outdoor environment that balances functional academic spaces with serene natural retreats. The design incorporates high-durability green zones, architectural pathways, and sophisticated botanical arrangements that foster innovation and well-being within a high-performance educational campus.",
    images: ["ktvr-1", "ktvr-2", "ktvr-3", "ktvr-4", "ktvr-5", "ktvr-6", "ktvr-7", "ktvr-8"],
    relatedService: "commercial-landscaping",
    relatedServiceName: "Commercial Landscaping",
  },
  {
    name: "Srivari Ekantam",
    slug: "srivari-villas",
    description: "Srivari Ekantam in Coimbatore is a premier residential enclave where nature meets luxury. Our landscape design for this community focuses on creating lush, private green spaces for each villa, fostering a deep connection with the outdoors. We utilized vertical gardening on terrace spaces and designed serene community lawns for social gatherings. By incorporating native trees and flowering shrubs, we've enhanced the ecological balance and aesthetic appeal of the property, providing residents with a tranquil, garden-centric lifestyle.",
    images: ["srivari-1", "srivari-6", "srivari-5", "srivari-7", "srivari-4", "srivari-2", "srivari-3"],
    relatedService: "landscape-design",
    relatedServiceName: "Landscape Design",
  },
  {
    name: "Abhasa Rehab and Wellness Sowripalayam",
    slug: "abhasa-wellness-sowripalayam",
    description: "A sanctuary of healing and tranquility, the landscape design for Abhasa Rehab and Wellness in Sowripalayam is a testament to the therapeutic power of nature. This project involved creating a holistic environment where lush greenery, calming water features, and secluded garden nooks support the rehabilitation process. The design integrates native plants and sensory gardens that offer privacy and peace, allowing residents to find solace in the embrace of nature. Every element, from the layout of the walking paths to the selection of soothing flora, was chosen to foster a sense of security and restoration.",
    images: ["abhasa-sowri-1", "abhasa-sowri-2", "abhasa-sowri-3", "abhasa-sowri-4", "abhasa-sowri-5", "abhasa-sowri-6"],
    relatedService: "landscape-design",
    relatedServiceName: "Landscape Design",
  },
  {
    name: "Aswath Associates",
    slug: "aswath-associates",
    description: "Partnering with Aswath Associates, a premier architectural firm in Coimbatore, this project exemplifies the seamless integration of modern architecture and landscape design. Our work focused on enhancing the aesthetic appeal and property value of their architectural masterpieces through strategic greening. The landscape features contemporary garden elements, structural planting, and elegant hardscaping that mirror the clean lines and sophistication of the building design. This collaboration highlights our ability to deliver professional-grade landscaping that meets the exacting standards of architectural excellence.",
    images: ["aswath-1", "aswath-2", "aswath-3", "aswath-4", "aswath-5", "aswath-6", "aswath-7", "aswath-8", "aswath-9", "aswath-10"],
    relatedService: "commercial-landscaping",
    relatedServiceName: "Commercial Landscaping",
  },
  {
    name: "Maheshwari Marbles",
    slug: "maheshwari-marbles",
    description: "Nestled in Coimbatore, the landscape design for Maheshwari Marbles reflects a sophisticated blend of industrial elegance and natural tranquility. Our team at Green Falls Garden Designer crafted a green oasis that complements the stone aesthetics of the property. The project features manicured lawns, sculptural plant arrangements, and soothing water elements that create a refreshing contrast to the marble structures. By integrating resilient native species and artistic hardscaping, we've transformed the commercial space into a welcoming and vibrant environment that leaves a lasting impression on visitors.",
    images: ["maheshwari-1", "maheshwari-2", "maheshwari-3", "maheshwari-5", "maheshwari-6", "maheshwari-7", "maheshwari-8", "maheshwari-12"],
    relatedService: "commercial-landscaping",
    relatedServiceName: "Commercial Landscaping",
  },
];
