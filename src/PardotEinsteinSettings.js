
module.exports = (object, asChild) => {
  var rootTagStart = '<PardotEinsteinSettings>';
  var rootTagEnd = '</PardotEinsteinSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCampaignInsight == null ? '' : '<enableCampaignInsight>' + object.enableCampaignInsight + '</enableCampaignInsight>'}
	${object.enableEngagementScore == null ? '' : '<enableEngagementScore>' + object.enableEngagementScore + '</enableEngagementScore>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}