
module.exports = (object, asChild) => {
  var rootTagStart = '<TransactionSecurityNotification>';
  var rootTagEnd = '</TransactionSecurityNotification>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.inApp == null ? '' : '<inApp>' + object.inApp + '</inApp>'}
	${object.sendEmail == null ? '' : '<sendEmail>' + object.sendEmail + '</sendEmail>'}
	${object.user == null ? '' : '<user>' + object.user + '</user>'}
${rootTagEnd}`;
}