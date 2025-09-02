import React from 'react';
import './CoursesPage.css';

function CoursesPage() {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Cursos Actuales</h2>
      <div className="courses-grid">
        {/* CAMBIO: Usamos el nuevo className "content-sticker" */}
        <div className="content-sticker">
          <p>
            <span className="icon">📐</span> {/* CAMBIO: Usamos el className "icon" */}
            <strong>Técnicas de Modelamiento:</strong> Creación de modelos matemáticos y computacionales para simular sistemas complejos del mundo real, optimizando procesos y prediciendo comportamientos.
          </p>
        </div>
        <div className="content-sticker">
          <p>
            <span className="icon">🔢</span>
            <strong>Métodos Numéricos II:</strong> Diseño e implementación de algoritmos computacionales avanzados para resolver problemas matemáticos complejos donde las soluciones analíticas no son viables.
          </p>
        </div>
        <div className="content-sticker">
          <p>
            <span className="icon">📈</span>
            <strong>Análisis Funcional I:</strong> Estudio de espacios de funciones y operadores, proporcionando las bases matemáticas para áreas como machine learning, teoría de control y ecuaciones diferenciales.
          </p>
        </div>
        <div className="content-sticker">
          <p>
            <span className="icon">💻</span>
            <strong>Sistemas Operativos:</strong> Estudio del núcleo (kernel), gestión de procesos, memoria, y recursos hardware, esencial para desarrollar software eficiente y entender vulnerabilidades a bajo nivel.
          </p>
        </div>
        <div className="content-sticker full-width">
          <p>
            <span className="icon">🎲</span>
            <strong>Probabilidad e Inferencia Estadística:</strong> Análisis de incertidumbre mediante modelos probabilísticos y técnicas para extraer conclusiones from data, base para machine learning y ciencia de datos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;