import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import css from '@eslint/css'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{css,js,mjs,cjs,jsx}'],
    plugins: {
      css,
    },
    language: 'css/css',
    rules: {
      'css/no-duplicate-imports': 'error',
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]
