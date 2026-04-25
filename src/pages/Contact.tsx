import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-50 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="container mx-auto px-4 md:px-6 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white border border-green-100 text-healing-green text-xs font-extrabold tracking-widest uppercase shadow-sm">
            Connect With Us
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-tight tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Have questions? We are here to support you. Reach out via any of our
            channels or visit our clinic.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-12 lg:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-center space-y-6 hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto transition-transform group-hover:scale-110 duration-500">
              <Phone size={36} />
            </div>
            <h3 className="text-3xl font-extrabold text-navy">Call Us</h3>
            <p className="text-slate-500 text-lg">
              Available Mon-Sat, 9am - 8pm
            </p>
            <p className="text-2xl font-extrabold text-navy">
              +971 52 883 7810
            </p>
            <p className="text-slate-400 font-medium">
              WhatsApp consultation available
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-navy via-[#1e4a77] to-navy p-12 lg:p-14 rounded-[3.5rem] shadow-[0_20px_50px_rgba(30,74,119,0.3)] text-center space-y-6 text-white relative overflow-hidden transform lg:scale-[1.05] z-10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-healing-green/10 rounded-full blur-3xl"></div>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/10 text-healing-green rounded-[2rem] flex items-center justify-center mx-auto transition-transform hover:scale-110 duration-500 shadow-xl">
              <Mail size={36} />
            </div>
            <h3 className="text-3xl font-extrabold relative z-10">Email Us</h3>
            <p className="text-blue-50/80 text-lg relative z-10">
              Professional queries & support
            </p>
            <p className="text-xl md:text-2xl font-extrabold relative z-10">
              gayatrigajjam@gmail.com
            </p>
            <div className="flex justify-center gap-4 pt-6 relative z-10">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-healing-green hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-healing-green hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-healing-green hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-12 lg:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-center space-y-6 hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="w-20 h-20 bg-green-50 text-healing-green rounded-[2rem] flex items-center justify-center mx-auto transition-transform group-hover:scale-110 duration-500">
              <MapPin size={36} />
            </div>
            <h3 className="text-3xl font-extrabold text-navy">Our Location</h3>
            <p className="text-slate-500 text-lg">Sharjah / Dubai</p>
            <p className="text-2xl font-extrabold text-navy">
              United Arab Emirates
            </p>
            <p className="text-slate-400 text-sm font-medium pt-2 border-t border-slate-100">
              Serving clients across all emirates & online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 md:px-6 mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[600px] bg-slate-50 rounded-[4rem] overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-[12px] border-white group"
        >
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000"
            alt="Dubai Skyline"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent flex items-end justify-center pb-20">
            <div className="text-center space-y-6 bg-white/10 backdrop-blur-3xl p-12 md:p-14 rounded-[3.5rem] border border-white/20 shadow-2xl max-w-2xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
              <div className="w-20 h-20 bg-healing-green text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl">
                <MapPin size={40} />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Serving the UAE
                </h3>
                <p className="text-white/80 text-lg md:text-xl">
                  Sharjah & Dubai | Online Consultations Globally
                </p>
              </div>
              <button className="px-10 py-5 mt-4 bg-white text-navy font-extrabold rounded-full hover:bg-healing-green hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 inline-flex items-center gap-2">
                Open in Google Maps <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
