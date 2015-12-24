
module.exports = (object, asChild) => {
  var rootTagStart = '<ObjectUsage>';
  var rootTagEnd = '</ObjectUsage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.object == null ? '' : object.object.map(p => '<object>' + p + '</object>').join('')}
${rootTagEnd}`;
}