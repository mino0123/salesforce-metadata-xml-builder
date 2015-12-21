module.exports = (value) => {
  if (!value) { return ''; }
  if (["BlankAsBlank","BlankAsZero"].indexOf(value) < 0) {
    throw new Error('Invalid TreatBlanksAs value: ' + value);
  }
  return value;
};