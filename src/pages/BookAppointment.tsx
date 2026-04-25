import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [sessionMode, setSessionMode] = useState("In-Person");
  const [preFilledMessage, setPreFilledMessage] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setSelectedService(serviceParam);
      setPreFilledMessage(`You've selected: ${serviceParam}`);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-slate-50 min-h-screen">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/60 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-100/60 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12 lg:pr-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase shadow-sm">
                Reserve A Session
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-navy leading-[1.1] tracking-tight">
                Book Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-green to-teal-500">
                  Journey
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Take the first step towards transformation. Choose your
                preferred service and schedule an appointment with our clinical
                experts.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <CalendarIcon className="text-blue-600" size={24} />,
                  title: "Easy Online Booking",
                  desc: "Secure your slot in minutes.",
                },
                {
                  icon: <Clock className="text-blue-600" size={24} />,
                  title: "Flexible Timings",
                  desc: "Weekend & evening slots available.",
                },
                {
                  icon: <MessageSquare className="text-blue-600" size={24} />,
                  title: "Teleconsultation",
                  desc: "Connect from the comfort of your home.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-extrabold text-navy text-lg">
                      {item.title}
                    </h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 lg:p-12 bg-gradient-to-br from-navy via-[#1e4a77] to-navy text-white rounded-[3rem] relative overflow-hidden shadow-[0_20px_40px_rgba(30,74,119,0.2)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-healing-green/20 rounded-full blur-2xl"></div>
              <h4 className="text-3xl font-extrabold mb-4 relative z-10 tracking-tight">
                Prefer WhatsApp?
              </h4>
              <p className="text-blue-100 mb-8 relative z-10 text-lg">
                Quick response for appointments and immediate queries.
              </p>
              <a
                href="https://wa.me/971528837810"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-extrabold hover:scale-105 active:scale-95 transition-all duration-300 relative z-10 shadow-lg"
              >
                Connect on WhatsApp <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 md:p-14 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100 relative z-10"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-healing-green">
                  <CheckCircle2 size={56} />
                </div>
                <div className="space-y-4 shadow-sm">
                  <h2 className="text-4xl font-extrabold text-navy tracking-tight">
                    Request Received!
                  </h2>
                  <p className="text-slate-600 text-lg font-medium max-w-sm mx-auto">
                    Our clinical administrative team will contact you shortly to
                    confirm your slot.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-slate-50 text-navy font-extrabold rounded-full hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
                >
                  Book another session <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {preFilledMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 bg-gradient-to-r from-healing-green/10 to-teal-100/10 border border-healing-green/20 rounded-[2rem] flex items-center gap-4 text-navy font-extrabold shadow-sm"
                  >
                    <Sparkles
                      className="text-healing-green shrink-0"
                      size={24}
                    />
                    <span className="text-lg">{preFilledMessage}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-navy uppercase tracking-widest px-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 rounded-[2rem] bg-slate-50 border border-transparent focus:border-blue-200 focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-navy uppercase tracking-widest px-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 rounded-[2rem] bg-slate-50 border border-transparent focus:border-blue-200 focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-navy uppercase tracking-widest px-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-6 py-4 rounded-[2rem] bg-slate-50 border border-transparent focus:border-blue-200 focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none font-medium"
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-navy uppercase tracking-widest px-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full px-6 py-4 rounded-[2rem] bg-slate-50 border border-transparent focus:border-blue-200 focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none font-medium"
                        placeholderText="Select date"
                        minDate={new Date()}
                        required
                      />
                      <CalendarIcon
                        size={20}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-extrabold text-navy uppercase tracking-widest px-2">
                    Choose Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-6 py-4 rounded-[2rem] bg-slate-50 border border-transparent focus:border-blue-200 focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none appearance-none font-medium text-navy cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <optgroup label="Psychology Services">
                      <option value="Cognitive Behavioral Therapy (CBT)">
                        Cognitive Behavioral Therapy (CBT)
                      </option>
                      <option value="Behavior Therapy">Behavior Therapy</option>
                      <option value="Emotional Regulation & Social Skills">
                        Emotional Regulation & Social Skills
                      </option>
                      <option value="Family & Parent Counseling">
                        Family & Parent Counseling
                      </option>
                      <option value="Early Intervention Programs">
                        Early Intervention Programs
                      </option>
                      <option value="School Readiness Program">
                        School Readiness Program
                      </option>
                      <option value="Dialectical Behavior Therapy (DBT)">
                        Dialectical Behavior Therapy (DBT)
                      </option>
                      <option value="Tele-psychology / Online Consultations">
                        Tele-psychology / Online Consultations
                      </option>
                      <option value="Psychology Consultation">
                        General Psychology Consultation
                      </option>
                    </optgroup>
                    <optgroup label="Other Specialties">
                      <option value="physiotherapy">
                        Physiotherapy Assessment
                      </option>
                      <option value="assessment">
                        Developmental Assessment
                      </option>
                      <option value="integrated">
                        Integrated Mind-Body Care
                      </option>
                    </optgroup>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-extrabold text-navy uppercase tracking-widest px-2">
                    Session Mode
                  </label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer group">
                      <input
                        type="radio"
                        name="mode"
                        value="In-Person"
                        className="hidden peer"
                        checked={sessionMode === "In-Person"}
                        onChange={(e) => setSessionMode(e.target.value)}
                      />
                      <div className="w-full py-4 text-center rounded-[2rem] bg-slate-50 peer-checked:bg-navy peer-checked:text-white font-extrabold transition-all border border-transparent peer-checked:shadow-lg">
                        In-Person
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer group">
                      <input
                        type="radio"
                        name="mode"
                        value="Online"
                        className="hidden peer"
                        checked={sessionMode === "Online"}
                        onChange={(e) => setSessionMode(e.target.value)}
                      />
                      <div className="w-full py-4 text-center rounded-[2rem] bg-slate-50 peer-checked:bg-navy peer-checked:text-white font-extrabold transition-all border border-transparent peer-checked:shadow-lg">
                        Online
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-extrabold text-navy uppercase tracking-widest px-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 rounded-[2rem] bg-slate-50 border border-transparent focus:border-blue-200 focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none resize-none font-medium"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white rounded-full font-extrabold text-lg hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:bg-blue-700 active:scale-95 transition-all duration-300 flex justify-center items-center gap-2 group"
                >
                  Submit Request{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <p className="text-center text-xs text-slate-400 font-medium pt-2">
                  By clicking, you agree to our privacy policy and terms.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <style>{`
        .react-datepicker-wrapper {
          width: 100%;
        }
        .react-datepicker {
          border-radius: 2rem;
          border: 1px solid #E2E8F0;
          font-family: inherit;
          padding: 1.5rem;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
          border: none;
        }
        .react-datepicker__header {
          background: white;
          border-bottom: none;
          padding-bottom: 1rem;
        }
        .react-datepicker__day--selected {
          background-color: #2563eb !important;
          border-radius: 50% !important;
          color: white !important;
          font-weight: bold;
        }
        .react-datepicker__day {
          border-radius: 50% !important;
          margin: 0.2rem;
          width: 2.2rem;
          line-height: 2.2rem;
        }
        .react-datepicker__day:hover {
          background-color: #eff6ff !important;
          color: #2563eb !important;
        }
        .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
           font-weight: 800;
           color: #0f172a;
        }
        .react-datepicker__day-name {
           font-weight: 700;
           color: #64748b;
        }
      `}</style>
    </div>
  );
}
