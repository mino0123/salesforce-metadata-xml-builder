const FlowConnector = require('./FlowConnector');
const FlowRecordFilter = require('./FlowRecordFilter');
const FlowOutputFieldAssignment = require('./FlowOutputFieldAssignment');
const SortOrder = require('./SortOrder');
const FlowMetadataValue = require('./FlowMetadataValue');

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
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + FlowRecordFilter(p, true) + '</filters>').join('')}
	${object.getFirstRecordOnly == null ? '' : '<getFirstRecordOnly>' + object.getFirstRecordOnly + '</getFirstRecordOnly>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.outputAssignments == null ? '' : object.outputAssignments.map(p => '<outputAssignments>' + FlowOutputFieldAssignment(p, true) + '</outputAssignments>').join('')}
	${object.outputReference == null ? '' : '<outputReference>' + object.outputReference + '</outputReference>'}
	${object.queriedFields == null ? '' : object.queriedFields.map(p => '<queriedFields>' + p + '</queriedFields>').join('')}
	${object.sortField == null ? '' : '<sortField>' + object.sortField + '</sortField>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + SortOrder(object.sortOrder, true) + '</sortOrder>'}
	${object.storeOutputAutomatically == null ? '' : '<storeOutputAutomatically>' + object.storeOutputAutomatically + '</storeOutputAutomatically>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}