
module.exports = (object, asChild) => {
  var rootTagStart = '<MyDomainSettings>';
  var rootTagEnd = '</MyDomainSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canOnlyLoginWithMyDomainUrl == null ? '' : '<canOnlyLoginWithMyDomainUrl>' + object.canOnlyLoginWithMyDomainUrl + '</canOnlyLoginWithMyDomainUrl>'}
	${object.doesApiLoginRequireOrgDomain == null ? '' : '<doesApiLoginRequireOrgDomain>' + object.doesApiLoginRequireOrgDomain + '</doesApiLoginRequireOrgDomain>'}
	${object.enableNativeBrowserForAuthOnAndroid == null ? '' : '<enableNativeBrowserForAuthOnAndroid>' + object.enableNativeBrowserForAuthOnAndroid + '</enableNativeBrowserForAuthOnAndroid>'}
	${object.enableNativeBrowserForAuthOnIos == null ? '' : '<enableNativeBrowserForAuthOnIos>' + object.enableNativeBrowserForAuthOnIos + '</enableNativeBrowserForAuthOnIos>'}
	${object.useStabilizedMyDomainHostnames == null ? '' : '<useStabilizedMyDomainHostnames>' + object.useStabilizedMyDomainHostnames + '</useStabilizedMyDomainHostnames>'}
	${object.useStabilizedSandboxMyDomainHostnames == null ? '' : '<useStabilizedSandboxMyDomainHostnames>' + object.useStabilizedSandboxMyDomainHostnames + '</useStabilizedSandboxMyDomainHostnames>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}