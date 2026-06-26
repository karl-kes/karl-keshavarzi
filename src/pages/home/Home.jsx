import { motion } from 'framer-motion';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
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
            <p className={styles.title}>Computer Engineering @ University of Waterloo</p>
            
            <div className={styles.bio}>
              <p>
                I write low-level systems and HPC software: CUDA kernels, parallel solvers, and code
                that lives close to the hardware. My research experience centers on distributed GPU
                algorithms for maximal independent sets. I've recently begun work on ML compilers.
                Open to discussing new opportunities and collaborations.
                Feel free to reach out.
              </p>
            </div>

            <div className={styles.bio}>
              <p>
                Email: karl.keshavarzi@uwaterloo.ca
              </p>
            </div>
            
            <div className={styles.links}>
              <a href="https://github.com/karl-kes" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/karl-keshavarzi" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:karl.keshavarzi@uwaterloo.ca">
                Email
              </a>
            </div>
          </div>
          
          <div className={styles.signature}>
            <span className={styles.brace}>{'}'}</span>
          </div>
        </motion.div>

        <motion.p 
          className={styles.quote}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          &ldquo;What I cannot create, I do not understand.&rdquo; — Richard Feynman
        </motion.p>
      </div>
    </div>
  );
}
