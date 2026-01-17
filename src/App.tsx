import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";
import { Spotlight } from "./components/ui/spotlight";
import Home from "./pages/Home";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <Navbar />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsListPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
