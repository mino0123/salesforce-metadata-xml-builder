
module.exports = (object, asChild) => {
  var rootTagStart = '<InvocableActionSettings>';
  var rootTagEnd = '</InvocableActionSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.isPartialSaveAllowed == null ? '' : '<isPartialSaveAllowed>' + object.isPartialSaveAllowed + '</isPartialSaveAllowed>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}