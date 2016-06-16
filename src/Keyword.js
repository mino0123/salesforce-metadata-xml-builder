
module.exports = (object, asChild) => {
  var rootTagStart = '<Keyword>';
  var rootTagEnd = '</Keyword>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.keyword == null ? '' : '<keyword>' + object.keyword + '</keyword>'}
${rootTagEnd}`;
}