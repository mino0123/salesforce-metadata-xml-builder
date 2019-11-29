
module.exports = (object, asChild) => {
  var rootTagStart = '<MapsAndLocationSettings>';
  var rootTagEnd = '</MapsAndLocationSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAddressAutoComplete == null ? '' : '<enableAddressAutoComplete>' + object.enableAddressAutoComplete + '</enableAddressAutoComplete>'}
	${object.enableMapsAndLocation == null ? '' : '<enableMapsAndLocation>' + object.enableMapsAndLocation + '</enableMapsAndLocation>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}