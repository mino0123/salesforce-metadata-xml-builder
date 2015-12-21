module.exports = (value) => {
  if (!value) { return ''; }
  if (["phone","tablet","minitablet"].indexOf(value) < 0) {
    throw new Error('Invalid DeviceType value: ' + value);
  }
  return value;
};