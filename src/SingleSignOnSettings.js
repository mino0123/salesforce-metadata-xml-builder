
module.exports = (object, asChild) => {
  var rootTagStart = '<SingleSignOnSettings>';
  var rootTagEnd = '</SingleSignOnSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableForceDelegatedCallout == null ? '' : '<enableForceDelegatedCallout>' + object.enableForceDelegatedCallout + '</enableForceDelegatedCallout>'}
	${object.enableMultipleSamlConfigs == null ? '' : '<enableMultipleSamlConfigs>' + object.enableMultipleSamlConfigs + '</enableMultipleSamlConfigs>'}
	${object.enableSamlJitProvisioning == null ? '' : '<enableSamlJitProvisioning>' + object.enableSamlJitProvisioning + '</enableSamlJitProvisioning>'}
	${object.enableSamlLogin == null ? '' : '<enableSamlLogin>' + object.enableSamlLogin + '</enableSamlLogin>'}
${rootTagEnd}`;
}