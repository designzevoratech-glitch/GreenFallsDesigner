import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

import PageHeader from "@/components/PageHeader";
import heroImg from "@/assets/hero_garden_comp.webp";
import serviceLandscape from "@/assets/services/landscape/landscape_hero.webp";
import serviceTerrace from "@/assets/services/terrace/terrace-garden.webp";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "", website: "" });
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam protection: check honeypot field
    if (form.website) {
      console.log("Spam detected!");
      setIsSuccess(true); // Fake success for bots
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz1aoE79AHzKdPtGxd1rq2M_6TTtVvlpEhteEz00LQ9MiX8Z5pdtzDL_eowSvAv13Ypqg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          website: form.website,
          timestamp: new Date().toLocaleString(),
        }),
      });

      // With no-cors, we can't reliably read the JSON response, 
      // but we assume success if no error is thrown
      setIsSuccess(true);
      toast({
        title: "Enquiry Sent Successfully!",
        description: "Your details have been saved. We will reach out to you soon.",
      });
      setForm({ name: "", email: "", phone: "", service: "", message: "", website: "" });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-16 pb-20">
      <SEO
        title="Contact Us"
        description="Get in touch with Green Falls Garden Designer. Request a free consultation for garden work in Coimbatore, Tiruppur, Theni, or anywhere in Tamil Nadu."
        canonical="/contact"
        keywords="contact garden designer coimbatore, landscaping consultation tamil nadu, garden work enquiry, landscape architect coimbatore phone"
      />
      <PageHeader
        title="Contact Garden Designers — Serving All over Tamil Nadu"
        subtitle="Get in touch for a free consultation and site visit. We provide professional landscaping services across Coimbatore, Tiruppur, Theni, Erode, and every city in Tamil Nadu."
        images={[heroImg, serviceLandscape, serviceTerrace]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Serving Coimbatore & Tamil Nadu Since 1975</h2>
              <div className="space-y-6">
                <a href="tel:+919342358544" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">+91 93423 58544</p>
                  </div>
                </a>
                <a href="mailto:greenfallsgardendesigner@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">greenfallsgardendesigner@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">No.94 E, T.B Line TNAU,<br />Coimbatore - 641003, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Working Hours</p>
                    <p className="text-muted-foreground text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 bg-secondary/50 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Service Availability:</span> We provide complete garden design and landscaping services <span className="font-bold underline">all over Tamil Nadu</span>. Our team reaches Coimbatore, Tiruppur, Erode, Theni, and all surrounding districts for site visits and execution.
                </p>
              </div>

              {/* Google Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.241!2d76.9366!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Green Falls Garden Designer Location"
                />
              </div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <h2 className="font-display text-2xl font-bold text-foreground">Schedule a Site Visit</h2>
                <a
                  href="tel:+919342358544"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors w-fit"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Fill in your details or call us directly. We'll get back to you within 24 hours.</p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 border border-primary/20 p-10 rounded-xl text-center"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-primary" size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-8">
                    Your enquiry has been sent successfully. We have received your details and will contact you shortly to discuss your garden project.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select a service</option>
                      <option>Landscape Design & Installation</option>
                      <option>Terrace Garden Design</option>
                      <option>Lawn Installation</option>
                      <option>Vertical Garden</option>
                      <option>Water Features</option>
                      <option>Rock Garden</option>
                      <option>Gazebo & Structures</option>
                      <option>Commercial Landscaping</option>
                      <option>Garden Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {submitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
