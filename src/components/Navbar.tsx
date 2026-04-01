import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, PlusSquare, User, Settings, Heart, Zap } from 'lucide-react';
import { useMood } from '../context/MoodContext';
import { cn } from '../utils/helpers';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { mood, setMood, focusMode, setFocusMode } = useMood();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Explore', path: '/explore' },
    { icon: PlusSquare, label: 'Create', path: '/create' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-gray-200 bg-white p-6 z-50">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tighter text-brand-primary">AURA</h1>
        </div>

        <div className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 hover:bg-gray-50",
                location.pathname === item.path ? "bg-brand-secondary text-brand-primary font-semibold" : "text-gray-600"
              )}
            >
              <item.icon size={24} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-100 space-y-4">
          {/* Mood Selector */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Current Mood</span>
            <div className="flex space-x-2">
              {(['happy', 'productive', 'chill'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(mood === m ? 'default' : m)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-all",
                    mood === m ? "border-brand-primary scale-110" : "border-transparent opacity-50 hover:opacity-100",
                    m === 'happy' && "bg-pink-400",
                    m === 'productive' && "bg-blue-400",
                    m === 'chill' && "bg-emerald-400"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Focus Mode Toggle */}
          <button
            onClick={() => setFocusMode(!focusMode)}
            className={cn(
              "flex items-center space-x-4 w-full p-3 rounded-xl transition-all",
              focusMode ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <Zap size={20} fill={focusMode ? "currentColor" : "none"} />
            <span className="text-sm font-medium">Focus Mode</span>
          </button>

          <Link to="/settings" className="flex items-center space-x-4 p-3 rounded-xl text-gray-600 hover:bg-gray-50">
            <Settings size={24} />
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "p-2 rounded-lg",
              location.pathname === item.path ? "text-brand-primary" : "text-gray-400"
            )}
          >
            <item.icon size={24} />
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
