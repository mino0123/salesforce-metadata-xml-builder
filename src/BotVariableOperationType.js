module.exports = (value) => {
  if (!value) { return ''; }
  if (["Set","Unset","Collect"].indexOf(value) < 0) {
    throw new Error('Invalid BotVariableOperationType value: ' + value);
  }
  return value;
};