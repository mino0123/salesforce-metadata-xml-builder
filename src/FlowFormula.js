const FlowDataType = require('./FlowDataType');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowFormula>';
  var rootTagEnd = '</FlowFormula>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataType == null ? '' : '<dataType>' + FlowDataType(object.dataType, true) + '</dataType>'}
	${object.expression == null ? '' : '<expression>' + object.expression + '</expression>'}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}