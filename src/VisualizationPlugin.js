const VisualizationResource = require('./VisualizationResource');
const VisualizationType = require('./VisualizationType');

module.exports = (object, asChild) => {
  var rootTagStart = '<VisualizationPlugin>';
  var rootTagEnd = '</VisualizationPlugin>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.icon == null ? '' : '<icon>' + object.icon + '</icon>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.visualizationResources == null ? '' : object.visualizationResources.map(p => '<visualizationResources>' + VisualizationResource(p, true) + '</visualizationResources>').join('')}
	${object.visualizationTypes == null ? '' : object.visualizationTypes.map(p => '<visualizationTypes>' + VisualizationType(p, true) + '</visualizationTypes>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}