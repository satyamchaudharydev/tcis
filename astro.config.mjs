import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://www.ssrbm.com/",
    integrations: [sitemap(), react(),  tailwind()],
    output: 'hybrid',
    adapter: cloudflare({
        imageService: 'compile'
    }),
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport",
    },
    server: (command) => ({
        port: command === "dev" ? 4231 : 4000,
        host: true,
    }),
});
