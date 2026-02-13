import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Subtle grid background */}
      <div className={styles.gridBg} />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Function signature - C++ style */}
          <div className={styles.signature}>
            <span className={styles.keyword}>void</span>{' '}
            <span className={styles.fn}>greet</span>
            <span className={styles.paren}>()</span>{' '}
            <span className={styles.keyword}>const</span>{' '}
            <span className={styles.brace}>{'{'}</span>
          </div>
          
          <div className={styles.body}>
            <h1 className={styles.name}>Karl Keshavarzi</h1>
            <p className={styles.title}>Computer Engineering @ UWaterloo</p>
            
            <div className={styles.bio}>
              <p>
                Building simulations, embedded systems, and software that sits 
                close to the hardware. Currently doing research in microwave 
                optomagnetics and developing drivers for the Waterloo Aerial Robotics Group.
              </p>
            </div>
            
            <div className={styles.links}>
              <a href="https://github.com/karl-kes" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/karl-keshavarzi" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="/Karl_Keshavarzi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a href="mailto:karl.keshavarzi@uwaterloo.ca">
                Email
              </a>
            </div>
          </div>
          
          <div className={styles.signature}>
            <span className={styles.brace}>{'}'}</span>
          </div>
          
          {/* Valentine */}
          <Link to="/valentine" className={styles.valentineLink}>
            💕
          </Link>
        </motion.div>
        
        {/* Physics decorations */}
        <div className={styles.physics}>
          {/* Simple harmonic oscillator */}
          <svg viewBox="0 0 120 80" className={styles.oscillator}>
            <line x1="10" y1="40" x2="30" y2="40" stroke="currentColor" strokeWidth="0.5" />
            <path 
              d="M30 40 L35 35 L40 45 L45 35 L50 45 L55 35 L60 45 L65 40" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              fill="none"
            />
            <rect x="65" y="32" width="16" height="16" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="73" cy="40" r="2" fill="currentColor" className={styles.mass} />
          </svg>
          
          {/* Equation */}
          <span className={styles.equation}>F = ma</span>
        </div>
      </div>
    </div>
  );
}
