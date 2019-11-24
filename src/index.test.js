/* eslint jest/expect-expect: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPrismJS from './index';

describe('React Prism JS', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactPrismJS language="javascript">const hello="world";</ReactPrismJS>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
