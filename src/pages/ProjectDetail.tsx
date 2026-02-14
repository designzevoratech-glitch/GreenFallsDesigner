import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/projects-data";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

import projectSemmozhi from "@/assets/project-semmozhi.webp";
import serviceCommercial from "@/assets/services/commercial/dabf29889e115df79cb4a220c9a37905.webp";
import serviceLandscape from "@/assets/services/landscape/landscape_hero.webp";
import serviceLawn from "@/assets/services/lawn/lawn_index.webp";
import serviceTerrace from "@/assets/services/terrace/terrace-garden.webp";
import heroImg from "@/assets/hero_garden_comp.webp";
import semmozhi1 from "@/assets/semozhi poonga/img1.webp";
import semmozhi2 from "@/assets/semozhi poonga/img2_comp.webp";
import semmozhi3 from "@/assets/semozhi poonga/img3.webp";
import semmozhi4 from "@/assets/semozhi poonga/img4_comp.webp";
import semmozhi5 from "@/assets/semozhi poonga/img5.webp";
import semmozhi6 from "@/assets/semozhi poonga/img6.webp";
import semmozhi7 from "@/assets/semozhi poonga/img7.webp";
import semmozhi8 from "@/assets/semozhi poonga/img8.webp";
import semmozhi9 from "@/assets/semozhi poonga/img9.webp";
import semmozhi10 from "@/assets/semozhi poonga/img10.webp";
import semmozhi11 from "@/assets/semozhi poonga/img11.webp";
import semmozhi12 from "@/assets/semozhi poonga/img12.webp";
import semmozhi13 from "@/assets/semozhi poonga/img13.webp";
import semmozhi14 from "@/assets/semozhi poonga/img14.webp";
import semmozhi15 from "@/assets/semozhi poonga/img15.webp";
import abhasa1 from "@/assets/abhasa images/img1.webp";
import abhasa2 from "@/assets/abhasa images/img2.webp";
import abhasa3 from "@/assets/abhasa images/img3_comp.webp";
import abhasa4jpg from "@/assets/abhasa images/img4.webp";
import abhasa5 from "@/assets/abhasa images/img5_comp.webp";
import abhasa6 from "@/assets/abhasa images/img6.webp";
import abhasa7 from "@/assets/abhasa images/img7.webp";
import abhasa8 from "@/assets/abhasa images/img8.webp";
import abhasa9 from "@/assets/abhasa images/img9.webp";
import abhasa10 from "@/assets/abhasa images/img10.webp";
import moongil1 from "@/assets/moogil kadu/img1_comp.webp";
import moongil2 from "@/assets/moogil kadu/img2_comp.webp";
import moongil3 from "@/assets/moogil kadu/moogil_3_comp.webp";
import moongil4 from "@/assets/moogil kadu/img4_comp.webp";
import moongil7 from "@/assets/moogil kadu/im7.webp";
import moongilVideo from "@/assets/moogil kadu/video_comp.mp4";
import gunjan1 from "@/assets/Gunjan Builders/img1.webp";
import gunjan2 from "@/assets/Gunjan Builders/img2.webp";
import gunjan3 from "@/assets/Gunjan Builders/img3_comp.webp";
import gunjan4 from "@/assets/Gunjan Builders/img4.webp";
import gunjan5 from "@/assets/Gunjan Builders/img5.webp";
import gunjan6 from "@/assets/Gunjan Builders/img6.webp";
import gunjan7 from "@/assets/Gunjan Builders/img7.webp";
import gunjan8 from "@/assets/Gunjan Builders/img8.webp";
import ktvr1 from "@/assets/KTVR Knowledge Park For Ad Technology/img1.webp";
import ktvr2 from "@/assets/KTVR Knowledge Park For Ad Technology/img2.webp";
import ktvr3 from "@/assets/KTVR Knowledge Park For Ad Technology/img3.webp";
import ktvr4 from "@/assets/KTVR Knowledge Park For Ad Technology/img4.webp";
import ktvr5 from "@/assets/KTVR Knowledge Park For Ad Technology/img5.webp";
import ktvr6 from "@/assets/KTVR Knowledge Park For Ad Technology/img6.webp";
import ktvr7 from "@/assets/KTVR Knowledge Park For Ad Technology/img7.webp";
import ktvr8 from "@/assets/KTVR Knowledge Park For Ad Technology/img8.webp";
import srivari1 from "@/assets/Srivari villas/img1_comp.webp";
import srivari2 from "@/assets/Srivari villas/img2_comp.webp";
import srivari3 from "@/assets/Srivari villas/img3_comp.webp";
import srivari4 from "@/assets/Srivari villas/img4_comp.webp";
import srivari5 from "@/assets/Srivari villas/img5.webp";
import srivari6 from "@/assets/Srivari villas/img6.webp";
import srivari7 from "@/assets/Srivari villas/img7.webp";

