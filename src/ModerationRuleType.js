module.exports = (value) => {
  if (!value) { return ''; }
  if (["Content","Rate"].indexOf(value) < 0) {
    throw new Error('Invalid ModerationRuleType value: ' + value);
  }
  return value;
};