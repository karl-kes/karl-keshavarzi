import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Blog.module.css';

const posts = [
  {
    slug: 'pre-waterloo-thoughts',
    title: 'Before My First Term - Thoughts and Advice',
    date: '2025-08-31',
    excerpt: 'Reflections on the admission process, senior year, and looking forward to starting at Waterloo.',
  },
];

export default function Blog() {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Blog</h1>
          <p className={styles.subtitle}>Notes on engineering and university.</p>
        </motion.header>

        <div className={styles.posts}>
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={`/blog/${post.slug}`} className={styles.post}>
                <time className={styles.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
