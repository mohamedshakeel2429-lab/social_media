import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MoodProvider } from './context/MoodContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import CreatePost from './pages/CreatePost';
import Settings from './pages/Settings';
import Login from './pages/Login';

export default function App() {
  return (
    <AuthProvider>
      <MoodProvider>
        <Router>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} /> {/* Using Login as placeholder for Register */}

            {/* Main App Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="explore" element={<Explore />} />
              <Route path="create" element={<CreatePost />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </MoodProvider>
    </AuthProvider>
  );
}
