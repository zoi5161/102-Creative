import { Handshake, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

type Step = {
  number: string;
  title: string;
  items: string[];
  icon: typeof Handshake;
  color: string;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'TIẾP NHẬN THÔNG TIN',
    items: [
      'Nhận thông tin dự án, visual, USP (Đặc điểm bán hàng nổi bật)',
      'Xác định ngân sách, thời gian triển khai dự án',
      'Nhận yêu cầu của KH về KPIs cho dự án',
      'Đi thực tế dự án',
      'Họp nội bộ triển khai',
    ],
    icon: Handshake,
    color: '#D8552B',
  },
  {
    number: '02',
    title: 'XÂY DỰNG CHIẾN LƯỢC',
    items: [
      'Phân tích thị trường',
      'Phân tích dự án (USP, khách hàng mục tiêu)',
      'Phân tích SWOT dự án và đối thủ (trực tiếp & gián tiếp)',
      'Nghiên cứu bài quảng cáo hiệu quả của dự án và đối thủ',
      'Xác định Target Audience',
      'Lên kế hoạch phân bổ ngân sách theo timeline dự án',
      'Lên kế hoạch content & media theo ngân sách phân bổ',
      'Thống nhất chiến lược với khách hàng',
    ],
    icon: Lightbulb,
    color: '#D4A24C',
  },
  {
    number: '03',
    title: 'TRIỂN KHAI THỰC HIỆN',
    items: [
      'Chuẩn bị hệ thống BM (xác minh, fanpage, Domain gắn Pixel + CAPI)',
      'Xây dựng Form chuẩn 3 giai đoạn: Cold - Warm - Hot',
      'Soạn thảo 5 kịch bản (3 chính, 2 dự phòng)',
      'Sản xuất media: mỗi kịch bản 3 file - video 9:16, video 3:4, ảnh tĩnh',
      'Soạn thảo 15 nội dung quảng cáo (mỗi giai đoạn 5 nội dung)',
      'Lên Camp Cold - ABO (tìm Content Win)',
      'Lên Camp Warm - ReMKT',
      'Lên Camp Test Hook (tăng Content Win)',
      'Tối ưu và nâng ngân sách',
      'Ổn định và mở rộng',
    ],
    icon: Rocket,
    color: '#3FA9B5',
  },
  {
    number: '04',
    title: 'BÁO CÁO & TỔNG KẾT',
    items: [
      'Báo cáo tổng hợp: Chi phí - Lead - Hiệu quả - Insight',
      'Đánh giá công việc theo Checklist: thời gian hoàn thành & tính hiệu quả mang lại',
      'Rút kinh nghiệm, chuẩn bị phase tiếp theo',
    ],
    icon: BarChart3,
    color: '#7E2D3B',
  },
];

export function Process() {
  return (
    <section
      id="quy-trinh"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0D4070 40%, #1060A0 70%, #1976D2 100%)' }}
    >
      <ParticleBackground />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2
          className="font-headline text-center mb-4 text-white"
          style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}
        >
          <span className="text-[#D4A24C]">QUY TRÌNH</span> LÀM VIỆC
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-8"></div>
        <p
          className="text-center max-w-3xl mx-auto mb-20 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.6 }}
        >
          Từ buổi gặp đầu tiên đến doanh thu thực tế - 4 giai đoạn minh bạch, đo được, không bao giờ giấu giếm dữ liệu.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="group relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -left-2 select-none pointer-events-none leading-none transition-opacity duration-300 group-hover:opacity-70"
                  style={{
                    fontSize: '120px',
                    fontWeight: 900,
                    color: 'transparent',
                    WebkitTextStroke: `2px ${step.color}`,
                    letterSpacing: '-0.06em',
                    opacity: 0.45,
                  }}
                >
                  {step.number}
                </div>

                <div
                  className="relative z-10 pt-12 pb-7 px-7 bg-white border-l-[3px] shadow-sm group-hover:shadow-xl transition-shadow duration-300 h-full"
                  style={{ borderColor: step.color }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className="font-headline"
                      style={{ fontSize: '20px', fontWeight: 800, color: '#0A2540', letterSpacing: '-0.01em' }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[#1A1A1A]"
                        style={{ fontSize: '14.5px', lineHeight: 1.55 }}
                      >
                        <span
                          aria-hidden="true"
                          className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: step.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

