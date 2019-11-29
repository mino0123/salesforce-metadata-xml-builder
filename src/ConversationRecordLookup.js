const ConversationRecordLookupField = require('./ConversationRecordLookupField');
const ConversationVariableType = require('./ConversationVariableType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConversationRecordLookup>';
  var rootTagEnd = '</ConversationRecordLookup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SObjectType == null ? '' : '<SObjectType>' + object.SObjectType + '</SObjectType>'}
	${object.lookupFields == null ? '' : object.lookupFields.map(p => '<lookupFields>' + ConversationRecordLookupField(p, true) + '</lookupFields>').join('')}
	${object.maxLookupResults == null ? '' : '<maxLookupResults>' + object.maxLookupResults + '</maxLookupResults>'}
	${object.sourceVariableName == null ? '' : '<sourceVariableName>' + object.sourceVariableName + '</sourceVariableName>'}
	${object.sourceVariableType == null ? '' : '<sourceVariableType>' + ConversationVariableType(object.sourceVariableType, true) + '</sourceVariableType>'}
	${object.targetVariableName == null ? '' : '<targetVariableName>' + object.targetVariableName + '</targetVariableName>'}
${rootTagEnd}`;
}