
module.exports = (object, asChild) => {
  var rootTagStart = '<ActionsSettings>';
  var rootTagEnd = '</ActionsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableDefaultQuickActionsOn == null ? '' : '<enableDefaultQuickActionsOn>' + object.enableDefaultQuickActionsOn + '</enableDefaultQuickActionsOn>'}
	${object.enableMdpEnabled == null ? '' : '<enableMdpEnabled>' + object.enableMdpEnabled + '</enableMdpEnabled>'}
	${object.enableThirdPartyActions == null ? '' : '<enableThirdPartyActions>' + object.enableThirdPartyActions + '</enableThirdPartyActions>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}