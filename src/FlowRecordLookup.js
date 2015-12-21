const FlowConnector = require('./FlowConnector');
const FlowRecordFilter = require('./FlowRecordFilter');
const FlowOutputFieldAssignment = require('./FlowOutputFieldAssignment');
const SortOrder = require('./SortOrder');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRecordLookup>';
  var rootTagEnd = '</FlowRecordLookup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignNullValuesIfNoRecordsFound == null ? '' : '<assignNullValuesIfNoRecordsFound>' + object.assignNullValuesIfNoRecordsFound + '</assignNullValuesIfNoRecordsFound>'}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + FlowRecordFilter(p, true) + '</filters>')}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.outputAssignments == null ? '' : object.outputAssignments.map(p => '<outputAssignments>' + FlowOutputFieldAssignment(p, true) + '</outputAssignments>')}
	${object.outputReference == null ? '' : '<outputReference>' + object.outputReference + '</outputReference>'}
	${object.queriedFields == null ? '' : object.queriedFields.map(p => '<queriedFields>' + p + '</queriedFields>')}
	${object.sortField == null ? '' : '<sortField>' + object.sortField + '</sortField>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + SortOrder(object.sortOrder, true) + '</sortOrder>'}
${rootTagEnd}`;
}