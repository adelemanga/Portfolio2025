import React from "react";
import { motion } from "framer-motion";

// ⚡ Corrige le chemin ici (si fichier dans public/assets)
const projects = [
  {
    title: "Portfolio Interactif",
    img: "https://i.imgur.com/DrcbKCv.png", // 🛠️ Chemin correct
    description:
      "Un portfolio interactif avec animations et transitions fluides.",
    link: "https://adelemanga-portfolio.netlify.app/",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "TypeGraphQL"],
  },
  {
    title: "E-commerce Moderne",
    img: "https://i.imgur.com/i1xekKH.png",
    description:
      "Site e-commerce avec expérience utilisateur optimisée et paiement sécurisé.",
    link: "#",
    technologies: ["React", "Node.js", "PostgreSQL", "Nginx"],
  },
  {
    title: "Application Mobile React Native",
    img: "https://i.imgur.com/7oLVQV8.png",
    description:
      "Une app mobile avec React Native et Firebase pour le backend.",
    link: "#",
    technologies: ["React Native", "Firebase", "Docker"],
  },
  {
    title: "Portfolio Interactif",
    img: "https://i.imgur.com/L6sUWRE.png", // 🛠️ Chemin correct
    description:
      "Un portfolio interactif avec animations et transitions fluides.",
    link: "https://adelemanga-portfolio.netlify.app/",
    technologies: ["React", "Node.js", "TypeGraphQL", "Docker"],
  },
  {
    title: "E-commerce Moderne",
    img: "https://i.imgur.com/ubNB7Fh.png",
    description:
      "Site e-commerce avec expérience utilisateur optimisée et paiement sécurisé.",
    link: "#",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "GitHub"],
  },
  {
    title: "Application Mobile React Native",
    img: "https://i.imgur.com/PjXDVgT.png",
    description:
      "Une app mobile avec React Native et Firebase pour le backend.",
    link: "#",
    technologies: ["React Native", "Firebase", "Docker"],
  },
  {
    title: "E-commerce Moderne",
    img: "https://i.imgur.com/SQdTHLH.png",
    description:
      "Site e-commerce avec expérience utilisateur optimisée et paiement sécurisé.",
    link: "#",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "GitHub"],
  },
  {
    title: "Application Mobile React Native",
    img: "https://i.imgur.com/pZq4RUz.png",
    description:
      "Une app mobile avec React Native et Firebase pour le backend.",
    link: "#",
    technologies: ["React Native", "Firebase", "Docker"],
  },
];

function Projects() {
  const getTechIcons = (techList: string[]) => {
    const techIcons: { [key: string]: string } = {
      React: "⚛️",
      "Node.js": "🟩",
      PostgreSQL: "🟪",
      Docker: "🐳",
      Firebase: "🔥",
      TypeGraphQL: "🔷",
      GitHub: "🐙",
      Nginx: "🖥️",
    };

    return techList.map((tech) => techIcons[tech] || "🔧").join(" ");
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">🚀 Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Affichage des technologies sous forme d'icônes */}
              <p className="project-technologies">
                <strong>Technologies utilisées:</strong>{" "}
                {getTechIcons(project.technologies)}
              </p>

              <a href={project.link} className="project-link">
                Voir le projet
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
