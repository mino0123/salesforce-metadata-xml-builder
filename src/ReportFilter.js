const ReportFilterItem = require('./ReportFilterItem');
const Language = require('./Language');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportFilter>';
  var rootTagEnd = '</ReportFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.criteriaItems == null ? '' : object.criteriaItems.map(p => '<criteriaItems>' + ReportFilterItem(p, true) + '</criteriaItems>').join('')}
	${object.language == null ? '' : '<language>' + Language(object.language, true) + '</language>'}
${rootTagEnd}`;
}