import heroBanner from '@/assets/images/102.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F5F5F0] overflow-hidden flex items-center pt-28 pb-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="lg:max-w-[48%]">
          <h1
            className="font-headline text-[#0A2540] mb-8"
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Chiến lược.<br />
            Sáng tạo.<br />
            Tăng trưởng<br />
            <span className="text-[#FF6B35]">đo được.</span>
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
              className="px-8 py-4 bg-[#0A2540] text-white rounded-sm hover:bg-[#13304A] transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ fontWeight: 600 }}
            >
              Tư vấn miễn phí
            </button>
            <button
              onClick={() => scrollToSection('du-an')}
              className="px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] rounded-sm hover:bg-[#0A2540] hover:text-white transition-all duration-300"
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
        className="hidden lg:block absolute bottom-0 right-0 w-[50%] max-w-[720px] h-auto object-contain pointer-events-none select-none"
      />
    </section>
  );
}
