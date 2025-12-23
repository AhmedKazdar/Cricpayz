import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer_brand">
          <h2 className="footer_logo">Cricpayz</h2>
          <p className="footer_tagline">
            Building bold digital experiences.
          </p>
        </div>
        <div className="footer_links">
          <a href="/" className="footer_link">Home</a>
          <a href="/about" className="footer_link">About</a>
          <a href="/contact" className="footer_link">Contact</a>
        </div>
        <div className="footer_copy">
          © {new Date().getFullYear()} Cricpayz — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
