const ServiceChannelStatus = require('./ServiceChannelStatus');

module.exports = (object, asChild) => {
  var rootTagStart = '<ServicePresenceStatus>';
  var rootTagEnd = '</ServicePresenceStatus>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channels == null ? '' : '<channels>' + ServiceChannelStatus(object.channels, true) + '</channels>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}