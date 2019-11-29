
module.exports = (object, asChild) => {
  var rootTagStart = '<OmniChannelSettings>';
  var rootTagEnd = '</OmniChannelSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableOmniAutoLoginPrompt == null ? '' : '<enableOmniAutoLoginPrompt>' + object.enableOmniAutoLoginPrompt + '</enableOmniAutoLoginPrompt>'}
	${object.enableOmniChannel == null ? '' : '<enableOmniChannel>' + object.enableOmniChannel + '</enableOmniChannel>'}
	${object.enableOmniSecondaryRoutingPriority == null ? '' : '<enableOmniSecondaryRoutingPriority>' + object.enableOmniSecondaryRoutingPriority + '</enableOmniSecondaryRoutingPriority>'}
	${object.enableOmniSkillsRouting == null ? '' : '<enableOmniSkillsRouting>' + object.enableOmniSkillsRouting + '</enableOmniSkillsRouting>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}