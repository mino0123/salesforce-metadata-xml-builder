const PicklistValueTranslation = require('./PicklistValueTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<GlobalPicklistTranslation>';
  var rootTagEnd = '</GlobalPicklistTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.picklistValues == null ? '' : object.picklistValues.map(p => '<picklistValues>' + PicklistValueTranslation(p, true) + '</picklistValues>').join('')}
${rootTagEnd}`;
}