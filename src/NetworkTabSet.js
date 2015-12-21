
module.exports = (object, asChild) => {
  var rootTagStart = '<NetworkTabSet>';
  var rootTagEnd = '</NetworkTabSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customTab == null ? '' : object.customTab.map(p => '<customTab>' + p + '</customTab>')}
	${object.defaultTab == null ? '' : '<defaultTab>' + object.defaultTab + '</defaultTab>'}
	${object.standardTab == null ? '' : object.standardTab.map(p => '<standardTab>' + p + '</standardTab>')}
${rootTagEnd}`;
}