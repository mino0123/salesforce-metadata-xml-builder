const SortOrder = require('./SortOrder');
const FieldType = require('./FieldType');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomDataTypeComponent>';
  var rootTagEnd = '</CustomDataTypeComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.developerSuffix == null ? '' : '<developerSuffix>' + object.developerSuffix + '</developerSuffix>'}
	${object.enforceFieldRequiredness == null ? '' : '<enforceFieldRequiredness>' + object.enforceFieldRequiredness + '</enforceFieldRequiredness>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.length == null ? '' : '<length>' + object.length + '</length>'}
	${object.precision == null ? '' : '<precision>' + object.precision + '</precision>'}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + SortOrder(object.sortOrder, true) + '</sortOrder>'}
	${object.sortPriority == null ? '' : '<sortPriority>' + object.sortPriority + '</sortPriority>'}
	${object.type == null ? '' : '<type>' + FieldType(object.type, true) + '</type>'}
${rootTagEnd}`;
}