module.exports = (value) => {
  if (!value) { return ''; }
  if (["Primary","Overflow"].indexOf(value) < 0) {
    throw new Error('Invalid PlatformActionGroupCategory value: ' + value);
  }
  return value;
};