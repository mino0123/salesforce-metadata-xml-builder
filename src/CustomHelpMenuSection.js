const CustomHelpMenuItem = require('./CustomHelpMenuItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomHelpMenuSection>';
  var rootTagEnd = '</CustomHelpMenuSection>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customHelpMenuItems == null ? '' : object.customHelpMenuItems.map(p => '<customHelpMenuItems>' + CustomHelpMenuItem(p, true) + '</customHelpMenuItems>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}