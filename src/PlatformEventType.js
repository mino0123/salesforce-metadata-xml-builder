module.exports = (value) => {
  if (!value) { return ''; }
  if (["HighVolume","StandardVolume"].indexOf(value) < 0) {
    throw new Error('Invalid PlatformEventType value: ' + value);
  }
  return value;
};