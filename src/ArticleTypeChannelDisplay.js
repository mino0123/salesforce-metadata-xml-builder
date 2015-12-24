const ArticleTypeTemplate = require('./ArticleTypeTemplate');

module.exports = (object, asChild) => {
  var rootTagStart = '<ArticleTypeChannelDisplay>';
  var rootTagEnd = '</ArticleTypeChannelDisplay>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.articleTypeTemplates == null ? '' : object.articleTypeTemplates.map(p => '<articleTypeTemplates>' + ArticleTypeTemplate(p, true) + '</articleTypeTemplates>').join('')}
${rootTagEnd}`;
}