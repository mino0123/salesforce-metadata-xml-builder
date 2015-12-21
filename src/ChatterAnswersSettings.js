
module.exports = (object, asChild) => {
  var rootTagStart = '<ChatterAnswersSettings>';
  var rootTagEnd = '</ChatterAnswersSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.emailFollowersOnBestAnswer == null ? '' : '<emailFollowersOnBestAnswer>' + object.emailFollowersOnBestAnswer + '</emailFollowersOnBestAnswer>'}
	${object.emailFollowersOnReply == null ? '' : '<emailFollowersOnReply>' + object.emailFollowersOnReply + '</emailFollowersOnReply>'}
	${object.emailOwnerOnPrivateReply == null ? '' : '<emailOwnerOnPrivateReply>' + object.emailOwnerOnPrivateReply + '</emailOwnerOnPrivateReply>'}
	${object.emailOwnerOnReply == null ? '' : '<emailOwnerOnReply>' + object.emailOwnerOnReply + '</emailOwnerOnReply>'}
	${object.enableAnswerViaEmail == null ? '' : '<enableAnswerViaEmail>' + object.enableAnswerViaEmail + '</enableAnswerViaEmail>'}
	${object.enableChatterAnswers == null ? '' : '<enableChatterAnswers>' + object.enableChatterAnswers + '</enableChatterAnswers>'}
	${object.enableFacebookSSO == null ? '' : '<enableFacebookSSO>' + object.enableFacebookSSO + '</enableFacebookSSO>'}
	${object.enableInlinePublisher == null ? '' : '<enableInlinePublisher>' + object.enableInlinePublisher + '</enableInlinePublisher>'}
	${object.enableReputation == null ? '' : '<enableReputation>' + object.enableReputation + '</enableReputation>'}
	${object.enableRichTextEditor == null ? '' : '<enableRichTextEditor>' + object.enableRichTextEditor + '</enableRichTextEditor>'}
	${object.facebookAuthProvider == null ? '' : '<facebookAuthProvider>' + object.facebookAuthProvider + '</facebookAuthProvider>'}
	${object.showInPortals == null ? '' : '<showInPortals>' + object.showInPortals + '</showInPortals>'}
${rootTagEnd}`;
}