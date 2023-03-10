module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ["import", "react", "jsx-a11y"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "max-len": [
      "error",
      {
        code: 160,
        ignoreStrings: true,
      },
    ],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "import/no-cycle": 1,
    // naming export can be beneficial for debugging, readability etc.
    "import/prefer-default-export": 0,
    // mirror the airbnb config, but remove for..in and for..of
    // as they are reasonable in node or modern browsers
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    // mirror the airbnb config, but allow some exceptions
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id"],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    /* React-specific rules */
    "react/react-in-jsx-scope": 0,
    "react/jsx-indent-props": 0,
    "react/no-danger": 0,
    // Consider enabling those in the future
    //'react/jsx-props-no-spreading': 0,
    //'react/require-default-props': 0,

    /* TypeScript-specific rules */
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "comma",
          requireLast: true,
        },
      },
    ],
    // Consider enabling those in the future
    //'@typescript-eslint/explicit-module-boundary-types': 0,
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": 0,
      },
    },
  ],
};
