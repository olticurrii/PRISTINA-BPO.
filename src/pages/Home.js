import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 4;
  const homeRef = useRef(null);

  const services = [
    {
      title: "Business Process Outsourcing",
      image: "/images/job-5382501_1280.jpg",
      description: "Streamline your operations with our comprehensive BPO solutions"
    },
    {
      title: "Customer Support",
      image: "/images/people-1979261_1280.jpg",
      description: "Deliver exceptional customer experiences with our support teams"
    },
    {
      title: "Back-Office Operations",
      image: "/images/Back-office-operation.jpg",
      description: "Optimize your back-office processes for maximum efficiency"
    },
    {
      title: "IT & Technical Support",
      image: "/images/secretary-544180_1280.jpg",
      description: "Get reliable technical support and IT solutions"
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
          <h1>Pristina BPO</h1>
          <h2>Your Trusted Partner for Outsourcing Excellence</h2>
          <p className="home-intro">
            Unlock growth with a reliable outsourcing partner in Pristina, Kosovo.<br className="hidden md:block" />
            We help businesses streamline operations, reduce costs, and scale efficiently by providing high-quality, professional outsourcing solutions. With a leadership team that brings expertise from private equity, banking, search funds, and supply chain logistics, we understand the complexities of running and expanding a business.<br className="hidden md:block" />
            Our experience working with companies such as Mangata and EUROEXIM has given us insight into business standards, allowing us to deliver seamless support that enhances productivity and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/about" className="learn-more-btn">
              Learn More About Us
            </Link>
            <Link to="/contact" className="learn-more-btn bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary">
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <div className={`home-services transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2>Our Services</h2>
        <p className="home-services-desc">
          Our firm provides tailored outsourcing services designed
          to help companies focus on what they do best while we take care of
          the rest. By partnering with us, businesses gain access to a highly skilled
          workforce that ensures efficiency and reliability across multiple business
          functions.
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
            Explore All Services
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