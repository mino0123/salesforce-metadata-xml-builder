const FlowScreenFieldTranslation = require('./FlowScreenFieldTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowScreenTranslation>';
  var rootTagEnd = '</FlowScreenTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + FlowScreenFieldTranslation(p, true) + '</fields>').join('')}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.pausedText == null ? '' : '<pausedText>' + object.pausedText + '</pausedText>'}
${rootTagEnd}`;
}