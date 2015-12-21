module.exports = (value) => {
  if (!value) { return ''; }
  if (["User","Queue","RecordType"].indexOf(value) < 0) {
    throw new Error('Invalid LookupValueType value: ' + value);
  }
  return value;
};