import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {paths, mode, port, isDev, apiUrl, project} = options;
    const {entry, build, html, src, locales, buildLocales} = paths;
    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(html, isDev, apiUrl, project, locales, buildLocales),
        module: {
            rules: buildLoader(isDev),
        },
        resolve: buildResolvers(src),
        devtool: isDev? 'eval-cheap-module-source-map': undefined,
        devServer: isDev? buildDevServer(port): undefined,
    };
}