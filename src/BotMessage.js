
module.exports = (object, asChild) => {
  var rootTagStart = '<BotMessage>';
  var rootTagEnd = '</BotMessage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.message == null ? '' : '<message>' + object.message + '</message>'}
${rootTagEnd}`;
}