import webpack from 'webpack';

import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoader (isDev: boolean): webpack.RuleSetRule[] {
    const babelLoader = (isTsx: boolean) => ({
        test: isTsx ? /\.(jsx|tsx)$/: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [[
                    '@babel/plugin-transform-typescript',
                    {isTsx},
                ],
                '@babel/plugin-transform-runtime',
                isTsx && [
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid'],
                    }, 
                ]].filter(Boolean),
            },
        },
    });
  
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
  
    const cssLoader = buildCssLoaders(isDev);
    const codeBabelLoader = babelLoader(false);
    const tsxCodeBabelLoader = babelLoader(true);
  
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