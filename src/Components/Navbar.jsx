import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <nav className="navbar">
      {/* Brand acts as Main link */}
      <a href="/" className="nav-links">
        <h2>Inicio</h2>
      </a>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? (
          /* Close (X) icon */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="4" x2="20" y2="20" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="6" x2="21" y2="6" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="18" x2="21" y2="18" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <div className={`nav-links-container ${open ? "open" : ""}`}>
        <a className="nav-links" href="#projects-view">
          <h3>Projects</h3>
        </a>
        <a className="nav-links" href="#formation">
          <h3>Formation</h3>
        </a>
        <a className="nav-links" href="#aboutMe">
          <h3>About Me</h3>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;