const Language = require('./Language');

module.exports = (object, asChild) => {
  var rootTagStart = '<SynonymGroup>';
  var rootTagEnd = '</SynonymGroup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.languages == null ? '' : object.languages.map(p => '<languages>' + Language(p, true) + '</languages>')}
	${object.terms == null ? '' : object.terms.map(p => '<terms>' + p + '</terms>')}
${rootTagEnd}`;
}