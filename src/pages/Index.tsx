import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Star, ArrowRight, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hero_garden_comp.webp";
import serviceLandscape from "@/assets/services/landscape/img4.png";
import serviceTerrace from "@/assets/services/terrace/img3.png";
import serviceLawn from "@/assets/services/lawn/img1.png";
import serviceCommercial from "@/assets/services/commercial/dabf29889e115df79cb4a220c9a37905.webp";
import semmozhi4 from "@/assets/semozhi poonga/img4_comp.webp";
import srivari1 from "@/assets/Srivari villas/img1_comp.webp";
import gunjan5 from "@/assets/Gunjan Builders/img5.png";
import ktvr1 from "@/assets/KTVR Knowledge Park For Ad Technology/img1.webp";

const trustItems = [
  "500+ Projects Completed",
  "Serving Tamil Nadu",
  "Legacy Since 1975",
  "Certified Horticulture Expertise",
];

const homeServices = [
  { title: "Landscape Design & Installation", slug: "landscape-design", image: serviceLandscape, desc: "Complete landscape planning and execution for residential and commercial spaces." },
  { title: "Terrace Garden Design", slug: "terrace-garden", image: serviceTerrace, desc: "Transform your terrace into a lush green retreat with custom container gardens." },
  { title: "Lawn Installation", slug: "lawn-installation", image: serviceLawn, desc: "Professional lawn installation with quality turf suited for South Indian climate." },
  { title: "Commercial Landscaping", slug: "commercial-landscaping", image: serviceCommercial, desc: "Professional landscaping for commercial properties, campuses, and luxury villas." },
];

const reviews = [
  { name: "Rajesh Kumar", review: "Green Falls transformed our villa garden beyond our expectations. The attention to detail and plant selection for our Coimbatore climate was exceptional.", rating: 5 },
  { name: "Priya Selvam", review: "Professional team with great expertise. Our terrace garden is now the highlight of our home. Highly recommended for anyone in Tamil Nadu.", rating: 5 },
  { name: "Dr. Anand Krishnan", review: "We hired Green Falls for our hospital campus landscaping. The result is calming, beautiful, and perfectly maintained through their AMC service.", rating: 5 },
];

