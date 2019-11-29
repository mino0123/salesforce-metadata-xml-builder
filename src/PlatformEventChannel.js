const PlatformEventChannelType = require('./PlatformEventChannelType');

module.exports = (object, asChild) => {
  var rootTagStart = '<PlatformEventChannel>';
  var rootTagEnd = '</PlatformEventChannel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channelType == null ? '' : '<channelType>' + PlatformEventChannelType(object.channelType, true) + '</channelType>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}