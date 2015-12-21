const DataCategory = require('./DataCategory');
const ObjectUsage = require('./ObjectUsage');

module.exports = (object, asChild) => {
  var rootTagStart = '<DataCategoryGroup>';
  var rootTagEnd = '</DataCategoryGroup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.dataCategory == null ? '' : '<dataCategory>' + DataCategory(object.dataCategory, true) + '</dataCategory>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.objectUsage == null ? '' : '<objectUsage>' + ObjectUsage(object.objectUsage, true) + '</objectUsage>'}
${rootTagEnd}`;
}