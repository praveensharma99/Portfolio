import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import styles from './Certificates.module.css'; // Reusing similar styles

const achievements = [
  "Member, Computer Society of India",
  "Participated in technical workshops and cloud automation sessions by CSI Student chapter"
];

const Achievements = () => {
  return (
    <section id="achievements" className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span className={styles.number}>06.</span> Achievements
          </h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.list}>
          {achievements.map((achievement, index) => (
            <div key={index} className={`glass-panel ${styles.achievementItem}`}>
              <FiStar className={styles.starIcon} size={20} />
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
