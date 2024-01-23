/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				CBlue: "#1B242F",
				COrange: "#F36523",
				CBlack: "#0E131A",
				CGray: "#666666",
				ClBlue: "#E8ECF1",
				ClGray: "#EEEEEE",
				ClOrange: "#FDE8DE",
			},
			lineClamp: {
				8: "8",
			},
			animation: {
				"text-slide": "text-slide 25s linear infinite",
			},
			keyframes: {
				"text-slide": {
					"0%": {
						transform: "translateX(100%)",
					},
					"100%": {
						transform: "translateX(-100%)",
					},
				},
			},
		},
	},
	plugins: [],
};
