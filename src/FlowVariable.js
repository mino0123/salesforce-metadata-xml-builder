const FlowDataType = require('./FlowDataType');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowVariable>';
  var rootTagEnd = '</FlowVariable>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataType == null ? '' : '<dataType>' + FlowDataType(object.dataType, true) + '</dataType>'}
	${object.isCollection == null ? '' : '<isCollection>' + object.isCollection + '</isCollection>'}
	${object.isInput == null ? '' : '<isInput>' + object.isInput + '</isInput>'}
	${object.isOutput == null ? '' : '<isOutput>' + object.isOutput + '</isOutput>'}
	${object.objectType == null ? '' : '<objectType>' + object.objectType + '</objectType>'}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
	${object.value == null ? '' : '<value>' + FlowElementReferenceOrValue(object.value, true) + '</value>'}
${rootTagEnd}`;
}