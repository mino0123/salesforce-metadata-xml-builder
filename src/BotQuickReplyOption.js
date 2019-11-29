
module.exports = (object, asChild) => {
  var rootTagStart = '<BotQuickReplyOption>';
  var rootTagEnd = '</BotQuickReplyOption>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.literalValue == null ? '' : '<literalValue>' + object.literalValue + '</literalValue>'}
${rootTagEnd}`;
}