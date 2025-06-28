import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useEffect, type JSX } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { About } from './pages/About/About';
import { Chat } from './pages/Chat/Chat';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/authSlice';
import type { RootState } from "./store";

export const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

useEffect(() => {
  const userString = localStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    dispatch(setUser(user));
  }
}, []);

  return (
    <BrowserRouter>
      <div className="h-full">
        <Header />
        <div className='flex-grow w-full max-w-8/10 mx-auto'>
          <Routes>
            <Route path="/" element={user ? <Homepage /> : <Navigate to="/login" />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={user ? <Chat /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
};