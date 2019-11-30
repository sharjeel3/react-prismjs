import React from 'react';
import PropTypes from 'prop-types';
require(`prismjs/themes/prism-okaidia.css`);

export const Renderer = ({ tokens, language }) => {
  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>
        {tokens.map((item, ii) => {
          const { content, type } = item || {};
          if (!content || !type) return <React.Fragment key={ii}>{item}</React.Fragment>;
          return (
            <span key={ii} className={`token ${type}`}>
              {content}
            </span>
          );
        })}
      </code>
    </pre>
  );
};

Renderer.propTypes = {
  tokens: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired
};
