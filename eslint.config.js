module.exports = {
  languageOptions: {
    parser: require("@typescript-eslint/parser"),
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
      sourceType: "module",
    },
    globals: {
      window: "readonly",
      document: "readonly",
      navigator: "readonly",
      console: "readonly",
      React: "readonly",
    },
  },
  plugins: {
    react: require("eslint-plugin-react"),
    "react-hooks": require("eslint-plugin-react-hooks"),
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
};
