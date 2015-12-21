
module.exports = (object, asChild) => {
  var rootTagStart = '<DefaultShortcut>';
  var rootTagEnd = '</DefaultShortcut>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + object.action + '</action>'}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.keyCommand == null ? '' : '<keyCommand>' + object.keyCommand + '</keyCommand>'}
${rootTagEnd}`;
}