const DataCategoryFilterOperation = require('./DataCategoryFilterOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportDataCategoryFilter>';
  var rootTagEnd = '</ReportDataCategoryFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataCategory == null ? '' : '<dataCategory>' + object.dataCategory + '</dataCategory>'}
	${object.dataCategoryGroup == null ? '' : '<dataCategoryGroup>' + object.dataCategoryGroup + '</dataCategoryGroup>'}
	${object.operator == null ? '' : '<operator>' + DataCategoryFilterOperation(object.operator, true) + '</operator>'}
${rootTagEnd}`;
}