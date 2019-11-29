module.exports = (value) => {
  if (!value) { return ''; }
  if (["Transfer"].indexOf(value) < 0) {
    throw new Error('Invalid ConversationSystemMessageParamType value: ' + value);
  }
  return value;
};