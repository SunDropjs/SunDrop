import resolve from "@rollup/plugin-node-resolve";

export default {
	input: 'build/sundrop.js',
	output: {
		file: "build.js",
		format: "cjs"
	}
};
plugins: [resolve()]