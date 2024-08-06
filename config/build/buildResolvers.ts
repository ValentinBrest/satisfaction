import { ResolveOptions } from 'webpack';

export function buildResolvers (src: string): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, //  абсолютные пути в приоритете
        modules: [src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': src,
        },
    };
}