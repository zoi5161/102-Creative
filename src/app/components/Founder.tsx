import ceoPhoto from '@/assets/images/CEO.png';
import quoteMark from '@/assets/images/DauNhay.png';

export function Founder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img
              src={ceoPhoto}
              alt="Mr. Hoàng Phi Long — Founder & CEO 102 Creative"
              className="w-full h-auto rounded-sm"
            />
          </div>

          <div className="md:col-span-3">
            <div className="mb-8">
              <img src={quoteMark} alt="" aria-hidden="true" className="w-12 h-auto mb-4" />
              <p className="font-headline text-[#0A2540] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, lineHeight: 1.3 }}>
                Làm thật – Nói thật – Chịu trách nhiệm thật
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-[#0A2540]" style={{ fontSize: '24px', fontWeight: 700 }}>
                Mr. Hoàng Phi Long
              </h3>
              <p className="text-[#D4A24C]" style={{ fontSize: '16px', fontWeight: 600 }}>
                Founder & CEO
              </p>
              <div className="w-16 h-1 bg-[#D4A24C]"></div>
              <p className="text-[#1A1A1A] leading-relaxed" style={{ fontSize: '17px', lineHeight: 1.6 }}>
                Với <span className="font-semibold" style={{ color: '#D8552B' }}>hơn 10 năm kinh nghiệm</span> trong lĩnh vực
                Marketing và <span className="font-semibold" style={{ color: '#D4A24C' }}>Bất động sản</span>,
                anh <strong style={{ color: '#0A2540' }}>Hoàng Phi Long</strong> đã đồng hành cùng{' '}
                <span className="font-semibold" style={{ color: '#3FA9B5' }}>hàng chục chủ đầu tư và sàn môi giới lớn</span> tại Việt Nam.
              </p>
              <p className="text-[#1A1A1A] leading-relaxed" style={{ fontSize: '17px', lineHeight: 1.6 }}>
                Triết lý kinh doanh của anh là{' '}
                <span className="font-semibold" style={{ color: '#D8552B' }}>sự minh bạch tuyệt đối</span> trong từng con số,
                từng chiến dịch, và luôn đặt{' '}
                <span className="font-semibold" style={{ color: '#D4A24C' }}>lợi ích của khách hàng</span> lên hàng đầu.{' '}
                <span className="font-semibold italic" style={{ color: '#7E2D3B' }}>"Marketing không chỉ là quảng cáo, mà là việc tạo ra giá trị thực cho doanh nghiệp."</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
