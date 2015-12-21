
module.exports = (object, asChild) => {
  var rootTagStart = '<LiveChatDeploymentDomainWhitelist>';
  var rootTagEnd = '</LiveChatDeploymentDomainWhitelist>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.domain == null ? '' : object.domain.map(p => '<domain>' + p + '</domain>')}
${rootTagEnd}`;
}