"use client";
import Image from "next/image";
import { socialLinks } from "./config"; // Assuming this is defined elsewhere

// Bio Component
const BioContent = () => (
  <div style={{ marginBottom: "25px" }}>
    <p
      style={{
        fontFamily: "'Courier Prime', monospace",
        fontSize: "18px",
        lineHeight: "1.5",
      }}
    >
      I’m a <strong>Full-Stack Web</strong> and <strong>AI/ML Developer</strong>
      , with a side of <strong>Freelancing</strong> and{" "}
      <strong>Photography</strong>. I <i>love</i>{" "}
      <strong>turning ideas into reality</strong>—whether it’s
      <i>designing</i> <strong>blazing-fast web apps</strong>, <i>tuning</i>{" "}
      <strong>AI algorithms</strong>, or <i>snapping</i> stunning visuals. My
      mission? Deliver <strong>game-changing solutions</strong>
      with a dash of <i>creativity</i> and a ton of{" "}
      <strong>tech prowess</strong>. Ready to <i>team up</i> and{" "}
      <strong>build something epic</strong>?
    </p>
  </div>
);

// Tech Stack Component
const TechStack = () => (
  <div style={{ marginTop: "25px" }}>
    {/* Programming Languages */}
    <h2
      style={{
        fontFamily: "'Courier Prime', monospace",
        fontWeight: "700",
        fontSize: "22px",
        marginBottom: "15px",
      }}
    >
      <i>Core</i> Tech Arsenal
    </h2>
    <div
      style={{
        marginBottom: "10px",
        fontFamily: "'Courier Prime', monospace",
        fontSize: "16px",
      }}
    >
      --- Languages ---
    </div>
    <ul style={{ paddingLeft: "25px", listStyleType: "none" }}>
      {[
        { tech: "Java", desc: "<i>Powering robust backends</i>" },
        { tech: "Python", desc: "<i>AI/ML and automation magic</i>" },
        { tech: "JavaScript", desc: "<i>Dynamic, user-first UIs</i>" },
        { tech: "SQL", desc: "<i>Data precision at scale</i>" },
      ].map((item, index) => (
        <li
          key={index}
          style={{
            fontFamily: "'Courier Prime', monospace",
            marginBottom: "8px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "10px")}
          onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0px")}
        >
          <strong>{item.tech}</strong> – {item.desc}
        </li>
      ))}
    </ul>

    {/* Frameworks and Tools */}
    <h2
      style={{
        fontFamily: "'Courier Prime', monospace",
        fontWeight: "700",
        fontSize: "22px",
        marginTop: "20px",
        marginBottom: "15px",
      }}
    >
      <i>Elite</i> Frameworks & Tools
    </h2>
    <div
      style={{
        marginBottom: "10px",
        fontFamily: "'Courier Prime', monospace",
        fontSize: "16px",
      }}
    >
      --- Toolkit ---
    </div>
    <ul style={{ paddingLeft: "25px", listStyleType: "none" }}>
      {[
        { tech: "React.js", desc: "<i>Slick, interactive frontends</i>" },
        { tech: "Next.js", desc: "<i>Full-stack domination</i>" },
        { tech: "Node.js", desc: "<i>Server-side speed</i>" },
        { tech: "Django", desc: "<i>Backend in a flash</i>" },
        { tech: "MongoDB", desc: "<i>Flexible data flows</i>" },
        { tech: "PostgreSQL", desc: "<i>Rock-solid databases</i>" },
      ].map((item, index) => (
        <li
          key={index}
          style={{
            fontFamily: "'Courier Prime', monospace",
            marginBottom: "8px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "10px")}
          onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0px")}
        >
          <strong>{item.tech}</strong> – {item.desc}
        </li>
      ))}
    </ul>
  </div>
);

// Main Page Component
export default function Page() {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Diplomata+SC&family=Monomakh&family=Roboto+Mono:ital,wght@0,600;1,600&display=swap');`}
      </style>
      <section style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
        {/* Profile Image */}
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/profile.png"
            alt="Profile photo"
            style={{
              borderRadius: "50%",
              display: "block",
              margin: "0 auto 25px auto",
              transition: "transform 0.3s",
            }}
            width={160}
            height={160}
            priority
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>

        {/* Content */}
        <h1
          style={{
            marginBottom: "25px",
            fontFamily: "'Courier Prime', monospace",
            fontWeight: "700",
            fontSize: "32px",
            textAlign: "center",
          }}
        >
          <i>Hey there</i>!
        </h1>
        <BioContent />
        <TechStack />
      </section>
    </>
  );
}
