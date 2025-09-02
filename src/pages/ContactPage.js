import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import './ContactPage.css';

function ContactPage() {
  // 1. CORREO ACTUALIZADO
  const email = "katherin.cardenas@unmsm.edu.pe";
  const linkedinUrl = "https://www.linkedin.com/in/katherin-paola-cardenas-garcia-768256346/";
  const githubUrl = "https://github.com/ktthyrn";

  return (
    <div className="contact-container">
      <h2 className="contact-title">Hablemos</h2>
      <p className="contact-intro">
        Estoy abierta a oportunidades de prácticas, colaboraciones en proyectos y nuevas conexiones profesionales. No dudes en contactarme a través de los siguientes canales:
      </p>

      <div className="contact-grid">
        {/* Tarjeta de Email */}
        <a href={`mailto:${email}`} className="content-sticker contact-card">
          <FiMail className="contact-icon" />
          <h3 className="contact-card-title">Email</h3>
          {/* 2. AHORA SE MUESTRA EL CORREO PARA QUE SE PUEDA COPIAR */}
          <p className="contact-card-info">{email}</p>
        </a>

        {/* Tarjeta de LinkedIn */}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="content-sticker contact-card">
          <FiLinkedin className="contact-icon" />
          <h3 className="contact-card-title">LinkedIn</h3>
          <p className="contact-card-info">Ver Perfil Profesional</p>
        </a>

        {/* Tarjeta de GitHub */}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="content-sticker contact-card">
          <FiGithub className="contact-icon" />
          <h3 className="contact-card-title">GitHub</h3>
          <p className="contact-card-info">Ver Proyectos</p>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;