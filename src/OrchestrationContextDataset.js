
module.exports = (object, asChild) => {
  var rootTagStart = '<OrchestrationContextDataset>';
  var rootTagEnd = '</OrchestrationContextDataset>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.datasetType == null ? '' : '<datasetType>' + object.datasetType + '</datasetType>'}
	${object.orchestrationDataset == null ? '' : '<orchestrationDataset>' + object.orchestrationDataset + '</orchestrationDataset>'}
${rootTagEnd}`;
}