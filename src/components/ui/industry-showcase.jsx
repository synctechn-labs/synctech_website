import React, { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const DEFAULT_INDUSTRIES = [
  {
    id: '1',
    name: 'Healthcare & MedTech',
    role: 'DIGITAL HEALTH SOLUTIONS',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', behance: '#' },
  },
  {
    id: '2',
    name: 'Fintech & Banking',
    role: 'SECURE FINANCIAL PLATFORMS',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '3',
    name: 'E-Commerce & Retail',
    role: 'NEXT-GEN SHOPPING ECOSYSTEMS',
    image: 'https://images.unsplash.com/photo-1556742049-0a67d9f7831f?q=80&w=600&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '4',
    name: 'Logistics & Supply Chain',
    role: 'SMART FLEET & TRACKING',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
    social: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'AI & SaaS Architecture',
    role: 'AUTONOMOUS ENTERPRISE SAAS',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '6',
    name: 'EdTech & E-Learning',
    role: 'INTERACTIVE LEARNING HUBS',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop',
    social: { instagram: '#' },
  },
];

export default function IndustryShowcase({ items = DEFAULT_INDUSTRIES }) {
  const [hoveredId, setHoveredId] = useState(null);

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* ── Left: photo grid ── */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((item) => (
            <PhotoCard
              key={item.id}
              item={item}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((item) => (
            <PhotoCard
              key={item.id}
              item={item}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((item) => (
            <PhotoCard
              key={item.id}
              item={item}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: industry list ── */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {items.map((item) => (
          <IndustryRow
            key={item.id}
            item={item}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  item,
  className,
  hoveredId,
  onHover,
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Industry row section
───────────────────────────────────────── */

function IndustryRow({
  item,
  hoveredId,
  onHover,
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = item.social?.twitter ?? item.social?.linkedin ?? item.social?.instagram ?? item.social?.behance;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + links */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-[#3b82f6] w-5' : 'bg-white/25',
          )}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-white' : 'text-white/80',
          )}
        >
          {item.name}
        </span>

        {/* Social / Action icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {item.social?.twitter && (
              <a
                href={item.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={10} />
              </a>
            )}
            {item.social?.linkedin && (
              <a
                href={item.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {item.social?.instagram && (
              <a
                href={item.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {item.social?.behance && (
              <a
                href={item.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role / Subtitle */}
      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
        {item.role}
      </p>
    </div>
  );
}
