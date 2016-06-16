module.exports = (value) => {
  if (!value) { return ''; }
  if (["Block","FreezeAndNotify","Review","Replace","Flag"].indexOf(value) < 0) {
    throw new Error('Invalid ModerationRuleAction value: ' + value);
  }
  return value;
};