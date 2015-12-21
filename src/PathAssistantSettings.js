
module.exports = (object, asChild) => {
  var rootTagStart = '<PathAssistantSettings>';
  var rootTagEnd = '</PathAssistantSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.pathAssistantEnabled == null ? '' : '<pathAssistantEnabled>' + object.pathAssistantEnabled + '</pathAssistantEnabled>'}
${rootTagEnd}`;
}