import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useEffect, type JSX } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Chat } from './pages/Chat/Chat';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { useDispatch } from 'react-redux';
import { setUser } from './store/authSlice';

export const App = (): JSX.Element => {

  const dispatch = useDispatch();

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
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
};