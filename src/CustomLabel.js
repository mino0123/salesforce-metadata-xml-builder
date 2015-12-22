
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomLabel>';
  var rootTagEnd = '</CustomLabel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.categories == null ? '' : '<categories>' + object.categories + '</categories>'}
	${object.language == null ? '' : '<language>' + object.language + '</language>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.shortDescription == null ? '' : '<shortDescription>' + object.shortDescription + '</shortDescription>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}