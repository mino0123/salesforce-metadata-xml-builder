const ConversationVariableCollectionType = require('./ConversationVariableCollectionType');
const ConversationDataType = require('./ConversationDataType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConversationVariable>';
  var rootTagEnd = '</ConversationVariable>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SObjectType == null ? '' : '<SObjectType>' + object.SObjectType + '</SObjectType>'}
	${object.collectionType == null ? '' : '<collectionType>' + ConversationVariableCollectionType(object.collectionType, true) + '</collectionType>'}
	${object.dataType == null ? '' : '<dataType>' + ConversationDataType(object.dataType, true) + '</dataType>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}