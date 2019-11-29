module.exports = (value) => {
  if (!value) { return ''; }
  if (["Scoping","Restrict"].indexOf(value) < 0) {
    throw new Error('Invalid EnforcementType value: ' + value);
  }
  return value;
};