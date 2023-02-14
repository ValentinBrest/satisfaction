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


## 8 classNames

- 1. create classNames.ts in src/helpers/classNames


## 9 Архитектура. введение. Теория

- 1. read an article(https://feature-sliced.design/ru/)


## 10 Архитектура. Основы

- 1.  create folders (app, pages, widgets, features, entities, shared) in src
- 2. put in src/app App.tsx, folder styles. Put global.d.ts in src/app/types
- 3. delete folder components
- 4. put ThemeProvoder.tsx in app/providers/ThemeProvider/ui. Create index.ts in app/providers/ThemeProvider for export outside
- 5. put hook useTheme and ThemeContext in  app/providers/ThemeProvider/lib
- 6. add “baseUrl, paths” in tsconfig.json
- 7. setting absolute paths in webpack(https://webpack.js.org/configuration/resolve/#resolvemodules)
- 8. create index.ts in pages/AboutPage and put AboutPage.(async).tsx in  pages/AboutPage/ui
- 9. repeat step 8 for MainPage
- 10. put folder classNames form helpers to shared/lib


## 11 AppRouter. Конфиг для роутера

- 1. create index.ts in app/providers/router. Create component AppRouter in app/providers/router/ui
- 2. create routeConfig.tsx in shared/config/routeConfig
- 2.1 create enum(AppRoutes) for routes
- 2.2 create object(RoutePath) of paths for routes
- 2.3 create object(routeConfig), where key is enum and value is {path, element}
- 2.4 import routeConfig in AppRouter


## 12 Navbar. Шаблоны для разработки. Первый UI Kit компонент

- 1. create Navbar in widgets (includes index.ts, folder ui and style)
- 2. refactor classNames
- 3. add styles for NavBar
- 4. setting of snippets
- 5. create custom Link (AppLink) in shared/ui/AppLink and add styles


## 13 Svg loader. File loader. Button UI kit

- 1. create ThemeSwitcher in widgets
- 2. add icons in shared/assets/icons
- 3. add svgLoader (https://www.npmjs.com/package/@svgr/webpack)
- 4. add fileLoader (https://v4.webpack.js.org/loaders/file-loader/)
- 5. add types for svg/png/jpg/jpeg in global.d.ts
- 6. create custom Button in shared/ui and its styles


## 14 Sidebar. Layout приложения

- 1. create Sidebar in widgets/Sidebar/ui/Sidebar
- 2. add styles
- 3. move ThemeSwitcher


## 15 i18n Интернационализация. Define plugin. Плагин для переводов

- 1. add internalization i18n (https://www.i18next.com/overview/getting-started)
- 2. create i18n.ts in shared/config/i18n
- 3. add DefinePlugin (https://webpack.js.org/plugins/define-plugin/)
- 4. import i18n in App.tsx
- 5. add translation.json in public/locales/(en/ru)
- 6. add Translate component
- 7. add chunk translation
- 8. create LangSwitcher


## 16 Webpack hot module replacement

- 1. add React Refresh Webpack Plugin(https://github.com/pmmmwh/react-refresh-webpack-plugin)


## 17 Babel (необязательно)

- 1. install babel (https://babeljs.io/setup)


## 18 Настраиваем EsLint. Исправляем ошибки

- 1. install eslint (https://eslint.org/docs/latest/use/getting-started)
- 2. npm init @eslint/config
- 3. add rules in .eslintrc.js


## 19 Stylelint. Plugin for i18next

- 1. add stylelint (https://stylelint.io/user-guide/get-started)
- 2. create .stylelintrc.json and add rules
- 3. install eslint-plugin-i18next