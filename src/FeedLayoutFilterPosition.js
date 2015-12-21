module.exports = (value) => {
  if (!value) { return ''; }
  if (["CenterDropDown","LeftFixed","LeftFloat"].indexOf(value) < 0) {
    throw new Error('Invalid FeedLayoutFilterPosition value: ' + value);
  }
  return value;
};