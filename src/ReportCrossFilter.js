const ReportFilterItem = require('./ReportFilterItem');
const ObjectFilterOperator = require('./ObjectFilterOperator');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportCrossFilter>';
  var rootTagEnd = '</ReportCrossFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.criteriaItems == null ? '' : object.criteriaItems.map(p => '<criteriaItems>' + ReportFilterItem(p, true) + '</criteriaItems>')}
	${object.operation == null ? '' : '<operation>' + ObjectFilterOperator(object.operation, true) + '</operation>'}
	${object.primaryTableColumn == null ? '' : '<primaryTableColumn>' + object.primaryTableColumn + '</primaryTableColumn>'}
	${object.relatedTable == null ? '' : '<relatedTable>' + object.relatedTable + '</relatedTable>'}
	${object.relatedTableJoinColumn == null ? '' : '<relatedTableJoinColumn>' + object.relatedTableJoinColumn + '</relatedTableJoinColumn>'}
${rootTagEnd}`;
}