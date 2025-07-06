module.exports = {
  ...require('mwts/.prettierrc.json'),

  "prettier/prettier": [
    "error",
    {
      "singleQuote": true,
      "parser": "flow"
    }
  ]
}
