const TransactionSecurityNotification = require('./TransactionSecurityNotification');

module.exports = (object, asChild) => {
  var rootTagStart = '<TransactionSecurityAction>';
  var rootTagEnd = '</TransactionSecurityAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.block == null ? '' : '<block>' + object.block + '</block>'}
	${object.endSession == null ? '' : '<endSession>' + object.endSession + '</endSession>'}
	${object.notifications == null ? '' : object.notifications.map(p => '<notifications>' + TransactionSecurityNotification(p, true) + '</notifications>')}
	${object.twoFactorAuthentication == null ? '' : '<twoFactorAuthentication>' + object.twoFactorAuthentication + '</twoFactorAuthentication>'}
${rootTagEnd}`;
}