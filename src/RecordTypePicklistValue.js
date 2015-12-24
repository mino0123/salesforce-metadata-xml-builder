const PicklistValue = require('./PicklistValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecordTypePicklistValue>';
  var rootTagEnd = '</RecordTypePicklistValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.picklist == null ? '' : '<picklist>' + object.picklist + '</picklist>'}
	${object.values == null ? '' : object.values.map(p => '<values>' + PicklistValue(p, true) + '</values>').join('')}
${rootTagEnd}`;
}