const FlowProcessType = require('./FlowProcessType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowCoverageResult>';
  var rootTagEnd = '</FlowCoverageResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.elementsNotCovered == null ? '' : object.elementsNotCovered.map(p => '<elementsNotCovered>' + p + '</elementsNotCovered>').join('')}
	${object.flowId == null ? '' : '<flowId>' + object.flowId + '</flowId>'}
	${object.flowName == null ? '' : '<flowName>' + object.flowName + '</flowName>'}
	${object.flowNamespace == null ? '' : '<flowNamespace>' + object.flowNamespace + '</flowNamespace>'}
	${object.numElements == null ? '' : '<numElements>' + object.numElements + '</numElements>'}
	${object.numElementsNotCovered == null ? '' : '<numElementsNotCovered>' + object.numElementsNotCovered + '</numElementsNotCovered>'}
	${object.processType == null ? '' : '<processType>' + FlowProcessType(object.processType, true) + '</processType>'}
${rootTagEnd}`;
}