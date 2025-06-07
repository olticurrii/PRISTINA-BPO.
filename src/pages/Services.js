import React from "react";
import { services } from "../data/data";
import ServiceCard from "../components/ServiceCard";
import "../App.css";

export default function Services() {
  return (
    <div className="services-bg">
      <div className="services-section">
        <h2 className="services-title">Our Services</h2>
        <p className="services-desc">
          We provide high-quality outsourcing solutions tailored to your business needs.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.title} className="service-card">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 