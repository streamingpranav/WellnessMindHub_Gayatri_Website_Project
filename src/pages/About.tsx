import { motion } from "motion/react";
import {
  Award,
  GraduationCap,
  Star,
  ShieldCheck,
  Newspaper,
  Brain,
  Target,
  Eye,
  Heart,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const infoItems = [
  { icon: <ShieldCheck size={20} />, label: "DHA License", value: "65064831" },
  { icon: <Award size={20} />, label: "RCI License", value: "A34019" },
  {
    icon: <GraduationCap size={20} />,
    label: "Education",
    value: "M.Phil. Rehabilitation Psychology",
  },
  { icon: <Star size={20} />, label: "Experience", value: "13+ Years" },
];

const achievements = [
  { count: "2000+", label: "Clinical Consultations" },
  { count: "1500+", label: "Developmental Screenings" },
  { count: "500+", label: "Psychological Assessments" },
  { count: "48+", label: "Clinical Hours / Week" },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 relative bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Introduction / Founder Area */}
      <section className="container mx-auto px-4 md:px-6 mb-24 relative z-10">
        <div className="bg-white rounded-[3.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden relative p-8 md:p-14 lg:p-20">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-slate-50 to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
            {/* Left Col: Image & Stats (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-5 space-y-10 lg:sticky lg:top-32"
            >
              <div className="relative group mx-auto max-w-[400px] lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-healing-green/20 to-teal-400/20 rounded-[3rem] rotate-3 transition-transform duration-700 group-hover:rotate-6 -z-10 blur-xl opacity-50"></div>
                <div className="absolute inset-0 bg-navy/5 rounded-[2.5rem] rotate-3 transition-transform duration-500 group-hover:rotate-6 -z-10 border border-slate-200"></div>
                <div className="absolute inset-0 bg-healing-green/10 rounded-[2.5rem] -rotate-3 transition-transform duration-500 group-hover:-rotate-6 -z-10"></div>
                <img
                  src="/gayatri.png"
                  alt="Gayatri Gajjam"
                  className="w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl filter sepia-[0.05] contrast-[1.05]"
                />

                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4 hidden sm:flex">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Star size={24} className="fill-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-md leading-tight">
                      13+ Years
                    </h4>
                    <p className="text-slate-500 text-xs">
                      Clinical Excellence
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {infoItems.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-healing-green mb-4 flex justify-center w-12 h-12 bg-green-50 rounded-2xl items-center mx-auto shadow-sm">
                      {item.icon}
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">
                      {item.label}
                    </p>
                    <p className="text-navy font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Col: Text & Details (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex flex-wrap items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-sm shadow-sm border border-blue-100"
                >
                  <Sparkles size={16} /> Clinical Director & Founder
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-tight tracking-tight"
                >
                  Gayatri{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                    Gajjam
                  </span>
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-medium text-slate-500"
                >
                  Licensed Clinical Psychologist
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-navy via-[#1e4a77] to-navy p-8 md:p-12 rounded-[3.5rem] border border-white/10 shadow-[0_20px_50px_rgba(30,74,119,0.2)] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-healing-green/10 blur-[80px] rounded-full scale-150 transform translate-x-1/2 group-hover:bg-healing-green/20 transition-colors duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px]"></div>
                <p className="text-xl md:text-2xl text-blue-50/90 leading-relaxed italic font-medium relative z-10 text-balance">
                  "Dedicated to providing high-quality psychological
                  assessments, therapy, and holistic interventions that support
                  meaningful and lasting growth."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6 text-slate-600 leading-relaxed text-lg pb-4"
              >
                <p>
                  I am a Licensed Clinical Psychologist (DHA & RCI Certified)
                  with over{" "}
                  <strong className="text-navy font-bold">
                    13 years of extensive clinical experience
                  </strong>{" "}
                  in mental health sciences, primarily across India and the UAE.
                  My expertise lies in psychological assessment, diagnosis, and
                  evidence-based therapeutic interventions.
                </p>
                <p>
                  Throughout my career, I have focused on pediatric populations,
                  working with conditions like ADHD, ASD, anxiety, depression,
                  and learning difficulties. I have served in prestigious
                  institutions such as Aster DYU Child Development Centre and
                  Eclipse Specialty Clinic in Dubai.
                </p>
                <p>
                  Beyond clinical practice, I am a published author on various
                  mental health topics in leading UAE publications including{" "}
                  <span className="font-bold text-navy border-b-2 border-healing-green/30 px-1 pb-0.5">
                    Khaleej Times, Gulf News, and The National.
                  </span>
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-navy mb-3">
                      {item.count}
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy & Credentials */}
      <section className="py-12 md:py-20 relative z-10 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto items-start">
            {/* Education & Credentials */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 bg-blue-50/50 p-8 md:p-12 rounded-[3.5rem] border border-blue-100/50 h-full"
            >
              <h3 className="text-3xl font-extrabold text-navy flex items-center gap-4 tracking-tight">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-blue-600">
                  <GraduationCap size={28} />
                </div>
                Education & Credentials
              </h3>
              <ul className="space-y-6 lg:space-y-8 pt-4">
                <li className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0 border border-slate-100">
                    <Award className="text-healing-green" size={24} />
                  </div>
                  <div className="pt-1 flex-1">
                    <p className="font-extrabold text-navy text-xl leading-tight">
                      M.Phil. in Rehabilitation Psychology
                    </p>
                    <p className="text-slate-500 mt-2 text-md font-medium">
                      NIEPID – Osmania University, Hyderabad
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0 border border-slate-100">
                    <Award className="text-healing-green" size={24} />
                  </div>
                  <div className="pt-1 flex-1">
                    <p className="font-extrabold text-navy text-xl leading-tight">
                      M.A. in Clinical Psychology
                    </p>
                    <p className="text-slate-500 mt-2 text-md font-medium">
                      Solapur University, Maharashtra
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0 border border-slate-100">
                    <Award className="text-healing-green" size={24} />
                  </div>
                  <div className="pt-1 flex-1">
                    <p className="font-extrabold text-navy text-xl leading-tight">
                      Reiki Master
                    </p>
                    <p className="text-slate-500 mt-2 text-md font-medium">
                      Certified Practitioner since 2010
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* My Clinical Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-4xl font-extrabold text-navy flex items-center gap-4 tracking-tight">
                  <div className="p-4 bg-green-50 rounded-[1.5rem] text-healing-green shadow-sm border border-green-100/50">
                    <Brain size={32} />
                  </div>
                  My Clinical Approach
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  My therapeutic philosophy is grounded in{" "}
                  <strong className="text-navy font-extrabold border-b-2 border-healing-green/40 pb-0.5">
                    evidence-based excellence
                  </strong>
                  . I believe that therapy should be as unique as the
                  individual, which is why I integrate multiple modalities to
                  suit each client's specific cognitive and emotional profile.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Cognitive Behavioral (CBT)",
                    desc: "Restructuring negative thought patterns.",
                  },
                  {
                    title: "Dialectical Behavior (DBT)",
                    desc: "Focusing on mindfulness and emotional regulation.",
                  },
                  {
                    title: "Rational Emotive (REBT)",
                    desc: "Resolving problems by challenging irrational beliefs.",
                  },
                  {
                    title: "Holistic Integration",
                    desc: "Merging psychology with physical health awareness.",
                  },
                ].map((approach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <h4 className="font-extrabold text-navy text-lg mb-2 group-hover:text-healing-green transition-colors leading-tight">
                      {approach.title}
                    </h4>
                    <p className="text-[14px] text-slate-600 leading-relaxed">
                      {approach.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-[15px] font-medium text-slate-500 leading-relaxed border-l-4 border-healing-green pl-6 py-1 italic bg-green-50/50 rounded-r-2xl">
                  "Whether performing a complex ADHD assessment or conducting a
                  family therapy session, my goal is to empower my clients to
                  take charge of their own healing journey through tools they
                  can use for a lifetime."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 bg-white relative z-10 border-y border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-50 to-transparent opacity-60 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-12 lg:p-14 rounded-[3.5rem] shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100 space-y-8 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white shadow-sm border border-slate-100 rounded-[2rem] flex items-center justify-center text-blue-600 mb-8 transition-transform hover:scale-110 duration-500">
                <Target size={40} />
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight text-navy">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                To empower individuals and families through evidence-based,
                compassionate, and integrated mind-body care, fostering a
                culture of holistic health across the UAE.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-navy via-[#1e4a77] to-navy p-12 lg:p-14 rounded-[3.5rem] shadow-[0_20px_50px_rgba(30,74,119,0.3)] text-white space-y-8 relative overflow-hidden transition-all duration-500 transform lg:scale-[1.05] z-10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-healing-green/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/10 flex items-center justify-center text-healing-green mb-8 relative z-10 transition-transform hover:scale-110 duration-500">
                <Eye size={40} />
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight relative z-10">
                Our Vision
              </h3>
              <p className="text-blue-50/90 leading-relaxed text-[17px] relative z-10">
                To be the leading center for integrated therapeutic excellence
                in the Middle East, where psychological and physical health are
                treated with equal importance and seamless synergy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-12 lg:p-14 rounded-[3.5rem] shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100 space-y-8 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white shadow-sm border border-slate-100 rounded-[2rem] flex items-center justify-center text-healing-green mb-8 transition-transform hover:scale-110 duration-500">
                <Heart size={40} />
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight text-navy">
                Our Values
              </h3>
              <ul className="space-y-5">
                {[
                  "Clinical Excellence",
                  "Compassionate Healing",
                  "Evidence-Based Integrity",
                  "Collaborative Integration",
                ].map((val, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 text-slate-700 font-medium"
                  >
                    <div className="mt-0.5 rounded-full bg-green-50 p-1 shrink-0">
                      <CheckCircle2 size={18} className="text-healing-green" />
                    </div>
                    <span>{val}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Authority */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-sm shadow-sm border border-blue-100"
            >
              <Newspaper size={16} /> Featured Publications
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight"
            >
              Thought Leadership & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                Clinical Authority
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Consistently advocating for mental health awareness and providing
              expert commentary in the UAE's leading media outlets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Khaleej Times", "Gulf News", "The National"].map((news, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 text-center rounded-[3rem] shadow-[0_5px_15px_rgba(0,0,0,0.02)] flex items-center justify-center border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <span className="text-2xl font-bold text-navy/30 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-healing-green group-hover:to-teal-500 uppercase tracking-[0.2em] transition-all duration-300">
                  {news}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Excellence Gallery */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white rounded-[4rem] p-10 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-50 to-transparent opacity-60 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="space-y-10 relative z-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight"
              >
                Dedicated to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                  Clinical Excellence
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 leading-relaxed max-w-lg"
              >
                Our clinic is built on the rigorous foundation of evidence-based
                practice and continuous professional growth. We maintain the
                highest standards of care in Dubai's healthcare ecosystem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                <Link
                  to="/book"
                  className="px-8 py-4 bg-navy text-white font-bold rounded-full shadow-[0_10px_30px_rgba(30,74,119,0.3)] hover:shadow-[0_20px_40px_rgba(30,74,119,0.4)] hover:-translate-y-1 hover:bg-[#1e4a77] active:scale-95 transition-all duration-300 flex items-center justify-center lg:justify-start gap-3 w-full sm:w-max group"
                >
                  Schedule Consultation{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl group border-[6px] border-slate-50 bg-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                    alt="Clinic Interior"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl group border-[6px] border-slate-50 bg-white mt-12"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                    alt="Collaborative Session"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[600px] lg:h-[800px] rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-slate-50 bg-white order-first lg:order-last z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Medical Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="font-bold tracking-widest uppercase text-xs mb-2 opacity-80">
                  World-Class Facilities
                </p>
                <p className="font-extrabold text-2xl leading-tight text-white mb-0 drop-shadow-md">
                  Integrated care space designed for holistic healing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
