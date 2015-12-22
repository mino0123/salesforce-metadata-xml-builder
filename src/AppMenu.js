const AppMenuItem = require('./AppMenuItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<AppMenu>';
  var rootTagEnd = '</AppMenu>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.appMenuItems == null ? '' : object.appMenuItems.map(p => '<appMenuItems>' + AppMenuItem(p, true) + '</appMenuItems>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}