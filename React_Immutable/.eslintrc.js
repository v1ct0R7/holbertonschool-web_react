module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: "airbnb-base",
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
