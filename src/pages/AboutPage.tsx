// src/pages/AboutPage.tsx
import React from "react";
import "./AboutPage.css";
import LogoF from "../assets/img/Facebook.png";
import Logo from "../assets/img/Instagram.png"
import LogoJS from "../assets/img/JS.png"


export default function AboutPage() {
  return (
   
    <main className="about">
      {/* HERO */}
      <section className="about_hero">
        <h1 className="about_title">About Cricpayz</h1>
         <div className="LogoF">
          <img src={LogoF}/>
        </div>
        <p className="about_subtitle">
          A development & marketing company shaping bold digital experiences.
        </p>
      </section>

      {/* MISSION */}
      <section className="about_section">
        <h2 className="section_heading">Our Mission</h2>
        <p className="section_text">
          At Cricpayz, our mission is to empower brands with modern technology,
          creative marketing, and strong digital identity. We blend innovation,
          design, and strategy to help businesses grow in a fast‑moving world.
        </p>
      </section>
      {/* WHO WE ARE */}
      <section className="about_section">
        <h2 className="section_heading">Who We Are</h2>
        <p className="section_text">
          We are a passionate team of developers, designers, and marketers
          dedicated to building clean, scalable, and visually striking digital
          products. From websites to branding to marketing strategy, we bring
          ideas to life with precision and creativity.
        </p>
      </section>

      {/* VALUES */}
      <section className="about_values">
        <h2 className="section_heading">What Defines Us</h2>

        <div className="values_grid">
          <div className="value_card">
            <h3>Innovation</h3>
            <p>We stay ahead with modern tools, clean code, and fresh ideas.</p>
          </div>

          <div className="value_card">
            <h3>Creativity</h3>
            <p>Bold visuals and unique branding that stand out in any market.</p>
          </div>

          <div className="value_card">
            <h3>Quality</h3>
            <p>Pixel‑perfect design, smooth UX, and reliable performance.</p>
          </div>
          <div className="value_card">
            <h3>Growth</h3>
            <p>Marketing strategies that help businesses scale with confidence.</p>
          </div>
        </div>
      </section>
 <div className="Logo">
   <img src={Logo} alt="Background illustration" /> 
</div>
      {/* TEAM SECTION */}
      <section className="about_team">
        <h2 className="section_heading">Meet Our Team</h2>

        <div className="team_grid">
          <div className="team_card">
            <div className="team_avatar"></div>
            <h3 className="team_name">Nassef Knani</h3>
            <p className="team_role">Founder & CEO</p>
          </div>

          <div className="team_card">
            <div className="team_avatar"></div>
            <h3 className="team_name">Rayhane Nebli</h3>
            <p className="team_role">Marketing & Brand Identity Specialist</p>
          </div>

          <div className="team_card">
            <div className="team_avatar"></div>
            <h3 className="team_name">Ahmed Kazdar</h3>
            <p className="team_role">Tech Lead</p>
          </div>

          <div className="team_card">
            <div className="team_avatar"></div>
            <h3 className="team_name">Chaima Ellili</h3>
            <p className="team_role">Artistic Manager</p>
          </div>
        </div>
      </section>
      <div className="LogoJS">
        <img src={LogoJS} alt="Background illustration" /> 
     </div>
    </main>
  );
}
