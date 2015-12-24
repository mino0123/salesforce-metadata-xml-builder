
module.exports = (object, asChild) => {
  var rootTagStart = '<PackageTypeMembers>';
  var rootTagEnd = '</PackageTypeMembers>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.members == null ? '' : object.members.map(p => '<members>' + p + '</members>').join('')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}