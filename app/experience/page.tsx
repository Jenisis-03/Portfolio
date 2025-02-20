import Link from "next/link";

// Metadata for the page
export const metadata = {
  title: "Subham Dubey - Experience",
  description: "Professional Experience and Projects by Subham Dubey",
};

// Define the type for experience metadata
interface ExperienceMetadata {
  title: string;
  company: string;
  startDate: string;
  endDate?: string; // Optional since "Present" is used if undefined
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
          "Engineered and optimized five responsive web applications using Next.js, React.js, and Tailwind CSS, improving page load speeds by 30% and enhancing user satisfaction.",
          "Collaborated with designers and product managers to translate complex requirements into actionable technical solutions, resulting in project delivery 20% ahead of schedule.",
          "Architected and managed SQL(PostgreSQL, MySQL) and NoSQL(MongoDB) databases, deploying over 10 RESTful APIs for seamless data interaction, which improved data retrieval times by 25%.",
          "Facilitated rigorous code reviews and led pair programming sessions, enhancing code quality by reducing bugs by 40% and fostering better team collaboration.",
        ],
      },
    },
  ];
}

// Main ExperiencePage Component
export default function ExperiencePage() {
  const allExperiences: Experience[] = getExperiences();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        My Experience
      </h1>
      <div>
        {allExperiences.map((experience) => (
          <div key={experience.slug} className="flex flex-col space-y-1 mb-5">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <div>
                <h2 className="text-black dark:text-white font-semibold">
                  {experience.metadata.title} at {experience.metadata.company}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {formatDate(experience.metadata.startDate)} -{" "}
                  {experience.metadata.endDate
                    ? formatDate(experience.metadata.endDate)
                    : "Present"}{" "}
                  | {experience.metadata.location}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
              {experience.metadata.responsibilities.map(
                (responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="mt-10 mb-6 text-xl font-medium tracking-tight">
        Education
      </h2>
      <div>
        <div className="mb-3">
          <h3 className="text-black dark:text-white font-semibold">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Narula Institute of Technology, Kolkata, West Bengal | October 2021
            – Present
          </p>
        </div>
        <div>
          <h3 className="text-black dark:text-white font-semibold">
            Higher Secondary
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Central Model School, Kolkata, West Bengal | May 2019 – May 2021
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <h2 className="mt-10 mb-6 text-xl font-medium tracking-tight">
        Achievements
      </h2>
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Publication: Dubey, Subham et al.(2024). “Disease Prediction using
          Machine Learning”. In: Proceedings of the 2024 2nd World Conference on
          Communication & Computing. forthcoming. IEEE.
        </p>
      </div>
    </section>
  );
}