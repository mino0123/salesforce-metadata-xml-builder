const FlowComparisonOperator = require('./FlowComparisonOperator');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');

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
${rootTagEnd}`;
}