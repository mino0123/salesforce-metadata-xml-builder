
module.exports = (object, asChild) => {
  var rootTagStart = '<CampaignSettings>';
  var rootTagEnd = '</CampaignSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAutoCampInfluenceDisabled == null ? '' : '<enableAutoCampInfluenceDisabled>' + object.enableAutoCampInfluenceDisabled + '</enableAutoCampInfluenceDisabled>'}
	${object.enableB2bmaCampaignInfluence2 == null ? '' : '<enableB2bmaCampaignInfluence2>' + object.enableB2bmaCampaignInfluence2 + '</enableB2bmaCampaignInfluence2>'}
	${object.enableCampaignHistoryTrackEnabled == null ? '' : '<enableCampaignHistoryTrackEnabled>' + object.enableCampaignHistoryTrackEnabled + '</enableCampaignHistoryTrackEnabled>'}
	${object.enableCampaignInfluence2 == null ? '' : '<enableCampaignInfluence2>' + object.enableCampaignInfluence2 + '</enableCampaignInfluence2>'}
	${object.enableCampaignMemberTWCF == null ? '' : '<enableCampaignMemberTWCF>' + object.enableCampaignMemberTWCF + '</enableCampaignMemberTWCF>'}
	${object.enableSuppressNoValueCI2 == null ? '' : '<enableSuppressNoValueCI2>' + object.enableSuppressNoValueCI2 + '</enableSuppressNoValueCI2>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}