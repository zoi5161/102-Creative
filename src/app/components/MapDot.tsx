import { useEffect, useState } from 'react';

export interface MapDotProps {
  id: string;
  name: string;
  top: string;
  left: string;
  infoImage: string;
  infoTitle: string;
  infoLocation: string;
  infoInvestor: string;
}

export function MapDot({
  id,
  name,
  top,
  left,
  infoImage,
  infoTitle,
  infoLocation,
  infoInvestor,
}: MapDotProps) {
  const [hovered, setHovered] = useState(false);
  const [shifted, setShifted] = useState(false);

  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => setShifted(true), 500);
      return () => clearTimeout(timer);
    }
    setShifted(false);
  }, [hovered]);

  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${hovered ? 'z-50' : 'z-10'}`}
      style={{ top, left }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        aria-label={name}
        aria-describedby={`tooltip-${id}`}
        className="map-dot-pulse block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4A24C] ring-1 ring-white shadow-sm hover:scale-150 transition-transform duration-200"
      />

      <div
        id={`tooltip-${id}`}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-64 md:w-80 z-30"
      >
        <div
          className={`bg-white rounded-md shadow-xl border border-black/5 overflow-hidden transition-all duration-300 ease-out ${
            hovered ? 'opacity-100' : 'opacity-0'
          } ${
            shifted ? 'translate-x-3' : 'translate-x-0'
          }`}
        >
          <div className="aspect-[16/10] w-full overflow-hidden bg-[#F5F5F0]">
            <img
              src={infoImage}
              alt={infoTitle}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h4
              className="font-headline text-[#0A2540] mb-1.5 leading-tight"
              style={{ fontSize: '18px', fontWeight: 700 }}
            >
              {infoTitle}
            </h4>
            <p className="text-[#6B7280] mb-1" style={{ fontSize: '14px' }}>
              {infoLocation}
            </p>
            <p className="text-[#D4A24C] whitespace-pre-line" style={{ fontSize: '14px', fontWeight: 600 }}>
              {infoInvestor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
