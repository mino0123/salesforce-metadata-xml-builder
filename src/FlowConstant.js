const FlowDataType = require('./FlowDataType');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowConstant>';
  var rootTagEnd = '</FlowConstant>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataType == null ? '' : '<dataType>' + FlowDataType(object.dataType, true) + '</dataType>'}
	${object.value == null ? '' : '<value>' + FlowElementReferenceOrValue(object.value, true) + '</value>'}
${rootTagEnd}`;
}