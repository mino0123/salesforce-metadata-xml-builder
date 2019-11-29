module.exports = (value) => {
  if (!value) { return ''; }
  if (["StandardConversationVariable","ConversationVariable","ContextVariable","MlSlotClass","StandardMlSlotClass","Value","BotDefinition","Queue"].indexOf(value) < 0) {
    throw new Error('Invalid ConversationVariableOperandSourceType value: ' + value);
  }
  return value;
};