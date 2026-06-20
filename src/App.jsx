import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Leadership from './components/Leadership';
import Hobbies from './components/Hobbies';
import MUN from './components/MUN';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const lenisRef = useLenis();

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar lenisRef={lenisRef} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Awards />
        <Leadership />
        <Hobbies />
        <MUN />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
