import { createFilter } from "@rollup/pluginutils";

const pathTemplate = (path:string) => `
  var path = ${path};
  export default path;
`;

export type FilePathPluginOption = {
  include: string | string[];
  exclude?: string | string[];
};

export function filePath(options: FilePathPluginOption) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: "file-path",
    load(id: string) {
      if (!filter(id)) {
        return null;
      }

      return pathTemplate(JSON.stringify(id));
    },
  };
}
