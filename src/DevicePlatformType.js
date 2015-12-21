module.exports = (value) => {
  if (!value) { return ''; }
  if (["ios","android"].indexOf(value) < 0) {
    throw new Error('Invalid DevicePlatformType value: ' + value);
  }
  return value;
};