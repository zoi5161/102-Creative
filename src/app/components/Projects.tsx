import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, Map as MapIcon } from 'lucide-react';

import mapImage from '@/assets/images/BanDo.png';
import thanhDoII from '@/assets/images/projects/ThanhDoII.jpg';
import blancaCity from '@/assets/images/projects/BlancaCity.webp';
import maisonGrand from '@/assets/images/projects/MaisonGrand.webp';
import lapuRa from '@/assets/images/projects/Lapura.jpg';
import fiatoAirportCity from '@/assets/images/projects/FiatoAirportCity.jpg';
import artStella from '@/assets/images/projects/ArtStella.jpg';
import theAspira from '@/assets/images/projects/TheAspira.png';
import atSaigonRiverside from '@/assets/images/projects/A&TSaigonRiverside.jpg';
import charmLongHai from '@/assets/images/projects/CharmLongHai.jpeg';
import giaKhaiLuxury from '@/assets/images/projects/GiaKhaiLuxury.jpg';
import sunshineCitySaigon from '@/assets/images/projects/SunshineCitySaigon.jpg';
import ttMillenniaCityVAR from '@/assets/images/projects/T&TMillenniaCity-VietALand.jpg';
import ttMillenniaCityKML from '@/assets/images/projects/T&TMillenniaCity-KhaiMinhLand.jpg';
import dragonEden from '@/assets/images/projects/DragonEden.png';
import avaCenter from '@/assets/images/projects/AvaCenter.jpg';
import theGlobalCity from '@/assets/images/projects/TheGlobalCity.jpg';
import eliteLife from '@/assets/images/projects/EliteLife.jpg';
import theWinCity from '@/assets/images/projects/TheWinCity.jpg';
import destinoCentro from '@/assets/images/projects/DestinoCentro.jpg';
import khaiHoanPrime from '@/assets/images/projects/KhaiHoanPrime.jpeg';
import khuDanCuBinhChanh from '@/assets/images/projects/KhuDanCuBinhChanh.jpg';
import diamondSky from '@/assets/images/projects/DiamondSky.jpeg';
import khaiHoanImperial from '@/assets/images/projects/KhaiHoanImperial.jpg';
import vinhomesGrandPark from '@/assets/images/projects/VinhomesGrandPark.jpg';
import theLegacy66 from '@/assets/images/projects/TheLegacy66.webp';
import theEmeraldBoulevard from '@/assets/images/projects/TheEmeraldBoulevard.jpeg';

import { MapDot } from './MapDot';

type Project = {
  id: string;
  name: string;
  area: string;
  partner: string;
  image: string;
  /** Toạ độ phần trăm trên BanDo.png — tinh chỉnh thủ công theo vị trí thật. */
  coords: { top: string; left: string };
};

