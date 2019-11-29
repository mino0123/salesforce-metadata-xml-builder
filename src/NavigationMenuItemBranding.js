
module.exports = (object, asChild) => {
  var rootTagStart = '<NavigationMenuItemBranding>';
  var rootTagEnd = '</NavigationMenuItemBranding>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.tileImage == null ? '' : '<tileImage>' + object.tileImage + '</tileImage>'}
${rootTagEnd}`;
}