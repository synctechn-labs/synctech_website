import React, { useEffect, useRef } from "react";

/**
 * DalaConstellationCanvas
 * Renders an organic 3D brain/cloud shape made of thousands of tiny multicolored
 * triangular particles with subtle connections and mouse interaction on a pure black canvas.
 */
export default function DalaConstellationCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas to match display size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse coordinates relative to canvas center
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left - rect.width / 2;
      mouse.targetY = e.clientY - rect.top - rect.height / 2;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse.isHovered = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Color palette for the brain particle cloud
    const colors = [
      "#8052ff", // Electric Iris (Violet)
      "#ffb829", // Saffron Spark (Amber)
      "#15846e", // Deep Verdant (Teal)
      "#e056fd", // Vivid Magenta
      "#48dbfb", // Electric Blue
      "#ffffff", // Bone White
    ];

    // Generate 3D brain geometry coordinates
    const NUM_PARTICLES = 750;
    const particles = [];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      // Create a dual-hemisphere brain / cloud volume
      const isLeftLobe = Math.random() > 0.5;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;

      // Base radius
      const r = Math.pow(Math.random(), 0.7) * 160 + 20;

      // Distort radius to mimic brain shape (two main lobes, frontal & occipital curves)
      let x = r * Math.sin(theta) * Math.cos(phi);
      let y = r * Math.sin(theta) * Math.sin(phi) * 0.75;
      let z = r * Math.cos(theta);

      // Separate lobes slightly along X axis
      if (isLeftLobe) {
        x -= 25 + Math.random() * 15;
      } else {
        x += 25 + Math.random() * 15;
      }

      // Add random orbital velocity & noise
      particles.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        x,
        y,
        z,
        size: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    // Ambient background drift particles
    const AMBIENT_COUNT = 80;
    const ambientParticles = [];
    for (let i = 0; i < AMBIENT_COUNT; i++) {
      ambientParticles.push({
        x: (Math.random() - 0.5) * 700,
        y: (Math.random() - 0.5) * 700,
        z: (Math.random() - 0.5) * 400,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let rotY = 0;
    let rotX = 0;

    // Helper: draw small 3D triangular particle
    const drawTriangle = (ctx, px, py, size, angle, color, opacity) => {
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.86, size * 0.6);
      ctx.lineTo(-size * 0.86, size * 0.6);
      ctx.closePath();

      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Soft glow center
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity * 0.4;
      ctx.fill();

      ctx.restore();
    };

    let time = 0;

    const render = () => {
      time += 0.015;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate whole cloud slowly
      rotY += 0.003 + (mouse.x / width) * 0.005;
      rotX += 0.0015 + (mouse.y / height) * 0.005;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project particles to 2D
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Breathing pulse
        const pulse = Math.sin(time * 2 + p.pulseOffset) * 4;
        let rx = p.baseX + (p.baseX > 0 ? pulse : -pulse);
        let ry = p.baseY + Math.sin(time + p.pulseOffset) * 3;
        let rz = p.baseZ;

        // Rotate Y
        let x1 = rx * cosY - rz * sinY;
        let z1 = rx * sinY + rz * cosY;

        // Rotate X
        let y1 = ry * cosX - z1 * sinX;
        let z2 = ry * sinX + z1 * cosX;

        // Perspective scale
        const fov = 400;
        const scale = fov / (fov + z2);
        const px = cx + x1 * scale;
        const py = cy + y1 * scale;

        p.rotation += p.rotSpeed;

        projected.push({
          px,
          py,
          scale,
          z: z2,
          size: p.size * scale,
          color: p.color,
          opacity: Math.min(1, Math.max(0.1, (p.opacity * scale) / 1.1)),
          rotation: p.rotation,
        });
      }

      // Sort by Z for proper depth rendering
      projected.sort((a, b) => b.z - a.z);

      // Draw faint neural connections between close particles
      for (let i = 0; i < projected.length; i += 3) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j += 4) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const distSq = dx * dx + dy * dy;

          if (distSq < 1800) {
            const alpha = (1 - distSq / 1800) * 0.12 * p1.opacity;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw projected brain particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        drawTriangle(ctx, p.px, p.py, p.size, p.rotation, p.color, p.opacity);
      }

      // Draw ambient floating background particles
      for (let i = 0; i < ambientParticles.length; i++) {
        const ap = ambientParticles[i];
        ap.x += ap.vx;
        ap.y += ap.vy;

        if (ap.x > 350) ap.x = -350;
        if (ap.x < -350) ap.x = 350;
        if (ap.y > 350) ap.y = -350;
        if (ap.y < -350) ap.y = 350;

        const px = cx + ap.x;
        const py = cy + ap.y;

        drawTriangle(
          ctx,
          px,
          py,
          ap.size,
          time * 0.5 + i,
          ap.color,
          ap.opacity * 0.3
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[650px] max-h-[650px] cursor-crosshair object-contain"
      />
    </div>
  );
}
