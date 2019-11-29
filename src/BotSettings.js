
module.exports = (object, asChild) => {
  var rootTagStart = '<BotSettings>';
  var rootTagEnd = '</BotSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableBots == null ? '' : '<enableBots>' + object.enableBots + '</enableBots>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}