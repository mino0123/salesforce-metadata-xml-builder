
module.exports = (object, asChild) => {
  var rootTagStart = '<NameSettings>';
  var rootTagEnd = '</NameSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableMiddleName == null ? '' : '<enableMiddleName>' + object.enableMiddleName + '</enableMiddleName>'}
	${object.enableNameSuffix == null ? '' : '<enableNameSuffix>' + object.enableNameSuffix + '</enableNameSuffix>'}
${rootTagEnd}`;
}