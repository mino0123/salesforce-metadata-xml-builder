
module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedAppAttribute>';
  var rootTagEnd = '</ConnectedAppAttribute>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
	${object.key == null ? '' : '<key>' + object.key + '</key>'}
${rootTagEnd}`;
}