import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();
    
  }

  return (
    <section id="contact">
        <section className="contact-section">

        <h2 className="section-title">Entre em Contato</h2>

        <form className="contact-form" onSubmit={sendEmail} >

            <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" placeholder="Seu telefone" onChange={(e) => setPhone(e.target.value)} required />
            </div>

            <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="Escreva sua mensagem" rows="4" onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>

            <button type="submit" className="submit-button">Enviar</button>
        </form>
        </section>
    </section>
    
  );
}

export default ContactForm;
