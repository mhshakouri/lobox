module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/consistent-type-imports": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  ignorePatterns: ["dist", ".output", "node_modules", "*.d.ts"],
};
