import type { NextConfig } from "next";

/**
 * GitHub Pages needs a fully static build served from a sub-path
 * (https://<user>.github.io/<repo>). That mode is opt-in via the
 * GITHUB_PAGES env var so local dev and Vercel keep the normal server build,
 * with image optimization intact.
 *
 * Set GITHUB_PAGES_BASE_PATH to "" if you later point a custom domain or a
 * <user>.github.io repo at this site, since those serve from the root.
 */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath =
  process.env.GITHUB_PAGES_BASE_PATH ?? "/mithlesh-portfolio";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
