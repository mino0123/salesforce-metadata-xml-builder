const KnowledgeLanguage = require('./KnowledgeLanguage');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeLanguageSettings>';
  var rootTagEnd = '</KnowledgeLanguageSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.language == null ? '' : object.language.map(p => '<language>' + KnowledgeLanguage(p, true) + '</language>').join('')}
${rootTagEnd}`;
}