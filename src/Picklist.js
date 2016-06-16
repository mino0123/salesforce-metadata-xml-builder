const PicklistValue = require('./PicklistValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<Picklist>';
  var rootTagEnd = '</Picklist>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.controllingField == null ? '' : '<controllingField>' + object.controllingField + '</controllingField>'}
	${object.picklistValues == null ? '' : object.picklistValues.map(p => '<picklistValues>' + PicklistValue(p, true) + '</picklistValues>').join('')}
	${object.restrictedPicklist == null ? '' : '<restrictedPicklist>' + object.restrictedPicklist + '</restrictedPicklist>'}
	${object.sorted == null ? '' : '<sorted>' + object.sorted + '</sorted>'}
${rootTagEnd}`;
}