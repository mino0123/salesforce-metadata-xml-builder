module.exports = (value) => {
  if (!value) { return ''; }
  if (["Session","Organization"].indexOf(value) < 0) {
    throw new Error('Invalid PlatformCacheType value: ' + value);
  }
  return value;
};