
module.exports = (object, asChild) => {
  var rootTagStart = '<VisualizationType>';
  var rootTagEnd = '</VisualizationType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.icon == null ? '' : '<icon>' + object.icon + '</icon>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.scriptBootstrapMethod == null ? '' : '<scriptBootstrapMethod>' + object.scriptBootstrapMethod + '</scriptBootstrapMethod>'}
${rootTagEnd}`;
}