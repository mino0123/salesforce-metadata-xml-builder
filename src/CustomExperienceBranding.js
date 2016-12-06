
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomExperienceBranding>';
  var rootTagEnd = '</CustomExperienceBranding>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.loginFooterText == null ? '' : '<loginFooterText>' + object.loginFooterText + '</loginFooterText>'}
	${object.loginLogo == null ? '' : '<loginLogo>' + object.loginLogo + '</loginLogo>'}
	${object.pageFooter == null ? '' : '<pageFooter>' + object.pageFooter + '</pageFooter>'}
	${object.pageHeader == null ? '' : '<pageHeader>' + object.pageHeader + '</pageHeader>'}
	${object.primaryColor == null ? '' : '<primaryColor>' + object.primaryColor + '</primaryColor>'}
	${object.primaryComplementColor == null ? '' : '<primaryComplementColor>' + object.primaryComplementColor + '</primaryComplementColor>'}
	${object.quaternaryColor == null ? '' : '<quaternaryColor>' + object.quaternaryColor + '</quaternaryColor>'}
	${object.quaternaryComplementColor == null ? '' : '<quaternaryComplementColor>' + object.quaternaryComplementColor + '</quaternaryComplementColor>'}
	${object.secondaryColor == null ? '' : '<secondaryColor>' + object.secondaryColor + '</secondaryColor>'}
	${object.tertiaryColor == null ? '' : '<tertiaryColor>' + object.tertiaryColor + '</tertiaryColor>'}
	${object.tertiaryComplementColor == null ? '' : '<tertiaryComplementColor>' + object.tertiaryComplementColor + '</tertiaryComplementColor>'}
	${object.zeronaryColor == null ? '' : '<zeronaryColor>' + object.zeronaryColor + '</zeronaryColor>'}
	${object.zeronaryComplementColor == null ? '' : '<zeronaryComplementColor>' + object.zeronaryComplementColor + '</zeronaryComplementColor>'}
${rootTagEnd}`;
}