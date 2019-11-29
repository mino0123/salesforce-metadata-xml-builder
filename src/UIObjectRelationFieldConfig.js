
module.exports = (object, asChild) => {
  var rootTagStart = '<UIObjectRelationFieldConfig>';
  var rootTagEnd = '</UIObjectRelationFieldConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.displayLabel == null ? '' : '<displayLabel>' + object.displayLabel + '</displayLabel>'}
	${object.queryText == null ? '' : '<queryText>' + object.queryText + '</queryText>'}
	${object.rowOrder == null ? '' : '<rowOrder>' + object.rowOrder + '</rowOrder>'}
${rootTagEnd}`;
}