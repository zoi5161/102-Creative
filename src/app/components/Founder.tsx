import { ImageWithFallback } from './figma/ImageWithFallback';

export function Founder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMENFTyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODU2Njg1MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Founder Hoàng Phi Long"
              className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="md:col-span-3">
            <div className="mb-8">
              <div className="text-[#F4A93C] mb-4" style={{ fontSize: '64px', lineHeight: 1 }}>"</div>
              <p className="font-headline text-[#0E4D5C] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, lineHeight: 1.3 }}>
                Làm thật – Nói thật – Chịu trách nhiệm thật
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-[#0E4D5C]" style={{ fontSize: '24px', fontWeight: 700 }}>
                Mr. Hoàng Phi Long
              </h3>
              <p className="text-[#F4A93C]" style={{ fontSize: '16px', fontWeight: 600 }}>
                Founder & CEO
              </p>
              <div className="w-16 h-1 bg-[#F4A93C]"></div>
              <p className="text-[#1A1A1A] leading-relaxed" style={{ fontSize: '17px', lineHeight: 1.6 }}>
                Với hơn 10 năm kinh nghiệm trong lĩnh vực Marketing và Bất động sản,
                anh Hoàng Phi Long đã đồng hành cùng hàng chục chủ đầu tư và sàn môi giới
                lớn tại Việt Nam.
              </p>
              <p className="text-[#1A1A1A] leading-relaxed" style={{ fontSize: '17px', lineHeight: 1.6 }}>
                Triết lý kinh doanh của anh là sự minh bạch tuyệt đối trong từng con số,
                từng chiến dịch, và luôn đặt lợi ích của khách hàng lên hàng đầu.
                "Marketing không chỉ là quảng cáo, mà là việc tạo ra giá trị thực cho doanh nghiệp."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
