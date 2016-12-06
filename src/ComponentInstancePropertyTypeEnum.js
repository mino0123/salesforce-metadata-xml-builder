module.exports = (value) => {
  if (!value) { return ''; }
  if (["decorator"].indexOf(value) < 0) {
    throw new Error('Invalid ComponentInstancePropertyTypeEnum value: ' + value);
  }
  return value;
};