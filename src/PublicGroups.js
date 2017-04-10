
module.exports = (object, asChild) => {
  var rootTagStart = '<PublicGroups>';
  var rootTagEnd = '</PublicGroups>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.publicGroup == null ? '' : object.publicGroup.map(p => '<publicGroup>' + p + '</publicGroup>').join('')}
${rootTagEnd}`;
}