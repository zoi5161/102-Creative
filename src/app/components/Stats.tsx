import { useEffect, useRef, useState } from 'react';

/* Bảng màu trích từ logo 102 CREATIVE */
const LOGO_NAVY = '#0A2540';        // chữ "CREATIVE" + chữ "0" nét trong
const LOGO_TERRACOTTA = '#D8552B';  // chữ "1" + nét cam của "2"
const LOGO_MUSTARD = '#D4A24C';     // mảng vàng mustard trên "0" và "2"
const LOGO_TEAL = '#3FA9B5';        // mảng xanh teal của "0"
const LOGO_BURGUNDY = '#7E2D3B';    // mảng đỏ burgundy của "0"

function CountUp({ end, suffix = '', color = LOGO_MUSTARD }: { end: number; suffix?: string; color?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="font-display" style={{ color, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900 }}>
      {count}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section id="gioi-thieu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline mb-6" style={{ color: LOGO_TERRACOTTA, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800 }}>
              102 Creative
            </h2>
            <p className="text-[#1A1A1A] leading-relaxed" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              <strong style={{ color: LOGO_NAVY }}>102 Creative</strong> là đơn vị{' '}
              <span className="font-semibold" style={{ color: LOGO_TERRACOTTA }}>Marketing chuyên sâu</span> trong lĩnh vực{' '}
              <span className="font-semibold" style={{ color: LOGO_MUSTARD }}>bất động sản</span>, tập trung vào giải pháp tạo{' '}
              <span className="font-semibold" style={{ color: LOGO_TEAL }}>Lead chất lượng</span> và tối ưu chuyển đổi giao dịch.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed mt-4" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              Chúng tôi không chỉ triển khai quảng cáo, mà{' '}
              <span className="font-semibold" style={{ color: LOGO_MUSTARD }}>đồng hành cùng doanh nghiệp</span> từ chiến lược đến{' '}
              <span className="font-semibold" style={{ color: LOGO_TEAL }}>doanh thu thực tế</span>.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed mt-4" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              Với <span className="font-semibold" style={{ color: LOGO_TEAL }}>tư duy dữ liệu</span> và{' '}
              <span className="font-semibold" style={{ color: LOGO_TERRACOTTA }}>thực chiến thị trường</span>,{' '}
              <strong style={{ color: LOGO_NAVY }}>102 Creative</strong> lựa chọn trở thành{' '}
              <span className="font-semibold" style={{ color: LOGO_MUSTARD }}>đối tác tăng trưởng bền vững</span> của những{' '}
              <span className="font-semibold italic" style={{ color: LOGO_BURGUNDY }}>người dẫn đầu</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F5F5F0] p-6 rounded-sm border border-[#D4A24C]/20">
              <CountUp end={16} suffix="+" color={LOGO_TERRACOTTA} />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Dự án năm 2025</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-sm border border-[#D4A24C]/20">
              <CountUp end={10} suffix="+" color={LOGO_TEAL} />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Năm kinh nghiệm</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-sm border border-[#D4A24C]/20">
              <CountUp end={12} suffix="+" color={LOGO_MUSTARD} />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Đối tác chiến lược</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-sm border border-[#D4A24C]/20">
              <CountUp end={100} suffix="%" color={LOGO_BURGUNDY} />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Data-driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
