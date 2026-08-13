import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen, Search } from 'lucide-react';

interface BlogViewProps {
  onSelectPost: (post: BlogPost) => void;
  onBack: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onSelectPost, onBack }) => {
  const [selectedCat, setSelectedCat] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'window-sticker', 'vehicle-insights', 'vin-lookup'];

  const filtered = BLOG_POSTS.filter(post => {
    const matchCat = selectedCat === 'ALL' || post.category === selectedCat;
    const matchQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
            CADILLAC KNOWLEDGE HUB
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#282828] tracking-tight">
            Monroney Label & VIN Decoding Guides
          </h1>
          <p className="text-sm text-[#787878] mt-2">
            In-depth historical analyses, Monroney label breakdowns, and buyer verification checklists written by automotive historians.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#F7F7F8] p-3 rounded-2xl border border-[#D2D2D2]">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all capitalize cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#282828] text-white'
                    : 'bg-white text-[#282828] hover:bg-[#E5E5E7] border border-[#D2D2D2]'
                }`}
              >
                {cat === 'ALL' ? 'All Guides' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#787878]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full bg-white border border-[#D2D2D2] rounded-xl pl-9 pr-3 py-1.5 text-sm font-bold text-[#282828] placeholder-[#787878] focus:border-[#2C28E8]"
            />
          </div>
        </div>

        {/* Articles List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-white rounded-2xl border border-[#D2D2D2] p-6 shadow-sm hover:shadow-md hover:border-[#FA0037] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-sm text-[#787878] mb-3">
                  <span className="font-extrabold uppercase text-[#A00021] bg-[#FA0037]/10 px-2.5 py-0.5 rounded text-[14px]">
                    {post.category.replace('-', ' ')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#282828] group-hover:text-[#FA0037] transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-[#787878] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E7] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full object-cover border border-[#282828]" loading="lazy" />
                  <div>
                    <div className="text-sm font-bold text-[#282828]">{post.author.name}</div>
                    <div className="text-[14px] text-[#787878]">{post.author.role}</div>
                  </div>
                </div>

                <div className="text-sm font-extrabold text-[#282828] group-hover:text-[#FA0037] flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
