
module.exports = (object, asChild) => {
  var rootTagStart = '<ReputationBranding>';
  var rootTagEnd = '</ReputationBranding>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.smallImage == null ? '' : '<smallImage>' + object.smallImage + '</smallImage>'}
${rootTagEnd}`;
}