import { FileDown } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-muted-foreground text-sm">
            Designed & built by{" "}
            <span className="font-semibold text-foreground">Kapil</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <a
          href="/assets/resume/Kapil_Resume.pdf"
          download="Kapil_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FileDown className="h-3.5 w-3.5" />
          Download CV
        </a>
      </div>
    </footer>
  );
}
