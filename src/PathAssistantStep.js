
module.exports = (object, asChild) => {
  var rootTagStart = '<PathAssistantStep>';
  var rootTagEnd = '</PathAssistantStep>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldNames == null ? '' : object.fieldNames.map(p => '<fieldNames>' + p + '</fieldNames>').join('')}
	${object.info == null ? '' : '<info>' + object.info + '</info>'}
	${object.picklistValueName == null ? '' : '<picklistValueName>' + object.picklistValueName + '</picklistValueName>'}
${rootTagEnd}`;
}