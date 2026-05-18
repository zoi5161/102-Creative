import { Phone, Mail, Globe } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import contactImage from '@/assets/images/contact.jpg';

export function Contact() {
  return (
    <section id="lien-he" className="relative flex items-center py-20 bg-[#13304A] overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <h2 className="font-headline text-center mb-4 text-white" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          Thông tin liên hệ
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4A24C] rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 mb-1" style={{ fontSize: '14px' }}>Hotline</p>
                <a href="tel:0888403232" className="text-white hover:text-[#D4A24C] transition-colors" style={{ fontSize: '20px', fontWeight: 600 }}>
                  0888 40 32 32
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4A24C] rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 mb-1" style={{ fontSize: '14px' }}>Email</p>
                <a href="mailto:Lhi.networking2025@gmail.com" className="text-white hover:text-[#D4A24C] transition-colors break-all" style={{ fontSize: '18px', fontWeight: 600 }}>
                  Lhi.networking2025@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4A24C] rounded-sm flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 mb-1" style={{ fontSize: '14px' }}>Website</p>
                <a href="https://www.102creative.vn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4A24C] transition-colors" style={{ fontSize: '20px', fontWeight: 600 }}>
                  www.102creative.vn
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80 leading-relaxed" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                Chúng tôi cam kết phản hồi trong vòng 24 giờ làm việc. Mọi thông tin của bạn
                sẽ được bảo mật tuyệt đối theo chính sách riêng tư của 102 CREATIVE.
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <img
              src={contactImage}
              alt="102 Creative - Liên hệ tư vấn"
              className="w-full h-auto rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
