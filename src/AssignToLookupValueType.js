module.exports = (value) => {
  if (!value) { return ''; }
  if (["User","Queue"].indexOf(value) < 0) {
    throw new Error('Invalid AssignToLookupValueType value: ' + value);
  }
  return value;
};