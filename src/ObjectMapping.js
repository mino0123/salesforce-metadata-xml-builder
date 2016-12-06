const ObjectMappingField = require('./ObjectMappingField');

module.exports = (object, asChild) => {
  var rootTagStart = '<ObjectMapping>';
  var rootTagEnd = '</ObjectMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.inputObject == null ? '' : '<inputObject>' + object.inputObject + '</inputObject>'}
	${object.mappingFields == null ? '' : object.mappingFields.map(p => '<mappingFields>' + ObjectMappingField(p, true) + '</mappingFields>').join('')}
	${object.outputObject == null ? '' : '<outputObject>' + object.outputObject + '</outputObject>'}
${rootTagEnd}`;
}