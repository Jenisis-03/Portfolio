"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Increased client revenue by 150% through an optimized e-commerce solution with real-time inventory management and advanced analytics.",
    longDescription: `
      Led the development of a high-performance e-commerce platform that transformed the client's online presence. The solution included:
      
      • Real-time inventory synchronization across multiple warehouses
      • Advanced analytics dashboard for sales and customer behavior
      • Automated order processing and fulfillment
      • Integration with multiple payment gateways
      • Mobile-first responsive design
    `,
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redux"],
    metrics: "150% Revenue Growth • 40% Faster Load Times",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2426&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    description: "Developed a scalable analytics dashboard that helped clients reduce operational costs by 35% through data-driven insights.",
    longDescription: `
      Created a comprehensive SaaS dashboard that provides real-time insights and analytics:
      
      • Custom data visualization components
      • Real-time data processing pipeline
      • Automated reporting system
      • Role-based access control
      • Multi-tenant architecture
    `,
    tech: ["React", "TypeScript", "Node.js", "AWS"],
    metrics: "35% Cost Reduction • 99.9% Uptime",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "AI Content Platform",
    description: "Built an AI-powered content generation platform that increased client productivity by 300%.",
    longDescription: `
      Engineered an AI-powered content generation platform that revolutionized content creation:
      
      • Advanced language models for content generation
      • Content quality scoring system
      • SEO optimization suggestions
      • Multi-language support
      • Content performance analytics
    `,
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    metrics: "300% Productivity Boost • 1M+ Generated Articles",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2426&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Analytics Suite",
    description: "Delivered real-time analytics solution that helped clients make data-driven decisions 5x faster.",
    longDescription: `
      Developed a comprehensive analytics suite that transformed data into actionable insights:
      
      • Real-time data processing
      • Custom reporting engine
      • Predictive analytics
      • Data visualization dashboard
      • Export and integration capabilities
    `,
    tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
    metrics: "5x Faster Decision Making • 10k+ Active Users",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2426&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="mb-12">
          <Button asChild variant="ghost" className="mb-8 -ml-4 hover:bg-background">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-xl text-muted-foreground">
              Detailed overview of selected projects and their impact
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] md:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="mb-auto">
                      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                      <p className="text-primary font-medium mb-4">{project.metrics}</p>
                      <div className="prose prose-invert mb-6">
                        <p className="text-muted-foreground whitespace-pre-line">
                          {project.longDescription}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}