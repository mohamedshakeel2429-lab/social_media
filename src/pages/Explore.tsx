import React from 'react';
import { Search, TrendingUp, Users, Hash } from 'lucide-react';
import { cn } from '../utils/helpers';

const Explore: React.FC = () => {
  const categories = ['Design', 'Tech', 'Travel', 'Art', 'Fitness', 'Music', 'Food', 'Gaming'];

  return (
    <div className="max-w-4xl mx-auto pt-6 pb-20 md:pb-6 px-4">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for vibes, skills, or people..."
          className="w-full bg-white border border-gray-100 rounded-2xl pl-12 pr-4 py-4 shadow-sm focus:ring-2 focus:ring-brand-accent transition-all"
        />
      </div>

      {/* Categories */}
      <div className="flex space-x-3 overflow-x-auto no-scrollbar mb-10 pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            className="px-6 py-2 bg-white border border-gray-100 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-brand-primary hover:text-white transition-colors shadow-sm"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Trending Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="text-brand-primary" size={20} />
            <h3 className="font-bold">Trending Skills</h3>
          </div>
          <div className="space-y-4">
            {['React Native', 'UI Motion', 'Prompt Engineering', 'Web3 Design'].map((skill, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm font-medium">{skill}</span>
                <span className="text-xs text-gray-400">+{Math.floor(Math.random() * 100)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Hash className="text-brand-primary" size={20} />
            <h3 className="font-bold">Popular Vibes</h3>
          </div>
          <div className="space-y-4">
            {['#productiveMorning', '#chillBeats', '#happyFriday', '#designSprint'].map((tag, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm font-medium">{tag}</span>
                <span className="text-xs text-gray-400">{Math.floor(Math.random() * 10)}k posts</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={cn(
            "rounded-2xl overflow-hidden cursor-pointer relative group",
            i % 3 === 0 ? "aspect-[3/4] md:row-span-2" : "aspect-square"
          )}>
            <img
              src={`https://picsum.photos/seed/explore${i}/600/800`}
              alt="Explore"
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm" />
                <span className="text-xs font-bold">@user_{i}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
