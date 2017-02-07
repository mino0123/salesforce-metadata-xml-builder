
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdOrganization>';
  var rootTagEnd = '</WaveXmdOrganization>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.instanceUrl == null ? '' : '<instanceUrl>' + object.instanceUrl + '</instanceUrl>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.organizationIdentifier == null ? '' : '<organizationIdentifier>' + object.organizationIdentifier + '</organizationIdentifier>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
${rootTagEnd}`;
}