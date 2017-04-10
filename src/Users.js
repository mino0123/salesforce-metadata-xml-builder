
module.exports = (object, asChild) => {
  var rootTagStart = '<Users>';
  var rootTagEnd = '</Users>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.user == null ? '' : object.user.map(p => '<user>' + p + '</user>').join('')}
${rootTagEnd}`;
}