const timeline = [
  { year: "1975", event: "Founded by Mr. Selvaraj", desc: "Started the legacy of garden design in Coimbatore with hand-drawn sketches and passionate craftsmanship." },
  { year: "2003", event: "S. Srikumar continues the legacy", desc: "The next generation takes over, blending traditional wisdom with modern landscaping technology." },
  { year: "Today", event: "500+ successful projects", desc: "Serving across Tamil Nadu with certified expertise and decades of trusted experience." },
];

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  const whyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: whyScroll } = useScroll({
    target: whyRef,
    offset: ["start end", "end start"],
  });
  const whyY1 = useTransform(whyScroll, [0, 1], ["0%", "-10%"]);
  const whyY2 = useTransform(whyScroll, [0, 1], ["0%", "10%"]);

  return (
    <main>
      <SEO
        title="Best Garden Work in Coimbatore"
        description="Green Falls Garden Designer – Premium garden design and landscaping services in Coimbatore and across Tamil Nadu. Trusted experts for garden work, lawn installation, and terrace gardens since 1975."
        canonical="/"
        preloadImage={heroImg}
        keywords="garden work in coimbatore, best garden designer coimbatore, landscaping services tamil nadu, landscape designer coimbatore, garden design tiruppur, terrace garden designer theni, garden maintenance erode, best landscaper tamil nadu, lawn installation coimbatore"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Green Falls Garden Designer",
          "image": "https://greenfallsgardendesigner.com/favicon.png",
          "@id": "https://greenfallsgardendesigner.com",
          "url": "https://greenfallsgardendesigner.com",
          "telephone": "+919342358544",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.94 E, T.B Line TNAU",
            "addressLocality": "Coimbatore",
            "postalCode": "641003",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 11.0168,
            "longitude": 76.9366
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/greenfallsgarden",
            "https://www.instagram.com/greenfallsgarden"
          ],
          "priceRange": "$$"
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 transform-gpu will-change-transform"
        >
          <img
            src="/hero_desktop.webp"
            srcSet="/hero_mobile.webp 800w, /hero_desktop.webp 1600w"
            sizes="100vw"
            alt="Green Falls Garden Designer – Professional Landscaping Services in Coimbatore, Tamil Nadu"
            title="Green Falls Garden Designer Hero"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </motion.div>
        <div className="relative container mx-auto px-4 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
              Best Garden Work in Coimbatore – Green Falls Garden Designer
            </h1>
            <p className="mt-6 text-lg text-background/85 font-body leading-relaxed">
              Premium landscaping and garden design services available all over Tamil Nadu. Serving Coimbatore, Tiruppur, Theni, Erode, and all surrounding locations with trusted expertise since 1975.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-background text-background px-7 py-3 rounded-md font-semibold hover:bg-background/10 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Trust Strip */}
      <section className="relative z-20 -mt-10 mb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-8 border border-white/20">
            <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4">
              {trustItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 group transform-gpu"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Check size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-foreground font-semibold text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Green Falls */}
      <section ref={whyRef} className="py-20 lg:py-28 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Why Choose <span className="text-primary">Green Falls</span> Garden Designers?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We turn ordinary spaces into living, breathing landscapes suitable for all budgets. As the premier <span className="font-semibold text-foreground">Garden Designers in Coimbatore</span>, we serve Tiruppur, Theni, Erode, and all of Tamil Nadu with a legacy of horticultural excellence for over 50 years.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Star className="text-primary-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">End-to-end gardening solutions</h3>
                      <p className="text-muted-foreground">From design and plant selection to execution and long-term maintenance, we handle every aspect of gardening and landscaping under one roof.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Star className="text-primary-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Experience rooted in nature</h3>
                      <p className="text-muted-foreground">With years of hands-on expertise, our team understands soil, plants, water features, and outdoor aesthetics to create gardens that thrive naturally.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Star className="text-primary-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Customized designs for every space</h3>
                      <p className="text-muted-foreground">We listen to your needs and tailor each project—whether it’s a backyard, terrace, farm, or commercial landscape—to reflect your vision and lifestyle.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 relative">
                <motion.img
                  style={{ y: whyY1 }}
                  src={heroImg}
                  alt="Beautiful residential garden design project in Coimbatore"
                  title="Residential Garden Design"
                  loading="lazy"
                  decoding="async"
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8 transform-gpu will-change-transform"
                />
                <motion.img
                  style={{ y: whyY2 }}
                  src={serviceLandscape}
                  alt="Premium landscape architecture in Tamil Nadu"
                  title="Premium Landscaping Coimbatore"
                  loading="lazy"
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform-gpu will-change-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Our Services" subtitle="Comprehensive garden design and landscaping solutions for every space." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.title} service by Green Falls Garden Designer`}
                      title={s.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform transform-gpu"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="A glimpse of our landmark landscaping projects across Tamil Nadu." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Large Flagship Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group rounded-3xl overflow-hidden aspect-[4/5] transform-gpu will-change-transform shadow-2xl"
            >
              <Link to="/projects/semmozhi-poonga" className="block w-full h-full">
                <img
                  src={semmozhi4}
                  alt="Semmozhi Poonga – Iconic botanical garden project in Coimbatore by Green Falls"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ease-out will-change-transform transform-gpu"
                />
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-gold/90 backdrop-blur-md text-gold-foreground px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-gold/50 transition-transform duration-500 group-hover:scale-110">
                    <Star size={14} className="fill-current" />
                    <span className="text-[11px] font-black uppercase tracking-[0.15em]">Signature Landmark</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 lg:p-10 flex flex-col justify-end">
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-3 leading-tight">Semmozhi Poonga</h3>
                  <p className="text-white/80 text-sm lg:text-base max-w-sm leading-relaxed">
                    As the leading <span className="font-bold text-white">Garden Designers in Coimbatore</span>, we transformed this iconic landmark into a world-class botanical garden featuring exotic flora.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Right Side Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Top Row - Two Square Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group rounded-3xl overflow-hidden aspect-square transform-gpu will-change-transform"
              >
                <Link to="/projects/srivari-villas" className="block w-full h-full">
                  <img src={srivari1} alt="Srivari Villas" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ease-out transform-gpu" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <h4 className="text-white font-bold text-lg lg:text-xl leading-tight">Srivari Ekantam</h4>
                    <p className="text-white/70 text-xs mt-1 font-medium">Coimbatore</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                className="relative group rounded-3xl overflow-hidden aspect-square transform-gpu will-change-transform"
              >
                <Link to="/projects/gujans-paripalana" className="block w-full h-full">
                  <img src={gunjan5} alt="Gujan's Paripalana" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ease-out transform-gpu" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <h4 className="text-white font-bold text-lg lg:text-xl leading-tight">Gujan's Paripalana</h4>
                    <p className="text-white/70 text-xs mt-1 font-medium">Coimbatore</p>
                  </div>
                </Link>
              </motion.div>

              {/* Bottom Wide Card - 2:1 Aspect Ratio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
                className="sm:col-span-2 relative group rounded-3xl overflow-hidden aspect-[2/1] transform-gpu will-change-transform"
              >
                <Link to="/projects/ktvr-knowledge-park" className="block w-full h-full">
                  <img src={ktvr1} alt="KTVR Knowledge Park" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ease-out transform-gpu" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                    <h4 className="text-white font-bold text-xl lg:text-2xl leading-tight">KTVR Knowledge Park</h4>
                    <p className="text-white/70 text-sm mt-2 font-medium">Institutional Campus - Coimbatore</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Our Legacy" subtitle="A journey rooted in passion, spanning generations." />
          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 mb-10 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-semibold text-foreground">{t.event}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="What Our Clients Say" subtitle="Trusted by homeowners, institutions, and businesses across Tamil Nadu." />
          <div className="relative overflow-hidden py-4">
            <motion.div
              animate={{
                x: [0, "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-6 w-fit"
            >
              {[...reviews, ...reviews, ...reviews, ...reviews].map((r, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-8 shadow-sm border border-border w-[350px] md:w-[450px] shrink-0 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={18} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic mb-6">"{r.review}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Verified Client</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Transform Your Outdoor Space Anywhere in Tamil Nadu
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              From affordable to luxury landscaping, our 50+ years of legacy serves every corner of Tamil Nadu, including Coimbatore, Tiruppur, Theni, and Erode.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919342358544"
                className="bg-background text-foreground px-7 py-3 rounded-md font-semibold hover:bg-background/90 transition-colors flex items-center gap-2"
              >
                <Phone size={18} /> Call Now
              </a>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground text-primary-foreground px-7 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main >
  );
};

export default Index;
