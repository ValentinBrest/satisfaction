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


## 20 Тестовая среда. Настраиваем Jest. Пишем первый тест

- 1. add jest (https://jestjs.io/docs/getting-started) and its @types/jest (-D), also add @babel/prest-typescript (-D).
- 2. “jest –init” to cteate jest.config.ts, move it in config/jest 
- 3. create unit-tests for classNames


## 21 Несуществующие маршруты. Лоадер для загрузки страниц

- 1. create NotFoundPage
- 2. create PageLoader in widgets
- 3. create Loader(https://loading.io/css/) in shared


## 22 ErrorBoundary. Обработка React ошибок

- 1. create ErrorBoundary.ts in app/providers/ErrorBoundary/ui
- 2. create PageError in widgets


## 23 Анализ размера банда. BundleAnalyzer

- 1. add webpack bundle alalyzer (https://github.com/webpack-contrib/webpack-bundle-analyzer) and its types


## 24 React Testing Library. Тесты на компоненты
- 1. add react testing library (https://testing-library.com/docs/react-testing-library/intro/) 
- 2. add testing-library/jest-dom (https://github.com/testing-library/jest-dom) 
- 3. create setupTests.ts in config/jest 
- 4. add @babel/preset-react (https://babeljs.io/docs/en/babel-preset-react)
- 5. add identity-obj-proxy for css modules 
- 6. add regenerator-runtime to do test with i18n (https://www.npmjs.com/package/regenerator-runtime)
- 7. create i18nForTests.tsx in shared/config/i18n (https://react.i18next.com/misc/testing)
- 8. create renderWithTranslation.tsx in shared/lib/test/renderWithTranslation
- 9. create test for Button and Sidebar


## 25 Настраиваем Storybook. Декораторы. Стори кейсы на компоненты

- 1. add storybook (https://storybook.js.org/blog/storybook-for-webpack-5/)
- 2. create Button.stories.tsx
- 3. override webpack.config.ts in config/storybook
- 4. add StyleDecorator, ThemeDecorator, RouteDecorator
- 5. add sroties for shared, widgets, pages


## 26 Скриншотные тесты. Loki. Регрессионное UI тестирование

- 1. add Loki (https://loki.js.org/getting-started.html)
- 2. npx loki init
- 3. npx loki test (first npm run storybook)


## 27 CI pipeline. Автоматизация прогона тестов [!!!ПРОПУЩЕН]


## 28 Сайдбар. Состояния кнопки. UI Screenshot test report

- 1. styling Button, LangSwitcher, SideBar
- 2. create componetRender.tsx in shared/lib for tests of Sidebar as wrap
- 3. add reg-cli for compare pictures (https://github.com/reg-viz/reg-cli) (https://github.com/oblador/loki/issues/76#issuecomment-595777550)


## 29 Модальное окно. Portal
- 1. create Modal.tsx in shared/ui
- 1. create Portal.tsx in shared/ui


## 30 Redux-toolkit. Entity. Тесты на всех уровнях

- 1.  add redux toolkit (https://redux-toolkit.js.org/introduction/getting-started)
- 2. create StoreProvieder in app/providers/StoreProvider/ui/StoreProvider
- 3. create store.ts in app/providers/StoreProvider/config
- 4. create StateSchema.ts in .../StoreProvider/config
- 5. create Counter.ts in entities/Counter/ui
- 6. create folders(selectors, slice, types) in entities/Counter/model
- 7. create counterSchema.ts in .../model/types
- 8. create counterSlice.ts in .../model/slice
- 9. create getCounter.(test).ts in .../model/selectors/getCounter (https://github.com/reduxjs/reselect)
- 10. create getCounterValue.(test).ts in .../model/selectors/getCounterValue
- 11. create tests for selectors, slice and Counter


## 31 Json server. Имитация бэкенда

- 1. add json-server (https://github.com/typicode/json-server)

