const FlowDataType = require('./FlowDataType');
const FlowRecordFilter = require('./FlowRecordFilter');
const FlowOutputFieldAssignment = require('./FlowOutputFieldAssignment');
const SortOrder = require('./SortOrder');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowDynamicChoiceSet>';
  var rootTagEnd = '</FlowDynamicChoiceSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataType == null ? '' : '<dataType>' + FlowDataType(object.dataType, true) + '</dataType>'}
	${object.displayField == null ? '' : '<displayField>' + object.displayField + '</displayField>'}
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + FlowRecordFilter(p, true) + '</filters>')}
	${object.limit == null ? '' : '<limit>' + object.limit + '</limit>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.outputAssignments == null ? '' : object.outputAssignments.map(p => '<outputAssignments>' + FlowOutputFieldAssignment(p, true) + '</outputAssignments>')}
	${object.picklistField == null ? '' : '<picklistField>' + object.picklistField + '</picklistField>'}
	${object.picklistObject == null ? '' : '<picklistObject>' + object.picklistObject + '</picklistObject>'}
	${object.sortField == null ? '' : '<sortField>' + object.sortField + '</sortField>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + SortOrder(object.sortOrder, true) + '</sortOrder>'}
	${object.valueField == null ? '' : '<valueField>' + object.valueField + '</valueField>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}