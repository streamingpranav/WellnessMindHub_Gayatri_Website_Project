import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Activity, Heart, ArrowRight, MessageCircle, Info, Sparkles, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface Symptom {
  id: string;
  label: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  service: string;
  link: string;
}

const symptoms: Symptom[] = [
  { 
    id: 'anxiety', 
    label: 'Anxiety & Stress', 
    icon: '😟', 
    description: 'Specialized CBT & mindfulness for chronic worry, panic, and stress management.',
    longDescription: 'Anxiety and stress management at WellnessMind utilizes advanced Cognitive Behavioral Therapy (CBT) and mindfulness-based stress reduction. We focus on identifying cognitive distortions and physiological triggers to build long-term emotional resilience.',
    features: ['Cognitive Restructuring', 'Mindfulness Training', 'Panic Management', 'Resilience Coaching'],
    service: 'Cognitive Behavioral Therapy (CBT)',
    link: '/psychology'
  },
  { 
    id: 'focus', 
    label: 'Focus & ADHD', 
    icon: '🎯', 
    description: 'Behavioral strategies and skill training for executive dysfunction and attention goals.',
    longDescription: 'Our ADHD support is designed for children and adults struggling with focus, regulation, and organization. We implement behavioral skill-building sessions that target executive functions like time management and impulsive control.',
    features: ['Executive Functioning Support', 'Behavioral Coaching', 'Organizational Systems', 'Concentration Training'],
    service: 'Behavior Therapy',
    link: '/psychology'
  },
  { 
    id: 'pain', 
    label: 'Chronic Pain', 
    icon: '⚡', 
    description: 'Integrated approach combining physiotherapy with psychological pain management.',
    longDescription: 'Chronic pain is as much a neurological event as it is a physical one. Our integrated care model combines clinical physiotherapy with psychological support to help patients manage pain perception and restore daily functionality.',
    features: ['Mind-Body Pain Management', 'Functional Physiotherapy', 'Neurological Desensitization', 'Activity Pacing'],
    service: 'integrated',
    link: '/integrated-care'
  },
  { 
    id: 'sleep', 
    label: 'Sleep Issues', 
    icon: '😴', 
    description: 'Behavioral sleep intervention (CBT-I) to resolve insomnia without medication.',
    longDescription: 'WellnessMind provides evidence-based Cognitive Behavioral Therapy for Insomnia (CBT-I). We address the behavioral and cognitive factors that sustain sleep problems, aiming for restorative sleep without pharmacological reliance.',
    features: ['CBT-I Protocols', 'Sleep Hygiene Overhaul', 'Circadian Regulation', 'Anxiety Reduction'],
    service: 'Cognitive Behavioral Therapy (CBT)',
    link: '/psychology'
  },
  { 
    id: 'mobility', 
    label: 'Mobility & Joints', 
    icon: '🦴', 
    description: 'Rehabilitation therapy to restore movement and reduce stiffness in joints.',
    longDescription: 'Our physiotherapy department specializes in joint mobility and functional rehabilitation. We use manual therapy and tailored exercise programs to improve range of motion, reduce stiffness, and prevent future injury.',
    features: ['Manual Joint Therapy', 'Functional Strength Training', 'Mobility Assessments', 'Postural Correction'],
    service: 'physiotherapy',
    link: '/physiotherapy'
  },
  { 
    id: 'behavior', 
    label: 'Child Behavior', 
    icon: '😤', 
    description: 'Evidence-based behavioral therapy for emotional outbursts and socialization.',
    longDescription: 'We support families navigating childhood behavioral challenges like emotional outbursts, defiance, or social withdrawal. Our approach is collaborative, equipping both children and parents with tools for healthy emotional expression.',
    features: ['Emotional Regulation', 'Social Skill Training', 'Parenting Strategies', 'Positive Reinforcement'],
    service: 'Behavior Therapy',
    link: '/psychology'
  },
  { 
    id: 'post-op', 
    label: 'Surgery Recovery', 
    icon: '🏥', 
    description: 'Targeted physiotherapy to ensure safe and effective recovery after surgical procedures.',
    longDescription: 'Post-surgical rehabilitation is critical for long-term health. Our physiotherapists provide structured, stage-appropriate recovery plans to safely restore movement, strength, and confidence after orthopedic or general surgery.',
    features: ['Targeted Post-Op Protocols', 'Scar Tissue Management', 'Strength Restoration', 'Gait Training'],
    service: 'physiotherapy',
    link: '/physiotherapy'
  },
  { 
    id: 'development', 
    label: 'Developmental Delays', 
    icon: '🧒', 
    description: 'Multidisciplinary early intervention programs for key developmental milestones.',
    longDescription: 'Early intervention is vital for a child\'s lifelong potential. We offer comprehensive screenings and therapy for developmental delays, focusing on communication, cognitive play, and social-emotional milestones.',
    features: ['Developmental Screening', 'Early Communication Support', 'Play-Based Intervention', 'Family Advocacy'],
    service: 'Early Intervention Programs',
    link: '/psychology'
  },
];

