import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export const babelLoader = (isTsx: boolean, isProd: boolean) => ({
    test: isTsx ? /\.(jsx|tsx)$/: /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: [[
                '@babel/plugin-transform-typescript',
                {isTsx},
            ],
            '@babel/plugin-transform-runtime',
            isTsx && isProd && [
                babelRemovePropsPlugin,
                {
                    props: ['data-testid'],
                }, 
            ]].filter(Boolean),
        },
    },
});