import React from 'react';
import testRenderer from 'react-test-renderer';
import { Renderer } from './Renderer';

const tokens = [
  {
    type: 'keyword',
    content: 'const',
    length: 5,
    greedy: false
  },
  ' message ',
  {
    type: 'operator',
    content: '=',
    length: 1,
    greedy: false
  },
  {
    type: 'string',
    content: '"test"',
    length: 6,
    greedy: true
  },
  {
    type: 'punctuation',
    content: ';',
    length: 1,
    greedy: false
  },
  '\n\n  ',
  {
    type: 'keyword',
    content: 'const',
    length: 5,
    greedy: false
  },
  {
    type: 'function-variable',
    content: 'sayIt',
    alias: 'function',
    length: 5,
    greedy: false
  },
  {
    type: 'operator',
    content: '=',
    length: 1,
    greedy: false
  },
  ' ',
  {
    type: 'punctuation',
    content: '(',
    length: 1,
    greedy: false
  },
  {
    type: 'punctuation',
    content: ')',
    length: 1,
    greedy: false
  },
  ' ',
  {
    type: 'operator',
    content: '=>',
    length: 2,
    greedy: false
  },
  ' ',
  {
    type: 'punctuation',
    content: '{',
    length: 1,
    greedy: false
  },
  '\n    ',
  {
    type: 'keyword',
    content: 'return',
    length: 6,
    greedy: false
  },
  ' message',
  {
    type: 'punctuation',
    content: ';',
    length: 1,
    greedy: false
  },
  '\n  ',
  {
    type: 'punctuation',
    content: '}',
    length: 1,
    greedy: false
  },
  {
    type: 'punctuation',
    content: ';',
    length: 1,
    greedy: false
  }
];

describe('Renderer', () => {
  it('matches snapshot', () => {
    const tree = testRenderer.create(<Renderer language="javascript" tokens={tokens} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
