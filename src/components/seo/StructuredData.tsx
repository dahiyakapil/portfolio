import { useEffect } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/portfolio-data";
import { SITE, absoluteUrl } from "@/constants/site";

function upsertJsonLd(id: string, data: Record<string, unknown>): void {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Person + WebSite JSON-LD for Google rich results / knowledge panel signals.
 */
export function StructuredData() {
  useEffect(() => {
    const personId = absoluteUrl("/#person");
    const websiteId = absoluteUrl("/#website");

    upsertJsonLd("ld-person", {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: PERSONAL_INFO.name,
      url: absoluteUrl("/"),
      image: absoluteUrl(PERSONAL_INFO.avatarLarge),
      jobTitle: PERSONAL_INFO.role,
      description: SITE.description,
      email: SOCIAL_LINKS.email,
      sameAs: [
        SOCIAL_LINKS.github,
        SOCIAL_LINKS.linkedin,
        SOCIAL_LINKS.twitter,
      ],
      knowsAbout: [
        "Distributed systems",
        "Node.js",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Razorpay",
        "Backend engineering",
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    });

    upsertJsonLd("ld-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: `${PERSONAL_INFO.name} Portfolio`,
      url: absoluteUrl("/"),
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": personId },
      author: { "@id": personId },
    });
  }, []);

  return null;
}
