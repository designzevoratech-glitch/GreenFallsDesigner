
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import images directly - ALL COMPRESSED WEBP FOR FAST LOADING
// Semmozhi Poonga (Public Landmark)
import semmozhi1 from "@/assets/semozhi poonga/img1.webp";
import semmozhi2 from "@/assets/semozhi poonga/img2_comp.webp";
import semmozhi3 from "@/assets/semozhi poonga/img3.webp";
import semmozhi4 from "@/assets/semozhi poonga/img4_comp.webp";
import semmozhi6 from "@/assets/semozhi poonga/img6.webp";

// Srivari Villas (Luxury Residential)
import srivari1 from "@/assets/Srivari villas/img1_comp.webp";
import srivari2 from "@/assets/Srivari villas/img2_comp.webp";
import srivari3 from "@/assets/Srivari villas/img3_comp.webp";
import srivari4 from "@/assets/Srivari villas/img4_comp.webp";
import srivari5 from "@/assets/Srivari villas/img5.webp";

// Abhasa Wellness (Premium Wellness)
import abhasa1 from "@/assets/abhasa images/img1.webp";
import abhasa2 from "@/assets/abhasa images/img2.webp";
import abhasa4 from "@/assets/abhasa images/img4.webp";
import abhasa5 from "@/assets/abhasa images/img5_comp.webp";

// Gunjan Builders (Community Development)
import gunjan1 from "@/assets/Gunjan Builders/img1.webp";
import gunjan2 from "@/assets/Gunjan Builders/img2.webp";
import gunjan3 from "@/assets/Gunjan Builders/img3_comp.webp";
import gunjan5 from "@/assets/Gunjan Builders/img5.webp";
import gunjan7 from "@/assets/Gunjan Builders/img7.webp";

// Moongil Kaadu Restaurant (Commercial)
import moongil1 from "@/assets/moogil kadu/img1_comp.webp";
import moongil2 from "@/assets/moogil kadu/img2_comp.webp";
import moongil3 from "@/assets/moogil kadu/moogil_3_comp.webp";
import moongil4 from "@/assets/moogil kadu/img4_comp.webp";

// KTVR Knowledge Park (Institutional)
import ktvr1 from "@/assets/KTVR Knowledge Park For Ad Technology/img1.webp";
import ktvr2 from "@/assets/KTVR Knowledge Park For Ad Technology/img2.webp";
import ktvr3 from "@/assets/KTVR Knowledge Park For Ad Technology/img3.webp";

// Maheshwari Marbles (Commercial)
import maheshwari7 from "@/assets/Maheshwari marbles/img7_comp.webp";
import maheshwari8 from "@/assets/Maheshwari marbles/img8_comp.webp";
import maheshwari9 from "@/assets/Maheshwari marbles/img9_comp.webp";

// Aswath Associates (Mixed Use)
import aswath1 from "@/assets/Aswath assocites/img1.webp";
import aswath5 from "@/assets/Aswath assocites/img5.webp";

// Service Images (High Quality)
import landscapePremium from "@/assets/services/landscape/landscape_hero.webp";
import lawnCover from "@/assets/services/lawn/lawn_index.webp";
import terracePremium from "@/assets/services/terrace/terrace_detail_1.webp";
import serviceTerrace from "@/assets/services/terrace/terrace-garden.webp";
import serviceVertical from "@/assets/services/vertical/vertical.webp";
import waterCover from "@/assets/services/water/image.webp";
import serviceGazebo from "@/assets/services/gazebo/unnamed.webp";
import maintenanceCover from "@/assets/services/maintenance/main_hero.webp";
import serviceCommercial from "@/assets/services/commercial/dabf29889e115df79cb4a220c9a37905.webp";
import serviceLandscape2 from "@/assets/services/landscape/IMG_20250416_081157.webp";

const galleryImages = [
    // Featured Hero Images (Best Quality)
    moongil1, srivari1, semmozhi4, abhasa5,

    // Luxury Projects
    srivari2, srivari3, srivari4, srivari5,
    abhasa1, abhasa2, abhasa4,

    // Public & Institutional
    semmozhi1, semmozhi2, semmozhi3, semmozhi6,
    ktvr1, ktvr2, ktvr3,

    // Community & Commercial
    gunjan1, gunjan2, gunjan3, gunjan5, gunjan7,
    moongil2, moongil3, moongil4,
    maheshwari7, maheshwari8, maheshwari9,
    aswath1, aswath5,

    // Service Showcases
    landscapePremium, terracePremium, serviceCommercial,
    lawnCover, waterCover, serviceVertical,
    serviceGazebo, serviceTerrace, maintenanceCover,
    serviceLandscape2
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
                images={[semmozhi4, srivari1, abhasa5]}
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
