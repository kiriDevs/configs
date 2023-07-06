import parserTypescript from "@typescript-eslint/parser";

import pluginTypescript from "@typescript-eslint/eslint-plugin";
import pluginPrettier from "eslint-plugin-prettier";

import configReact from "eslint-plugin-react/configs/recommended.js";

import globals from "globals";

export default [
  configReact, // JSX (React) config
  // Personal TypeScript config
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { typescript: pluginTypescript },
    languageOptions: { parser: parserTypescript }
  },
  // Personal base config
  {
    files: ["src/**/*.{js,jsx,ts,tsx,json}", "*.config.js"],
    ignores: ["prettier.config.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2022,
      globals: {
        ...globals.es2022
      }
    },

    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": ["warn"],

      "no-warning-comments": [
        "warn",
        {
          terms: ["todo", "to do", "fixme", "fix me", "wip"],
          location: "start"
        }
      ]
    }
  },
  // @typescript-eslint recommended configs
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    plugins: { "@typescript-eslint": pluginTypescript },
    rules: pluginTypescript.configs["eslint-recommended"].rules
    // This preset-config disables all vanilla ESLint rules that are superseded by @typescript-eslint or TS itself.
    // (Also enables a few rules that "make sense due to TS's typechecking / transpilation.")
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    plugins: { "@typescript-eslint": pluginTypescript },
    rules: pluginTypescript.configs["recommended-requiring-type-checking"].rules
    // Basically @typescript-eslint/eslint-plugin:recommended, but without rules replaced by TS itself
  }
];
