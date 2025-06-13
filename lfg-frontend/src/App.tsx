import './App.css';
import { Homepage } from './components/Homepage/Homepage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import type { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="h-full">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </BrowserRouter>
  )
};