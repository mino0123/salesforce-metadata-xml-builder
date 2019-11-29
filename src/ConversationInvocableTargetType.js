module.exports = (value) => {
  if (!value) { return ''; }
  if (["apex","flow","standardInvocableAction"].indexOf(value) < 0) {
    throw new Error('Invalid ConversationInvocableTargetType value: ' + value);
  }
  return value;
};