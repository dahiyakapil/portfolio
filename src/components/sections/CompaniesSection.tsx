import { Link } from "react-router-dom";
import { COMPANIES } from "@/constants/portfolio-data";

function faviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

export function CompaniesSection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-border/40 bg-muted/20">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Worked with
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {COMPANIES.map((company) => {
          const isInternal = company.href.startsWith("/");
          const className = `relative flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors ${
            company.latest
              ? "border-2 border-foreground/25 bg-card shadow-sm hover:border-foreground/40"
              : "border border-border/40 bg-card/60 hover:border-border hover:bg-card"
          }`;

          const content = (
            <>
              {company.latest && (
                <span className="absolute -top-2.5 right-3 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-foreground text-background">
                  Latest
                </span>
              )}
              <img
                src={faviconUrl(company.domain)}
                alt=""
                width={company.latest ? 36 : 28}
                height={company.latest ? 36 : 28}
                className="rounded-md shrink-0"
                loading="lazy"
              />
              <div className="min-w-0">
                <p
                  className={`font-semibold truncate ${
                    company.latest
                      ? "text-base text-foreground"
                      : "text-sm text-foreground"
                  }`}
                >
                  {company.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {company.role}
                </p>
              </div>
            </>
          );

          return isInternal ? (
            <Link key={company.name} to={company.href} className={className}>
              {content}
            </Link>
          ) : (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}
