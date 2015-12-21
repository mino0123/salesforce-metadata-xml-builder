
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileApplicationVisibility>';
  var rootTagEnd = '</ProfileApplicationVisibility>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.application == null ? '' : '<application>' + object.application + '</application>'}
	${object.default == null ? '' : '<default>' + object.default + '</default>'}
	${object.visible == null ? '' : '<visible>' + object.visible + '</visible>'}
${rootTagEnd}`;
}