import { useEffect, useRef, useState } from 'react';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
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
    <div ref={ref} className="font-display text-[#0E4D5C]" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900 }}>
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
            <h2 className="font-headline mb-6 text-[#0E4D5C]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800 }}>
              Chúng tôi là ai
            </h2>
            <p className="text-[#1A1A1A] leading-relaxed" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              102 CREATIVE là đơn vị chuyên cung cấp giải pháp Marketing tổng thể cho các chủ đầu tư
              và sàn môi giới Bất động sản tại Việt Nam. Với phương châm "Làm thật - Nói thật - Chịu trách nhiệm thật",
              chúng tôi cam kết đồng hành cùng đối tác từ chiến lược đến việc tạo ra doanh thu thực tế.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed mt-4" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              Đội ngũ 102 CREATIVE sở hữu hơn 10 năm kinh nghiệm trong lĩnh vực Marketing và Bất động sản,
              hiểu sâu về hành vi khách hàng, quy trình bán hàng và các công cụ số hóa hiện đại.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F8F6F0] p-6 rounded-sm border border-[#F4A93C]/20">
              <CountUp end={16} suffix="+" />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Dự án năm 2025</p>
            </div>
            <div className="bg-[#F8F6F0] p-6 rounded-sm border border-[#F4A93C]/20">
              <CountUp end={10} suffix="+" />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Năm kinh nghiệm</p>
            </div>
            <div className="bg-[#F8F6F0] p-6 rounded-sm border border-[#F4A93C]/20">
              <CountUp end={8} suffix="+" />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Đối tác chiến lược</p>
            </div>
            <div className="bg-[#F8F6F0] p-6 rounded-sm border border-[#F4A93C]/20">
              <CountUp end={100} suffix="%" />
              <p className="text-[#6B7280] mt-2" style={{ fontSize: '15px' }}>Data-driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
