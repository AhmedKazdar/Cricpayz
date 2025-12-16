import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import "./NavBar.css"
import Logo from "../assets/Logo/CricpayzLogoW.png";
export const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false) 
    const location = useLocation();

    //Close menu when route changes 

    useEffect(() =>{
    setIsOpen(false);
    },[location.pathname])

    // Reset menu state on viewport resize 

    useEffect(()=> {
        const onResize = () =>{
            if (window.innerWidth > 768) setIsOpen(false);
        };
        window.addEventListener("resize",onResize) 
   }, []);

    return (
        <header className="navbar">
            <div className="navbar_inner">
            <Link to="/" className="navbar_logo" >
            <img src={Logo}/>
            </Link>

    {/* Desktop Links */}
            <ul className="navbar_links navbar_links_web">
                <li><Link to="/" className="navbar_link">
                <FaHome /> Home</Link></li>
                <li><Link to="/about" className="navbar_link">
                <FaInfoCircle /> About</Link></li>
                <li><Link to="/contact" className="navbar_link">
                <FaEnvelope /> Contact</Link></li>
            </ul>

    {/* Mobile Toggle Button */}
        <button
        className="navbar_toggle"
        onClick={() => setIsOpen((v)=>!v)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        >
         <span className={`bar ${isOpen ? "bar--top-open" : ""}`}></span>
          <span className={`bar ${isOpen ? "bar--mid-open" : ""}`}></span>
          <span className={`bar ${isOpen ? "bar--bot-open" : ""}`}></span>
        </button>
        </div>

        {/* Mobile slide-in menu */}
        <nav
        id="mobile-menu"
          className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}
          >
        <ul className="navbar_links navbar_links_mobile">
          <li><Link to="/" className="navbar_link">Home</Link></li>
          <li><Link to="/about" className="navbar_link">About</Link></li>
          <li><Link to="/contact" className="navbar_link">Contact</Link></li>
        </ul>
        </nav>
    </header>
    )
}