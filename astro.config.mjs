import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import clerk from "astro-clerk-auth";
import react from "@astrojs/react";
import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind({
    applyBaseStyles: false,
  }), mdx(), sitemap(), icon(), react(), clerk()],
  output: "server",
  adapter: vercel()
});