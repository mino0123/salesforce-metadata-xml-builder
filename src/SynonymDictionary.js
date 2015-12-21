const SynonymGroup = require('./SynonymGroup');

module.exports = (object, asChild) => {
  var rootTagStart = '<SynonymDictionary>';
  var rootTagEnd = '</SynonymDictionary>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.groups == null ? '' : object.groups.map(p => '<groups>' + SynonymGroup(p, true) + '</groups>')}
	${object.isProtected == null ? '' : '<isProtected>' + object.isProtected + '</isProtected>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}