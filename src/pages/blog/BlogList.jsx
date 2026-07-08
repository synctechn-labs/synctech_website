import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import SEO from "../../components/SEO";
import { blogsList } from "../../data/blogs/index.js";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Software & Digital Transformation",
    "CRM & Business Solutions",
    "AI development",
  ];

  const filteredBlogs = [...blogsList]
    .filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
        
        {/* Minimal Horizontal Navigation Structure */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 w-full border-b border-slate-200/50 pb-4">
          
          {/* Text-based Categories */}
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto scrollbar-hide pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap text-[15px] transition-colors duration-200 ${
                  selectedCategory === category
                    ? "text-[#005187] font-semibold"
                    : "text-slate-600 hover:text-[#005187] font-medium"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Minimal Search Input */}
          <div className="flex items-center justify-end w-full md:w-auto shrink-0 group">
            <Search className="text-slate-800 group-focus-within:text-[#005187] transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-32 focus:w-64 bg-transparent border-none text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-0 pl-2.5 transition-all duration-300 text-[15px] font-medium"
            />
          </div>
        </div>

        {/* Featured / Articles Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="flex flex-col gap-12">
            {/* Featured Latest Blog (First item) */}
            {(() => {
              const latestBlog = filteredBlogs[0];
              return (
                <Link
                  to={`/blog/${latestBlog.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col lg:flex-row"
                >
                  {/* Left: Image */}
                  <div className="relative w-full lg:w-[55%] aspect-video lg:aspect-auto overflow-hidden bg-white shrink-0 flex items-center justify-center p-4">
                    <img
                      src={latestBlog.coverImage}
                      alt={latestBlog.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Right: Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center flex-grow">
                    <div className="mb-4">
                      <span className="text-slate-500 font-bold text-[11px] uppercase tracking-widest">
                        {latestBlog.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 mb-5 leading-tight">
                      {latestBlog.title}
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 line-clamp-3">
                      {latestBlog.description}
                    </p>
                    
                    <div className="flex items-center gap-3 mt-auto">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Sai Sabiksha" className="w-10 h-10 rounded-full" />
                      <div className="flex flex-col">
                        <span className="text-slate-900 font-bold text-sm">Sai Sabiksha</span>
                        <span className="text-slate-500 text-xs">Founder</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Rest of the Blogs List */}
            {filteredBlogs.length > 1 && (
              <div className="mt-8">
                <h3 className="text-4xl font-extrabold text-slate-900 mb-10">Latest</h3>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Left Column: Blogs List */}
                  <div className="lg:col-span-8 flex flex-col gap-8">
                    {filteredBlogs.slice(1).map((blog) => (
                      <Link
                        key={blog.id}
                        to={`/blog/${blog.id}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col md:flex-row gap-8 bg-transparent hover:bg-white/60 p-4 -m-4 rounded-3xl transition-all duration-300 items-start md:items-center"
                      >
                        {/* Image Thumbnail */}
                        <div className="w-full md:w-[280px] shrink-0 aspect-[16/10] rounded-2xl overflow-hidden bg-white relative shadow-sm flex items-center justify-center border border-slate-50 p-2">
                          <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex flex-col flex-grow py-2">
                          <div className="mb-3">
                            <span className="text-slate-600 font-medium text-sm">
                              {blog.category}
                            </span>
                          </div>
                          
                          <h4 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-250 mb-3 leading-snug">
                            {blog.title}
                          </h4>
                          
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                            {blog.description}
                          </p>
                          
                          <div className="flex items-center gap-3 mt-auto">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Sai Sabiksha" className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                              <span className="text-slate-900 font-bold text-sm">Sai Sabiksha</span>
                              <span className="text-slate-500 text-xs">Founder • {blog.date}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Column: Lead Form Sidebar */}
                  <div className="lg:col-span-4 relative">
                    <div className="sticky top-28 bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <h4 className="text-xl font-extrabold text-slate-900 mb-3">
                        Stay Ahead of the Curve
                      </h4>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                        Get the latest tech insights, scaling strategies, and architectural blueprints delivered straight to your inbox.
                      </p>
                      
                      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Work Email"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm placeholder-slate-400"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 mt-2 text-sm flex items-center justify-center gap-2 group"
                        >
                          Subscribe Now
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </form>
                      
                      <p className="text-xs text-slate-400 text-center mt-4">
                        Join 10,000+ engineers and founders. No spam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
