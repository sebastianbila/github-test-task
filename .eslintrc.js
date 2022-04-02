module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["prettier", "import", "react-native"],
  rules: {
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", ["sibling", "parent"]],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "no-multiple-empty-lines": "warn",
    "import/no-unresolved": "off",
    "import/namespace": "off",
    "import/first": "warn",
    "array-bracket-spacing": "off",
    "react-native/no-inline-styles": "warn",
    "react-hooks/exhaustive-deps": "off",
  },
};
