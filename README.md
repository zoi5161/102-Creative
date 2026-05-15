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

## Bảng màu thương hiệu

| Token | HEX | Dùng cho |
|---|---|---|
| Deep Navy | `#0A2540` | Primary — premium, trust; headings, nav, section CTA bg |
| Gold | `#D4A24C` | Accent — luxury BĐS feel; divider, hover, founder quote |
| Orange | `#FF6B35` | CTA chính (Tư vấn miễn phí, Gửi yêu cầu) |
| White | `#FFFFFF` | Background chính |
| Off-white | `#F5F5F0` | Background phụ (warm) |
| Text | `#1A1A1A` | Chữ chính |
| Text muted | `#6B7280` | Chữ phụ, area dự án |

## Asset đang dùng

Ảnh chính đặt tại [`src/assets/images/`](src/assets/images/) và import qua alias `@/assets/images/...`.

- ✅ Logo: `Logo.png` → đã tích hợp navbar ([Navigation.tsx](src/app/components/Navigation.tsx))
- ✅ Founder photo: `CEO.png` → đã tích hợp section Founder ([Founder.tsx](src/app/components/Founder.tsx))
- ⏳ Project images: `DuAn.png` (composite — chưa tách, đang dùng Unsplash placeholder)
- ⏳ Partner logos: `LogoDoiTac.png` (composite — chưa tách, đang dùng text)

> Bước tiếp theo: tách `DuAn.png` và `LogoDoiTac.png` thành các asset rời và tích hợp vào [Projects.tsx](src/app/components/Projects.tsx), [Partners.tsx](src/app/components/Partners.tsx).

## Contact

- Phone: 0888 40 32 32
- Email: Lhi.networking2025@gmail.com
- Website: www.102creative.vn
