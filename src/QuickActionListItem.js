
module.exports = (object, asChild) => {
  var rootTagStart = '<QuickActionListItem>';
  var rootTagEnd = '</QuickActionListItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.quickActionName == null ? '' : '<quickActionName>' + object.quickActionName + '</quickActionName>'}
${rootTagEnd}`;
}