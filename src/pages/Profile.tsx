import React from 'react';
import { User, Skill } from '../types';
import { Grid, Bookmark, Award, MapPin, Link as LinkIcon, Edit3, Zap, Heart } from 'lucide-react';
import { cn } from '../utils/helpers';
import { motion } from 'motion/react';

const DUMMY_USER: User = {
  id: 'u1',
  username: 'alex_design',
  fullName: 'Alex Rivera',
  avatar: 'https://picsum.photos/seed/alex/200/200',
  bio: 'Product Designer & Creative Strategist. Building digital experiences that matter. 🎨✨',
  followersCount: 1205,
  followingCount: 450,
  skills: [
    { id: 's1', name: 'UI/UX Design', level: 'Expert' },
    { id: 's2', name: 'Branding', level: 'Expert' },
    { id: 's3', name: 'Motion Graphics', level: 'Intermediate' },
    { id: 's4', name: 'React', level: 'Beginner' },
  ]
};

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-6 pb-20 md:pb-6 px-4">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 mb-12">
        <div className="relative">
          <img
            src={DUMMY_USER.avatar}
            alt={DUMMY_USER.username}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            referrerPolicy="no-referrer"
          />
          <button className="absolute bottom-2 right-2 bg-brand-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
            <Edit3 size={16} />
          </button>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <h2 className="text-2xl font-bold">{DUMMY_USER.username}</h2>
            <div className="flex space-x-2 justify-center md:justify-start">
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors">
                Edit Profile
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors">
                View Archive
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-8 mb-6">
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">42</span>
              <span className="text-gray-500 text-sm">posts</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">{DUMMY_USER.followersCount}</span>
              <span className="text-gray-500 text-sm">followers</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">{DUMMY_USER.followingCount}</span>
              <span className="text-gray-500 text-sm">following</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">{DUMMY_USER.fullName}</h3>
            <p className="text-sm text-gray-700 max-w-md">{DUMMY_USER.bio}</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <LinkIcon size={14} />
                <a href="#" className="text-brand-accent hover:underline">alexrivera.design</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Showcase Section (Unique Feature) */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 mb-6">
          <Award className="text-brand-primary" size={20} />
          <h3 className="text-lg font-bold">Skill Showcase</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {DUMMY_USER.skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 bg-brand-secondary rounded-lg flex items-center justify-center mb-3 text-brand-primary">
                <Zap size={16} fill="currentColor" />
              </div>
              <h4 className="font-bold text-sm mb-1">{skill.name}</h4>
              <span className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                skill.level === 'Expert' ? "bg-indigo-100 text-indigo-600" :
                skill.level === 'Intermediate' ? "bg-blue-100 text-blue-600" :
                "bg-gray-100 text-gray-600"
              )}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-100">
        <div className="flex justify-center space-x-12">
          <button className="border-t-2 border-brand-primary py-4 flex items-center space-x-2 text-sm font-bold">
            <Grid size={18} />
            <span>POSTS</span>
          </button>
          <button className="py-4 flex items-center space-x-2 text-sm font-medium text-gray-400">
            <Bookmark size={18} />
            <span>SAVED</span>
          </button>
          <button className="py-4 flex items-center space-x-2 text-sm font-medium text-gray-400">
            <Award size={18} />
            <span>BADGES</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 md:gap-4 mt-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer relative">
              <img
                src={`https://picsum.photos/seed/post${i}/500/500`}
                alt="Post"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 text-white">
                <div className="flex items-center space-x-1">
                  <Heart size={20} fill="white" />
                  <span className="font-bold">24</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
