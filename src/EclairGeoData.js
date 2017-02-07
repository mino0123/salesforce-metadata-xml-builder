const EclairMap = require('./EclairMap');

module.exports = (object, asChild) => {
  var rootTagStart = '<EclairGeoData>';
  var rootTagEnd = '</EclairGeoData>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.maps == null ? '' : object.maps.map(p => '<maps>' + EclairMap(p, true) + '</maps>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}