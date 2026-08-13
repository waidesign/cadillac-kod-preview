import React from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ShieldCheck } from 'lucide-react';

interface ArticleViewProps {
  post: BlogPost;
  onBack: () => void;
  onOpenLookup: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ post, onBack, onOpenLookup }) => {
  return (
    <article className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="text-sm font-bold text-[#282828] hover:text-[#FA0037] flex items-center gap-1.5 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Knowledge Hub
        </button>

        {/* Category & Title */}
        <div className="space-y-3 mb-6">
          <span className="text-sm font-extrabold uppercase text-[#A00021] bg-[#FA0037]/10 px-3 py-1 rounded-full border border-[#FA0037]/20">
            {post.category.replace('-', ' ')}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-[#282828] tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#787878] pt-1">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Published {post.date}
            </span>
          </div>
        </div>

        {/* Author Box Bar */}
        <div className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-2xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#282828]" />
            <div>
              <div className="text-sm font-extrabold text-[#282828]">{post.author.name}</div>
              <div className="text-sm text-[#787878] font-medium">{post.author.role}</div>
            </div>
          </div>
          <button 
            onClick={onOpenLookup}
            className="bg-[#FA0037] text-white text-sm font-extrabold px-4 py-2 rounded-xl hover:bg-[#C8002B] transition-colors hidden sm:block"
          >
            Lookup Your VIN
          </button>
        </div>

        {/* Main Formatted Content */}
        <div className="prose max-w-none text-sm sm:text-base text-[#282828] leading-relaxed space-y-6">
          <div className="p-4 bg-[#FAFAFA] border-l-4 border-[#FA0037] text-sm sm:text-sm font-bold text-[#282828] rounded-r-xl">
            {post.excerpt}
          </div>

          <div className="whitespace-pre-line text-sm leading-relaxed text-[#282828]">
            {post.content}
          </div>
        </div>

        {/* Author Full Bio Footer Box */}
        <div className="mt-12 pt-8 border-t border-[#D2D2D2] bg-[#F7F7F8] p-6 rounded-2xl border">
          <div className="flex items-start gap-4">
            <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#282828] shrink-0" />
            <div>
              <div className="text-sm font-extrabold text-[#282828] mb-1">About the Author: {post.author.name}</div>
              <p className="text-sm text-[#787878] leading-relaxed mb-3">
                {post.author.bio}
              </p>
              <div className="text-[14px] font-bold text-[#2C28E8] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified General Motors Archive Contributor
              </div>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
