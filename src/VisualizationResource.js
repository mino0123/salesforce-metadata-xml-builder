const VisualizationResourceType = require('./VisualizationResourceType');

module.exports = (object, asChild) => {
  var rootTagStart = '<VisualizationResource>';
  var rootTagEnd = '</VisualizationResource>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.file == null ? '' : '<file>' + object.file + '</file>'}
	${object.rank == null ? '' : '<rank>' + object.rank + '</rank>'}
	${object.type == null ? '' : '<type>' + VisualizationResourceType(object.type, true) + '</type>'}
${rootTagEnd}`;
}