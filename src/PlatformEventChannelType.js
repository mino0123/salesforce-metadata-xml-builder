module.exports = (value) => {
  if (!value) { return ''; }
  if (["event","data"].indexOf(value) < 0) {
    throw new Error('Invalid PlatformEventChannelType value: ' + value);
  }
  return value;
};