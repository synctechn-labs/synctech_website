import React from "react";
import { Clock, ArrowUpRight } from "lucide-react";

const tintBlueStyle = { filter: "hue-rotate(200deg) saturate(130%)" };

const POSTS = [
  {
    img: "https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401ef8e7fd09ba9f4fa_Feature%20Image%2001.jpg",
    tag: "AI Solutions",
    tagColor: "blue",
    readTime: "5 min read",
    title: "Scaling AI Workflows in Production environments",
    excerpt: "Discover how to architect databases and cache endpoints to support thousands of parallel model invocations efficiently.",
    date: "May 12, 2026",
  },
  {
    img: "https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401d0386358ecf73562_Feature%20Image%2002.jpg",
    tag: "Web Dev",
    tagColor: "cyan",
    readTime: "4 min read",
    title: "Mastering React 19 and Tailwind CSS v4 setup",
    excerpt: "A comprehensive walkthrough of deploying modern compiler frameworks without breaking hydration rendering metrics.",
    date: "Apr 28, 2026",
  },
  {
    img: "https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca38f02354f48e7708d75_Features%201.png",
    tag: "Technology",
    tagColor: "blue",
    readTime: "7 min read",
    title: "The Future of Intelligent Dashboards in 2026",
    excerpt: "Exploring how visual analytics architectures will transition toward natural language conversational queries.",
    date: "Apr 15, 2026",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 border-t border-slate-900/60 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Latest from the Blog</h2>
            <p className="text-slate-400">Insights, tutorials, and ecosystem updates from our core engineering team.</p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold text-sm mt-4 sm:mt-0 transition-colors"
          >
            See all articles <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, i) => {
            const tagClass = post.tagColor === "blue"
              ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
              : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
            return (
              <div
                key={i}
                className="group rounded-2xl bg-slate-950/40 border border-white/[0.06] overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.06)] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden aspect-video border-b border-slate-900">
                    <img
                      src={post.img}
                      alt={post.title}
                      style={tintBlueStyle}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className={`px-2 py-0.5 rounded-full border font-semibold ${tagClass}`}>{post.tag}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 text-slate-500 text-[11px] font-medium border-t border-white/[0.04] mt-4 flex items-center justify-between">
                  <span>{post.date}</span>
                  <span className="text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300">Read article &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
