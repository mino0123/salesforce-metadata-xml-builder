
module.exports = (object, asChild) => {
  var rootTagStart = '<Territory>';
  var rootTagEnd = '</Territory>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accountAccessLevel == null ? '' : '<accountAccessLevel>' + object.accountAccessLevel + '</accountAccessLevel>'}
	${object.parentTerritory == null ? '' : '<parentTerritory>' + object.parentTerritory + '</parentTerritory>'}
${rootTagEnd}`;
}