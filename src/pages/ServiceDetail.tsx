import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Play, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/services-data";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

// Landscape Design Assets
import landscape1 from "@/assets/services/landscape/img1.jpeg";
import landscape2 from "@/assets/services/landscape/img2.png";
import landscape3 from "@/assets/services/landscape/img3.png";
import landscape4 from "@/assets/services/landscape/img4.png";
import landscape6 from "@/assets/services/landscape/img6.png";
import landscape7 from "@/assets/services/landscape/img7.png";
import landscape8 from "@/assets/services/landscape/img8.png";

// Terrace Garden Assets
import terrace1 from "@/assets/services/terrace/img1.jpeg";
import terrace2 from "@/assets/services/terrace/img2.jpeg";
import terrace3 from "@/assets/services/terrace/img3.png";
import terrace4 from "@/assets/services/terrace/img4.png";
import terrace6 from "@/assets/services/terrace/img6.png";
import terrace7 from "@/assets/services/terrace/img7.png";
import terrace8 from "@/assets/services/terrace/img8.png";
import terrace9 from "@/assets/services/terrace/img9.png";

// Lawn Assets
import lawnCover from "@/assets/services/lawn/lawn_hero.webp";
import lawn1 from "@/assets/services/lawn/img1.png";
import lawn2 from "@/assets/services/lawn/img2.png";
import lawn3 from "@/assets/services/lawn/img3.png";
import lawn4 from "@/assets/services/lawn/img4.png";
import lawn6 from "@/assets/services/lawn/img6.png";
import lawn7 from "@/assets/services/lawn/img7.png";

// Vertical Garden Assets
import vertical1 from "@/assets/services/vertical/img1.jpeg";
import vertical2 from "@/assets/services/vertical/img2.png";
import vertical3 from "@/assets/services/vertical/img3.png";
import vertical4 from "@/assets/services/vertical/img4.png";
import vertical5 from "@/assets/services/vertical/img5.png";
import vertical6 from "@/assets/services/vertical/img6.png";

// Water Feature Assets
import water1 from "@/assets/services/water/img3.png";
import water2 from "@/assets/services/water/img4.png";
import water3 from "@/assets/services/water/img1.jpeg";
import water4 from "@/assets/services/water/img2.jpeg";
import water5 from "@/assets/services/water/09984fdac77e445b39667ed277b7c446.webp";
import water6 from "@/assets/services/water/img5.png";
import water7 from "@/assets/services/water/img6.jpg";


// Gazebo Assets
import gazebo1 from "@/assets/services/gazebo/img1.png";
import gazebo2 from "@/assets/services/gazebo/img2.png";
import gazebo3 from "@/assets/services/gazebo/img3.png";
import gazebo4 from "@/assets/services/gazebo/unnamed.webp";
import gazebo5 from "@/assets/services/gazebo/unnamed (1).webp";
import gazebo6 from "@/assets/services/gazebo/unnamed (2).webp";
import gazebo7 from "@/assets/services/gazebo/unnamed (3).webp";

// Commercial Assets
import commercial1 from "@/assets/services/commercial/img1.webp";
import commercial2 from "@/assets/services/commercial/img2.webp";
import commercial3 from "@/assets/services/commercial/img3.webp";
import commercial4 from "@/assets/services/commercial/img4.webp";
import commercial5 from "@/assets/services/commercial/img5.webp";
import commercial6 from "@/assets/services/commercial/img6.webp";

// Maintenance Assets
import maintenanceCover from "@/assets/services/maintenance/main_hero.webp";
import maintenance4 from "@/assets/services/maintenance/main_detail_3.webp";
import maintenance5 from "@/assets/services/maintenance/main_detail_4.webp";
import maintenanceImg1 from "@/assets/services/maintenance/img1.png";
import maintenanceImg2 from "@/assets/services/maintenance/img2.png";
import maintenanceImg3 from "@/assets/services/maintenance/img3.png";
import maintenanceImg4 from "@/assets/services/maintenance/img4.png";
import maintenanceImg5 from "@/assets/services/maintenance/img5.png";

// Rock Garden Assets
import rock1 from "@/assets/services/rockgarden/img1.jpg";
import rock2 from "@/assets/services/rockgarden/img2.png";
import rock3 from "@/assets/services/rockgarden/img3.png";
import rock4 from "@/assets/services/rockgarden/img4.png";
import rock5 from "@/assets/services/rockgarden/img5.png";
import rock6 from "@/assets/services/rockgarden/img6.jpg";

// Cascade Assets
import cascade1 from "@/assets/services/cascade/img1.jpg";
import cascade2 from "@/assets/services/cascade/img2.jpg";
import cascade4 from "@/assets/services/cascade/img4.png";
import cascade5 from "@/assets/services/cascade/img5.jpg";
import cascade6 from "@/assets/services/cascade/img6.png";
import cascade7 from "@/assets/services/cascade/img7.png";
import cascade8 from "@/assets/services/cascade/img8.png";
import cascade9 from "@/assets/services/cascade/img9.png";

