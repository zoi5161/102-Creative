import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMG5pZ2h0JTIwdXJiYW58ZW58MXx8fHwxNzc4NTY2ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E4D5C] opacity-70"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <h1 className="font-headline text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Luôn đồng hành cùng<br />người dẫn đầu
        </h1>
        <p className="text-white/90 mb-12 max-w-2xl" style={{ fontSize: '20px', lineHeight: 1.6 }}>
          Marketing chuyên sâu cho Bất động sản — từ chiến lược đến doanh thu thực tế
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection('lien-he')}
            className="px-8 py-4 bg-[#E55C2D] text-white rounded-sm hover:bg-[#F07A4D] transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontWeight: 600 }}
          >
            Tư vấn miễn phí
          </button>
          <button
            onClick={() => scrollToSection('du-an')}
            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-sm hover:bg-white hover:text-[#0E4D5C] transition-all duration-300"
            style={{ fontWeight: 600 }}
          >
            Xem dự án
          </button>
        </div>
      </div>
    </section>
  );
}
