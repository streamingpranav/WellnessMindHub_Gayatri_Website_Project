/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Psychology from "./pages/Psychology";
import PsychologyAssessment from "./pages/PsychologyAssessment";
import PsychologyTherapy from "./pages/PsychologyTherapy";
import Physiotherapy from "./pages/Physiotherapy";
import IntegratedCare from "./pages/IntegratedCare";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-healing-green/30 relative overflow-hidden bg-[#F4F7F9]">
        {/* Mesh Gradient Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-healing-green/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-navy/5 rounded-full blur-[100px] pointer-events-none"></div>

        <Header />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/psychology" element={<Psychology />} />
            <Route
              path="/psychology/assessment"
              element={<PsychologyAssessment />}
            />
            <Route path="/psychology/therapy" element={<PsychologyTherapy />} />
            <Route path="/physiotherapy" element={<Physiotherapy />} />
            <Route path="/integrated-care" element={<IntegratedCare />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookAppointment />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
}
