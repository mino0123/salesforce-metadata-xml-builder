const NavigationMenuItem = require('./NavigationMenuItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<NavigationSubMenu>';
  var rootTagEnd = '</NavigationSubMenu>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.navigationMenuItem == null ? '' : object.navigationMenuItem.map(p => '<navigationMenuItem>' + NavigationMenuItem(p, true) + '</navigationMenuItem>').join('')}
${rootTagEnd}`;
}