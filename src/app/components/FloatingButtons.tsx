import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://zalo.me/0888403232"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0068FF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl group"
        aria-label="Zalo"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      <a
        href="tel:0888403232"
        className="w-14 h-14 bg-[#E55C2D] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl animate-pulse group"
        aria-label="Phone"
      >
        <Phone className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
