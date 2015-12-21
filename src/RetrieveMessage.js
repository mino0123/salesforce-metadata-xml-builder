
module.exports = (object, asChild) => {
  var rootTagStart = '<RetrieveMessage>';
  var rootTagEnd = '</RetrieveMessage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fileName == null ? '' : '<fileName>' + object.fileName + '</fileName>'}
	${object.problem == null ? '' : '<problem>' + object.problem + '</problem>'}
${rootTagEnd}`;
}