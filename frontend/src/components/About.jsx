import React from "react";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";

import styles from "./About.module.css";
import computerAnimation from "../assets/computerAnimation.json";

const About = () => {
  const options = {
    animationData: computerAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
              Hello! I'm Praveen, a passionate MERN Stack Developer currently pursuing my 
              MCA at Chitkara University. I specialize in building highly interactive and 
              scalable web applications that provide seamless user experiences.
            </p>

            <p>
              My journey in web development started with a curiosity for how things work 
              on the internet, which quickly evolved into a professional pursuit. I'm 
              dedicated to writing clean, efficient code and staying up-to-date with 
              the latest industry standards.
            </p>

            <p>
              Beyond coding, I'm always looking to learn new technologies and improve 
              my problem-solving skills. Here are a few technologies I've been working with recently:
            </p>

            <ul className={styles.skillsList}>
              <li>React.js & Next.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageBox}>
              <div className={styles.lottieContainer}>
                {View}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

