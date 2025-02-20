import Image from "next/image";
import { socialLinks } from "./config";

// Extracted bio content for better maintainability
const BioContent = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      I'm a dynamic software developer fueled by a passion for full-stack web
      development, AI-powered solutions, and visual storytelling through
      photography and editing. As a freelancer, I collaborate with diverse
      clients to transform their visions into sleek, user-friendly digital
      solutions that solve real-world problems. My freelance journey has
      sharpened my ability to adapt, innovate, and deliver tailored solutions
      under varying project requirements. When I'm not coding, editing photos,
      or collaborating with clients, you'll find me exploring cutting-edge
      tech, tackling coding challenges, or contributing to open-source
      projects. For me, every line of code and every captured frame is an
      opportunity to innovate and make an impact.
    </p>
    <p>
      My expertise spans <b><i>Java</i></b>, <b><i>Python</i></b>,{" "}
      <b><i>JavaScript</i></b>, and <b><i>SQL</i></b>, backed by proficiency in
      top-tier frameworks like <b><i>React.js</i></b>, <b><i>Next.js</i></b>,{" "}
      <b><i>Node.js</i></b>, and <b><i>Django</i></b>. I specialize in building
      scalable web applications with seamless frontend-backend integration and
      robust database management using <b><i>MongoDB</i></b> and{" "}
      <b><i>PostgreSQL</i></b>. From crafting the AI-driven Vector-Mind
      Application with lightning-fast responses to developing an intuitive
      Inventory Management System, I take pride in delivering high-performance
      solutions that exceed user expectations. My background in photography and
      editing also sharpens my attention to detail, ensuring that the user
      interfaces I design are as visually engaging as they are efficient.{" "}
      <a
        target="_blank"
        href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
        rel="noopener noreferrer"
      >
        more
      </a>
      .
    </p>
    <p>
      What makes me stand out? It's my relentless drive for excellence and a
      rare fusion of technical precision with creative vision. My freelance
      work has taught me the art of balancing client expectations with
      technical feasibility, delivering bespoke solutions on time and beyond
      expectations. During my internship at H4U, I{" "}
      <b><i>delivered projects 20% ahead of schedule</i></b> while{" "}
      <b><i>boosting performance by 30%</i></b>. I bring a unique edge with deep
      expertise in <b><i>LLM-powered systems</i></b>,{" "}
      <b><i>scalable architectures</i></b>, and <b><i>RESTful APIs</i></b>. My
      research on machine learning-based disease prediction, presented at the
      IEEE World Conference, reflects my commitment to innovation. I’m not just
      a developer—I’m a storyteller, freelancer, and problem-solver ready to
      craft the future, one solution and one story at a time.
    </p>
  </div>
);

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Hey ! ! !</h1>
      <BioContent />
    </section>
  );
}