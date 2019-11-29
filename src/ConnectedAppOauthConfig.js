const ConnectedAppOauthIdToken = require('./ConnectedAppOauthIdToken');
const ConnectedAppOauthAccessScope = require('./ConnectedAppOauthAccessScope');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedAppOauthConfig>';
  var rootTagEnd = '</ConnectedAppOauthConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.callbackUrl == null ? '' : '<callbackUrl>' + object.callbackUrl + '</callbackUrl>'}
	${object.certificate == null ? '' : '<certificate>' + object.certificate + '</certificate>'}
	${object.consumerKey == null ? '' : '<consumerKey>' + object.consumerKey + '</consumerKey>'}
	${object.consumerSecret == null ? '' : '<consumerSecret>' + object.consumerSecret + '</consumerSecret>'}
	${object.idTokenConfig == null ? '' : '<idTokenConfig>' + ConnectedAppOauthIdToken(object.idTokenConfig, true) + '</idTokenConfig>'}
	${object.isAdminApproved == null ? '' : '<isAdminApproved>' + object.isAdminApproved + '</isAdminApproved>'}
	${object.scopes == null ? '' : object.scopes.map(p => '<scopes>' + ConnectedAppOauthAccessScope(p, true) + '</scopes>').join('')}
	${object.singleLogoutUrl == null ? '' : '<singleLogoutUrl>' + object.singleLogoutUrl + '</singleLogoutUrl>'}
${rootTagEnd}`;
}