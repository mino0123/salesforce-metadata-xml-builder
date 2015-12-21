
module.exports = (object, asChild) => {
  var rootTagStart = '<AccessMapping>';
  var rootTagEnd = '</AccessMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessLevel == null ? '' : '<accessLevel>' + object.accessLevel + '</accessLevel>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.objectField == null ? '' : '<objectField>' + object.objectField + '</objectField>'}
	${object.userField == null ? '' : '<userField>' + object.userField + '</userField>'}
${rootTagEnd}`;
}