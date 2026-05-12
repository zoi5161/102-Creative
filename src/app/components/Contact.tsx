import { useState } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cảm ơn bạn! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.');
    setFormData({ name: '', phone: '', project: '', message: '' });
  };

  return (
    <section id="lien-he" className="py-24 bg-[#0E4D5C]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-white" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          Sẵn sàng tạo giao dịch thật cho dự án của bạn?
        </h2>
        <div className="w-24 h-1 bg-[#F4A93C] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12">
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F4A93C] transition-colors"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F4A93C] transition-colors"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F4A93C] transition-colors"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F4A93C] transition-colors resize-none"
                  placeholder="Cho chúng tôi biết về nhu cầu của bạn..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#E55C2D] text-white rounded-sm hover:bg-[#F07A4D] transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontWeight: 600 }}
              >
                Gửi yêu cầu
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
              <div className="w-12 h-12 bg-[#F4A93C] rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 mb-1" style={{ fontSize: '14px' }}>Hotline</p>
                <a href="tel:0888403232" className="text-white hover:text-[#F4A93C] transition-colors" style={{ fontSize: '20px', fontWeight: 600 }}>
                  0888 40 32 32
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F4A93C] rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 mb-1" style={{ fontSize: '14px' }}>Email</p>
                <a href="mailto:Lhi.networking2025@gmail.com" className="text-white hover:text-[#F4A93C] transition-colors break-all" style={{ fontSize: '18px', fontWeight: 600 }}>
                  Lhi.networking2025@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F4A93C] rounded-sm flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 mb-1" style={{ fontSize: '14px' }}>Website</p>
                <a href="https://www.102creative.vn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F4A93C] transition-colors" style={{ fontSize: '20px', fontWeight: 600 }}>
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
