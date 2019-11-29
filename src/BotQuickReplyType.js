module.exports = (value) => {
  if (!value) { return ''; }
  if (["Static","Dynamic"].indexOf(value) < 0) {
    throw new Error('Invalid BotQuickReplyType value: ' + value);
  }
  return value;
};