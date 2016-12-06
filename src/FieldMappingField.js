
module.exports = (object, asChild) => {
  var rootTagStart = '<FieldMappingField>';
  var rootTagEnd = '</FieldMappingField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataServiceField == null ? '' : '<dataServiceField>' + object.dataServiceField + '</dataServiceField>'}
	${object.dataServiceObjectName == null ? '' : '<dataServiceObjectName>' + object.dataServiceObjectName + '</dataServiceObjectName>'}
	${object.priority == null ? '' : '<priority>' + object.priority + '</priority>'}
${rootTagEnd}`;
}