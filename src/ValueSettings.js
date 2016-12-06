
module.exports = (object, asChild) => {
  var rootTagStart = '<ValueSettings>';
  var rootTagEnd = '</ValueSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.controllingFieldValue == null ? '' : object.controllingFieldValue.map(p => '<controllingFieldValue>' + p + '</controllingFieldValue>').join('')}
	${object.valueName == null ? '' : '<valueName>' + object.valueName + '</valueName>'}
${rootTagEnd}`;
}