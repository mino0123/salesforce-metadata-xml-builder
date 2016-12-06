
module.exports = (object, asChild) => {
  var rootTagStart = '<ValueTranslation>';
  var rootTagEnd = '</ValueTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.translation == null ? '' : '<translation>' + object.translation + '</translation>'}
${rootTagEnd}`;
}