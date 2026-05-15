import { ClipboardList, CreditCard, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

type Step = {
  number: string;
  title: string;
  desc: string;
  icon: typeof ClipboardList;
  color: string;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Tiếp nhận & Audit',
    desc: 'Tiếp nhận thông tin dự án, nghiên cứu đối tượng khách hàng tiềm năng và ký hợp đồng hợp tác.',
    icon: ClipboardList,
    color: '#D8552B',
  },
  {
    number: '02',
    title: 'Thanh toán',
    desc: 'Đối tác chuyển khoản theo thông tin trên hợp đồng hoặc được ghim tại nhóm Zalo.',
    icon: CreditCard,
    color: '#D4A24C',
  },
  {
    number: '03',
    title: 'Lên kế hoạch & Chiến lược',
    desc: 'Đề xuất ngân sách, thống nhất kịch bản nội dung và CPL (chi phí/khách hàng tiềm năng) dự kiến.',
    icon: Lightbulb,
    color: '#3FA9B5',
  },
  {
    number: '04',
    title: 'Triển khai & Tối ưu hóa',
    desc: 'Sản xuất nội dung quảng cáo và thiết lập chiến dịch trong vòng 24 giờ. Theo dõi chỉ số hàng ngày, A/B testing.',
    icon: Rocket,
    color: '#D4A24C',
  },
  {
    number: '05',
    title: 'Báo cáo & Nghiệm thu',
    desc: 'Gửi báo cáo định kỳ và nghiệm thu khi kết thúc chiến dịch.',
    icon: BarChart3,
    color: '#D8552B',
  },
];

export function Process() {
  return (
    <section
      id="quy-trinh"
      className="relative py-24 overflow-hidden bg-[#13304A]"
    >
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2
          className="font-headline text-center mb-4 text-white"
          style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}
        >
          <span className="text-[#D4A24C]">QUY TRÌNH</span> HỢP TÁC 5 BƯỚC
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-8"></div>
        <p
          className="text-center max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.6 }}
        >
          Quy trình rõ ràng, minh bạch — từ buổi gặp đầu tiên đến khi chiến dịch nghiệm thu thành công.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group relative rounded-sm p-6 bg-white/20 hover:bg-white/95 border border-white/25 [transition:background-color_400ms_ease,box-shadow_400ms_ease]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span
                    className="font-headline leading-none transition-colors duration-300"
                    style={{ fontSize: '28px', fontWeight: 900, color: step.color }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="font-headline mb-3 text-white group-hover:text-[#0A2540] transition-colors duration-300"
                  style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.3 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/75 group-hover:text-[#4B5563] transition-colors duration-300"
                  style={{ fontSize: '13.5px', lineHeight: 1.6 }}
                >
                  {step.desc}
                </p>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: step.color }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