export default function ConditionSelector() {
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full mx-auto py-12">
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-healing-green/10 rounded-full border border-healing-green/20 text-healing-green text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles size={14} />
          <span>Care Finder Tool</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">How can we help you <span className="text-healing-green">today?</span></h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Explore our range of clinical solutions tailored to your unique wellbeing journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {symptoms.map((symptom) => (
          <motion.div
            key={symptom.id}
            onMouseEnter={() => setHoveredId(symptom.id)}
            onMouseLeave={() => setHoveredId(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-healing-green/20 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
          >
            {/* Hover Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-healing-green/5 rounded-full -mr-16 -mt-16 group-hover:scale-[3] transition-transform duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                {symptom.icon}
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-healing-green transition-colors">{symptom.label}</h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {symptom.description}
              </p>

              <div className="space-y-3">
                <button 
                  onClick={() => setSelectedSymptom(symptom)}
                  className="w-full py-3 text-center rounded-2xl bg-slate-50 text-navy font-bold text-xs uppercase tracking-widest hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Learn More <Info size={14} className="opacity-50 group-hover/btn:opacity-100" />
                </button>
                <Link 
                  to={`/book?service=${encodeURIComponent(symptom.service)}`}
                  className="w-full py-3 text-center rounded-2xl bg-healing-green text-white font-bold text-xs uppercase tracking-widest hover:bg-navy transition-all shadow-lg shadow-healing-green/20 flex items-center justify-center gap-2"
                >
                  Book Assessment <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSymptom && (
          <div className="fixed inset-0 z-[100] overflow-y-auto py-10 md:py-20 px-4 md:px-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSymptom(null)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-md"
            />
            
            <div className="min-h-full flex items-center justify-center pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto my-auto border-t-8 border-healing-green"
              >
                <div className="md:w-2/5 bg-slate-50 p-12 flex flex-col items-center justify-center text-center">
                  <div className="text-7xl mb-6">{selectedSymptom.icon}</div>
                  <h3 className="text-2xl font-bold text-navy leading-tight">{selectedSymptom.label}</h3>
                </div>
                
                <div className="md:w-3/5 p-12 relative">
                  <button 
                    onClick={() => setSelectedSymptom(null)}
                    className="absolute top-8 right-8 text-slate-300 hover:text-navy transition-all transform hover:rotate-90"
                  >
                    <X size={32} />
                  </button>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-healing-green mb-4">How We Support You</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {selectedSymptom.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-navy mb-3">Therapeutic Focus:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedSymptom.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-healing-green" />
                            <span className="text-slate-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 flex flex-col gap-3">
                      <Link 
                        to={`/book?service=${encodeURIComponent(selectedSymptom.service)}`}
                        className="w-full py-5 bg-navy text-white rounded-full font-bold text-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
                      >
                        Book {selectedSymptom.label} Support <ArrowRight size={20} />
                      </Link>
                      <Link 
                        to={selectedSymptom.link}
                        className="text-center text-xs text-healing-green font-bold uppercase tracking-widest hover:underline"
                      >
                        Explore {selectedSymptom.service} Department
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-20 text-center">
        <div className="p-8 md:p-12 bg-navy rounded-[3.5rem] text-white relative overflow-hidden inline-block max-w-4xl w-full mx-4">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <MessageCircle size={100} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h4 className="text-2xl font-bold mb-2">Still unsure about the right path?</h4>
              <p className="text-white/60">Our clinical coordinators can help guide you through a free discovery call.</p>
            </div>
            <Link to="/book" className="px-8 py-4 bg-healing-green text-white rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap shadow-xl shadow-healing-green/30">
              Start Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
