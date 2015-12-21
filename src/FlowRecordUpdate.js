const FlowConnector = require('./FlowConnector');
const FlowRecordFilter = require('./FlowRecordFilter');
const FlowInputFieldAssignment = require('./FlowInputFieldAssignment');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRecordUpdate>';
  var rootTagEnd = '</FlowRecordUpdate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + FlowRecordFilter(p, true) + '</filters>')}
	${object.inputAssignments == null ? '' : object.inputAssignments.map(p => '<inputAssignments>' + FlowInputFieldAssignment(p, true) + '</inputAssignments>')}
	${object.inputReference == null ? '' : '<inputReference>' + object.inputReference + '</inputReference>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
${rootTagEnd}`;
}