module.exports = (value) => {
  if (!value) { return ''; }
  if (["Autofill","Overwrite"].indexOf(value) < 0) {
    throw new Error('Invalid MappingOperation value: ' + value);
  }
  return value;
};