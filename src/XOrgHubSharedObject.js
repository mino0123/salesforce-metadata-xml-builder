
module.exports = (object, asChild) => {
  var rootTagStart = '<XOrgHubSharedObject>';
  var rootTagEnd = '</XOrgHubSharedObject>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}