export interface Project {
  title: string;
  year: number;
  description: string;
  realWorldProblem: string;
  learnings: string;
  techStack: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Disease Predict ML",
    year: 2023,
    description: "A machine learning model designed to predict diseases based on patient data.",
    realWorldProblem: "Helps in early detection of diseases, enabling timely medical intervention and reducing healthcare costs.",
    learnings: "Gained expertise in supervised machine learning algorithms, feature engineering, and model evaluation metrics like accuracy, precision, and recall. Learned how to preprocess healthcare data and implement predictive models that can be integrated into healthcare systems.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    url: "https://github.com/Jenisis-03/disease-predict-ml.git",
  },
  {
    title: "Vector Mind",
    year: 2023,
    description: "A vector-based AI solution for natural language processing tasks.",
    realWorldProblem: "Improves text analysis and semantic understanding, which can be applied in chatbots, search engines, and recommendation systems.",
    learnings: "Developed skills in vector embeddings (e.g., Word2Vec, BERT) and similarity computations. Learned how to optimize NLP pipelines for real-time applications and deploy scalable solutions using cloud platforms.",
    techStack: ["Python", "TensorFlow", "Hugging Face Transformers", "Flask"],
    url: "https://github.com/Jenisis-03/vector-mind.git",
  },
  {
    title: "InvoiceIt",
    year: 2023,
    description: "A tool for generating and managing invoices for small businesses.",
    realWorldProblem: "Simplifies invoice creation and management, saving time for freelancers and small business owners while ensuring accurate billing.",
    learnings: "Learned about backend development, database design, and REST API creation. Gained hands-on experience with full-stack development and implementing CRUD operations in a production-like environment.",
    techStack: ["Node.js", "Express", "MongoDB", "React", "Bootstrap"],
    url: "https://github.com/Jenisis-03/invoiceit.git",
  },
  {
    title: "RSVP",
    year: 2023,
    description: "An event management system for tracking RSVPs and organizing events.",
    realWorldProblem: "Streamlines event planning by automating RSVP tracking, guest list management, and communication with attendees.",
    learnings: "Improved skills in frontend development, user authentication, and state management. Learned how to build responsive web applications and integrate third-party APIs for email notifications and calendar syncing.",
    techStack: ["React", "Redux", "Firebase", "Tailwind CSS", "SendGrid API"],
    url: "https://github.com/Jenisis-03/RSVP.git",
  },
];