import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import SEO from "../../components/SEO";
import { blogsList } from "../../data/blogs/index.js";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogsList.map((blog) => blog.category))];

  const filteredBlogs = blogsList.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 relative overflow-hidden pb-24">
      <SEO
        title="Tech & Marketing Insights | SyncTech Solutions"
        description="Discover cutting edge strategies, programming guides, software architectures, and marketing secrets from the engineering desk at SyncTech."
        keywords="software blog, digital marketing tips, React scaling, coding tutorials, SyncTech"
      />

      {/* Futuristic Background Accents (Soft Light Opacity) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none glow-orb" />
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none floating-orb" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b03_1px,transparent_1px),linear-gradient(to_bottom,#1e293b03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Header Section */}
      <div className="relative pt-20 pb-32 text-center max-w-4xl mx-auto px-6 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
          <Sparkles size={12} className="animate-spin-slow text-blue-500" />
          The Knowledge Base
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Explore the Future of <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
            Technology & Growth
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Deep dives, technical guides, and marketing blueprints written by innovators and designers who ship products every single day.
        </p>
      </div>

      {/* Listing Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-16">
        
        {/* Floating Glassmorphic Search & Filters */}
        <div className="backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-3xl p-6 shadow-md mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Custom styled input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search guides, stacks, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
            />
          </div>

          {/* Styled pills */}
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-start md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-250 border border-slate-200/50 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured / Articles Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200/80 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2.5 flex flex-col h-full"
              >
                {/* Subtle highlight around hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Aspect-Ratio Cover Banner */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-7 flex flex-col flex-grow relative z-10">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-bold mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title with hover color */}
                  <h3 className="text-xl font-bold text-slate-850 group-hover:text-blue-600 transition-colors duration-250 line-clamp-2 mb-3">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {blog.description}
                  </p>

                  {/* Separator */}
                  <div className="w-full h-[1px] bg-slate-100 mb-5" />

                  {/* Footer (Author card + Arrow) */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-blue-500/20 transition-all"
                      />
                      <div>
                        <p className="text-xs font-extrabold text-slate-800">{blog.author.name}</p>
                        <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">{blog.author.role}</p>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 border border-slate-150 text-slate-500 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 group/btn"
                    >
                      <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-slate-100 rounded-[32px] max-w-lg mx-auto shadow-sm">
            <Search className="mx-auto text-slate-300 mb-4" size={44} />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No Insights Found</h3>
            <p className="text-slate-550 text-sm max-w-xs mx-auto px-4 leading-relaxed">
              We couldn't find any articles matching "{searchQuery}". Try selecting another category or keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