const projects: Project[] = [
  { id: 'thanh-do-ii', name: 'Thành Đô II', area: 'Quận 12, TP. HCM', partner: 'Đất Phương Nam', image: thanhDoII, coords: { top: '59%', left: '45.5%' } },
  { id: 'blanca-city', name: 'Blanca City', area: 'Vũng Tàu', partner: 'Đất Phương Nam', image: blancaCity, coords: { top: '94%', left: '63%' } },
  { id: 'maison-grand', name: 'Maison Grand', area: 'Phú Mỹ, Vũng Tàu', partner: 'Phú Khang Holding', image: maisonGrand, coords: { top: '80%', left: '60%' } },
  { id: 'lapu-ra', name: 'Lapu Ra', area: 'Bình Dương', partner: 'Long Hoàng Investment', image: lapuRa, coords: { top: '55%', left: '46.5%' } },
  { id: 'fiato-airport-city', name: 'Fiato Airport City', area: 'Nhơn Trạch, Đồng Nai', partner: 'Long Hoàng Investment', image: fiatoAirportCity, coords: { top: '68%', left: '57%' } },
  { id: 'art-stella', name: 'Art Stella', area: 'Bình Dương', partner: 'Đất Phương Nam', image: artStella, coords: { top: '57%', left: '51.5%' } },
  { id: 'the-aspira', name: 'The Aspira', area: 'Bình Dương', partner: 'Đất Phương Nam', image: theAspira, coords: { top: '54.5%', left: '49%' } },
  { id: 'at-saigon-riverside', name: 'A&T Saigon Riverside', area: 'Bình Dương', partner: 'GPT Land', image: atSaigonRiverside, coords: { top: '58.75%', left: '46.25%' } },
  { id: 'charm-long-hai', name: 'Charm Long Hải', area: 'Long Hải, Vũng Tàu', partner: 'GPT Land', image: charmLongHai, coords: { top: '93%', left: '68.5%' } },
  { id: 'gia-khai-luxury', name: 'Gia Khải Luxury', area: 'Bình Dương', partner: 'Đất Phương Nam', image: giaKhaiLuxury, coords: { top: '42%', left: '40.5%' } },
  { id: 'sunshine-city-saigon', name: 'Sunshine City Saigon', area: 'TP. HCM', partner: 'Việt Á Real', image: sunshineCitySaigon, coords: { top: '70%', left: '47.25%' } },
  { id: 'tt-millennia-city-var', name: 'T&T Millennia City', area: 'Long An', partner: 'Việt Á Real', image: ttMillenniaCityVAR, coords: { top: '74.75%', left: '46%' } },
  { id: 'tt-millennia-city-kml', name: 'T&T Millennia City', area: 'Long An', partner: 'Khải Minh Land', image: ttMillenniaCityKML, coords: { top: '74.75%', left: '46%' } },
  { id: 'dragon-eden', name: 'Dragon Eden', area: 'Long An', partner: 'Lương Gia Land', image: dragonEden, coords: { top: '68.5%', left: '36.5%' } },
  { id: 'ava-center', name: 'Ava Center', area: 'Bình Dương', partner: 'Trendy Realty', image: avaCenter, coords: { top: '53%', left: '45.65%' } },
  { id: 'the-global-city', name: 'The Global City', area: 'TP. HCM', partner: 'Khải Minh Land', image: theGlobalCity, coords: { top: '64%', left: '49.25%' } },
  { id: 'elite-life', name: 'Elite Life', area: 'Long An', partner: 'Việt Á Real', image: eliteLife, coords: { top: '74.75%', left: '46.5%' } },
  { id: 'dragon-eden-dpn', name: 'Dragon Eden', area: 'Long An', partner: 'Đất Phương Nam', image: dragonEden, coords: { top: '68.5%', left: '36.5%' } },
  { id: 'the-win-city', name: 'The Win City', area: 'Long An', partner: 'Lương Gia Land', image: theWinCity, coords: { top: '65%', left: '37%' } },
  { id: 'destino-centro', name: 'Destino Centro', area: 'Long An', partner: 'Thiên Phúc', image: destinoCentro, coords: { top: '62%', left: '38%' } },
  { id: 'the-global-city-thien-phuc', name: 'The Global City', area: 'TP. HCM', partner: 'Thiên Phúc Group', image: theGlobalCity, coords: { top: '64%', left: '49.25%' } },
  { id: 'khai-hoan-prime', name: 'Khải Hoàn Prime', area: 'TP. HCM', partner: 'Khải Minh Land', image: khaiHoanPrime, coords: { top: '72%', left: '46%' } },
  { id: 'khu-dan-cu-binh-chanh', name: 'Khu dân cư Bình Chánh', area: 'TP. HCM', partner: 'Việt Á Real', image: khuDanCuBinhChanh, coords: { top: '72%', left: '44%' } },
  { id: 'diamond-sky', name: 'Diamond Sky', area: 'TP. HCM', partner: 'Phú Khang Holding', image: diamondSky, coords: { top: '60.5%', left: '46.5%' } },
  { id: 'the-global-city-nextland', name: 'The Global City', area: 'TP. HCM', partner: 'NextLand', image: theGlobalCity, coords: { top: '64%', left: '49.25%' } },
  { id: 'khai-hoan-imperial', name: 'Khải Hoàn Imperial', area: 'Bình Dương', partner: 'Khải Minh Land', image: khaiHoanImperial, coords: { top: '54.5%', left: '47%' } },
  { id: 'vinhomes-grand-park', name: 'Vinhomes Grand Park', area: 'TP. HCM', partner: 'Minh Long Investment', image: vinhomesGrandPark, coords: { top: '60.75%', left: '52%' } },
  { id: 'the-legacy-66', name: 'The Legacy 66', area: 'TP. HCM', partner: 'Đất Phương Nam', image: theLegacy66, coords: { top: '67%', left: '45%' } },
  { id: 'the-emerald-boulevard', name: 'The Emerald Boulevard', area: 'Bình Dương', partner: 'Phú Khang Holding', image: theEmeraldBoulevard, coords: { top: '51%', left: '45.5%' } },
];

const FILTERS = ['Tất cả', 'HCM', 'Bình Dương', 'Vũng Tàu', 'Long An', 'Đồng Nai'];

function getPageSize(width: number) {
  return width < 768 ? 3 : 4;
}

