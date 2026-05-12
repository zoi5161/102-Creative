# 102 Creative — Website

Website hồ sơ năng lực của **102 Creative** — agency Marketing chuyên ngành Bất động sản tại Việt Nam.

> "Luôn đồng hành cùng người dẫn đầu"

## Tech stack

- **Vite 6** — dev server / bundler
- **React 18** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix primitives)
- **Lucide** icons · **Sonner** toast · **Motion** animations

## Cấu trúc thư mục

```
102-Creative/
├─ src/
│  ├─ app/
│  │  ├─ App.tsx                  Root component, ráp các section
│  │  └─ components/
│  │     ├─ Navigation.tsx        Sticky nav
│  │     ├─ Hero.tsx              Hero full-screen
│  │     ├─ Stats.tsx             Giới thiệu + 4 số liệu
│  │     ├─ Values.tsx            Sứ mệnh / Tầm nhìn / Năng lực
│  │     ├─ Founder.tsx           Mr. Hoàng Phi Long
│  │     ├─ Solutions.tsx         3 trụ cột giải pháp
│  │     ├─ Projects.tsx          Grid 16 dự án + filter
│  │     ├─ Partners.tsx          8 đối tác
│  │     ├─ Contact.tsx           Form liên hệ + info
│  │     ├─ Footer.tsx
│  │     ├─ FloatingButtons.tsx   Zalo + Phone góc phải
│  │     ├─ figma/                ImageWithFallback wrapper
│  │     └─ ui/                   shadcn/ui primitives
│  ├─ styles/
│  │  ├─ theme.css                CSS variables (màu, font)
│  │  ├─ fonts.css                @font-face declarations
│  │  ├─ globals.css
│  │  ├─ index.css
│  │  └─ tailwind.css
│  └─ main.tsx                    Entry point
├─ guidelines/                    Design guidelines
├─ index.html
├─ vite.config.ts
├─ package.json
├─ .gitignore
└─ .env.example
```

## Chạy local

```bash
npm install          # cài dependencies (~3 phút lần đầu)
npm run dev          # mở http://localhost:5173
```

## Build production

```bash
npm run build        # output vào dist/
```

## Bảng màu thương hiệu (lấy từ logo)

| Token | HEX | Dùng cho |
|---|---|---|
| Petrol Teal | `#0E4D5C` | Primary, headings, nav, section CTA bg |
| Logo Gold | `#F4A93C` | Accent, divider, hover, founder quote |
| Logo Orange | `#E55C2D` | CTA chính (Tư vấn miễn phí, Gửi yêu cầu) |
| Off-white | `#F8F6F0` | Background phụ (warm) |
| Text | `#1A1A1A` | Chữ chính |
| Text muted | `#6B7280` | Chữ phụ, area dự án |

## Asset đang dùng

- ✅ Logo: `Logo.png` (chưa tích hợp — đang dùng text "102 CREATIVE")
- ✅ Founder photo: `CEO.png` (chưa tích hợp — đang dùng stock photo)
- ✅ Project images: `DuAn.png` (chưa tích hợp — đang dùng Unsplash placeholder)
- ✅ Partner logos: `LogoDoiTac.png` (chưa tích hợp — đang dùng text)

> Bước tiếp theo: tách các PNG composite trên thành asset rời và tích hợp vào component tương ứng.

## Contact

- Phone: 0888 40 32 32
- Email: Lhi.networking2025@gmail.com
- Website: www.102creative.vn
