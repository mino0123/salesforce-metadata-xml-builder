
module.exports = (object, asChild) => {
  var rootTagStart = '<LetterheadLine>';
  var rootTagEnd = '</LetterheadLine>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.color == null ? '' : '<color>' + object.color + '</color>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
${rootTagEnd}`;
}