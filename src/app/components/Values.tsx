import missionImg from '@/assets/images/mission.jpg';
import visionImg from '@/assets/images/vision.jpg';
import competitivenessImg from '@/assets/images/competitiveness.jpg';
import customerValueImg from '@/assets/images/CustomerValue.jpg';

type Card = {
  title: string;
  image: string;
  content?: string;
  bullets?: string[];
};

const cards: Card[] = [
  {
    image: missionImg,
    title: 'SỨ MỆNH',
    content:
      'Giúp doanh nghiệp bất động sản tạo ra giao dịch thật thông qua Marketing dữ liệu, hệ thống bán hàng và tư duy lãnh đạo đúng đắn.',
  },
  {
    image: visionImg,
    title: 'TẦM NHÌN',
    content:
      'Đến năm 2030, 102 Creative trở thành đối tác tăng trưởng số 1 cho doanh nghiệp bất động sản tại Việt Nam, được tin tưởng vì khả năng biến chiến dịch marketing thành doanh thu thực tế.',
  },
  {
    image: competitivenessImg,
    title: 'NĂNG LỰC CẠNH TRANH',
    bullets: [
      'Hiểu sâu ngành BĐS & SME',
      'Marketing gắn với Sales thật',
      'Mô hình Mindset - Skillset - Toolset - Result',
      'Triết lý chính trực & minh bạch',
      'Khả năng đào tạo đội ngũ bán hàng',
    ],
  },
  {
    image: customerValueImg,
    title: 'GIÁ TRỊ KHÁCH HÀNG',
    bullets: [
      'Kết quả đo được',
      'Đồng hành đến cùng',
      'Minh bạch dữ liệu',
      'Tư duy lãnh đạo',
      'Giá trị bền vững',
    ],
  },
];

export function Values() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(315deg, #FDFCF8 0%, #F8F4EC 45%, #F2EDE2 100%)' }}
    >
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              <div className="flex flex-col flex-1 p-6 text-center">
                <h3
                  className="font-headline text-[#0A2540] mb-4 transition-colors duration-300 group-hover:text-[#D4A24C]"
                  style={{ fontSize: '20px', fontWeight: 700 }}
                >
                  {card.title}
                </h3>

                {card.content && (
                  <p
                    className="text-[#1A1A1A] leading-relaxed text-justify"
                    style={{ fontSize: '15px', lineHeight: 1.6 }}
                  >
                    {card.content}
                  </p>
                )}

                {card.bullets && (
                  <ul className="space-y-2 text-left">
                    {card.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[#1A1A1A]"
                        style={{ fontSize: '15px', lineHeight: 1.55 }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
