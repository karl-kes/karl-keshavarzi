import { motion } from 'framer-motion';
import styles from './Projects.module.css';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projects = [
    {
      title: 'N-Body Gravitational Simulator',
      subtitle: 'High-performance physics simulation engine',
      tech: ['C/C++', 'OpenMP', 'Python', 'VPython', 'Pandas', 'NumPy'],
      description: 'Developed gravitational simulator using OOP, achieving sub-0.0002% energy drift over 31.5M second simulations. Simulated 1000+ bodies in parallel using OpenMP, optimized to 500M+ FLOP/s. Implemented symplectic Velocity Verlet integration for accurate orbital mechanics with 60+ FPS 3D rendering.',
      status: 'Complete',
      equation: 'F = Gm₁m₂/r²',
    },
    {
      title: 'Electromagnetic Propulsion System',
      subtitle: 'Multi-stage coilgun with precision timing',
      tech: ['C/C++', 'Python', 'Arduino', 'Altium'],
      description: 'Designed 3-stage accelerator with 200+ turn 16AWG coils and 10x 25V/4700µF capacitor bank. Scaled power delivery to 200J, handling 180A+ inrush from 200V/9,400µF bank with Arduino-controlled gate timing. Targeting 100+ km/h projectile velocity with custom PCB design.',
      status: 'In Progress',
      equation: 'F = BIL',
    },
    {
      title: 'ECE 105 Course Text',
      subtitle: 'Official mechanics curriculum for 400+ students',
      tech: ['LaTeX', 'TikZ', 'Physics', 'Technical Writing'],
      description: 'Selected by Course Coordinator to co-author the official ECE 105 (Classical Mechanics) Course Text for 400+ engineering students at the University of Waterloo. Modernized curriculum infrastructure using LaTeX and TikZ; developed 100+ problems and a comprehensive solutions manual.',
      status: 'In Progress',
      equation: 'τ = Iα',
    },
    {
      title: 'ExoDiscover',
      subtitle: 'AI-powered exoplanet visualization',
      tech: ['Python', 'Flask', 'React', 'Three.js', 'XGBoost/CNN'],
      description: 'Integrated team\'s XGBoost/CNN AI models (70% detection accuracy) for NASA SpaceApps. Delivered dynamic React/Three.js interface rendering 3D visuals of 20,000+ exoplanets at 60FPS. Placed top 4 of all teams (150 participants) in 48 hours.',
      status: 'Complete',
      equation: 'P(planet) = σ(Wx)',
    },
    {
      title: 'UWTranscriptEngine',
      subtitle: 'Academic data management system',
      tech: ['C/C++', 'OOP'],
      description: 'Engineered a Transcript Engine across 12 modular files, utilizing object-oriented programming to model a 3-tier nested hierarchy for data management. Implemented algorithms that automate 2-level weighted average calculations, scaling from single assignments to full degree transcripts without memory leaks.',
      status: 'Complete',
      equation: 'GPA = Σwᵢgᵢ/Σwᵢ',
    },
  ];

  return (
    <div className={styles.projects}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleSection}>
            <span className={styles.notation}>Σ projects</span>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              <span className={styles.quote}>"I am Iron Man"</span> — A collection of things I've built and am building.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.axisLine}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <div className={styles.projectGrid}>
          {projects.map((project, i) => (
            <motion.article 
              key={project.title}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.status} data-status={project.status.toLowerCase().replace(' ', '-')}>
                  {project.status}
                </span>
                <span className={styles.equation}>{project.equation}</span>
              </div>
              
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSubtitle}>{project.subtitle}</p>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              {project.link && (
                <a href={project.link} className={styles.projectLink}>
                  View Project <span>→</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div 
          className={styles.comingSoon}
          variants={itemVariants}
        >
          <span className={styles.comingSoonIcon}>⟨ ⟩</span>
          <p>More detailed project breakdowns coming soon...</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
