import React from 'react';
import { Post, Story, MoodType } from '../types';
import PostCard from '../components/PostCard';
import StoryCard from '../components/StoryCard';
import { useMood } from '../context/MoodContext';
import { motion } from 'motion/react';

// Dummy Data
const DUMMY_STORIES: Story[] = [
  { id: '1', userId: 'u1', username: 'alex_design', userAvatar: 'https://picsum.photos/seed/alex/100/100', imageUrl: '', isUnread: true },
  { id: '2', userId: 'u2', username: 'sarah_codes', userAvatar: 'https://picsum.photos/seed/sarah/100/100', imageUrl: '', isUnread: true },
  { id: '3', userId: 'u3', username: 'mike_travels', userAvatar: 'https://picsum.photos/seed/mike/100/100', imageUrl: '', isUnread: false },
  { id: '4', userId: 'u4', username: 'emma_art', userAvatar: 'https://picsum.photos/seed/emma/100/100', imageUrl: '', isUnread: true },
  { id: '5', userId: 'u5', username: 'dev_aura', userAvatar: 'https://picsum.photos/seed/aura/100/100', imageUrl: '', isUnread: false },
  { id: '6', userId: 'u6', username: 'zen_master', userAvatar: 'https://picsum.photos/seed/zen/100/100', imageUrl: '', isUnread: true },
];

const DUMMY_POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    username: 'alex_design',
    userAvatar: 'https://picsum.photos/seed/alex/100/100',
    imageUrl: 'https://picsum.photos/seed/design/800/800',
    caption: 'Working on a new branding project. Minimalist vibes only. ✨',
    likesCount: 124,
    commentsCount: 12,
    createdAt: new Date().toISOString(),
    isAnonymousFeedbackEnabled: true,
    mood: 'productive'
  },
  {
    id: 'p2',
    userId: 'u2',
    username: 'sarah_codes',
    userAvatar: 'https://picsum.photos/seed/sarah/100/100',
    imageUrl: 'https://picsum.photos/seed/code/800/800',
    caption: 'Finally fixed that bug! 🐛 -> 🦋 #coding #react',
    likesCount: 89,
    commentsCount: 5,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    isAnonymousFeedbackEnabled: false,
    mood: 'happy'
  },
  {
    id: 'p3',
    userId: 'u3',
    username: 'mike_travels',
    userAvatar: 'https://picsum.photos/seed/mike/100/100',
    imageUrl: 'https://picsum.photos/seed/mountain/800/800',
    caption: 'This view is worth the 4am wake up call.',
    likesCount: 256,
    commentsCount: 24,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    unlockDate: new Date(Date.now() + 172800000).toISOString(), // Locked for 2 days
    isAnonymousFeedbackEnabled: true,
    mood: 'chill'
  }
];

const Home: React.FC = () => {
  const { mood } = useMood();

  // Filter posts based on mood if needed, or just change UI
  const filteredPosts = mood === 'default' 
    ? DUMMY_POSTS 
    : DUMMY_POSTS.filter(p => p.mood === mood);

  return (
    <div className="max-w-2xl mx-auto pt-6 pb-20 md:pb-6">
      {/* Stories Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-6 shadow-sm overflow-x-auto no-scrollbar flex space-x-4">
        {DUMMY_STORIES.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      {/* Mood Header */}
      {mood !== 'default' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 rounded-2xl bg-brand-secondary border border-brand-accent/20 flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-bold text-brand-primary capitalize">{mood} Mode Active</h2>
            <p className="text-sm text-gray-500">Showing content curated for your current vibe.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-2xl">
            {mood === 'happy' && '😊'}
            {mood === 'productive' && '🚀'}
            {mood === 'chill' && '🌿'}
          </div>
        </motion.div>
      )}

      {/* Feed */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400">No posts found for this mood yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
