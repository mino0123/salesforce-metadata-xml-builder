
module.exports = (object, asChild) => {
  var rootTagStart = '<ExternalServiceRegistration>';
  var rootTagEnd = '</ExternalServiceRegistration>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.namedCredential == null ? '' : '<namedCredential>' + object.namedCredential + '</namedCredential>'}
	${object.schema == null ? '' : '<schema>' + object.schema + '</schema>'}
	${object.schemaType == null ? '' : '<schemaType>' + object.schemaType + '</schemaType>'}
	${object.schemaUrl == null ? '' : '<schemaUrl>' + object.schemaUrl + '</schemaUrl>'}
	${object.status == null ? '' : '<status>' + object.status + '</status>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}