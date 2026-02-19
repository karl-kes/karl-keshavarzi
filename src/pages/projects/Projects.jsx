import { motion } from 'framer-motion';
import { projects } from '@data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Projects</h1>
          <p className={styles.subtitle}>A selection of things I've built.</p>
        </motion.header>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className={styles.cardHeader}>
                <h2>{project.title}</h2>
                {project.equation && (
                  <span className={styles.equation}>{project.equation}</span>
                )}
              </div>
              
              {project.status && (
                <span className={styles.status}>{project.status}</span>
              )}
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.tech}>
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.viewLink}
                  >
                    View →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
