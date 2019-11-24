# Contributing

Thank for your interest in contributing to open source. We had a great experience writing this open source software. We believe you will feel the same after your contribution.

## Some basic information

All contributions require that you agree to our [code of conduct](https://github.com/versant-digital/react-prismjs/blob/master/CODE_OF_CONDUCT.md). 
Please remember that others are contributing their own time for free when working on open source projects. Please be nice and respectful to others at all times.

## Guidelines for Issues and Questions

Before creating a new issue, please check the [issue tracker](https://github.com/versant-digital/react-prismjs/issues) to make sure someone else hasn't already raised the same issue.

### Bugs and Improvements

Bugs and improvements can be reported in issue tracker.

### Help questions

Please ask how-to questions on Stackoverflow with `react-prismjs` tag.

## Documentation

You are welcome to suggest improvements to docs. README.md is located at root of this project.

## Development

Before starting, please create a new branch off `master`. It is recommended to follow this pattern for your branch name:

```
{feature or fix}/{issue number}-{branch name}
```

1. You will need Node and npm installed on your machine 
2. Run `npm install` to install all dependencies before starting development
3. Run `npm run dev` to watch for changes and build
4. You are good to write some code

### Building

`build` script will write CommonJS, UMD and ES module files in lib, dist and esm folders respectively. 

```
npm run build
```

### Testing

`test` script will use Jest to run the unit tests. `test:watch` will watch for changes and re-run the test

```
npm test
// or
npm run test:watch
```

### Linting

`lint` script will report lint errors using eslint

```
npm run lint
``` 

### Formatting

`format` script will fix formatting errors using prettier

```
npm run format
``` 

### Sending Pull Requests

Please make sure there are no lint, formatting or unit testing errors. <br />

Please follow the pull request template and provide as much information as possible. <br />

Thanks for contributing.
