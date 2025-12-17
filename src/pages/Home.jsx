import { motion } from 'framer-motion';
import styles from './Home.module.css';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/karl-kes',
      notation: 'git',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/karl-keshavarzi',
      notation: 'in',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mailto:karl.keshavarzi@uwaterloo.ca',
      notation: '@',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.273L12 9.545l10.091-5.724h.273c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      )
    },
    { 
      name: 'Resume', 
      url: '/karlkeshavarziresume.pdf',
      notation: 'CV',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      )
    },
  ];

  return (
    <div className={styles.home}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Coordinate label */}
        <motion.div className={styles.coordinate} variants={itemVariants}>
          origin(0, 0)
        </motion.div>
        
        {/* Main content grid */}
        <div className={styles.grid}>
          {/* Profile photo section */}
          <motion.div className={styles.photoSection} variants={itemVariants}>
            <div className={styles.photoContainer}>
              <div className={styles.photoFrame}>
                <img 
                  src={`${import.meta.env.BASE_URL}karl-keshavarzi.jpg`}
                  alt="Karl Keshavarzi"
                  className={styles.photo}
                />
                <div className={styles.photoOverlay}></div>
              </div>
              <div className={styles.photoLabel}>
                <span className={styles.labelText}>Karl.jpg</span>
                <span className={styles.labelDim}>350 × 350</span>
              </div>
            </div>
          </motion.div>

          {/* Text content section */}
          <div className={styles.contentSection}>
            <motion.div className={styles.greeting} variants={itemVariants}>
              <span className={styles.func}>void</span>{' '}
              <span className={styles.funcName}>greet</span>() {'{'}
            </motion.div>

            <motion.h1 className={styles.title} variants={itemVariants}>
              <span className={styles.highlight}>Karl Keshavarzi</span>
            </motion.h1>

            <motion.h2 className={styles.subtitle} variants={itemVariants}>
              <span className={styles.arrow}>→</span>
              Computer Engineering @ University of Waterloo
              <span className={styles.gpa}>GPA: 3.8 / 4.0</span>
            </motion.h2>

            <motion.div className={styles.bio} variants={itemVariants}>
              <p>
                I'm a student with an interest in everything computers and physics. 
                I love tackling challenging problems that push me to learn and grow.
              </p>
              <p>
                Built an <span className={styles.accent}>N-body Gravitational Simulator</span> achieving 
                500M+ FLOP/s. Currently working on a <span className={styles.accent}>coilgun</span> delivering 200J 
                to accelerate projectiles to 100+ km/h.
              </p>
              <p>
                Also co-authoring the official <span className={styles.accent}>ECE 105 Course Text</span> for 
                400+ students and contributing to embedded flight software at WARG.
              </p>
              <p className={styles.cta}>
                If you think we could build something cool together or just want to chat, 
                reach out and connect.
              </p>
            </motion.div>

            <motion.div className={styles.closingBrace} variants={itemVariants}>
              {'}'}
            </motion.div>

            <motion.div className={styles.socialLinks} variants={itemVariants}>
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') || link.url.endsWith('.pdf') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={styles.socialIcon}>{link.icon}</span>
                  <span className={styles.socialName}>{link.name}</span>
                  <span className={styles.socialNotation}>{link.notation}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative axis line */}
        <motion.div 
          className={styles.axisLine}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.div>
    </div>
  );
}
