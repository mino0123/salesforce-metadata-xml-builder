
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowDefinition>';
  var rootTagEnd = '</FlowDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.activeVersionNumber == null ? '' : '<activeVersionNumber>' + object.activeVersionNumber + '</activeVersionNumber>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}