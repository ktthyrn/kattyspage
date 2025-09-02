import React from 'react';
// Cambiamos a íconos de contorno (outline)
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';
import './InfoSection.css';

function InfoSection() {
  return (
    <div className="info-section">
      <h1>Katherin Cardenas</h1>
      <h2>Estudiante de Computación Científica</h2>
      <div className="buttons-grid">
        <button className="info-button">Sobre mi</button>
        <button className="info-button">Aspiraciones</button>
        <button className="info-button">Intereses</button>
        <button className="info-button">Cursos actuales</button>
        <button className="info-button">PINKSTEAM</button>
        <button className="info-button">Contact me details</button>
      </div>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
      </div>
    </div>
  );
}

export default InfoSection;