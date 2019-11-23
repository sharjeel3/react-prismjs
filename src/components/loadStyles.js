export const loadStyles = theme => {
  switch (theme) {
    case 'coy':
      return require(`prismjs/themes/prism-coy.css`);
    case 'dark':
      return require(`prismjs/themes/prism-dark.css`);
    case 'funky':
      return require(`prismjs/themes/prism-funky.css`);
    case 'okaidia':
      return require(`prismjs/themes/prism-okaidia.css`);
    case 'solarizedlight':
      return require(`prismjs/themes/prism-solarizedlight.css`);
    case 'tomorrow':
      return require(`prismjs/themes/prism-tomorrow.css`);
    case 'twilight':
      return require(`prismjs/themes/prism-twilight.css`);
    default:
      return require(`prismjs/themes/prism.css`);
  }
};
