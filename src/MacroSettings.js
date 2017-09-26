
module.exports = (object, asChild) => {
  var rootTagStart = '<MacroSettings>';
  var rootTagEnd = '</MacroSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAdvancedSearch == null ? '' : '<enableAdvancedSearch>' + object.enableAdvancedSearch + '</enableAdvancedSearch>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}