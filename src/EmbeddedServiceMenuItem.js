const EmbeddedServiceChannelType = require('./EmbeddedServiceChannelType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceMenuItem>';
  var rootTagEnd = '</EmbeddedServiceMenuItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channel == null ? '' : '<channel>' + object.channel + '</channel>'}
	${object.channelType == null ? '' : '<channelType>' + EmbeddedServiceChannelType(object.channelType, true) + '</channelType>'}
	${object.displayOrder == null ? '' : '<displayOrder>' + object.displayOrder + '</displayOrder>'}
	${object.phoneNumber == null ? '' : '<phoneNumber>' + object.phoneNumber + '</phoneNumber>'}
${rootTagEnd}`;
}