/* eslint jest/expect-expect: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPrism from './index';

describe('React Prism JS', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactPrism language="javascript">const hello="world";</ReactPrism>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
