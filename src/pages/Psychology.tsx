import { motion } from "motion/react";
import {
  Brain,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const psychologyTestimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    quote:
      "The psycho-educational assessment process was incredibly thorough. For the first time, we truly understand how our son learns. The team provided a roadmap that changed his school experience.",
    rating: 5,
  },
  {
    name: "Omar A.",
    role: "Executive Professional",
    quote:
      "CBT sessions helped me manage severe anxiety and burnout. The approach was structured, highly professional, and exactly what I needed to regain control of my personal and professional life.",
    rating: 5,
  },
  {
    name: "Fatima D.",
    role: "University Student",
    quote:
      "The tele-psychology option allowed me to continue my therapy seamlessly while studying abroad. The support has been transformative for my emotional regulation and confidence.",
    rating: 5,
  },
];

export default function Psychology() {
  return (
    <div className="pt-32 pb-24 relative bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-50 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <ShieldCheck size={16} className="text-healing-green" />{" "}
              Department of Psychology
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-[1.1] tracking-tight">
              Science-Backed <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                Mental Health
              </span>{" "}
              Care.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg font-medium">
              Confidential, client-centered care for emotional, behavioral, and
              developmental concerns delivered by licensed and experienced
              clinical psychologists.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to="/book"
                className="px-10 py-5 bg-navy text-white font-extrabold rounded-full shadow-[0_10px_30px_rgba(30,74,119,0.3)] hover:shadow-[0_20px_40px_rgba(30,74,119,0.4)] hover:-translate-y-1 hover:bg-[#1e4a77] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-max group"
              >
                Book Consultation{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 relative w-full aspect-square max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-healing-green to-teal-400 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(circle_at_center,theme(colors.blue.100)_0%,transparent_70%)] opacity-50 -z-20"></div>
            <img
              src="/psychology.png"
              alt="A calming therapeutic environment"
              className="w-full h-full object-cover rounded-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative z-10 border-[12px] border-white"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white p-6 md:p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(30,74,119,0.15)] z-20 border border-slate-50 flex items-center gap-5"
            >
              <div className="w-16 h-16 bg-blue-50/50 rounded-[2rem] flex items-center justify-center text-blue-600 border border-blue-100">
                <Brain size={32} />
              </div>
              <div>
                <h4 className="font-extrabold text-navy text-xl leading-tight">
                  Evidence Based
                </h4>
                <p className="text-slate-500 text-sm font-bold mt-1">
                  International Protocols
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pathways / Portals Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight"
          >
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
              Offerings
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium"
          >
            We separate our specialized services into two distinct pathways to
            ensure you receive targeted, expert care for your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Assessment Pathway */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl group-hover:bg-blue-100/60 transition-colors duration-700"></div>

            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-sm transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <span className="text-3xl group-hover:invert transition-all duration-500">
                📋
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-5 tracking-tight group-hover:text-blue-600 transition-colors">
              Clinical Diagnostics & Assessment
            </h3>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-10 flex-grow">
              Comprehensive psychological, cognitive, and developmental
              evaluations. We use gold-standard tools like ADOS-2, WISC-V, and
              Conners-4 to provide clarity and foundational roadmaps.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "ASD & ADHD Screenings",
                "IQ & Cognitive Profiling",
                "Psycho-Educational Reports",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl group-hover:bg-white border border-transparent group-hover:border-slate-100 transition-all duration-300"
                >
                  <CheckCircle2 size={22} className="text-blue-500 shrink-0" />{" "}
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/psychology/assessment"
              className="mt-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-50 text-blue-700 font-extrabold rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 w-full md:w-max"
            >
              Explore Assessments{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Therapy Pathway */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-healing-green/5 rounded-full blur-3xl group-hover:bg-healing-green/10 transition-colors duration-700"></div>

            <div className="w-20 h-20 bg-green-50 text-healing-green rounded-[2rem] flex items-center justify-center mb-8 shadow-sm transform group-hover:scale-110 group-hover:bg-healing-green group-hover:text-white transition-all duration-500">
              <HeartHandshake size={36} />
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-5 tracking-tight group-hover:text-healing-green transition-colors">
              Therapy & Intervention
            </h3>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-10 flex-grow">
              Structured therapeutic interventions based on CBT, DBT, and
              Behavioral models. Tailored care to support emotional regulation,
              resilience, and personal growth.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Cognitive Behavioral Therapy (CBT)",
                "Child & Adolescent Support",
                "Family Counseling & Early Intervention",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl group-hover:bg-white border border-transparent group-hover:border-slate-100 transition-all duration-300"
                >
                  <CheckCircle2
                    size={22}
                    className="text-healing-green shrink-0"
                  />{" "}
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/psychology/therapy"
              className="mt-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-green-50 text-healing-green font-extrabold rounded-full group-hover:bg-healing-green group-hover:text-white transition-colors duration-300 w-full md:w-max"
            >
              Explore Therapies{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="py-32 relative overflow-hidden bg-white mt-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-50 to-transparent opacity-60 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50 to-transparent opacity-60 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold text-navy leading-tight tracking-tight">
                Understand Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                  Clinical Vision
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                Watch a short overview of how we deliver evidence-based care and
                the multidisciplinary journey we undertake with every family.
              </p>
              <div className="flex flex-col gap-6 pt-4">
                {[
                  "Why Choose Integrated Care?",
                  "Meet Our Clinical Team",
                  "A Walkthrough of Our Process",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 text-navy font-extrabold text-lg"
                  >
                    <div className="w-12 h-12 rounded-[1rem] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <CheckCircle2 size={24} />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[4rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-[12px] border-slate-50 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=2070"
                alt="Psychology Service Introduction"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-500 flex items-center justify-center">
                <div className="w-24 h-24 bg-white shadow-2xl backdrop-blur-md rounded-[2rem] flex items-center justify-center transform group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                  <Play
                    className="text-blue-600 fill-blue-600 ml-1"
                    size={40}
                  />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-navy font-extrabold text-center text-lg">
                  Play Introductory Overview (2:45)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Psychology Testimonials Section */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-healing-green/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Patient{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-400">
                Testimonials
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-100/90 text-xl md:text-2xl max-w-2xl mx-auto"
            >
              Hear from those who have utilized our psychology and assessment
              services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
            {psychologyTestimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10 lg:p-12 rounded-[3.5rem] relative space-y-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="absolute top-10 right-10 text-8xl text-healing-green/10 font-serif leading-none group-hover:text-healing-green/20 transition-colors">
                  "
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-healing-green text-healing-green group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-blue-50 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-navy shrink-0 border-2 border-white/20 flex items-center justify-center text-white font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-extrabold text-white text-lg">
                      {item.name}
                    </p>
                    <p className="text-sm text-healing-green font-bold uppercase tracking-widest mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
