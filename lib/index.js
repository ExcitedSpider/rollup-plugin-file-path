"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filePath = void 0;
const pluginutils_1 = require("@rollup/pluginutils");
const pathTemplate = (path) => `
  var path = ${path};
  export default path;
`;
function filePath(options) {
    const filter = pluginutils_1.createFilter(options.include, options.exclude);
    return {
        name: "file-path",
        load(id) {
            if (!filter(id)) {
                return null;
            }
            return pathTemplate(JSON.stringify(id));
        },
    };
}
exports.filePath = filePath;
//# sourceMappingURL=index.js.map