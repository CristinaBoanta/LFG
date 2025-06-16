import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import type { JSX } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Chat } from './pages/Chat/Chat';
import { Dashboard } from './pages/Dashboard/Dashboard';

export const App = (): JSX.Element => {
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
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
};