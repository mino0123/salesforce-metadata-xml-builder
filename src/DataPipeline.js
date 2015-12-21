const DataPipelineType = require('./DataPipelineType');

module.exports = (object, asChild) => {
  var rootTagStart = '<DataPipeline>';
  var rootTagEnd = '</DataPipeline>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.scriptType == null ? '' : '<scriptType>' + DataPipelineType(object.scriptType, true) + '</scriptType>'}
${rootTagEnd}`;
}