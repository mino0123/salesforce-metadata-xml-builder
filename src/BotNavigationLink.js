
module.exports = (object, asChild) => {
  var rootTagStart = '<BotNavigationLink>';
  var rootTagEnd = '</BotNavigationLink>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.targetBotDialog == null ? '' : '<targetBotDialog>' + object.targetBotDialog + '</targetBotDialog>'}
${rootTagEnd}`;
}