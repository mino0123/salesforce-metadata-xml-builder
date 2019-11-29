const UIObjectRelationFieldConfig = require('./UIObjectRelationFieldConfig');
const ObjectRelationshipType = require('./ObjectRelationshipType');

module.exports = (object, asChild) => {
  var rootTagStart = '<UIObjectRelationConfig>';
  var rootTagEnd = '</UIObjectRelationConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.UIObjectRelationFieldConfigs == null ? '' : object.UIObjectRelationFieldConfigs.map(p => '<UIObjectRelationFieldConfigs>' + UIObjectRelationFieldConfig(p, true) + '</UIObjectRelationFieldConfigs>').join('')}
	${object.contextObject == null ? '' : '<contextObject>' + object.contextObject + '</contextObject>'}
	${object.contextObjectRecordType == null ? '' : '<contextObjectRecordType>' + object.contextObjectRecordType + '</contextObjectRecordType>'}
	${object.directRelationshipField == null ? '' : '<directRelationshipField>' + object.directRelationshipField + '</directRelationshipField>'}
	${object.indirectObjectContextField == null ? '' : '<indirectObjectContextField>' + object.indirectObjectContextField + '</indirectObjectContextField>'}
	${object.indirectObjectRelatedField == null ? '' : '<indirectObjectRelatedField>' + object.indirectObjectRelatedField + '</indirectObjectRelatedField>'}
	${object.indirectRelationshipObject == null ? '' : '<indirectRelationshipObject>' + object.indirectRelationshipObject + '</indirectRelationshipObject>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.relatedObject == null ? '' : '<relatedObject>' + object.relatedObject + '</relatedObject>'}
	${object.relatedObjectRecordType == null ? '' : '<relatedObjectRecordType>' + object.relatedObjectRecordType + '</relatedObjectRecordType>'}
	${object.relationshipType == null ? '' : '<relationshipType>' + ObjectRelationshipType(object.relationshipType, true) + '</relationshipType>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}