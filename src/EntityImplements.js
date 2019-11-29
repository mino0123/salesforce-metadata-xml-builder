const FieldImplements = require('./FieldImplements');

module.exports = (object, asChild) => {
  var rootTagStart = '<EntityImplements>';
  var rootTagEnd = '</EntityImplements>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldMap == null ? '' : object.fieldMap.map(p => '<fieldMap>' + FieldImplements(p, true) + '</fieldMap>').join('')}
	${object.interface == null ? '' : '<interface>' + object.interface + '</interface>'}
	${object.isDefault == null ? '' : '<isDefault>' + object.isDefault + '</isDefault>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}