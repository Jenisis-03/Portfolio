export interface Project {
  title: string;
  description: string;
  realWorldProblem: string;
  learnings: string;
  techStack: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Disease Predict ML",
    description:
      "A sophisticated machine learning model designed to predict diseases based on patient data, enabling early detection and reducing healthcare costs.",
    realWorldProblem:
      "Addresses the need for early disease detection, allowing for timely medical interventions and minimizing healthcare expenditures.",
    learnings:
      "Mastered supervised ML algorithms (logistic regression, decision trees, SVMs), feature engineering, and evaluation metrics (accuracy, precision, recall, F1 score). Gained expertise in preprocessing healthcare datasets and integrating predictive models into healthcare systems.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    url: "https://github.com/Jenisis-03/disease-predict-ml.git",
  },
  {
    title: "Vector Mind",
    description:
      "An advanced vector-based AI solution for natural language processing tasks, enhancing semantic understanding in chatbots, search engines, and recommendation systems.",
    realWorldProblem:
      "Improves text analysis and semantic understanding for better conversational AI, search accuracy, and personalized recommendations.",
    learnings:
      "Developed skills in vector embeddings (Word2Vec, BERT), similarity computations, and optimization of NLP pipelines for real-time applications. Deployed scalable solutions using cloud platforms.",
    techStack: ["Python", "TensorFlow", "Hugging Face Transformers", "Flask"],
    url: "https://github.com/Jenisis-03/vector-mind.git",
  },
  {
    title: "InvoiceIt",
    description:
      "An intuitive invoice generation and management tool designed for freelancers and small businesses to streamline billing processes.",
    realWorldProblem:
      "Simplifies invoice creation and management, saving time for small business owners and ensuring accurate billing.",
    learnings:
      "Acquired knowledge in backend development, REST API creation, database design, and full-stack development with production-ready CRUD operations.",
    techStack: ["Node.js", "Express", "MongoDB", "React", "Bootstrap"],
    url: "https://github.com/Jenisis-03/invoiceit.git",
  },
  {
    title: "RSVP",
    description:
      "A robust event management system for tracking RSVPs, guest list management, and automated attendee communications.",
    realWorldProblem:
      "Streamlines event planning by automating RSVP tracking, guest list management, and communication with attendees.",
    learnings:
      "Strengthened frontend development, user authentication, and state management skills. Integrated third-party APIs for email notifications and calendar syncing.",
    techStack: ["React", "Redux", "Firebase", "Tailwind CSS", "SendGrid API"],
    url: "https://github.com/Jenisis-03/RSVP.git",
  },
  {
    title: "Inventory Management System",
    description:
      "An efficient inventory management tool aimed at optimizing stock tracking and operational workflows.",
    realWorldProblem:
      "Improves inventory management accuracy, enhancing operational efficiency for businesses.",
    learnings:
      "Gained expertise in database design, API integrations, and scalable full-stack application development.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    url: "https://github.com/Jenisis-03/Inventory-Management.git",
  },
  {
    title: "Vector",
    description:
      "Advanced NLP solutions utilizing cutting-edge machine learning models for enhanced semantic analysis.",
    realWorldProblem:
      "Enhances semantic analysis capabilities crucial for search engines and recommendation systems.",
    learnings:
      "Focused on advanced NLP techniques, real-time application optimizations, and deployment on cloud infrastructures.",
    techStack: ["Python", "TensorFlow", "Hugging Face Transformers", "Flask"],
    url: "https://github.com/Jenisis-03/Vector.git",
  },
];