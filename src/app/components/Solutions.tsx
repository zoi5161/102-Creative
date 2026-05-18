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
        title: 'Nghiên cứu thị trường',
        desc: 'Phân tích quy mô, xu hướng giá và mức độ cạnh tranh của phân khúc bạn đang khai thác.',
      },
      {
        title: 'Phân tích SWOT dự án triển khai',
        desc: 'Soi rõ điểm mạnh, yếu, cơ hội và rủi ro của dự án lẫn đối thủ trong bối cảnh thị trường thực tế.',
      },
      {
        title: 'Nghiên cứu Nhóm khách hàng mục tiêu',
        desc: 'Xác định insight, hành vi và tiêu chí lựa chọn của từng phân khúc khách hàng tiềm năng.',
      },
      {
        title: 'Đề xuất kênh quảng cáo phù hợp',
        desc: 'Chọn lọc Facebook, Google, Zalo, TikTok hay PR theo đúng phễu và ngân sách dự án.',
      },
      {
        title: 'Triển khai và tối ưu hóa',
        desc: 'Set up, vận hành chiến dịch và A/B test liên tục để giảm CPL theo từng tuần.',
      },
    ],
  },
  {
    title: 'CONVERSION & SALES SUPPORT',
    icon: TrendingUp,
    items: [
      {
        title: 'Chuẩn hóa quy trình xử lý lead',
        desc: 'SOP rõ ràng từ tiếp nhận, phân loại đến chuyển sale - không để lead nào rơi rớt.',
      },
      {
        title: 'Cung cấp Script bán hàng',
        desc: 'Câu hỏi mở, framework phản biện và kịch bản chốt deal đã được kiểm chứng thực chiến.',
      },
      {
        title: 'Xây kịch bản bám đuổi đa kênh',
        desc: 'Email, SMS, Zalo, call - touchpoint phối hợp để duy trì quan tâm cho đến khi khách chốt.',
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
    <section
      id="giai-phap"
      className="py-24"
      style={{ background: 'linear-gradient(45deg, #EFF6F5 0%, #F5F5F0 50%, #FBF8F0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-[#0A2540]" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          <span className="text-[#3FA9B5]">GIẢI PHÁP</span> CHO SÀN GIAO DỊCH BẤT ĐỘNG SẢN
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
