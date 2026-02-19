import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPost } from './index';
import styles from './BlogPost.module.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className={styles.post}>
        <div className={styles.container}>
          <p>Post not found.</p>
          <Link to="/blog" className={styles.back}>← Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className={styles.back}>← Back</Link>
          
          <header className={styles.header}>
            <time className={styles.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1>{post.title}</h1>
          </header>

          <div className={styles.content}>
            {post.sections.map((section, i) => (
              <div key={i} className={styles.section}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.content.split('\n\n').map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </div>
  );
}
