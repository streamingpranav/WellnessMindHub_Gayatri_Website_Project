import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  HeartHandshake,
  Users,
  CheckCircle2,
  School,
  Laptop,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const therapyServices = [
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    icon: <Brain size={24} />,
    details:
      "A goal-oriented, structured psychotherapy that focuses on the relationship between thoughts, feelings, and behaviors. By identifying and challenging irrational or negative thought patterns, CBT empowers individuals to develop healthier coping mechanisms and behavioral responses. It is one of the most extensively researched and validated forms of therapy globally.",
    benefits: [
      "Identifies irrational beliefs",
      "Develops functional coping strategies",
      "Improves self-monitoring skills",
      "Reduces symptoms of anxiety and depression",
    ],
  },
  {
    title: "Behavior Therapy",
    icon: <HeartHandshake size={24} />,
    details:
      "This approach is rooted in the principles of learning and conditioning. It focuses on identifying specifically defined maladaptive behaviors and replacing them with positive, functional alternatives through techniques like reinforcement, modeling, and systematic desensitization. It is particularly effective for pediatric populations and developmental management.",
    benefits: [
      "Enhances self-regulation",
      "Reinforces positive behavioral habits",
      "Utilizes child-friendly token economies",
      "Provides clear, measurable progress tracking",
    ],
  },
  {
    title: "Emotional Regulation & Social Skills",
    icon: <Users size={24} />,
    details:
      "Specialized training programs designed to help children and adolescents understand, manage, and express their emotions effectively. These interventions also focus on developing critical social competencies, such as empathy, perspective-taking, conflict resolution, and non-verbal communication, which are essential for successful peer interactions.",
    benefits: [
      "Improves interpersonal conflict resolution",
      "Enhances group participation skills",
      "Promotes healthy emotional expression",
      "Builds fundamental social confidence",
    ],
  },
  {
    title: "Family & Parent Counseling",
    icon: <Users size={24} />,
    details:
      "Collaborative support systems that empower parents and provide families with the tools needed to navigate challenges together. We focus on enhancing family dynamics, establishing healthy boundaries, and improving communication patterns. Parent training is often a core component, providing caregivers with evidence-based strategies for managing child behavior and emotional needs.",
    benefits: [
      "Strengthens parent-child attachments",
      "Provides practical behavior management tools",
      "Reduces family-wide stress and conflict",
      "Creates a unified support environment",
    ],
  },
  {
    title: "Early Intervention Programs",
    icon: <CheckCircle2 size={24} />,
    details:
      "Highly specialized, multidisciplinary support for infants and toddlers experiencing developmental delays or identified disabilities. These programs focus on critical developmental windows to optimize growth in areas like communication, cognition, social-emotional development, and motor skills. Early intervention is scientifically proven to reduce the need for more intensive support later in life.",
    benefits: [
      "Language and communication support",
      "Cognitive and play-skill advancement",
      "Social foundation building from an early age",
      "Empowers parents as co-therapists",
    ],
  },
  {
    title: "School Readiness Program",
    icon: <School size={24} />,
    details:
      "A focused transition program designed to equip young children with the foundational skills necessary for success in a structured school setting. We target listening skills, following directions, group participation, basic self-care, and foundational cognitive tasks to ensure a smooth and confident start to their academic journey.",
    benefits: [
      "Enhances sustained attention and focus",
      "Develops group navigation and sharing skills",
      "Builds foundational pre-academic skills",
      "Reduces school-entry anxiety for child and parent",
    ],
  },
  {
    title: "Dialectical Behavior Therapy (DBT)",
    icon: <Brain size={24} />,
    details:
      "A specialized cognitive-behavioral approach that emphasizes the balance between acceptance and change. DBT is particularly effective for individuals struggling with intense emotional dysregulation, self-harming behaviors, and interpersonal challenges. It integrates mindfulness practices with practical skills for distress tolerance and emotional stability.",
    benefits: [
      "Improves emotional regulation",
      "Enhances distress tolerance",
      "Develops interpersonal effectiveness",
      "Promotes mindfulness and presence",
    ],
  },
  {
    title: "Tele-psychology / Online Consultations",
    icon: <Laptop size={24} />,
    details:
      "Secure, encrypted, and HIPAA-compliant online therapy sessions that provide the same high-quality care as in-person visits. This allows for continuity of care regardless of location, reduces travel stress, and provides a comfortable environment for those who feel more at ease in their own space. Ideal for busy professionals, elderly clients, or those outside Dubai.",
    benefits: [
      "Flexible and convenient scheduling",
      "Access care from the comfort of home",
      "Maintains strict confidentiality and security",
      "Ensures continuity through travel or illness",
    ],
  },
];

