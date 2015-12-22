const FlowConnector = require('./FlowConnector');
const FlowRecordFilter = require('./FlowRecordFilter');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRecordDelete>';
  var rootTagEnd = '</FlowRecordDelete>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + FlowRecordFilter(p, true) + '</filters>')}
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