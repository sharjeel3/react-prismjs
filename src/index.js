import React from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { Renderer } from './components/Renderer';

const ReactPrism = ({ children, language = 'javascript' }) => {
  const tokens = Prism.tokenize(children, Prism.languages[language]);
  return <Renderer tokens={tokens} language={language} />;
};

ReactPrism.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  language: PropTypes.oneOf(['javascript', 'css', 'html', 'svg', 'xml', 'markup']).isRequired
};

export default ReactPrism;
