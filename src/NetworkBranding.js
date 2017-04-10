
module.exports = (object, asChild) => {
  var rootTagStart = '<NetworkBranding>';
  var rootTagEnd = '</NetworkBranding>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.loginFooterText == null ? '' : '<loginFooterText>' + object.loginFooterText + '</loginFooterText>'}
	${object.loginLogo == null ? '' : '<loginLogo>' + object.loginLogo + '</loginLogo>'}
	${object.loginLogoName == null ? '' : '<loginLogoName>' + object.loginLogoName + '</loginLogoName>'}
	${object.loginPrimaryColor == null ? '' : '<loginPrimaryColor>' + object.loginPrimaryColor + '</loginPrimaryColor>'}
	${object.loginQuaternaryColor == null ? '' : '<loginQuaternaryColor>' + object.loginQuaternaryColor + '</loginQuaternaryColor>'}
	${object.loginRightFrameUrl == null ? '' : '<loginRightFrameUrl>' + object.loginRightFrameUrl + '</loginRightFrameUrl>'}
	${object.network == null ? '' : '<network>' + object.network + '</network>'}
	${object.pageFooter == null ? '' : '<pageFooter>' + object.pageFooter + '</pageFooter>'}
	${object.pageHeader == null ? '' : '<pageHeader>' + object.pageHeader + '</pageHeader>'}
	${object.primaryColor == null ? '' : '<primaryColor>' + object.primaryColor + '</primaryColor>'}
	${object.primaryComplementColor == null ? '' : '<primaryComplementColor>' + object.primaryComplementColor + '</primaryComplementColor>'}
	${object.quaternaryColor == null ? '' : '<quaternaryColor>' + object.quaternaryColor + '</quaternaryColor>'}
	${object.quaternaryComplementColor == null ? '' : '<quaternaryComplementColor>' + object.quaternaryComplementColor + '</quaternaryComplementColor>'}
	${object.secondaryColor == null ? '' : '<secondaryColor>' + object.secondaryColor + '</secondaryColor>'}
	${object.staticLogoImageUrl == null ? '' : '<staticLogoImageUrl>' + object.staticLogoImageUrl + '</staticLogoImageUrl>'}
	${object.tertiaryColor == null ? '' : '<tertiaryColor>' + object.tertiaryColor + '</tertiaryColor>'}
	${object.tertiaryComplementColor == null ? '' : '<tertiaryComplementColor>' + object.tertiaryComplementColor + '</tertiaryComplementColor>'}
	${object.zeronaryColor == null ? '' : '<zeronaryColor>' + object.zeronaryColor + '</zeronaryColor>'}
	${object.zeronaryComplementColor == null ? '' : '<zeronaryComplementColor>' + object.zeronaryComplementColor + '</zeronaryComplementColor>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}