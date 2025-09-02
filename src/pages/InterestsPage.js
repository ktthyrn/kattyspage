import React from 'react';
import './InterestsPage.css'; // Importamos los nuevos estilos

function InterestsPage() {
  return (
    <div className="interests-container">
      <h2 className="interests-title">Mis Intereses</h2>

      <div className="interests-grid">
        <div className="interest-blob blob-1">
          <p>
            <span className="interest-icon">📊</span>
            <strong>Ciberseguridad Avanzada:</strong> Ethical Hacking, Análisis de Malware, Intelligence (CTI) y Hardening de sistemas.
          </p>
        </div>

        <div className="interest-blob blob-2">
          <p>
            <span className="interest-icon">🔬</span>
            <strong>Ciencia de Datos Aplicada:</strong> Machine Learning para detección de anomalías y fraudes, y visualización de datos complejos.
          </p>
        </div>

        <div className="interest-blob blob-3">
          <p>
            <span className="interest-icon">🔎</span>
            <strong>Investigación Tecnológica:</strong> Tendencias en computación cuántica, criptografía post-cuántica y arquitecturas seguras.
          </p>
        </div>

        <div className="interest-blob blob-4">
          <p>
            <span className="interest-icon">🤖</span>
            <strong>Automatización y Scripting:</strong> Desarrollo de herramientas para optimizar procesos de seguridad (Python, Bash).
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterestsPage;