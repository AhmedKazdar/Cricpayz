import React from "react";
import "./ContactPage.css";
import HandL from "../assets/img/Hand2.png"
import Hand from "../assets/img/Hand1.png"
export default function ContactPage() {
  return (
    <main className="contact">
  <div className="Hand">
          <img src={Hand}>
          </img>
          </div> 
      {/* HERO */}
      <section className="contact_hero">
        <h1 className="contact_title">Get in Touch</h1>
        <p className="contact_subtitle">
          We’d love to hear from you. Let’s build something great together.
        </p>
      </section>

      {/* CONTACT CARD */}
      <section className="contact_section">
        <div className="contact_card">
          <h2 className="contact_heading">Contact Information</h2>
          <p className="contact_text">
            Whether you have a project idea, a question, or just want to say hello,
            feel free to reach out.
          </p>
          <div className="contact_details">
             <p><strong>Heures de travail:</strong> Du lundi au Vendredi De 09h00 à 18h00</p>
            <p><strong>Email:</strong> direction.cricpayz@gmail.com</p>
            <p><strong>Location:</strong> Sousse, Tunisia</p>
            <p><strong>Phone:</strong> +216 00 000 000</p>
          </div>
        </div>
      </section>
      {/* FORM */}
      <section className="contact_form_section">
        
        <h2 className="contact_heading">Send Us a Message</h2>

        <form className="contact_form" action="mailto:direction.cricpayz@gmail.com" method="POST" encType="text/plain">
          <input type="text" name="name" placeholder="Your Name" className="contact_input" />
          <input type="email" name="email" placeholder="Your Email" className="contact_input" />
          <textarea name="message" placeholder="Your Message" className="contact_textarea"></textarea>
          <button className="contact_button">Send Message</button> 
          <div className="HandL">
          <img src={HandL}>
          </img>
          </div>    
        </form>
      </section>
    </main>
  );
}
