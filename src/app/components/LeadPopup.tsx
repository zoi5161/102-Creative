import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const ZALO_URL = 'https://zalo.me/0888403232';
const DELAY_MS = 8000;
const SESSION_KEY = '102_lead_popup_closed';

export function LeadPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      <div
        className="relative z-10 w-full max-w-md rounded-xl p-8 text-center shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #0A2540 0%, #13304A 100%)',
          border: '2px dashed rgba(212,162,76,0.6)',
        }}
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div
          className="inline-block px-4 py-1 rounded-full mb-5 text-[#0A2540] font-bold"
          style={{ backgroundColor: '#D4A24C', fontSize: '12px', letterSpacing: '0.08em' }}
        >
          102 CREATIVE
        </div>

        <h2
          className="font-headline text-white mb-8 leading-tight"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 800, lineHeight: 1.3 }}
        >
          Sếp đã sẵn sàng lên chiến dịch<br />
          <span style={{ color: '#D4A24C' }}>thu 1.000 Lead đầu tiên</span><br />
          cho mình chưa?
        </h2>

        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="flex items-center justify-center gap-3 w-full py-4 rounded-lg text-white font-bold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: '#0068FF', fontSize: '16px', fontWeight: 700 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.906 1.378 5.504 3.538 7.24L4.5 22l3.658-1.88A10.56 10.56 0 0 0 12 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2Z"/>
          </svg>
          Kết nối Zalo Công ty
        </a>

        <p className="text-white/40 mt-4" style={{ fontSize: '12px' }}>
          Phản hồi trong vòng 30 phút trong giờ hành chính
        </p>
      </div>
    </div>
  );
}
