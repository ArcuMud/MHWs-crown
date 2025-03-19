import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React 放在最前面
            ['^react$'],
            // 內建模組和外部模組
            ['^(?!@aviatrix|@tests|@/)(@?\\w)'],
            // @aviatrix/flights 套件
            ['^@aviatrix/flights'],
            // 內部模組 (@tests 和 @ 開頭)
            ['^@tests/'],
            ['^@/'],
            // 父目錄導入
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // 同級目錄導入
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // 樣式文件和類型導入
            ['^.+\\.s?css$', '^.+\\.styles$'],
            ['^.+\\u0000$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  }
);
