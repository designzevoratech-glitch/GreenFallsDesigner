import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Award, TreePine, Users, GraduationCap } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hero-garden.jpg";
import semmozhi4 from "@/assets/semozhi poonga/img4.jpeg";
import serviceLandscape from "@/assets/service-landscape.jpg";
import founderImg from "@/assets/founder.jpg";

const highlights = [
  { icon: TreePine, label: "50+ Years Experience" },
  { icon: Award, label: "TNAU Certified" },
  { icon: Users, label: "500+ Projects" },
  { icon: GraduationCap, label: "Expert Horticulturists" },
];

const timelineEvents = [
  { year: "1975", title: "The Seed is Planted", desc: "Mr. Selvaraj begins his journey in garden design, providing professional garden work in Coimbatore with hand-drawn sketches and a deep passion for nature." },
  { year: "1980s", title: "Growing Reputation", desc: "Selvaraj earns trust across Coimbatore for his meticulous garden designs, water features, and commitment to quality." },
  { year: "1990s", title: "A Family Legacy", desc: "Young Srikumar accompanies his father to worksites, absorbing decades of traditional gardening wisdom firsthand." },
  { year: "2003", title: "The Next Generation", desc: "S. Srikumar formally enters the profession, blending his father's traditional methods with modern landscaping technology." },
  { year: "2010s", title: "Expanding Horizons", desc: "Green Falls Garden Designer takes on major institutional projects including colleges, hospitals, and commercial campuses across Tamil Nadu." },
  { year: "Today", title: "500+ Projects & Growing", desc: "A certified, experienced team delivering premium garden design services across Coimbatore, Tiruppur, Theni, and Erode while staying true to our founding values." },
];

const About = () => {
  return (
    <main className="pt-16">
      <SEO
        title="About Us"
        description="Learn about the 50-year legacy of Green Falls Garden Designer. Founded by Mr. Selvaraj and led by S. Srikumar, we are the most trusted garden designer in Coimbatore and Tamil Nadu."
        canonical="/about"
        keywords="green falls garden designer history, s sri kumar coimbatore, selvaraj garden designer, landscaping legacy tamil nadu, tnau certified horticulturist"
      />
      <PageHeader
        title="Our Journey – Rooted in Passion Since 1975"
        subtitle="A journey rooted in passion since 1975 — from a father's vision to a trusted legacy of 500+ gardens across Coimbatore and Tamil Nadu."
        images={[heroImg, semmozhi4, serviceLandscape]}
      />

      <div className="container mx-auto px-4 lg:px-8 -mt-16 relative z-20">
        <div className="flex flex-wrap justify-center gap-6">
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white rounded-xl px-6 py-5 shadow-xl border border-white/20 min-w-[240px]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <h.icon size={24} className="text-primary" />
              </div>
              <span className="font-bold text-foreground">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Father's Journey */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Founding Legacy</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>Founded in 1975 by <span className="text-foreground font-bold">Mr. Selvaraj</span>, Green Falls began with a vision to bring artistic garden designs to every home. At a time when professional landscaping was an emerging concept, he personally visited residences across Tamil Nadu, creating hand-drawn sketches with meticulous detail.</p>
                <p>His deep bond with nature and commitment to quality earned him lifelong trust from clients, establishing a half-century legacy of landscape excellence that continues to define our brand today.</p>

                <div className="pt-6 mt-6 border-t border-border/50">
                  <p className="text-foreground font-display font-bold text-lg mb-1">Mr. Selvaraj</p>
                  <p className="text-xs text-muted-foreground italic uppercase tracking-wider">Gardening Visionary | Nature Craftsman | Founder (1975)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src={founderImg}
                  alt="Mr. Selvaraj - Founder of Green Falls Garden Designer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-2 text-center">Professional Leadership</h2>
            <p className="text-primary font-bold mb-16 text-center text-xl tracking-wide uppercase">S. Srikumar — 23+ Years of Excellence</p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-8 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Leading the legacy since 2003, <span className="text-foreground font-bold">S. Srikumar</span> blends traditional gardening wisdom with modern innovation. Mentored by his father, he carries over two decades of hands-on mastery and a deep-rooted commitment to professional excellence.
                </p>
                <p>
                  With the support of skilled workers and a dedicated team, he has transformed the family profession into a design-driven landscape service. Certified by <span className="text-foreground font-bold">Tamil Nadu Agricultural University (TNAU)</span>, his approach combines scientific horticulture with a passion for creating sustainable green sanctuaries.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-card p-10 rounded-[2rem] border border-border shadow-sm h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center lg:text-left">Our Specialization</h3>
                  <ul className="grid grid-cols-1 gap-y-3 text-base text-muted-foreground">
                    {[
                      "Luxury Villas & Private Residences",
                      "Resorts & Hospitality Properties",
                      "Schools, Colleges & Healthcare",
                      "Corporate IT Parks & Offices",
                      "Public Parks & Recreational Spaces",
                      "Industrial Facilities & Factories",
                      "Apartments & Gated Communities",
                      "Terrace & Specialized Gardens",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Our Timeline" subtitle="Five decades of growing beautiful spaces." />
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                    {t.year}
                  </div>
                  {i < timelineEvents.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl text-primary-foreground">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xl md:text-2xl font-display font-medium italic mb-8">
              "What you plant today is not just a tree — it is a change for tomorrow."
            </p>
            <div className="space-y-4 text-primary-foreground/85 leading-relaxed">
              <p>For us, landscaping is a shared mission with nature. Guided by my father's legacy, our goal is to transform your vision into an enduring green sanctuary.</p>
              <div className="pt-6">
                <p className="font-display font-bold text-white tracking-wide">S. Srikumar</p>
                <p className="text-xs opacity-60 uppercase tracking-widest mt-1">Proprietor | Green Falls</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
