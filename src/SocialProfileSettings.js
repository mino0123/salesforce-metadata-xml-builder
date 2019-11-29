
module.exports = (object, asChild) => {
  var rootTagStart = '<SocialProfileSettings>';
  var rootTagEnd = '</SocialProfileSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableSocialProfiles == null ? '' : '<enableSocialProfiles>' + object.enableSocialProfiles + '</enableSocialProfiles>'}
	${object.isFacebookSocialProfilesDisabled == null ? '' : '<isFacebookSocialProfilesDisabled>' + object.isFacebookSocialProfilesDisabled + '</isFacebookSocialProfilesDisabled>'}
	${object.isLinkedInSocialProfilesDisabled == null ? '' : '<isLinkedInSocialProfilesDisabled>' + object.isLinkedInSocialProfilesDisabled + '</isLinkedInSocialProfilesDisabled>'}
	${object.isTwitterSocialProfilesDisabled == null ? '' : '<isTwitterSocialProfilesDisabled>' + object.isTwitterSocialProfilesDisabled + '</isTwitterSocialProfilesDisabled>'}
	${object.isYouTubeSocialProfilesDisabled == null ? '' : '<isYouTubeSocialProfilesDisabled>' + object.isYouTubeSocialProfilesDisabled + '</isYouTubeSocialProfilesDisabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}