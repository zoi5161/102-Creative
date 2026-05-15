import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import datPhuongNam from '@/assets/images/partners/DatPhuongNam.png';
import phuKhangHolding from '@/assets/images/partners/PhuKhangHolding.png';
import longHoangInvestment from '@/assets/images/partners/LongHoangInvestment.png';
import gptLand from '@/assets/images/partners/GPTLand.png';
import vietAReal from '@/assets/images/partners/VietAReal.png';
import khaiMinhLand from '@/assets/images/partners/KhaiMinhLand.png';
import luongGiaLand from '@/assets/images/partners/LuongGiaLand.png';
import trendRealty from '@/assets/images/partners/TrendRealty.png';

type Partner = { name: string; logo: string; url: string };
type Layout = { columnsVisible: number; rowsPerColumn: number };

const partners: Partner[] = [
  { name: 'Đất Phương Nam', logo: datPhuongNam, url: 'https://dpnr.vn/' },
  { name: 'Phú Khang Holding', logo: phuKhangHolding, url: 'https://www.facebook.com/p/Ph%C3%BA-Khang-Holdings-61579000707227/' },
  { name: 'Long Hoàng Investment', logo: longHoangInvestment, url: 'https://longhoanginvestment.vn/' },
  { name: 'GPT Land', logo: gptLand, url: 'https://www.gptland.vn/' },
  { name: 'Việt Á Real', logo: vietAReal, url: 'https://vietareal.vn/' },
  { name: 'Khải Minh Land', logo: khaiMinhLand, url: 'https://khaiminhland.vn/' },
  { name: 'Lương Gia Land', logo: luongGiaLand, url: 'https://luonggialand.com/' },
  { name: 'Trendy Realty', logo: trendRealty, url: 'https://www.trendrealty.vn/' },
];

const ROTATE_INTERVAL_MS = 4000;
const DESKTOP_LAYOUT: Layout = { columnsVisible: 5, rowsPerColumn: 1 }; // ≥ lg: 5-in-a-row
const MOBILE_LAYOUT: Layout = { columnsVisible: 2, rowsPerColumn: 2 };  // < lg: 2×2

function getLayout(width: number): Layout {
  return width >= 1024 ? DESKTOP_LAYOUT : MOBILE_LAYOUT;
}

export function Partners() {
  const [start, setStart] = useState(0);
  const [layout, setLayout] = useState<Layout>(() =>
    typeof window === 'undefined' ? DESKTOP_LAYOUT : getLayout(window.innerWidth)
  );

  useEffect(() => {
    const onResize = () => setLayout(getLayout(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((s) => (s + layout.rowsPerColumn) % partners.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [layout.rowsPerColumn]);

  const at = (i: number) => partners[(start + i) % partners.length];

  const columns: Partner[][] = [];
  for (let c = 0; c < layout.columnsVisible; c++) {
    const col: Partner[] = [];
    for (let r = 0; r < layout.rowsPerColumn; r++) {
      col.push(at(c * layout.rowsPerColumn + r));
    }
    columns.push(col);
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-[#0A2540]" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          <span className="text-[#D8552B]">Khách hàng nổi bật</span> của 102 Creative
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-8"></div>
        <p
          className="text-center text-[#1A1A1A] max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{ fontSize: '17px', lineHeight: 1.6 }}
        >
          Niềm tin từ những thương hiệu hàng đầu chính là minh chứng sống động cho chất lượng dịch vụ và uy tín mà 102 Creative không ngừng vun đắp qua từng dự án.
        </p>
      </div>

      <div className="max-w-7xl lg:max-w-[1800px] mx-auto px-6">
        <div className="overflow-hidden">
          <div className="flex gap-4 sm:gap-6 lg:gap-10">
            <AnimatePresence mode="popLayout" initial={false}>
              {columns.map((col) => (
                <motion.div
                  key={col.map((p) => p.name).join('__')}
                  layout
                  initial={{ opacity: 0, x: 240 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -240 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6 lg:gap-10 bg-[#F5F5F0]"
                >
                  {col.map((partner) => (
                    <LogoCard key={partner.name} partner={partner} />
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Xem website ${partner.name}`}
      className="relative bg-[#F5F5F0] p-4 sm:p-6 lg:p-8 rounded-sm flex items-center justify-center h-28 sm:h-36 lg:h-48 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-[#D4A24C] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
    >
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        className="max-h-full max-w-full w-auto h-auto object-contain"
      />
    </a>
  );
}
