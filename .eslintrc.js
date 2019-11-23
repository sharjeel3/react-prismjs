module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.12.0'
    }
  },
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  parser: 'babel-eslint'
}
