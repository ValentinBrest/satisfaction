import path from 'path';
import webpack from 'webpack';
import { buildLoader } from './config/build/buildLoader';
import { buildPlugins } from './config/build/buildPlugins';
import { buildResolvers } from './config/build/buildResolvers';

const config: webpack.Configuration =  {
    mode: "production",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: buildPlugins(),
    module: {
        rules: buildLoader(),
      },
    resolve: buildResolvers(),
};

export default config;