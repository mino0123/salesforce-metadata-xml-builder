const DataCategory = require('./DataCategory');

module.exports = (object, asChild) => {
  var rootTagStart = '<DataCategory>';
  var rootTagEnd = '</DataCategory>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataCategory == null ? '' : object.dataCategory.map(p => '<dataCategory>' + DataCategory(p, true) + '</dataCategory>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}