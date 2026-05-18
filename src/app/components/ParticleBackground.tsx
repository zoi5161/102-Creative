import { useEffect, useRef } from 'react';

export function ParticleBackground({ count = 70 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? Math.ceil(count * 0.35) : count;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type Particle = {
      x: number; y: number;
      tx: number; ty: number;
      vx: number; vy: number;
      r: number; pushCount: number;
    };
    const MAX_DIST = 140;
    const MOUSE_RADIUS = 180;
    const MOUSE_BOOST = 7;
    const CLICK_RADIUS = 180;
    const CLICK_STEP = 32;
    const MAX_PUSH = 4;
    const EASE = 0.08;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x, y, tx: x, ty: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.6,
        pushCount: 0,
      };
    });

    let mouse: { x: number; y: number } | null = null;

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top  || e.clientY > rect.bottom
      ) { mouse = null; return; }
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse = null; };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, button, select, label, a, form')) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top  || e.clientY > rect.bottom
      ) return;
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const p of particles) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const d2 = dx * dx + dy * dy;
        if (d2 < CLICK_RADIUS * CLICK_RADIUS) {
          if (p.pushCount < MAX_PUSH) {
            const dist = Math.sqrt(d2) || 1;
            p.tx = Math.max(0, Math.min(width, p.tx + (dx / dist) * CLICK_STEP));
            p.ty = Math.max(0, Math.min(height, p.ty + (dy / dist) * CLICK_STEP));
            p.pushCount += 1;
          }
        } else {
          p.pushCount = 0;
        }
      }
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.tx += p.vx;
        p.ty += p.vy;
        if (p.tx < 0)      { p.tx = 0;     p.vx *= -1; }
        if (p.tx > width)  { p.tx = width;  p.vx *= -1; }
        if (p.ty < 0)      { p.ty = 0;     p.vy *= -1; }
        if (p.ty > height) { p.ty = height; p.vy *= -1; }
        p.x += (p.tx - p.x) * EASE;
        p.y += (p.ty - p.y) * EASE;
      }

      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX_DIST * MAX_DIST) {
            const alpha = (1 - Math.sqrt(d2) / MAX_DIST) * 0.7;
            ctx.strokeStyle = `rgba(220,228,240,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      for (const p of particles) {
        let r = p.r;
        if (mouse) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const md2 = mdx * mdx + mdy * mdy;
          if (md2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            r += (1 - Math.sqrt(md2) / MOUSE_RADIUS) * MOUSE_BOOST;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
