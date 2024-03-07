// eslint.config.js
"use strict";
const tsParser = require("@typescript-eslint/parser");
// Import the ESLint plugin locally
const limitAnyRule = require("./eslint-plugin-limit-any");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { "limit-any": limitAnyRule },
    rules: {
      "limit-any/count": ["error",4],
    },
  },
];
