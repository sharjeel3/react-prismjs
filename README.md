[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Build Status](https://dev.azure.com/Versant-Digital/Open%20Source/_apis/build/status/versant-digital.react-prismjs?branchName=master)

# react-prismjs

`react-prismjs` is a React wrapper for PrismJS. The purpose of this module is to provide an easy way for developers to add syntax highlighting for code in HTML. A common use case for this is found in a blog post where you may want to share a code snippet with nice syntax highlighting.  

## Credits

This module uses [PrismJS](https://prismjs.com/) for syntax highlighting functionality.

## Installation

Install `react-prismjs` using `npm` or `yarn`

```
npm install react-prismjs
```
or
```
yarn add react-prismjs
```

You can get an UMD build from [unpkg](https://unpkg.com/) CDN using following URLs if you are not using npm or yarn.

```
https://unpkg.com/
```
or minified version is here
```
https://unpkg.com/
```

Please note that `react-prismjs` requires React 16.8.6 or above.

## Usage

```javascript
import React from 'react';
import ReactPrism from 'react-prismjs';

const code = `const message = 'test';

const sayIt = () => {
  return message;
};

console.log(sayIt())`;

export const MyCode = () => {
  return (
    <ReactPrism language="javascript">
      {code}
    </ReactPrism>
  );
};
```

## Options

`react-prismjs` accepts two props:

| Props                                                 |                                       Comments                                       |
|-------------------------------------------------------|:------------------------------------------------------------------------------------:|
| `language` <br /> Required <br /> Default: javascript | Possible values are:<br /> * javascript* css* html* svg* xml* markup                       |
| `theme` <br />  Optional                              | Possible values are:<br /> * coy* dark* funky* okaidia* solarizedlight* tomorrow* twilight |


## Limitation

`react-prismjs` does not format your code. You are required to have proper indentation for the code. Recommended way is to copy code from a code editor so that it already has correct formatting as per your style. 

## Suggestions, Improvements or Reporting issues

Please read [contribution guidelines](https://github.com/versant-digital/react-prismjs/blob/master/CONTRIBUTING.md)
