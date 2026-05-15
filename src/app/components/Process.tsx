import { Handshake, BarChart3, FileText, Zap, TrendingUp } from 'lucide-react';

type Step = {
  number: string;
  title: string;
  desc: string;
  icon: typeof Handshake;
  color: string;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Tiếp nhận & lắng nghe',
    desc: 'Gặp gỡ trực tiếp, hiểu sâu sản phẩm, KPI và bài toán thật của doanh nghiệp.',
    icon: Handshake,
    color: '#D8552B',
  },
  {
    number: '02',
    title: 'Phân tích & đề xuất',
    desc: 'Research thị trường, SWOT đối thủ, đề xuất plan Marketing và ngân sách rõ ràng.',
    icon: BarChart3,
    color: '#D4A24C',
  },
  {
    number: '03',
    title: 'Ký kết & kickoff',
    desc: 'Hợp đồng minh bạch, OKR đo được, dựng hệ thống tracking ngay từ ngày đầu.',
    icon: FileText,
    color: '#3FA9B5',
  },
  {
    number: '04',
    title: 'Triển khai & tối ưu',
    desc: 'Chạy chiến dịch, A/B test, tối ưu CPL/CTR theo tuần - không ngủ trên chiến thắng.',
    icon: Zap,
    color: '#7E2D3B',
  },
  {
    number: '05',
    title: 'Báo cáo & đồng hành',
    desc: 'Dashboard realtime, training đội sales đối tác, đảm bảo Marketing → doanh thu thật.',
    icon: TrendingUp,
    color: '#0A2540',
  },
];

export function Process() {
  return (
    <section id="quy-trinh" className="py-24 bg-[#F5F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="font-headline text-center mb-4 text-[#0A2540]"
          style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}
        >
          <span className="text-[#3FA9B5]">QUY TRÌNH</span> HỢP TÁC
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-8"></div>
        <p
          className="text-center text-[#1A1A1A] max-w-3xl mx-auto mb-24 leading-relaxed"
          style={{ fontSize: '17px', lineHeight: 1.6 }}
        >
          Từ buổi gặp đầu tiên đến doanh thu thực tế - 5 bước minh bạch, đo được, không bao giờ giấu giếm dữ liệu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-20 gap-x-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const offsetClass = i % 2 === 1 ? 'lg:translate-y-16' : 'lg:-translate-y-0';
            return (
              <article
                key={step.number}
                className={`group relative transition-transform duration-500 ease-out ${offsetClass} hover:-translate-y-2`}
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-14 -left-3 select-none pointer-events-none leading-none transition-all duration-500 group-hover:opacity-90"
                  style={{
                    fontSize: '140px',
                    fontWeight: 900,
                    color: 'transparent',
                    WebkitTextStroke: `2px ${step.color}`,
                    letterSpacing: '-0.06em',
                    opacity: 0.55,
                  }}
                >
                  {step.number}
                </div>

                <div
                  className="relative z-10 pt-10 pb-6 px-5 bg-white border-l-[3px] shadow-sm group-hover:shadow-xl transition-shadow duration-300"
                  style={{ borderColor: step.color }}
                >
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="font-headline mb-2 transition-colors duration-300"
                    style={{ fontSize: '17px', fontWeight: 700, color: '#0A2540' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#1A1A1A]" style={{ fontSize: '14px', lineHeight: 1.55 }}>
                    {step.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
