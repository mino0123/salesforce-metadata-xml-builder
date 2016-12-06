const FieldMappingRow = require('./FieldMappingRow');

module.exports = (object, asChild) => {
  var rootTagStart = '<FieldMapping>';
  var rootTagEnd = '</FieldMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SObjectType == null ? '' : '<SObjectType>' + object.SObjectType + '</SObjectType>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.fieldMappingRows == null ? '' : object.fieldMappingRows.map(p => '<fieldMappingRows>' + FieldMappingRow(p, true) + '</fieldMappingRows>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
${rootTagEnd}`;
}