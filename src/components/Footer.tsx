import React from 'react';
import './Footer.css';
// Importar íconos de React Icons (ejemplo: usando la colección Fa - Font Awesome)
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
const whatsappNumber = '5491136757102'; // Número sin +
const whatsappMessage = 'Hola, quisiera saber sobre el servicio.';
const encodedMessage = encodeURIComponent(whatsappMessage); // Función nativa de JS para codificar
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
const instagramUser = 'carlosjavier.torres.988'; 
const facebookUser = 'carlosjavier.torres.988';

const handleInstagramClick = () => {
  const appLink = `instagram://user?username=${instagramUser}`;
  const webLink = `https://www.instagram.com/${instagramUser}`;
  window.location.href = appLink;
  setTimeout(() => {
    window.open(webLink, '_blank');
  }, 500);
};
const handleFacebookClick = () => {
    const webLink = `https://www.facebook.com/${facebookUser}`; 
    window.open(webLink, '_blank');
};


const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        {/* Título de la sección de Contacto */}
        <h3 className="contact-title">Contáctanos</h3>
        
        {/* Enlaces y Datos de Contacto */}
        <div className="contact-info">
          
          {/* Fila de Datos Clave */}
          <p className="contact-item">
            <span className="icon-label">📞 Teléfono:</span> 
            <a href="tel:+1234567890" className="contact-link">+54 9 11 3675-7102</a>
          </p>
          <p className="contact-item">
            <span className="icon-label">✉ Email:</span> 
            <a href="mailto:tuemail@example.com" className="contact-link">tuemail@example.com</a>
          </p>

        </div>
    
        <div className="social-icons">
          <a 
            onClick={handleInstagramClick}
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <FaInstagram className="icon" />
          </a>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
          >
          <FaWhatsapp className="icon" />
          </a>
          <a 
            onClick={handleFacebookClick} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
          >
            <FaFacebookF className="icon" />
          </a>
        </div>
        
        <p className="copyright">&copy; {new Date().getFullYear()} Taller de Chapa y Pintura. Todos los derechos reservados.</p>
        
      </div>
    </footer>
  );
};

export default Footer;