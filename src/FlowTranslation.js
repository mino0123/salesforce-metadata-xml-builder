const FlowChoiceTranslation = require('./FlowChoiceTranslation');
const FlowScreenTranslation = require('./FlowScreenTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowTranslation>';
  var rootTagEnd = '</FlowTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.choices == null ? '' : object.choices.map(p => '<choices>' + FlowChoiceTranslation(p, true) + '</choices>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.screens == null ? '' : object.screens.map(p => '<screens>' + FlowScreenTranslation(p, true) + '</screens>').join('')}
${rootTagEnd}`;
}