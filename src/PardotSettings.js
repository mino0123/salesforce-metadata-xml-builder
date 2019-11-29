
module.exports = (object, asChild) => {
  var rootTagStart = '<PardotSettings>';
  var rootTagEnd = '</PardotSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableB2bmaAppEnabled == null ? '' : '<enableB2bmaAppEnabled>' + object.enableB2bmaAppEnabled + '</enableB2bmaAppEnabled>'}
	${object.enableEngagementHistoryDashboards == null ? '' : '<enableEngagementHistoryDashboards>' + object.enableEngagementHistoryDashboards + '</enableEngagementHistoryDashboards>'}
	${object.enablePardotAppV1Enabled == null ? '' : '<enablePardotAppV1Enabled>' + object.enablePardotAppV1Enabled + '</enablePardotAppV1Enabled>'}
	${object.enablePardotEnabled == null ? '' : '<enablePardotEnabled>' + object.enablePardotEnabled + '</enablePardotEnabled>'}
	${object.enableProspectActivityDataset == null ? '' : '<enableProspectActivityDataset>' + object.enableProspectActivityDataset + '</enableProspectActivityDataset>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}