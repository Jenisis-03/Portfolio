// app/projects/page.tsx
"use client";
import { useState } from "react";
import { projects } from "./project-data";
import ProjectItem from "./ProjectItem"; // Default import, no curly braces

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-4">
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