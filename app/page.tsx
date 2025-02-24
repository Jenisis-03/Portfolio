"use client";
import Image from "next/image";
import { socialLinks } from "./config";
import { memo } from "react";

// Color palette
const colors = {
  primary: "#AEEA94",
  secondary: "#FABC3F",
  accent: "#E85C0D",
  text: "#821131",
  background: "#FFFBCA",
  hover: "#4635B1",
  darkAccent: "#C7253E",
};

// Reusable style objects
const typography = {
  fontFamily: "'Courier Prime', monospace",
};

const commonText = {
  ...typography,
  color: colors.text,
};

const listItemStyle = {
  ...typography,
  marginBottom: "8px",
  color: colors.text,
};

const hoverEffect = {
  transition: "padding-left 0.2s",
};

// Bio Component
const BioContent = memo(() => (
  <div style={{ marginBottom: "25px" }}>
    <p
      style={{
        ...commonText,
        fontSize: "18px",
        lineHeight: "1.5",
      }}
    >
      I’m a <strong style={{ color: colors.primary }}>Full-Stack Web</strong> and{" "}
      <strong style={{ color: colors.primary }}>AI/ML Developer</strong>, with a
      side of <strong style={{ color: colors.secondary }}>Freelancing</strong>{" "}
      and <strong style={{ color: colors.secondary }}>Photography</strong>. I{" "}
      <i style={{ color: colors.accent }}>love</i>{" "}
      <strong>turning ideas into reality</strong>—whether it’s{" "}
      <i>designing</i> <strong>blazing-fast web apps</strong>, <i>tuning</i>{" "}
      <strong>AI algorithms</strong>, or <i>snapping</i> stunning visuals. My
      mission? Deliver <strong>game-changing solutions</strong> with a dash of{" "}
      <i style={{ color: colors.accent }}>creativity</i> and a ton of{" "}
      <strong>tech prowess</strong>. Ready to <i>team up</i> and{" "}
      <strong>build something epic</strong>?
    </p>
  </div>
));

// Tech Stack Component
const TechStack = memo(() => {
  const techItems = [
    { tech: "Java", desc: "<i>Powering robust backends</i>" },
    { tech: "Python", desc: "<i>AI/ML and automation magic</i>" },
    { tech: "JavaScript", desc: "<i>Dynamic, user-first UIs</i>" },
    { tech: "SQL", desc: "<i>Data precision at scale</i>" },
  ];

  const toolItems = [
    { tech: "React.js", desc: "<i>Slick, interactive frontends</i>" },
    { tech: "Next.js", desc: "<i>Full-stack domination</i>" },
    { tech: "Node.js", desc: "<i>Server-side speed</i>" },
    { tech: "Django", desc: "<i>Backend in a flash</i>" },
    { tech: "MongoDB", desc: "<i>Flexible data flows</i>" },
    { tech: "PostgreSQL", desc: "<i>Rock-solid databases</i>" },
    { tech: "TailwindCSS", desc: "<i>Sleek Modern CSS</i>" },
  ];

  return (
    <div style={{ marginTop: "25px" }}>
      <h2
        style={{
          ...commonText,
          fontWeight: "700",
          fontSize: "22px",
          marginBottom: "15px",
          color: colors.darkAccent,
        }}
      >
        <i>Core</i> Tech Arsenal
      </h2>
      <div style={{ ...commonText, fontSize: "16px", marginBottom: "10px" }}>
        --- Languages ---
      </div>
      <ul style={{ paddingLeft: "25px", listStyleType: "none" }}>
        {techItems.map((item, index) => (
          <li
            key={index}
            style={{ ...listItemStyle, ...hoverEffect }}
            onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "10px")}
            onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
          >
            <strong style={{ color: colors.primary }}>{item.tech}</strong> –{" "}
            <span dangerouslySetInnerHTML={{ __html: item.desc }} />
          </li>
        ))}
      </ul>

      <h2
        style={{
          ...commonText,
          fontWeight: "700",
          fontSize: "22px",
          margin: "20px 0 15px",
          color: colors.darkAccent,
        }}
      >
        Frameworks & Tools
      </h2>
      <div style={{ ...commonText, fontSize: "16px", marginBottom: "10px" }}>
        --- Toolkit ---
      </div>
      <ul style={{ paddingLeft: "25px", listStyleType: "none" }}>
        {toolItems.map((item, index) => (
          <li
            key={index}
            style={{ ...listItemStyle, ...hoverEffect }}
            onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "10px")}
            onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
          >
            <strong style={{ color: colors.primary }}>{item.tech}</strong> –{" "}
            <span dangerouslySetInnerHTML={{ __html: item.desc }} />
          </li>
        ))}
      </ul>
    </div>
  );
});

// Resume Button Component
const ResumeButton = memo(() => (
  <a
    href="https://drive.google.com/file/d/1cwlNHyn7lNMChiNao2So6zPH0u4vooFs/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      ...typography,
      display: "inline-block",
      marginTop: "30px",
      padding: "12px 25px",
      fontSize: "18px",
      fontWeight: "700",
      color: colors.background,
      background: colors.primary,
      border: `2px solid ${colors.accent}`,
      borderRadius: "8px",
      textDecoration: "none",
      position: "relative",
      overflow: "hidden",
      transition: "background 0.3s, box-shadow 0.3s, transform 0.3s",
      boxShadow: `0 0 10px ${colors.primary}`,
    }}
    onMouseEnter={(e) => {
      const target = e.currentTarget;
      target.style.background = colors.hover;
      target.style.boxShadow = `0 0 15px ${colors.hover}`;
      target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      const target = e.currentTarget;
      target.style.background = colors.primary;
      target.style.boxShadow = `0 0 10px ${colors.primary}`;
      target.style.transform = "scale(1)";
    }}
  >
    <span style={{ position: "relative", zIndex: 1 }}> >> Download Resume</span>
    <span
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "0",
        height: "0",
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        transition: "width 0.4s, height 0.4s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.width = "200px";
        e.currentTarget.style.height = "200px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.width = "0";
        e.currentTarget.style.height = "0";
      }}
    />
  </a>
));

// Main Page Component
export default function Page() {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');`}
      </style>
      <section style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/profile.png"
            alt="Profile photo"
            style={{
              borderRadius: "50%",
              display: "block",
              margin: "0 auto 25px",
              transition: "transform 0.3s",
            }}
            width={160}
            height={160}
            priority
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>

        <h1
          style={{
            ...commonText,
            fontWeight: "700",
            fontSize: "32px",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <i>Hey there</i>!
        </h1>
        <BioContent />
        <TechStack />
        <div style={{ textAlign: "center" }}>
          <ResumeButton />
        </div>
      </section>
    </>
  );
}