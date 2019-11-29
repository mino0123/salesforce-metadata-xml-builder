
module.exports = (object, asChild) => {
  var rootTagStart = '<PlatformEventChannelMember>';
  var rootTagEnd = '</PlatformEventChannelMember>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.eventChannel == null ? '' : '<eventChannel>' + object.eventChannel + '</eventChannel>'}
	${object.selectedEntity == null ? '' : '<selectedEntity>' + object.selectedEntity + '</selectedEntity>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}