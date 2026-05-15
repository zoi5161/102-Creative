import { useState } from 'react';
import { Target, TrendingUp, Database, ChevronRight } from 'lucide-react';

type Item = { title: string; desc: string };
type Card = { title: string; icon: typeof Target; items: Item[] };

const cards: Card[] = [
  {
    title: 'LEAD GENERATION',
    icon: Target,
    items: [
      {
        title: 'Nghiên cứu thị trường & đối thủ cạnh tranh',
        desc: 'Phân tích quy mô, xu hướng và chiến lược của các đối thủ trong cùng phân khúc.',
      },
      {
        title: 'Phân tích SWOT dự án',
        desc: 'Định vị điểm mạnh, điểm yếu, cơ hội và rủi ro để xác định lợi thế truyền thông.',
      },
      {
        title: 'Xác định khách hàng mục tiêu',
        desc: 'Vẽ chân dung khách hàng - độ tuổi, thu nhập, nhu cầu - để target chính xác.',
      },
      {
        title: 'Xây dựng kênh quảng cáo hiệu quả',
        desc: 'Set up Facebook, Google, Zalo Ads với cấu hình tối ưu cho từng phân khúc.',
      },
    ],
  },
  {
    title: 'CONVERSION & SALES SUPPORT',
    icon: TrendingUp,
    items: [
      {
        title: 'Quy trình xử lý lead chuẩn hóa',
        desc: 'SOP rõ ràng từ tiếp nhận đến chốt - không để lead nào rơi rớt.',
      },
      {
        title: 'Xây dựng script bán hàng hiệu quả',
        desc: 'Câu hỏi mở, framework phản biện và kịch bản chốt đã được kiểm chứng.',
      },
      {
        title: 'Kịch bản bám đuổi đa kênh',
        desc: 'Email, SMS, Zalo, call - touchpoint phối hợp để duy trì sự quan tâm.',
      },
      {
        title: 'Đào tạo kỹ năng chốt sales',
        desc: 'Workshop thực chiến và role-play để đội sales nâng tỷ lệ chốt deal.',
      },
    ],
  },
  {
    title: 'DATA & CRM',
    icon: Database,
    items: [
      {
        title: 'Tracking data toàn bộ chiến dịch',
        desc: 'Pixel, UTM, Conversion API - đo lường mọi điểm chạm của khách hàng.',
      },
      {
        title: 'Báo cáo minh bạch theo thời gian thực',
        desc: 'Dashboard live: CPL, CTR, ROI cập nhật từng giờ - không chờ cuối tháng.',
      },
      {
        title: 'Tối ưu chuyển đổi dựa trên số liệu',
        desc: 'A/B test creative, audience và landing page để liên tục giảm chi phí lead.',
      },
      {
        title: 'Quản lý khách hàng chuyên nghiệp',
        desc: 'Phân tầng, gắn tag, nuôi dưỡng tự động trên CRM tích hợp.',
      },
    ],
  },
];

export function Solutions() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section id="giai-phap" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-[#0A2540]" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          <span className="text-[#3FA9B5]">GIẢI PHÁP</span> CHO MÔI GIỚI BẤT ĐỘNG SẢN
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, ci) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="bg-white p-8 rounded-sm border border-[#D4A24C]/20 hover:border-[#D4A24C] transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-[#0A2540] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#D4A24C] transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-headline mb-4 text-[#0A2540]" style={{ fontSize: '24px', fontWeight: 700 }}>
                  {card.title}
                </h3>
                <ul className="space-y-2 text-[#1A1A1A]" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                  {card.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    const isOpen = openKey === key;
                    return (
                      <li key={item.title}>
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          className="w-full flex items-start gap-3 text-left py-1.5 group/item"
                        >
                          <ChevronRight
                            className={`w-4 h-4 text-[#D4A24C] flex-shrink-0 mt-[5px] transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                            strokeWidth={3}
                          />
                          <span className="flex-1 group-hover/item:text-[#D4A24C] transition-colors duration-200">
                            {item.title}
                          </span>
                        </button>
                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p
                              className="pl-6 pr-2 pb-2 text-[#6B7280]"
                              style={{ fontSize: '14px', lineHeight: 1.55 }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
