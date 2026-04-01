import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tighter text-brand-primary mb-2">AURA</h1>
          <p className="text-gray-400 text-sm">Connect with your vibe.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Username or Email</label>
            <input
              type="text"
              placeholder="alex_design"
              className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-accent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-accent transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded text-brand-primary focus:ring-brand-primary" />
              <span className="text-gray-500">Remember me</span>
            </label>
            <a href="#" className="text-brand-accent font-bold hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-brand-primary/20 hover:opacity-90 transition-all active:scale-95">
            Sign In
          </button>
        </form>

        <div className="mt-10 pt-6 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-brand-accent font-bold hover:underline">Create one</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
