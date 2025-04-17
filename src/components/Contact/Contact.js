import React from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Entre em contato para obter uma cotação</h1>
      <div className="contact-container">
        <div className="info-section">
          <div className="info-item">
            <div>
              <FaMapMarkerAlt className="info-icon" />
              <h3>ENDEREÇO</h3>
              <p>Avenida Major Fernando Valle, 2013</p>
              <p>Bragança Paulista, SP</p>
            </div>
          </div>
          <div className="info-item">
            <div>
              <FaEnvelope className="info-icon" />
              <h3>EMAIL</h3>
              <p>metrologiaoptica.bra@ifsp.edu.br</p>
            </div>
          </div>
        </div>
        <div className="map-container">
          <iframe className="map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.0404985369864!2d-46.56105952393943!3d-22.94873557922556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cecb55ee153643%3A0xa53800f610a73b6f!2sIFSP%20C%C3%A2mpus%20Bragan%C3%A7a%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1740627233037!5m2!1spt-BR!2sbr"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
