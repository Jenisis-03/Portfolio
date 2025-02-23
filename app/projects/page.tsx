"use client";
import { useState } from "react";
import { projects } from "./project-data";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "20px" }}>
      <h1
        style={{
          marginBottom: "20px",
          fontFamily: "'Courier Prime', monospace",
          fontWeight: "700",
          fontSize: "28px",
        }}
      >
        Projects
      </h1>
      <div>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            isOpen={openIndex === index}
            onToggle={() => toggleDropdown(index)}
          />
        ))}
      </div>
    </section>
  );
}