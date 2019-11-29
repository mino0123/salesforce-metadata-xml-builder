
module.exports = (object, asChild) => {
  var rootTagStart = '<ServiceChannelStatus>';
  var rootTagEnd = '</ServiceChannelStatus>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channel == null ? '' : object.channel.map(p => '<channel>' + p + '</channel>').join('')}
${rootTagEnd}`;
}