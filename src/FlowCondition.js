const FlowComparisonOperator = require('./FlowComparisonOperator');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowCondition>';
  var rootTagEnd = '</FlowCondition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.leftValueReference == null ? '' : '<leftValueReference>' + object.leftValueReference + '</leftValueReference>'}
	${object.operator == null ? '' : '<operator>' + FlowComparisonOperator(object.operator, true) + '</operator>'}
	${object.rightValue == null ? '' : '<rightValue>' + FlowElementReferenceOrValue(object.rightValue, true) + '</rightValue>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}