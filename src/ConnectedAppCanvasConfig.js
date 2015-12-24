const AccessMethod = require('./AccessMethod');
const CanvasLocationOptions = require('./CanvasLocationOptions');
const CanvasOptions = require('./CanvasOptions');
const SamlInitiationMethod = require('./SamlInitiationMethod');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedAppCanvasConfig>';
  var rootTagEnd = '</ConnectedAppCanvasConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessMethod == null ? '' : '<accessMethod>' + AccessMethod(object.accessMethod, true) + '</accessMethod>'}
	${object.canvasUrl == null ? '' : '<canvasUrl>' + object.canvasUrl + '</canvasUrl>'}
	${object.lifecycleClass == null ? '' : '<lifecycleClass>' + object.lifecycleClass + '</lifecycleClass>'}
	${object.locations == null ? '' : object.locations.map(p => '<locations>' + CanvasLocationOptions(p, true) + '</locations>').join('')}
	${object.options == null ? '' : object.options.map(p => '<options>' + CanvasOptions(p, true) + '</options>').join('')}
	${object.samlInitiationMethod == null ? '' : '<samlInitiationMethod>' + SamlInitiationMethod(object.samlInitiationMethod, true) + '</samlInitiationMethod>'}
${rootTagEnd}`;
}