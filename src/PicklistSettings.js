
module.exports = (object, asChild) => {
  var rootTagStart = '<PicklistSettings>';
  var rootTagEnd = '</PicklistSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.isPicklistApiNameEditDisabled == null ? '' : '<isPicklistApiNameEditDisabled>' + object.isPicklistApiNameEditDisabled + '</isPicklistApiNameEditDisabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}