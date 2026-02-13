import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { projects } from "@/lib/projects-data";

import projectSemmozhi from "@/assets/project-semmozhi.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceLandscape from "@/assets/service-landscape.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import heroImg from "@/assets/hero-garden.jpg";
import serviceTerrace from "@/assets/service-terrace.jpg";
import semmozhi4 from "@/assets/semozhi poonga/img4.jpeg";
import abhasa1 from "@/assets/abhasa images/img1.jpeg";
import moongil1 from "@/assets/moogil kadu/img1.png";
import gunjan1 from "@/assets/Gunjan Builders/img1.webp";
import ktvr1 from "@/assets/KTVR Knowledge Park For Ad Technology/img1.jpg";
import srivari1 from "@/assets/Srivari villas/img1.jpg";

const imageMap: Record<string, string> = {
  "project-semmozhi": projectSemmozhi,
  "service-commercial": serviceCommercial,
  "service-landscape": serviceLandscape,
  "service-lawn": serviceLawn,
  "service-terrace": serviceTerrace,
  "hero-garden": heroImg,
  "semmozhi-4": semmozhi4,
  "abhasa-1": abhasa1,
  "moongil-1": moongil1,
  "gunjan-1": gunjan1,
  "ktvr-1": ktvr1,
  "srivari-1": srivari1,
  "restro-1": serviceCommercial,
  "villa-1": heroImg,
};

const Projects = () => {
  return (
    <main className="pt-16">
      <SEO
        title="Landscaping Projects"
        description="Viewing our signature landscaping projects in Coimbatore and Tamil Nadu, including Semmozhi Poonga, Srivari Villas, and premium corporate campuses."
        canonical="/projects"
        keywords="landscaping projects coimbatore, garden design portfolio tamil nadu, semmozhi poonga coimbatore, srivari villas landscaping, commercial garden project coimbatore"
      />
      <PageHeader
        title="Landscaping Projects in Coimbatore, Tamil Nadu"
        subtitle="Explore our portfolio of curated landscaping excellence—from luxury Srivari villas and sustainable Gunjan communities to iconic public landmarks like Semmozhi Poonga."
        images={[semmozhi4, abhasa1, gunjan1, srivari1, moongil1, ktvr1]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="transform-gpu will-change-transform"
              >
                <Link
                  to={`/projects/${p.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-border/50"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={imageMap[p.images[0]] || projectSemmozhi}
                      alt={`${p.name} – Landscape project in Coimbatore, Tamil Nadu by Green Falls`}
                      title={`${p.name} Project Garden Design`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform transform-gpu"
                    />
                    {p.featured && (
                      <div className="absolute top-3 right-3 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                        <Star size={12} className="fill-current" /> Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-4 text-primary font-semibold text-xs flex items-center gap-1">
                      View Project Details <span>→</span>
                    </div>
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

export default Projects;
