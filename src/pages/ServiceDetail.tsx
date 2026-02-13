import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Play, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/services-data";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

// Landscape Design Assets
import landscape1 from "@/assets/services/landscape/landscape_hero.jpg";
import landscape2 from "@/assets/services/landscape/IMG_20250416_081157.jpg";
import landscape5 from "@/assets/services/landscape/WhatsApp Image 2026-02-10 at 11.43.44 AM.jpeg";
import landscape6 from "@/assets/services/landscape/191cdf3e499007a7b1c15c04a9098352.jpg";

// Terrace Garden Assets
import terrace1 from "@/assets/services/terrace/terrace-garden.jpg";
import terrace2 from "@/assets/services/terrace/terrace_detail_2.jpg";
import terrace3 from "@/assets/services/terrace/terrace_detail_1.jpg";
import terrace4 from "@/assets/services/terrace/9e7c2235145b02d138a00170a19896d9.jpg";
import terrace5 from "@/assets/services/terrace/Eco-Friendly-Green-Roof-Terrace-Garden-Design.jpg";
import terrace6 from "@/assets/services/terrace/why-arent-rooftop-decks-popular-in-new-suburbs-with-the-v0-3kq14w6tlp5g1.webp";

// Lawn Assets
import lawnCover from "@/assets/services/lawn/image.png";
import lawn1 from "@/assets/services/lawn/IMG_20240130_170122.jpg";
import lawn2 from "@/assets/services/lawn/IMG_20240130_170703.jpg";
import lawn3 from "@/assets/services/lawn/2f8a4a14a423f91ff4eb410ec9f284cf.jpg";
import lawn4 from "@/assets/services/lawn/191cdf3e499007a7b1c15c04a9098352.jpg";
import lawn5 from "@/assets/services/lawn/lawn_hero.jpg";

// Vertical Garden Assets
import vertical1 from "@/assets/services/vertical/vertical.jpg";
import vertical2 from "@/assets/services/vertical/IMG_20200721_164910.jpg";
import vertical3 from "@/assets/services/vertical/Vertical-Green-Wall-Terrace-Garden-Design.jpg";
import vertical4 from "@/assets/services/vertical/istockphoto-635949984-612x612.jpg";
import vertical5 from "@/assets/services/vertical/vertical-gardens-500x500.webp";

// Water Feature Assets
import waterCover from "@/assets/services/water/image.jpg";
import water1 from "@/assets/services/water/20130517_122536.jpg";
import water2 from "@/assets/services/water/09984fdac77e445b39667ed277b7c446.jpg";
import water3 from "@/assets/services/water/10e08f2355646a09222b017b34ecd579.jpg";
import water4 from "@/assets/services/water/b174943b676c10089baa1595d0ce6f45.jpg";


// Gazebo Assets
import gazebo1 from "@/assets/services/gazebo/unnamed.webp";
import gazebo2 from "@/assets/services/gazebo/unnamed (1).jpg";
import gazebo3 from "@/assets/services/gazebo/unnamed (2).webp";
import gazebo4 from "@/assets/services/gazebo/unnamed (3).webp";

// Commercial Assets
import commercial1 from "@/assets/services/commercial/dabf29889e115df79cb4a220c9a37905.jpg";
import commercial2 from "@/assets/services/commercial/0567b2ac406a06595a2d2a84c467788d.jpg";
import commercial3 from "@/assets/services/commercial/520aa288191abe973aeab1be9eea2242.jpg";
import commercial4 from "@/assets/services/commercial/f845f560025c4880396d282570bb139d.jpg";

// Maintenance Assets
import maintenanceCover from "@/assets/services/maintenance/image.png";
import maintenance1 from "@/assets/services/maintenance/IMG_20240130_170101.jpg";
import maintenance3 from "@/assets/services/maintenance/IMG_20240130_170117.jpg";
import maintenance4 from "@/assets/services/maintenance/IMG_20240130_170703.jpg";
import maintenance5 from "@/assets/services/maintenance/IMG_20240130_170739.jpg";
import maintenancePark from "@/assets/services/maintenance/Afternoon park with sprinklers and pergolas.png";

const imageMap: Record<string, string> = {
  "landscape-1": landscape1,
  "landscape-2": landscape2,
  "landscape-5": landscape5,
  "landscape-6": landscape6,
  "terrace-1": terrace1,
  "terrace-2": terrace2,
  "terrace-3": terrace3,
  "terrace-4": terrace4,
  "terrace-5": terrace5,
  "terrace-6": terrace6,
  "lawn-cover": lawnCover,
  "lawn-1": lawn1,
  "lawn-2": lawn2,
  "lawn-3": lawn3,
  "lawn-4": lawn4,
  "lawn-5": lawn5,
  "vertical-1": vertical1,
  "vertical-2": vertical2,
  "vertical-3": vertical3,
  "vertical-4": vertical4,
  "vertical-5": vertical5,
  "water-cover": waterCover,
  "water-1": water1,
  "water-2": water2,
  "water-3": water3,
  "gazebo-1": gazebo1,
  "gazebo-2": gazebo2,
  "gazebo-3": gazebo3,
  "gazebo-4": gazebo4,
  "commercial-1": commercial1,
  "commercial-2": commercial2,
  "commercial-3": commercial3,
  "commercial-4": commercial4,
  "maintenance-cover": maintenanceCover,
  "maintenance-park": maintenancePark,
  "maintenance-1": maintenance1,
  "maintenance-3": maintenance3,
  "maintenance-4": maintenance4,
  "maintenance-5": maintenance5,
  "rock": water3, // Reusing water3 for rock placeholder
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
