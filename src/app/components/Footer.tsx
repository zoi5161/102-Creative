import { Facebook, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0E4D5C] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60" style={{ fontSize: '14px' }}>
            © 2025 102 CREATIVE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-[#F4A93C] transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-[#F4A93C] transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-[#F4A93C] transition-all duration-300 group"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
