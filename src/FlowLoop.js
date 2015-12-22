const IterationOrder = require('./IterationOrder');
const FlowConnector = require('./FlowConnector');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowLoop>';
  var rootTagEnd = '</FlowLoop>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignNextValueToReference == null ? '' : '<assignNextValueToReference>' + object.assignNextValueToReference + '</assignNextValueToReference>'}
	${object.collectionReference == null ? '' : '<collectionReference>' + object.collectionReference + '</collectionReference>'}
	${object.iterationOrder == null ? '' : '<iterationOrder>' + IterationOrder(object.iterationOrder, true) + '</iterationOrder>'}
	${object.nextValueConnector == null ? '' : '<nextValueConnector>' + FlowConnector(object.nextValueConnector, true) + '</nextValueConnector>'}
	${object.noMoreValuesConnector == null ? '' : '<noMoreValuesConnector>' + FlowConnector(object.noMoreValuesConnector, true) + '</noMoreValuesConnector>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}