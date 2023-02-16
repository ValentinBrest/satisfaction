module.exports = {
    env: {
        'browser': true,
        'es2021': true,
        'jest': true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'simple-import-sort',
        'i18next',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.tsx']}],
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'i18next/no-literal-string': ['error', {markupOnly: true, onlyAttribute: ['']}],
        semi: 'error',
        'no-multi-spaces': 'error',
        'no-console': 'warn',
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/ban-ts-comment': 'warn',
        'max-len': ['error', {ignoreComments: true, code: 100}],
        'simple-import-sort/imports': [
            'error',
            {
                'groups': [
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
};
