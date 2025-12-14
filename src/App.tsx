import React from 'react';
import Slider from './components/Slider';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      
      {/* 1. HERO SECTION: Ocupa toda la pantalla inicial */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="welcome-message">¡Bienvenido a Nuestro Taller!</h1>
          <p className="hero-subtitle">Especialistas en Chapa y Pintura Premium</p>
        </div>

        {/* Indicador de scroll animado */}
        <div className="scroll-indicator">
          <p>Desliza para descubrir</p>
          <div className="arrow-down">⬇</div>
        </div>
      </header>

      {/* 2. CONTENIDO PRINCIPAL: Aparece al bajar */}
      <main className="main-content">
        
        <section className="info-section">
          <div className="info-card">
            <h2>Nuestros Servicios</h2>
            <p className="info-message">
              Aquí puedes encontrar detalles sobre nuestros servicios, productos o cualquier cosa que ofrezcamos.
              Explora el contenido dinámico a continuación.
            </p>
          </div>
        </section>

        <section className="slider-section">
          <Slider />
        </section>

      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
};

export default App;