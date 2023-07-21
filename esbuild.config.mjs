import * as esbuild from "esbuild";

const ctx = await esbuild.context({
	entryPoints: ["src/main.jsx"],
	bundle: true,
	outfile: "dist/dist.js",
	sourcemap: true,
	target: "chrome58",
	loader: {
		".module.css": "local-css",
	},
});

ctx.watch();
