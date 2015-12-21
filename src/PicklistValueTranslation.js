
module.exports = (object, asChild) => {
  var rootTagStart = '<PicklistValueTranslation>';
  var rootTagEnd = '</PicklistValueTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.translation == null ? '' : '<translation>' + object.translation + '</translation>'}
${rootTagEnd}`;
}