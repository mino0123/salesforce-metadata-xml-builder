
module.exports = (object, asChild) => {
  var rootTagStart = '<LookupFilterTranslation>';
  var rootTagEnd = '</LookupFilterTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
	${object.informationalMessage == null ? '' : '<informationalMessage>' + object.informationalMessage + '</informationalMessage>'}
${rootTagEnd}`;
}