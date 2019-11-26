import React from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { Renderer } from './components/Renderer';

const ReactPrism = ({ children, language = 'javascript', theme = '' }) => {
  const tokens = Prism.tokenize(children, Prism.languages[language]);
  return <Renderer tokens={tokens} theme={theme} language={language} />;
};

ReactPrism.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  language: PropTypes.oneOf(['javascript', 'css', 'html', 'svg', 'xml', 'markup']).isRequired,
  theme: PropTypes.oneOf([
    'coy',
    'dark',
    'funky',
    'okaidia',
    'solarizedlight',
    'tomorrow',
    'twilight'
  ])
};

export default ReactPrism;
