
module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeCommunitiesSettings>';
  var rootTagEnd = '</KnowledgeCommunitiesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.community == null ? '' : object.community.map(p => '<community>' + p + '</community>').join('')}
${rootTagEnd}`;
}