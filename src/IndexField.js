
module.exports = (object, asChild) => {
  var rootTagStart = '<IndexField>';
  var rootTagEnd = '</IndexField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.sortDirection == null ? '' : '<sortDirection>' + object.sortDirection + '</sortDirection>'}
${rootTagEnd}`;
}