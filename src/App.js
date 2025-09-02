import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AspirationsPage from './pages/AspirationsPage';
import InterestsPage from './pages/InterestsPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage'; // <-- 1. IMPORTA LA NUEVA PÁGINA

import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre-mi" element={<AboutPage />} />
        <Route path="aspiraciones" element={<AspirationsPage />} />
        <Route path="intereses" element={<InterestsPage />} />
        <Route path="cursos-actuales" element={<CoursesPage />} />
        {/* 2. AÑADE LA NUEVA RUTA AQUÍ */}
        <Route path="contact-details" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

// El componente Layout no necesita cambios
function Layout() {
  return (
    <div className="main-container">
      <Link to="/" className="get-to-know-me">
        <header>
          <span className="flower-icon">✲</span> get to know me
        </header>
      </Link>
      <main className="main-content">
        <ProfileCard />
        <div className="info-section">
          <h1>Katherin Cardenas</h1>
          <h2>Estudiante de Computación Científica</h2>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;