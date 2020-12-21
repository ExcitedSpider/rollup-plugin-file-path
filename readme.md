# rollup-plugin-file-path

🍣 A Rollup plugin which get path of any file by `import`.

## Install

with npm:

```bash
npm i rollup-plugin-file-path --save-dev
```

## Usage

### JS

Assuming a file `assets/template/template.ejs` is that you want to get the path.

First add this plugin to rollup config:

```js
// rollup.config.js
const {filePath} = require("../../lib/index");

export default {
  input: "./src/index.js",
  plugins: [filePath({
    // `include` is **required**
    include: ['**/*.ejs']
  })],
  output: {
    file: './dist/index.js'
  }
};
```

Then get the path:

```js
// index.js
import templatePath = require('assets/template/template.ejs')

console.log(templatePath)
// log: <absolute-path-to-your-workspace>/assets/template/template.ejs
```

### TS

In typescript, the plugin config and usage is same as JS. But you need a declaration file to tell TSC about the type intel:

Assuming you want to import `*.ejs`. Create a file `ejs.d.ts` in `src`:

```ts
declare module "*.ejs" {
  const value: string;
  export = value;
}
```

## TODO

- [ ] Relative Path
- [ ] Copy on import 