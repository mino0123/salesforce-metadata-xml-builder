const ValueTypeField = require('./ValueTypeField');
const PicklistEntry = require('./PicklistEntry');

module.exports = (object, asChild) => {
  var rootTagStart = '<ValueTypeField>';
  var rootTagEnd = '</ValueTypeField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + ValueTypeField(p, true) + '</fields>')}
	${object.foreignKeyDomain == null ? '' : object.foreignKeyDomain.map(p => '<foreignKeyDomain>' + p + '</foreignKeyDomain>')}
	${object.isForeignKey == null ? '' : '<isForeignKey>' + object.isForeignKey + '</isForeignKey>'}
	${object.isNameField == null ? '' : '<isNameField>' + object.isNameField + '</isNameField>'}
	${object.minOccurs == null ? '' : '<minOccurs>' + object.minOccurs + '</minOccurs>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.picklistValues == null ? '' : object.picklistValues.map(p => '<picklistValues>' + PicklistEntry(p, true) + '</picklistValues>')}
	${object.soapType == null ? '' : '<soapType>' + object.soapType + '</soapType>'}
	${object.valueRequired == null ? '' : '<valueRequired>' + object.valueRequired + '</valueRequired>'}
${rootTagEnd}`;
}