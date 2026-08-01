import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Work", href: "/#case-study" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/projects") return location.pathname.startsWith("/projects");
    if (href === "/experience") return location.pathname === "/experience";
    if (href === "/contact") return location.pathname === "/contact";
    if (href === "/#case-study")
      return location.pathname === "/" && location.hash === "#case-study";
    return false;
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm border-b border-border/5" />

      <div className="relative max-w-7xl mx-auto flex justify-center px-4">
        <div className="max-w-5xl w-full bg-background/60 backdrop-blur-xl border-x border-b border-white/10 shadow-lg rounded-b-2xl overflow-hidden pointer-events-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 md:h-16">
              <Link to="/" className="flex items-center space-x-2.5">
                <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-background font-bold text-sm md:text-base">
                    K
                  </span>
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-1.5 rounded-full transition-all text-sm font-medium hover:bg-muted ${
                      isActive(item.href)
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>

            {isOpen && (
              <div className="md:hidden py-4 space-y-1 border-t border-border/40">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
