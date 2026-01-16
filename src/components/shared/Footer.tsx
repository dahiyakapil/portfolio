export function Footer() {
  return (
    <footer className="text-center py-10 border-t border-border/40">
      <p className="text-muted-foreground text-sm">
        Designed & built by <span className="font-semibold text-foreground">Kapil</span>
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
