const FilterScope = require('./FilterScope');
const ListViewFilter = require('./ListViewFilter');
const Language = require('./Language');
const SharedTo = require('./SharedTo');

module.exports = (object, asChild) => {
  var rootTagStart = '<ListView>';
  var rootTagEnd = '</ListView>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.columns == null ? '' : object.columns.map(p => '<columns>' + p + '</columns>')}
	${object.division == null ? '' : '<division>' + object.division + '</division>'}
	${object.filterScope == null ? '' : '<filterScope>' + FilterScope(object.filterScope, true) + '</filterScope>'}
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + ListViewFilter(p, true) + '</filters>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.language == null ? '' : '<language>' + Language(object.language, true) + '</language>'}
	${object.queue == null ? '' : '<queue>' + object.queue + '</queue>'}
	${object.sharedTo == null ? '' : '<sharedTo>' + SharedTo(object.sharedTo, true) + '</sharedTo>'}
${rootTagEnd}`;
}