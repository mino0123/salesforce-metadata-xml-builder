const LookupValueType = require('./LookupValueType');
const FieldUpdateOperation = require('./FieldUpdateOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowFieldUpdate>';
  var rootTagEnd = '</WorkflowFieldUpdate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
	${object.literalValue == null ? '' : '<literalValue>' + object.literalValue + '</literalValue>'}
	${object.lookupValue == null ? '' : '<lookupValue>' + object.lookupValue + '</lookupValue>'}
	${object.lookupValueType == null ? '' : '<lookupValueType>' + LookupValueType(object.lookupValueType, true) + '</lookupValueType>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.notifyAssignee == null ? '' : '<notifyAssignee>' + object.notifyAssignee + '</notifyAssignee>'}
	${object.operation == null ? '' : '<operation>' + FieldUpdateOperation(object.operation, true) + '</operation>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.reevaluateOnChange == null ? '' : '<reevaluateOnChange>' + object.reevaluateOnChange + '</reevaluateOnChange>'}
	${object.targetObject == null ? '' : '<targetObject>' + object.targetObject + '</targetObject>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}