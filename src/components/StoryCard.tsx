import React from 'react';
import { Story } from '../types';
import { cn } from '../utils/helpers';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="flex flex-col items-center space-y-1 flex-shrink-0 cursor-pointer group">
      <div className={cn(
        "p-[2px] rounded-full transition-transform group-hover:scale-105",
        story.isUnread ? "bg-gradient-to-tr from-yellow-400 to-pink-600" : "bg-gray-200"
      )}>
        <div className="bg-white p-[2px] rounded-full">
          <img
            src={story.userAvatar}
            alt={story.username}
            className="w-16 h-16 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <span className="text-[10px] text-gray-500 font-medium truncate w-16 text-center">
        {story.username}
      </span>
    </div>
  );
};

export default StoryCard;
