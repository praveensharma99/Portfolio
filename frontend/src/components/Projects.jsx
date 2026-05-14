import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import styles from './Projects.module.css';

const projects = [
  {
    title: "LocalServe – Service Booking Marketplace",
    description: "Full-stack marketplace connecting local service providers with customers. Features role-based dashboards for 3 user types, secure JWT auth, and a scalable PostgreSQL backend.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Sequelize ORM", "JWT", "Express.js"],
    github: "https://github.com/praveensharma99/local-Serve"
  },
  {
    title: "NPS Vision – AR E-Commerce",
    description: "AR-enabled ecommerce platform for real-time 3D product visualization using mobile camera, bridging traditional shopping with immersive experiences.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "WebAR", "Model-Viewer"],
    github: "https://github.com/praveensharma99/Ecommerce-Based-AR-Website-"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span className={styles.number}>03.</span> Some Things I've Built
          </h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`glass-panel ${styles.projectCard}`}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <FiFolder className={styles.folderIcon} size={40} />
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub size={22} />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>

              <ul className={styles.techList}>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
