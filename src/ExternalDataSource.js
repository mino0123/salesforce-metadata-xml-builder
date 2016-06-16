const ExternalPrincipalType = require('./ExternalPrincipalType');
const AuthenticationProtocol = require('./AuthenticationProtocol');
const ExternalDataSourceType = require('./ExternalDataSourceType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ExternalDataSource>';
  var rootTagEnd = '</ExternalDataSource>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.authProvider == null ? '' : '<authProvider>' + object.authProvider + '</authProvider>'}
	${object.certificate == null ? '' : '<certificate>' + object.certificate + '</certificate>'}
	${object.customConfiguration == null ? '' : '<customConfiguration>' + object.customConfiguration + '</customConfiguration>'}
	${object.endpoint == null ? '' : '<endpoint>' + object.endpoint + '</endpoint>'}
	${object.isWritable == null ? '' : '<isWritable>' + object.isWritable + '</isWritable>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.oauthRefreshToken == null ? '' : '<oauthRefreshToken>' + object.oauthRefreshToken + '</oauthRefreshToken>'}
	${object.oauthScope == null ? '' : '<oauthScope>' + object.oauthScope + '</oauthScope>'}
	${object.oauthToken == null ? '' : '<oauthToken>' + object.oauthToken + '</oauthToken>'}
	${object.password == null ? '' : '<password>' + object.password + '</password>'}
	${object.principalType == null ? '' : '<principalType>' + ExternalPrincipalType(object.principalType, true) + '</principalType>'}
	${object.protocol == null ? '' : '<protocol>' + AuthenticationProtocol(object.protocol, true) + '</protocol>'}
	${object.repository == null ? '' : '<repository>' + object.repository + '</repository>'}
	${object.type == null ? '' : '<type>' + ExternalDataSourceType(object.type, true) + '</type>'}
	${object.username == null ? '' : '<username>' + object.username + '</username>'}
	${object.version == null ? '' : '<version>' + object.version + '</version>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}