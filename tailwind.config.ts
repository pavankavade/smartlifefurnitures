import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "brand-green": "#8bc34a", // Keep for reference or accents
                "brand-blue": "#3366cc", // Blue for contact labels
                "brand-dark": "#1a1a1a", // Dark background
                "brand-brown": "#3e2723", // Deep brown for logo
                "brand-nav-modern": "#0f172a", // Modern Slate-900 for Nav
            },
        },
    },
    plugins: [],
};
export default config;
