const ChatterAnswersReputationLevel = require('./ChatterAnswersReputationLevel');
const IdeaReputationLevel = require('./IdeaReputationLevel');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReputationLevels>';
  var rootTagEnd = '</ReputationLevels>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.chatterAnswersReputationLevels == null ? '' : object.chatterAnswersReputationLevels.map(p => '<chatterAnswersReputationLevels>' + ChatterAnswersReputationLevel(p, true) + '</chatterAnswersReputationLevels>').join('')}
	${object.ideaReputationLevels == null ? '' : object.ideaReputationLevels.map(p => '<ideaReputationLevels>' + IdeaReputationLevel(p, true) + '</ideaReputationLevels>').join('')}
${rootTagEnd}`;
}