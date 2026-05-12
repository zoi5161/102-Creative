import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`font-headline tracking-tight transition-colors ${isScrolled ? 'text-[#0E4D5C]' : 'text-white'}`} style={{ fontSize: '28px', fontWeight: 800 }}>
            102 CREATIVE
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('gioi-thieu')}
            className={`transition-colors hover:text-[#F4A93C] ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
          >
            Giới thiệu
          </button>
          <button
            onClick={() => scrollToSection('giai-phap')}
            className={`transition-colors hover:text-[#F4A93C] ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
          >
            Giải pháp
          </button>
          <button
            onClick={() => scrollToSection('du-an')}
            className={`transition-colors hover:text-[#F4A93C] ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
          >
            Dự án
          </button>
          <button
            onClick={() => scrollToSection('lien-he')}
            className={`transition-colors hover:text-[#F4A93C] ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
          >
            Liên hệ
          </button>
        </div>
      </div>
    </nav>
  );
}
