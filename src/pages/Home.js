import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const services = [
    {
      title: "Business Process Outsourcing",
      image: "/images/job-5382501_1280.jpg",
    },
    {
      title: "Customer Support",
      image: "/images/people-1979261_1280.jpg",
    },
    {
      title: "Back-Office Operations",
      image: "/images/Back-office-operation.jpg",
    },
    {
      title: "IT & Technical Support",
      image: "/images/secretary-544180_1280.jpg",
    }
  ];

  return (
    <div className="home-bg">
      <div className="home-content">
        <h1>Pristina BPO</h1>
        <h2>Your Trusted Partner for Outsourcing Excellence</h2>
        <p className="home-intro">
          Unlock growth with a reliable outsourcing partner in Pristina, Kosovo.<br />
          We help businesses streamline operations, reduce costs, and scale efficiently by providing high-quality, professional outsourcing solutions. With a leadership team that brings expertise from private equity, banking, search funds, and supply chain logistics, we understand the complexities of running and expanding a business.<br />
          Our experience working with companies such as Mangata and EUROEXIM has given us insight into business standards, allowing us to deliver seamless support that enhances productivity and profitability.
        </p>
        <Link to="/about" className="learn-more-btn">Learn More..</Link>
      </div>

      <div className="home-services">
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
              <img src={service.image} alt={service.title} />
              <div className="home-service-overlay">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <Link to="/services" className="learn-more-btn">Learn More..</Link>
      </div>

      <div className="home-logo-faded">
        <img src="/images/IMG_1368-removebg-preview.png" alt="Faded Logo" />
      </div>
      <div className="home-side-logo">
        <img src="/images/IMG_1368-removebg-preview.png" alt="Statue" />
      </div>
    </div>
  );
} 