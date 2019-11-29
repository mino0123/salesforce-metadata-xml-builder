
module.exports = (object, asChild) => {
  var rootTagStart = '<ChatterEmailsMDSettings>';
  var rootTagEnd = '</ChatterEmailsMDSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableChatterDigestEmailsApiOnly == null ? '' : '<enableChatterDigestEmailsApiOnly>' + object.enableChatterDigestEmailsApiOnly + '</enableChatterDigestEmailsApiOnly>'}
	${object.enableChatterEmailAttachment == null ? '' : '<enableChatterEmailAttachment>' + object.enableChatterEmailAttachment + '</enableChatterEmailAttachment>'}
	${object.enableCollaborationEmail == null ? '' : '<enableCollaborationEmail>' + object.enableCollaborationEmail + '</enableCollaborationEmail>'}
	${object.enableDisplayAppDownloadBadges == null ? '' : '<enableDisplayAppDownloadBadges>' + object.enableDisplayAppDownloadBadges + '</enableDisplayAppDownloadBadges>'}
	${object.enableEmailReplyToChatter == null ? '' : '<enableEmailReplyToChatter>' + object.enableEmailReplyToChatter + '</enableEmailReplyToChatter>'}
	${object.enableEmailToChatter == null ? '' : '<enableEmailToChatter>' + object.enableEmailToChatter + '</enableEmailToChatter>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}