import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		react(),
		purgecss({
			content: ["./**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
		}),
	],
	server: (command) => ({
		port: command === "dev" ? 3000 : 4000,
		host: true,
	}),
});
