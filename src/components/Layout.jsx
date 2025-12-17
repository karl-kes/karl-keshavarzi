import Navigation from './Navigation';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }) {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
