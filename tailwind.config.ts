import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: "rgb(var(--white-rgb))",
				black: "rgb(var(--black-rgb))",
				purple: "rgb(var(--purple-rgb))",
				green: "rgb(var(--green-rgb))",
				background: "rgb(var(--background-rgb))",
			},
		},
	},
	plugins: [],
};
export default config;
