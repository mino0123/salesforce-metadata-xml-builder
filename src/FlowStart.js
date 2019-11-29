const FlowConnector = require('./FlowConnector');
const FlowRecordFilter = require('./FlowRecordFilter');
const FlowSchedule = require('./FlowSchedule');
const FlowTriggerType = require('./FlowTriggerType');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowStart>';
  var rootTagEnd = '</FlowStart>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + FlowRecordFilter(p, true) + '</filters>').join('')}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.schedule == null ? '' : '<schedule>' + FlowSchedule(object.schedule, true) + '</schedule>'}
	${object.triggerType == null ? '' : '<triggerType>' + FlowTriggerType(object.triggerType, true) + '</triggerType>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}