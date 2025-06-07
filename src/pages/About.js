import React, { useState } from "react";
import { aboutSections } from "../data/data";
import AboutSidebar from "../components/AboutSidebar";
import "../App.css";

export default function About() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="about-bg">
      <div className="about-container">
        <h1 className="about-main-title">About Us</h1>
        <div className="about-layout">
          <AboutSidebar
            sections={aboutSections}
            selectedIndex={selected}
            onSelect={setSelected}
          />
          <div className="about-content">
            <h2>{aboutSections[selected].title}</h2>
            <div className="about-underline" />
            <p>{aboutSections[selected].content}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
} 