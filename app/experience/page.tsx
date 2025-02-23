"use client";
import Link from "next/link";

// Metadata for the page

// Define the type for experience metadata
interface ExperienceMetadata {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  responsibilities: string[];
}

// Define the type for an experience object
interface Experience {
  slug: string;
  metadata: ExperienceMetadata;
}

// Utility function to format dates with error handling
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? "Invalid Date"
    : date.toLocaleDateString(undefined, options);
}

// Mock data for experiences (typed)
function getExperiences(): Experience[] {
  return [
    {
      slug: "full-stack-web-developer-intern-at-h4u",
      metadata: {
        title: "Full Stack Web Developer Intern",
        company: "H4U",
        startDate: "2023-04",
        endDate: "2023-06",
        location: "Kolkata, West Bengal",
        responsibilities: [
          "<i>Engineered</i> and <i>optimized</i> <strong>five responsive web applications</strong> using <strong>Next.js</strong>, <strong>React.js</strong>, and <strong>Tailwind CSS</strong>, improving page load speeds by <strong>30%</strong> and enhancing user satisfaction.",
          "<i>Collaborated</i> with designers and product managers to <i>translate</i> complex requirements into <strong>actionable technical solutions</strong>, resulting in project delivery <strong>20% ahead of schedule</strong>.",
          "<i>Architected</i> and <i>managed</i> <strong>SQL (PostgreSQL, MySQL)</strong> and <strong>NoSQL (MongoDB)</strong> databases, deploying over <strong>10 RESTful APIs</strong> for seamless data interaction, which improved data retrieval times by <strong>25%</strong>.",
          "<i>Facilitated</i> rigorous code reviews and <i>led</i> pair programming sessions, enhancing code quality by reducing bugs by <strong>40%</strong> and fostering better <strong>team collaboration</strong>.",
        ],
      },
    },
  ];
}

// Main ExperiencePage Component
export default function ExperiencePage() {
  const allExperiences: Experience[] = getExperiences();

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Diplomata+SC&family=Monomakh&family=Roboto+Mono:ital,wght@0,600;1,600&display=swap');`}
      </style>
      <section style={{ padding: "20px" }}>
        {/* Experience Section */}
        <h1
          style={{
            marginBottom: "20px",
            fontFamily: "'Courier Prime', monospace",
            fontWeight: "700",
            fontSize: "28px",
          }}
        >
          My Experience
        </h1>
        <div>
          {allExperiences.map((experience) => (
            <div key={experience.slug} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Courier Prime', monospace",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  {experience.metadata.title} at {experience.metadata.company}
                </h2>
                <p
                  style={{
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: "14px",
                  }}
                >
                  {formatDate(experience.metadata.startDate)} -{" "}
                  {experience.metadata.endDate
                    ? formatDate(experience.metadata.endDate)
                    : "Present"}{" "}
                  | {experience.metadata.location}
                </p>
              </div>
              <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                {experience.metadata.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      marginBottom: "5px",
                    }}
                    dangerouslySetInnerHTML={{ __html: responsibility }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <h2
          style={{
            marginTop: "30px",
            marginBottom: "15px",
            fontFamily: "'Courier Prime', monospace",
            fontWeight: "700",
            fontSize: "24px",
          }}
        >
          Education
        </h2>
        <div>
          <div style={{ marginBottom: "15px" }}>
            <h3
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              <strong>Bachelor of Technology</strong> in <i>Computer Science and Engineering</i>
            </h3>
            <p
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: "14px",
              }}
            >
              Narula Institute of Technology, Kolkata, West Bengal | October 2021 – Present
            </p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Higher Secondary
            </h3>
            <p
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: "14px",
              }}
            >
              Central Model School, Kolkata, West Bengal | May 2019 – May 2021
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <h2
          style={{
            marginTop: "30px",
            marginBottom: "15px",
            fontFamily: "'Courier Prime', monospace",
            fontWeight: "700",
            fontSize: "24px",
          }}
        >
          Achievements
        </h2>
        <div>
          <p
            style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: "14px",
            }}
          >
            <strong>Publication</strong>: Dubey, Subham et al.(2024). “<i>Disease Prediction using Machine Learning</i>”. In:
            Proceedings of the <strong>2024 2nd World Conference</strong> on Communication & Computing. forthcoming. <strong>IEEE</strong>.
          </p>
        </div>
      </section>
    </>
  );
}