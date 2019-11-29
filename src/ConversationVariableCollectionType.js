module.exports = (value) => {
  if (!value) { return ''; }
  if (["List"].indexOf(value) < 0) {
    throw new Error('Invalid ConversationVariableCollectionType value: ' + value);
  }
  return value;
};