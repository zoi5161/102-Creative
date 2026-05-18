import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import ceoMale from '@/assets/images/CEOMale.jpg';
import ceoFemale from '@/assets/images/CEOFemale.jpg';

/**
 * PLACEHOLDER TESTIMONIALS - tên người đại diện do dev tự bịa cho mục đích demo.
 * Tên công ty là partner thật. Cần thay bằng feedback thật trước khi launch production.
 */

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  color: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Phối hợp với 102 Creative giúp chúng tôi rút ngắn gần 40% thời gian go-to-market của dự án mới - từ research thị trường đến chạy quảng cáo, mọi thứ đều data-driven và đo lường rõ ràng.',
    name: 'Ông Trần Hoàng Dũng',
    title: 'CEO',
    company: 'Đất Phương Nam',
    color: '#D8552B',
    initials: 'TM',
  },
  {
    quote:
      'Đội 102 không chỉ chạy quảng cáo, họ training cả đội sales của tôi về kịch bản bám đuổi và chốt deal. Đó mới là điểm khác biệt thật sự với một agency.',
    name: 'Bà Nguyễn Thị Nhàn',
    title: 'CEO',
    company: 'Khải Minh Land',
    color: '#3FA9B5',
    initials: 'LT',
  },
  {
    quote:
      'Dự án quy mô lớn nhưng 102 Creative xử lý từ chiến lược đến deploy chỉ trong 3 tuần. Chuyên nghiệp, đúng cam kết và quan trọng nhất - leads ra đều, chất lượng.',
    name: 'Bà Huỳnh Thị Vân Anh',
    title: 'CEO',
    company: 'Việt Á Real',
    color: '#7E2D3B',
    initials: 'VA',
  },
  {
    quote:
      '102 Creative không chỉ giúp chúng tôi tăng lượng lead mà còn đồng hành tư vấn chiến lược từng giai đoạn. Đội ngũ chuyên nghiệp, phản hồi nhanh và luôn đặt kết quả thật lên đầu.',
    name: 'Ông Lê Nhật Khánh',
    title: 'CEO',
    company: 'Phú Khang Holdings',
    color: '#3FA9B5',
    initials: 'NK',
  },
  {
    quote:
      'Tôi từng làm việc với nhiều agency, nhưng 102 Creative là đơn vị duy nhất đặt KPI doanh thu lên trước, thay vì chỉ đẹp số leads ảo trên dashboard.',
    name: 'Ông Nguyễn Hoàng Việt Chương',
    title: 'Giám đốc dự án',
    company: 'GPT Land',
    color: '#0A2540',
    initials: 'ĐL',
  },
  {
    quote:
      'Marketing trong BĐS cực kỳ cạnh tranh - 102 Creative giúp chúng tôi nổi bật bằng concept sáng tạo và targeting chính xác đến từng phân khúc khách hàng.',
    name: 'Ông Nguyễn Đức Hiếu',
    title: 'CEO',
    company: 'Trend Realty',
    color: '#D8552B',
    initials: 'HL',
  },
];

function getVisibleCount() {
  if (typeof window === 'undefined') return 3;
  const w = window.innerWidth;
  if (w >= 1024) return 3;
  if (w >= 768) return 2;
  return 1;
}

export function Testimonials() {
  const [visibleCount, setVisibleCount] = useState<number>(getVisibleCount);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setVisibleCount(getVisibleCount());
      setStart(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const totalDots = Math.max(testimonials.length - visibleCount + 1, 1);
  const safeStart = Math.min(start, totalDots - 1);

  return (
    <section id="khach-hang-noi-bat" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="font-headline text-center mb-4 text-[#0A2540]"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, lineHeight: 1.25 }}
        >
          102 Creative ghi <span className="text-[#D4A24C]">dấu ấn gì</span> trong lòng khách hàng?
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-8"></div>
        <p
          className="text-center text-[#1A1A1A] max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{ fontSize: '17px', lineHeight: 1.6 }}
        >
          Những giá trị 102 Creative mang lại được ghi nhận qua trải nghiệm thực tế từ chủ đầu tư và sàn môi giới - nơi chất lượng, sáng tạo và cam kết hiện rõ trong từng dự án.
        </p>

        <div className="overflow-hidden">
          <div
            className="flex gap-8"
            style={{
              transform: `translateX(calc(-${safeStart} * (100% + 32px) / ${visibleCount}))`,
              transition: 'transform 0.6s cubic-bezier(0.32, 0.72, 0, 1)',
            }}
          >
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex-shrink-0 group bg-[#F5F5F0] p-8 rounded-md border-l-[3px] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[360px]"
                style={{
                  width: `calc((100% - ${(visibleCount - 1) * 32}px) / ${visibleCount})`,
                  borderColor: t.color,
                }}
              >
                <Quote
                  className="w-8 h-8 mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: t.color }}
                />
                <p
                  className="text-[#1A1A1A] mb-6 flex-1"
                  style={{ fontSize: '15px', lineHeight: 1.65 }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-[#E5E7EB]">
                  <img
                    src={t.name.startsWith('Bà') ? ceoFemale : ceoMale}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                    style={{ border: `2px solid ${t.color}` }}
                  />
                  <div className="min-w-0">
                    <p
                      className="font-headline text-[#0A2540] truncate"
                      style={{ fontSize: '15px', fontWeight: 700 }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="truncate"
                      style={{ fontSize: '13px', color: t.color, fontWeight: 600 }}
                    >
                      {t.title} - {t.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Trang ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                safeStart === i ? 'bg-[#FF6B35]' : 'bg-[#D5DCE5] hover:bg-[#9CA3AF]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
