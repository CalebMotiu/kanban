import globals from "globals"
import pluginJs from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import pluginPrettier from "eslint-config-prettier"
// import pluginPrettierTailwind from "eslint-plugin-prettier-plugin-tailwindcss";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "no-alert": "error"
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  pluginPrettier
  // pluginPrettierTailwind
]
