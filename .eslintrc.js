module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    "prettier",
    "prettier/react"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80
      }
    ]
  },
  plugins: [
    "prettier"
  ]
};
