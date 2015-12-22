const FlowConnector = require('./FlowConnector');
const FlowScreenField = require('./FlowScreenField');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowScreen>';
  var rootTagEnd = '</FlowScreen>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowBack == null ? '' : '<allowBack>' + object.allowBack + '</allowBack>'}
	${object.allowFinish == null ? '' : '<allowFinish>' + object.allowFinish + '</allowFinish>'}
	${object.allowPause == null ? '' : '<allowPause>' + object.allowPause + '</allowPause>'}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + FlowScreenField(p, true) + '</fields>')}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
	${object.pausedText == null ? '' : '<pausedText>' + object.pausedText + '</pausedText>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}