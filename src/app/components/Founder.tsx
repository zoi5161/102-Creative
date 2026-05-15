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
                Ông <strong style={{ color: '#0A2540' }}>Hoàng Phi Long</strong> là{' '}
                <span className="font-semibold" style={{ color: '#D8552B' }}>nhà sáng lập và điều hành 102 Creative</span>, đồng thời là người có{' '}
                <span className="font-semibold" style={{ color: '#D4A24C' }}>hơn 10 năm kinh nghiệm thực chiến</span> trong lĩnh vực{' '}
                <span className="font-semibold" style={{ color: '#3FA9B5' }}>bất động sản và marketing</span>.
              </p>
              <p className="text-[#1A1A1A] leading-relaxed" style={{ fontSize: '17px', lineHeight: 1.6 }}>
                Dưới vai trò người đứng đầu, ông định hướng <strong style={{ color: '#0A2540' }}>102 Creative</strong> trở thành đơn vị{' '}
                <span className="font-semibold" style={{ color: '#D8552B' }}>không chỉ cung cấp giải pháp marketing</span>, mà còn đồng hành cùng doanh nghiệp trong việc{' '}
                <span className="font-semibold" style={{ color: '#D4A24C' }}>nâng cao tư duy quản trị</span>,{' '}
                <span className="font-semibold" style={{ color: '#3FA9B5' }}>xây dựng hệ thống bán hàng</span> và{' '}
                <span className="font-semibold italic" style={{ color: '#7E2D3B' }}>phát triển đội ngũ bền vững</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
