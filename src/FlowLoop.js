const IterationOrder = require('./IterationOrder');
const FlowConnector = require('./FlowConnector');

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
${rootTagEnd}`;
}