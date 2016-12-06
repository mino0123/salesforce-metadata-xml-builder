
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomExperienceTabSet>';
  var rootTagEnd = '</CustomExperienceTabSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customTab == null ? '' : object.customTab.map(p => '<customTab>' + p + '</customTab>').join('')}
	${object.defaultTab == null ? '' : '<defaultTab>' + object.defaultTab + '</defaultTab>'}
	${object.standardTab == null ? '' : object.standardTab.map(p => '<standardTab>' + p + '</standardTab>').join('')}
${rootTagEnd}`;
}