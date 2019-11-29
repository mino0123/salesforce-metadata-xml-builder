
module.exports = (object, asChild) => {
  var rootTagStart = '<GoogleAppsSettings>';
  var rootTagEnd = '</GoogleAppsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableGmailButtons == null ? '' : '<enableGmailButtons>' + object.enableGmailButtons + '</enableGmailButtons>'}
	${object.enableGmailButtonsAndLinks == null ? '' : '<enableGmailButtonsAndLinks>' + object.enableGmailButtonsAndLinks + '</enableGmailButtonsAndLinks>'}
	${object.enableGmailLinks == null ? '' : '<enableGmailLinks>' + object.enableGmailLinks + '</enableGmailLinks>'}
	${object.enableGoogleDocs == null ? '' : '<enableGoogleDocs>' + object.enableGoogleDocs + '</enableGoogleDocs>'}
	${object.enableGoogleDocsTab == null ? '' : '<enableGoogleDocsTab>' + object.enableGoogleDocsTab + '</enableGoogleDocsTab>'}
	${object.enableGoogleTalk == null ? '' : '<enableGoogleTalk>' + object.enableGoogleTalk + '</enableGoogleTalk>'}
	${object.googleAppsDomain == null ? '' : '<googleAppsDomain>' + object.googleAppsDomain + '</googleAppsDomain>'}
	${object.googleAppsDomainLinked == null ? '' : '<googleAppsDomainLinked>' + object.googleAppsDomainLinked + '</googleAppsDomainLinked>'}
	${object.googleAppsDomainValidated == null ? '' : '<googleAppsDomainValidated>' + object.googleAppsDomainValidated + '</googleAppsDomainValidated>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}