
module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalPageField>';
  var rootTagEnd = '</ApprovalPageField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : object.field.map(p => '<field>' + p + '</field>')}
${rootTagEnd}`;
}