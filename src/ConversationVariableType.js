module.exports = (value) => {
  if (!value) { return ''; }
  if (["ConversationVariable","ContextVariable"].indexOf(value) < 0) {
    throw new Error('Invalid ConversationVariableType value: ' + value);
  }
  return value;
};