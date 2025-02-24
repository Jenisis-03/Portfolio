"use client";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Theme Provider Component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export default function ContactMe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const handleDownload = () => {
    console.log("Resume download initiated");
    // Add your actual download logic here
  };

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/SubhamD43128457",
      icon: <FaTwitter />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/subham-dubey-",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Jenisis-03",
      icon: <FaGithub />,
    },
  ];

  const myGmailAddress = "subhamwworks@gmail.com";

  // Theme-aware colors
  const textColor = theme === "dark" ? "#D4D4D4" : "#333";
  const primaryColor = theme === "dark" ? "#4dabf7" : "#007bff";
  const bgColor = theme === "dark" ? "#1c2526" : "#fff";

  return (
    <ThemeProvider>
      <section
        style={{
          padding: "40px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: bgColor,
          transition: "background-color 0.3s",
        }}
      >
        <h1
          style={{
            marginBottom: "40px",
            fontFamily: "'Courier Prime', monospace",
            fontWeight: "700",
            fontSize: "32px",
            color: textColor,
            letterSpacing: "1px",
          }}
        >
          Contact Me
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          {/* Phone Number */}
          <div
            style={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateX(10px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateX(0)")
            }
          >
            <FaPhone
              style={{
                marginRight: "15px",
                color: primaryColor,
                fontSize: "20px",
              }}
            />
            <span
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: "18px",
                color: textColor,
              }}
            >
              (+91) 8337061405
            </span>
          </div>

          {/* Gmail */}
          <div
            style={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateX(10px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateX(0)")
            }
          >
            <FaEnvelope
              style={{
                marginRight: "15px",
                color: primaryColor,
                fontSize: "20px",
              }}
            />
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                myGmailAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: "18px",
                color: textColor,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = primaryColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = textColor)}
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
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateX(10px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateX(0)")
                }
              >
                <span
                  style={{
                    marginRight: "15px",
                    color: primaryColor,
                    fontSize: "20px",
                  }}
                >
                  {link.icon}
                </span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: "18px",
                    color: textColor,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = primaryColor)
                  }
                  onMouseOut={(e) => (e.currentTarget.style.color = textColor)}
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          {/* Resume Download */}
          <div style={{ padding: "15px" }}>
            <a
              href="https://drive.google.com/file/d/1cwlNHyn7lNMChiNao2So6zPH0u4vooFs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                backgroundColor: primaryColor,
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontFamily: "'Courier Prime', monospace",
                fontSize: "18px",
                width: "100%",
                transition: "background-color 0.2s, transform 0.2s",
                gap: "10px",
                textDecoration: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme === "dark" ? "#3391d4" : "#0056b3";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaFileDownload style={{ fontSize: "20px" }} />
              Resume Download
            </a>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
