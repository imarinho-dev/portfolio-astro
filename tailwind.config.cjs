/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"bg-header":
					"linear-gradient( 95.2deg, rgba(255,255,255,1) 25%, rgba(0,0,0,.1) 96% );",
				"nav-link": "linear-gradient(to right,#54b3d6,#54b3d6 50%,  #000 50%",
			},
			boxShadow: {
				"nav-link": "inset 0 0 0 0 #111827",
				"nav-link-hover": "inset 0 -4px 0 0 #111827;",
				"btn-anime": "inset 0 0 0 0 #111827",
				"btn-anime-hover": "inset 200px 0 0 0 #111827;",
			},
		},
	},
	plugins: [],
};
