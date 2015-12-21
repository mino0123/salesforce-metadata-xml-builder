
module.exports = (object, asChild) => {
  var rootTagStart = '<Group>';
  var rootTagEnd = '</Group>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.doesIncludeBosses == null ? '' : '<doesIncludeBosses>' + object.doesIncludeBosses + '</doesIncludeBosses>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}