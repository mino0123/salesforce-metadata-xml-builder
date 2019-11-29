module.exports = (value) => {
  if (!value) { return ''; }
  if (["Flow","QuickAction"].indexOf(value) < 0) {
    throw new Error('Invalid RecordActionType value: ' + value);
  }
  return value;
};