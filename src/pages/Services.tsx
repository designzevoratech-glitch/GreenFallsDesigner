import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { services } from "@/lib/services-data";

// Authentic Service Thumbnails
import serviceLandscape from "@/assets/services/landscape/img4.png";
import serviceTerrace from "@/assets/services/terrace/img3.png";
import serviceLawn from "@/assets/services/lawn/img1.png";
import serviceVertical from "@/assets/services/vertical/img3.png";
import serviceWater from "@/assets/services/water/img3.png";
import serviceGazebo from "@/assets/services/gazebo/img1.png";
import serviceCommercial from "@/assets/services/commercial/img1.webp";
import serviceMaintenance from "@/assets/services/maintenance/img1.png";
import serviceRock from "@/assets/services/rockgarden/img1.jpg";
import serviceCascade from "@/assets/services/cascade/img2.jpg";

const imageMap: Record<string, string> = {
  "landscape-1": serviceLandscape,
  "landscape-2": serviceLandscape,
  "landscape-3": serviceLandscape,
  "landscape-4": serviceLandscape,
  "landscape-6": serviceLandscape,
  "landscape-7": serviceLandscape,
  "landscape-8": serviceLandscape,
  "terrace-1": serviceTerrace,
  "terrace-3": serviceTerrace,
  "lawn-cover": serviceLawn,
  "lawn-1": serviceLawn,
  "vertical-1": serviceVertical,
  "vertical-3": serviceVertical,
  "water-cover": serviceWater,
  "water-1": serviceWater,
  "water-2": serviceWater,
  "water-3": serviceWater,
  "water-4": serviceWater,
  "water-5": serviceWater,
  "water-6": serviceWater,
  "water-7": serviceWater,
  "gazebo-1": serviceGazebo,
  "gazebo-2": serviceGazebo,
  "gazebo-3": serviceGazebo,
  "gazebo-4": serviceGazebo,
  "gazebo-5": serviceGazebo,
  "gazebo-6": serviceGazebo,
  "gazebo-7": serviceGazebo,
  "commercial-1": serviceCommercial,
  "maintenance-cover": serviceMaintenance,
  "maintenance-img1": serviceMaintenance,
  "rock-garden": serviceRock,
  "rock-1": serviceRock,
  "rock-2": serviceRock,
  "rock-3": serviceRock,
  "rock-4": serviceRock,
  "rock-5": serviceRock,
  "rock-6": serviceRock,
  "cascade-design": serviceCascade,
  "cascade-1": serviceCascade,
  "cascade-2": serviceCascade,
  "cascade-4": serviceCascade,
  "cascade-5": serviceCascade,
  "cascade-6": serviceCascade,
  "cascade-7": serviceCascade,
  "cascade-8": serviceCascade,
  "cascade-9": serviceCascade,
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
