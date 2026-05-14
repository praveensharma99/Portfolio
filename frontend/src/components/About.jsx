import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span className={styles.number}>01.</span> About Me
          </h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <p>
              I am a MERN Stack Developer and MCA student at Chitkara University 
              with a 9.4 CGPA. I thrive on architecting full-stack applications 
              that combine clean code with exceptional user experiences.
            </p>
            <p>
              Currently, I'm interning at LBM Solution in Mohali, contributing to 
              real-world projects since February 2026. This role has sharpened my 
              ability to design scalable APIs and responsive interfaces under 
              professional standards.
            </p>
            <p>
              During my journey, I built LocalServe, a comprehensive service 
              booking platform, and NPS Vision, an innovative AR-based e-commerce 
              website. These projects reflect my commitment to exploring new 
              technologies and delivering impactful digital products.
            </p>
          </div>
          
          <div className={styles.imageWrapper}>
            <div className={styles.imageBox}>
              <div className={styles.imageOverlay}></div>
              <img src="https://via.placeholder.com/400x400/0a0a0a/00B4FF?text=P" alt="Praveen Kumar Sharma" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
