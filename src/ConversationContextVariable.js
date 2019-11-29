const ConversationContextVariableMapping = require('./ConversationContextVariableMapping');
const ConversationDataType = require('./ConversationDataType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConversationContextVariable>';
  var rootTagEnd = '</ConversationContextVariable>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SObjectType == null ? '' : '<SObjectType>' + object.SObjectType + '</SObjectType>'}
	${object.contextVariableMappings == null ? '' : object.contextVariableMappings.map(p => '<contextVariableMappings>' + ConversationContextVariableMapping(p, true) + '</contextVariableMappings>').join('')}
	${object.dataType == null ? '' : '<dataType>' + ConversationDataType(object.dataType, true) + '</dataType>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}