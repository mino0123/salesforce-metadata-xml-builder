const ValueSetValuesDefinition = require('./ValueSetValuesDefinition');
const ValueSettings = require('./ValueSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<ValueSet>';
  var rootTagEnd = '</ValueSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.controllingField == null ? '' : '<controllingField>' + object.controllingField + '</controllingField>'}
	${object.restricted == null ? '' : '<restricted>' + object.restricted + '</restricted>'}
	${object.valueSetDefinition == null ? '' : '<valueSetDefinition>' + ValueSetValuesDefinition(object.valueSetDefinition, true) + '</valueSetDefinition>'}
	${object.valueSetName == null ? '' : '<valueSetName>' + object.valueSetName + '</valueSetName>'}
	${object.valueSettings == null ? '' : object.valueSettings.map(p => '<valueSettings>' + ValueSettings(p, true) + '</valueSettings>').join('')}
${rootTagEnd}`;
}