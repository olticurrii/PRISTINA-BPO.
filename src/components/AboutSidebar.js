import React from "react";

export default function AboutSidebar({ sections, selectedIndex, onSelect }) {
  return (
    <aside className="about-sidebar">
      <div className="flex flex-row lg:flex-col gap-4 lg:gap-3">
        {sections.map((section, idx) => (
          <button
            key={section.title}
            className={"sidebar-btn" + (selectedIndex === idx ? " selected" : "")}
            onClick={() => onSelect(idx)}
          >
            {section.title}
          </button>
        ))}
      </div>
    </aside>
  );
} 