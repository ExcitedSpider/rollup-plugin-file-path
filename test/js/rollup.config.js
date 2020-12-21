const {filePath} = require("../../lib/index");


export default {
  input: "./src/index.js",
  plugins: [filePath({
    include: ['**/*.ejs']
  })],
  output: {
    file: './dist/index.js'
  }
};
