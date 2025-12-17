import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './BlogPost.module.css';

// Blog post data
const posts = {
  'pre-waterloo-thoughts': {
    title: 'Before My First Term - Thoughts and Advice',
    date: 'August 31, 2025',
    readTime: '8 min read',
    content: [
      {
        type: 'paragraph',
        text: `I was accepted to the University of Waterloo for Computer Engineering which is pretty neat. I've always loved computers and technology in general so, fortunately, it was never really a question of what I wanted to do. I got the idea of blogging my experience from Jordyn Mindroff, an older computer engineering student at Waterloo.`,
      },
      {
        type: 'heading',
        text: 'Admission Advice',
      },
      {
        type: 'paragraph',
        text: `There is a lot I could say regarding the admission process, so I'll keep it to the information I deem important.`,
      },
      {
        type: 'paragraph',
        text: `First, getting all those applications and supplemental forms done early is going to save so much hassle and possible stress; I personally finished all of mine at the end of October. This left me in a much better spot when it came around to final exams as while many of my classmates had to balance both tests and their applications, I could put all of my efforts towards classes. I even know someone who had their application cancelled as they failed to meet the Waterloo Engineering deadline, thinking it would be the same date as the one for the Faculty of Math. One of my friends procrastinated on his UBC application until the last couple of days. Somehow, his document corrupted a day before the deadline, forcing him to rewrite it all over again in a couple of hours. You can take a guess on whether he was accepted or not.`,
      },
      {
        type: 'paragraph',
        text: `Next, and most obviously, is to work hard, especially in senior year. Grade 11 may have some impact on whether or not you get accepted early, but for the coveted programs (UofT/Waterloo Eng), many of the admissions will be purely based on your Grade 12 performance. Putting aside weekends of fun for maybe 1-5% more on a test sounds daunting and outright awful, but it is these dedicated students who make it to such programs. I sacrificed a lot of time that could've been with my friends because I had set my mind to a goal. Find the accepted average of the program you want and aim for slightly higher. However, make sure to find the actual average, not the one listed on the university website as it is often much lower.`,
      },
      {
        type: 'paragraph',
        text: `This one may be a bit of a hot take, but honestly, extracurriculars don't matter as much as most would make them out to be. Now that doesn't mean you can get into Waterloo Eng/CS with no ECs; you still need to show that you are not a one-trick study pony. However, from what I've seen, it is more so about communicating learning, growth and development, and that you are more than just a couple test scores. You can have "very weak" ECs and be accepted the same way you can have "very strong" ECs and be rejected. Show the admissions officer why they should take you instead of someone else; develop yourself in the essays and have the AO be emotionally invested in you. A story is much better than writing a glorified list of all the competitions you've won, and the clubs you've founded.`,
      },
      {
        type: 'heading',
        text: 'Senior Year',
      },
      {
        type: 'paragraph',
        text: `Looking back, senior year felt like the longest yet somehow the shortest out of all the years. My first semester was nothing but academic classes and prerequisites for my top six courses. My daily routine turned into school, basketball, work, studying until I went to sleep, then waking up to repeat it the next day. While there was comfort in consistency, at some point it became incredibly boring as every day felt the exact same.`,
      },
      {
        type: 'paragraph',
        text: `The saving grace during this period was definitely basketball. While I did complain from time to time about how many games or practices we had, I am so thankful that I was a part of the team since the beginning. The sport, and those I played it with, have given me memories and life lessons that I will undoubtedly carry forever. Regardless, I kept my head down and continued to work.`,
      },
      {
        type: 'paragraph',
        text: `In contrast, my second semester went by incredibly quick. Since none of my classes were going to be included within my top six, I began to slack off. Senioritis got me and it hit hard. Then I finally received my letter of acceptance in March. Honestly, I wasn't very excited. I think I gaslit myself into thinking I would get in no matter what and that it was just a matter of time. But this is when my slacking off peaked and my attendance fell off a cliff. I had 4 missed days in the first semester and over 40 during my second. During March-June I was basically a part-time student, and even that is generous. However, it was also the best semester of high school.`,
      },
      {
        type: 'paragraph',
        text: `Give a high school student easy classes, good friends, unlimited time, a car, and you'll guarantee them some fun. I think everyone in the class realized that this was our last couple of months together; there was a sense of togetherness that definitely wasn't there before. The vibes were definitely much more chill. You only get one high school experience and I'm glad to say I made the most of it.`,
      },
      {
        type: 'heading',
        text: 'Looking Forward',
      },
      {
        type: 'paragraph',
        text: `Before getting to Waterloo, my family and I flew to Saint John, New Brunswick to visit my aunt. After a terrible experience (over 36 hours in airports/planes) due to Air Canada's strikes and problems, we had finally arrived. Saint John, while extremely empty, is beautiful. I'm also glad I got to try some Maritime fresh lobster. We then drove to Montreal which has quickly become my favourite city in Canada, Toronto, Hamilton, and finally, Waterloo. Now that I am sitting in my new home, I can, for the first time in my life, say I am surrounded by like-minded people.`,
      },
      {
        type: 'paragraph',
        text: `I have never been more excited for the future. I am certain that this period in my life will be extremely challenging, but at least it'll build character or something right? I am so excited for classes to start; I get the opportunity to learn about my passion at one of the best institutions in the world. I plan on joining the WARG design team and am on the fence about UWASIC. I love the idea of learning more about hardware but I'm hesitant since I have no experience and their onboarding is a bit intimidating. However, I'm going to give it a shot before coming to a conclusion; I refuse to let go of these incredible opportunities.`,
      },
      {
        type: 'paragraph',
        text: `As for grades, I will continue to strive for high marks. Though, I understand and fully expect for them to tank relative to my numbers in high school. It's just something I want to do, why not try to be the best in every aspect of my life? My goal is to make the Dean's List, but I'll have to update about that in the next blog post. See you in a couple months!`,
      },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  if (!post) {
    return (
      <div className={styles.blogPost}>
        <div className={styles.container}>
          <h1>Post not found</h1>
          <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogPost}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link to="/blog" className={styles.backLink}>
            <span className={styles.arrow}>←</span> Back to Blog
          </Link>
        </motion.div>

        <motion.article className={styles.article} variants={itemVariants}>
          <header className={styles.header}>
            <motion.div className={styles.meta} variants={itemVariants}>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.divider}>·</span>
              <span className={styles.readTime}>{post.readTime}</span>
            </motion.div>
            
            <motion.h1 className={styles.title} variants={itemVariants}>
              {post.title}
            </motion.h1>

            <motion.div 
              className={styles.headerLine}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </header>

          <div className={styles.content}>
            {post.content.map((block, i) => (
              <motion.div key={i} variants={itemVariants}>
                {block.type === 'heading' ? (
                  <h2 className={styles.heading}>{block.text}</h2>
                ) : (
                  <p className={styles.paragraph}>{block.text}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.article>

        <motion.div 
          className={styles.footer}
          variants={itemVariants}
        >
          <div className={styles.footerLine} />
          <Link to="/blog" className={styles.backLink}>
            <span className={styles.arrow}>←</span> Back to Blog
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
