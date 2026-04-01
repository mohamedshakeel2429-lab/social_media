export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  bio: string;
  skills: Skill[];
  followersCount: number;
  followingCount: number;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Expert';
  icon?: string;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  unlockDate?: string; // For Time Capsule
  isAnonymousFeedbackEnabled: boolean;
  mood: MoodType;
}

export interface Story {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  imageUrl: string;
  isUnread: boolean;
}

export type MoodType = 'happy' | 'productive' | 'chill' | 'default';

export interface Comment {
  id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: string;
  isAnonymous?: boolean;
}
