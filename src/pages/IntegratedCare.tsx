import { motion } from "motion/react";
import {
  Heart,
  Activity,
  Brain,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IntegratedCare() {
  return (
    <div className="pt-32 pb-24 relative bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 text-red-500 border border-red-100 text-sm font-bold tracking-widest uppercase shadow-sm">
              <Heart size={16} /> Holistic Health Model
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy leading-tight tracking-tight">
              Healing the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                Mind & Body
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              We believe in a mind–body approach, where psychological and
              physical health are treated together to ensure better recovery and
              profound emotional resilience.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/book"
                className="px-8 py-4 bg-navy text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-navy/90 transition-all flex items-center gap-3"
              >
                Book Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative w-full aspect-[4/3] max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-healing-green/30 to-blue-400/30 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000"
              alt="Holistic Mind Body Wellness"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-healing-green">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-md leading-tight">
                  UAE Standard
                </h4>
                <p className="text-slate-500 text-xs">Quality Aligned Care</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32 relative z-10">
        <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="p-8 bg-blue-50/50 rounded-[3rem] shadow-sm border border-blue-50/80 hover:bg-blue-50 hover:shadow-md transition-all">
                    <div className="w-14 h-14 bg-white text-navy rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <Brain size={28} />
                    </div>
                    <h4 className="font-bold text-navy text-xl mb-2">
                      Psychological
                    </h4>
                    <p className="text-slate-500 text-[15px]">
                      Emotional & cognitive wellness therapy.
                    </p>
                  </div>
                  <div className="p-8 bg-white rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all">
                    <div className="w-14 h-14 bg-green-50 text-healing-green rounded-2xl flex items-center justify-center mb-6">
                      <ShieldCheck size={28} />
                    </div>
                    <h4 className="font-bold text-navy text-xl mb-2">
                      UAE Standards
                    </h4>
                    <p className="text-slate-500 text-[15px]">
                      DHA/DOH aligned evidence-based care.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-8 bg-navy text-white rounded-[3rem] shadow-[0_20px_50px_rgba(30,74,119,0.3)] transform transition-transform hover:-translate-y-2">
                    <div className="w-14 h-14 bg-white/10 text-healing-green rounded-2xl flex items-center justify-center mb-6 ring-1 ring-white/20">
                      <Activity size={28} />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Physical
                    </h4>
                    <p className="text-blue-100/70 text-[15px]">
                      Mobility & functional restoration.
                    </p>
                  </div>
                  <div className="p-8 bg-red-50/50 rounded-[3rem] shadow-sm border border-red-50/80 hover:bg-red-50 hover:shadow-md transition-all">
                    <div className="w-14 h-14 bg-white text-red-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <Heart size={28} />
                    </div>
                    <h4 className="font-bold text-navy text-xl mb-2">
                      Continuity
                    </h4>
                    <p className="text-slate-500 text-[15px]">
                      Seamless care across specialties.
                    </p>
                  </div>
                </div>
              </div>
              {/* Intersection Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full flex outline-none items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[8px] border-slate-50/80 backdrop-blur-md z-10 transition-transform hover:scale-105">
                <div className="text-center font-bold text-navy">
                  <Sparkles
                    className="text-healing-green mx-auto mb-2"
                    size={24}
                  />
                  <div className="leading-tight text-xs uppercase tracking-widest mt-1">
                    Harmonized
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                  Why{" "}
                  <span className="text-healing-green">Integrated Care?</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Treating psychological and physical health in isolation often
                  leads to slower recovery. Our model is widely used in top UAE
                  rehabilitation hospitals because it delivers measurable,
                  long-lasting results.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                {[
                  {
                    title: "Better Recovery Outcomes",
                    desc: "Accelerated healing through multisystem support.",
                  },
                  {
                    title: "Improved Emotional Resilience",
                    desc: "Better coping mechanisms during physical recovery.",
                  },
                  {
                    title: "Enhanced Quality of Life",
                    desc: "Holistic improvement across all life domains.",
                  },
                  {
                    title: "Culturally Sensitive Care",
                    desc: "Aligned with UAE standards for diverse populations.",
                  },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow"
                  >
                    <div className="mt-1 bg-green-50 p-2 rounded-xl shrink-0">
                      <CheckCircle2 className="text-healing-green" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-[17px] mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized UAE Quality Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-gradient-to-br from-navy to-[#1a4066] text-white rounded-[4rem] p-12 md:p-20 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-healing-green/20 blur-[100px] rounded-full filter transform translate-x-1/3 -translate-y-1/3"></div>

          <div className="text-center space-y-8 relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 mb-4">
              <ShieldCheck size={40} className="text-healing-green" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Standardized <br className="hidden md:block" />
              UAE Quality
            </h2>
            <p className="text-xl text-blue-50/80 leading-relaxed text-center">
              We follow DHA (Dubai Health Authority) aligned clinical standards,
              ensuring that assessment, diagnosis, and individualized treatment
              planning form the unshakeable foundation of our care.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
              <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-sm shadow-xl">
                <span className="font-bold tracking-[0.2em] text-white/90">
                  DHA CERTIFIED
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-sm shadow-xl">
                <span className="font-bold tracking-[0.2em] text-white/90">
                  RCI CERTIFIED
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-sm shadow-xl">
                <span className="font-bold tracking-[0.2em] text-white/90">
                  EVIDENCE BASED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