// Abhasa Sowripalayam Assets
import abhasaSowri1 from "@/assets/abhasa sowripalayam/img1.webp";
import abhasaSowri2 from "@/assets/abhasa sowripalayam/img2.webp";
import abhasaSowri3 from "@/assets/abhasa sowripalayam/img3.webp";
import abhasaSowri4 from "@/assets/abhasa sowripalayam/img4.webp";
import abhasaSowri5 from "@/assets/abhasa sowripalayam/img5.webp";
import abhasaSowri6 from "@/assets/abhasa sowripalayam/img6.webp";

// Aswath Associates Assets
import aswath1 from "@/assets/Aswath assocites/img1.webp";
import aswath2 from "@/assets/Aswath assocites/img2.webp";
import aswath3 from "@/assets/Aswath assocites/img3.webp";
import aswath4 from "@/assets/Aswath assocites/img4.webp";
import aswath5 from "@/assets/Aswath assocites/img5.webp";
import aswath6 from "@/assets/Aswath assocites/img6.webp";
import aswath7 from "@/assets/Aswath assocites/img7.webp";
import aswath8 from "@/assets/Aswath assocites/img8.webp";
import aswath9 from "@/assets/Aswath assocites/img9.webp";
import aswath10 from "@/assets/Aswath assocites/img10.webp";

// Maheshwari Marbles Assets
import maheshwari1 from "@/assets/Maheshwari marbles/img1.webp";
import maheshwari2 from "@/assets/Maheshwari marbles/img2.webp";
import maheshwari3 from "@/assets/Maheshwari marbles/img3.webp";
import maheshwari5 from "@/assets/Maheshwari marbles/img5.webp";
import maheshwari6 from "@/assets/Maheshwari marbles/img6.webp";
import maheshwari7 from "@/assets/Maheshwari marbles/img7.webp";
import maheshwari8 from "@/assets/Maheshwari marbles/img8.webp";
import maheshwari12 from "@/assets/Maheshwari marbles/img12.webp";

const imageMap: Record<string, string> = {
    "project-semmozhi": projectSemmozhi,
    "service-commercial": serviceCommercial,
    "service-landscape": serviceLandscape,
    "service-lawn": serviceLawn,
    "service-terrace": serviceTerrace,
    "hero-garden": heroImg,
    "semmozhi-1": semmozhi1,
    "semmozhi-2": semmozhi2,
    "semmozhi-3": semmozhi3,
    "semmozhi-4": semmozhi4,
    "semmozhi-5": semmozhi5,
    "semmozhi-6": semmozhi6,
    "semmozhi-7": semmozhi7,
    "semmozhi-8": semmozhi8,
    "semmozhi-9": semmozhi9,
    "semmozhi-10": semmozhi10,
    "semmozhi-11": semmozhi11,
    "semmozhi-12": semmozhi12,
    "semmozhi-13": semmozhi13,
    "semmozhi-14": semmozhi14,
    "semmozhi-15": semmozhi15,
    "abhasa-1": abhasa1,
    "abhasa-2": abhasa2,
    "abhasa-3": abhasa3,
    "abhasa-4-jpg": abhasa4jpg,
    "abhasa-5": abhasa5,
    "abhasa-6": abhasa6,
    "abhasa-7": abhasa7,
    "abhasa-8": abhasa8,
    "abhasa-9": abhasa9,
    "abhasa-10": abhasa10,
    "moongil-1": moongil1,
    "moongil-2": moongil2,
    "moongil-3": moongil3,
    "moongil-4": moongil4,
    "moongil-7": moongil7,
    "gunjan-1": gunjan1,
    "gunjan-2": gunjan2,
    "gunjan-3": gunjan3,
    "gunjan-4": gunjan4,
    "gunjan-5": gunjan5,
    "gunjan-6": gunjan6,
    "gunjan-7": gunjan7,
    "gunjan-8": gunjan8,
    "ktvr-1": ktvr1,
    "ktvr-2": ktvr2,
    "ktvr-3": ktvr3,
    "ktvr-4": ktvr4,
    "ktvr-5": ktvr5,
    "ktvr-6": ktvr6,
    "ktvr-7": ktvr7,
    "ktvr-8": ktvr8,
    "srivari-1": srivari1,
    "srivari-2": srivari2,
    "srivari-3": srivari3,
    "srivari-4": srivari4,
    "srivari-5": srivari5,
    "srivari-6": srivari6,
    "srivari-7": srivari7,
    "restro-1": serviceCommercial,
    "villa-1": heroImg,
    "abhasa-sowri-1": abhasaSowri1,
    "abhasa-sowri-2": abhasaSowri2,
    "abhasa-sowri-3": abhasaSowri3,
    "abhasa-sowri-4": abhasaSowri4,
    "abhasa-sowri-5": abhasaSowri5,
    "abhasa-sowri-6": abhasaSowri6,
    "aswath-1": aswath1,
    "aswath-2": aswath2,
    "aswath-3": aswath3,
    "aswath-4": aswath4,
    "aswath-5": aswath5,
    "aswath-6": aswath6,
    "aswath-7": aswath7,
    "aswath-8": aswath8,
    "aswath-9": aswath9,
    "aswath-10": aswath10,
    "maheshwari-1": maheshwari1,
    "maheshwari-2": maheshwari2,
    "maheshwari-3": maheshwari3,
    "maheshwari-5": maheshwari5,
    "maheshwari-6": maheshwari6,
    "maheshwari-7": maheshwari7,
    "maheshwari-8": maheshwari8,
    "maheshwari-12": maheshwari12,
};

