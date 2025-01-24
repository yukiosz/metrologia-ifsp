import React from "react";
import styles from "./ContactForm.css";

function ContactForm() {
  return (
    <section id="contact">
        <section className="contact-section">
        <h2 className="section-title">Entre em Contato</h2>
        <form className="contact-form">
            <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Seu email" required />
            </div>
            <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" placeholder="Seu telefone" required />
            </div>
            <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="Escreva sua mensagem" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
        </form>
        </section>
    </section>
    
  );
}

export default ContactForm;
