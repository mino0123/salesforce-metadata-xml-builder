
module.exports = (object, asChild) => {
  var rootTagStart = '<CanvasMetadata>';
  var rootTagEnd = '</CanvasMetadata>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessMethod == null ? '' : '<accessMethod>' + object.accessMethod + '</accessMethod>'}
	${object.canvasOptions == null ? '' : '<canvasOptions>' + object.canvasOptions + '</canvasOptions>'}
	${object.canvasUrl == null ? '' : '<canvasUrl>' + object.canvasUrl + '</canvasUrl>'}
	${object.lifecycleClass == null ? '' : '<lifecycleClass>' + object.lifecycleClass + '</lifecycleClass>'}
	${object.locationOptions == null ? '' : '<locationOptions>' + object.locationOptions + '</locationOptions>'}
	${object.samlInitiationMethod == null ? '' : '<samlInitiationMethod>' + object.samlInitiationMethod + '</samlInitiationMethod>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}