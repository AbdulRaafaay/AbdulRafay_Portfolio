import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact"
import BackToTop from "./pages/BacktoTop";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full min-h-screen flex flex-col">
        <main className="flex-grow">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
