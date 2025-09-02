import React from 'react';
import './AspirationsPage.css'; // Importamos los nuevos estilos

function AspirationsPage() {
  return (
    <div className="aspirations-container">
      <h2 className="aspirations-title">Mis Aspiraciones</h2>
      <p className="aspirations-paragraph">
        Mi objetivo es consolidarme como una profesional integral en el campo de la computación científica, con un enfoque sólido en ciberseguridad y ciencia de datos.
      </p>
      <h3 className="aspirations-subtitle">Aspiro a:</h3>
      
      <ul className="aspirations-list">
        <li className="aspiration-item">
          <span className="aspiration-icon">🔍</span>
          <p>Involucrarme en proyectos de investigación que aborden desafíos tecnológicos actuales, como la detección de threats mediante machine learning o el análisis forense digital.</p>
        </li>
        <li className="aspiration-item">
          <span className="aspiration-icon">📊</span>
          <p>Dominar herramientas de ciencia de datos para aplicar análisis predictivo en la prevención de ciberataques y la optimización de sistemas.</p>
        </li>
        <li className="aspiration-item">
          <span className="aspiration-icon">🌱</span>
          <p>Crecer académicamente mediante especializaciones, certificaciones internacionales (como CEH o CISSP) y posiblemente un posgrado en inteligencia artificial o seguridad informática.</p>
        </li>
        <li className="aspiration-item">
          <span className="aspiration-icon">🤝</span>
          <p>Colaborar en equipos multidisciplinarios que me permitan contribuir al sector tecnológico peruano con soluciones innovadoras y éticas.</p>
        </li>
      </ul>

      <p className="aspirations-paragraph long-term">
        A largo plazo, busco liderar iniciativas que fusionen la ciberseguridad con la ciencia de datos para proteger infraestructuras críticas y democratizar el acceso a la seguridad digital en entornos vulnerables.
      </p>
    </div>
  );
}

export default AspirationsPage;