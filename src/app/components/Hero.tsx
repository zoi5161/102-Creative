import heroBanner from '@/assets/images/LogoBanner.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative lg:min-h-screen w-full overflow-hidden flex items-center pt-28 pb-16"
      style={{
        background: '#F5F5F0',
        backgroundImage: [
          'radial-gradient(ellipse 520px 520px at 15% 20%, rgba(212,162,76,0.18) 0%, transparent 70%)',
          'radial-gradient(ellipse 400px 400px at 75% 15%, rgba(63,169,181,0.14) 0%, transparent 70%)',
          'radial-gradient(ellipse 460px 460px at 85% 75%, rgba(216,85,43,0.12) 0%, transparent 70%)',
          'radial-gradient(ellipse 380px 380px at 30% 80%, rgba(212,162,76,0.10) 0%, transparent 70%)',
        ].join(', '),
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="lg:max-w-[48%]">
          <h1
            className="font-headline text-[#0A2540] mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Luôn đồng hành<br />
            cùng
            <span className="text-[#FF6B35]"> người dẫn đầu</span>
          </h1>
          <p
            className="text-[#1A1A1A] mb-10 max-w-md"
            style={{ fontSize: '17px', lineHeight: 1.6 }}
          >
            Marketing chuyên sâu cho Bất động sản - từ chiến lược đến doanh thu thực tế.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('lien-he')}
              className="px-8 py-4 bg-[#0A2540] text-white rounded-sm shadow-md hover:bg-[#13304A] hover:shadow-lg transition-all duration-200"
              style={{ fontWeight: 600 }}
            >
              Kết nối chuyên gia
            </button>
            <button
              onClick={() => scrollToSection('du-an')}
              className="px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] rounded-sm hover:bg-[#0A2540] hover:text-white transition-all duration-200"
              style={{ fontWeight: 600 }}
            >
              Xem dự án
            </button>
          </div>
        </div>
      </div>

      <img
        src={heroBanner}
        alt="102 Creative"
        className="hidden lg:block absolute bottom-0 right-0 w-[62%] max-w-[900px] h-auto object-contain pointer-events-none select-none"
      />
    </section>
  );
}