const videoMap: Record<string, string> = {
    "moongil-video": moongilVideo,
};

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    if (!project) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-2xl font-bold text-foreground">Project not found</h1>
                    <Link to="/projects" className="text-primary mt-4 inline-block">Back to Projects</Link>
                </div>
            </main>
        );
    }

    const featuredImg = imageMap[project.images[0]] || projectSemmozhi;

    return (
        <main className="pt-20 text-foreground">
            <SEO
                title={`${project.name} – Signature Project`}
                description={`Explore ${project.name}, a signature landscaping project by Green Falls Garden Designer in Coimbatore. ${project.description.substring(0, 100)}...`}
                canonical={`/projects/${slug}`}
                keywords={`${project.name} coimbatore, landscaping project tamil nadu, garden design showcase, green falls portfolio`}
                preloadImage={featuredImg}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": project.name,
                    "description": project.description,
                    "author": {
                        "@type": "LocalBusiness",
                        "name": "Green Falls Garden Designer",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Coimbatore",
                            "addressRegion": "Tamil Nadu"
                        }
                    }
                }}
            />
            {/* Hero */}
            <section ref={containerRef} className="relative py-20 lg:py-28 overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 transform-gpu will-change-transform"
                >
                    <img src={featuredImg} alt={project.name} className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-foreground/60" />
                </motion.div>
                <div className="relative container mx-auto px-4 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: "Projects", to: "/projects" },
                            { label: project.name }
                        ]}
                    />
                    <div className="flex items-center gap-3 mb-4">
                        {project.featured && (
                            <div className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                <Star size={12} className="fill-current" /> Signature Project
                            </div>
                        )}
                        <span className="text-background/70 text-sm tracking-widest uppercase">Portfolio</span>
                    </div>
                    <h1 className="font-display text-3xl md:text-5xl font-bold text-background max-w-3xl">
                        {project.name}
                    </h1>
                    <p className="mt-4 text-background/70 text-lg max-w-2xl">
                        Professional landscaping and garden design excellence in Coimbatore.
                    </p>
                </div>
            </section>

            {/* Description */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">About the Project</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
            </section>

            {/* Gallery / Showcase */}
            <section className="py-16 lg:py-24 bg-secondary/50">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        title="Project Showcase"
                        subtitle={`A visual journey through our work at ${project.name}.`}
                    />

                    {/* Dynamic Bento Grid Layout */}
                    {project.slug === "abhasa" ? (
                        /* Default Grid for Abhasa (will show all 10 images) */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.images.map((imgKey, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative rounded-xl overflow-hidden shadow-sm aspect-[4/3]"
                                >
                                    <img
                                        src={imageMap[imgKey] || projectSemmozhi}
                                        alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - Gallery Image ${i + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ) : project.slug === "moongilkaadu" ? (
                        <div className="flex flex-col gap-6">
                            {/* Main Bento Grid (Video + 4 Images) */}
                            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] lg:h-[700px]">
                                {/* Featured Video - Large Block */}
                                {project.video && videoMap[project.video] && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-2xl group border-2 border-primary/10"
                                    >
                                        <video
                                            src={videoMap[project.video]}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            className="w-full h-full object-cover transform-gpu"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-4 left-4 text-white font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            Project Cinematic
                                        </div>
                                    </motion.div>
                                )}

                                {/* Image 1 & 2 - Top/Bottom Right Slot 1 */}
                                <div className="md:col-span-1 md:row-span-2 grid grid-rows-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="relative rounded-2xl overflow-hidden shadow-lg group"
                                    >
                                        <img
                                            src={imageMap[project.images[0]] || projectSemmozhi}
                                            alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 1`}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu will-change-transform"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="relative rounded-2xl overflow-hidden shadow-lg group transform-gpu"
                                    >
                                        <img
                                            src={imageMap[project.images[1]] || projectSemmozhi}
                                            alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 2`}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu will-change-transform"
                                        />
                                    </motion.div>
                                </div>

                                {/* Image 3 & 4 - Top/Bottom Right Slot 2 */}
                                <div className="md:col-span-1 md:row-span-2 grid grid-rows-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="relative rounded-2xl overflow-hidden shadow-lg group"
                                    >
                                        <img
                                            src={imageMap[project.images[2]] || projectSemmozhi}
                                            alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 3`}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="relative rounded-2xl overflow-hidden shadow-lg group"
                                    >
                                        <img
                                            src={imageMap[project.images[3]] || projectSemmozhi}
                                            alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 4`}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Additional Images Grid (for images beyond index 3) */}
                            {project.images.length > 4 && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {project.images.slice(4).map((imgKey, i) => (
                                        <motion.div
                                            key={imgKey}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square md:aspect-video"
                                        >
                                            <img
                                                src={imageMap[imgKey] || projectSemmozhi}
                                                alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - Extra View ${i + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : project.slug === "gujans-paripalana" ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Image 1 - Large Wide */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group aspect-[16/10]"
                            >
                                <img
                                    src={imageMap[project.images[0]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 1`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 2 - Small Square-ish */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="md:col-span-1 relative rounded-2xl overflow-hidden shadow-lg group aspect-square md:aspect-auto"
                            >
                                <img
                                    src={imageMap[project.images[1]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 2`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 3 - Small Square-ish */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="md:col-span-1 relative rounded-2xl overflow-hidden shadow-lg group aspect-square md:aspect-auto"
                            >
                                <img
                                    src={imageMap[project.images[2]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 3`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 4 - Large Wide */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group aspect-[16/10]"
                            >
                                <img
                                    src={imageMap[project.images[3]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 4`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Additional Images Grid (for images beyond index 3) */}
                            {project.images.length > 4 && (
                                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                    {project.images.slice(4).map((imgKey, i) => (
                                        <motion.div
                                            key={imgKey}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square md:aspect-video"
                                        >
                                            <img
                                                src={imageMap[imgKey] || projectSemmozhi}
                                                alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - Extra View ${i + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : project.slug === "ktvr-knowledge-park" ? (
                        <div className="flex flex-col gap-6">
                            {/* Main Hero Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Image 1 - Top Full Width High Impact */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-xl group aspect-[21/9]"
                                >
                                    <img
                                        src={imageMap[project.images[0]] || projectSemmozhi}
                                        alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 1`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>

                                {/* Image 2 - Left Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]"
                                >
                                    <img
                                        src={imageMap[project.images[1]] || projectSemmozhi}
                                        alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 2`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </motion.div>

                                {/* Image 3 - Right Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]"
                                >
                                    <img
                                        src={imageMap[project.images[2]] || projectSemmozhi}
                                        alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 3`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </motion.div>
                            </div>

                            {/* Additional Images Grid (for images beyond index 2) */}
                            {project.images.length > 3 && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {project.images.slice(3).map((imgKey, i) => (
                                        <motion.div
                                            key={imgKey}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square md:aspect-video"
                                        >
                                            <img
                                                src={imageMap[imgKey] || projectSemmozhi}
                                                alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - Extra View ${i + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : project.slug === "srivari-villas" ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
                            {/* Image 1 - Large Feature (2x2) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3] md:aspect-auto"
                            >
                                <img
                                    src={imageMap[project.images[0]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 1`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </motion.div>

                            {/* Image 2 - Top Right (1x1) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square"
                            >
                                <img
                                    src={imageMap[project.images[1]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 2`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 3 - Middle Right (1x1) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square"
                            >
                                <img
                                    src={imageMap[project.images[2]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 3`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 4 - Bottom Left (2x1) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group aspect-[2/1] md:aspect-auto"
                            >
                                <img
                                    src={imageMap[project.images[3]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 4`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 5 - Bottom Right (1x1) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square"
                            >
                                <img
                                    src={imageMap[project.images[4]] || projectSemmozhi}
                                    alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - View 5`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Additional Images Grid (for images beyond index 4) */}
                            {project.images.length > 5 && (
                                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                    {project.images.slice(5).map((imgKey, i) => (
                                        <motion.div
                                            key={imgKey}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square md:aspect-video"
                                        >
                                            <img
                                                src={imageMap[imgKey] || projectSemmozhi}
                                                alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - Extra View ${i + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Default Grid for other projects */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.images.map((imgKey, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative rounded-xl overflow-hidden shadow-sm aspect-[4/3]"
                                >
                                    <img
                                        src={imageMap[imgKey] || projectSemmozhi}
                                        alt={`${project.name} - Landscape design project in Coimbatore by Green Falls Garden Designer - Image ${i + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center bg-primary/5 rounded-3xl py-12">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        Inspired by this Project?
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                        Get in touch with Green Falls Garden Designer for a free consultation and site visit to transform your own space.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-8 inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetail;
