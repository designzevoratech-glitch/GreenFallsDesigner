
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import images directly - ALL COMPRESSED WEBP FOR FAST LOADING
// Semmozhi Poonga (Public Landmark)
import semmozhi1 from "@/assets/semozhi poonga/img1.webp";
import semmozhi4 from "@/assets/semozhi poonga/img4_comp.webp";

// Srivari Villas (Luxury Residential)
import srivari1 from "@/assets/Srivari villas/img1_comp.webp";
import srivari6 from "@/assets/Srivari villas/img6.png";
import srivari7 from "@/assets/Srivari villas/img7.png";

// Abhasa Wellness (Premium Wellness)
import abhasa1 from "@/assets/abhasa images/img1.webp";
import abhasa10 from "@/assets/abhasa images/img10.png";
import abhasa5 from "@/assets/abhasa images/img5_comp.webp";

// Moongil Kaadu Restaurant (Commercial)
import moongil1 from "@/assets/moogil kadu/img1_comp.webp";
import moongil7 from "@/assets/moogil kadu/im7.png";

// KTVR Knowledge Park (Institutional)
import ktvr1 from "@/assets/KTVR Knowledge Park For Ad Technology/img1.webp";
import ktvr8 from "@/assets/KTVR Knowledge Park For Ad Technology/img8.png";

// Maheshwari Marbles (Commercial)
import maheshwari12 from "@/assets/Maheshwari marbles/img12.png";

// Service High Impact Images
import cascadeHero from "@/assets/services/cascade/img6.png";
import cascadeDetail from "@/assets/services/cascade/img9.png";
import rockHero from "@/assets/services/rockgarden/img2.png";
import rockDetail from "@/assets/services/rockgarden/img3.png";
import landscapeHero from "@/assets/services/landscape/img7.png";
import landscapeDetail from "@/assets/services/landscape/img8.png";
import waterHero from "@/assets/services/water/img5.png";
import waterDetail from "@/assets/services/water/img6.jpg";
import maintenanceHero from "@/assets/services/maintenance/img4.png";
import maintenanceDetail from "@/assets/services/maintenance/img5.png";
import terraceHero from "@/assets/services/terrace/img7.png";
import terraceDetail from "@/assets/services/terrace/img8.png";
import lawnHero from "@/assets/services/lawn/img6.png";
import verticalHero from "@/assets/services/vertical/img6.png";

const galleryImages = [
    // Top Row - Cinematic Impact
    cascadeHero, abhasa10, srivari6, landscapeHero,

    // Premium Projects Showcase
    moongil7, srivari7, abhasa1, ktvr8, maheshwari12,

    // Service Masterpieces
    rockHero, waterHero, terraceHero, maintenanceHero, verticalHero,

    // Detailed Aesthetics
    cascadeDetail, rockDetail, landscapeDetail, waterDetail, maintenanceDetail, terraceDetail,

    // Classic Signatures
    semmozhi4, srivari1, moongil1, abhasa5, semmozhi1, ktvr1, lawnHero
];

import PageHeader from "@/components/PageHeader";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="pt-16 pb-20">
            <SEO
                title="Gallery"
                description="Explore our portfolio of curated landscaping excellence—from luxury Srivari villas and sustainable Gunjan communities to iconic public landmarks like Semmozhi Poonga."
                canonical="/gallery"
                keywords="garden design gallery coimbatore, landscaping photos tamil nadu, landscape architecture gallery, green falls project images"
            />
            <PageHeader
                title="Garden Design Gallery – Coimbatore & Tamil Nadu"
                subtitle="Explore our visual portfolio of premium garden designs, landscaping projects, and lush outdoor spaces created by Green Falls Garden Designer in Coimbatore, Tiruppur, and across Tamil Nadu."
                images={[cascadeHero, abhasa10, srivari6]}
            />
            <div className="container mx-auto px-4 lg:px-8">

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition-all transform-gpu will-change-transform"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img}
                                alt={`Green Falls Garden Designer garden design project in Coimbatore Tamil Nadu – Gallery Image ${index + 1}`}
                                title={`Green Falls Garden Designer Gallery ${index + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none" data-lenis-prevent>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Gallery Preview"
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </main>
    );
};

export default Gallery;
