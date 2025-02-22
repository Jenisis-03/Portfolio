"use client";
import Link from "next/link";
import { FaPython, FaNodeJs, FaReact } from "react-icons/fa";
import { SiScikitlearn, SiPandas, SiNumpy, SiMatplotlib, SiTensorflow, SiMongodb, SiExpress, SiRedux, SiFirebase, SiTailwindcss } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Project } from "./project-data";

interface ProjectItemProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

const techIconMap: { [key: string]: JSX.Element } = {
  "Python": <FaPython className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Scikit-learn": <SiScikitlearn className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Pandas": <SiPandas className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "NumPy": <SiNumpy className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Matplotlib": <SiMatplotlib className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "TensorFlow": <SiTensorflow className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Node.js": <FaNodeJs className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Express": <SiExpress className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "MongoDB": <SiMongodb className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "React": <FaReact className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Redux": <SiRedux className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Firebase": <SiFirebase className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
};

export default function ProjectItem({ project, isOpen, onToggle }: ProjectItemProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:underline text-lg font-medium"
        >
          {project.title} ({project.year})
        </Link>
        <Button
          onClick={onToggle}
          className="ml-2 p-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-none"
          variant="outline"
          aria-expanded={isOpen}
          aria-label={`Toggle ${project.title} details`}
        >
          <svg
            className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>
      {isOpen && (
        <div className="mt-3 pl-4 text-neutral-600 dark:text-neutral-400 tracking-tight animate-fade-in">
          <p><strong>Description:</strong> {project.description}</p>
          <p className="mt-2"><strong>Real-World Problem:</strong> {project.realWorldProblem}</p>
          <p className="mt-2"><strong>Learnings:</strong> {project.learnings}</p>
          <div className="mt-2">
            <strong>Tech Stack:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="flex items-center gap-1" title={tech}>
                  {techIconMap[tech] || <span className="text-neutral-600 dark:text-neutral-400">{tech}</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}