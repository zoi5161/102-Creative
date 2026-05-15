import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { toast } from 'sonner';

const LEADS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxtHFDs97VLdpGVYwDO2LPNuXKvABISw0lUtI_rEj_SNRZrTcQFSabU9IbK1IA-iAjN/exec';

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
      <ContactBackground />
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

/* Mạng lưới hạt động — particles trôi tự do trên canvas, nối với nhau bằng dây khi gần nhau.
   Cảm giác data/network 3D, phù hợp brand marketing — chuyển động chậm, không gây xao nhãng form. */
function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();

    type Particle = {
      x: number; y: number;
      tx: number; ty: number;
      vx: number; vy: number;
      r: number; pushCount: number;
    };
    const PARTICLE_COUNT = 70;
    const MAX_DIST = 140;
    const MOUSE_RADIUS = 180;
    const MOUSE_BOOST = 7;
    const CLICK_RADIUS = 180;
    const CLICK_STEP = 32;
    const MAX_PUSH = 4;
    const EASE = 0.08;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x, y, tx: x, ty: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.6,
        pushCount: 0,
      };
    });

    let mouse: { x: number; y: number } | null = null;

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        mouse = null;
        return;
      }
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse = null; };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, button, select, label, a, form')) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      for (const p of particles) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const d2 = dx * dx + dy * dy;
        if (d2 < CLICK_RADIUS * CLICK_RADIUS) {
          if (p.pushCount < MAX_PUSH) {
            const dist = Math.sqrt(d2) || 1;
            const nx = dx / dist;
            const ny = dy / dist;
            p.tx = Math.max(0, Math.min(width, p.tx + nx * CLICK_STEP));
            p.ty = Math.max(0, Math.min(height, p.ty + ny * CLICK_STEP));
            p.pushCount += 1;
          }
        } else {
          p.pushCount = 0;
        }
      }
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.tx += p.vx;
        p.ty += p.vy;
        if (p.tx < 0) { p.tx = 0; p.vx *= -1; }
        if (p.tx > width) { p.tx = width; p.vx *= -1; }
        if (p.ty < 0) { p.ty = 0; p.vy *= -1; }
        if (p.ty > height) { p.ty = height; p.vy *= -1; }
        p.x += (p.tx - p.x) * EASE;
        p.y += (p.ty - p.y) * EASE;
      }

      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX_DIST * MAX_DIST) {
            const dist = Math.sqrt(d2);
            const alpha = (1 - dist / MAX_DIST) * 0.7;
            ctx.strokeStyle = `rgba(220, 228, 240, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      for (const p of particles) {
        let r = p.r;
        if (mouse) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const md2 = mdx * mdx + mdy * mdy;
          if (md2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            const md = Math.sqrt(md2);
            r += (1 - md / MOUSE_RADIUS) * MOUSE_BOOST;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 800px 500px at 20% 20%, rgba(212,162,76,0.14) 0%, transparent 60%), radial-gradient(ellipse 800px 500px at 80% 80%, rgba(212,162,76,0.10) 0%, transparent 60%)',
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
