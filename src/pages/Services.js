import React, { useState, useEffect, useRef } from "react";
import { services } from "../data/data";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];
  const currentServices = services[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-bg" ref={servicesRef}>
      <div className={`services-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="services-title">{t.home.ourServices}</h2>
        <p className="services-desc">
          {t.home.servicesDesc}
        </p>
        <div className="services-grid">
          {currentServices.map((service, index) => (
            <div 
              key={service.title} 
              className={`service-card group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our outsourcing solutions can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="learn-more-btn">
              {t.home.getStarted}
            </a>
            <a href="/about" className="learn-more-btn bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary">
              {t.home.learnMore}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 