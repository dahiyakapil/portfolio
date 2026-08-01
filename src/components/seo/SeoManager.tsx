import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { PROJECTS } from "@/constants/portfolio-data";
import { SITE, absoluteUrl, pageTitle } from "@/constants/site";

export type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string
): void {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applySeo({
  title,
  description,
  path,
  image = SITE.ogImage,
  imageAlt = SITE.ogImageAlt,
  type = "website",
  noIndex = false,
}: SeoProps): void {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http")
    ? image
    : absoluteUrl(image);

  document.title = title;

  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noIndex ? "noindex,nofollow" : "index,follow");

  upsertLink("canonical", url);

  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:site_name", SITE.name);
  upsertMeta("property", "og:locale", SITE.locale);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", imageUrl);
  upsertMeta("property", "og:image:alt", imageAlt);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:site", SITE.twitterHandle);
  upsertMeta("name", "twitter:creator", SITE.twitterHandle);
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", imageUrl);
  upsertMeta("name", "twitter:image:alt", imageAlt);
}

function resolveRouteSeo(pathname: string): SeoProps {
  if (pathname === "/" || pathname === "") {
    return {
      title: SITE.title,
      description: SITE.description,
      path: "/",
      image: SITE.ogImage,
      imageAlt: SITE.ogImageAlt,
    };
  }

  if (pathname === "/experience") {
    return {
      title: pageTitle("Experience"),
      description:
        "Work experience — freelance sole engineer on SportsHub, plus internships at Indian Capital and Unified Mentor.",
      path: "/experience",
    };
  }

  if (pathname === "/projects") {
    return {
      title: pageTitle("Projects"),
      description:
        "Selected projects — SportsHub, Resumind, and other production systems and apps by Kapil Dahiya.",
      path: "/projects",
    };
  }

  const projectMatch = matchPath("/projects/:id", pathname);
  if (projectMatch?.params.id) {
    const project = PROJECTS.find((p) => p.id === projectMatch.params.id);
    if (project) {
      return {
        title: pageTitle(project.title),
        description:
          project.summary ??
          project.description ??
          `${project.title} — case study by ${SITE.name}.`,
        path: `/projects/${project.id}`,
        image: project.image ?? SITE.ogImage,
        imageAlt: `${project.title} product UI`,
        type: "article",
      };
    }
  }

  if (pathname === "/resume") {
    return {
      title: pageTitle("Resume"),
      description: `Resume / CV — ${SITE.name}, ${SITE.title.split(" · ")[1] ?? "Full Stack Developer"}.`,
      path: "/resume",
    };
  }

  if (pathname === "/contact") {
    return {
      title: pageTitle("Contact"),
      description:
        "Get in touch with Kapil Dahiya about backend, full-stack, or freelance opportunities.",
      path: "/contact",
    };
  }

  return {
    title: SITE.title,
    description: SITE.description,
    path: pathname,
  };
}

/** Keeps document title, canonical, OG, and Twitter tags in sync with the route. */
export function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeo(resolveRouteSeo(pathname));
  }, [pathname]);

  return null;
}
