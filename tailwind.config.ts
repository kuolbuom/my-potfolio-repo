import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
		},
		fontFamily: {
      primary: "var(--font-jetbrainMono)",
		},
  	extend: {
  		colors: {
  			primary: '#1c1c33',
				accent: {
					DEFAULT: '#00ff99',
					hover: '#00e187'
				}
  		},
  	}
  },
  plugins: [
   require("tailwindcss-animate"), // Animation plugin
   require("tailwind-scrollbar")({nocompatible: true}), // Scrollbar styling plugin
 ],

} satisfies Config;
