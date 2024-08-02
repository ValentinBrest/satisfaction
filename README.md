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


## 32 Кастомный Input. Окно авторизации. Lazy modal

- 1. create User in shared
- 2. create LoginModal.tsx in features/AuthByUsername/ui/LoginModal
- 3. create LoginForm.tsx in features/AuthByUsername/ui/LoginForm
- 4. create custom Input in shared


## 33 Husky. Pre commit хуки 

- 1. add husky (https://typicode.github.io/husky/#/)


## 34 Авторизация. Reducers, slices, async thunk. Custom text

- 1. create folders in AuthByUsername/model/selectors(slice,types)
- 2. create loginSchema.ts in types
- 3. create loginSlice.ts in slice
- 4. create getLoginState.ts in .../model/selectors/getLoginState
- 5. create async thunk loginByUsername.(test).ts  in ../model/services/ loginByUsername
- 6. create Text in shared
- 7. create localstorage.ts in shared/const
- 8. add actions in userSlice.ts
- 9. create StoreDecorator in storybook
- 10. add stories for LoginForm


## 35 Оптимизация. Асинхронные редюсеры. Размер бандла

- 1. redo LoginForm in async LoginForm
- 2. code splitting redux-store. Using Reducer Manager (https://redux.js.org/usage/code-splitting)
- 3. create selectors for fields in LoginForm
- 4. create DynamicModuleLoader in shared/lib/components/ DynamicModuleLoader for add/remove async reducers
- 5. refactor store


## 36 Тестирование фичи authByUsername. TestAsyncThunk

- 1. create tests for selectors and services in AuthByUsername
- 2. create TestAsyncThunk.ts in shared/lib/tests/TestAsyncThunk. Refactor loginByUsername.test
- 3. create tests for loginSlice.


## 37 Страница профиля. Оптимизация перерисовок. Учимся использовать memo

- 1. typify dispatch in AppDispatch. (https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type)
- 2. create hook useAppDispatch.ts in shared/lib/hooks/ useAppDispatch
- 3. auto-closing of Modal after success authorization
- 4. change profile in db.json
- 5. create ProfilePage
- 6. create SidebarItem.(module.scss)tsx in Sidebar/ui/SidebarItem
- 7. create items.ts in widgets/Sidebar/model
- 8. use HOK memo for components
- 9. create Profile in entities


## 38 Инстанс API. ApiUrl

- 1. create api.ts in shared/api (https://axios-http.com/docs/instance)
- 2. add api in middleware (https://redux-toolkit.js.org/api/getDefaultMiddleware#customizing-the-included-middleware)
- 3. add navigate in middleware
- 4. typify extraArgument
- 5. add global variable __API__


## 39 Модуль профиля. Фетчинг данных.

- 1. create async thunc(fetchProfileData.ts) for Profile in ../Profile/model/services/ fetchProfileData
- 2. add extraReducers in profileSlice.ts
- 3. create selectors in ../Profile/model/selectors
- 4. create ProfileCard in ../Profile/ui/ProfileCard


## 40 Чиним типы и проект после TS strict mode. ThunkConfig

- 1. add TS strict mode
- 2. fix mistakes


## 41 Модуль профиля. Avatar. Редактирование и сохранение. Приватные роуты

- 1. refactor ProfileCard
- 2. improve component Text (add TextAlign)
- 3. create ProfilePageHeader
- 4. add feature readonly Input
- 5. create method cancelEdit
- 6. add inputs (city, age) and outline_red style for button
- 7. create updateProfileData
- 8. create Avatar component in shared
- 9. create Select component in shared
- 10. create Currency component in entities
- 11. create Country component in entities
- 12. improve routes for Profile


## 42 Валидация профиля. Коды ошибок

- 1. create validation for Profile


## 43 Переменная __PROJECT__. Тесты на модуль профиля

- 1. add stories for ProfileCard and ProfilePage
- 2. add __PROJECT__ variable
- 3. add tests for selectors Profile
- 4. add tests services Profile
- 5. add tests (extra-)reducers Profile


## 44 Color pallete. Внедряем новую третью тему

- 1.  add orange theme. Use https://mobilepalette.colorion.co/


## 45 npm concurrently. File templates

- 1. add concurrently (https://www.npmjs.com/package/concurrently)
- 2. install Folder Plugin for VsCode (https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure)


## 46 React refresh plugin. build babel loader [!!!ПРОПУЩЕН]


## 47 Router v6 private protectеd routes. Защищенные маршруты

- 1. refactor AppRoter. Add RequireAuth


## 48 ArticlesPage и ArticleDetailsPage. Декомпозиция. Сущности. Webpack publicPath

- 1. create ArticlesPage
- 2. create ArticleDetailsPage
- 3. add publicPatch in webpack config


## 49 Entity article, async thunk, slices. Блоки. Skeleton loader

- 1. improving db.json
- 2. describe types of Article
- 3. fix Template component
- 4. create ui compoents for Article
- 5. create slice Article
- 6. create services Article + extraReducers
- 7. create selectors Article
- 8. create Skeleton in entities


## 50 Страница статьи. Блочная структура. Компонент Code. Копирование

- 1. add ThemeSize and improve styles
- 2.  improve ArticleDetails and create renderBlock in helper
- 3.  improve ArticleTextBlockComponent
- 4.  create component Code in shared
- 5.  improve ArticleCodeBlockComponent
- 6.  improve ArticleImageBlockComponent
- 7. add story for ArticleDetails
- 8. impove styles in Article and fix mistakes
- 9. add tests fot selectors and services ArticleDetails


## 51 Модуль комментариев. Нормализация данных. EntityAdapter 

- 1. create CommentCard in entities/Card
- 2. create CommentList in entities/Card
- 3. create slice for ArticleDetailsComment and add its types
- 4. create selectors for ArticleDetailsComment
- 5. create services for ArticleDetailsComment and useInitialEffect


## 52 Профили пользователей. Фича addCommentForm

- 1. add Profiles and change fetchProfileData
- 2. improve CommentCard ==> click Profile
- 3. create addCommentForm(types, slice) in features
- 4. create selector addCommentForArticle for articleDetailsPage
- 5. fix update, edit save Profile
- 6. add stories for AddCommentForm, CommentList, CommentCard


## 53 Апгрейд сайдбара. Селекторы

- 1. refactor getSidebarItems


## 54 Список статей. Переключение

- 1. create Card in shared
- 2. add mock data
- 3. create ArticleListItem with Skeleton
- 4. create ArticleList
- 5. add button back for ArticleDetailsPage
- 6. improve ActiclePage


## 55 Статьи. EntityAdapter, thunks, slices. View selector

- 1. create ArticleViewSelector
- 2. add types for ArticlesPage
- 3. create selectors, service, slice for ArticlesPage
- 4. add articles in db


## 56 Пагинация. Page. Бесконечная лента. Observer API. useInfiniteScroll

- 1. add semantic tags, create Page in shared and use it
- 2. add pagination in ArticlesPage
- 3. create hook useInfiniteScroll (https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)
- 4. create fetchNextArticlesPage thunk


## 57 Инициализация страницы. Чиним монтирование Store. Mounted reducers

- 1. fix navigate
- 2. refactor reducers in DynamicModuleLoader


## 58 Инициализация страницы. Чиним монтирование Store. Mounted reducers

- 1. save scrollPosition
- 2. create hook usethrottle


## 59 Фильтры. Сортировка. Поиск. Tabs. useDebounce

1. refactor Select
2. create ArticleSortSelector, add types and translations
3. create ArticlePageFilter, improve sclice, schema, add selectors
4. improve fetchArticleList
5. create hook useDebounce
6. init params in first render
7. create Tabs in shared
8. update Card, ArticlePageFilters


## 60 Список рекомендаций. Группируем редюсеры. Скроллбар

1. add recommeandation list
2. group reducers recommendation and comment
3. styling scrollbar
4. add target for link


## 61 Создание и редактирование статей
1. создал страницы создания и редактирования статей
2. добавил кнопки создать и редактировать


## 62 CopyPlugin. Публикуем на Netlify 
1. добавил CopyPlugin


## 63 Оптимизация больших списков. Виртуализация [!!!ПРОПУЩЕН]


## 64 ESlint. Пишем свой плагин. Анализ AST дерева
1. создал свой плагин valk-plugun (https://www.npmjs.com/package/eslint-plugin-valk-plugin)
2. отрефакторил пути


## 65 Позиционирование элементов. Отступы по дизайн системе
1. создал Flex, HStack, VStack 


## 66 Семантика
1. добавил семантические тэги


# 67 Headless UI. React aria. Listbox
1. использую библиотеку Headless UI
2. создаю Listbox


# 68 Dropdown. User avatar
1. создаю Menu


# 69 Генератор фичей сущностей страниц на node js
1. добавил возможность созания структуры слайса с помощью FTTemplates
2. добавил возможность созания структуры слайса с помощью node js


# 70 RTK query. Начало большого рефакторинга
1. создал Апи rtk
2. создал ArticleRecommendationsList
3. создал ArticleDetailsComents
4. создал ArticleInfiniteList
5. создал EditableProfileCard


# 71 HTML report для тестов
1. добавил jest-html-repoters


# 72 Исправляем баг с виртуализацией. Пишем RTL тесты на карточку профиля
1. добавил тесты на карточку профиля. Установил userEvent


# 73 Роли пользователя. Доступ по ролям. Forbidden page
1. создал Forbidden и AdminPanel страницы
2. добавил доступ по ролям


# 74, 75 Миграция на 18 реакт. Рефакторинг.
1. миграция на react 18


# 76 TS isolatedModules. Рефакторинг. Подготовка к миграции на babel loader
1. добавил isolatedModules в config.ts . Рефакторинг кода


# 77 CircularDependency. Кольцевые зависимости
1. добавил circular-dependency-plugin


# 78 Миграция на babel loader. Выносим проверку типов в отдельный процесс. Пишем свой babel plugin
1. добавил плагины для babel 
2. создал свой babel плагин babelRemovePropsPlugin


# 79 Popover. NotificationList. RTK query. Polling
1. создал Popever, Notifications


# 80 Drawer. Overlay. React-device-detect. Мобилки и десктоп
1. установил react-device-detect
2. создал Drawer, Overlay


# 81 useModal. Рефакторинг Modal и Drawer
1. создал хук useModal. Рефакторинг