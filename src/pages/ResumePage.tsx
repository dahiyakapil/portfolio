import { useState } from "react";
import { Download, ArrowLeft, Loader2, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const resumeFile = "/public/assets/resume/Kapil_Dahiya_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Kapil_Dahiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Hero Header */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
            Career Profile
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Resume
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Full Stack Developer specializing in scalable web applications
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Button onClick={handleDownload} size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                <Maximize2 className="mr-2 h-4 w-4" />
                View Fullscreen
              </a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            ATS-optimized • Updated Jan 2026 • 1 page
          </p>
        </div>

        {/* Resume Viewer */}
        <div className="relative mt-14">
          {/* Ambient Glow */}
          <div className="absolute -inset-6 rounded-3xl" />

          {/* Viewer Card */}
          <div
            className="relative rounded-2xl border bg-background/80 backdrop-blur-xl 
            shadow-2xl overflow-hidden"
          >
            {/* Fake PDF App Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b bg-muted/30 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="ml-3 text-sm font-medium text-muted-foreground">
                  Kapil_Dahiya_Resume.pdf
                </span>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="ghost" asChild>
                  <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                    Fullscreen
                  </a>
                </Button>

                <Button size="sm" variant="ghost" onClick={handleDownload}>
                  Download
                </Button>
              </div>
            </div>

            {/* Loading Overlay */}
            {isLoading && (
              <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(#00000008_1px,transparent_1px)] 
  [background-size:24px_24px] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)]"
              >
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Loading resume...
                  </p>
                </div>
              </div>
            )}

            {/* PDF Frame */}
            <div
              className="w-full bg-white dark:bg-muted shadow-inner"
              style={{ height: "calc(100vh - 260px)" }}
            >
              <iframe
                src={`${resumeFile}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="w-full h-full border-0"
                title="Kapil Dahiya Resume"
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50 border sm:hidden">
          <p className="text-sm text-muted-foreground mb-3">
            For best viewing on mobile, download the PDF
          </p>
          <Button onClick={handleDownload} className="w-full gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Fallback Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Having trouble viewing?{" "}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Open in new tab
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