export default function PsychologyTherapy() {
  const [selectedService, setSelectedService] = useState<
    (typeof therapyServices)[0] | null
  >(null);

  return (
    <div className="pt-32 pb-24 relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-green-50 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white border border-green-100 text-healing-green text-xs font-extrabold tracking-widest uppercase shadow-sm">
            Clinical Intervention
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-tight tracking-tight">
            Psychological <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
              Therapy
            </span>{" "}
            Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Using internationally recognized, evidence-based models to support
            individuals through structured therapeutic interventions and
            collaborative care.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 max-w-7xl mx-auto">
          {therapyServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-healing-green/10 rounded-bl-[100px] -z-10 transition-transform duration-700 group-hover:scale-125 group-hover:bg-healing-green/20"></div>

              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="w-20 h-20 bg-green-50 text-healing-green rounded-[2rem] flex items-center justify-center shrink-0 group-hover:bg-healing-green group-hover:text-white transition-colors duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 leading-tight group-hover:text-healing-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[16px] leading-relaxed line-clamp-3">
                    {item.details}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-slate-100 pt-8 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(item)}
                  className="flex items-center gap-3 text-healing-green font-extrabold uppercase tracking-wider text-sm group-hover:text-navy transition-colors bg-slate-50 w-max px-6 py-3 rounded-full hover:bg-green-50"
                >
                  View Details & Benefits{" "}
                  <ArrowRight
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mt-32 relative z-10">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-navy via-[#1e4a77] to-navy rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_30px_60px_rgba(30,74,119,0.3)]">
          <div className="absolute inset-0 bg-healing-green/10 blur-3xl rounded-full scale-150 transform translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center gap-4 tracking-tight">
              Let's begin the healing process.
            </h2>
            <p className="text-blue-50 text-xl leading-relaxed opacity-90">
              Ready to take the first step? Schedule a confidential consultation
              with our licensed clinical psychologists today and build a roadmap
              tailored to you.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              to="/book"
              className="bg-white text-navy px-12 py-6 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Request Appointment{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] overflow-y-auto py-10 md:py-20 px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-md"
            />

            <div className="min-h-full flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto my-auto border border-slate-100"
              >
                <div className="md:w-[45%] bg-slate-50 p-12 lg:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 rounded-full blur-[60px]"></div>
                  <div className="p-8 bg-white text-healing-green rounded-[2rem] mb-8 shadow-sm border border-slate-100 relative z-10">
                    {React.cloneElement(
                      selectedService.icon as any,
                      { size: 48 },
                    )}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight relative z-10">
                    {selectedService.title}
                  </h3>
                </div>

                <div className="md:w-[55%] p-10 md:p-14 relative bg-white flex flex-col justify-center">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-slate-50 text-slate-400 hover:text-navy hover:bg-slate-100 rounded-full flex items-center justify-center transition-all transform hover:rotate-90 hover:scale-105"
                  >
                    <X size={24} />
                  </button>

                  <div className="space-y-8 mt-4 md:mt-0">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-healing-green mb-4 flex items-center gap-2">
                        <Sparkles size={16} /> Approach Overview
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {selectedService.details}
                      </p>
                    </div>

                    <div className="bg-green-50/50 p-6 rounded-[2rem] border border-green-50">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-navy mb-4">
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedService.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2
                              size={20}
                              className="text-healing-green shrink-0 mt-0.5"
                            />
                            <span className="text-navy font-semibold text-sm leading-snug">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        to={`/book?service=${encodeURIComponent(selectedService.title)}`}
                        onClick={() => setSelectedService(null)}
                        className="w-full py-5 bg-navy text-white rounded-full font-extrabold text-lg hover:shadow-[0_15px_30px_rgba(30,74,119,0.3)] hover:bg-[#1a4066] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                      >
                        Book this Therapy{" "}
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
