import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Sparkles, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const philosophyCards = [
  {
    title: "Holistic Integration",
    icon: "🧘",
    desc: "Treating the mind and body as one interconnected system for deeper healing.",
    details: "Our holistic integration model departs from fragmented care. We recognize that emotional states impact physical recovery and vice versa. By aligning psychological interventions with physiological treatments, we achieve more resilient and sustainable health outcomes.",
    color: "bg-blue-50"
  },
  {
    title: "Evidence-Based",
    icon: "🔬",
    desc: "Every treatment is rooted in the latest clinical research and proven protocols.",
    details: "We strictly adhere to gold-standard protocols established by global health bodies. From CBT to advanced neuro-rehabilitation, our methodology is continuously updated with the latest clinical findings to ensure safety and effectiveness.",
    color: "bg-healing-green/10"
  },
  {
    title: "Patient-Centered",
    icon: "🤝",
    desc: "Your unique journey and goals drive every clinical decision we make.",
    details: "Care at WellnessMind is not a conveyor belt. We listen, adapt, and co-create your healing path. Whether you are a child, an adult, or a family, our treatment plans are architected to fit your life, not the other way around.",
    color: "bg-purple-50"
  },
  {
    title: "Empowerment",
    icon: "⚡",
    desc: "Equipping you with the tools to take charge of your own lifelong wellbeing.",
    details: "Our ultimate goal is for you to not need us. We provide the strategies, coping mechanisms, and physical exercises necessary for you to maintain and grow your health independently long after your sessions are completed.",
    color: "bg-rose-50"
  }
];

export default function ApproachSection() {
  const [selectedPhilosophy, setSelectedPhilosophy] = useState<typeof philosophyCards[0] | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-soft-grey/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-healing-green/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                <Sparkles size={12} />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                A Holistic Approach to <span className="text-healing-green">Human Potential</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Founded by Gayatri Gajjam, WellnessMind Hub isn't just about clinical consultations—it's about harmonizing your mental resilience with your physical functionality.
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-white/40 frosted-card rounded-[3rem] border-l-8 border-healing-green">
                <h3 className="text-2xl font-bold text-navy mb-4">The Integrated Philosophy</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Gayatri's 13+ years of experience across multi-cultural environments in India and the UAE have shaped a unique perspective: <span className="font-bold text-navy">Mind and Body are one system.</span> Whether it's helping a child with ADHD find focus or a runner recover from injury, she integrates psychological resilience into every treatment plan.
                </p>
                <div className="flex gap-4">
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs uppercase">Mind</div>
                      <div className="w-[2px] h-4 bg-navy/10"></div>
                   </div>
                   <div className="pt-2">
                      <p className="text-sm font-bold text-navy uppercase tracking-widest">Cognitive Resilience</p>
                      <p className="text-xs text-slate-500">CBT, Behavioral Therapy, IQ Testing</p>
                   </div>
                </div>
                <div className="flex gap-4 mt-2">
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-healing-green text-white flex items-center justify-center font-bold text-xs uppercase">Body</div>
                   </div>
                   <div className="pt-2">
                      <p className="text-sm font-bold text-navy uppercase tracking-widest">Physical Empowerment</p>
                      <p className="text-xs text-slate-500">Physiotherapy, Neuro-Rehab, Pain Care</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyCards.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedPhilosophy(p)}
                className={cn("p-8 rounded-[2.5rem] space-y-6 group cursor-pointer shadow-sm border border-navy/5 transition-all text-center", p.color)}
              >
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h4 className="text-xl font-bold text-navy">{p.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                <div className="pt-2">
                   <span className="text-xs font-bold text-healing-green uppercase tracking-widest border-b border-healing-green/30 pb-0.5">
                     Learn More
                   </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy Modal Overlay */}
        <AnimatePresence>
          {selectedPhilosophy && (
            <div className="fixed inset-0 z-[200] overflow-y-auto py-10 md:py-20 px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPhilosophy(null)}
                className="fixed inset-0 bg-navy/60 backdrop-blur-md"
              />
              <div className="min-h-full flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative bg-white rounded-[3.5rem] p-10 md:p-16 max-w-xl shadow-2xl space-y-8 pointer-events-auto my-auto"
                >
                  <button 
                    onClick={() => setSelectedPhilosophy(null)}
                    className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="text-7xl text-center mb-4">{selectedPhilosophy.icon}</div>
                  <h3 className="text-3xl font-bold text-navy text-center">{selectedPhilosophy.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg text-center font-medium italic">"{selectedPhilosophy.desc}"</p>
                  <div className="w-20 h-1.5 bg-healing-green/20 rounded-full mx-auto"></div>
                  <p className="text-slate-600 leading-relaxed text-lg text-center">
                    {selectedPhilosophy.details}
                  </p>
                  <Link 
                    to="/book"
                    onClick={() => setSelectedPhilosophy(null)}
                    className="w-full py-5 bg-navy text-white rounded-full font-bold hover:bg-healing-green transition-colors shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                  >
                    Book My Clinical Assessment
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        <div className="mt-20 border-t border-white/40 pt-20">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h3 className="text-3xl font-bold text-navy">Tailoring Treatment to Your Life</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-healing-green font-bold text-lg">
                   <BookOpen size={24} />
                   <h4>Evidence-Based Practice</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We don't guess—we assess. Using standardized psychological testing and diagnostic formulation (IQ, Personality, ADHD, ASD), we build a data-driven foundation for your therapy.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-healing-green font-bold text-lg">
                   <Brain size={24} />
                   <h4>Bespoke Interventions</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Your therapy plan is crafted around your unique family dynamics, school or work environment, and cultural background. We adapt our clinical expertise to fit your reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
