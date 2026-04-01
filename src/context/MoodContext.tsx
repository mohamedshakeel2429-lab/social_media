import React, { createContext, useContext, useState, useEffect } from 'react';
import { MoodType } from '../types';

interface MoodContextType {
  mood: MoodType;
  setMood: (mood: MoodType) => void;
  focusMode: boolean;
  setFocusMode: (enabled: boolean) => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const MoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mood, setMood] = useState<MoodType>('default');
  const [focusMode, setFocusMode] = useState(false);

  // Apply mood-based theme classes to body
  useEffect(() => {
    const body = document.body;
    body.classList.remove('mood-happy', 'mood-productive', 'mood-chill');
    if (mood !== 'default') {
      body.classList.add(`mood-${mood}`);
    }
  }, [mood]);

  return (
    <MoodContext.Provider value={{ mood, setMood, focusMode, setFocusMode }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) throw new Error('useMood must be used within a MoodProvider');
  return context;
};
