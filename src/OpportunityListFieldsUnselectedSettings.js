
module.exports = (object, asChild) => {
  var rootTagStart = '<OpportunityListFieldsUnselectedSettings>';
  var rootTagEnd = '</OpportunityListFieldsUnselectedSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : object.field.map(p => '<field>' + p + '</field>').join('')}
${rootTagEnd}`;
}