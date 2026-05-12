import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  { name: 'Thành Đô II', area: 'Quận 12, TP. HCM', partner: 'Đất Phương Nam', image: 'https://images.unsplash.com/photo-1774063539721-a7f4b63c0cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Blanca City', area: 'Vũng Tàu', partner: 'Đất Phương Nam', image: 'https://images.unsplash.com/photo-1590855639250-5e9a52395cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Maison Grand', area: 'Phú Mỹ, Vũng Tàu', partner: 'Phú Khang Holding', image: 'https://images.unsplash.com/photo-1740029728221-eb81d6b49aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Lapu Ra', area: 'Bình Dương', partner: 'Long Hoàng Investment', image: 'https://images.unsplash.com/photo-1643376452268-b78979edbc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Fiato Airport City', area: 'Nhơn Trạch, Đồng Nai', partner: 'Long Hoàng Investment', image: 'https://images.unsplash.com/photo-1740102411841-531ed7d017a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Art Stella', area: 'Bình Dương', partner: 'Đất Phương Nam', image: 'https://images.unsplash.com/photo-1702902111874-8181f1e36269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'The Aspira', area: 'Bình Dương', partner: 'Đất Phương Nam', image: 'https://images.unsplash.com/photo-1740029728407-f01e21a4eb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'A&T Saigon Riverside', area: 'Bình Dương', partner: 'GPT Land', image: 'https://images.unsplash.com/photo-1740029728424-c4b0589d7804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Charm Long Hải', area: 'Long Hải, Vũng Tàu', partner: 'GPT Land', image: 'https://images.unsplash.com/photo-1691058427531-4b4ce41dc356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Gia Khải Luxury', area: 'Bình Dương', partner: 'Đất Phương Nam', image: 'https://images.unsplash.com/photo-1714404192558-98450f8fb4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Sunshine City Saigon', area: 'TP. HCM', partner: 'Việt Á Real', image: 'https://images.unsplash.com/photo-1774063539721-a7f4b63c0cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'T&T Millennia City', area: 'Long An', partner: 'Việt Á Real', image: 'https://images.unsplash.com/photo-1590855639250-5e9a52395cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'T&T Millennia City', area: 'Long An', partner: 'Khải Minh Land', image: 'https://images.unsplash.com/photo-1740029728221-eb81d6b49aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Dragon Eden', area: 'Long An', partner: 'Lương Gia Land', image: 'https://images.unsplash.com/photo-1643376452268-b78979edbc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'Ava Center', area: 'Bình Dương', partner: 'Trendy Realty', image: 'https://images.unsplash.com/photo-1740102411841-531ed7d017a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
  { name: 'The Global City', area: 'TP. HCM', partner: 'Khải Minh Land', image: 'https://images.unsplash.com/photo-1702902111874-8181f1e36269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
];

export function Projects() {
  const [filter, setFilter] = useState('Tất cả');

  const filteredProjects = filter === 'Tất cả'
    ? projects
    : projects.filter(p => p.area.includes(filter));

  return (
    <section id="du-an" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-[#0E4D5C]" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          16 DỰ ÁN BẤT ĐỘNG SẢN ĐÃ TRIỂN KHAI
        </h2>
        <div className="w-24 h-1 bg-[#F4A93C] mx-auto mb-8"></div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Tất cả', 'HCM', 'Bình Dương', 'Vũng Tàu', 'Long An', 'Đồng Nai'].map((area) => (
            <button
              key={area}
              onClick={() => setFilter(area)}
              className={`px-6 py-2 rounded-sm transition-all duration-300 ${
                filter === area
                  ? 'bg-[#0E4D5C] text-white'
                  : 'bg-[#F8F6F0] text-[#1A1A1A] hover:bg-[#F4A93C] hover:text-white'
              }`}
              style={{ fontWeight: 600 }}
            >
              {area}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#F4A93C]"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="font-headline text-[#0E4D5C] mb-2" style={{ fontSize: '18px', fontWeight: 700 }}>
                  {project.name}
                </h3>
                <p className="text-[#6B7280] mb-1" style={{ fontSize: '14px' }}>
                  {project.area}
                </p>
                <p className="text-[#F4A93C]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {project.partner}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
