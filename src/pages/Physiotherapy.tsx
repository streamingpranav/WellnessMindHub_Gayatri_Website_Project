import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  CheckCircle2,
  Zap,
  UserPlus,
  FileText,
  ClipboardList,
  Baby,
  Brain,
  Accessibility,
  Dumbbell,
  Home,
  Stethoscope,
  ArrowRight,
  X,
  HeartPulse,
  Scale,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const treatmentServices = [
  {
    title: "Pediatric Physiotherapy",
    icon: <Baby size={28} />,
    details:
      "Specialized support for infants and children with developmental delays, neurological conditions, or motor skill challenges. Our approach is play-based and focused on maximizing functional independence in early development.",
    benefits: [
      "Motor skill development",
      "Neurological coordination",
      "Play-based intervention",
      "Growth monitoring",
    ],
  },
  {
    title: "Neuro Rehabilitation",
    icon: <Brain size={28} />,
    details:
      "Comprehensive care for stroke recovery, cerebral palsy, and other neurological disorders. We focus on neuroplasticity and functional rebuilding to help patients regain control and mobility.",
    benefits: [
      "Stroke recovery support",
      "Improved coordination",
      "Neuroplasticity focus",
      "Independence training",
    ],
  },
  {
    title: "Musculoskeletal Care",
    icon: <Activity size={28} />,
    details:
      "Expert management of back pain, neck pain, and joint issues. We utilize manual therapy, targeted exercises, and postural corrections to address the root cause of physical discomfort.",
    benefits: [
      "Pain relief",
      "Improved posture",
      "Joint mobility",
      "Preventive care",
    ],
  },
  {
    title: "Post-Surgical Rehabilitation",
    icon: <Stethoscope size={28} />,
    details:
      "Critical support after orthopedic surgeries (ACL, knee/hip replacement). We ensure safe, progressive rehabilitation to restore strength and full range of motion while minimizing scar tissue complications.",
    benefits: [
      "Faster recovery",
      "Strength rebuilding",
      "Range of motion restoration",
      "Safe progression",
    ],
  },
  {
    title: "Pain Management Programs",
    icon: <Zap size={28} />,
    details:
      "Integrating evidence-based physical therapies with educational support to manage chronic pain. We aim to break the pain-cycle through movement, electrotherapy, and mind-body awareness.",
    benefits: [
      "Chronic pain control",
      "Reduced medication reliance",
      "Improved sleep quality",
      "Systemic desensitization",
    ],
  },
  {
    title: "Geriatric Physiotherapy",
    icon: <Accessibility size={28} />,
    details:
      "Focused care for the elderly to maintain mobility, prevent falls, and manage age-related conditions like osteopenia or arthritis. We prioritize quality of life and safety in daily activities.",
    benefits: [
      "Fall prevention",
      "Balance improvement",
      "Pain management",
      "Enhanced independence",
    ],
  },
  {
    title: "Exercise & Strengthening",
    icon: <Dumbbell size={28} />,
    details:
      "Scientifically designed strengthening protocols for injury prevention and performance enhancement. We tailor programs to individual fitness levels and specific rehabilitation goals.",
    benefits: [
      "Muscle strengthening",
      "Injury prevention",
      "Metabolic health",
      "Functional fitness",
    ],
  },
  {
    title: "Home-Based Services",
    icon: <Home size={28} />,
    details:
      "Convenient, professional physiotherapy brought to your doorstep. Ideal for patients with mobility restrictions, post-operative limitations, or busy professionals outside Dubai.",
    benefits: [
      "Comfort of home",
      "Zero travel stress",
      "Personalized attention",
      "Flexible scheduling",
    ],
  },
  {
    title: "Balance & Coordination",
    icon: <Scale size={28} />,
    details:
      "Targeted training for vestibular issues and proprioceptive deficits. Essential for patients experiencing vertigo, dizziness, or recurring balance challenges.",
    benefits: [
      "Stability enhancement",
      "Safe navigation",
      "Vestibular training",
      "Proprioception growth",
    ],
  },
];

