const AuthProviderType = require('./AuthProviderType');

module.exports = (object, asChild) => {
  var rootTagStart = '<AuthProvider>';
  var rootTagEnd = '</AuthProvider>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.authorizeUrl == null ? '' : '<authorizeUrl>' + object.authorizeUrl + '</authorizeUrl>'}
	${object.consumerKey == null ? '' : '<consumerKey>' + object.consumerKey + '</consumerKey>'}
	${object.consumerSecret == null ? '' : '<consumerSecret>' + object.consumerSecret + '</consumerSecret>'}
	${object.customMetadataTypeRecord == null ? '' : '<customMetadataTypeRecord>' + object.customMetadataTypeRecord + '</customMetadataTypeRecord>'}
	${object.defaultScopes == null ? '' : '<defaultScopes>' + object.defaultScopes + '</defaultScopes>'}
	${object.errorUrl == null ? '' : '<errorUrl>' + object.errorUrl + '</errorUrl>'}
	${object.executionUser == null ? '' : '<executionUser>' + object.executionUser + '</executionUser>'}
	${object.friendlyName == null ? '' : '<friendlyName>' + object.friendlyName + '</friendlyName>'}
	${object.iconUrl == null ? '' : '<iconUrl>' + object.iconUrl + '</iconUrl>'}
	${object.idTokenIssuer == null ? '' : '<idTokenIssuer>' + object.idTokenIssuer + '</idTokenIssuer>'}
	${object.includeOrgIdInIdentifier == null ? '' : '<includeOrgIdInIdentifier>' + object.includeOrgIdInIdentifier + '</includeOrgIdInIdentifier>'}
	${object.logoutUrl == null ? '' : '<logoutUrl>' + object.logoutUrl + '</logoutUrl>'}
	${object.plugin == null ? '' : '<plugin>' + object.plugin + '</plugin>'}
	${object.portal == null ? '' : '<portal>' + object.portal + '</portal>'}
	${object.providerType == null ? '' : '<providerType>' + AuthProviderType(object.providerType, true) + '</providerType>'}
	${object.registrationHandler == null ? '' : '<registrationHandler>' + object.registrationHandler + '</registrationHandler>'}
	${object.sendAccessTokenInHeader == null ? '' : '<sendAccessTokenInHeader>' + object.sendAccessTokenInHeader + '</sendAccessTokenInHeader>'}
	${object.sendClientCredentialsInHeader == null ? '' : '<sendClientCredentialsInHeader>' + object.sendClientCredentialsInHeader + '</sendClientCredentialsInHeader>'}
	${object.tokenUrl == null ? '' : '<tokenUrl>' + object.tokenUrl + '</tokenUrl>'}
	${object.userInfoUrl == null ? '' : '<userInfoUrl>' + object.userInfoUrl + '</userInfoUrl>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}