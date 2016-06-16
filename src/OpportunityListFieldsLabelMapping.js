
module.exports = (object, asChild) => {
  var rootTagStart = '<OpportunityListFieldsLabelMapping>';
  var rootTagEnd = '</OpportunityListFieldsLabelMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}