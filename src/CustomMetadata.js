const CustomMetadataValue = require('./CustomMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomMetadata>';
  var rootTagEnd = '</CustomMetadata>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.values == null ? '' : object.values.map(p => '<values>' + CustomMetadataValue(p, true) + '</values>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}