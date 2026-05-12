import { Target, TrendingUp, Database } from 'lucide-react';

export function Solutions() {
  return (
    <section id="giai-phap" className="py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-[#0E4D5C]" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          GIẢI PHÁP CHO MÔI GIỚI BẤT ĐỘNG SẢN
        </h2>
        <div className="w-24 h-1 bg-[#F4A93C] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm border border-[#F4A93C]/20 hover:border-[#F4A93C] transition-all duration-300 hover:shadow-xl group">
            <div className="w-16 h-16 bg-[#0E4D5C] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#F4A93C] transition-all duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-headline mb-4 text-[#0E4D5C]" style={{ fontSize: '24px', fontWeight: 700 }}>
              LEAD GENERATION
            </h3>
            <ul className="space-y-3 text-[#1A1A1A]" style={{ fontSize: '16px', lineHeight: 1.6 }}>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Nghiên cứu thị trường & đối thủ cạnh tranh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Phân tích SWOT dự án</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Xác định khách hàng mục tiêu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Xây dựng kênh quảng cáo hiệu quả</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-sm border border-[#F4A93C]/20 hover:border-[#F4A93C] transition-all duration-300 hover:shadow-xl group">
            <div className="w-16 h-16 bg-[#0E4D5C] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#F4A93C] transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-headline mb-4 text-[#0E4D5C]" style={{ fontSize: '24px', fontWeight: 700 }}>
              CONVERSION & SALES SUPPORT
            </h3>
            <ul className="space-y-3 text-[#1A1A1A]" style={{ fontSize: '16px', lineHeight: 1.6 }}>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Quy trình xử lý lead chuẩn hóa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Xây dựng script bán hàng hiệu quả</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Kịch bản bám đuổi đa kênh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Đào tạo kỹ năng chốt sales</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-sm border border-[#F4A93C]/20 hover:border-[#F4A93C] transition-all duration-300 hover:shadow-xl group">
            <div className="w-16 h-16 bg-[#0E4D5C] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#F4A93C] transition-all duration-300">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-headline mb-4 text-[#0E4D5C]" style={{ fontSize: '24px', fontWeight: 700 }}>
              DATA & CRM
            </h3>
            <ul className="space-y-3 text-[#1A1A1A]" style={{ fontSize: '16px', lineHeight: 1.6 }}>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Tracking data toàn bộ chiến dịch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Báo cáo minh bạch theo thời gian thực</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Tối ưu chuyển đổi dựa trên số liệu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F4A93C] mt-1 flex-shrink-0">▸</span>
                <span>Quản lý khách hàng chuyên nghiệp</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
