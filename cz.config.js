const conventionalCommitTypes = require('conventional-commit-types').types;

// cz-customizable config requires types as an array of objects with name and value
const types = Object.keys(conventionalCommitTypes).map(type => ({
  name: `${type}: ${conventionalCommitTypes[type].description}`,
  value: type
}));

module.exports = {
  types,
  upperCaseSubject: true,
  allowBreakingChanges: ['feat', 'fix']
};
