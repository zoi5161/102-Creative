import { useEffect, useRef, useState } from 'react';
import { ParticleBackground } from './ParticleBackground';

/* Bảng màu trích từ logo 102 CREATIVE */
const LOGO_TERRACOTTA = '#D8552B';  // chữ "1" + nét cam của "2"
const LOGO_MUSTARD = '#D4A24C';     // mảng vàng mustard trên "0" và "2"
const LOGO_TEAL = '#3FA9B5';        // mảng xanh teal của "0"
const LOGO_BURGUNDY = '#FF4757';    // bright red cho contrast trên dark bg

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
    <section
      id="gioi-thieu"
      className="relative py-24 overflow-hidden bg-[#13304A]"
    >
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline mb-6" style={{ color: LOGO_TERRACOTTA, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800 }}>
              102 Creative
            </h2>
            <p className="leading-relaxed" style={{ color: 'rgba(245,245,240,0.85)', fontSize: '17px', lineHeight: 1.6 }}>
              <strong style={{ color: 'white' }}>102 Creative</strong> là đơn vị{' '}
              <span className="font-semibold" style={{ color: LOGO_TERRACOTTA }}>Marketing chuyên sâu</span> trong lĩnh vực{' '}
              <span className="font-semibold" style={{ color: LOGO_MUSTARD }}>bất động sản</span>, tập trung vào giải pháp tạo{' '}
              <span className="font-semibold" style={{ color: LOGO_TEAL }}>Lead chất lượng</span> và tối ưu chuyển đổi giao dịch.
            </p>
            <p className="leading-relaxed mt-4" style={{ color: 'rgba(245,245,240,0.85)', fontSize: '17px', lineHeight: 1.6 }}>
              Chúng tôi không chỉ triển khai quảng cáo, mà{' '}
              <span className="font-semibold" style={{ color: LOGO_MUSTARD }}>đồng hành cùng doanh nghiệp</span> từ chiến lược đến{' '}
              <span className="font-semibold" style={{ color: LOGO_TEAL }}>doanh thu thực tế</span>.
            </p>
            <p className="leading-relaxed mt-4" style={{ color: 'rgba(245,245,240,0.85)', fontSize: '17px', lineHeight: 1.6 }}>
              Với <span className="font-semibold" style={{ color: LOGO_TEAL }}>tư duy dữ liệu</span> và{' '}
              <span className="font-semibold" style={{ color: LOGO_TERRACOTTA }}>thực chiến thị trường</span>,{' '}
              <strong style={{ color: 'white' }}>102 Creative</strong> lựa chọn trở thành{' '}
              <span className="font-semibold" style={{ color: LOGO_MUSTARD }}>đối tác tăng trưởng bền vững</span> của những{' '}
              <span className="font-semibold italic" style={{ color: LOGO_BURGUNDY }}>người dẫn đầu</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-sm border border-white/15" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <CountUp end={16} suffix="+" color={LOGO_TERRACOTTA} />
              <p className="mt-2" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>Dự án năm 2025</p>
            </div>
            <div className="p-6 rounded-sm border border-white/15" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <CountUp end={10} suffix="+" color={LOGO_TEAL} />
              <p className="mt-2" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>Năm kinh nghiệm</p>
            </div>
            <div className="p-6 rounded-sm border border-white/15" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <CountUp end={12} suffix="+" color={LOGO_MUSTARD} />
              <p className="mt-2" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>Đối tác chiến lược</p>
            </div>
            <div className="p-6 rounded-sm border border-white/15" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <CountUp end={100} suffix="%" color={LOGO_BURGUNDY} />
              <p className="mt-2" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>Data-driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
