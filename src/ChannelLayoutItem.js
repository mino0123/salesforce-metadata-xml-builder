
module.exports = (object, asChild) => {
  var rootTagStart = '<ChannelLayoutItem>';
  var rootTagEnd = '</ChannelLayoutItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
${rootTagEnd}`;
}