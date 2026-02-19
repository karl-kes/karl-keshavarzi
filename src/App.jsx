import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import Layout from '@components/layout/Layout';
import Home from '@pages/home/Home';
import Projects from '@pages/projects/Projects';
import Blog from '@pages/blog/Blog';
import BlogPost from '@pages/blog/BlogPost';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
