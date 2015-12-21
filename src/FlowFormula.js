const FlowDataType = require('./FlowDataType');

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
${rootTagEnd}`;
}