const FlowChoiceUserInputTranslation = require('./FlowChoiceUserInputTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowChoiceTranslation>';
  var rootTagEnd = '</FlowChoiceTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.choiceText == null ? '' : '<choiceText>' + object.choiceText + '</choiceText>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.userInput == null ? '' : '<userInput>' + FlowChoiceUserInputTranslation(object.userInput, true) + '</userInput>'}
${rootTagEnd}`;
}