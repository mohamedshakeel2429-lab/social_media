import React from 'react';
import { Bell, Shield, Eye, Moon, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useMood } from '../context/MoodContext';
import { cn } from '../utils/helpers';

const Settings: React.FC = () => {
  const { focusMode, setFocusMode } = useMood();

  const sections = [
    {
      title: 'Account',
      items: [
        { icon: Bell, label: 'Notifications', color: 'text-blue-500' },
        { icon: Shield, label: 'Privacy & Security', color: 'text-emerald-500' },
        { icon: Eye, label: 'Content Preferences', color: 'text-purple-500' },
      ]
    },
    {
      title: 'Experience',
      items: [
        { icon: Moon, label: 'Dark Mode', color: 'text-gray-700', toggle: true },
        { icon: Shield, label: 'Focus Mode', color: 'text-indigo-500', toggle: true, active: focusMode, onToggle: () => setFocusMode(!focusMode) },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', color: 'text-amber-500' },
        { icon: LogOut, label: 'Logout', color: 'text-red-500' },
      ]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto pt-6 pb-20 md:pb-6 px-4">
      <h2 className="text-2xl font-bold mb-8">Settings</h2>

      <div className="space-y-8">
        {sections.map((section, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">{section.title}</h3>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className={cn(
                    "flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer",
                    j !== section.items.length - 1 && "border-b border-gray-50"
                  )}
                  onClick={item.onToggle}
                >
                  <div className="flex items-center space-x-4">
                    <div className={cn("p-2 rounded-xl bg-gray-50", item.color)}>
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </div>
                  
                  {item.toggle ? (
                    <div className={cn(
                      "w-10 h-5 rounded-full relative transition-colors",
                      item.active ? "bg-brand-primary" : "bg-gray-200"
                    )}>
                      <div className={cn(
                        "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                        item.active ? "left-6" : "left-1"
                      )} />
                    </div>
                  ) : (
                    <ChevronRight size={18} className="text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs text-gray-400">Aura v1.0.0 • Made with ✨ for mindful connections</p>
      </div>
    </div>
  );
};

export default Settings;
