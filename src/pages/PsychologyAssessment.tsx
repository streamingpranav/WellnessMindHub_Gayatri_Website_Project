import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Baby,
  School,
  ShieldAlert,
  FileText,
  ListChecks,
  Sparkles,
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const assessmentServices = [
  {
    title: "Developmental Evaluations (ASD & ADHD)",
    icon: <Baby size={24} />,
    description:
      "Gold-standard diagnostic assessments including the ADOS-2 and ADI-R for Autism Spectrum Disorder, alongside comprehensive ADHD screenings using Conners-4 and clinical observations.",
    details:
      "Our team specializes in identifying neurodivergence early, providing a foundation for life-changing intervention.",
    fullDescription:
      "Early diagnosis is the most critical step in supporting a child's development. We use the most advanced, internationally recognized tools to provide a comprehensive profile of a child's social communication, behavioral patterns, and developmental milestones. Our reports are recognized by schools and medical insurance providers globally.",
  },
  {
    title: "Cognitive & Intelligence Testing (IQ)",
    icon: <Brain size={24} />,
    description:
      "Detailed cognitive profiling using the WISC-V (for children) and WAIS-IV (for adults) to measure intellectual potential and cognitive processing strengths.",
    details:
      "Essential for understanding learning styles and academic potential.",
    fullDescription:
      "IQ testing goes beyond a simple score. We analyze verbal comprehension, visual-spatial reasoning, fluid reasoning, working memory, and processing speed. This data helps tailor educational strategies and identifies giftedness or specific cognitive challenges.",
  },
  {
    title: "Psycho-Educational Assessments",
    icon: <School size={24} />,
    description:
      "Comprehensive evaluations to identify Specific Learning Disorders (Dyslexia, Dysgraphia, Dyscalculia) and academic achievement gaps.",
    details:
      "We provide formal reports suitable for school accommodations and KHDA/social support applications in Dubai.",
    fullDescription:
      "We bridge the gap between clinical findings and academic success. Our evaluations determine why a child might be struggling in school and provide specific accommodations (like extra time or scribe support) that are strictly aligned with UAE Ministry of Education and international standards.",
  },
  {
    title: "Behavioral & Emotional Profiling",
    icon: <ShieldAlert size={24} />,
    description:
      "Assessment of social-emotional functioning, mood disorders, and behavioral challenges through standardized scales and clinical interviews.",
    details:
      "Helping families understand the root cause of emotional outbursts or social withdrawal.",
    fullDescription:
      "Emotional well-being is fundamental to overall health. We screen for anxiety, depression, social-connectivity issues, and behavioral dysregulation to create a supportive treatment plan for the individual and their support system.",
  },
  {
    title: "Neuropsychological Screenings",
    icon: <FileText size={24} />,
    description:
      "Evaluating executive functions, memory, attention, and visuo-spatial skills to understand the brain-behavior relationship.",
    details:
      "Crucial for identifying specific cognitive deficits that may interfere with daily functioning.",
    fullDescription:
      "This specialized screening looks at how specific brain functions impact daily behavior. It is vital for understanding executive dysfunction, memory lapses, and the cognitive impact of neurological conditions.",
  },
  {
    title: "Diagnostic Formulation",
    icon: <ListChecks size={24} />,
    description:
      "Synthesizing all data points into a clear diagnostic clinical formulation with a highly individualized treatment roadmap.",
    details:
      "Every report includes actionable recommendations for home, school, and therapy.",
    fullDescription:
      "We don't just provide labels; we provide roadmaps. Our formulation integrates all assessment results into a cohesive narrative that guides every future therapy session and school intervention plan.",
  },
];

export default function PsychologyAssessment() {
  const [selectedAssessment, setSelectedAssessment] = useState<
    (typeof assessmentServices)[0] | null
  >(null);

  return (
    <div className="pt-32 pb-24 relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase shadow-sm">
            Clinical Diagnostics
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-tight tracking-tight">
            Psychological <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Assessment
            </span>{" "}
            Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive evaluations forming the foundation of our care,
            helping us understand each client's unique cognitive and emotional
            profile through internationally recognized diagnostic protocols.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
          {assessmentServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-bl-[100px] -z-10 transition-transform duration-700 group-hover:scale-125 group-hover:bg-blue-50/80"></div>
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-navy mb-5 leading-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-[17px] leading-relaxed mb-10 flex-grow">
                {item.description}
              </p>

              <button
                onClick={() => setSelectedAssessment(item)}
                className="mt-auto flex items-center gap-3 text-blue-600 font-extrabold uppercase tracking-wider text-sm group-hover:text-navy transition-colors bg-slate-50 w-max px-6 py-3 rounded-full group-hover:bg-blue-50"
              >
                Learn More{" "}
                <ArrowRight
                  size={18}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mt-32 relative z-10">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-navy via-[#1e4a77] to-navy rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_30px_60px_rgba(30,74,119,0.3)]">
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-150 transform -translate-x-1/3"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-healing-green/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Need clarity on the right assessment?
            </h2>
            <p className="text-blue-100 text-xl leading-relaxed opacity-90">
              Our clinical team is ready to guide you through the initial
              consultation to determine the exact diagnostic path suitable for
              you or your child.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              to="/book"
              className="bg-white text-navy px-12 py-6 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Start Consultation{" "}
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
        {selectedAssessment && (
          <div className="fixed inset-0 z-[100] overflow-y-auto py-10 md:py-20 px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAssessment(null)}
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
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[60px]"></div>
                  <div className="p-8 bg-white text-blue-600 rounded-[2rem] mb-8 shadow-sm border border-slate-100 relative z-10">
                    {React.cloneElement(
                      selectedAssessment.icon as any,
                      { size: 48 },
                    )}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight relative z-10">
                    {selectedAssessment.title}
                  </h3>
                </div>

                <div className="md:w-[55%] p-10 md:p-14 relative bg-white flex flex-col justify-center">
                  <button
                    onClick={() => setSelectedAssessment(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-slate-50 text-slate-400 hover:text-navy hover:bg-slate-100 rounded-full flex items-center justify-center transition-all transform hover:rotate-90 hover:scale-105"
                  >
                    <X size={24} />
                  </button>

                  <div className="space-y-8 mt-4 md:mt-0">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                        <Sparkles size={16} /> Clinical Evaluation Depth
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {selectedAssessment.fullDescription}
                      </p>
                    </div>

                    <div className="p-6 bg-blue-50/50 rounded-[2rem] border border-blue-50">
                      <p className="text-[15px] font-medium text-navy leading-relaxed italic border-l-4 border-blue-500 pl-4">
                        "{selectedAssessment.details}"
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        to={`/book?service=${encodeURIComponent(selectedAssessment.title)}`}
                        onClick={() => setSelectedAssessment(null)}
                        className="w-full py-5 bg-blue-600 text-white rounded-full font-extrabold text-lg hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                      >
                        Book Assessment{" "}
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
