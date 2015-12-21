const FlowRecordFilterOperator = require('./FlowRecordFilterOperator');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRecordFilter>';
  var rootTagEnd = '</FlowRecordFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.operator == null ? '' : '<operator>' + FlowRecordFilterOperator(object.operator, true) + '</operator>'}
	${object.value == null ? '' : '<value>' + FlowElementReferenceOrValue(object.value, true) + '</value>'}
${rootTagEnd}`;
}