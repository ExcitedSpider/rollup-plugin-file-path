const { filePath } = require("../../lib/index");
const typescript = require("rollup-plugin-typescript2");

export default {
  input: "./src/index.ts",
  plugins: [
    typescript(),
    filePath({
      include: ["**/*.ejs"],
    }),
  ],
  output: {
    file: "./dist/index.js",
  },
};
