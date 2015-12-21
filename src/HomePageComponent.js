const PageComponentType = require('./PageComponentType');
const PageComponentWidth = require('./PageComponentWidth');

module.exports = (object, asChild) => {
  var rootTagStart = '<HomePageComponent>';
  var rootTagEnd = '</HomePageComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.body == null ? '' : '<body>' + object.body + '</body>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.links == null ? '' : object.links.map(p => '<links>' + p + '</links>')}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.pageComponentType == null ? '' : '<pageComponentType>' + PageComponentType(object.pageComponentType, true) + '</pageComponentType>'}
	${object.showLabel == null ? '' : '<showLabel>' + object.showLabel + '</showLabel>'}
	${object.showScrollbars == null ? '' : '<showScrollbars>' + object.showScrollbars + '</showScrollbars>'}
	${object.width == null ? '' : '<width>' + PageComponentWidth(object.width, true) + '</width>'}
${rootTagEnd}`;
}