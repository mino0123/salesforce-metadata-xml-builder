const Article = require('./Article');
const CaseType = require('./CaseType');
const Possessive = require('./Possessive');

module.exports = (object, asChild) => {
  var rootTagStart = '<ObjectNameCaseValue>';
  var rootTagEnd = '</ObjectNameCaseValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.article == null ? '' : '<article>' + Article(object.article, true) + '</article>'}
	${object.caseType == null ? '' : '<caseType>' + CaseType(object.caseType, true) + '</caseType>'}
	${object.plural == null ? '' : '<plural>' + object.plural + '</plural>'}
	${object.possessive == null ? '' : '<possessive>' + Possessive(object.possessive, true) + '</possessive>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}