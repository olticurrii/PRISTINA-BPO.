import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'shadow-lg' : ''} transition-all duration-300`}>
      <NavLink 
        to="/" 
        end 
        className="navbar-logo"
        onClick={closeMenu}
      >
        <img 
          src="/images/IMG_1370-removebg-preview.png" 
          alt="Pristina BPO Logo" 
          loading="lazy"
          onLoad={handleLogoLoad}
          className={`transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </NavLink>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-3 z-50 relative rounded-lg hover:bg-neutral-100 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
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