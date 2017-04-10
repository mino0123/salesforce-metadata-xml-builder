
module.exports = (object, asChild) => {
  var rootTagStart = '<EmailServicesAddress>';
  var rootTagEnd = '</EmailServicesAddress>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.authorizedSenders == null ? '' : '<authorizedSenders>' + object.authorizedSenders + '</authorizedSenders>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.localPart == null ? '' : '<localPart>' + object.localPart + '</localPart>'}
	${object.runAsUser == null ? '' : '<runAsUser>' + object.runAsUser + '</runAsUser>'}
${rootTagEnd}`;
}