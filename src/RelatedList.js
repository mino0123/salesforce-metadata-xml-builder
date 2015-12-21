
module.exports = (object, asChild) => {
  var rootTagStart = '<RelatedList>';
  var rootTagEnd = '</RelatedList>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.hideOnDetail == null ? '' : '<hideOnDetail>' + object.hideOnDetail + '</hideOnDetail>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}