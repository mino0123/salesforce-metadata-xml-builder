
module.exports = (object, asChild) => {
  var rootTagStart = '<EventSettings>';
  var rootTagEnd = '</EventSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableApexLimitEvents == null ? '' : '<enableApexLimitEvents>' + object.enableApexLimitEvents + '</enableApexLimitEvents>'}
	${object.enableDeleteMonitoringData == null ? '' : '<enableDeleteMonitoringData>' + object.enableDeleteMonitoringData + '</enableDeleteMonitoringData>'}
	${object.enableDynamicStreamingChannel == null ? '' : '<enableDynamicStreamingChannel>' + object.enableDynamicStreamingChannel + '</enableDynamicStreamingChannel>'}
	${object.enableEventLogWaveIntegration == null ? '' : '<enableEventLogWaveIntegration>' + object.enableEventLogWaveIntegration + '</enableEventLogWaveIntegration>'}
	${object.enableLoginForensics == null ? '' : '<enableLoginForensics>' + object.enableLoginForensics + '</enableLoginForensics>'}
	${object.enableStreamingApi == null ? '' : '<enableStreamingApi>' + object.enableStreamingApi + '</enableStreamingApi>'}
	${object.enableTerminateOldestSession == null ? '' : '<enableTerminateOldestSession>' + object.enableTerminateOldestSession + '</enableTerminateOldestSession>'}
	${object.enableTransactionSecurityPolicies == null ? '' : '<enableTransactionSecurityPolicies>' + object.enableTransactionSecurityPolicies + '</enableTransactionSecurityPolicies>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}