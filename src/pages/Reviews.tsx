import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const reviews = [
  { name: "Rajesh Kumar", type: "Villa Owner", project: "Villa Garden", location: "Coimbatore", rating: 5, review: "Green Falls transformed our villa garden beyond our expectations. The attention to detail and plant selection for our Coimbatore climate was exceptional. Srikumar personally supervised every phase." },
  { name: "Priya Selvam", type: "Homeowner", project: "Terrace Garden", location: "Coimbatore", rating: 5, review: "Professional team with great expertise. Our terrace garden is now the highlight of our home. They suggested perfect plants for our rooftop conditions." },
  { name: "Dr. Anand Krishnan", type: "Hospital Director", project: "Campus Landscaping", location: "Coimbatore", rating: 5, review: "We hired Green Falls for our hospital campus landscaping. The result is calming, beautiful, and perfectly maintained through their AMC service." },
  { name: "Sundar Rajan", type: "Builder", project: "Residential Complex", location: "Tamil Nadu", rating: 5, review: "As a builder, I've worked with Green Falls on multiple projects. Their consistency, professionalism, and design sense are unmatched in the Coimbatore region." },
  { name: "Meena Kumari", type: "School Principal", project: "School Garden", location: "Coimbatore", rating: 5, review: "The school garden they designed is wonderful. Children love the sensory garden section. The maintenance team is reliable and keeps everything green year-round." },
  { name: "Karthik Venkatesh", type: "IT Professional", project: "Home Garden", location: "Coimbatore", rating: 5, review: "Being an IT professional, I had no time for gardening. Green Falls designed a low-maintenance garden with automated irrigation. Now I have a beautiful garden without the effort." },
  { name: "Lakshmi Narayanan", type: "Resort Owner", project: "Resort Landscaping", location: "Tamil Nadu", rating: 5, review: "Our resort's garden is the talk of the town thanks to Green Falls. The water features and tropical plantings create an incredible atmosphere for our guests." },
  { name: "Arun Prakash", type: "College Administrator", project: "College Campus", location: "Coimbatore", rating: 5, review: "Green Falls landscaped our entire college campus. The transformation was remarkable. Students and faculty alike appreciate the green, peaceful environment." },
  { name: "Deepa Suresh", type: "Apartment Resident", project: "Community Garden", location: "Coimbatore", rating: 5, review: "They designed our apartment community garden beautifully. The mix of flowering plants, lawns, and sitting areas has brought neighbors together. Truly professional service." },
];

import PageHeader from "@/components/PageHeader";
import heroImg from "@/assets/hero-garden.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import semmozhi4 from "@/assets/semozhi poonga/img4.jpeg";

const Reviews = () => {
  return (
    <main className="pt-16">
      <SEO
        title="Client Reviews & Testimonials"
        description="See what our clients in Coimbatore and across Tamil Nadu are saying about our garden designs, lawn installations, and landscaping expertise."
        canonical="/reviews"
        keywords="green falls garden designer reviews, best landscaper coimbatore testimonials, garden work coimbatore feedback, landscaping client reviews tamil nadu"
      />
      <PageHeader
        title="Client Testimonials – Green Falls Coimbatore"
        subtitle="Read what our satisfied clients across Coimbatore, Tamil Nadu, and surrounding areas say about our professional landscaping and garden design services."
        images={[serviceLawn, heroImg, semmozhi4]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote size={24} className="text-primary/30 mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{r.review}"</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.type} • {r.project} • {r.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
