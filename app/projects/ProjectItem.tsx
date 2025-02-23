"use client";
import Link from "next/link";
import { Project } from "./project-data";
import { Button } from "@/components/ui/button";

interface ProjectItemProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProjectItem({ project, isOpen, onToggle }: ProjectItemProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Courier Prime', monospace", fontSize: "20px", fontWeight: "700" }}
        >
          {project.title} 
        </Link>
        <Button
          onClick={onToggle}
          style={{
            border: "2px solid grey",
            padding: "5px 10px",
            borderRadius: "4px",
            background: "black",
            cursor: "pointer",
            fontFamily: "'Courier Prime', monospace",
            fontWeight: "700",
          }}
          aria-expanded={isOpen}
          aria-label={`Toggle ${project.title} details`}
        >
          <svg
            style={{ width: "16px", height: "16px", transform: isOpen ? "rotate(180deg)" : "none" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>
      {isOpen && (
        <div style={{ paddingLeft: "20px", fontFamily: "'Courier Prime', monospace", fontWeight: "700" }}>
          <p style={{ marginBottom: "10px" }}>
            <strong style={{ fontWeight: "700" }}>Description:</strong> {project.description}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong style={{ fontWeight: "700" }}>Real-World Problem:</strong> {project.realWorldProblem}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong style={{ fontWeight: "700" }}>Learnings:</strong> {project.learnings}
          </p>
          <p>
            <strong style={{ fontWeight: "700" }}>Tech Stack:</strong>{" "}
            {project.techStack.map((tech, idx) => (
              <i key={idx}>
                {tech}
                {idx < project.techStack.length - 1 ? ", " : ""}
              </i>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}