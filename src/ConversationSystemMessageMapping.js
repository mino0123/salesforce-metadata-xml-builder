const ConversationMappingType = require('./ConversationMappingType');
const ConversationSystemMessageParamType = require('./ConversationSystemMessageParamType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConversationSystemMessageMapping>';
  var rootTagEnd = '</ConversationSystemMessageMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.mappingType == null ? '' : '<mappingType>' + ConversationMappingType(object.mappingType, true) + '</mappingType>'}
	${object.parameterType == null ? '' : '<parameterType>' + ConversationSystemMessageParamType(object.parameterType, true) + '</parameterType>'}
	${object.variableName == null ? '' : '<variableName>' + object.variableName + '</variableName>'}
${rootTagEnd}`;
}