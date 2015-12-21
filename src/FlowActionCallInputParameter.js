const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowActionCallInputParameter>';
  var rootTagEnd = '</FlowActionCallInputParameter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.value == null ? '' : '<value>' + FlowElementReferenceOrValue(object.value, true) + '</value>'}
${rootTagEnd}`;
}