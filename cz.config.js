const conventionalCommitTypes = require('conventional-commit-types').types;

const types = Object.keys(conventionalCommitTypes).map(type => ({
  name: `${type}: ${conventionalCommitTypes[type].description}`,
  value: type
}));

module.exports = {
  types,
  upperCaseSubject: true
};
