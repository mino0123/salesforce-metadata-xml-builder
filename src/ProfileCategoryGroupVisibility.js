const CategoryGroupVisibility = require('./CategoryGroupVisibility');

module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileCategoryGroupVisibility>';
  var rootTagEnd = '</ProfileCategoryGroupVisibility>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataCategories == null ? '' : object.dataCategories.map(p => '<dataCategories>' + p + '</dataCategories>').join('')}
	${object.dataCategoryGroup == null ? '' : '<dataCategoryGroup>' + object.dataCategoryGroup + '</dataCategoryGroup>'}
	${object.visibility == null ? '' : '<visibility>' + CategoryGroupVisibility(object.visibility, true) + '</visibility>'}
${rootTagEnd}`;
}