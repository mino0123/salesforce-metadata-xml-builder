
module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowTaskTranslation>';
  var rootTagEnd = '</WorkflowTaskTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.subject == null ? '' : '<subject>' + object.subject + '</subject>'}
${rootTagEnd}`;
}