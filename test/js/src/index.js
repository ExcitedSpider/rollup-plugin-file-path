/**
 * manual test:
 * $ echo $PWD
 * <root-dir>/rollup-plugin-file-path/test/js
 * 
 * $ rollup --config rollup.config.js
 * ./src/index.js → ./dist/index.js...
 * 
 * $ node dist/index.js
 * <root-dir>/rollup-plugin-file-path/test/js/assets/template/template.ejs
 */

import templatePath from '../assets/template/template.ejs'

console.log(templatePath)