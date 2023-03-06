import terser from "@rollup/plugin-terser";

function addons() {
  return {
    transform(code) {
      code = code.replace("build/sundrop.module.js", "src/sundrop.js");

      return {
        code: code,
        map: null,
      };
    },
  };
}

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
    plugins: [addons(), header(), terser()],
    output: [
      {
        file: "build/sundrop.min.js",
        format: "umd",
        name: "SUN",
      },
    ],
  },
  {
    input: "src/sundrop.js",
    plugins: [addons(), header()],
    output: [
      {
        file: "build/sundrop.module.js",
        format: "esm",
      },
    ],
  },
  {
    input: "src/sundrop.js",
    plugins: [addons(), header()],
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
    plugins: [addons(), header()],
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
