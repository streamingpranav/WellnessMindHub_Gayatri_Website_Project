import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight">WellnessMind <span className="text-healing-green">Hub</span></span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Premium Integrated Mind & Body Care Centre in Dubai. Empowering your journey towards holistic health and well-being.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-healing-green transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-healing-green transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-healing-green transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-healing-green transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-healing-green transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-300 hover:text-healing-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-healing-green transition-colors">About Us</Link></li>
              <li><Link to="/psychology" className="text-slate-300 hover:text-healing-green transition-colors">Psychology</Link></li>
              <li><Link to="/physiotherapy" className="text-slate-300 hover:text-healing-green transition-colors">Physiotherapy</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-healing-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/psychology" className="text-slate-300 hover:text-healing-green transition-colors">Assessments</Link></li>
              <li><Link to="/psychology" className="text-slate-300 hover:text-healing-green transition-colors">Therapy & Intervention</Link></li>
              <li><Link to="/physiotherapy" className="text-slate-300 hover:text-healing-green transition-colors">Neuro Rehabilitation</Link></li>
              <li><Link to="/physiotherapy" className="text-slate-300 hover:text-healing-green transition-colors">Musculoskeletal Care</Link></li>
              <li><Link to="/integrated-care" className="text-slate-300 hover:text-healing-green transition-colors">Integrated Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-healing-green mt-1 shrink-0" size={20} />
                <span className="text-slate-300">Sharjah / Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-healing-green shrink-0" size={20} />
                <span className="text-slate-300">+971 52 883 7810</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-healing-green shrink-0" size={20} />
                <span className="text-slate-300">gayatrigajjam@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-healing-green shrink-0" size={20} />
                <span className="text-slate-300">WhatsApp Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-start text-slate-400 text-sm w-full pr-16 md:pr-32">
          <p className="leading-relaxed whitespace-normal xl:whitespace-nowrap">
            © {new Date().getFullYear()} WellnessMind Hub. All rights reserved | This website is designed and developed by{" "}
            <a href="https://infijetdigital.com" target="_blank" rel="noreferrer" className="text-white hover:text-healing-green transition-colors font-semibold">
              INFIJET DIGITAL
            </a>{" "}
            | <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link> | <Link to="#" className="hover:text-white transition-colors">Terms of Services</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
