export declare type FilePathPluginOption = {
    include?: string | string[];
    exclude?: string | string[];
};
export declare function filePath(options: FilePathPluginOption): {
    name: string;
    load(id: string): string | null;
};
