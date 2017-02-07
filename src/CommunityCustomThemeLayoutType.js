
module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityCustomThemeLayoutType>';
  var rootTagEnd = '</CommunityCustomThemeLayoutType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}