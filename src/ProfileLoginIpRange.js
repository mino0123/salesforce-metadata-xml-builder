
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileLoginIpRange>';
  var rootTagEnd = '</ProfileLoginIpRange>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.endAddress == null ? '' : '<endAddress>' + object.endAddress + '</endAddress>'}
	${object.startAddress == null ? '' : '<startAddress>' + object.startAddress + '</startAddress>'}
${rootTagEnd}`;
}