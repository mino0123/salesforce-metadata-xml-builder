const NavigationMenuItemBranding = require('./NavigationMenuItemBranding');
const NavigationSubMenu = require('./NavigationSubMenu');

module.exports = (object, asChild) => {
  var rootTagStart = '<NavigationMenuItem>';
  var rootTagEnd = '</NavigationMenuItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultListViewId == null ? '' : '<defaultListViewId>' + object.defaultListViewId + '</defaultListViewId>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.menuItemBranding == null ? '' : '<menuItemBranding>' + NavigationMenuItemBranding(object.menuItemBranding, true) + '</menuItemBranding>'}
	${object.position == null ? '' : '<position>' + object.position + '</position>'}
	${object.publiclyAvailable == null ? '' : '<publiclyAvailable>' + object.publiclyAvailable + '</publiclyAvailable>'}
	${object.subMenu == null ? '' : '<subMenu>' + NavigationSubMenu(object.subMenu, true) + '</subMenu>'}
	${object.target == null ? '' : '<target>' + object.target + '</target>'}
	${object.targetPreference == null ? '' : '<targetPreference>' + object.targetPreference + '</targetPreference>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}