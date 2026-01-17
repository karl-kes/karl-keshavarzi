import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Computational Electromagnetics Solver',
    description: '3D Yee-cell FDTD solver for Maxwell\'s equations. Cache-efficient field storage with RAII memory management. Achieved 360× speedup via OpenMP parallelization on 125K-cell grids with 98%+ energy conservation.',
    tech: ['C/C++', 'OpenMP', 'Python', 'Plotly'],
    link: 'https://github.com/karl-kes/Computational-Electromagnetics-Solver',
    equation: '∇×E = −∂B/∂t',
  },
  {
    title: 'N-Body Gravitational Simulator',
    description: 'Symplectic Velocity Verlet integration achieving 99.998% energy conservation over 100+ year simulations. 12× speedup with OpenMP, rendering 1000+ bodies at 60+ FPS via VPython.',
    tech: ['C/C++', 'OpenMP', 'Python', 'VPython'],
    link: 'https://github.com/karl-kes/N-Body-Gravity-Simulator',
    equation: 'F = Gm₁m₂/r²',
  },
  {
    title: 'Electromagnetic Propulsion System',
    description: '3-stage coilgun with 200+ turn 16AWG coils powered by 200V/9,400µF (200J) capacitor bank. Arduino-controlled gate timing for 180A+ inrush currents. Custom Altium PCB targeting 100+ km/h velocity.',
    tech: ['C/C++', 'Arduino', 'Altium'],
    status: 'In Progress',
    equation: 'F = μ₀I²L/2πd',
  },
  {
    title: 'ExoDiscover',
    description: 'NASA Space Apps exoplanet visualization platform. Integrated XGBoost/CNN models (70% detection accuracy) with React/Three.js frontend rendering 20,000+ exoplanets at 60FPS. Top 4 finish among 150 participants.',
    tech: ['Python', 'Flask', 'React', 'Three.js'],
    link: 'https://github.com/wentingcoding960206/ExoDiscover',
    equation: 'L ∝ R²T⁴',
  },
  {
    title: 'Classical Mechanics Problem Sets',
    description: '100+ problems covering kinematics through wave mechanics. Co-authored for UWaterloo ECE 105 official course text, serving 400+ students.',
    tech: ['LaTeX', 'Python'],
    link: 'https://github.com/karl-kes/Classical_Mechanics_PSets',
    equation: 'd/dt(∂L/∂q̇) = ∂L/∂q',
  },
  {
    title: 'K1 Racing',
    description: 'Racing simulator game inspired by Formula One and Mario Kart. Built as an early programming project exploring game physics and graphics.',
    tech: ['Processing'],
    link: 'https://github.com/karl-kes/K1-Racing',
  },
];

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
                    className={styles.link}
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
