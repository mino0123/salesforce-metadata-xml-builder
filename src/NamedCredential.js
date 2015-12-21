const ExternalPrincipalType = require('./ExternalPrincipalType');
const AuthenticationProtocol = require('./AuthenticationProtocol');

module.exports = (object, asChild) => {
  var rootTagStart = '<NamedCredential>';
  var rootTagEnd = '</NamedCredential>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.authProvider == null ? '' : '<authProvider>' + object.authProvider + '</authProvider>'}
	${object.certificate == null ? '' : '<certificate>' + object.certificate + '</certificate>'}
	${object.endpoint == null ? '' : '<endpoint>' + object.endpoint + '</endpoint>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.oauthRefreshToken == null ? '' : '<oauthRefreshToken>' + object.oauthRefreshToken + '</oauthRefreshToken>'}
	${object.oauthScope == null ? '' : '<oauthScope>' + object.oauthScope + '</oauthScope>'}
	${object.oauthToken == null ? '' : '<oauthToken>' + object.oauthToken + '</oauthToken>'}
	${object.password == null ? '' : '<password>' + object.password + '</password>'}
	${object.principalType == null ? '' : '<principalType>' + ExternalPrincipalType(object.principalType, true) + '</principalType>'}
	${object.protocol == null ? '' : '<protocol>' + AuthenticationProtocol(object.protocol, true) + '</protocol>'}
	${object.username == null ? '' : '<username>' + object.username + '</username>'}
${rootTagEnd}`;
}