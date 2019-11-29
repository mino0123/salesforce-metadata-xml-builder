
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowCoverageWarning>';
  var rootTagEnd = '</FlowCoverageWarning>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.flowId == null ? '' : '<flowId>' + object.flowId + '</flowId>'}
	${object.flowName == null ? '' : '<flowName>' + object.flowName + '</flowName>'}
	${object.flowNamespace == null ? '' : '<flowNamespace>' + object.flowNamespace + '</flowNamespace>'}
	${object.message == null ? '' : '<message>' + object.message + '</message>'}
${rootTagEnd}`;
}