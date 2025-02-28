import React from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Entre em contato para obter uma cotação</h1>

      <div className="contact-container">
        <div className="map-box">
          <h2>Nossa localização</h2>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.0404985369864!2d-46.56105952393943!3d-22.94873557922556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cecb55ee153643%3A0xa53800f610a73b6f!2sIFSP%20C%C3%A2mpus%20Bragan%C3%A7a%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1740627233037!5m2!1spt-BR!2sbr" width="90%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
             <div className="info-container">
                <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <span>metrologiaoptica.bra@ifsp.edu.br</span>
                </div>
                <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <span>Av. Maj. Fernando Valle, 2013 - São Miguel, Bragança Paulista - São Paulo</span>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Contact;
