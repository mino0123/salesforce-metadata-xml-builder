
module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedAppOauthIdToken>';
  var rootTagEnd = '</ConnectedAppOauthIdToken>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.idTokenAudience == null ? '' : '<idTokenAudience>' + object.idTokenAudience + '</idTokenAudience>'}
	${object.idTokenIncludeAttributes == null ? '' : '<idTokenIncludeAttributes>' + object.idTokenIncludeAttributes + '</idTokenIncludeAttributes>'}
	${object.idTokenIncludeCustomPerms == null ? '' : '<idTokenIncludeCustomPerms>' + object.idTokenIncludeCustomPerms + '</idTokenIncludeCustomPerms>'}
	${object.idTokenIncludeStandardClaims == null ? '' : '<idTokenIncludeStandardClaims>' + object.idTokenIncludeStandardClaims + '</idTokenIncludeStandardClaims>'}
	${object.idTokenValidity == null ? '' : '<idTokenValidity>' + object.idTokenValidity + '</idTokenValidity>'}
${rootTagEnd}`;
}