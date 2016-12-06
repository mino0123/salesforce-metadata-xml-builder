const FieldMappingField = require('./FieldMappingField');
const MappingOperation = require('./MappingOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FieldMappingRow>';
  var rootTagEnd = '</FieldMappingRow>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SObjectType == null ? '' : '<SObjectType>' + object.SObjectType + '</SObjectType>'}
	${object.fieldMappingFields == null ? '' : object.fieldMappingFields.map(p => '<fieldMappingFields>' + FieldMappingField(p, true) + '</fieldMappingFields>').join('')}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
	${object.mappingOperation == null ? '' : '<mappingOperation>' + MappingOperation(object.mappingOperation, true) + '</mappingOperation>'}
${rootTagEnd}`;
}