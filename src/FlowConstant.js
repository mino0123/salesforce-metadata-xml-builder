const FlowDataType = require('./FlowDataType');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');
const FlowMetadataValue = require('./FlowMetadataValue');

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
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}