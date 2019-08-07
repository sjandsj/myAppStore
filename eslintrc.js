module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js"]
      }
    ],
    "import/prefer-default-export": 0,
    "react/no-string-refs": 0,
    "class-methods-use-this": 0,
    "no-unused-expressions": 0,
    "react/no-unused-prop-types": 0,
    "react/no-array-index-key": 0,
    "no-underscore-dangle": 0,
    "react/jsx-curly-brace-presence": 0,
    camelcase: 0,
    "react/forbid-prop-types": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0
  }
};
