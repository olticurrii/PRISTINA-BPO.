import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
         <NavLink 
          to="/" 
          end 
          className={({ isActive }) => 
            `nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
         <div className="navbar-logo">
        <img src="/images/IMG_1370-removebg-preview.png" alt="Pristina BPO Logo" />
      </div>
        </NavLink>
      
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 z-50 relative"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Navigation Links */}
      <div 
        className={`navbar-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <NavLink 
          to="/about" 
          end 
          className={({ isActive }) => 
            `nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => 
            `nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
} 