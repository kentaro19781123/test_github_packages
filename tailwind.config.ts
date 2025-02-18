/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

type Value = string;

const getWidthSize = (columns: number, maxColumns: number, gap: number) => {
	return `calc(100% * ${columns} / ${maxColumns} - (${maxColumns} - ${columns}) * (${gap}px / ${maxColumns}))`;
};

const fluidText = plugin(({ matchUtilities }) => {
	matchUtilities({
		"column-width": (value: Value) => {
			// const [columns, maxColumns, gap] = value.split(",");

			const [columns, maxColumns, gap] = value.split(",").map((v) => {
				const matched = /^(\d+)$/.exec(v);
				if (!matched) {
					throw new Error(`"${v}" is not a valid value`);
				}
				return Number(matched[1]);
			});

			return {
				width: getWidthSize(columns, maxColumns, gap),
			};
		},
	});
});

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"packages-color": "#f00",
				"packages-color2": "#ff0",
			},
			columnValue: {
				1: "1",
				2: "2",
				4: "4",
				8: "8",
			},
		},
	},
	plugins: [],
};
