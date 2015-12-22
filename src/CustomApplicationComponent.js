
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomApplicationComponent>';
  var rootTagEnd = '</CustomApplicationComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.buttonIconUrl == null ? '' : '<buttonIconUrl>' + object.buttonIconUrl + '</buttonIconUrl>'}
	${object.buttonStyle == null ? '' : '<buttonStyle>' + object.buttonStyle + '</buttonStyle>'}
	${object.buttonText == null ? '' : '<buttonText>' + object.buttonText + '</buttonText>'}
	${object.buttonWidth == null ? '' : '<buttonWidth>' + object.buttonWidth + '</buttonWidth>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.isHeightFixed == null ? '' : '<isHeightFixed>' + object.isHeightFixed + '</isHeightFixed>'}
	${object.isHidden == null ? '' : '<isHidden>' + object.isHidden + '</isHidden>'}
	${object.isWidthFixed == null ? '' : '<isWidthFixed>' + object.isWidthFixed + '</isWidthFixed>'}
	${object.visualforcePage == null ? '' : '<visualforcePage>' + object.visualforcePage + '</visualforcePage>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}