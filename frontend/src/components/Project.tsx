import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const projects = [
  {
    img: "https://i.imgur.com/DrcbKCv.png",
    link: "https://adelemanga-portfolio.netlify.app/",
    technologies: ["React", "Node.js", "CSS", "JavaScript", "GitHub"],
  },
  {
    img: "https://i.imgur.com/pZq4RUz.png",
    link: "https://test.amicale-seniors-liebherr.net/",
    technologies: [
      "WordPress",
      "CSS",
      "Plugins",
      "Laragon",
      "FTP",
      "RapidDomaine",
    ],
  },
  {
    img: "https://i.imgur.com/i1xekKH.png",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "SQLite",
      "Next.js",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "GitHub",
    ],
  },
  {
    img: "https://i.imgur.com/L6sUWRE.png",
    link: "https://adelemanga-portfolio.netlify.app/",
    technologies: ["WordPress", "CSS", "Plugins", "Laragon", "Figma"],
  },
  {
    img: "https://i.imgur.com/7oLVQV8.png",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "SQLite",
      "Next.js",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "GitHub",
    ],
  },
  {
    img: "https://i.imgur.com/ubNB7Fh.png",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "SQLite",
      "Next.js",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "GitHub",
    ],
  },
  {
    img: "https://i.imgur.com/PjXDVgT.png",
    link: "#",
    technologies: [
      "GitHub",
      "Docker",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Nginx",
      "TypeGraphQL",
    ],
  },
  {
    img: "https://i.imgur.com/SQdTHLH.png",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "GitHub",
      "JavaScript",
      "Postman",
      "MySQL",
      "JavaScript",
    ],
  },
];

function Projects() {
  const { t } = useTranslation();

  const getTechIcons = (techList: string[]) => {
    const techIcons: { [key: string]: string } = {
      React: "⚛️React",
      "Node.js": "❇️Node.js",
      PostgreSQL: "🟪PostgreSQL",
      Docker: "🐳Docker",
      TypeGraphQL: "🔷TypeGraphQL",
      GitHub: "🐙GitHub",
      Nginx: "🖥️Nginx",
      "Next.js": "⏭️Next.js",
      Apollo: "🚀Apollo",
      "Tailwind CSS": "🌬️Tailwind CSS",
      CSS: "🎀CSS",
      SQLite: "💾SQLite",
      JavaScript: "🟨JavaScript",
      TypeScript: "🔵TypeScript",
      Postman: "🔵Postman",
      MySQL: "🐬MySQL",
      TypeORM: "📦TypeORM",
      WordPress: "📝WordPress",
      Plugins: "🧩Plugins",
      Laragon: "🧰Laragon",
      FTP: "📡FTP",
      RapidDomaine: "🌐RapidDomaine",
      Figma: "🎨Figma",
    };

    return techList.map((tech) => techIcons[tech] || tech).join(" ");
  };

  return (
    <div className="projects-container">
      <div className="page-container projects-inner">
        <h2 className="projects-title">{t.projects.pageTitle}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const content = t.projects.items[index];

            return (
              <motion.div
                key={content.title}
                className="project-card"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={project.img}
                  alt={`${t.projects.imageAlt} - ${content.title}`}
                  className="project-img"
                />
                <div className="project-content">
                  <h3 className="project-title">{content.title}</h3>
                  <p className="project-description">{content.description}</p>

                  <p className="project-technologies">
                    <strong>{t.projects.technologiesLabel}:</strong>{" "}
                    {getTechIcons(project.technologies)}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t.projects.projectCta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
