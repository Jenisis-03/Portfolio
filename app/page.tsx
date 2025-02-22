// Imports
import Image from "next/image";
import { socialLinks } from "./config";
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaDatabase, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiDjango, 
  SiMongodb, 
  SiPostgresql 
} from 'react-icons/si';

// Bio Component
const BioContent = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      As a Full-Stack Web and AI/ML Developer, Freelancer, and Photographer, 
      I blend technical expertise with creative vision to craft innovative 
      digital solutions. My journey is driven by a passion for technology 
      and a commitment to delivering excellence in every project.
    </p>
  </div>
);

// Tech Stack Component
const TechStack = () => (
  <div className="prose prose-neutral dark:prose-invert mt-6">
    {/* Programming Languages */}
    <h2 className="text-xl font-semibold">Tech Stack</h2>
    <ul className="flex flex-wrap">
      <li className="flex items-center mr-4 mb-2">
        <FaJava className="text-2xl mr-1" /> Java
      </li>
      <li className="flex items-center mr-4 mb-2">
        <FaPython className="text-2xl mr-1" /> Python
      </li>
      <li className="flex items-center mr-4 mb-2">
        <FaJs className="text-2xl mr-1" /> JavaScript
      </li>
      <li className="flex items-center mr-4 mb-2">
        <FaDatabase className="text-2xl mr-1" /> SQL
      </li>
    </ul>

    {/* Frameworks and Tools */}
    <h2 className="text-xl font-semibold mt-4">Frameworks and Tools</h2>
    <ul className="flex flex-wrap">
      <li className="flex items-center mr-4 mb-2">
        <FaReact className="text-2xl mr-1" /> React.js
      </li>
      <li className="flex items-center mr-4 mb-2">
        <SiNextdotjs className="text-2xl mr-1" /> Next.js
      </li>
      <li className="flex items-center mr-4 mb-2">
        <FaNodeJs className="text-2xl mr-1" /> Node.js
      </li>
      <li className="flex items-center mr-4 mb-2">
        <SiDjango className="text-2xl mr-1" /> Django
      </li>
      <li className="flex items-center mr-4 mb-2">
        <SiMongodb className="text-2xl mr-1" /> MongoDB
      </li>
      <li className="flex items-center mr-4 mb-2">
        <SiPostgresql className="text-2xl mr-1" /> PostgreSQL
      </li>
    </ul>
  </div>
);

// Main Page Component
export default function Page() {
  return (
    <section>
      {/* Profile Image */}
      <a 
        href={socialLinks.twitter} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 
            mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          width={160}
          height={160}
          priority
        />
      </a>

      {/* Content */}
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Hello!</h1>
      <BioContent />
      <TechStack />
    </section>
  );
}