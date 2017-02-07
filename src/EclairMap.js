
module.exports = (object, asChild) => {
  var rootTagStart = '<EclairMap>';
  var rootTagEnd = '</EclairMap>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.boundingBoxBottom == null ? '' : '<boundingBoxBottom>' + object.boundingBoxBottom + '</boundingBoxBottom>'}
	${object.boundingBoxLeft == null ? '' : '<boundingBoxLeft>' + object.boundingBoxLeft + '</boundingBoxLeft>'}
	${object.boundingBoxRight == null ? '' : '<boundingBoxRight>' + object.boundingBoxRight + '</boundingBoxRight>'}
	${object.boundingBoxTop == null ? '' : '<boundingBoxTop>' + object.boundingBoxTop + '</boundingBoxTop>'}
	${object.mapLabel == null ? '' : '<mapLabel>' + object.mapLabel + '</mapLabel>'}
	${object.mapName == null ? '' : '<mapName>' + object.mapName + '</mapName>'}
	${object.projection == null ? '' : '<projection>' + object.projection + '</projection>'}
${rootTagEnd}`;
}