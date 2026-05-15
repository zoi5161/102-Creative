import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-4 sm:gap-6">
      <a
        href="https://zalo.me/0888403232"
        target="_blank"
        rel="noopener noreferrer"
        className="zalo-pulse w-11 h-11 sm:w-14 sm:h-14 bg-[#0068FF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Zalo"
      >
        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
      </a>
      <a
        href="tel:0888403232"
        className="phone-pulse w-11 h-11 sm:w-14 sm:h-14 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Phone"
      >
        <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
      </a>
    </div>
  );
}
