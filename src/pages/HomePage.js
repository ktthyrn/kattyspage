import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';
import '../components/InfoSection.css';

function HomePage() {
  return (
    <>
      <div className="buttons-grid">
        <Link to="/sobre-mi" className="info-button">SOBRE MI</Link>
        <Link to="/aspiraciones" className="info-button">ASPIRACIONES</Link>
        <Link to="/intereses" className="info-button">INTERESES</Link>
        <Link to="/cursos-actuales" className="info-button">CURSOS ACTUALES</Link>
        <a 
          href="https://ktthyrn.github.io/PINKSTEAM/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="info-button"
        >
          PINKSTEAM
        </a>
        {/* CAMBIO: Convierte este último botón en un Link */}
        <Link to="/contact-details" className="info-button">CONTACT DETAILS</Link>
      </div>
      <div className="social-icons">
        {/* ... (Los íconos no cambian) ... */}
        <a href="https://www.instagram.com/ktthyrn/" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://github.com/ktthyrn" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/katherin-paola-cardenas-garcia-768256346/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
      </div>
    </>
  );
}

export default HomePage;