const imageMap: Record<string, string> = {
  "landscape-1": landscape1,
  "landscape-2": landscape2,
  "landscape-3": landscape3,
  "landscape-4": landscape4,
  "landscape-6": landscape6,
  "landscape-7": landscape7,
  "landscape-8": landscape8,
  "terrace-1": terrace1,
  "terrace-2": terrace2,
  "terrace-3": terrace3,
  "terrace-4": terrace4,
  "terrace-6": terrace6,
  "terrace-7": terrace7,
  "terrace-8": terrace8,
  "terrace-9": terrace9,
  "lawn-cover": lawnCover,
  "lawn-1": lawn1,
  "lawn-2": lawn2,
  "lawn-3": lawn3,
  "lawn-4": lawn4,
  "lawn-6": lawn6,
  "lawn-7": lawn7,
  "vertical-1": vertical1,
  "vertical-2": vertical2,
  "vertical-3": vertical3,
  "vertical-4": vertical4,
  "vertical-5": vertical5,
  "vertical-6": vertical6,
  "water-cover": water1,
  "water-1": water1,
  "water-2": water2,
  "water-3": water3,
  "water-4": water4,
  "water-5": water5,
  "water-6": water6,
  "water-7": water7,
  "gazebo-1": gazebo1,
  "gazebo-2": gazebo2,
  "gazebo-3": gazebo3,
  "gazebo-4": gazebo4,
  "gazebo-5": gazebo5,
  "gazebo-6": gazebo6,
  "gazebo-7": gazebo7,
  "commercial-1": commercial1,
  "commercial-2": commercial2,
  "commercial-3": commercial3,
  "commercial-4": commercial4,
  "commercial-5": commercial5,
  "commercial-6": commercial6,
  "maintenance-cover": maintenanceCover,
  "maintenance-4": maintenance4,
  "maintenance-5": maintenance5,
  "maintenance-img1": maintenanceImg1,
  "maintenance-img2": maintenanceImg2,
  "maintenance-img3": maintenanceImg3,
  "maintenance-img4": maintenanceImg4,
  "maintenance-img5": maintenanceImg5,
  "rock-1": rock1,
  "rock-2": rock2,
  "rock-3": rock3,
  "rock-4": rock4,
  "rock-5": rock5,
  "rock-6": rock6,
  "cascade-1": cascade1,
  "cascade-2": cascade2,
  "cascade-4": cascade4,
  "cascade-5": cascade5,
  "cascade-6": cascade6,
  "cascade-7": cascade7,
  "cascade-8": cascade8,
  "cascade-9": cascade9,
};

const videoMap: Record<string, string> = {
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Service not found</h1>
          <Link to="/services" className="text-primary mt-4 inline-block">Back to Services</Link>
        </div>
      </main>
    );
  }

  const featuredImg = imageMap[service.image] || imageMap["landscape-1"];

  return (
    <main className="pt-20">
      <SEO
        title={service.title}
        description={`${service.shortDesc} Expert landscaping and garden design in Coimbatore and across Tamil Nadu.`}
        canonical={`/services/${slug}`}
        keywords={`${service.title} coimbatore, best ${service.title} tamil nadu, garden work coimbatore, green falls garden designer`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Green Falls Garden Designer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu"
            },
            "areaServed": ["Coimbatore", "Tiruppur", "Theni", "Erode", "Tamil Nadu"]
          }
        }}
      />
      {/* Hero */}
      <section ref={containerRef} className="relative py-20 lg:py-28 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 transform-gpu will-change-transform"
        >
          <img src={featuredImg} alt={service.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/60" />
        </motion.div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", to: "/services" },
              { label: service.title }
            ]}
          />
          <h1 className="font-display text-3xl md:text-5xl font-bold text-background max-w-3xl">
            {service.title} in Coimbatore
          </h1>
          <p className="mt-2 text-background/70 text-sm font-medium uppercase tracking-[0.2em]">Green Falls Garden Designer — Excellence Since 1975</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Info size={20} />
            <span className="font-semibold uppercase tracking-wider text-sm">Service Focus</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.keywords.map((k) => (
              <span key={k} className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-medium">{k}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Showcase */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Service Portfolio"
            subtitle={`Visualizing our ${service.title} excellence across Coimbatore and Tamil Nadu.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Player if available */}
            {service.video && videoMap[service.video] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl aspect-video border-2 border-primary/20 bg-black group"
              >
                <video
                  src={videoMap[service.video]}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <Play size={12} fill="currentColor" /> Cinematic Showcase
                </div>
              </motion.div>
            )}

            {/* Images - Cinematic Bento Grid */}
            {service.galleryImages.map((imgKey, i) => {
              // Bento Logic: Optimized for a high-end "Cinematic" feel
              // 0: Featured Wide (Cinematic Aspect)
              // 1: Square
              // 2: Vertical Highlight
              // 3: Wide Secondary
              const spans = [
                "md:col-span-2 md:row-span-1 aspect-[21/9]", // 0 (Wide Focal Point)
                "md:col-span-1 md:row-span-1 aspect-square", // 1
                "md:col-span-1 md:row-span-2 aspect-[4/5]",    // 2 (Tall Balance)
                "md:col-span-2 md:row-span-1 aspect-video",  // 3
                "md:col-span-1 md:row-span-1 aspect-square", // 4
                "md:col-span-1 md:row-span-1 aspect-square", // 5
              ];
              const spanClass = spans[i % spans.length];

              return (
                <motion.div
                  key={imgKey}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl group transform-gpu will-change-transform border border-white/10 ${spanClass}`}
                >
                  <img
                    src={imageMap[imgKey] || landscape1}
                    alt={`${service.title} showcase ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out will-change-transform"
                  />

                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-1">Portfolio Item</p>
                      <h4 className="text-white font-display font-bold text-lg">{service.title}</h4>
                    </div>
                  </div>

                  {/* Subtle Glass Border on Hover */}
                  <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/5 transition-all duration-700 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary/5 rounded-3xl p-10 lg:p-16 text-center border border-primary/10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Interested in {service.title}?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space? Our expert team is available for site visits across Tamil Nadu. Contact us today for a free consultation.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
