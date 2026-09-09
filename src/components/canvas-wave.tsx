"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CanvasWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = prefersReducedMotion;
    let animationFrame: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const particles: { x: number; y: number; size: number; speed: number; drift: number }[] = [];
    const PARTICLE_COUNT = 60;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);

      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.4,
          speed: 0.05 + Math.random() * 0.15,
          drift: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const drawWave = (yOffset: number, amplitude: number, frequency: number, alpha: number, color: string) => {
      const baseY = height * yOffset;
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      for (let x = 0; x <= width; x += 4) {
        const y =
          baseY +
          Math.sin((x + time * 15) * frequency) * amplitude +
          Math.sin((x * 0.5 + time * 8) * frequency * 0.5) * amplitude * 0.4;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reduced) {
        time += 0.008;

        // Flowing wave ribbons (only in the lower portion)
        drawWave(0.72, 24, 0.006, 0.12, "rgba(200,160,96,0.6)");
        drawWave(0.8, 32, 0.004, 0.08, "rgba(200,160,96,0.5)");
        drawWave(0.9, 40, 0.005, 0.06, "rgba(245,245,245,0.35)");

        // Digital particles drifting upward
        particles.forEach((p) => {
          p.y -= p.speed;
          p.x += p.drift;
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(200,160,96,0.35)";
          ctx.fill();
        });
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 right-0 h-[55%] opacity-70"
      aria-hidden="true"
    />
  );
}
