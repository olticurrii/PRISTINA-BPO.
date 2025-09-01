import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { services } from "../data/data";
import "../App.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const homeRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];
  const currentServices = services[language];

  // Simplified service data for cleaner display
  const homeServices = currentServices.slice(0, 4).map((service, index) => ({
    title: service.title,
    image: [
      "/images/job-5382501_1280.jpg",
      "/images/people-1979261_1280.jpg", 
      "/images/Back-office-operation.jpg",
      "/images/secretary-544180_1280.jpg"
    ][index],
    shortDesc: service.title === "Business Process Outsourcing" || service.title === "Outsourcing i Proceseve të Biznesit" 
      ? (language === 'en' ? "Streamline operations" : "Optimizoni operacionet")
      : service.title === "Bookkeeping" || service.title === "Kontabiliteti"
      ? (language === 'en' ? "Financial management" : "Menaxhimi financiar")
      : service.title === "Software Development" || service.title === "Zhvillimi i Softuerit"
      ? (language === 'en' ? "Custom solutions" : "Zgjidhje të personalizuara")
      : (language === 'en' ? "Creative design" : "Dizajn krijues")
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <div className="home-bg" ref={homeRef}>
      {/* Hero Section - Simplified */}
      <div className={`home-content transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center">
          <h1 className="home-title">{t.home.title}</h1>
          <h2 className="home-subtitle">{t.home.subtitle}</h2>
          <p className="home-intro-short">
            {language === 'en' 
              ? "Transform your business with expert outsourcing solutions from Kosovo's premier BPO partner."
              : "Transformoni biznesin tuaj me zgjidhje eksperte outsourcing nga partneri kryesor BPO i Kosovës."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="learn-more-btn primary-btn">
              {t.home.getStarted}
            </Link>
            <Link to="/about" className="learn-more-btn secondary-btn">
              {t.home.learnMore}
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section - Cleaner */}
      <div className={`home-services transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <h2 className="services-section-title">{t.home.ourServices}</h2>
          <p className="services-section-subtitle">
            {language === 'en' 
              ? "Comprehensive solutions for modern businesses"
              : "Zgjidhje gjithëpërfshirëse për bizneset moderne"
            }
          </p>
        </div>
        
        <div className="home-services-grid">
          {homeServices.map((service, index) => (
            <div key={index} className="home-service-card group">
              <img 
                src={service.image} 
                alt={service.title} 
                loading="lazy"
                onLoad={handleImageLoad}
                className="transition-opacity duration-300"
                style={{ opacity: imagesLoaded >= index + 1 ? 1 : 0 }}
              />
              <div className="home-service-overlay">
                <div className="text-center">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="learn-more-btn outline-btn">
            {t.home.exploreServices}
          </Link>
        </div>
      </div>

      {/* Background Elements */}
      <div className="home-logo-faded">
        <img 
          src="/images/IMG_1368-removebg-preview.png" 
          alt="Faded Logo" 
          loading="lazy"
        />
      </div>
      <div className="home-side-logo">
        <img 
          src="/images/IMG_1368-removebg-preview.png" 
          alt="Statue" 
          loading="lazy"
        />
      </div>
    </div>
  );
} 