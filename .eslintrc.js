module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'simple-import-sort',
        'i18next',
        'react-hooks',
        'valk-plugin',
        'unused-imports',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, onlyAttribute: [''] },
        ],
        semi: 'error',
        'no-multi-spaces': 'error',
        'no-console': 'warn',
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/ban-ts-comment': 'warn',
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'unused-imports/no-unused-imports': 'error',
        'valk-plugin/path-checker': ['error', {alias: '@'}],
        '@typescript-eslint/no-namespace': 'off',
        'valk-plugin/public-api-imports': [
            'error', 
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
            },
        ],
        'valk-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Packages `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages.
                    ['^(@|components)(/.*|$)'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}', 'src/entities/Article/mocks/*.ts'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
        {
            files: ['scripts/**/*.js', 'json-server/*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
