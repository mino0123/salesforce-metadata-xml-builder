const RelatedList = require('./RelatedList');

module.exports = (object, asChild) => {
  var rootTagStart = '<SidebarComponent>';
  var rootTagEnd = '</SidebarComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.componentType == null ? '' : '<componentType>' + object.componentType + '</componentType>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.lookup == null ? '' : '<lookup>' + object.lookup + '</lookup>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.relatedLists == null ? '' : object.relatedLists.map(p => '<relatedLists>' + RelatedList(p, true) + '</relatedLists>')}
	${object.unit == null ? '' : '<unit>' + object.unit + '</unit>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
${rootTagEnd}`;
}