const physiotherapyTestimonials = [
  {
    name: "Michael T.",
    role: "Athlete",
    quote:
      "After my ACL surgery, I thought my athletic career was over. The targeted sports rehabilitation and continuous support brought me back stronger than ever.",
    rating: 5,
  },
  {
    name: "Amira Y.",
    role: "Patient",
    quote:
      "Chronic back pain had ruled my life for years. The team's holistic physical therapy approach finally provided me with the relief and core strength I needed.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Patient",
    quote:
      "The personalized focus on my post-stroke recovery journey was incredible. The physiotherapists were patient, knowledgeable, and deeply caring.",
    rating: 5,
  },
];

export default function Physiotherapy() {
  const [selectedService, setSelectedService] = useState<
    (typeof treatmentServices)[0] | null
  >(null);

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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 text-healing-green border border-green-100 text-sm font-bold tracking-widest uppercase shadow-sm">
              <Activity size={16} /> Physical Rehabilitation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy leading-tight tracking-tight">
              Restore Mobility. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                Reclaim Life.
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Comprehensive rehabilitation services aimed at restoring strength,
              function, and independence through a goal-oriented, clinical
              approach.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/book"
                className="px-8 py-4 bg-navy text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-navy/90 transition-all flex items-center gap-3"
              >
                Book Physiotherapy <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative w-full aspect-[4/3] max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-healing-green/30 to-teal-400/30 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
            <img
              src="/Physiotherapy_Care.png"
              alt="Professional Physiotherapy Care"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-healing-green">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-md leading-tight">
                  Expert Care
                </h4>
                <p className="text-slate-500 text-xs">Licensed Practitioners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach & Assessment Overview */}
      <section className="container mx-auto px-4 md:px-6 mb-32 relative z-10">
        <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Our Clinical Approach
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe in a holistic, evidence-based approach to
                physiotherapy. Our specialists take the time to thoroughly
                assess your condition before developing a customized
                rehabilitation plan designed to optimize your recovery and
                enhance your overall quality of life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-white text-navy flex items-center justify-center mb-4 shadow-sm">
                    <FileText size={24} />
                  </div>
                  <h4 className="font-bold text-navy text-lg mb-2">
                    Evidence Based
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Utilizing the latest clinical protocols and scientifically
                    validated techniques.
                  </p>
                </div>
                <div className="bg-healing-green/5 p-6 rounded-3xl border border-healing-green/10">
                  <div className="w-12 h-12 rounded-2xl bg-white text-healing-green flex items-center justify-center mb-4 shadow-sm">
                    <UserPlus size={24} />
                  </div>
                  <h4 className="font-bold text-navy text-lg mb-2">
                    Patient Centric
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Highly tailored treatment programs aligned with your
                    personal recovery goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-[3rem] p-10 relative overflow-hidden text-white shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Activity size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                What We Assess <ArrowRight className="text-healing-green" />
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  {
                    icon: <ClipboardList size={22} />,
                    text: "Functional and physical assessment",
                  },
                  {
                    icon: <Scale size={22} />,
                    text: "Posture and biomechanical analysis",
                  },
                  { icon: <Zap size={22} />, text: "Neurological assessment" },
                  {
                    icon: <HeartPulse size={22} />,
                    text: "Pain and mobility evaluation",
                  },
                  {
                    icon: <Baby size={22} />,
                    text: "Pediatric developmental screening",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <div className="text-healing-green shrink-0 bg-white/10 p-2 rounded-xl text-center">
                      {item.icon}
                    </div>
                    <span className="font-medium text-blue-50 text-base">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
              Treatment &{" "}
              <span className="text-healing-green">
                Rehabilitation Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Personalized rehabilitation plans designed to help you recover
              smartly and sustainably from injuries, illness, and developmental
              conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentServices.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedService(item)}
                className="group cursor-pointer bg-slate-50 p-8 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center text-healing-green mb-8 shadow-sm group-hover:scale-110 group-hover:bg-healing-green group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow line-clamp-3">
                  {item.details}
                </p>
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between group-hover:border-slate-100 transition-colors">
                  <span className="text-healing-green font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    Learn More
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-healing-green/10 flex items-center justify-center transition-colors">
                    <ArrowRight
                      size={16}
                      className="text-navy group-hover:text-healing-green group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#1e4a77] to-navy rounded-[3.5rem] p-10 md:p-20 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-healing-green/20 blur-[100px] rounded-full scale-150 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  Conditions <br />
                  <span className="text-healing-green">We Treat</span>
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  We treat a wide spectrum of physical conditions using
                  multi-modal approaches, ensuring a faster, safer, and more
                  sustainable recovery.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
                  {[
                    "Developmental delays",
                    "Pediatric conditions",
                    "Stroke recovery",
                    "Neurological disorders",
                    "Musculoskeletal pain",
                    "Sports injuries",
                    "Post-operative recovery",
                    "Fibromyalgia & Chronic pain",
                    "Mobility & balance issues",
                    "Age-related joint stiffness",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-healing-green/20 flex items-center justify-center shrink-0">
                        <CheckCircle2
                          size={12}
                          className="text-healing-green"
                        />
                      </div>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link
                    to="/book"
                    className="px-8 py-4 bg-healing-green text-white font-bold rounded-full shadow-lg hover:bg-white hover:text-navy hover:-translate-y-1 transition-all inline-flex items-center gap-3"
                  >
                    Schedule Consultation <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2069"
                  alt="Modern Physiotherapy Rehabilitation Facility"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg leading-snug">
                    State-of-the-art facilities equipped for active
                    rehabilitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-sm shadow-sm">
              <Star size={16} className="fill-blue-600" /> Patient Success
              Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
              Recovery <span className="text-healing-green">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {physiotherapyTestimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 shadow-sm p-10 rounded-[3rem] relative flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-6 -right-2 text-[120px] text-slate-200/50 font-serif leading-none select-none z-0">
                  "
                </div>
                <div className="relative z-10 font-medium">
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed italic mb-8">
                    "{item.quote}"
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-navy">{item.name}</h5>
                    <p className="text-xs text-healing-green font-bold uppercase tracking-widest mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
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
                className="relative w-full max-w-3xl bg-white rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col md:flex-row pointer-events-auto my-auto border-t-[10px] border-healing-green"
              >
                <div className="md:w-2/5 bg-slate-50 p-12 flex flex-col items-center justify-center text-center">
                  <div className="p-8 bg-white text-healing-green rounded-3xl mb-8 shadow-sm border border-slate-100">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-3xl font-extrabold text-navy leading-tight tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>

                <div className="md:w-3/5 p-10 md:p-14 relative">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-8 right-8 text-slate-400 hover:text-navy transition-all transform hover:rotate-90 bg-slate-100 p-2 rounded-full hover:bg-slate-200"
                  >
                    <X size={24} />
                  </button>

                  <div className="space-y-8 mt-4 md:mt-0">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-healing-green mb-4 flex items-center gap-2">
                        <Sparkles size={14} /> Rehabilitation Approach
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-[17px]">
                        {selectedService.details}
                      </p>
                    </div>

                    <div className="bg-green-50/50 p-6 rounded-3xl border border-green-50">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-navy mb-4">
                        Clinical Focus Areas
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedService.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="text-healing-green shrink-0 mt-0.5"
                            />
                            <span className="text-navy font-medium text-sm leading-snug">
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
                        className="w-full py-5 bg-navy text-white rounded-full font-bold text-lg hover:shadow-xl hover:bg-healing-green hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                      >
                        Book this Service{" "}
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
