import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span className={styles.number}>02.</span> Experience
          </h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.timeline}>
          <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
            <div className={styles.timelineDot}></div>
            
            <div className={styles.header}>
              <h3 className={styles.role}>MERN Stack Intern</h3>
              <div className={styles.companyWrapper}>
                <span className={styles.company}>
                  <FiBriefcase className={styles.icon} /> LBM Solution, Mohali
                </span>
                <span className={styles.duration}>
                  <FiCalendar className={styles.icon} /> Feb 2026 – Present
                </span>
              </div>
            </div>
            
            <ul className={styles.bulletPoints}>
              <li>
                Built 3+ MERN apps, achieving 20% faster turnaround via reusable React component libraries.
              </li>
              <li>
                Designed 10+ robust RESTful APIs with Express.js, systematically tested via Postman for reliability.
              </li>
              <li>
                Implemented secure JWT authentication alongside role-based access control to protect user data.
              </li>
              <li>
                Utilized Git, GitHub Actions for CI/CD pipelines, and followed agile workflows for seamless team collaboration.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
