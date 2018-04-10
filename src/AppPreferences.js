
module.exports = (object, asChild) => {
  var rootTagStart = '<AppPreferences>';
  var rootTagEnd = '</AppPreferences>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCustomizeMyTabs == null ? '' : '<enableCustomizeMyTabs>' + object.enableCustomizeMyTabs + '</enableCustomizeMyTabs>'}
	${object.enableKeyboardShortcuts == null ? '' : '<enableKeyboardShortcuts>' + object.enableKeyboardShortcuts + '</enableKeyboardShortcuts>'}
	${object.enableListViewHover == null ? '' : '<enableListViewHover>' + object.enableListViewHover + '</enableListViewHover>'}
	${object.enableListViewReskin == null ? '' : '<enableListViewReskin>' + object.enableListViewReskin + '</enableListViewReskin>'}
	${object.enableMultiMonitorComponents == null ? '' : '<enableMultiMonitorComponents>' + object.enableMultiMonitorComponents + '</enableMultiMonitorComponents>'}
	${object.enablePinTabs == null ? '' : '<enablePinTabs>' + object.enablePinTabs + '</enablePinTabs>'}
	${object.enableTabHover == null ? '' : '<enableTabHover>' + object.enableTabHover + '</enableTabHover>'}
	${object.enableTabLimits == null ? '' : '<enableTabLimits>' + object.enableTabLimits + '</enableTabLimits>'}
	${object.saveUserSessions == null ? '' : '<saveUserSessions>' + object.saveUserSessions + '</saveUserSessions>'}
${rootTagEnd}`;
}