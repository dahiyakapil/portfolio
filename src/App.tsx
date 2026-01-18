import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";
import { Spotlight } from "./components/ui/spotlight";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <Navbar />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsListPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
        <Toaster position="top-right" richColors closeButton />
      </div>
    </Router>
  );
}

export default App;
