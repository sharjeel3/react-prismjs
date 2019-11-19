module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.11.0'
    }
  },
  parser: 'babel-eslint'
}
