import { useState } from 'react';
import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Values } from './components/Values';
import { Founder } from './components/Founder';
import { Solutions } from './components/Solutions';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { RecruitmentModal } from './components/RecruitmentModal';

export default function App() {
  const [recruitmentOpen, setRecruitmentOpen] = useState(false);

  return (
    <div className="w-full">
      <Navigation onRecruitmentClick={() => setRecruitmentOpen(true)} />
      <RecruitmentModal open={recruitmentOpen} onClose={() => setRecruitmentOpen(false)} />
      <Hero />
      <Stats />
      <Values />
      <Founder />
      <Solutions />
      <Projects />
      <Process />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
      <Toaster position="top-center" richColors />
    </div>
  );
}
