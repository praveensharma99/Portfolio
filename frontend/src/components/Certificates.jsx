import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import styles from './Certificates.module.css';

const certificates = [
  { title: "TCS iON Career Edge", issuer: "TCS", year: "2024" },
  { title: "Fundamentals of Digital Marketing", issuer: "Google", year: "2024" },
  { title: "AI For All", issuer: "Intel", year: "2024" }
];

const Certificates = () => {
  return (
    <section id="certificates" className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span className={styles.number}>05.</span> Certificates
          </h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {certificates.map((cert, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <FiAward className={styles.icon} size={30} />
              <div>
                <h3 className={styles.title}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer} &mdash; {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
