const ValueTranslation = require('./ValueTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<GlobalValueSetTranslation>';
  var rootTagEnd = '</GlobalValueSetTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.valueTranslation == null ? '' : object.valueTranslation.map(p => '<valueTranslation>' + ValueTranslation(p, true) + '</valueTranslation>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}