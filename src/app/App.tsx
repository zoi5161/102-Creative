import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Values } from './components/Values';
import { Founder } from './components/Founder';
import { Solutions } from './components/Solutions';
import { Projects } from './components/Projects';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

export default function App() {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <Stats />
      <Values />
      <Founder />
      <Solutions />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
      <FloatingButtons />
      <Toaster position="top-center" richColors />
    </div>
  );
}
