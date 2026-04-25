import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Star,
  Users,
  Award,
  Brain,
  Activity,
  Heart,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Newspaper,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import ConditionSelector from "@/src/components/ConditionSelector";
import ApproachSection from "@/src/components/ApproachSection";

const services = [
  {
    title: "Psychology",
    icon: <Brain className="text-navy" size={32} />,
    desc: "Evidence-based psychology services for children, adults, and families addressing anxiety, depression, ADHD, and more.",
    link: "/psychology",
    bg: "bg-blue-50",
    heroImg:
      "/psychology.png",
  },
  {
    title: "Physiotherapy",
    icon: <Activity className="text-healing-green" size={32} />,
    desc: "Comprehensive rehabilitation aimed at restoring mobility and function through personalized physiotherapy care.",
    link: "/physiotherapy",
    bg: "bg-green-50",
    heroImg:
      "/physiotherapy.png",
  },
  {
    title: "Integrated Care",
    icon: <Heart className="text-red-400" size={32} />,
    desc: "Our unique mind-body approach treats psychological and physical health together for faster, holistic recovery.",
    link: "/integrated-care",
    bg: "bg-rose-50",
    heroImg:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000",
  },
];

const galleryImages = [
  {
    url: "/clinic.png",
    alt: "Modern Clinic Consultation Room",
    caption: "Modern Consultation Room",
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053",
    alt: "Premium Reception Area",
    caption: "Premium Reception Area",
  },
  {
    url: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=2070",
    alt: "Serene Therapy Space",
    caption: "Serene Therapy Space",
  },
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    alt: "Physiotherapy Rehabilitation Zone",
    caption: "Physiotherapy Rehabilitation Zone",
  },
];

