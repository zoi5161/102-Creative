import missionImg from '@/assets/images/mission.jpg';
import visionImg from '@/assets/images/vision.jpg';
import competitivenessImg from '@/assets/images/competitiveness.jpg';

const cards = [
  {
    image: missionImg,
    title: 'SỨ MỆNH',
    content:
      'Đồng hành cùng các chủ đầu tư và sàn môi giới Bất động sản trong việc xây dựng hệ thống Marketing bền vững, tạo ra doanh thu thực tế và phát triển thương hiệu chuyên nghiệp trên thị trường.',
  },
  {
    image: visionImg,
    title: 'TẦM NHÌN 2030',
    content:
      'Trở thành đơn vị tiên phong trong lĩnh vực Marketing Bất động sản tại Việt Nam, được công nhận bởi chất lượng dịch vụ vượt trội và cam kết tạo ra giá trị thực cho mỗi đối tác.',
  },
  {
    image: competitivenessImg,
    title: 'NĂNG LỰC CẠNH TRANH',
    content:
      'Hiểu sâu thị trường BĐS, Marketing gắn liền với Sales theo phương pháp Mindset – Skillset – Toolset – Result. Chính trực, minh bạch và cam kết đào tạo đội ngũ chuyên nghiệp.',
  },
];

export function Values() {
  return (
    <section className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="font-headline text-center mb-4 text-[#1A1A1A]"
          style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 800, lineHeight: 1.3 }}
        >
          Tại sao <span className="text-[#D4A24C]">chọn 102 Creative</span> là đơn vị hợp tác?
        </h2>
        <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-8"></div>
        <p
          className="text-center text-[#1A1A1A] max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{ fontSize: '17px', lineHeight: 1.6 }}
        >
          Hoạt động như cánh tay marketing nối dài của doanh nghiệp, 102 Creative đồng hành từ chiến lược đến triển khai. Hệ sinh thái truyền thông – marketing trọn gói của chúng tôi đảm bảo mọi đồng ngân sách đều tạo ra giá trị thật và có thể đo lường.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col p-8 text-center">
                <h3
                  className="font-headline text-[#0A2540] mb-4 transition-colors duration-300 group-hover:text-[#D4A24C]"
                  style={{ fontSize: '24px', fontWeight: 700 }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[#1A1A1A] leading-relaxed text-justify"
                  style={{ fontSize: '16px', lineHeight: 1.6 }}
                >
                  {card.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
