module.exports = (value) => {
  if (!value) { return ''; }
  if (["Scheduled"].indexOf(value) < 0) {
    throw new Error('Invalid FlowTriggerType value: ' + value);
  }
  return value;
};