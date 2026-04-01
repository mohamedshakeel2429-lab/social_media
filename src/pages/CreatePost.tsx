import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Clock, MessageSquareQuote, Sparkles, X } from 'lucide-react';
import { MoodType } from '../types';
import { cn } from '../utils/helpers';
import { motion } from 'motion/react';

const CreatePost: React.FC = () => {
  const [caption, setCaption] = useState('');
  const [mood, setMood] = useState<MoodType>('default');
  const [isTimeCapsule, setIsTimeCapsule] = useState(false);
  const [unlockDate, setUnlockDate] = useState('');
  const [anonFeedback, setAnonFeedback] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto pt-6 pb-20 md:pb-6 px-4">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h2 className="text-xl font-bold">Create New Post</h2>
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
            Share
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Image Upload Area */}
          <div
            className={cn(
              "relative aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all",
              preview ? "border-transparent" : "border-gray-200 bg-gray-50 hover:bg-gray-100"
            )}
          >
            {preview ? (
              <>
                <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-2xl" />
                <button
                  onClick={() => setPreview(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <X size={20} />
                </button>
              </>
            ) : (
              <label className="cursor-pointer flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-brand-primary">
                  <ImageIcon size={32} />
                </div>
                <span className="font-bold text-gray-600">Click to upload image</span>
                <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</span>
                <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
              </label>
            )}
          </div>

          {/* Caption Area */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Caption</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-brand-accent min-h-[120px] resize-none"
            />
          </div>

          {/* Mood Selector (Unique Feature) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-brand-primary">
              <Sparkles size={18} />
              <label className="text-sm font-bold">Post Mood</label>
            </div>
            <div className="flex space-x-3">
              {(['default', 'happy', 'productive', 'chill'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all border-2",
                    mood === m 
                      ? "bg-brand-primary text-white border-brand-primary" 
                      : "bg-white text-gray-500 border-gray-100 hover:border-gray-200"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {/* Time Capsule Toggle */}
            <div className={cn(
              "p-4 rounded-2xl border-2 transition-all cursor-pointer",
              isTimeCapsule ? "border-amber-200 bg-amber-50" : "border-gray-100 bg-white"
            )} onClick={() => setIsTimeCapsule(!isTimeCapsule)}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-amber-600">
                  <Clock size={18} />
                  <span className="text-sm font-bold">Time Capsule</span>
                </div>
                <div className={cn(
                  "w-10 h-5 rounded-full relative transition-colors",
                  isTimeCapsule ? "bg-amber-500" : "bg-gray-200"
                )}>
                  <div className={cn(
                    "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                    isTimeCapsule ? "left-6" : "left-1"
                  )} />
                </div>
              </div>
              <p className="text-[10px] text-gray-500">Lock this post until a future date. It will appear blurred to others.</p>
              {isTimeCapsule && (
                <input
                  type="date"
                  value={unlockDate}
                  onChange={(e) => setUnlockDate(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 w-full bg-white border-gray-200 rounded-lg text-xs p-2"
                />
              )}
            </div>

            {/* Anonymous Feedback Toggle */}
            <div className={cn(
              "p-4 rounded-2xl border-2 transition-all cursor-pointer",
              anonFeedback ? "border-brand-accent/20 bg-brand-secondary" : "border-gray-100 bg-white"
            )} onClick={() => setAnonFeedback(!anonFeedback)}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-brand-primary">
                  <MessageSquareQuote size={18} />
                  <span className="text-sm font-bold">Anon Feedback</span>
                </div>
                <div className={cn(
                  "w-10 h-5 rounded-full relative transition-colors",
                  anonFeedback ? "bg-brand-primary" : "bg-gray-200"
                )}>
                  <div className={cn(
                    "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                    anonFeedback ? "left-6" : "left-1"
                  )} />
                </div>
              </div>
              <p className="text-[10px] text-gray-500">Allow users to send anonymous comments that only you can see initially.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
