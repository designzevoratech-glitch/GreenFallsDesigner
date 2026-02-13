import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? "bg-card/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          <Link to="/" className="flex items-center h-full">
            <div className="w-32 lg:w-48" /> {/* Placeholder to keep nav links pushed */}
            <img
              src={logo}
              alt="Green Falls Garden Designer"
              className="h-28 lg:h-36 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 z-10"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative group py-2 ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                    }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 transform origin-left ${isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                    }`} />
                </Link>
              );
            })}
            <a
              href="tel:+919342358544"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md flex items-center gap-2 active:scale-95"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 text-base font-medium flex items-center justify-between border-b border-border/10 ${location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
              >
                {link.label}
                {location.pathname === link.to && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </Link>
            ))}
            <a
              href="tel:+919342358544"
              className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-base font-semibold text-center mt-4 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
