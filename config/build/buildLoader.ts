import webpack from 'webpack';
import { babelLoader } from './loaders/buildBabelLoader';

import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoader (isDev: boolean): webpack.RuleSetRule[] {
    const isProd = !isDev;
  
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
  
    const cssLoader = buildCssLoader(isDev);
    const codeBabelLoader = babelLoader(false, isProd);
    const tsxCodeBabelLoader = babelLoader(true, isProd);
  
    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // tsLoader,
        cssLoader,
    ];
}