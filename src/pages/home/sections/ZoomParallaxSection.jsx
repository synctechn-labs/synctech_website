'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export default function ZoomParallaxSection() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
		});

		let rafId;
		function raf(time) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}

		rafId = requestAnimationFrame(raf);

		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			if (lenis) lenis.destroy();
		};
	}, []);

	const images = [
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444631/ai_development_xdcjlu.png',
			alt: 'AI Development & Solutions',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444632/web_dev_homnb2.png',
			alt: 'Web Development Platform',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444635/mob_hez8np.png',
			alt: 'Mobile App Development',
		},

		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444630/soft_cfpofk.png',
			alt: 'Custom Software Development',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444631/dm_gd0rqb.png',
			alt: 'Digital Marketing',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444633/crm_solutions_mcgrvt.png',
			alt: 'CRM Solutions',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444630/workflow_automation_q8kcje.png',
			alt: 'Workflow Automation',
		},
	];

	return (
		<section className="relative w-full bg-[#060910] text-white py-16">
			<div className="relative flex min-h-[40vh] flex-col items-center justify-center text-center px-4">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]',
						'blur-[40px]',
					)}
				/>

				<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
					<Sparkles size={14} className="text-cyan-400" />
					Immersive Perspective
				</div>

				<h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
					Scroll Down for{' '}
					<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
						Zoom Parallax
					</span>
				</h2>

				<p className="text-slate-400 text-base sm:text-lg max-w-xl">
					Experience multi-dimensional depth as you navigate through our digital landscape.
				</p>
			</div>

			<ZoomParallax images={images} />

			<div className="h-[20vh]" />
		</section>
	);
}
