
module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeSitesSettings>';
  var rootTagEnd = '</KnowledgeSitesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.site == null ? '' : object.site.map(p => '<site>' + p + '</site>').join('')}
${rootTagEnd}`;
}