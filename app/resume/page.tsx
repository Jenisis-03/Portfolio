"use client";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

export default function ContactMe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDownload = () => {
    console.log("Resume download initiated");
    // Add your actual download logic here
    // window.open('/path-to-your-resume.pdf', '_blank');
  };

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: <FaTwitter /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/yourusername", icon: <FaGithub /> },
  ];

  const myGmailAddress = "subhamwworks@gmail.com";

  return (
    <section style={{ 
      padding: "40px", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" // Only horizontal centering
    }}>
      <h1
        style={{
          marginBottom: "40px",
          fontFamily: "'Courier Prime', monospace",
          fontWeight: "700",
          fontSize: "32px",
          color: "#333",
          letterSpacing: "1px",
        }}
      >
        Contact Me
      </h1>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "20px", 
        width: "100%", 
        maxWidth: "500px" 
      }}>
        {/* Phone Number */}
        <div style={{ 
          padding: "15px",
          display: "flex",
          alignItems: "center", 
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "translateX(10px)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
        >
          <FaPhone style={{ marginRight: "15px", color: "#007bff", fontSize: "20px" }} />
          <span style={{ 
            fontFamily: "'Courier Prime', monospace",
            fontSize: "18px",
            color: "#333"
          }}>
            +1 (555) 123-4567
          </span>
        </div>

        {/* Gmail */}
        <div style={{ 
          padding: "15px",
          display: "flex",
          alignItems: "center",
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "translateX(10px)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
        >
          <FaEnvelope style={{ marginRight: "15px", color: "#007bff", fontSize: "20px" }} />
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myGmailAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              fontFamily: "'Courier Prime', monospace",
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.color = "#007bff"}
            onMouseOut={(e) => e.currentTarget.style.color = "#333"}
          >
            {myGmailAddress}
          </a>
        </div>

        {/* Social Links */}
        <div style={{ padding: "15px" }}>
          {socialLinks.map((link, index) => (
            <div
              key={index}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                marginBottom: "15px",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateX(10px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
            >
              <span style={{ marginRight: "15px", color: "#007bff", fontSize: "20px" }}>
                {link.icon}
              </span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "18px",
                  color: "#333",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#007bff"}
                onMouseOut={(e) => e.currentTarget.style.color = "#333"}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>

        {/* Resume Download */}
        <div style={{ padding: "15px" }}>
          <button
            onClick={handleDownload}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 24px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Courier Prime', monospace",
              fontSize: "18px",
              width: "100%",
              transition: "background-color 0.2s, transform 0.2s",
              gap: "10px"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#0056b3";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#007bff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaFileDownload style={{ fontSize: "20px" }} />
            Resume Download
          </button>
        </div>
      </div>
    </section>
  );
}