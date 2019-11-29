module.exports = (value) => {
  if (!value) { return ''; }
  if (["Daily","Weekly","EveryTwoWeeks","TwiceAMonth","Monthly"].indexOf(value) < 0) {
    throw new Error('Invalid TimeSheetFrequency value: ' + value);
  }
  return value;
};