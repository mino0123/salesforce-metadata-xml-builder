const WeightedSourceCategory = require('./WeightedSourceCategory');

module.exports = (object, asChild) => {
  var rootTagStart = '<ForecastingCategoryMapping>';
  var rootTagEnd = '</ForecastingCategoryMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.forecastingItemCategoryApiName == null ? '' : '<forecastingItemCategoryApiName>' + object.forecastingItemCategoryApiName + '</forecastingItemCategoryApiName>'}
	${object.weightedSourceCategories == null ? '' : object.weightedSourceCategories.map(p => '<weightedSourceCategories>' + WeightedSourceCategory(p, true) + '</weightedSourceCategories>')}
${rootTagEnd}`;
}