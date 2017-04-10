const FlowConnector = require('./FlowConnector');
const FlowScreenField = require('./FlowScreenField');
const FlowScreenRule = require('./FlowScreenRule');
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
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + FlowScreenField(p, true) + '</fields>').join('')}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
	${object.pausedText == null ? '' : '<pausedText>' + object.pausedText + '</pausedText>'}
	${object.rules == null ? '' : object.rules.map(p => '<rules>' + FlowScreenRule(p, true) + '</rules>').join('')}
	${object.showFooter == null ? '' : '<showFooter>' + object.showFooter + '</showFooter>'}
	${object.showHeader == null ? '' : '<showHeader>' + object.showHeader + '</showHeader>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}