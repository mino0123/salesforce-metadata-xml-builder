module.exports = (value) => {
  if (!value) { return ''; }
  if (["Cascade","Restrict","SetNull"].indexOf(value) < 0) {
    throw new Error('Invalid DeleteConstraint value: ' + value);
  }
  return value;
};