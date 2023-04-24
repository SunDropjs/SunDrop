import terser from "@rollup/plugin-terser"

function header() {
  return {
    renderChunk(code) {
      return `/**
 * @license
 * Copyright 2023 GappleCider
 * MIT
 */
${code}`;
    },
  };
}

const builds = [
  {
    input: "src/sundrop.js",
    plugins: [header(), terser()],
    output: [
      {
        file: "build/sundrop.min.js",
        format: "esm",
        name: "SUN",
      },
    ],
  },
  {
    input: "src/sundrop.js",
    plugins: [header()],
    output: [
      {
        file: "build/sundrop.module.js",
        format: "esm",
      },
    ],
  },
  {
    input: "src/sundrop.js",
    plugins: [header()],
    output: [
      {
        file: "build/sundrop.cjs",
        format: "cjs",
        name: "SUN",
        indent: "\t",
      },
    ],
  },
  {
    input: "src/sundrop.js",
    plugins: [header()],
    output: [
      {
        file: "build/sundrop.js",
        format: "cjs",
        name: "SUN",
        indent: "\t",
      },
    ],
  },
];

export default (args) => (args.configOnlyModule ? builds[0] : builds);
