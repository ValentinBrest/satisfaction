import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig ({paths, mode, port, isDev}: BuildOptions): webpack.Configuration {
    const {entry, build, html, src} = paths;
    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true,
        },
        plugins: buildPlugins(html, isDev),
        module: {
            rules: buildLoader(isDev),
        },
        resolve: buildResolvers(src),
        devtool: isDev? 'inline-source-map': undefined,
        devServer: isDev? buildDevServer(port): undefined,
    };
}