import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Valentine.module.css';

export default function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const containerRef = useRef(null);

  const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you being serious?",
    "This is your final answer?",
  ];

  const runAway = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width - 120;
    const maxY = container.height - 60;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoPosition({ x: newX, y: newY });
    setAttempts(prev => Math.min(prev + 1, messages.length - 1));
    setYesScale(prev => Math.min(prev + 0.15, 2.2));
  };

  if (accepted) {
    return (
      <div className={styles.valentine}>
        <div className={styles.celebration}>
          {/* Hearts explosion */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.heart}
              initial={{ 
                opacity: 1,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{ 
                opacity: [1, 1, 0],
                scale: [0, 1, 1],
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 800,
                rotate: Math.random() * 360,
              }}
              transition={{ 
                duration: 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            >
              ❤️
            </motion.div>
          ))}
          
          <motion.div
            className={styles.successContent}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className={styles.bigHeart}
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              😛😛😛
            </motion.div>
            <h1>Yay</h1>
            <p>I knew you'd say yes😒🙄</p>
            
            {/* Happy cat */}
            <motion.div 
              className={styles.happyCat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className={styles.catEmoji}>😺</span>
              <span className={styles.catText}>the cat (benny) approves</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.valentine} ref={containerRef}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.hearts}>💕</div>
        <h1>Will you be my Valentine?</h1>
        
        {/* Cat observer */}
        <motion.div 
          className={styles.catObserver}
          animate={{ 
            x: noPosition.x * 0.1,
            rotate: noPosition.x * 0.02,
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <span className={styles.observerEmoji}>{attempts > 5 ? "🙀" : attempts > 2 ? "😾" : "🐱"}</span>
        </motion.div>
        
        <div className={styles.buttons}>
          <motion.button
            className={styles.yesButton}
            onClick={() => setAccepted(true)}
            animate={{ scale: yesScale }}
            whileHover={{ scale: yesScale + 0.05 }}
            whileTap={{ scale: yesScale - 0.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Yes!
          </motion.button>
          
          <motion.button
            className={styles.noButton}
            onMouseEnter={runAway}
            onTouchStart={runAway}
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {messages[attempts]}
          </motion.button>
        </div>
        
        {attempts > 2 && (
          <motion.p 
            className={styles.hint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {attempts > 5 
              ? "Even the cat thinks you should say yes..." 
              : "The button seems to have a mind of its own..."}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
