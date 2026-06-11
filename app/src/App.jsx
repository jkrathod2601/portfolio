import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <ScrollProgress />
      <Nav />
      <Marquee />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal delay={150}><Skills /></Reveal>
        <Reveal delay={100}><Experience /></Reveal>
        <Reveal delay={150}><Education /></Reveal>
        <Reveal delay={100}><Projects /></Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
