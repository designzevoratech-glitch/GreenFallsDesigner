import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
const logo = "/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="Green Falls Logo" className="h-20 w-auto brightness-0 invert" />
              <h3 className="font-display text-2xl font-bold leading-tight">Green Falls <br />Garden Designer</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-8">
              Leading Garden Designers in Coimbatore since 1975. Transforming outdoor spaces with 500+ completed projects across Tamil Nadu.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/greenfallsgarden" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/greenfallsgarden?utm_source=qr&igsh=MWg1bjMyNG4wbmZsMw==" },
                { icon: Youtube, label: "Youtube", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Projects", to: "/projects" },
                { label: "Reviews", to: "/reviews" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Landscape Design", to: "/services/landscape-design" },
                { label: "Terrace Garden", to: "/services/terrace-garden" },
                { label: "Lawn Installation", to: "/services/lawn-installation" },
                { label: "Vertical Garden", to: "/services/vertical-garden" },
                { label: "Commercial Landscaping", to: "/services/commercial-landscaping" },
              ].map((s) => (
                <Link key={s.to} to={s.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919342358544" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                <Phone size={16} /> +91 93423 58544
              </a>
              <a href="mailto:greenfallsgardendesigner@gmail.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                <Mail size={16} /> greenfallsgardendesigner@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm opacity-80">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>No.94 E, T.B Line TNAU, Coimbatore - 641003</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Green Falls Garden Designer. All rights reserved. | Coimbatore, Tamil Nadu
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-center md:pr-20">
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/terms" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Terms of Use</Link>
            </div>
            <p className="text-sm opacity-70">
              Designed by <a href="https://www.zevora.work" target="_blank" rel="noopener noreferrer" className="opacity-100 font-bold hover:text-white hover:underline transition-all">Zevora</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
