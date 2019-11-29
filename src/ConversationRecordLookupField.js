
module.exports = (object, asChild) => {
  var rootTagStart = '<ConversationRecordLookupField>';
  var rootTagEnd = '</ConversationRecordLookupField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
${rootTagEnd}`;
}