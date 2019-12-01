import React from 'react';
import PropTypes from 'prop-types';

export const RenderTokens = ({ tokens }) => {
  return (
    <>
      {tokens.map((item, ii) => {
        const { content, type } = item || {};
        if (!content || !type) return <React.Fragment key={ii}>{item}</React.Fragment>;
        if (Array.isArray(content)) {
          return <RenderTokens key={ii} tokens={content} />;
        }
        return (
          <span key={ii} className={`token ${type}`}>
            {`${content}`}
          </span>
        );
      })}
    </>
  );
};

RenderTokens.propTypes = {
  tokens: PropTypes.array.isRequired
};
