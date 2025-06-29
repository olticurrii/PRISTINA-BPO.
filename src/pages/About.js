import React, { useState, useEffect, useRef } from "react";
import { aboutSections } from "../data/data";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import AboutSidebar from "../components/AboutSidebar";

export default function About() {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];
  const currentSections = aboutSections[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-bg" ref={aboutRef}>
      <div className={`about-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="about-main-title">About Us</h1>
        <p className="text-lg md:text-xl text-neutral-600 text-center md:text-left mb-8 md:mb-12 max-w-4xl">
          Discover how Pristina BPO is revolutionizing the outsourcing industry with our 
          innovative approach, experienced leadership, and commitment to excellence.
        </p>
        
        <div className={`about-layout transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <AboutSidebar
            sections={currentSections}
            selectedIndex={selected}
            onSelect={setSelected}
            language={language}
          />
          <div className="about-content">
            <h2>{currentSections[selected].title}</h2>
            <div className="about-underline" />
            <div className="prose prose-lg max-w-none">
              <p>{currentSections[selected].content}</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            Ready to Partner with Us?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise and experience can help your business achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="learn-more-btn">
              Get in Touch
            </a>
            <a href="/services" className="learn-more-btn bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary">
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 