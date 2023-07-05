import parserTypescript from "@typescript-eslint/parser";

import pluginReact from "eslint-plugin-react";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import pluginPrettier from "eslint-plugin-prettier";

import globals from "globals";

export default [
  // JSX (React) config
  {
    files: ["src/**/*.{jsx,tsx}"],
    plugins: { react: pluginReact },
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  // TypeScript config
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { typescript: pluginTypescript },
    languageOptions: { parser: parserTypescript }
  },
  // Base Config
  {
    files: ["src/**/*.{js,jsx,ts,tsx,json}", "*.config.js"],
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
  }
];
