const CustomDataTypeComponentTranslation = require('./CustomDataTypeComponentTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomDataTypeTranslation>';
  var rootTagEnd = '</CustomDataTypeTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.components == null ? '' : object.components.map(p => '<components>' + CustomDataTypeComponentTranslation(p, true) + '</components>')}
	${object.customDataTypeName == null ? '' : '<customDataTypeName>' + object.customDataTypeName + '</customDataTypeName>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}