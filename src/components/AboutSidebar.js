import React from "react";
import "../App.css";

export default function AboutSidebar({ sections, selectedIndex, onSelect }) {
  return (
    <aside className="about-sidebar">
      {sections.map((section, idx) => (
        <button
          key={section.title}
          className={"sidebar-btn" + (selectedIndex === idx ? " selected" : "")}
          onClick={() => onSelect(idx)}
        >
          {section.title}
        </button>
      ))}
    </aside>
  );
} 