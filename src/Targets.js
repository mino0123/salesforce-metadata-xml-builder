
module.exports = (object, asChild) => {
  var rootTagStart = '<Targets>';
  var rootTagEnd = '</Targets>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.target == null ? '' : object.target.map(p => '<target>' + p + '</target>').join('')}
${rootTagEnd}`;
}