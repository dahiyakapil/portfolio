export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          Designed &amp; Built by{" "}
          <span className="font-semibold text-foreground">Kapil Dahiya</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1.5">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
