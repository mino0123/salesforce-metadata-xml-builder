
module.exports = (object, asChild) => {
  var rootTagStart = '<Role>';
  var rootTagEnd = '</Role>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.parentRole == null ? '' : '<parentRole>' + object.parentRole + '</parentRole>'}
${rootTagEnd}`;
}