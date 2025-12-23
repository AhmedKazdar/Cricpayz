import React from "react"; 
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom"
import Hero3DBackground from "../components/Hero3DBackground";
import Line from "../assets/img/L2.png"

export default function HomePage() {
    const navigate = useNavigate();
    return( 
        <>
            <main className="homepage">

                {/* HERO */}
              <section className="homepage_hero">
  <Hero3DBackground />
  <div className="homepage_hero_content">
    <h1 className="homepage_title">Welcome to Cricpayz</h1>
    <p className="homepage_subtitle">Your future is here</p>
  </div>
</section>

                {/* SERVICES */}
                <section className="homepage_services">
                    <h2 className="section_title">What We Do</h2>
                    <div className="services_grid">
                        <div className="service_card">
                            <h3>Web Development</h3>
                            <p>Modern, fast, and scalable websites built with cutting‑edge technologies.</p>
                        </div>
                        <div className="service_card">
                            <h3>Marketing Strategy</h3>
                            <p>Smart digital marketing campaigns that elevate your brand and reach.</p>
                        </div>
                        <div className="service_card">
                            <h3>Brand Identity</h3>
                            <p>Strong visuals, bold colors, and a unique identity that stands out.</p>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="homepage_why">
                    <h2 className="section_title">Why Choose Cricpayz?</h2>
                    <ul className="why_list">
                        <li>🔥 Innovative solutions tailored to your business</li>
                        <li>🚀 Fast delivery with high‑quality results</li>
                        <li>🎯 Marketing strategies that actually convert</li>
                        <li>💡 Creative team with a passion for design & tech</li>
                    </ul>
                </section>
                {/* CTA */}
                <section className="homepage_cta">
                    <h2>Ready to grow your brand?</h2>
                    <button onClick={() => navigate("/contact")} className="cta_button">Get Started</button>
                </section>

            </main>
        </>
    );
}
