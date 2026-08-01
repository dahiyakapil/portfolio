import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";
import { SeoManager } from "./components/seo/SeoManager";
import { Analytics } from "./components/seo/Analytics";
import { StructuredData } from "./components/seo/StructuredData";
import { HashScroll } from "./components/shared/HashScroll";
import { Spotlight } from "./components/ui/spotlight";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";

const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ProjectsListPage = lazy(() => import("./pages/ProjectsListPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function PageFallback() {
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="h-8 w-8 rounded-full border-2 border-muted-foreground/30 border-t-foreground animate-spin" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <SeoManager />
      <Analytics />
      <StructuredData />
      <HashScroll />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <Navbar />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="max-w-5xl mx-auto relative z-10">
          <main id="main">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsListPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" richColors closeButton />
      </div>
    </Router>
  );
}

export default App;
