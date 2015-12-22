const FlowConnector = require('./FlowConnector');
const FlowInputFieldAssignment = require('./FlowInputFieldAssignment');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRecordCreate>';
  var rootTagEnd = '</FlowRecordCreate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignRecordIdToReference == null ? '' : '<assignRecordIdToReference>' + object.assignRecordIdToReference + '</assignRecordIdToReference>'}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.inputAssignments == null ? '' : object.inputAssignments.map(p => '<inputAssignments>' + FlowInputFieldAssignment(p, true) + '</inputAssignments>')}
	${object.inputReference == null ? '' : '<inputReference>' + object.inputReference + '</inputReference>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}