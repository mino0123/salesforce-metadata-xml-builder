
module.exports = (object, asChild) => {
  var rootTagStart = '<LiveChatButtonDeployments>';
  var rootTagEnd = '</LiveChatButtonDeployments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.deployment == null ? '' : object.deployment.map(p => '<deployment>' + p + '</deployment>').join('')}
${rootTagEnd}`;
}