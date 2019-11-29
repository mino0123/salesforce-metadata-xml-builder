const ConversationSystemMessageMapping = require('./ConversationSystemMessageMapping');
const ConversationSystemMessageType = require('./ConversationSystemMessageType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConversationSystemMessage>';
  var rootTagEnd = '</ConversationSystemMessage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.systemMessageMappings == null ? '' : object.systemMessageMappings.map(p => '<systemMessageMappings>' + ConversationSystemMessageMapping(p, true) + '</systemMessageMappings>').join('')}
	${object.type == null ? '' : '<type>' + ConversationSystemMessageType(object.type, true) + '</type>'}
${rootTagEnd}`;
}