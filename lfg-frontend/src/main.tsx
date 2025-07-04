import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import * as ToastPrimitive from '@radix-ui/react-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
         <ToastPrimitive.Provider>
            <App />
            <ToastPrimitive.Viewport className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
         </ToastPrimitive.Provider>
     </Provider>
  </StrictMode>,
)
