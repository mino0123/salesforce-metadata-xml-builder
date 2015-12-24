
module.exports = (object, asChild) => {
  var rootTagStart = '<PagesToOpen>';
  var rootTagEnd = '</PagesToOpen>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.pageToOpen == null ? '' : object.pageToOpen.map(p => '<pageToOpen>' + p + '</pageToOpen>').join('')}
${rootTagEnd}`;
}