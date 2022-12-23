import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	server: (command) => ({
		port: command === "dev" ? 3000 : 4000,
		host: true,
	}),
});
