
module.exports = (object, asChild) => {
  var rootTagStart = '<OpportunityListFieldsSelectedSettings>';
  var rootTagEnd = '</OpportunityListFieldsSelectedSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : object.field.map(p => '<field>' + p + '</field>').join('')}
${rootTagEnd}`;
}