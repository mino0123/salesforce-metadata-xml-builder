const ReputationLevel = require('./ReputationLevel');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReputationLevelDefinitions>';
  var rootTagEnd = '</ReputationLevelDefinitions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.level == null ? '' : object.level.map(p => '<level>' + ReputationLevel(p, true) + '</level>').join('')}
${rootTagEnd}`;
}