const conditions = [
  { name: "ADHD & ASD", icon: "🧠" },
  { name: "Anxiety & Stress", icon: "🧘" },
  { name: "Depression", icon: "🌑" },
  { name: "Pain Disorders", icon: "⚡" },
  { name: "Neurological Issues", icon: "🧬" },
  { name: "Pediatric Care", icon: "👶" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    quote:
      "The integrated approach at WellnessMind has been life-changing for our son's ADHD management. The collaboration between the psychologist and physiotherapist is truly unique and effective.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    role: "Professional",
    quote:
      "I was struggling with chronic pain for years. The physiotherapy team didn't just treat the symptoms; they helped me understand the mind-body connection to my recovery.",
    rating: 5,
  },
  {
    name: "Lila R.",
    role: "Parent",
    quote:
      "Extremely professional and empathetic. The telehealth options were a lifesaver for our family's busy schedule. Highly recommended for anyone in Dubai seeking quality care.",
    rating: 5,
  },
  {
    name: "John D.",
    role: "Athlete",
    quote:
      "My sports injury recovery was accelerated thanks to the combined focus on physical rehab and mental endurance. Exceptional care.",
    rating: 5,
  },
  {
    name: "Maria G.",
    role: "Teacher",
    quote:
      "The specialized support for anxiety helped me get back to my classroom with confidence and calm. Forever grateful.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How does the integrated mind-body approach work?",
    a: "Our integrated approach involves psychologists and physiotherapists working collaboratively. For example, in chronic pain cases, we address physical rehabilitation alongside cognitive strategies to manage pain perception and emotional impact, leading to faster and more holistic recovery.",
  },
  {
    q: "What types of assessments do you provide?",
    a: "We offer comprehensive diagnostic assessments including ADHD screenings, Autism Spectrum Disorder (ASD) evaluations, developmental screenings for children, and multi-disciplinary assessments for complex neurological or behavioral concerns.",
  },
  {
    q: "Can I book a consultation online without visiting the clinic?",
    a: "Yes, we offer secure tele-psychology and online consultations. You can book an online session directly through our booking portal, suitable for therapy, parent coaching, and initial consultations.",
  },
  {
    q: "How long is a typical treatment journey?",
    a: "The duration varies based on the specific condition and individual goals. After the initial assessment, your lead expert will provide a roadmap. Some interventions are short-term (6-12 sessions), while complex developmental or integrated care may require longer-term support.",
  },
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [gallerySlideIndex, setGallerySlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextGalleryImage = () => {
    setGallerySlideIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setGallerySlideIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] xl:min-h-[95vh] flex items-center pt-48 lg:pt-56 pb-24 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/40 via-green-100/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100/30 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

        {/* ... (Hero content stays the same) ... */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 pt-0 min-h-[380px] flex flex-col justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm mb-2">
                  <span className="flex h-2 w-2 rounded-full bg-healing-green animate-pulse"></span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                    Premium Dubai Healthcare
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[2.75rem] md:text-5xl lg:text-[52px] xl:text-[64px] 2xl:text-[76px] font-extrabold leading-[1.1] text-navy mb-4 tracking-tight md:whitespace-nowrap"
              >
                {services[currentSlideIndex].title === "Integrated Care" ? (
                  <>
                    Integrated{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                      Care
                    </span>
                  </>
                ) : (
                  <>
                    {services[currentSlideIndex].title}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                      Care
                    </span>
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed min-h-[90px]"
              >
                {services[currentSlideIndex].desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 pt-2"
              >
                <Link
                  to={services[currentSlideIndex].link}
                  className="px-8 py-4 bg-navy text-white font-bold rounded-full shadow-[0_10px_30px_rgba(30,74,119,0.3)] hover:shadow-[0_20px_40px_rgba(30,74,119,0.4)] hover:-translate-y-1 hover:bg-[#1e4a77] active:scale-95 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span>Explore Service</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/book"
                  className="px-8 py-4 bg-white text-navy border border-slate-200 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-healing-green hover:text-healing-green active:scale-95 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-healing-green/60 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-healing-green transition-transform group-hover:scale-110"></span>
                  </span>
                  <span>Services Booking</span>
                </Link>
              </motion.div>

              {/* Slider indicators */}
              <div className="flex gap-3 pt-8">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIndex(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      currentSlideIndex === i
                        ? "w-8 bg-healing-green"
                        : "w-2 bg-gray-300 hover:bg-gray-400",
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end w-full"
            >
              <div className="relative w-full lg:w-[110%] lg:-mr-10 xl:-mr-20 z-0">
                <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white/50 glass group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlideIndex}
                      initial={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      src={services[currentSlideIndex].heroImg}
                      alt={services[currentSlideIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-50"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-24 relative z-20 mx-4 md:mx-12 -mt-16 md:-mt-24 lg:-mt-12 bg-white rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-healing-green/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative max-w-[440px] mx-auto">
                <div className="absolute top-4 -left-4 w-full h-full bg-gradient-to-br from-navy/5 to-navy/10 rounded-[3rem] -z-10 rotate-3 transition-transform duration-700 hover:rotate-6 border border-slate-200"></div>
                <div className="absolute -bottom-4 right-4 w-full h-full bg-healing-green/10 rounded-[3rem] -z-10 -rotate-2"></div>
                <img
                  src="/gayatri.png"
                  alt="Gayatri Gajjam"
                  className="w-full rounded-[3rem] shadow-2xl relative z-10 object-cover aspect-[4/5] filter sepia-[0.05] contrast-[1.05]"
                />

                {/* Floating Badge */}
                <div className="absolute -right-6 md:-right-12 bottom-12 bg-white p-5 rounded-[2rem] shadow-xl z-20 border border-slate-100 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-healing-green/10 flex items-center justify-center">
                    <ShieldCheck className="text-healing-green w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                      Dual Licensed
                    </p>
                    <p className="font-extrabold text-navy text-lg leading-tight">
                      DHA & RCI
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Area */}
            <div className="order-1 lg:order-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 text-healing-green text-sm font-bold tracking-widest uppercase mb-2 shadow-sm border border-green-100/50">
                  <Star size={14} className="fill-healing-green" /> Meet Your
                  Expert
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight">
                  Gayatri{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                    Gajjam
                  </span>
                </h2>
                <p className="text-slate-600 text-[17px] leading-relaxed max-w-xl">
                  A distinguished Licensed Clinical Psychologist specializing in
                  child, adolescent, and family mental health. With a deep
                  understanding of developmental complexities, Gayatri brings
                  evidence-based interventions to the Middle East and India.
                </p>
              </motion.div>

              {/* Trust Bar (Stats) */}
              <div className="grid grid-cols-3 gap-6 border-y border-slate-100 py-8">
                <div className="text-center group border border-slate-50 rounded-2xl p-4 hover:bg-slate-50 transition-colors">
                  <p className="text-4xl font-extrabold text-navy mb-2 group-hover:scale-105 transition-transform duration-300">
                    13+
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
                    Years Exp.
                  </p>
                </div>
                <div className="text-center group border border-slate-50 rounded-2xl p-4 hover:bg-slate-50 transition-colors">
                  <p className="text-4xl font-extrabold text-healing-green mb-2 group-hover:scale-105 transition-transform duration-300">
                    2k+
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
                    Consultations
                  </p>
                </div>
                <div className="text-center group border border-slate-50 rounded-2xl p-4 hover:bg-slate-50 transition-colors">
                  <p className="text-4xl font-extrabold text-navy mb-2 group-hover:scale-105 transition-transform duration-300">
                    1.5k+
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
                    Screenings
                  </p>
                </div>
              </div>

              {/* UAE Press Journal */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:bg-white">
                <div className="flex -space-x-3 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-20 hover:-translate-y-1 transition-transform">
                    <Newspaper className="w-5 h-5 text-slate-500" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-white shadow-sm flex items-center justify-center z-10 hover:-translate-y-1 transition-transform">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-navy flex items-center gap-2 mb-1.5 whitespace-nowrap">
                    UAE Press Journal Contributor
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[9px] uppercase tracking-wider font-extrabold">
                      Featured
                    </span>
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                    Articles on various mental health topics published in{" "}
                    <strong className="text-navy">Khaleej Times</strong>,{" "}
                    <strong className="text-navy">Gulf News</strong>, and{" "}
                    <strong className="text-navy">The National</strong>.
                  </p>
                </div>
              </div>

              {/* Commitment Statement */}
              <div className="bg-gradient-to-r from-navy/[0.03] to-transparent p-6 rounded-r-3xl border-l-4 border-healing-green">
                <p className="text-navy text-[17px] leading-relaxed italic font-medium">
                  "I am committed to providing high-quality psychological
                  assessments, therapy, and holistic interventions that support
                  meaningful and lasting growth."
                </p>
              </div>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold rounded-full shadow-[0_10px_30px_rgba(30,74,119,0.2)] hover:shadow-[0_20px_40px_rgba(30,74,119,0.3)] hover:-translate-y-1 hover:bg-[#1e4a77] active:scale-95 transition-all duration-300 group"
                >
                  View Biography{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
              Clinical Excellence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight"
          >
            Our Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We provide specialized care through our highly qualified
            multidisciplinary team of experts, treating conditions with globally
            recognized protocols.
          </motion.p>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="mb-8 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-healing-green/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-slate-200 transition-colors">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-navy font-bold text-sm tracking-wide uppercase hover:text-healing-green transition-colors cursor-pointer"
                  >
                    Learn More
                  </Link>
                  <Link
                    to={service.link}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-healing-green group-hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Condition Selector Tool */}
      <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-50 to-transparent opacity-60 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ConditionSelector />
        </div>
      </section>

      {/* Integrated Care USP */}
      <section className="py-32 px-4 md:px-12 bg-white">
        <div className="container mx-auto rounded-[4rem] bg-gradient-to-br from-navy via-[#1a4066] to-navy p-12 md:p-20 lg:p-24 text-white overflow-hidden relative shadow-[0_40px_80px_rgba(30,74,119,0.3)]">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white scale-150"></div>
          <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-healing-green/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Healing the Mind & Body{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-400">
                    Together
                  </span>
                </h2>
                <p className="text-xl text-blue-50/90 leading-relaxed max-w-lg">
                  Our approach integrates mental health therapies and physical
                  rehabilitation. True healing happens when both systems are
                  united.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Faster Recovery Outcomes",
                  "Improved Emotional Resilience",
                  "Enhanced Quality of Life",
                  "Seamless Multidisciplinary Care",
                ].map((item, i) => (
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="flex items-start gap-3 text-[17px] text-white/90"
                  >
                    <div className="mt-1 shrink-0 rounded-full bg-healing-green/20 p-1">
                      <CheckCircle2 className="text-healing-green" size={16} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  to="/integrated-care"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-healing-green text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-white hover:text-navy active:scale-95 transition-all duration-300 group"
                >
                  Explore Our Model{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full border border-white/10 flex items-center justify-center p-8 lg:mr-10"
              >
                <div className="w-full h-full rounded-full border border-dashed border-healing-green/40 flex items-center justify-center p-8">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-navy to-healing-green p-1 relative">
                    <div className="absolute inset-0 bg-healing-green/20 blur-xl rounded-full"></div>
                    <div className="w-full h-full rounded-full bg-navy flex items-center justify-center text-7xl shadow-inner relative z-10 border-4 border-navy border-opacity-50">
                      🧠
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[8px] border-[#1a4066] z-20 hover:scale-105 transition-transform duration-300">
                <Heart className="text-red-500 mb-2" size={32} />
                <span className="font-extrabold text-navy uppercase tracking-widest text-[10px]">
                  Synergy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Approach Section */}
      <ApproachSection />

      {/* Conditions Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight"
          >
            Conditions We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
              Treat
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Professional diagnosis and tailored support for various
            psychological and physiological concerns.
          </motion.p>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 xl:gap-8">
            {conditions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2.5rem] text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 hover:bg-slate-50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-bold text-navy text-[15px] leading-tight group-hover:text-healing-green transition-colors">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Testimonials Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-healing-green/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mb-20 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            Lives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-300">
              Transformed
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-50/70 text-xl max-w-2xl mx-auto"
          >
            Hear from the families and individuals who have experienced our
            deeply integrated care approach.
          </motion.p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative w-full overflow-hidden py-4 -rotate-1">
          <div className="flex w-fit animate-infinite-scroll">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="w-[350px] md:w-[450px] mx-4 bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-12 rounded-[3.5rem] relative flex flex-col justify-between flex-shrink-0 hover:bg-white/10 transition-colors duration-300 shadow-2xl"
              >
                <div className="absolute -top-4 right-8 text-[100px] text-healing-green/10 font-serif leading-none select-none">
                  "
                </div>
                <div>
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="fill-yellow-400 text-yellow-400 drop-shadow-sm"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed italic font-medium relative z-10 mb-8">
                    "{item.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-healing-green to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg leading-tight">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-healing-green font-bold uppercase tracking-widest mt-1 opacity-90">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white relative overflow-hidden text-center lg:text-left">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative z-10 max-w-7xl mx-auto">
            <div className="max-w-2xl space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight"
              >
                Our Clinic <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                  Environment
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-600 text-lg md:text-xl leading-relaxed"
              >
                Step into a serene, meticulously designed space organized for
                your absolute comfort and focused healing journey.
              </motion.p>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] max-w-7xl mx-auto rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-[12px] border-slate-50 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={gallerySlideIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                src={galleryImages[gallerySlideIndex].url}
                alt={galleryImages[gallerySlideIndex].alt}
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pointer-events-none mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-white z-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-white/20">
                Gallery View
              </div>
              <div className="font-extrabold text-2xl md:text-4xl tracking-tight max-w-md drop-shadow-xl text-balance">
                {galleryImages[gallerySlideIndex].caption}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute right-10 md:right-16 bottom-10 md:bottom-16 flex gap-4 z-10">
              <button
                onClick={prevGalleryImage}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all border border-white/20 hover:scale-110 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextGalleryImage}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all border border-white/20 hover:scale-110 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-navy/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setGallerySlideIndex(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 border border-white/20",
                    gallerySlideIndex === idx
                      ? "w-10 bg-white"
                      : "w-3 bg-white/40 hover:bg-white/60",
                  )}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="pb-32 bg-slate-50 border-t border-slate-100 pt-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto relative overflow-hidden bg-gradient-to-r from-navy via-[#1e4a77] to-navy text-white rounded-[4rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-[0_30px_60px_rgba(30,74,119,0.2)]">
            {/* Background pattern/decorations */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-healing-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-8 text-center md:text-left flex-1">
              <div className="flex-shrink-0 w-24 h-24 rounded-[2rem] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <MessageCircle
                  size={48}
                  className="text-healing-green drop-shadow-md"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Unsure where to start?
                </h3>
                <p className="text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-lg">
                  Book a{" "}
                  <span className="font-bold text-white border-b-2 border-healing-green/50 pb-0.5">
                    Free 15-minute Discovery Call
                  </span>{" "}
                  to understand how we structure your personalized healing
                  journey.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <Link
                to="/book"
                className="flex items-center gap-4 px-10 py-5 bg-white text-navy font-extrabold rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-slate-50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 active:scale-95 transition-all duration-300 group"
              >
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-healing-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-healing-green shadow-sm"></span>
                </span>
                <span className="text-lg">Claim Discovery Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <span className="inline-flex items-center justify-center px-5 py-2 bg-slate-50 border border-slate-200 text-slate-500 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                Knowledge Base
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Care Intelligence &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                  FAQs
                </span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                Understanding the clinical pillars of your healing journey.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:bg-white cursor-pointer overflow-hidden open:shadow-[0_20px_50px_rgba(0,0,0,0.05)] open:bg-white"
                >
                  <summary className="flex items-center justify-between font-bold text-navy text-xl list-none focus:outline-none">
                    <span className="pr-8">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: 0 }}
                      className="text-healing-green transition-transform duration-300 group-open:rotate-180 flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-healing-green group-hover:text-white"
                    >
                      <ArrowRight size={20} className="rotate-90" />
                    </motion.span>
                  </summary>
                  <div className="mt-6 text-slate-600 text-lg leading-relaxed border-t border-slate-100 pt-8 opacity-0 group-open:opacity-100 transition-opacity duration-500 delay-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-50/50 via-slate-50 to-slate-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-gradient-to-br from-navy to-[#1a4066] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_80px_rgba(30,74,119,0.3)] max-w-6xl mx-auto">
            <div className="absolute top-0 right-0 p-12 opacity-10 filter blur-sm transform translate-x-1/4 -translate-y-1/4">
              <Activity size={250} />
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-healing-green/20 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight relative z-10"
            >
              Ready to begin your <br className="hidden md:block" />
              unique path?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed text-blue-50/80 relative z-10"
            >
              Take the critical first step towards evidence-based healing. Join
              2000+ satisfied clients who have transformed their lives through
              our highly integrated model.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6 relative z-10"
            >
              <Link
                to="/book"
                className="bg-white text-navy px-10 py-5 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Pre-book Assessment{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="https://wa.me/971528837810"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group border border-[#25D366] hover:bg-[#20bd5a]"
              >
                <MessageCircle
                  size={22}
                  className="group-hover:animate-pulse"
                />{" "}
                Instant WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
                Mental Wellness Tips &{" "}
                <span className="text-healing-green">Updates</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Join our community for regular clinical insights on harmonizing
                mental and physical health.
              </p>
            </div>

            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto p-2 bg-slate-50 rounded-[2rem] border border-slate-200 shadow-sm focus-within:shadow-md focus-within:border-healing-green/50 transition-all duration-300">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 px-6 py-4 rounded-full bg-transparent border-none focus:outline-none focus:ring-0 text-navy placeholder:text-slate-400 font-medium"
              />
              <div className="w-px h-8 bg-slate-200 self-center hidden md:block"></div>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 py-4 rounded-full bg-transparent border-none focus:outline-none focus:ring-0 text-navy placeholder:text-slate-400 font-medium"
              />
              <button
                type="button"
                className="bg-navy text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-healing-green hover:shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
