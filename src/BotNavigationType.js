module.exports = (value) => {
  if (!value) { return ''; }
  if (["Call","Redirect","TransferToAgent"].indexOf(value) < 0) {
    throw new Error('Invalid BotNavigationType value: ' + value);
  }
  return value;
};