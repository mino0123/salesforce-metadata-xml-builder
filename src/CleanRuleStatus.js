module.exports = (value) => {
  if (!value) { return ''; }
  if (["Inactive","Active"].indexOf(value) < 0) {
    throw new Error('Invalid CleanRuleStatus value: ' + value);
  }
  return value;
};