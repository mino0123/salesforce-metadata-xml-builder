const ChannelLayoutItem = require('./ChannelLayoutItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<ChannelLayout>';
  var rootTagEnd = '</ChannelLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabledChannels == null ? '' : object.enabledChannels.map(p => '<enabledChannels>' + p + '</enabledChannels>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.layoutItems == null ? '' : object.layoutItems.map(p => '<layoutItems>' + ChannelLayoutItem(p, true) + '</layoutItems>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}