import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';

const titles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "React.js Developer",
  "Node.js Developer"
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        const nextText = isDeleting
          ? currentTitle.substring(0, currentText.length - 1)
          : currentTitle.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  // Particles generator
  const particles = Array.from({ length: 20 });

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Particles */}
      <div className={styles.particlesContainer}>
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
            }}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Praveen Kumar Sharma.</h1>
          <h2 className={styles.titleWrapper}>
            I am a <span className="gradient-text">{currentText}</span>
            <span className={styles.cursor}>|</span>
          </h2>
          
          <p className={styles.tagline}>
            Engineering robust web solutions that perform and scale.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryBtn}>Check out my work!</a>
            <div className={styles.socialLinks}>
              <a href="https://github.com/praveensharma99" target="_blank" rel="noreferrer"><FiGithub size={24} /></a>
              <a href="https://linkedin.com/in/praveen-sharma4448" target="_blank" rel="noreferrer"><FiLinkedin size={24} /></a>
              <a href="mailto:praveensharma4448@gmail.com"><FiMail size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
