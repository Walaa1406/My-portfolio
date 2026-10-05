import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Training } from "./components/sections/Training";

export function App() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>);

}