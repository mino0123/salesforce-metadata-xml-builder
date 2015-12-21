
module.exports = (object, asChild) => {
  var rootTagStart = '<ListPlacement>';
  var rootTagEnd = '</ListPlacement>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.location == null ? '' : '<location>' + object.location + '</location>'}
	${object.units == null ? '' : '<units>' + object.units + '</units>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
${rootTagEnd}`;
}