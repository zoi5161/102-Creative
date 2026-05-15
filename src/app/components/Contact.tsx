import { useState } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { ParticleBackground } from './ParticleBackground';

const LEADS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwZhjGLuSSkpIfLmZHACCNOvgrJDm0asy8TAuo34XeoWBFB4G2HgugdKmJxuiwk-ao0/exec';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData,
          userAgent: navigator.userAgent,
        }),
      });
      toast.success('Cảm ơn bạn! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.');
      setFormData({ name: '', phone: '', project: '', message: '' });
    } catch {
      toast.error('Gửi không thành công, vui lòng gọi 0888 40 32 32.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="lien-he" className="relative min-h-screen flex items-center py-24 bg-[#13304A] overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-white" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          Liên hệ <span className="text-[#D4A24C]">tư vấn miễn phí</span> ngay bây giờ
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-30">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-white rounded-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D4A24C] transition-colors"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label className="block text-white mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-white rounded-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D4A24C] transition-colors"
                  placeholder="0888 40 32 32"
                />
              </div>

              <div>
                <label className="block text-white mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Tên dự án
                </label>
                <input
                  type="text"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-white rounded-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D4A24C] transition-colors"
                  placeholder="VD: Blanca City, Thành Đô II..."
                />
              </div>

              <div>
                <label className="block text-white mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Mô tả ngắn
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-white rounded-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D4A24C] transition-colors resize-none"
                  placeholder="Cho chúng tôi biết về nhu cầu của bạn..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-4 bg-[#FF6B35] text-white rounded-sm hover:bg-[#FF8A5C] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontWeight: 600 }}
              >
                {submitting ? 'Đang gửi…' : 'Gửi yêu cầu'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-white mb-8" style={{ fontSize: '28px', fontWeight: 700 }}>
                Thông tin liên hệ
              </h3>
            </div>

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
        </div>
      </div>
    </section>
  );
}
