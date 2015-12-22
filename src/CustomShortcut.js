
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomShortcut>';
  var rootTagEnd = '</CustomShortcut>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.eventName == null ? '' : '<eventName>' + object.eventName + '</eventName>'}
	${object.action == null ? '' : '<action>' + object.action + '</action>'}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.keyCommand == null ? '' : '<keyCommand>' + object.keyCommand + '</keyCommand>'}
${rootTagEnd}`;
}