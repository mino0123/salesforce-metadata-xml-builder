const RecordTypePicklistValue = require('./RecordTypePicklistValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecordType>';
  var rootTagEnd = '</RecordType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.businessProcess == null ? '' : '<businessProcess>' + object.businessProcess + '</businessProcess>'}
	${object.compactLayoutAssignment == null ? '' : '<compactLayoutAssignment>' + object.compactLayoutAssignment + '</compactLayoutAssignment>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.picklistValues == null ? '' : object.picklistValues.map(p => '<picklistValues>' + RecordTypePicklistValue(p, true) + '</picklistValues>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}