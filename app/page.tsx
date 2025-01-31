"use client";

import {
  Github,
  Twitter,
  Mail,
  Linkedin,
  Terminal,
  ArrowDown,
  ExternalLink,
  GraduationCap,
  Briefcase,
  TerminalIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Typewriter from "typewriter-effect"; // Import the typewriter-effect library
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGoogleDrive,
} from "react-icons/fa"; // Import icons from React Icons
import { SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si"; // More icons
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb"; // Additional icons
import React from "react";
import Image from "next/image";
const projects = [
  {
    title: "Project Management Dashboard",
    description:
      "A real-time dashboard for tracking project metrics and team performance. Features include team collaboration, task management, and analytics visualization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with real-time inventory management",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redux"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2426&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description: "AI-powered platform for generating marketing content",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2426&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Social Media Analytics",
    description: "Real-time social media analytics and reporting platform",
    tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2426&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Cloud Infrastructure Monitor",
    description: "Cloud resource monitoring and optimization tool",
    tech: ["AWS", "Terraform", "Go", "React"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2426&auto=format&fit=crop",
    featured: false,
  },
];

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" }, // React (cyan)
  { name: "Next.js", icon: <SiNextdotjs />, color: "#f5365c" }, // Next.js (black)
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" }, // TailwindCSS (teal)
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" }, // Node.js (green)

  { name: "Docker", icon: <FaDocker />, color: "#0DB7ED" }, // Docker (blue)
  { name: "JavaScript", icon: <TbBrandJavascript />, color: "#F7DF1E" }, // JavaScript (yellow)
  { name: "TypeScript", icon: <TbBrandTypescript />, color: "#3178C6" }, // TypeScript (blue)
  { name: "Python", icon: <FaPython />, color: "#3776AB" }, // Python (blue)
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" }, // Figma (orange)
];

const timeline = [
  {
    type: "Internship",
    date: "2023 - 2023",
    title: "Full Stack Developer",
    company: "H4U.",
    description: "Internship:Full Stack Developer",
    icon: Briefcase,
  },
  {
    type: "education",
    date: "2020 - 2025",
    title: "Bachelor's in Computer Science and Enginnering",
    company: "Tech University",
    description: "Specialized in Computer Science",
    icon: GraduationCap,
  },
  {
    type: "education",
    date: "2019 - 2021",
    title: "Class 12",
    company: "Central Model School Barrackpore",
    description: "Higher Secondary Completed (CBSE)",
    icon: Briefcase,
  },
  {
    type: "education",
    date: null,
    title: "Class 10",
    company: "Modern English Academy",
    description: "Secondary Completed (ICSE)",
    icon: GraduationCap,
  },
];

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-8 group"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-border group-last:bg-transparent">
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="absolute left-0 top-0 w-full bg-primary"
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary"
      />

      <div className="space-y-3">
        <span className="text-sm text-muted-foreground font-medium">
          {item.date}
        </span>
        <div className="flex items-center gap-2">
          <item.icon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
        </div>
        <p className="text-muted-foreground font-medium">{item.company}</p>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen pt-16 flex items-center justify-center bg-black/90 backdrop-blur-lg"
      >
        <div className="container px-4 mx-auto text-center">
          {/* Terminal Icon */}
          <Terminal className="w-16 h-16 mx-auto mb-8 text-primary" />

          {/* Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff7eb3] to-[#ff758c]">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Problem Solver",
                  "Tech Enthusiast",
                  "Freelancer",
                  "Innovative Thinker",
                  "UI/UX Explorer",
                  "Automation Geek",
                  "Software Architect",
                  "API Specialist",
                  "Performance Optimizer",

                  "AI & ML Enthusiast",
                  "Photography Lover",
                  "Creative Coder",
                  "Scalability Expert",
                  "Bug Hunter",
                  "Startup Mindset",
                  "Open Source Contributor",
                  "Pixel Perfectionist",

                  "Blockchain Explorer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl mb-8 max-w-2xl mx-auto modern-font text-transparent bg-clip-text bg-gradient-to-r from-[#ff7eb3] to-[#ff758c]">
            Code. Create. Capture.{" "}
            <span className="bg-gradient-to-r from-[#6ee7b7] to-[#3b82f6] bg-clip-text text-transparent">
              Elevating Ideas with Tech & Vision
            </span>
          </p>

          {/* Introduction Section with Neon Highlights */}
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto font-light text-left tracking-wider">
            Hey! Subham here, a Full-Stack Developer who turns
            <span className="neon-text-coffee">coffee into scalable code</span>
            and <span className="neon-text-bugs">bugs into Features.</span> I
            build high-performance applications with UI so
            <span className="neon-text-butter">
              smooth it feels like butter
            </span>
            —minus the cholesterol. 😎
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="group">
              <Link href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Neon Text Styles */}
      <style jsx>{`
        .neon-text-coffee {
          color: #ff7eb3;
          text-shadow: 0 0 5px #ff7eb3, 0 0 10px #ff7eb3, 0 0 20px #ff7eb3,
            0 0 40px #ff7eb3;
        }

        .neon-text-bugs {
          color: #3b82f6;
          text-shadow: 0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 20px #3b82f6,
            0 0 40px #3b82f6;
        }

        .neon-text-butter {
          color: #6ee7b7;
          text-shadow: 0 0 5px #6ee7b7, 0 0 10px #6ee7b7, 0 0 20px #6ee7b7,
            0 0 40px #6ee7b7;
        }
      `}</style>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background scroll-mt-16">
        <div className="container px-4 mx-auto">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8cd84d] to-[#FF4500] animate-glow">
              <span className="block">PROJECTS</span>
              <span className="block text-red-700">RESEARCH</span>
              <span className="block">BLOGS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[320px]">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden group hover:shadow-lg transition-all duration-300 relative ${
                  project.featured
                    ? "md:col-span-3 row-span-2"
                    : "md:col-span-2"
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    placeholder="blur" // Requires a blurDataURL
                    blurDataURL="data:image/png;base64,..."
                    className="object-cover w-full h-full brightness-[0.7] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p
                      className={`text-white/80 text-sm mb-4 line-clamp-2 font-light ${
                        project.featured ? "md:line-clamp-none" : ""
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/90 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.featured && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                      >
                        <Link href="/projects">
                          View Case Study{" "}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-background scroll-mt-16 overflow-hidden"
      >
        <div className="container px-4 mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#d8ff7e] to-[#08801c94] tracking-tight text-center">
            SKILLS & EXPERTISE
          </h2>
          {/* Horizontal Scrolling Skills */}
          <div className="relative overflow-hidden">
            <div className="flex whitespace-nowrap animate-scroll">
              {Array(2)
                .fill(skills) // Duplicate the skills array for seamless looping
                .flat()
                .map((skill, index) => (
                  <div
                    key={index}
                    className="flex gap-8 mx-8 transition-transform duration-500 hover:scale-125"
                    style={{
                      transform:
                        index % 2 === 0
                          ? "translateY(-10px)"
                          : "translateY(10px)",
                    }} // Interchange positions
                  >
                    <div
                      className="p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-secondary/50"
                      style={{
                        boxShadow: `0 0 15px ${skill.color}, 0 0 30px ${skill.color}`, // Glow effect with skill's color
                      }}
                    >
                      {React.cloneElement(skill.icon, {
                        size: 48, // Set a larger size for the icons
                        style: { color: skill.color }, // Assign the real logo color
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-background scroll-mt-16">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-4xl font-extrabold mb-12 tracking-tight"
          >
            EXPERIENCE <span className="text-violet-700">&</span> EDUCATION
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Container */}
      <section
        id="contact"
        className="py-20 bg-black/30 backdrop-blur-lg text-white scroll-mt-16 overflow-hidden"
      >
        {/* Container */}
        <div className="container px-4 mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight flex items-center justify-center gap-4">
            <TerminalIcon className="w-8 h-8 text-green-400" />{" "}
            {/* Terminal Icon */}
            Get In Touch
          </h2>
          {/* Terminal Window */}
          <div className="relative p-8 bg-black/20 rounded-lg border border-gray-700/50 shadow-lg backdrop-blur-md">
            {/* Fake Terminal Header */}
            <div className="flex items-center justify-start gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-4 text-sm text-gray-400">contact_me</span>
            </div>
            {/* Buttons as Terminal Commands */}
            <div className="flex flex-col gap-4 text-left">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-green-400 hover:text-green-300 transition-colors w-full justify-start pl-6"
              >
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  Open GitHub Profile
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-green-400 hover:text-green-300 transition-colors w-full justify-start pl-6"
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Open LinkedIn Profile
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-green-400 hover:text-green-300 transition-colors w-full justify-start pl-6"
              >
                <Link href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
              {/* Twitter Button */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-green-400 hover:text-green-300 transition-colors w-full justify-start pl-6"
              >
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="mr-2 h-5 w-5" />
                  Follow on Twitter
                </Link>
              </Button>
              {/* Google Drive Button */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-green-400 hover:text-green-300 transition-colors w-full justify-start pl-6"
              >
                <Link href="/" target="_blank">
                  <FaGoogleDrive className="mr-2 h-5 w-5" />
                  Resume Download
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
