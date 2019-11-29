
module.exports = (object, asChild) => {
  var rootTagStart = '<ChatterSettings>';
  var rootTagEnd = '</ChatterSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowChatterGroupArchiving == null ? '' : '<allowChatterGroupArchiving>' + object.allowChatterGroupArchiving + '</allowChatterGroupArchiving>'}
	${object.allowRecordsInChatterGroup == null ? '' : '<allowRecordsInChatterGroup>' + object.allowRecordsInChatterGroup + '</allowRecordsInChatterGroup>'}
	${object.allowSharingInChatterGroup == null ? '' : '<allowSharingInChatterGroup>' + object.allowSharingInChatterGroup + '</allowSharingInChatterGroup>'}
	${object.enableApprovalRequest == null ? '' : '<enableApprovalRequest>' + object.enableApprovalRequest + '</enableApprovalRequest>'}
	${object.enableChatter == null ? '' : '<enableChatter>' + object.enableChatter + '</enableChatter>'}
	${object.enableChatterEmoticons == null ? '' : '<enableChatterEmoticons>' + object.enableChatterEmoticons + '</enableChatterEmoticons>'}
	${object.enableFeedEdit == null ? '' : '<enableFeedEdit>' + object.enableFeedEdit + '</enableFeedEdit>'}
	${object.enableFeedPinning == null ? '' : '<enableFeedPinning>' + object.enableFeedPinning + '</enableFeedPinning>'}
	${object.enableFeedsDraftPosts == null ? '' : '<enableFeedsDraftPosts>' + object.enableFeedsDraftPosts + '</enableFeedsDraftPosts>'}
	${object.enableFeedsRichText == null ? '' : '<enableFeedsRichText>' + object.enableFeedsRichText + '</enableFeedsRichText>'}
	${object.enableInviteCsnUsers == null ? '' : '<enableInviteCsnUsers>' + object.enableInviteCsnUsers + '</enableInviteCsnUsers>'}
	${object.enableOutOfOfficeEnabledPref == null ? '' : '<enableOutOfOfficeEnabledPref>' + object.enableOutOfOfficeEnabledPref + '</enableOutOfOfficeEnabledPref>'}
	${object.enableRichLinkPreviewsInFeed == null ? '' : '<enableRichLinkPreviewsInFeed>' + object.enableRichLinkPreviewsInFeed + '</enableRichLinkPreviewsInFeed>'}
	${object.enableTodayRecsInFeed == null ? '' : '<enableTodayRecsInFeed>' + object.enableTodayRecsInFeed + '</enableTodayRecsInFeed>'}
	${object.unlistedGroupsEnabled == null ? '' : '<unlistedGroupsEnabled>' + object.unlistedGroupsEnabled + '</unlistedGroupsEnabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}