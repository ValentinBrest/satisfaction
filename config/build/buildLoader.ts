import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"

export function buildLoader (isDev: boolean): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? "style-loader": MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
    }
  
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    return [
        tsLoader,
        cssLoader
      ]
}