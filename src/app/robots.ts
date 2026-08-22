import type { MetadataRoute } from "next";

// No robots.txt existed for this site before. Explicitly allow-all rather
// than relying on "no file = allow by default" -- the sport-page brief was
// explicit about NOT blocking those pages here, so this says so directly
// instead of leaving it implicit.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://pulseup.io/sitemap.xml",
  };
}
