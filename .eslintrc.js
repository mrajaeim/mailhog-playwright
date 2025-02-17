module.exports = {
  env: { es6: true, node: true, jest: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  rules: {
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "import/prefer-default-export": ["off"],
    "import/no-unresolved": "error",
  },
  ignorePatterns: [
    "node_modules",
    "test-results",
    "playwright-report",
    "tsconfig.json",
    "**/*.cjs",
    "**/*.js",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
