import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Lock, Clock, MessageSquareQuote } from 'lucide-react';
import { Post } from '../types';
import { cn, formatDate, isLocked } from '../utils/helpers';
import { useMood } from '../context/MoodContext';
import { motion, AnimatePresence } from 'motion/react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { focusMode } = useMood();
  const [isLiked, setIsLiked] = useState(false);
  const locked = isLocked(post.unlockDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-6 shadow-sm"
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="w-10 h-10 rounded-full object-cover border-2 border-brand-secondary"
            referrerPolicy="no-referrer"
          />
          <div>
            <h3 className="font-bold text-sm">{post.username}</h3>
            <p className="text-xs text-gray-400">{formatDate(post.createdAt)}</p>
          </div>
        </div>
        {post.unlockDate && (
          <div className="flex items-center space-x-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
            <Clock size={12} />
            <span>Time Capsule</span>
          </div>
        )}
      </div>

      {/* Image / Locked State */}
      <div className="relative aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
        {locked ? (
          <div className="flex flex-col items-center text-gray-400 p-10 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Lock size={32} />
            </div>
            <p className="font-semibold text-gray-600">Locked Content</p>
            <p className="text-sm">Unlocks on {formatDate(post.unlockDate!)}</p>
          </div>
        ) : (
          <img
            src={post.imageUrl}
            alt="Post content"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        )}

        {/* Mood Badge */}
        {!locked && (
          <div className={cn(
            "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg",
            post.mood === 'happy' && "bg-pink-500",
            post.mood === 'productive' && "bg-blue-500",
            post.mood === 'chill' && "bg-emerald-500",
            post.mood === 'default' && "bg-gray-800"
          )}>
            {post.mood}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={cn("transition-transform active:scale-125", isLiked ? "text-red-500" : "text-gray-600")}
            >
              <Heart size={26} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button className="text-gray-600">
              <MessageCircle size={26} />
            </button>
            <button className="text-gray-600">
              <Send size={26} />
            </button>
          </div>
          <button className="text-gray-600">
            <Bookmark size={26} />
          </button>
        </div>

        {/* Stats - Hidden in Focus Mode */}
        {!focusMode && (
          <div className="mb-2">
            <p className="text-sm font-bold">{post.likesCount + (isLiked ? 1 : 0)} likes</p>
          </div>
        )}

        {/* Caption */}
        <div className="text-sm mb-2">
          <span className="font-bold mr-2">{post.username}</span>
          <span className="text-gray-700">{locked ? "???" : post.caption}</span>
        </div>

        {/* Comments Link */}
        {!focusMode && (
          <button className="text-sm text-gray-400 mb-2">
            View all {post.commentsCount} comments
          </button>
        )}

        {/* Anonymous Feedback Option */}
        {post.isAnonymousFeedbackEnabled && !locked && (
          <div className="mt-4 pt-4 border-t border-gray-50">
            <div className="flex items-center space-x-2 text-xs text-brand-primary font-semibold mb-2">
              <MessageSquareQuote size={14} />
              <span>Anonymous Feedback Enabled</span>
            </div>
            <input
              type="text"
              placeholder="Send anonymous feedback..."
              className="w-full bg-gray-50 border-none rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-brand-accent"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PostCard;
