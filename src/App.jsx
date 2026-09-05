import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <Sidebar />

      <main className="min-h-screen md:ml-[280px]">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

    </div>
  );
}

export default App;

