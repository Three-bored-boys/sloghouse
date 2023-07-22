module.exports = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      files: ["*.js", "*.mjs", "*.cjs"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "import/prefer-default-export": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx", "!*.stories.tsx"],
      plugins: ["unused-imports", "import"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "unused-imports/no-unused-imports": "error",
        "import/order": [
          1,
          {
            "newlines-between": "always",
            pathGroups: [
              {
                pattern: "components",
                group: "internal",
              },
              {
                pattern: "common",
                group: "internal",
              },
              {
                pattern: "routes/ **",
                group: "internal",
              },
              {
                pattern: "assets/**",
                group: "internal",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: ["internal"],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "prettier/prettier": "off",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
        "no-console": "warn",
      },
    },
  ],
};