export function Projects() {
  const [filter, setFilter] = useState('Tất cả');
  const [page, setPage] = useState(0);
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [pageSize, setPageSize] = useState(() =>
    typeof window === 'undefined' ? 4 : getPageSize(window.innerWidth)
  );
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const onResize = () => setPageSize(getPageSize(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const filteredProjects = filter === 'Tất cả'
    ? projects
    : projects.filter((p) => p.area.includes(filter));

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const visibleProjects = filteredProjects.slice(page * pageSize, (page + 1) * pageSize);

  useEffect(() => {
    setPage(0);
  }, [filter]);

  useEffect(() => {
    const maxPage = Math.max(0, Math.ceil(filteredProjects.length / pageSize) - 1);
    if (page > maxPage) setPage(maxPage);
  }, [pageSize, filteredProjects.length, page]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.innerWidth < 768) {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [page]);

  return (
    <section id="du-an" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-[#0A2540]" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          <span className="text-[#7E2D3B]">DỰ ÁN BẤT ĐỘNG SẢN</span> ĐÃ TRIỂN KHAI
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-8"></div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {FILTERS.map((area) => (
            <button
              key={area}
              onClick={() => setFilter(area)}
              className={`px-6 py-2 rounded-sm transition-all duration-300 ${
                filter === area
                  ? 'bg-[#0A2540] text-white'
                  : 'bg-[#F5F5F0] text-[#1A1A1A] hover:bg-[#D4A24C] hover:text-white'
              }`}
              style={{ fontWeight: 600 }}
            >
              {area}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-sm border border-[#0A2540]/20 overflow-hidden" role="tablist" aria-label="Chế độ xem dự án">
            <button
              type="button"
              role="tab"
              aria-selected={view === 'grid'}
              onClick={() => setView('grid')}
              className={`flex items-center gap-2 px-5 py-2 transition-colors duration-300 ${
                view === 'grid'
                  ? 'bg-[#0A2540] text-white'
                  : 'bg-white text-[#0A2540] hover:bg-[#F5F5F0]'
              }`}
              style={{ fontWeight: 600, fontSize: '15px' }}
            >
              <LayoutGrid className="w-4 h-4" />
              Dạng lưới
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === 'map'}
              onClick={() => setView('map')}
              className={`flex items-center gap-2 px-5 py-2 transition-colors duration-300 ${
                view === 'map'
                  ? 'bg-[#0A2540] text-white'
                  : 'bg-white text-[#0A2540] hover:bg-[#F5F5F0]'
              }`}
              style={{ fontWeight: 600, fontSize: '15px' }}
            >
              <MapIcon className="w-4 h-4" />
              Dạng bản đồ
            </button>
          </div>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="max-w-[1700px] mx-auto px-6">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 scroll-mt-32">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#D4A24C]"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-[#0A2540] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
                    {project.name}
                  </h3>
                  <p className="text-[#6B7280] mb-1" style={{ fontSize: '16px' }}>
                    {project.area}
                  </p>
                  <p className="text-[#D4A24C]" style={{ fontSize: '16px', fontWeight: 600 }}>
                    {project.partner}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Trang trước"
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-[#0A2540]/20 text-[#0A2540] hover:bg-[#0A2540] hover:text-white hover:border-[#0A2540] transition-colors duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#0A2540]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Trang ${i + 1}`}
                  aria-current={page === i ? 'page' : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-sm transition-colors duration-300 ${
                    page === i
                      ? 'bg-[#0A2540] text-white'
                      : 'border border-[#0A2540]/20 text-[#0A2540] hover:bg-[#D4A24C] hover:text-white hover:border-[#D4A24C]'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                aria-label="Trang sau"
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-[#0A2540]/20 text-[#0A2540] hover:bg-[#0A2540] hover:text-white hover:border-[#0A2540] transition-colors duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#0A2540]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative w-full rounded-md overflow-visible shadow-md border border-black/5 bg-[#F5F5F0]">
            <div className="relative">
              <img
                src={mapImage}
                alt="Bản đồ vị trí dự án — khu vực TP. HCM và lân cận"
                className="w-full h-auto block select-none"
                style={{ filter: 'brightness(1.15) saturate(0.85)' }}
              />
              {(() => {
                const groups = new Map<string, Project[]>();
                filteredProjects.forEach((p) => {
                  const key = `${p.coords.top}-${p.coords.left}`;
                  const arr = groups.get(key) ?? [];
                  arr.push(p);
                  groups.set(key, arr);
                });
                return Array.from(groups.values()).map((group) => {
                  const first = group[0];
                  const partners = group.map((p) => p.partner).join('\n');
                  return (
                    <MapDot
                      key={first.id}
                      id={first.id}
                      name={first.name}
                      top={first.coords.top}
                      left={first.coords.left}
                      infoImage={first.image}
                      infoTitle={first.name}
                      infoLocation={first.area}
                      infoInvestor={partners}
                    />
                  );
                });
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
