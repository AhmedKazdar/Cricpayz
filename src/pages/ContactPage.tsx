import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <main className="contact">

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
            <p><strong>Email:</strong> direction.cricpayz@gmail.com</p>
            <p><strong>Phone:</strong> +216 00 000 000</p>
            <p><strong>Location:</strong> Sousse, Tunisia</p>
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

        </form>
      </section>

    </main>
  );
}
