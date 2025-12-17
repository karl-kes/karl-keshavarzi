import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Blog.module.css';

export default function Blog() {
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

  const posts = [
    {
      slug: 'pre-waterloo-thoughts',
      title: 'Before My First Term - Thoughts and Advice',
      date: 'August 31, 2025',
      excerpt: 'Reflections on getting accepted to UWaterloo Computer Engineering, advice for applicants, and what I\'m looking forward to.',
      readTime: '8 min read',
      tags: ['University', 'Advice', 'Personal'],
    },
  ];

  return (
    <div className={styles.blog}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleSection}>
            <span className={styles.notation}>∂/∂t journal</span>
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.subtitle}>
              My University Journey — documenting experiences at UWaterloo, 
              co-op adventures, and everything I learn along the way.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.axisLine}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <div className={styles.postList}>
          {posts.map((post, i) => (
            <motion.article 
              key={post.slug}
              className={styles.postCard}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>{post.date}</span>
                  <span className={styles.postReadTime}>{post.readTime}</span>
                </div>
                
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                
                <div className={styles.postTags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <span className={styles.readMore}>
                  Read more <span className={styles.arrow}>→</span>
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className={styles.moreComingSoon}
          variants={itemVariants}
        >
          <div className={styles.timeline}>
            <span className={styles.timelineDot}></span>
            <span className={styles.timelineLabel}>More posts coming soon...</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
