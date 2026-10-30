"use client";
import React, { useState } from "react";

import { Search, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import SEO from "../../components/SEO";
import { blogsList } from "../../data/blogs/index.js";
import Link from "next/link";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const categories = [
    "All",
    "Software & Digital Transformation",
    "Custom Software Development",
    "Custom Web Development",
    "Mobile App Development",
    "CRM Development Services",
    "AI development",
    "Digital Marketing Services",
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

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const visiblePageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 relative overflow-x-hidden pb-24">
      <SEO
        title="Tech & Marketing Insights | SyncTechn Software Solutions Solutions"
        description="Discover cutting edge strategies, programming guides, software architectures, and marketing secrets from the engineering desk at SyncTechn Software Solutions."
        keywords="software blog, digital marketing services tips, React scaling, coding tutorials, SyncTechn Software Solutions"
      />

      {/* Futuristic Background Accents (Soft Light Opacity) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none glow-orb" />
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none floating-orb" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b03_1px,transparent_1px),linear-gradient(to_bottom,#1e293b03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Header Section */}
      <div className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 text-center max-w-4xl mx-auto px-4 sm:px-6 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
          <Sparkles size={12} className="animate-spin-slow text-blue-500" />
          The Knowledge Base
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Explore the Future of <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
            Technology & Growth
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed px-2">
          Deep dives, technical guides, and marketing blueprints written by innovators and designers who ship products every single day.
        </p>
      </div>

      {/* Listing Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 -mt-12 sm:-mt-16">
        
        {/* Category Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between mb-10 gap-4 w-full border-b border-slate-200/60 pb-5">
          {/* Horizontal Scrollable Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-[#005187] text-white shadow-sm shadow-[#005187]/20 scale-100"
                      : "bg-white/70 hover:bg-white text-slate-600 hover:text-[#005187] border border-slate-200/80 hover:border-blue-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative flex items-center shrink-0 w-full sm:w-72 md:w-64">
            <Search className="absolute left-3.5 text-slate-400 pointer-events-none" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-white border border-slate-200 rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#005187] focus:ring-2 focus:ring-[#005187]/20 transition-all shadow-2xs font-medium"
            />
          </div>
        </div>

        {/* Featured / Articles Grid */}
        {paginatedBlogs.length > 0 ? (
          <div className="flex flex-col gap-10 sm:gap-12">
            {/* Featured Latest Blog (First item) */}
            {(() => {
              const latestBlog = paginatedBlogs[0];
              return (
                <Link
                  href={`/blog/${latestBlog.id}/`}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/70 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col lg:flex-row"
                >
                  {/* Left: Cover Image */}
                  <div className="relative w-full lg:w-[50%] xl:w-[48%] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[220px] sm:min-h-[280px] lg:min-h-[380px] overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={latestBlog.coverImage}
                      alt={latestBlog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4 sm:hidden">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#005187] shadow-sm">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#005187] border border-blue-100">
                          Featured
                        </span>
                        <span className="text-slate-500 font-semibold text-xs tracking-wider uppercase">
                          {latestBlog.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-slate-900 group-hover:text-[#005187] transition-colors duration-250 mb-3 sm:mb-4 leading-tight sm:leading-snug">
                        {latestBlog.title}
                      </h2>
                      
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                        {latestBlog.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                          alt="Sai Sabiksha"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-200"
                        />
                        <div className="flex flex-col">
                          <span className="text-slate-900 font-bold text-xs sm:text-sm">Sai Sabiksha</span>
                          <span className="text-slate-500 text-[11px] sm:text-xs">Founder • {latestBlog.date}</span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005187] group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Rest of the Blogs List */}
            {paginatedBlogs.length > 1 && (
              <div className="mt-4 sm:mt-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Latest Articles
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    Showing {paginatedBlogs.length} of {filteredBlogs.length} articles
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                  {/* Left Column: Blogs List */}
                  <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6">
                    {paginatedBlogs.slice(1).map((blog) => (
                      <Link
                        key={blog.id}
                        href={`/blog/${blog.id}/`}
                        className="group flex flex-col sm:flex-row gap-5 sm:gap-6 bg-white hover:bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/70 hover:border-blue-200 shadow-2xs hover:shadow-md transition-all duration-300 items-start sm:items-center"
                      >
                        {/* Image Thumbnail */}
                        <div className="w-full sm:w-[220px] md:w-[240px] lg:w-[260px] shrink-0 aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative shadow-2xs flex items-center justify-center border border-slate-100">
                          <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex flex-col flex-grow w-full">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-[#005187] transition-colors">
                              {blog.category}
                            </span>
                          </div>
                          
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#005187] transition-colors duration-200 mb-2 leading-snug line-clamp-2">
                            {blog.title}
                          </h4>
                          
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                            {blog.description}
                          </p>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                            <div className="flex items-center gap-2.5">
                              <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                                alt="Sai Sabiksha"
                                className="w-7 h-7 rounded-full object-cover border border-slate-200"
                              />
                              <div className="flex flex-col">
                                <span className="text-slate-900 font-semibold text-xs">Sai Sabiksha</span>
                                <span className="text-slate-500 text-[10px]">{blog.date}</span>
                              </div>
                            </div>

                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#005187] group-hover:translate-x-0.5 transition-transform">
                              Read <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Column: Lead Form Sidebar */}
                  <div className="lg:col-span-4 relative">
                    <div className="sticky top-28 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#005187] flex items-center justify-center mb-4">
                        <BookOpen size={20} />
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                        Stay Ahead of the Curve
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
                        Get the latest tech insights, scaling strategies, and architectural blueprints delivered straight to your inbox.
                      </p>
                      
                      <form className="flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#005187] focus:ring-1 focus:ring-[#005187] transition-all text-sm placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#005187] focus:ring-1 focus:ring-[#005187] transition-all text-sm placeholder-slate-400"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-[#005187] hover:bg-[#003e66] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 mt-1 text-sm flex items-center justify-center gap-2 group shadow-sm hover:shadow"
                        >
                          Subscribe Now
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </form>
                      
                      <p className="text-[11px] text-slate-400 text-center mt-4">
                        Join 10,000+ engineers and founders. No spam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12 pb-4">
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center justify-center"
                >
                  Previous
                </button>
                
                <div className="flex items-center gap-1.5 hidden sm:flex">
                  {visiblePageNumbers.map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl font-bold text-xs sm:text-sm transition-all shadow-2xs ${
                        currentPage === pageNum 
                          ? 'bg-[#005187] text-white shadow-blue-900/20'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                {/* Mobile page indicator */}
                <span className="sm:hidden text-slate-700 font-medium text-xs bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-2xs">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center justify-center"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl max-w-lg mx-auto shadow-2xs px-4">
            <Search className="mx-auto text-slate-300 mb-4" size={40} />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No Insights Found</h3>
            <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
              We couldn't find any articles matching "{searchQuery}". Try selecting another category or keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
