import React from "react";
import "../App.css";

export default function ServiceCard({ title, image, description }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-img" />
      <div className="service-card-title">{title}</div>
      <div className="service-card-desc">{description}</div>
    </div>
  );
} 