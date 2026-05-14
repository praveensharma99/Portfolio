import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.header}>
          <p className={styles.subtitle}>07. What's Next?</p>
          <h2 className={styles.title}>Let's Build Something Together</h2>
          <p className={styles.desc}>
            Actively seeking full stack developer roles and open to collaborations.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={`glass-panel ${styles.infoCard}`}>
              <a href="mailto:praveensharma4448@gmail.com" className={styles.infoLink}>
                <FiMail size={24} className={styles.icon} />
                <span>praveensharma4448@gmail.com</span>
              </a>
              <a href="tel:+918360428961" className={styles.infoLink}>
                <FiPhone size={24} className={styles.icon} />
                <span>+91 8360428961</span>
              </a>
              <a href="https://linkedin.com/in/praveen-sharma4448" target="_blank" rel="noreferrer" className={styles.infoLink}>
                <FiLinkedin size={24} className={styles.icon} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/praveensharma99" target="_blank" rel="noreferrer" className={styles.infoLink}>
                <FiGithub size={24} className={styles.icon} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                name="message" 
                placeholder="Message" 
                rows="5" 
                required 
                value={formData.message}
                onChange={handleChange}
                className={styles.input}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Say Hello'}
            </button>
            {status === 'success' && <p className={styles.successMsg}>Message sent successfully!</p>}
            {status === 'error' && <p className={styles.errorMsg}>Something went wrong. Please try again.</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
