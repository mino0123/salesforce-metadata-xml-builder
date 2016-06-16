const Keyword = require('./Keyword');

module.exports = (object, asChild) => {
  var rootTagStart = '<KeywordList>';
  var rootTagEnd = '</KeywordList>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.keywords == null ? '' : object.keywords.map(p => '<keywords>' + Keyword(p, true) + '</keywords>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}