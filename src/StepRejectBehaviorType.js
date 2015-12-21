module.exports = (value) => {
  if (!value) { return ''; }
  if (["RejectRequest","BackToPrevious"].indexOf(value) < 0) {
    throw new Error('Invalid StepRejectBehaviorType value: ' + value);
  }
  return value;
};