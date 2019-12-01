import React from 'react';
import PropTypes from 'prop-types';
import { RenderTokens } from './RenderTokens';
require(`prismjs/themes/prism-okaidia.css`);

export const Renderer = ({ tokens, language }) => {
  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>
        <RenderTokens tokens={tokens} />
      </code>
    </pre>
  );
};

Renderer.propTypes = {
  tokens: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired
};
