import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import "../App.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 4;
  const homeRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.services.bpo.title,
      image: "/images/job-5382501_1280.jpg",
      description: t.services.bpo.description
    },
    {
      title: t.services.customerSupport.title,
      image: "/images/people-1979261_1280.jpg",
      description: t.services.customerSupport.description
    },
    {
      title: t.services.backOffice.title,
      image: "/images/Back-office-operation.jpg",
      description: t.services.backOffice.description
    },
    {
      title: t.services.itSupport.title,
      image: "/images/secretary-544180_1280.jpg",
      description: t.services.itSupport.description
    }
  ];

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
      <div className={`home-content transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center md:text-left">
          <h1>{t.home.title}</h1>
          <h2>{t.home.subtitle}</h2>
          <p className="home-intro">
            {t.home.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/about" className="learn-more-btn">
              {t.home.learnMore}
            </Link>
            <Link to="/contact" className="learn-more-btn bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary">
              {t.home.getStarted}
            </Link>
          </div>
        </div>
      </div>

      <div className={`home-services transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2>{t.home.ourServices}</h2>
        <p className="home-services-desc">
          {t.home.servicesDesc}
        </p>
        <div className="home-services-grid">
          {services.map((service, index) => (
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
                <div className="space-y-2">
                  <h3>{service.title}</h3>
                  <p className="text-white/90 text-sm font-medium">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="learn-more-btn">
            {t.home.exploreServices}
          </Link>
        </div>
      </div>

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