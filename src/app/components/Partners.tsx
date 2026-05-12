export function Partners() {
  const partners = [
    'Đất Phương Nam',
    'Phú Khang Holding',
    'Long Hoàng Investment',
    'GPT Land',
    'Việt Á Real',
    'Khải Minh Land',
    'Lương Gia Land',
    'Trendy Realty',
  ];

  return (
    <section className="py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-center mb-4 text-[#0E4D5C]" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800 }}>
          ĐỐI TÁC TIN CẬY
        </h2>
        <div className="w-24 h-1 bg-[#F4A93C] mx-auto mb-16"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm flex items-center justify-center h-32 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-[#F4A93C] group"
            >
              <span className="font-headline text-center text-[#0E4D5C] group-hover:text-[#F4A93C] transition-colors" style={{ fontSize: '18px', fontWeight: 700 }}>
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
