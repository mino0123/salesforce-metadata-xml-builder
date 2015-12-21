module.exports = (value) => {
  if (!value) { return ''; }
  if (["AdminOnly","AdminOrCurrentApprover"].indexOf(value) < 0) {
    throw new Error('Invalid RecordEditabilityType value: ' + value);
  }
  return value;
};