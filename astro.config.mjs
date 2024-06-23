import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import clerk from "astro-clerk-auth";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://skyfusion.dev",
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), sitemap(), icon(), react(), clerk(), robotsTxt()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});