import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <Sidebar />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
