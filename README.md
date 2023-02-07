# satisfaction



## 1 Начало разработки Основы Webpack. Добавляем TypeScript

- 1. npm init – y  - инициализируем со стандартыми настройками
- 2. add .gitignore (/build node_modules)
- 3. add src/index.js
- 4. add webpack (https://webpack.js.org/guides/getting-started/)
- 5. add webpack.config.js
- 6. add html-webpack-plugin (https://webpack.js.org/plugins/html-webpack-plugin)
- 7. add webpack-progress-plugin
- 8. add typescript (https://webpack.js.org/guides/typescript/)
- 9. migrate webpack.config on TS (https://webpack.js.org/configuration/configuration-languages/)


## 2 Декомпозиция конфига. Опции конфигурации

- 1. создаем папку config/build, config/eslint, config/jest
- 2. декомпозируем плагины
- 3. декомпозируем лоадеры
- 4. декомпозируем резолверы
- 5. создаем файл config.ts в config/build/types в котором опишем типы конфига
- 6. создаем buildWebpackConfig.ts, для декомпозиции webpack.config.ts


## 3 Webpack-dev-server. Переменные окружения (env)

- 1. add dev-server (https://webpack.js.org/configuration/dev-server/) 
- 2. add env variables (https://webpack.js.org/guides/environment-variables/)


## 4 Подключаем React и настраиваем css в webpack

- 1. add react, react-dom and  its types (-D)
- 2. add scss-loader, style-loader, css-loader (https://webpack.js.org/loaders/sass-loader/) 


## 5 Настраиваем css modules

- 1. add MiniCssExtractPlugin (https://webpack.js.org/plugins/mini-css-extract-plugin)
- 2. add css modules (https://webpack.js.org/loaders/css-loader/#modules)
- 3. add global.d.ts – файл глобальной декларации типов
- 4. add App.tsx
- 5. add index.scss
- 6. add in options.modules (auto and localIdentName) for css-loader


## 6 Роутинг Code splitting Lazy Suspence

- 1. add react-router-dom and its types
- 2. code-spliting(https://reactjs.org/docs/code-splitting.html#reactlazy)


## 7 Организация стилей. Добавляем темы

- 1. create folder “styles”, adding index.scss there.
- 2. create reset.scss in styles.
- 3. create dark.scss and light.scss in styles/themes
- 4. create global.scss in styles/variables
- 5. add variables in global.scss
- 6. add button for switching themes
- 7. create ThemeContext.ts in src/theme
- 8. create ThemeProvider.tsx in src/theme
- 9. create hook useTheme in src/theme/useTheme.ts