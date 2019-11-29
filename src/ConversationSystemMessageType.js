module.exports = (value) => {
  if (!value) { return ''; }
  if (["Transfer","EndChat"].indexOf(value) < 0) {
    throw new Error('Invalid ConversationSystemMessageType value: ' + value);
  }
  return value;
};