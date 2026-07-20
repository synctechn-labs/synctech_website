'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export default function ZoomParallaxSection() {
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
			alt: 'Mobile Application Architecture',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444630/soft_cfpofk.png',
			alt: 'Custom Enterprise Software',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444631/dm_gd0rqb.png',
			alt: 'Digital Growth & Marketing',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444633/crm_solutions_mcgrvt.png',
			alt: 'CRM & ERP Platforms',
		},
		{
			src: 'https://res.cloudinary.com/wowukaao/image/upload/v1784444630/workflow_automation_q8kcje.png',
			alt: 'Workflow Automation Engine',
		},
	];

	return (
		<section className="relative bg-[#060910] text-slate-100 py-16 overflow-x-clip">
			{/* Section Header */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 relative z-20">
				<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
					<Sparkles size={14} className="text-cyan-400 animate-pulse" />
					Interactive Showcase
				</div>

				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
					Explore Our Digital{" "}
					<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
						Ecosystem
					</span>
				</h2>

				<p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
					Scroll down to experience our multi-dimensional platform capabilities in 3D motion.
				</p>
			</div>

			{/* Zoom Parallax Container */}
			<div className="w-full relative">
				<ZoomParallax images={images} />
			</div>
		</section>
	);
}
