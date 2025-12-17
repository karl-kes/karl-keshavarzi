import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { path: '/', label: 'Home', notation: 'f(0)' },
    { path: '/projects', label: 'Projects', notation: 'Σ' },
    { path: '/blog', label: 'Blog', notation: '∂/∂t' },
    { path: '/karlkeshavarziresume.pdf', label: 'Resume', notation: 'CV', external: true },
  ];
  
  return (
    <motion.header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoSymbol}>λ</span>
          <span className={styles.logoText}>Karl Keshavarzi</span>
        </Link>
        
        <ul className={styles.navLinks}>
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              {link.external ? (
                <a 
                  href={link.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  <span className={styles.notation}>{link.notation}</span>
                  <span className={styles.label}>{link.label}</span>
                </a>
              ) : (
                <Link 
                  to={link.path} 
                  className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                >
                  <span className={styles.notation}>{link.notation}</span>
                  <span className={styles.label}>{link.label}</span>
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
        
        <button 
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.external ? (
                    <a 
                      href={link.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.mobileNavLink}
                    >
                      <span className={styles.notation}>{link.notation}</span>
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.active : ''}`}
                    >
                      <span className={styles.notation}>{link.notation}</span>
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
