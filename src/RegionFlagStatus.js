module.exports = (value) => {
  if (!value) { return ''; }
  if (["disabled","enabled"].indexOf(value) < 0) {
    throw new Error('Invalid RegionFlagStatus value: ' + value);
  }
  return value;
};