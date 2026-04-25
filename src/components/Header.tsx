import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Psychology",
    path: "/psychology",
    dropdown: [
      { name: "Assessment Services", path: "/psychology/assessment" },
      { name: "Therapy & Intervention", path: "/psychology/therapy" },
    ],
  },
  { name: "Physiotherapy", path: "/physiotherapy" },
  { name: "Integrated Care", path: "/integrated-care" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-white/40 py-3 shadow-sm"
          : "bg-transparent py-4",
      )}
    >
      {/* Top Bar - Hidden on Scroll & Mobile */}
      <div
        className={cn(
          "hidden lg:block border-b border-navy/5 bg-navy/5 transition-all duration-300 overflow-hidden",
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100",
        )}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6 text-[11px] font-bold text-navy/60 uppercase tracking-widest">
            <a
              href="tel:+971528837810"
              className="flex items-center gap-2 hover:text-healing-green transition-colors"
            >
              <Phone size={12} /> +971 52 883 7810
            </a>
            <a
              href="mailto:gayatrigajjam@gmail.com"
              className="flex items-center gap-2 hover:text-healing-green transition-colors"
            >
              <Mail size={12} /> gayatrigajjam@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-navy/40">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-healing-green transition-colors"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-healing-green transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-healing-green transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-healing-green transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-healing-green transition-colors"
            >
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-2">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="WellnessMind Hub Logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-healing-green py-2",
                    location.pathname === link.path ||
                      location.pathname.startsWith(link.path + "/")
                      ? "text-healing-green"
                      : "text-navy",
                  )}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-0 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all w-56 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-3 flex flex-col">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="px-5 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-healing-green transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/book"
              className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <div key={link.path} className="flex flex-col">
                  <Link
                    to={link.path}
                    className={cn(
                      "text-lg font-medium py-2",
                      location.pathname === link.path ||
                        location.pathname.startsWith(link.path + "/")
                        ? "text-healing-green"
                        : "text-navy",
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col pl-4 border-l-2 border-slate-100 mb-2 mt-1 gap-1 relative overflow-hidden">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={cn(
                            "py-2 text-base font-medium",
                            location.pathname === subItem.path
                              ? "text-healing-green"
                              : "text-slate-600",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  to="/book"
                  className="w-full py-3 bg-navy text-white rounded-full text-center font-semibold"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/971528837810"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white rounded-full text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> WhatsApp
                </a>
              </div>
              <div className="flex items-center justify-center gap-8 py-6 border-t border-slate-100 mt-4 text-navy/40">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
