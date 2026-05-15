import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import logoLight from '@/assets/images/LogoTrang.png';

const SCROLL_THRESHOLD = 50;

const navItems = [
  { id: 'gioi-thieu', label: 'Giới thiệu' },
  { id: 'giai-phap', label: 'Giải pháp' },
  { id: 'du-an', label: 'Dự án' },
  { id: 'lien-he', label: 'Liên hệ' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > SCROLL_THRESHOLD);

      if (currentScrollY <= SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="relative flex items-center h-20 md:h-24"
          aria-label="102 Creative"
        >
          <img
            src={logoLight}
            alt="102 Creative"
            className="h-full w-auto object-contain"
          />
        </a>
        <div
          className="hidden md:flex items-center gap-2"
          onMouseLeave={() => setHoveredId(null)}
        >
          {navItems.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                className="relative px-5 py-2.5 transition-colors duration-200"
                style={{ fontSize: '18px', fontWeight: 600 }}
              >
                {isHovered && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-[#D4A24C]/20 rounded-full"
                    transition={{ type: 'spring', stiffness: 320, damping: 26, mass: 0.8 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isHovered ? 'text-[#0A2540]' : 'text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
