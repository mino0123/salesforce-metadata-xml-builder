
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportTypeColumn>';
  var rootTagEnd = '</ReportTypeColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.checkedByDefault == null ? '' : '<checkedByDefault>' + object.checkedByDefault + '</checkedByDefault>'}
	${object.displayNameOverride == null ? '' : '<displayNameOverride>' + object.displayNameOverride + '</displayNameOverride>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.table == null ? '' : '<table>' + object.table + '</table>'}
${rootTagEnd}`;
}