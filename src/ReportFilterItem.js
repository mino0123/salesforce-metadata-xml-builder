const FilterOperation = require('./FilterOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportFilterItem>';
  var rootTagEnd = '</ReportFilterItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.column == null ? '' : '<column>' + object.column + '</column>'}
	${object.columnToColumn == null ? '' : '<columnToColumn>' + object.columnToColumn + '</columnToColumn>'}
	${object.isUnlocked == null ? '' : '<isUnlocked>' + object.isUnlocked + '</isUnlocked>'}
	${object.operator == null ? '' : '<operator>' + FilterOperation(object.operator, true) + '</operator>'}
	${object.snapshot == null ? '' : '<snapshot>' + object.snapshot + '</snapshot>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}