
module.exports = (object, asChild) => {
  var rootTagStart = '<RecordActionDeploymentContext>';
  var rootTagEnd = '</RecordActionDeploymentContext>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.entityName == null ? '' : '<entityName>' + object.entityName + '</entityName>'}
	${object.recommendationStrategy == null ? '' : '<recommendationStrategy>' + object.recommendationStrategy + '</recommendationStrategy>'}
${rootTagEnd}`;
}