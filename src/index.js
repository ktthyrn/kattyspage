import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- 1. IMPORTA BrowserRouter
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. ENVUELVE TU COMPONENTE APP ASÍ */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);