module.exports = (value) => {
  if (!value) { return ''; }
  if (["Once","Daily","Weekly"].indexOf(value) < 0) {
    throw new Error('Invalid FlowStartFrequency value: ' + value);
  }
  return value;
};