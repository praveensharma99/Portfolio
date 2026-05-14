import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Sequelize"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "GitHub Actions"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span className={styles.number}>04.</span> Skills
          </h2>
          <div className={styles.line}></div>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className={`glass-panel ${styles.skillCard}`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
