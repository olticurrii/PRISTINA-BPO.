import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export default function Footer() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/IMG_1370-removebg-preview.png" 
                alt="Pristina BPO Logo" 
                className={`h-12 w-auto transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={handleLogoLoad}
              />
              <div>
                <h3 className="text-xl font-bold text-white">Pristina BPO</h3>
                <p className="text-neutral-300 text-sm">Outsourcing Excellence</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Your trusted outsourcing partner in Pristina, Kosovo. 
              We help businesses streamline operations and scale efficiently.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-2 text-neutral-300">
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Pristina, Kosovo</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@pristinabpo.com</span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t.footer.followUs}</h4>
            <p className="text-neutral-300">
              Stay connected with us on social media for the latest updates and insights.
            </p>
            <div className="footer-icons">
             
              <a href="https://www.linkedin.com/company/pristinabpo" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 rounded-lg hover:bg-accent hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © 2025 Pristina BPO. {t.footer.rights} | 
            <a href="/privacy" className="text-accent hover:text-accent-light transition-colors duration-300 ml-1">
              Privacy Policy
            </a> | 
            <a href="/terms" className="text-accent hover:text-accent-light transition-colors duration-300 ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 