var path = "/Users/qe/Workspace/rollup-plugin-file-path/test/ts/assets/template/template.ejs";

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
console.log(path);
