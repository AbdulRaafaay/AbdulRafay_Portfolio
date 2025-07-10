import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
// Future pages: Projects, Skills, Certificates, etc.

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
          {/* Add other pages here */}
        </main>

        <Footer /> {/* Always after all sections */}
      </div>
    </div>
  );
}
