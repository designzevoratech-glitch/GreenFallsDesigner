import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { services } from "@/lib/services-data";

// Authentic Service Thumbnails
import serviceLandscape from "@/assets/services/landscape/landscape_hero.jpg";
import serviceTerrace from "@/assets/services/terrace/terrace-garden.jpg";
import serviceLawn from "@/assets/services/lawn/lawn_index.jpg";
import serviceVertical from "@/assets/services/vertical/vertical.jpg";
import serviceWater from "@/assets/services/water/image.jpg";
import serviceGazebo from "@/assets/services/gazebo/unnamed.webp";
import serviceCommercial from "@/assets/services/commercial/dabf29889e115df79cb4a220c9a37905.jpg";
import serviceMaintenance from "@/assets/services/maintenance/main_hero.jpg";

const imageMap: Record<string, string> = {
  "landscape-1": serviceLandscape,
  "terrace-1": serviceTerrace,
  "lawn-cover": serviceLawn,
  "vertical-1": serviceVertical,
  "water-cover": serviceWater,
  "gazebo-1": serviceGazebo,
  "commercial-1": serviceCommercial,
  "maintenance-cover": serviceMaintenance,
  "rock": serviceWater, // Reusing water for rock
};

const Services = () => {
  return (
    <main className="pt-16">
      <SEO
        title="Landscaping Services"
        description="Explore our range of landscaping services in Coimbatore: from lawn installation and terrace gardens to industrial-scale projects across Tamil Nadu."
        canonical="/services"
        keywords="landscaping services coimbatore, lawn installation tamil nadu, terrace garden design erode, vertical garden coimbatore, commercial landscaping tamil nadu"
      />
      <PageHeader
        title="Landscaping Services in Coimbatore & Tamil Nadu"
        subtitle="From affordable home gardens to luxury villa landscapes, Green Falls Garden Designer offers trusted landscaping solutions across Coimbatore, Tiruppur, Theni, Erode, and all over Tamil Nadu since 1975."
        images={[serviceLandscape, serviceTerrace, serviceLawn, serviceWater, serviceCommercial]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={imageMap[s.image] || imageMap["landscape-1"]}
                      alt={`${s.title} – Professional landscaping service in Coimbatore, Tamil Nadu`}
                      title={`${s.title} by Green Falls`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {s.shortDesc.includes("Coimbatore") ? s.shortDesc : `${s.shortDesc} Expertly delivered across Coimbatore and Tamil Nadu.`}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
